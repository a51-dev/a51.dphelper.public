# disable

Disabling browser functionalities on DOM elements.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `select` | Disable text selection | `dphelper.disable.select(el)` |
| `spellCheck` | Disable spell checking | `dphelper.disable.spellCheck(tmr)` |
| `rightClick` | Disable context menu | `dphelper.disable.rightClick(el)` |
| `copy` | Disable copy functionality | `dphelper.disable.copy(el)` |
| `paste` | Disable paste functionality | `dphelper.disable.paste(el)` |

## Description

Browser functionality control:
- **Text Selection** - Prevent user from selecting text
- **Context Menu** - Disable right-click menu
- **Clipboard** - Disable copy/paste operations
- **Spell Check** - Turn off browser spell checking
- **Element Targeting** - Apply to specific elements or entire page

## Usage Examples

### Disable Text Selection

```javascript
// Disable selection on entire page
dphelper.disable.select();

// Disable on specific element
dphelper.disable.select('#protected-content');

// Re-enable selection (manual CSS)
document.body.style.userSelect = 'text';
```

### Disable Right-Click Context Menu

```javascript
// Disable right-click on entire page
dphelper.disable.rightClick();

// Disable on specific container
dphelper.disable.rightClick('#game-area');

// Useful for games or protected content
const protectedArea = document.getElementById('protected');
dphelper.disable.rightClick('#protected');
```

### Disable Copy/Paste

```javascript
// Disable copy on specific element
dphelper.disable.copy('#secure-input');

// Disable paste
dphelper.disable.paste('#no-paste-input');

// Combined for form security
dphelper.disable.copy('. confidential-data');
dphelper.disable.paste('.confidential-data');
```

### Disable Spell Check

```javascript
// Disable spell check (default 5000ms delay)
dphelper.disable.spellCheck();

// Custom timing
dphelper.disable.spellCheck(3000);

// Apply to text inputs
document.querySelectorAll('input[type="text"], textarea').forEach(el => {
  el.spellcheck = false;
});
```

### Complete Protection Setup

```javascript
// Full content protection
function protectContent(selector) {
  dphelper.disable.select(selector);
  dphelper.disable.rightClick(selector);
  dphelper.disable.copy(selector);
}

// Protect premium article
protectContent('.premium-content');

// Protect user profile
protectContent('#user-profile');
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** client (browser)

---

*Automatically generated document*
