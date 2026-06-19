# window

Window management utilities for popups, zoom control, page leave handling, and memory management.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `enhancement` | Enhance window with additional properties | `dphelper.window.enhancement()` |
| `center` | Open centered popup window | `dphelper.window.center({ url, title, name, w, h })` |
| `onBeforeUnLoad` | Prompt before leaving page | `dphelper.window.onBeforeUnLoad('#form')` |
| `purge` | Clear elements from memory | `dphelper.window.purge()` |
| `stopZoomWheel` | Disable Ctrl+wheel zoom | `dphelper.window.stopZoomWheel()` |
| `setZoom` | Set element zoom level | `dphelper.window.setZoom('#container', 1.5)` |
| `getZoom` | Get element zoom level | `dphelper.window.getZoom('#container')` |

## Description

Complete window management toolkit:
- **Popup Windows** - Centered, sized windows
- **Zoom Control** - Get/set zoom levels
- **Page Exit** - Warn before leaving with unsaved changes
- **Memory** - Purge unused elements
- **Accessibility** - Disable unwanted zoom

## Usage Examples

### Centered Popup Window

```javascript
// Open centered popup
dphelper.window.center({
  url: 'https://example.com',
  title: 'Popup Window',
  name: 'myPopup',
  w: 800,  // width
  h: 600   // height
});

// Useful for:
// - Video players
// - Image galleries
// - Login/signup modals
// - External content
```

### Before Unload Warning

```javascript
// Warn user before leaving with unsaved changes
dphelper.window.onBeforeUnLoad('#myForm');

// When user tries to leave:
// - Fills out form
// - Clicks external link
// - Closes tab
// -> Shows confirmation dialog

// Clean form detection
// <input id="myForm">
// Warning only shows if form has content
```

### Zoom Control

```javascript
// Get current zoom level
const zoom = dphelper.window.getZoom();
console.log(zoom); // 1 (or 1.5, 2, etc.)

// Get specific element zoom
const elZoom = dphelper.window.getZoom('#container');
console.log(elZoom);

// Set zoom level (1 = 100%)
dphelper.window.setZoom('#container', 1.5); // 150%
dphelper.window.setZoom('#container', 2);    // 200%
dphelper.window.setZoom('#container', 0.5);  // 50%

// Reset to default
dphelper.window.setZoom('#container', 1);
```

### Disable Mouse Wheel Zoom

```javascript
// Prevent Ctrl+wheel zoom (accessibility feature)
dphelper.window.stopZoomWheel();

// Useful for:
// - Interactive maps
// - Canvas applications
// - Games
// - Preventing accidental zoom
```

### Memory Purge

```javascript
// Purge document from memory after delay
dphelper.window.purge(document, 10000); // 10 seconds

// Or purge specific element
const oldContent = document.getElementById('oldContent');
dphelper.window.purge(oldContent, 5000);

// Cleans up:
// - Event listeners
// - References
// - Child nodes
```

### Window Enhancement

```javascript
// Enhance window with cross-browser utilities
dphelper.window.enhancement();

// Adds:
// - Cross-browser requestAnimationFrame
// - Additional window properties
```

## Advanced Usage

### Complete Form Protection

```javascript
class FormProtection {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.init();
  }

  init() {
    // Enable beforeunload warning
    dphelper.window.onBeforeUnLoad(this.form);
  }

  // Clean up when form is submitted
  onSubmit(callback) {
    this.form.addEventListener('submit', (e) => {
      // Remove protection after successful submit
      this.disable();
      callback(e);
    });
  }

  disable() {
    // Programmatically disable warning
    window.onbeforeunload = null;
  }
}

// Usage
const protectedForm = new FormProtection('#contactForm');
protectedForm.onSubmit(() => {
  console.log('Form submitted!');
});
```

### Responsive Zoom Handler

```javascript
class ZoomManager {
  constructor(container) {
    this.container = container;
    this.setupHandlers();
  }

  setupHandlers() {
    // Disable default zoom
    dphelper.window.stopZoomWheel();

    // Track zoom changes
    window.addEventListener('resize', () => this.handleResize());
  }

  handleResize() {
    const width = window.innerWidth;
    let zoom = 1;

    if (width < 768) {
      zoom = 0.75;
    } else if (width < 1024) {
      zoom = 0.9;
    }

    dphelper.window.setZoom(this.container, zoom);
  }

  getCurrentZoom() {
    return dphelper.window.getZoom(this.container);
  }
}

// Usage
const zoomManager = new ZoomManager('#app-container');
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
