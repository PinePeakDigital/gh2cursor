# Usage Guide

## How to Use GitHub to Cursor Extension

### Step 1: Navigate to a GitHub Pull Request

Open any GitHub repository and navigate to the Pull Requests section. Open any PR to view comments and feedback.

### Step 2: Locate the "Send to Cursor" Button

Once the extension is loaded, you'll see a green **"Send to Cursor"** button next to each comment in the PR.

The button appears in these locations:
- ✅ Next to review comments on specific code lines
- ✅ Next to general PR comments
- ✅ Next to issue comments (if viewing issues)

### Step 3: Click the Button

Click the **"Send to Cursor"** button next to any comment you want to send to Cursor.

### Step 4: Confirmation

A green notification will appear in the top-right corner saying:
> "Feedback copied to clipboard! Paste it into Cursor chat."

### Step 5: Paste into Cursor

1. Open Cursor editor
2. Open the Cursor chat panel (usually Cmd+L or Ctrl+L)
3. Paste the copied content (Cmd+V or Ctrl+V)
4. The formatted feedback will appear with context

## What Gets Copied

The extension formats the feedback with useful context. Here's an example:

```
PR #456 - src/components/Header.tsx (Line 23)
From: reviewer-username

Consider extracting this logic into a separate hook for better reusability.
This would also make it easier to test in isolation.
```

### Format Breakdown:

1. **PR Number**: The pull request number (e.g., `PR #456`)
2. **File Path**: The file being reviewed (e.g., `src/components/Header.tsx`)
3. **Line Number**: The specific line (if it's a line-specific comment)
4. **Author**: Who wrote the comment
5. **Comment Content**: The actual feedback text

## Tips and Tricks

### Multiple Comments

You can click multiple "Send to Cursor" buttons in sequence:
1. Click first button → Comment 1 copied
2. Open a text editor
3. Paste comment 1
4. Click second button → Comment 2 copied
5. Paste comment 2 below comment 1
6. Copy all comments together and paste into Cursor

### Context Filtering

The extension intelligently extracts context:
- If viewing a general PR comment, it includes PR number only
- If viewing a file-specific comment, it includes file path
- If viewing a line-specific comment, it includes line number

### Working with Different Comment Types

#### Review Comments (on specific code lines)
These include the most context: PR, file, line, and author

#### General PR Comments
These include: PR and author

#### Issue Comments
These work too! Great for copying issue discussions into Cursor

## Keyboard Shortcuts

While the extension doesn't add custom keyboard shortcuts, you can use Chrome's built-in accessibility features:
1. Use `Tab` to navigate to the button
2. Press `Enter` or `Space` to click
3. Use `Ctrl+V` / `Cmd+V` to paste in Cursor

## Troubleshooting Common Issues

### Button Not Visible?
- Refresh the page (Ctrl+Shift+R / Cmd+Shift+R)
- Check that the extension is enabled in chrome://extensions/
- Make sure you're on a GitHub PR or issue page

### Notification Doesn't Appear?
- The notification appears for 3 seconds in the top-right corner
- Check your browser zoom level (works best at 100%)
- Look for browser permission dialogs

### Clipboard Not Working?
- Make sure you've granted clipboard permissions to GitHub
- Try clicking the button again
- Check the browser console (F12) for error messages

### Formatting Issues in Cursor?
- The extension copies plain text with line breaks
- If formatting looks odd, try pasting in a different format
- You can manually edit the pasted text before sending to Cursor

## Best Practices

### 1. Review Before Pasting
Always review the copied text before pasting into Cursor. You might want to:
- Add additional context
- Remove sensitive information
- Combine multiple comments
- Add your own questions or notes

### 2. Batch Processing
For multiple related comments:
1. Copy each comment to a text file
2. Organize and edit them
3. Paste the compiled feedback into Cursor as one message

### 3. Use with Cursor Commands
Combine the copied feedback with Cursor's AI commands:
- "Fix the issues mentioned in this feedback"
- "Refactor this code based on the review comments"
- "Explain why this suggestion makes sense"

### 4. Keep Context
When copying line-specific comments, consider opening the file in Cursor first, so the AI has full context about the code being discussed.

## Privacy and Security

The extension:
- ✅ Only runs on github.com
- ✅ Does not send data to external servers
- ✅ Only accesses clipboard when you click the button
- ✅ Does not store any data
- ✅ Source code is fully open and auditable

## Feature Requests

Have ideas for improvements? Open an issue on [GitHub](https://github.com/PinePeakDigital/gh2cursor/issues) with the "enhancement" label.

Common requests already considered:
- Custom keyboard shortcuts (coming soon)
- Batch copy multiple comments at once (coming soon)
- Integration with other editors (VS Code, etc.)
- Direct deep-linking to Cursor (if Cursor adds protocol support)
