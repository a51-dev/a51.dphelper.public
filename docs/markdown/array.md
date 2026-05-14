# array

Advanced utilities for JavaScript array manipulation with support for nested structures, merging, filtering, and more.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `find` | Finds an element recursively in nested arrays | `dphelper.array.find(array, 'key')` |
| `delete` | Deletes an element recursively by key | `dphelper.array.delete(array, 'key')` |
| `merge` | Deep merges two objects/arrays (safe from prototype pollution) | `dphelper.array.merge(arrA, arrB)` |
| `mergeByKey` | Merges two arrays of objects via a specific key | `dphelper.array.mergeByKey(arrA, arrB, 'id')` |
| `unique` | Removes duplicate values from an array | `dphelper.array.unique(array)` |
| `asc` | Sorts array in ascending order | `dphelper.array.asc(array)` |
| `desc` | Sorts array in descending order | `dphelper.array.desc(array)` |
| `duplicates` | Finds duplicate elements in an array | `dphelper.array.duplicates(array)` |
| `even` | Filters even numbers from an array | `dphelper.array.even(array)` |
| `odd` | Filters odd numbers from an array | `dphelper.array.odd(array)` |
| `toObj` | Converts an array to an object | `dphelper.array.toObj(array)` |
| `sumColumn` | Sums values of a column in a multidimensional array | `dphelper.array.sumColumn(arr, 0)` |
| `shuffle` | Randomly shuffles elements (Fisher-Yates algorithm) | `dphelper.array.shuffle(array)` |
| `generate` | Generates an array of random numbers (1 to n) | `dphelper.array.generate(10)` |
| `testArrayInt` | Checks for missing numbers in a consecutive sequence | `dphelper.array.testArrayInt([1,2,4])` |
| `rand32` | Generates an array of random 32-bit unsigned integers | `dphelper.array.rand32(5)` |
| `findindex` | Finds the index of an element by key | `dphelper.array.findindex(array, 'name')` |
| `pathToJson` | Converts an array of paths into a JSON object | `dphelper.array.pathToJson(paths, '/')` |
| `deepClone` | Creates a deep clone using structuredClone | `dphelper.array.deepClone(array)` |
| `match` | Finds intersection between two arrays | `dphelper.array.match(arrA, arrB)` |

## Description

Comprehensive array manipulation library that provides utilities for:
- **Recursive operations** - Find, delete in nested structures
- **Merging** - Deep merge with prototype pollution protection
- **Filtering** - Even/odd numbers, duplicates
- **Sorting** - Ascending/descending order
- **Generation** - Random numbers, sequences
- **Conversion** - Array to object, paths to JSON

## Usage Examples

### Finding Elements in Nested Arrays

```javascript
const data = [
  { id: 1, name: 'John', children: [{ id: 2, name: 'Jane' }] },
  { id: 3, name: 'Bob', children: [{ id: 4, name: 'Alice' }] }
];

// Find element with id 2
const found = dphelper.array.find(data, 2);
console.log(found); // { id: 2, name: 'Jane' }
```

### Deep Merging Objects

```javascript
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

const merged = dphelper.array.merge(obj1, obj2);
console.log(merged); // { a: 1, b: { c: 2, d: 3 }, e: 4 }

// Safe from prototype pollution
const dangerous = { '__proto__': { dangerous: true } };
const safe = dphelper.array.merge({}, dangerous);
console.log(safe); // { __proto__: { dangerous: true } } - safe!
```

### Merging Arrays by Key

```javascript
const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 }
];

const details = [
  { id: 1, email: 'john@example.com' },
  { id: 2, email: 'jane@example.com' }
];

const merged = dphelper.array.mergeByKey(users, details, 'id');
// Result: [{ id: 1, name: 'John', age: 30, email: 'john@example.com' }, ...]
```

### Finding Duplicates

```javascript
const numbers = [1, 2, 3, 2, 4, 3, 5, 1];
const dups = dphelper.array.duplicates(numbers);
console.log(dups); // [2, 3, 1]
```

### Filtering Even/Odd Numbers

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(dphelper.array.even(numbers)); // [2, 4, 6, 8, 10]
console.log(dphelper.array.odd(numbers));   // [1, 3, 5, 7, 9]
```

### Sum Column in Multidimensional Array

```javascript
const matrix = [
  [1, 2, 3],  // row 0
  [4, 5, 6],  // row 1
  [7, 8, 9]   // row 2
];

// Sum first column (index 0)
console.log(dphelper.array.sumColumn(matrix, 0)); // 12 (1+4+7)

// Sum second column (index 1)
console.log(dphelper.array.sumColumn(matrix, 1)); // 15 (2+5+8)
```

### Shuffle Array (Fisher-Yates)

```javascript
const cards = ['A', 'B', 'C', 'D', 'E'];
const shuffled = dphelper.array.shuffle([...cards]);
console.log(shuffled); // Random order, e.g., ['C', 'A', 'E', 'D', 'B']
```

### Generate Random Number Sequence

```javascript
// Generate numbers 1-10 in random order
const sequence = dphelper.array.generate(10);
console.log(sequence); // e.g., [3, 1, 8, 5, 2, 9, 4, 7, 6, 10]
```

### Test for Consecutive Integers

```javascript
// Check for missing numbers in sequence [1, 2, 3, 4, 5]
console.log(dphelper.array.testArrayInt([1, 2, 3, 4, 5])); // [] (complete)

// Check for missing numbers in [1, 2, 4, 5]
console.log(dphelper.array.testArrayInt([1, 2, 4, 5]));    // [3] (missing 3)
```

### Generate Random 32-bit Integers

```javascript
const randomNumbers = dphelper.array.rand32(5);
console.log(randomNumbers.nums);   // [random1, random2, random3, random4, random5]
console.log(randomNumbers.time);  // [execution time in ms]
```

### Path to JSON Conversion

```javascript
const paths = [
  '/users/John',
  '/users/John/profile',
  '/users/John/settings',
  '/users/Jane'
];

const json = dphelper.array.pathToJson(paths, '/');
// Result:
// {
//   users: {
//     John: {
//       profile: null,
//       settings: null
//     },
//     Jane: null
//   }
// }
```

### Deep Clone Array

```javascript
const original = [{ a: 1 }, { b: 2 }];
const cloned = dphelper.array.deepClone(original);

cloned[0].a = 99;
console.log(original[0].a); // 1 (original unchanged)
console.log(cloned[0].a);   // 99
```

### Find Array Intersection

```javascript
const words = ['apple', 'banana', 'cherry', 'date'];
const check = ['banana', 'date', 'elderberry'];

const matches = dphelper.array.match(words, check);
console.log(matches); // ['banana', 'date']
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** Works in both client and server environments

---

*Automatically generated document*
