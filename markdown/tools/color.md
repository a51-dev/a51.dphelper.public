# color

Utilities for color conversion and management.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `hex` | Converts a number (0-255) into a two-digit hexadecimal string | `dphelper.color.hex(255)` |
| `toHex` | Converts an RGB array to a hexadecimal string | `dphelper.color.toHex([255, 0, 0])` |
| `toRGB` | Converts a hexadecimal string to an RGB array | `dphelper.color.toRGB('#FF0000')` |
| `oleColor` | Converts a hex color to OLE decimal format (used in legacy Windows) | `dphelper.color.oleColor('#FFFFFF')` |
| `gradient` | Generates a color scale (array) between two shades | `dphelper.color.gradient('#000', '#FFF', 10)` |

## Description

Tool for conversion between different color formats. Hexadecimal conversion logic has been modernized using native JavaScript methods.

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220

---

*Automatically generated document*
