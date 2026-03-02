# terminal

Creates a terminal-like interface in the browser console or a DOM element.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `terminal` | Create terminal in DOM element | `dphelper.terminal(parentDom)` |

## Description

In-browser terminal:
- **Console Redirect** - Redirect console methods to DOM
- **Visual Output** - See logs in a visual terminal
- **Debugging** - Great for debugging web apps
- **Interactive** - Create terminal-like interface

## Usage Examples

### Create Terminal

```javascript
// Create terminal in a div
const terminalDiv = document.getElementById('terminal');
dphelper.terminal(terminalDiv);

// Now console.log, console.error etc. appear in the div
console.log("Hello Terminal!");
console.error("Error message");
console.warn("Warning");
```

### Debug Panel

```javascript
// Add debug terminal to page
<div id="debug-terminal" style="background: #000; color: #0f0; padding: 10px;"></div>

dphelper.terminal('#debug-terminal');

// All console output now goes to the terminal
console.log('App started');
console.debug('Debug info');
console.error('Something went wrong');
```

### Application Logging

```javascript
// Use as application log viewer
function initDebugTerminal() {
  const terminal = document.getElementById('terminal');
  dphelper.terminal(terminal);

  // Your app logs now appear visually
  console.log('[APP] Initializing...');
  console.log('[APP] Loading data...');
  console.error('[APP] Failed to load');
}
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.1
- **Creation Date:** 20240525
- **Last Modified:** 20240525
- **Environment:** client (browser)

---

*Automatically generated document*
