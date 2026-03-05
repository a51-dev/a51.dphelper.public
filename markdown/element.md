# element

Element manipulation utilities for scaling and responsive design.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `fitScale` | Scale element based on window size | `dphelper.element.fitScale('#container', 1, true)` |
| `scaleBasedOnWindow` | Scale element to fit window | `dphelper.element.scaleBasedOnWindow('#chart', 1, false)` |

## Description

Element scaling and responsive utilities:
- **Auto Scaling** - Scale elements with window resize
- **Fit to Window** - Scale to fit or fill viewport
- **Responsive** - Maintain aspect ratio

## Usage Examples

### Scale Element

```javascript
// Basic scaling
dphelper.element.fitScale('#myElement', 1);

// Scale to fit window
dphelper.element.fitScale('#chart', 1, true);

// Custom scale
dphelper.element.fitScale('#preview', 0.5);
```

### Responsive Charts

```javascript
// Make chart responsive
dphelper.element.fitScale('#chart-container', 1, true);

// Element scales automatically on window resize
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20230527
- **Last Modified:** 20230527
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
