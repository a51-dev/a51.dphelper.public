# translators

Utilities for transformation conversions.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `convertMatrixToScale` | Convert CSS matrix to scale values | `dphelper.translators.convertMatrixToScale(matrix)` |

## Description

CSS transformation utilities:
- **Matrix to Scale** - Parse CSS transform matrix
- **Extract Values** - Get scaleX, scaleY from matrix

## Usage Examples

### Convert Matrix to Scale

```javascript
// Get element's transform matrix
const element = document.getElementById('myElement');
const style = window.getComputedStyle(element);
const matrix = style.transform;

// Convert matrix to scale values
const scale = dphelper.translators.convertMatrixToScale({ value: matrix });
// Returns { scaleX, scaleY }

// Example with known matrix
const result = dphelper.translators.convertMatrixToScale({
  value: 'matrix(2, 0, 0, 2, 0, 0)'
});
// { scaleX: 2, scaleY: 2 }
```

### Animation Scaling

```javascript
// Track element scale during animation
function getScale(element) {
  const style = window.getComputedStyle(element);
  return dphelper.translators.convertMatrixToScale({ value: style.transform });
}

// Monitor scale changes
const element = document.querySelector('.scaling-element');
setInterval(() => {
  const scale = getScale(element);
  console.log(`Current scale: ${scale.scaleX}x${scale.scaleY}`);
}, 100);
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.1
- **Creation Date:** 20210101
- **Last Modified:** 20210101
- **Environment:** client (browser)

---

*Automatically generated document*
