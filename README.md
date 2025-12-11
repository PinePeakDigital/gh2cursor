# gh2cursor

A Chrome extension that adds a "Send to Cursor" button to GitHub PR feedback, making it easy to copy comments and feedback directly to Cursor chat.

## Features

- 🚀 One-click copy of GitHub PR feedback to clipboard
- 📝 Includes PR context (PR number, file path, line number, author)
- 🎨 Seamlessly integrates with GitHub's UI
- 🌓 Supports both light and dark modes
- ⚡ Works on all GitHub PR pages

## Installation

### Install from Source (Developer Mode)

1. Clone this repository:
   ```bash
   git clone https://github.com/PinePeakDigital/gh2cursor.git
   cd gh2cursor
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" (toggle in the top-right corner)

4. Click "Load unpacked"

5. Select the `gh2cursor` directory

6. The extension is now installed! You should see the gh2cursor icon in your extensions list.

## Usage

1. Navigate to any GitHub Pull Request page

2. Look for PR comments and review feedback

3. Click the green "Send to Cursor" button next to any comment

4. The feedback will be copied to your clipboard with context (PR number, file, line, author)

5. Open Cursor and paste the feedback into the chat

## What Gets Copied

When you click "Send to Cursor", the extension formats the feedback like this:

```
PR #123 - src/components/Button.tsx (Line 45)
From: reviewer-username

[Comment text here]
```

## Development

The extension consists of:
- `manifest.json` - Extension configuration
- `content.js` - Main content script that injects buttons
- `styles.css` - Styling for buttons and notifications
- `icons/` - Extension icons in various sizes

### Releases

This project uses automated semantic versioning for releases. The release workflow automatically:

1. **Calculates the next version** based on commit messages or manual input
2. **Updates manifest.json** with the new version number
3. **Creates a packaged Chrome extension** (`.zip` file)
4. **Generates a GitHub release** with changelog and downloadable artifact

#### Manual Release

To create a release manually:

1. Go to **Actions** → **Release with Semantic Versioning**
2. Click **Run workflow**
3. Select the version bump type:
   - `patch` - Bug fixes (1.0.0 → 1.0.1)
   - `minor` - New features (1.0.0 → 1.1.0)
   - `major` - Breaking changes (1.0.0 → 2.0.0)
4. Click **Run workflow**

#### Automatic Release

The workflow also triggers automatically on pushes to `main` that modify:
- `content.js`
- `styles.css`

The version bump type is determined from commit messages using conventional commit patterns:
- Breaking changes (any commit type with `!:` such as `feat!:`, `fix!:`, `refactor!:`, or `BREAKING CHANGE:` in commit body) → major version
- New features (`feat:` or `feat(scope):`) → minor version
- All other commits (bug fixes, docs, etc.) → patch version

## Privacy

This extension:
- ✅ Only runs on github.com
- ✅ Does not collect or transmit any data
- ✅ Does not require any external permissions
- ✅ All processing happens locally in your browser

## License

MIT License - see LICENSE file for details
