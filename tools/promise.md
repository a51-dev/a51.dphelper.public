# promise

Utilities for Promise management.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `check` | Check if value is a Promise | `dphelper.promise.check(value)` |

## Description

Promise utility functions:
- **Type Check** - Detect if value is a Promise
- **Cross-Environment** - Works in browser and Node.js
- **Extended Support** - Checks for Promise-like objects (thenables)

## Usage Examples

### Check if Value is Promise

```javascript
// Standard Promise
const promise = fetch('https://api.example.com/data');
console.log(dphelper.promise.check(promise));
// true

// Promise created with Promise.resolve
const resolved = Promise.resolve('data');
console.log(dphelper.promise.check(resolved));
// true

// Thenable (Promise-like object)
const thenable = { then: (resolve) => resolve('data') };
console.log(dphelper.promise.check(thenable));
// true

// Regular value
console.log(dphelper.promise.check('hello'));
// false

console.log(dphelper.promise.check(123));
// false

console.log(dphelper.promise.check({}));
// false
```

### Safe Promise Handling

```javascript
// Handle both Promise and non-Promise values
async function processValue(value) {
  if (dphelper.promise.check(value)) {
    return await value;
  }
  return value;
}

// Use in generic functions
function handleResult(result) {
  if (dphelper.promise.check(result)) {
    result.then(data => console.log('Async:', data));
  } else {
    console.log('Sync:', result);
  }
}
```

### Type Guard for TypeScript

```javascript
// Type guard usage
function logValue(val: any) {
  if (dphelper.promise.check(val)) {
    // TypeScript knows val is Promise here
    val.then(data => console.log('Resolved:', data));
  } else {
    console.log('Value:', val);
  }
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
