# Installation Guide

## Quick Start

### 1. Download the Extension

Clone or download this repository:
```bash
git clone https://github.com/PinePeakDigital/gh2cursor.git
```

Or download the ZIP file and extract it.

### 2. Load in Chrome

1. Open Google Chrome
2. Navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle switch in the top-right corner)
4. Click **Load unpacked**
5. Select the `gh2cursor` folder (the one containing `manifest.json`)

### 3. Verify Installation

You should see:
- ✅ "GitHub to Cursor" in your extensions list
- ✅ The extension icon (green with an arrow and "C")
- ✅ No error messages

### 4. Test the Extension

#### Option A: Test on a Real GitHub PR
1. Navigate to any GitHub Pull Request (e.g., https://github.com/microsoft/vscode/pulls)
2. Open a PR and scroll to the comments section
3. You should see green **"Send to Cursor"** buttons next to comments

#### Option B: Use the Test Page
1. Open `test-page.html` in Chrome
2. First, enable file access:
   - Go to `chrome://extensions/`
   - Find "GitHub to Cursor"
   - Click **Details**
   - Enable **"Allow access to file URLs"**
3. Refresh the test page
4. You should see **"Send to Cursor"** buttons appear

## Troubleshooting

### Buttons Not Appearing?

**Check Extension Permissions:**
- Go to `chrome://extensions/`
- Find "GitHub to Cursor"
- Make sure it's enabled
- Check that it has permission to run on github.com

**Refresh the Page:**
- Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac) to hard refresh

**Check Browser Console:**
- Press `F12` to open DevTools
- Go to the **Console** tab
- Look for any error messages

### Extension Not Loading?

**Verify Files:**
Make sure all these files exist in your folder:
- `manifest.json`
- `content.js`
- `styles.css`
- `icons/icon16.png`
- `icons/icon48.png`
- `icons/icon128.png`

**Check manifest.json:**
- Open the file and verify it's valid JSON
- No syntax errors should appear in the extensions page

### Clipboard Not Working?

The extension requires clipboard permissions. If it's not copying:
1. Make sure you're on an HTTPS page (GitHub is always HTTPS)
2. Check browser permissions in `chrome://settings/content/clipboard`
3. The site should be allowed to access the clipboard

## Usage Tips

### What Gets Copied

When you click "Send to Cursor", the extension copies:
```
PR #123 - src/file.ts (Line 45)
From: username

[The comment text]
```

### Best Practices

1. **Review before pasting**: Always review the copied text before pasting into Cursor
2. **Include context**: The extension automatically includes PR context, but you can add more if needed
3. **Multiple comments**: Click multiple "Send to Cursor" buttons to copy several comments, then paste them together

## Updating the Extension

1. Pull the latest changes: `git pull`
2. Go to `chrome://extensions/`
3. Click the **refresh icon** on the "GitHub to Cursor" extension card

## Uninstalling

1. Go to `chrome://extensions/`
2. Find "GitHub to Cursor"
3. Click **Remove**
4. Confirm the removal

## Support

If you encounter issues:
1. Check this guide first
2. Open an issue on [GitHub](https://github.com/PinePeakDigital/gh2cursor/issues)
3. Include:
   - Your Chrome version
   - Steps to reproduce
   - Any error messages from the console
