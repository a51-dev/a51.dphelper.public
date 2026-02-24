# date

Advanced utilities for date management.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `toIso` | Converts a date to ISO format | `dphelper.date.toIso([value, int = 'en'])` |
| `toMMDDYYYY` | Converts to MMDDYYYY format | `dphelper.date.toMMDDYYYY([value])` |
| `toYYYYMMDD` | Converts to YYYYMMDD format | `dphelper.date.toYYYYMMDD([value])` |
| `toHuman` | Converts to a human-readable format | `dphelper.date.toHuman([value])` |
| `convert` | Converts dates between formats | `dphelper.date.convert()` |

## Description

Complete tool for converting and formatting dates in various formats.

## Usage Examples

### Database Format

```javascript
const dbDate = dphelper.date.toYYYYMMDD(new Date());
console.log(dbDate); // '20260223'
```

### Human-Readable Format

```javascript
const humanDate = dphelper.date.toHuman("20260223");
console.log(humanDate); // '23 February 2026' (depends on locale)
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.1
- **Creation Date:** 20210101
- **Last Modified:** 20230101

---

*Automatically generated document - dphelper v3.0.6*
