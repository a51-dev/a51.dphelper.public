# coords

Utilities for geographic calculations, coordinate conversions, and spatial mappings.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `degreesToRadians` | Converts degrees to radians | `dphelper.coords.degreesToRadians(180)` |
| `latToMeters` | Approximates conversion from latitude to meters | `dphelper.coords.latToMeters([lat, lng])` |
| `distance` | Calculates distance between two points (Haversine) in Km, Mi, and NMi | `dphelper.coords.distance(p1, p2)` |
| `polarToCartesian` | Converts polar coordinates to Cartesian (X, Y) | `dphelper.coords.polarToCartesian(cx, cy, r, angle)` |
| `mapDegreesToPixels` | Maps geographic degrees to pixel coordinates with padding | `dphelper.coords.mapDegreesToPixels(deg, min, max, pMin, pMax, pad)` |

## Description

Specialized tool for trigonometric and geographic calculations. Mapping formulas (pixel/degrees) have been optimized and commented for better readability and geometric precision.

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220

---

*Automatically generated document*
