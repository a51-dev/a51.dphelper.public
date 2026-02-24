# UI

User Interface components and Debugging tools.

## Debugging Tools

| Function | Description | Example |
|----------|-------------|---------|
| `fps` | Toggles a real-time FPS and Memory monitor overlay | `dphelper.UI.fps(true)` |
| `boxModel` | Toggles visual box-model highlighter for all elements | `dphelper.UI.boxModel(true)` |

## Base Components

- `input`, `button`, `textarea`, `select`, `code` (Work in progress)

## Description

The UI module provides both functional interface components and developer-oriented inspection tools to monitor application health and layout.

## Usage Examples

### Performance Monitoring

```javascript
// Shows FPS and RAM usage on screen
dphelper.UI.fps(true);
```

### Layout Debugging

```javascript
// Highlights borders of all elements on the page
dphelper.UI.boxModel(true);
```

## Details

- **Author:** Dario Passariello & Jo
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220

---

*Automatically generated document - dphelper v3.0.6*
