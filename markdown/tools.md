# tools

Miscellaneous developer utilities for common programming tasks.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `byteSize` | Converts bytes to human-readable format (KB, MB, GB, etc.) | `dphelper.tools.byteSize(1024)` |
| `zIndex` | Finds the highest z-index value in the DOM | `dphelper.tools.zIndex()` |
| `zeroToFalse` | Converts zero to false, otherwise returns the value | `dphelper.tools.zeroToFalse(0)` |

## Description

This module provides various utility functions that are commonly needed in web development projects. It includes byte size conversion, DOM z-index detection, and value transformation utilities.

## Usage Examples

### Byte Size Conversion

Convert file sizes from bytes to human-readable format:

```javascript
// Convert bytes to KB, MB, GB, etc.
console.log(dphelper.tools.byteSize(500));      // "500b"
console.log(dphelper.tools.byteSize(1024));     // "1.0Kb"
console.log(dphelper.tools.byteSize(1048576));  // "1.0Mb"
console.log(dphelper.tools.byteSize(1073741824)); // "1.0Gb"

// Useful for displaying file sizes
const fileSize = 15728640; // 15 MB in bytes
console.log(dphelper.tools.byteSize(fileSize)); // "15.0Mb"
```

### Z-Index Detection

Find the highest z-index in the document to ensure new elements appear on top:

```javascript
// Get the highest z-index in the DOM
const highestZ = dphelper.tools.zIndex();
console.log(highestZ); // e.g., 100

// Create a new modal on top of all other elements
const modal = document.createElement('div');
modal.style.zIndex = highestZ + 1;
modal.style.position = 'absolute';
document.body.appendChild(modal);
```

### Zero to False Conversion

Convert numeric zero to boolean false for conditional logic:

```javascript
// Returns false when value is 0
console.log(dphelper.tools.zeroToFalse(0));    // false
console.log(dphelper.tools.zeroToFalse(1));    // 1
console.log(dphelper.tools.zeroToFalse(42));   // 42
console.log(dphelper.tools.zeroToFalse(-5));   // -5

// Useful in form validation
const count = 0;
if (dphelper.tools.zeroToFalse(count)) {
  console.log('Count is valid');
} else {
  console.log('Count is zero or invalid');
}
```

## Advanced Usage

### Creating a File Size Display Component

```javascript
function formatFileSize(bytes) {
  return dphelper.tools.byteSize(bytes);
}

// Display various file sizes
const files = [256, 1024, 1024 * 50, 1024 * 1024, 1024 * 1024 * 2];
files.forEach(size => {
  console.log(`${size} bytes = ${formatFileSize(size)}`);
});
```

### Modal Management

```javascript
function openModal(content) {
  const highestZ = dphelper.tools.zIndex();
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.style.zIndex = highestZ + 1;
  modal.innerHTML = content;
  document.body.appendChild(modal);
  return modal;
}
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** Works in both client and server environments

---

*Automatically generated document*
