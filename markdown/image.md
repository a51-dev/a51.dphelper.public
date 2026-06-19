# image

Comprehensive image processing utilities for client-side image manipulation, including resize, crop, rotate, flip, filters, and format conversion.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `resize` | Resize image to dimensions | `dphelper.image.resize(img, 100, 100)` |
| `crop` | Crop image to region | `dphelper.image.crop(img, { x: 0, y: 0, width: 100, height: 100 })` |
| `toDataURL` | Convert to data URL | `dphelper.image.toDataURL(img, 'image/webp', 0.8)` |
| `fromDataURL` | Create image from data URL | `dphelper.image.fromDataURL(dataUrl)` |
| `filter` | Apply CSS filters | `dphelper.image.filter(img, { brightness: 1.2, contrast: 1.1 })` |
| `rotate` | Rotate image by degrees | `dphelper.image.rotate(img, 90)` |
| `flip` | Flip horizontally/vertically | `dphelper.image.flip(img, 'horizontal')` |
| `grayscale` | Convert to grayscale | `dphelper.image.grayscale(img)` |
| `blur` | Apply blur effect | `dphelper.image.blur(img, 5)` |
| `getDimensions` | Get image dimensions | `dphelper.image.getDimensions(img)` |
| `load` | Load image from URL | `dphelper.image.load('image.jpg')` |
| `composite` | Composite two images | `dphelper.image.composite(img1, img2, 'multiply')` |

## Description

Powerful client-side image processing module providing:
- **Resize & Crop** - Precise dimension control with quality options
- **Rotation & Flipping** - Rotate by degrees, flip horizontally or vertically
- **Filters** - Brightness, contrast, saturation, hue, blur, sepia, and more
- **Format Conversion** - Convert between PNG, JPEG, WebP with quality control
- **Compositing** - Blend multiple images with different blend modes
- **Canvas-based** - All operations use HTML5 Canvas for performance

## Usage Examples

### Loading Images

```javascript
// Load image from URL
const img = await dphelper.image.load('photo.jpg');
console.log(dphelper.image.getDimensions(img));
// { width: 1920, height: 1080 }

// Load from different source
const img2 = await dphelper.image.load('https://example.com/image.png');
```

### Resize & Crop

```javascript
const img = await dphelper.image.load('photo.jpg');

// Resize to specific dimensions
const thumb = dphelper.image.resize(img, 150, 150);
document.getElementById('thumbnail').src = thumb;

// Resize with pixelated (nearest neighbor) quality
const pixelArt = dphelper.image.resize(img, 32, 32, 'pixelated');
document.getElementById('sprite').src = pixelArt;

// Crop to region
const cropped = dphelper.image.crop(img, {
  x: 100,
  y: 100,
  width: 200,
  height: 200
});
document.getElementById('cropped').src = cropped;
```

### Rotation & Flipping

```javascript
const img = await dphelper.image.load('photo.jpg');

// Rotate 90 degrees clockwise
const rotated90 = dphelper.image.rotate(img, 90);
document.getElementById('rotated').src = rotated90;

// Rotate 45 degrees
const rotated45 = dphelper.image.rotate(img, 45);

// Flip horizontally
const flippedH = dphelper.image.flip(img, 'horizontal');

// Flip vertically
const flippedV = dphelper.image.flip(img, 'vertical');
```

### Applying Filters

```javascript
const img = await dphelper.image.load('photo.jpg');

// Brightness adjustment (1 = normal, 0.5 = darker, 1.5 = brighter)
const brightened = dphelper.image.filter(img, { brightness: 1.3 });

// Contrast adjustment
const contrasted = dphelper.image.filter(img, { contrast: 1.2 });

// Saturation
const saturated = dphelper.image.filter(img, { saturate: 1.5 });
const desaturated = dphelper.image.filter(img, { saturate: 0.3 });

// Hue rotation (degrees)
const hueShifted = dphelper.image.filter(img, { hueRotate: 90 });

// Blur (pixels)
const blurred = dphelper.image.filter(img, { blur: 5 });

// Sepia effect
const sepia = dphelper.image.filter(img, { sepia: 1 });

// Invert colors
const inverted = dphelper.image.filter(img, { invert: 1 });

// Grayscale
const gray = dphelper.image.filter(img, { grayscale: 1 });

// Combined filters
const vintage = dphelper.image.filter(img, {
  brightness: 1.1,
  contrast: 1.2,
  sepia: 0.3
});
```

