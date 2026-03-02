# types

Advanced type checking and validation utilities.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `of` | Get the type of a value | `dphelper.types.of(value)` |
| `instOfObj` | Check if value is Object instance | `dphelper.types.instOfObj(value)` |
| `isNaN` | Check if value is NaN | `dphelper.types.isNaN(value)` |
| `isBool` | Check if value is boolean | `dphelper.types.isBool(value)` |

## Description

Advanced type utilities:
- **Type Detection** - Get precise type of any value
- **Boolean Check** - Detect boolean values (including string booleans)
- **Object Check** - Verify object instances

## Usage Examples

### Get Type

```javascript
// Get type of value
console.log(dphelper.types.of('hello'));     // "string"
console.log(dphelper.types.of(123));        // "number"
console.log(dphelper.types.of(true));       // "boolean"
console.log(dphelper.types.of({}));         // "object"
console.log(dphelper.types.of([]));         // "object"
console.log(dphelper.types.of(null));       // "null"
console.log(dphelper.types.of(undefined));  // "undefined"
```

### Check Object Instance

```javascript
// Check if value is Object instance
console.log(dphelper.types.instOfObj({}));           // true
console.log(dphelper.types.instOfObj([]));           // true
console.log(dphelper.types.instOfObj(new Date()));    // true
console.log(dphelper.types.instOfObj('string'));     // false
console.log(dphelper.types.instOfObj(123));          // false
```

### Check NaN

```javascript
// Check for NaN
console.log(dphelper.types.isNaN(NaN));              // true
console.log(dphelper.types.isNaN(0/0));              // true
console.log(dphelper.types.isNaN('hello'));          // false
console.log(dphelper.types.isNaN(123));             // false
```

### Check Boolean

```javascript
// Check if boolean (including string representations)
console.log(dphelper.types.isBool(true));     // true
console.log(dphelper.types.isBool(false));    // true
console.log(dphelper.types.isBool(1));       // false
console.log(dphelper.types.isBool('true'));  // false
console.log(dphelper.types.isBool(null));    // true
console.log(dphelper.types.isBool(undefined));// true
```

### Form Validation

```javascript
// Type-safe form validation
function validateField(value, type) {
  const actualType = dphelper.types.of(value);

  if (type === 'string' && actualType !== 'string') {
    return { valid: false, error: 'Must be a string' };
  }

  if (type === 'number' && actualType !== 'number') {
    return { valid: false, error: 'Must be a number' };
  }

  if (type === 'boolean' && !dphelper.types.isBool(value)) {
    return { valid: false, error: 'Must be a boolean' };
  }

  return { valid: true };
}
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** both (browser + Node.js)

---

*Automatically generated document*
