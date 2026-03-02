# coords

Coordinate and geometry utilities for GPS, mapping, and calculations.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `degreesToRadians` | Convert degrees to radians | `dphelper.coords.degreesToRadians(45)` |
| `latToMeters` | Convert latitude to meters | `dphelper.coords.latToMeters([40.68, -74.04])` |
| `toVector` | Convert coordinates to 3D vector | `dphelper.coords.toVector([lat, lon, alt])` |
| `convertToDecDegrees` | Convert DMS to decimal degrees | `dphelper.coords.convertToDecDegrees(39, 5, 59, 'N')` |
| `distance` | Calculate distance between two points (Haversine) | `dphelper.coords.distance([lat1, lon1], [lat2, lon2])` |
| `polarToCartesian` | Convert polar to Cartesian coordinates | `dphelper.coords.polarToCartesian(x, y, radius, angle)` |
| `mapDegreesToPixels` | Map degrees to pixel values | `dphelper.coords.mapDegreesToPixels(deg, min, max, minPx, maxPx, pad)` |

## Description

Coordinate manipulation toolkit:
- **Unit Conversion** - Degrees, radians, meters
- **Distance Calculation** - Haversine formula for GPS
- **Coordinate Systems** - Polar, Cartesian, 3D vectors
- **Mapping** - Degrees to pixels for maps

## Usage Examples

### Degree/Radian Conversion

```javascript
// Degrees to radians
console.log(dphelper.coords.degreesToRadians(0));    // 0
console.log(dphelper.coords.degreesToRadians(90));   // 1.57...
console.log(dphelper.coords.degreesToRadians(180));  // 3.14...
console.log(dphelper.coords.degreesToRadians(360));  // 6.28...
```

### Distance Calculation (GPS)

```javascript
// Distance between New York and Washington DC
const nyc = [40.7128, -74.0060];
const dc = [38.9072, -77.0369];

const dist = dphelper.coords.distance(nyc, dc);
console.log(dist);
// { km: 328.54, mi: 204.18, nMi: 177.4 }

// Calculate travel distance for logistics
const locations = [
  [40.7128, -74.0060],  // NYC
  [39.9526, -75.1652],  // Philadelphia
  [39.2894, -76.6152],  // Baltimore
  [38.9072, -77.0369]   // Washington DC
];

function calculateTotalDistance(points) {
  let total = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const dist = dphelper.coords.distance(points[i], points[i + 1]);
    total += dist.km;
  }
  return total;
}
```

### Coordinate Conversion

```javascript
// Convert DMS to decimal degrees
// 39° 5' 59" N -> decimal
const dec = dphelper.coords.convertToDecDegrees(39, 5, 59, 'N');
console.log(dec); // 39.0997...

// With South/West (negative)
const south = dphelper.coords.convertToDecDegrees(33, 51, 30, 'S');
console.log(south); // -33.8583...
```

### 3D Vector from GPS

```javascript
// Convert GPS coordinates to 3D Earth-centered vector
const vector = dphelper.coords.toVector([40.7128, -74.0060, 0]);
console.log(vector);
// [x, y, z] in meters from Earth center
```

### Polar to Cartesian

```javascript
// Convert polar to Cartesian for graphics
const cart = dphelper.coords.polarToCartesian(100, 100, 50, 90);
console.log(cart);
// { x: 100, y: 150 }

// Create circular motion
for (let angle = 0; angle < 360; angle += 30) {
  const pos = dphelper.coords.polarToCartesian(200, 200, 80, angle);
  console.log(`Angle ${angle}:`, pos);
}
```

### Map Pixel Mapping

```javascript
// Map latitude to pixel for interactive maps
const pixel = dphelper.coords.mapDegreesToPixels(
  45,     // Current degree
  30,     // Min latitude
  60,      // Max latitude
  0,       // Min pixel
  500,     // Max pixel
  10       // Padding
);
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