### Format Conversion

```javascript
const img = await dphelper.image.load('photo.png');

// Convert to JPEG with quality
const jpeg80 = dphelper.image.toDataURL(img, 'image/jpeg', 0.8);
const jpeg50 = dphelper.image.toDataURL(img, 'image/jpeg', 0.5);

// Convert to WebP (better compression)
const webp = dphelper.image.toDataURL(img, 'image/webp', 0.9);

// Keep as PNG (lossless)
const png = dphelper.image.toDataURL(img, 'image/png', 1);
```

### Image Compositing

```javascript
const img1 = await dphelper.image.load('background.jpg');
const img2 = await dphelper.image.load('overlay.png');

// Overlay with normal blending
const normal = dphelper.image.composite(img1, img2, 'source-over', 0, 0);

// Multiply blend (for shadows/overlays)
const multiplied = dphelper.image.composite(img1, img2, 'multiply', 50, 50);

// Screen blend (for light effects)
const screened = dphelper.image.composite(img1, img2, 'screen', 0, 0);

// Overlay blend
const overlaid = dphelper.image.composite(img1, img2, 'overlay', 0, 0);
```

## Advanced Usage

### Thumbnail Generator

```javascript
async function generateThumbnail(file, maxSize = 150) {
  // Load the uploaded file
  const dataUrl = await readFileAsDataURL(file);
  const img = await dphelper.image.fromDataURL(dataUrl);

  // Get original dimensions
  const { width, height } = dphelper.image.getDimensions(img);

  // Calculate new dimensions (maintain aspect ratio)
  let newWidth, newHeight;
  if (width > height) {
    newWidth = maxSize;
    newHeight = (height / width) * maxSize;
  } else {
    newHeight = maxSize;
    newWidth = (width / height) * maxSize;
  }

  // Resize and convert to JPEG
  const thumbnail = dphelper.image.resize(img, newWidth, newHeight);
  return dphelper.image.toDataURL(thumbnail, 'image/jpeg', 0.8);
}

// Helper to read file as data URL
function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Usage
document.querySelector('input[type="file"]').addEventListener('change', async (e) => {
  const thumbnail = await generateThumbnail(e.target.files[0]);
  document.getElementById('preview').src = thumbnail;
});
```

### Image Editor

```javascript
class ImageEditor {
  constructor(imageElement) {
    this.img = imageElement;
    this.history = [];
  }

  async applyFilter(options) {
    const result = dphelper.image.filter(this.img, options);
    this.history.push(result);
    return result;
  }

  async resize(width, height) {
    const result = dphelper.image.resize(this.img, width, height);
    this.history.push(result);
    return result;
  }

  async rotate(degrees) {
    const result = dphelper.image.rotate(this.img, degrees);
    this.history.push(result);
    return result;
  }

  async crop(region) {
    const result = dphelper.image.crop(this.img, region);
    this.history.push(result);
    return result;
  }

  async undo() {
    if (this.history.length > 0) {
      const prev = this.history.pop();
      this.img = await dphelper.image.fromDataURL(prev);
    }
    return this.img;
  }

  async export(format = 'image/png', quality = 0.92) {
    return dphelper.image.toDataURL(this.img, format, quality);
  }
}

// Usage
const editor = new ImageEditor(document.getElementById('original'));
const filtered = await editor.applyFilter({ brightness: 1.2, contrast: 1.1 });
document.getElementById('result').src = filtered;
```

### Profile Picture Processor

```javascript
async function processProfilePicture(file) {
  const dataUrl = await readFileAsDataURL(file);
  const img = await dphelper.image.fromDataURL(dataUrl);

  // Get dimensions
  const { width, height } = dphelper.image.getDimensions(img);

  // Calculate square crop (center)
  const size = Math.min(width, height);
  const x = (width - size) / 2;
  const y = (height - size) / 2;

  // Crop to square
  const cropped = dphelper.image.crop(img, { x, y, width: size, height: size });

  // Resize to standard profile size
  const resized = dphelper.image.resize(
    await dphelper.image.fromDataURL(cropped),
    200,
    200
  );

  // Convert to JPEG with good quality
  return dphelper.image.toDataURL(resized, 'image/jpeg', 0.9);
}
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.1
- **Creation Date:** 20260313
- **Last Modified:** 20260313
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
