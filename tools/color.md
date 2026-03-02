# color

Color manipulation utilities for converting between color formats and generating color gradients.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `hex` | Converts a number (0-255) to hexadecimal | `dphelper.color.hex(255)` |
| `toHex` | Converts RGB array to hex string | `dphelper.color.toHex([255, 128, 0])` |
| `toRGB` | Converts hex string to RGB array | `dphelper.color.toRGB('#ff8000')` |
| `oleColor` | Converts hex to OLE color format | `dphelper.color.oleColor('#ffffff')` |
| `gradient` | Generates gradient between two colors | `dphelper.color.gradient('#ff0000', '#0000ff', 10)` |

## Description

Comprehensive color manipulation tools:
- **Format Conversion** - RGB ↔ Hex, OLE color format
- **Gradient Generation** - Create smooth color transitions
- **Number Formatting** - Convert color values to hex

## Usage Examples

### Number to Hex

```javascript
// Convert a number to 2-digit hex
console.log(dphelper.color.hex(0));   // "00"
console.log(dphelper.color.hex(255)); // "ff"
console.log(dphelper.color.hex(128)); // "80"

// Clamps values outside 0-255
console.log(dphelper.color.hex(300)); // "ff"
console.log(dphelper.color.hex(-10)); // "00"
```

### RGB to Hex Conversion

```javascript
// Convert RGB array to hex
console.log(dphelper.color.toHex([255, 255, 255])); // "ffffff"
console.log(dphelper.color.toHex([255, 0, 0]));     // "ff0000"
console.log(dphelper.color.toHex([0, 255, 0]));     // "00ff00"
console.log(dphelper.color.toHex([0, 0, 255]));     // "0000ff"
console.log(dphelper.color.toHex([255, 128, 0]));   // "ff8000"

// Common colors
const orange = [255, 165, 0];
console.log('#' + dphelper.color.toHex(orange)); // "#ffa500"
```

### Hex to RGB Conversion

```javascript
// Convert hex to RGB array
console.log(dphelper.color.toRGB('#ffffff')); // [255, 255, 255]
console.log(dphelper.color.toRGB('#ff0000')); // [255, 0, 0]
console.log(dphelper.color.toRGB('#00ff00')); // [0, 255, 0]
console.log(dphelper.color.toRGB('#0000ff')); // [0, 0, 255]

// Without hash
console.log(dphelper.color.toRGB('ff8000')); // [255, 128, 0]
```

### OLE Color Conversion

```javascript
// Convert to OLE color (used in older Windows APIs)
console.log(dphelper.color.oleColor('#000000')); // "0"
console.log(dphelper.color.oleColor('#ffffff')); // "16777215"
console.log(dphelper.color.oleColor('#ff0000')); // "255"
console.log(dphelper.color.oleColor('#00ff00')); // "65280"
console.log(dphelper.color.oleColor('#0000ff')); // "16711680"
```

### Gradient Generation

```javascript
// Generate gradient from red to blue
const gradient = dphelper.color.gradient('#ff0000', '#0000ff', 10);
console.log(gradient);
// ["ff0000", "e61b1b", "cc3636", "b35151", "996c6c", "808080", "669696", "4dabab", "33c0c0", "1ad6d6", "0000ff"]

// Useful for creating color scales
const heatmapColors = dphelper.color.gradient('#0000ff', '#ff0000', 20);

// Cool to warm gradient
const sunrise = dphelper.color.gradient('#ff9a9e', '#fecfef', 15);
```

## Advanced Usage

### Color Utilities Class

```javascript
class ColorUtils {
  static random() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return '#' + dphelper.color.toHex([r, g, b]);
  }

  static invert(hex) {
    const [r, g, b] = dphelper.color.toRGB(hex);
    return '#' + dphelper.color.toHex([255 - r, 255 - g, 255 - b]);
  }

  static lighten(hex, percent) {
    const [r, g, b] = dphelper.color.toRGB(hex);
    return '#' + dphelper.color.toHex([
      Math.min(255, Math.floor(r + (255 - r) * percent)),
      Math.min(255, Math.floor(g + (255 - g) * percent)),
      Math.min(255, Math.floor(b + (255 - b) * percent))
    ]);
  }

  static darken(hex, percent) {
    const [r, g, b] = dphelper.color.toRGB(hex);
    return '#' + dphelper.color.toHex([
      Math.max(0, Math.floor(r * (1 - percent))),
      Math.max(0, Math.floor(g * (1 - percent))),
      Math.max(0, Math.floor(b * (1 - percent)))
    ]);
  }
}

// Usage
console.log(ColorUtils.random());      // "#a3b21c"
console.log(ColorUtils.invert('#ff0000')); // "#00ffff"
console.log(ColorUtils.lighten('#888888', 0.2)); // "#adadad"
console.log(ColorUtils.darken('#888888', 0.2)); // "#636363"
```

### Dynamic Chart Colors

```javascript
function generateChartColors(count) {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const hue = (i * 360 / count) % 360;
    const rgb = this.hslToRgb(hue, 70, 50);
    colors.push('#' + dphelper.color.toHex(rgb));
  }
  return colors;
}
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
