# Example Output

This document shows examples of what gets copied to your clipboard when you click "Send to Cursor" on different types of GitHub comments.

## Example 1: File-Specific Review Comment

**On GitHub, you see:**
```
reviewer123 commented on src/components/Button.tsx (Line 45)

Consider using a more semantic HTML element here. Instead of a div, 
we should use a button element for better accessibility.
```

**What gets copied to clipboard:**
```
PR #456 - src/components/Button.tsx (Line 45)
From: reviewer123

Consider using a more semantic HTML element here. Instead of a div, 
we should use a button element for better accessibility.
```

---

## Example 2: General PR Comment

**On GitHub, you see:**
```
johndoe commented

Great work on this feature! I have a few suggestions:

1. Add unit tests for the new component
2. Update the documentation
3. Consider edge cases for null values
```

**What gets copied to clipboard:**
```
PR #456
From: johndoe

Great work on this feature! I have a few suggestions:

1. Add unit tests for the new component
2. Update the documentation
3. Consider edge cases for null values
```

---

## Example 3: Code Optimization Feedback

**On GitHub, you see:**
```
codereviewer commented on src/utils/helpers.ts (Line 12)

This function could be optimized. The current implementation has O(n²) 
complexity. Consider using a Map to reduce it to O(n).
```

**What gets copied to clipboard:**
```
PR #456 - src/utils/helpers.ts (Line 12)
From: codereviewer

This function could be optimized. The current implementation has O(n²) 
complexity. Consider using a Map to reduce it to O(n).
```

---

## Example 4: Multiple Comments Combined

If you click "Send to Cursor" on multiple comments, you can paste them together into Cursor:

```
PR #456 - src/components/Button.tsx (Line 45)
From: reviewer123

Consider using a more semantic HTML element here. Instead of a div, 
we should use a button element for better accessibility.

---

PR #456 - src/utils/helpers.ts (Line 12)
From: codereviewer

This function could be optimized. The current implementation has O(n²) 
complexity. Consider using a Map to reduce it to O(n).

---

PR #456
From: johndoe

Great work on this feature! I have a few suggestions:

1. Add unit tests for the new component
2. Update the documentation
3. Consider edge cases for null values
```

---

## Example 5: Issue Comment

**On GitHub, you see:**
```
bugfinder commented on #789

I can reproduce this issue. Steps:
1. Open the app
2. Click on the settings button
3. Toggle dark mode
4. The app crashes

Environment: Chrome 119, macOS 14
```

**What gets copied to clipboard:**
```
From: bugfinder

I can reproduce this issue. Steps:
1. Open the app
2. Click on the settings button
3. Toggle dark mode
4. The app crashes

Environment: Chrome 119, macOS 14
```

---

## Using in Cursor

After copying, open Cursor and paste into the chat:

**Example Cursor Chat Prompt:**
```
I received this feedback on my PR:

PR #456 - src/components/Button.tsx (Line 45)
From: reviewer123

Consider using a more semantic HTML element here. Instead of a div, 
we should use a button element for better accessibility.

Can you help me refactor this code to use a proper button element?
```

**Cursor's Response (example):**
```
I'll help you refactor the code to use a semantic button element. 
Here's the improved version:

[Cursor provides the refactored code...]
```

---

## Tips for Better Prompts

### Add Context
```
I'm working on PR #456. Here's feedback from my reviewer:

[Paste copied feedback]

The current code is in src/components/Button.tsx. Can you show me 
how to implement this suggestion?
```

### Ask for Explanation
```
I got this review comment:

[Paste copied feedback]

Can you explain why this change would improve the code?
```

### Request Multiple Solutions
```
Review feedback:

[Paste copied feedback]

Can you provide 2-3 different approaches to address this, with 
pros and cons of each?
```

### Batch Processing
```
I received several comments on my PR. Let me address them one by one:

Comment 1:
[Paste first feedback]

Comment 2:
[Paste second feedback]

Comment 3:
[Paste third feedback]

Can you help me create a plan to address all of these?
```

---

## Format Breakdown

The extension always formats feedback in this structure:

```
[PR Info] [- File Path] [(Line Number)]
[From: Author]

[Comment Body]
```

Where:
- **PR Info**: Only if on a PR page (e.g., "PR #123")
- **File Path**: Only if comment is on a specific file
- **Line Number**: Only if comment is on a specific line
- **Author**: The GitHub username who wrote the comment
- **Comment Body**: The full text of the comment

This consistent format makes it easy for Cursor (and you) to understand the context of the feedback.
