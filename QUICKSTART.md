# Quick Start Guide

Get up and running with the GitHub to Cursor extension in 2 minutes!

## For Users

### Install (30 seconds)

1. Download or clone this repo
2. Open `chrome://extensions/` in Chrome
3. Enable "Developer mode" (top-right toggle)
4. Click "Load unpacked"
5. Select the `gh2cursor` folder

✅ Done! The extension is now active.

### Use (10 seconds)

1. Open any GitHub Pull Request
2. Find the green "Send to Cursor" button next to comments
3. Click it → feedback copied to clipboard
4. Paste into Cursor chat

## For Developers

### Project Structure

```
gh2cursor/
├── manifest.json          # Chrome extension config
├── content.js            # Main script (button injection)
├── styles.css            # Button & notification styles
├── icons/                # Extension icons (16, 48, 128)
├── test-page.html        # Local testing page
├── README.md             # Overview
├── INSTALL.md            # Detailed installation
├── USAGE_GUIDE.md        # Comprehensive usage docs
└── .gitignore            # Git ignore rules
```

### How It Works

1. **Content Script** (`content.js`) runs on all GitHub pages
2. **Button Injection**: Finds comment elements, adds "Send to Cursor" buttons
3. **Context Extraction**: Pulls PR #, file path, line #, author from DOM
4. **Clipboard Copy**: Formats and copies to clipboard with `navigator.clipboard.writeText()`
5. **Notification**: Shows success/error toast notification
6. **MutationObserver**: Watches for dynamic comments (GitHub's SPA behavior)

### Key Features

- ✨ Works with GitHub's SPA (single-page app) navigation
- 🎯 Optimized MutationObserver (only processes comment-related changes)
- 🌓 Light/dark mode support
- 📱 Responsive notifications
- 🔒 No external dependencies
- 🚀 Minimal performance impact

### Testing Locally

**Option 1: GitHub PR (recommended)**
```bash
# Just load the extension and visit any GitHub PR
# Example: https://github.com/microsoft/vscode/pulls
```

**Option 2: Test Page**
```bash
# 1. Enable "Allow access to file URLs" in extension settings
# 2. Open test-page.html in Chrome
# 3. Click buttons to test functionality
```

### Making Changes

1. **Edit files** (content.js, styles.css, manifest.json)
2. **Reload extension**:
   - Go to `chrome://extensions/`
   - Click reload icon on "GitHub to Cursor" card
3. **Refresh GitHub page** (Ctrl+Shift+R)
4. **Test changes**

### Debugging

Open DevTools (F12) on any GitHub page:
- **Console**: Check for errors or logs
- **Network**: Monitor API calls (if any added)
- **Elements**: Inspect injected buttons
- **Sources**: Debug content.js with breakpoints

### Common Dev Tasks

**Add a new selector for comments:**
```javascript
// In processComments() function
const newCommentType = document.querySelectorAll('.new-selector');
newCommentType.forEach(comment => {
  addButtonToComment(comment);
});
```

**Change button style:**
```css
/* In styles.css */
.gh2cursor-button {
  background-color: #your-color;
  /* ... */
}
```

**Modify notification duration:**
```javascript
// In showNotification() function
setTimeout(() => {
  notification.classList.remove('show');
  // Change from 3000ms to desired duration
}, 5000);
```

### Security Notes

- ✅ No external API calls
- ✅ No data collection or tracking
- ✅ Only clipboard access when user clicks button
- ✅ Runs only on github.com (host_permissions)
- ✅ CodeQL security scan: 0 alerts

### Performance

- 🚀 Lazy loading: Script runs on `document_idle`
- 🚀 Efficient DOM queries: Uses specific selectors
- 🚀 Optimized observer: Checks node types before processing
- 🚀 No polling or intervals: Event-driven only

### Browser Compatibility

- ✅ Chrome (Manifest V3)
- ✅ Edge (Chromium-based)
- ✅ Brave (Chromium-based)
- ⚠️ Firefox (needs manifest.json conversion to V2/V3 Firefox format)
- ⚠️ Safari (needs conversion to Safari extension format)

### Contributing

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Test thoroughly on real GitHub PRs
5. Submit a pull request

### Need Help?

- 📖 Read [INSTALL.md](INSTALL.md) for installation troubleshooting
- 📖 Read [USAGE_GUIDE.md](USAGE_GUIDE.md) for usage tips
- 🐛 Open an issue on GitHub
- 💬 Check existing issues for solutions

## Next Steps

After installation:
1. ✅ Visit a GitHub PR to see the extension in action
2. ✅ Try copying a comment to clipboard
3. ✅ Paste into Cursor to verify formatting
4. ✅ Explore different comment types (review, general, issue)

Enjoy using GitHub to Cursor! 🚀
