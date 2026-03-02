# scrollbar

Scrollbar customization and scrolling utilities.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `custom` | Apply custom scrollbar styles | `dphelper.scrollbar.custom('.container')` |
| `indicator` | Add scroll progress indicator | `dphelper.scrollbar.indicator({ el: '#content' })` |
| `position.get` | Get saved scroll position | `dphelper.scrollbar.position.get('#container')` |
| `position.set` | Save scroll position | `dphelper.scrollbar.position.set('#container')` |
| `smooth` | Smooth mouse wheel scrolling | `dphelper.scrollbar.smooth(target, speed, smooth)` |
| `scrollTo` | Scroll to element | `dphelper.scrollbar.scrollTo('#container', '#element', 20)` |

## Description

Scrollbar management:
- **Custom Styling** - Apply custom scrollbar CSS
- **Progress Indicator** - Show scroll progress bar
- **Position Memory** - Save/restore scroll position
- **Smooth Scrolling** - Custom smooth scroll behavior

## Usage Examples

### Custom Scrollbar

```javascript
// Apply custom scrollbar styles
dphelper.scrollbar.custom('.scroll-container', {
  color_1: '#888',
  color_1_hover: '#555',
  width: '12px',
  height: '12px',
  rounded: '6px'
});
```

### Scroll Indicator

```javascript
// Add scroll progress indicator
dphelper.scrollbar.indicator({
  el: '#main-content'
});

// Adds progress bar at top of page
```

### Scroll Position

```javascript
// Save scroll position
dphelper.scrollbar.position.set('#chat-container');

// Restore on page load
dphelper.scrollbar.position.get('#chat-container');

// Useful for chat apps, long content
```

### Scroll To Element

```javascript
// Scroll to element with gap
dphelper.scrollbar.scrollTo('#container', '#target-section', 50);

// Smooth scroll to section
dphelper.scrollbar.scrollTo('body', '#footer');
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
