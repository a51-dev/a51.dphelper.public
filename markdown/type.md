# type

Utilities for type checking.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `of` | Get the type of a value | `dphelper.type.of(value)` |
| `instOfObj` | Check if value is Object instance | `dphelper.type.instOfObj(value)` |
| `isNaN` | Check if value is NaN | `dphelper.type.isNaN(value)` |
| `isBool` | Check if value is boolean | `dphelper.type.isBool(value)` |

## Description

Type checking utilities:
- **Type Detection** - Get precise type of any value
- **Boolean Check** - Detect boolean values
- **NaN Detection** - Identify NaN values
- **Object Check** - Verify object instances

## Usage Examples

### Get Type

```javascript
// Get type of value
console.log(dphelper.type.of('hello'));     // "string"
console.log(dphelper.type.of(123));          // "number"
console.log(dphelper.type.of(true));         // "boolean"
console.log(dphelper.type.of({}));           // "object"
console.log(dphelper.type.of([]));           // "object"
console.log(dphelper.type.of(null));        // "null"
console.log(dphelper.type.of(undefined));    // "undefined"
```

### Check Object Instance

```javascript
// Check if value is Object
console.log(dphelper.type.instOfObj({}));           // true
console.log(dphelper.type.instOfObj([]));           // true
console.log(dphelper.type.instOfObj(new Date()));  // true
console.log(dphelper.type.instOfObj('string'));    // false
console.log(dphelper.type.instOfObj(123));         // false
console.log(dphelper.type.instOfObj(null));         // false
```

### Check NaN

```javascript
// Check for NaN
console.log(dphelper.type.isNaN(NaN));              // true
console.log(dphelper.type.isNaN(0/0));              // true
console.log(dphelper.type.isNaN('hello'));          // false
console.log(dphelper.type.isNaN(123));              // false

// Safe number validation
function isValidNumber(value) {
  return !dphelper.type.isNaN(value) && dphelper.type.of(value) === 'number';
}
```

### Check Boolean

```javascript
// Check if boolean
console.log(dphelper.type.isBool(true));    // true
console.log(dphelper.type.isBool(false));  // true
console.log(dphelper.type.isBool(1));      // false
console.log(dphelper.type.isBool('true')); // false

// Boolean coercion check
function isExplicitBoolean(value) {
  return dphelper.type.isBool(value);
}
```

### Type Guard Functions

```javascript
// Comprehensive type checking
function getTypeInfo(value) {
  return {
    type: dphelper.type.of(value),
    isObject: dphelper.type.instOfObj(value),
    isNaN: dphelper.type.isNaN(value),
    isBoolean: dphelper.type.isBool(value)
  };
}

console.log(getTypeInfo(42));
// { type: 'number', isObject: false, isNaN: false, isBoolean: false }

console.log(getTypeInfo({a: 1}));
// { type: 'object', isObject: true, isNaN: false, isBoolean: false }
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** both (browser + Node.js)

---

*Automatically generated document*
