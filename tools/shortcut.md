# shortcut

Keyboard shortcut management.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `keys` | Handle keyboard shortcuts | `dphelper.shortcut.keys(event, trigger)` |

## Description

Keyboard shortcut system:
- **Custom Shortcuts** - Define your own keyboard shortcuts
- **Ctrl/Meta Keys** - Support for modifier keys
- **Element Actions** - Trigger clicks on elements
- **Function Callbacks** - Execute custom functions

## Usage Examples

### Basic Shortcut Handling

```javascript
// Handle keyboard events
document.addEventListener('keydown', (e) => {
  dphelper.shortcut.keys(e);
});
```

### Custom Shortcut Configuration

```javascript
// Define custom shortcuts
const shortcuts = {
  data: [
    {
      key: '83',        // S key
      ctrl: true,       // requires Ctrl
      active: true,
      description: 'Save - CTRL+S',
      element: '#save-btn',
      function: ''
    },
    {
      key: '80',        // P key
      ctrl: true,
      active: true,
      description: 'Print - CTRL+P',
      element: '',
      function: 'print()'
    },
    {
      key: '27',        // ESC
      ctrl: false,
      active: true,
      description: 'Close - ESC',
      element: '#close-modal',
      function: ''
    }
  ]
};

document.addEventListener('keydown', (e) => {
  dphelper.shortcut.keys(e, shortcuts);
});
```

### Save Form

```javascript
// Auto-save with Ctrl+S
const formShortcuts = {
  data: [
    {
      key: '83',
      ctrl: true,
      active: true,
      description: 'Save form',
      element: '#save-form-btn',
      function: ''
    }
  ]
};

document.addEventListener('keydown', (e) => {
  dphelper.shortcut.keys(e, formShortcuts);
});
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** client (browser)

---

*Automatically generated document*
