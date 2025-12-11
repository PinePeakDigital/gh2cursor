// GitHub to Cursor - Content Script
// Adds "Send to Cursor" buttons to GitHub PR feedback

(function() {
  'use strict';

  // Configuration
  const CURSOR_PROTOCOL = 'cursor://';
  const BUTTON_CLASS = 'gh2cursor-button';
  const BUTTON_TEXT = 'Send to Cursor';

  /**
   * Creates a "Send to Cursor" button
   */
  function createCursorButton() {
    const button = document.createElement('button');
    button.className = `btn-sm btn ${BUTTON_CLASS}`;
    button.type = 'button';
    button.textContent = BUTTON_TEXT;
    button.title = 'Send this feedback to Cursor chat';
    return button;
  }

  /**
   * Extracts feedback text from a comment element
   */
  function extractFeedbackText(commentElement) {
    // Try to find the comment body
    const commentBody = commentElement.querySelector('.comment-body');
    if (commentBody) {
      return commentBody.innerText.trim();
    }
    return '';
  }

  /**
   * Extracts context about the PR and file from the page
   */
  function extractPRContext(commentElement) {
    const context = {
      pr: '',
      file: '',
      line: '',
      author: ''
    };

    // Extract PR info from the page title or URL
    const prMatch = window.location.pathname.match(/\/pull\/(\d+)/);
    if (prMatch) {
      context.pr = `PR #${prMatch[1]}`;
    }

    // Try to find the file path
    const fileHeader = commentElement.closest('.file')?.querySelector('.file-header');
    if (fileHeader) {
      const filePath = fileHeader.querySelector('[data-path]')?.getAttribute('data-path');
      if (filePath) {
        context.file = filePath;
      }
    }

    // Try to find line number
    const lineNumber = commentElement.closest('[data-line]')?.getAttribute('data-line');
    if (lineNumber) {
      context.line = `Line ${lineNumber}`;
    }

    // Try to find the comment author
    const authorElement = commentElement.querySelector('.author');
    if (authorElement) {
      context.author = authorElement.innerText.trim();
    }

    return context;
  }

  /**
   * Formats the feedback message for Cursor
   */
  function formatFeedbackForCursor(feedback, context) {
    let message = '';
    
    if (context.pr) {
      message += `${context.pr}`;
    }
    if (context.file) {
      message += ` - ${context.file}`;
    }
    if (context.line) {
      message += ` (${context.line})`;
    }
    if (context.author) {
      message += `\nFrom: ${context.author}`;
    }
    
    message += '\n\n' + feedback;
    
    return message;
  }

  /**
   * Sends feedback to Cursor by copying to clipboard and showing instructions
   */
  function sendToCursor(feedback, context) {
    const formattedMessage = formatFeedbackForCursor(feedback, context);
    
    // Copy to clipboard
    navigator.clipboard.writeText(formattedMessage).then(() => {
      // Show success message
      showNotification('Feedback copied to clipboard! Paste it into Cursor chat.', 'success');
    }).catch(err => {
      console.error('Failed to copy to clipboard:', err);
      showNotification('Failed to copy to clipboard. Please try again.', 'error');
    });
  }

  /**
   * Shows a temporary notification
   */
  function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `gh2cursor-notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Fade in
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }

  /**
   * Adds a "Send to Cursor" button to a comment element
   */
  function addButtonToComment(commentElement) {
    // Check if button already exists
    if (commentElement.querySelector(`.${BUTTON_CLASS}`)) {
      return;
    }

    // Find the toolbar or action area to add the button
    const toolbar = commentElement.querySelector('.timeline-comment-actions') || 
                   commentElement.querySelector('.review-comment-actions');
    
    if (!toolbar) {
      return;
    }

    const button = createCursorButton();
    
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const feedback = extractFeedbackText(commentElement);
      if (!feedback) {
        showNotification('No feedback text found', 'error');
        return;
      }
      
      const context = extractPRContext(commentElement);
      sendToCursor(feedback, context);
    });

    // Insert button at the beginning of the toolbar
    toolbar.insertBefore(button, toolbar.firstChild);
  }

  /**
   * Processes all comments on the page
   */
  function processComments() {
    // Find all PR review comments
    const reviewComments = document.querySelectorAll('.review-comment');
    reviewComments.forEach(comment => {
      addButtonToComment(comment);
    });

    // Find all timeline comments (general PR comments)
    const timelineComments = document.querySelectorAll('.timeline-comment');
    timelineComments.forEach(comment => {
      addButtonToComment(comment);
    });

    // Find all issue comments
    const issueComments = document.querySelectorAll('.js-comment');
    issueComments.forEach(comment => {
      addButtonToComment(comment);
    });
  }

  /**
   * Initialize the extension
   */
  function init() {
    // Process existing comments
    processComments();

    // Watch for new comments added dynamically
    const observer = new MutationObserver((mutations) => {
      let shouldProcess = false;
      
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          shouldProcess = true;
          break;
        }
      }
      
      if (shouldProcess) {
        processComments();
      }
    });

    // Observe the main content area for changes
    const mainContent = document.querySelector('#js-repo-pjax-container') || 
                       document.querySelector('body');
    
    if (mainContent) {
      observer.observe(mainContent, {
        childList: true,
        subtree: true
      });
    }
  }

  // Wait for the page to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
