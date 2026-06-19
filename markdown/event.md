# event

Event handling utilities for DOM events, drag, and keyboard.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `list` | Show attached event listeners | `dphelper.event.list(element)` |
| `multi` | Attach multiple events | `dphelper.event.multi(element, 'click hover', handler)` |
| `copy` | Click copy element text | to `dphelper.event.copy('#element')` |
| `onDrag` | Handle element dragging | `dphelper.event.onDrag('.popup')` |
| `keys` | Get keyboard event properties | `dphelper.event.keys(e)` |

## Description

Complete event utilities:
- **Multi Events** - Attach multiple events at once
- **Drag** - Drag and drop handling
- **Copy** - Click to copy to clipboard
- **Keyboard** - Key event properties

## Usage Examples

### Multiple Event Listeners

```javascript
// Attach multiple events
dphelper.event.multi(
  document.querySelector('#button'),
  'click hover focus',
  (e) => console.log(e.type)
);
```

### Copy to Clipboard

```javascript
// Click element to copy its text
dphelper.event.copy('#text-to-copy');

// User clicks, text is copied to clipboard
```

### Keyboard Events

```javascript
// Get keyboard event properties
document.addEventListener('keydown', (e) => {
  const keys = dphelper.event.keys(e);

  console.log(keys.key);    // 'a', 'Enter', 'Escape'
  console.log(keys.ctrl);  // true/false
  console.log(keys.alt);   // true/false
  console.log(keys.shift); // true/false

  // Check for shortcuts
  if (keys.ctrl && keys.key === 's') {
    e.preventDefault();
    save();
  }
});
```

### Drag and Drop

```javascript
// Enable dragging
dphelper.event.onDrag('.draggable-popup');

// Element can now be dragged
// Position saved to localStorage
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
