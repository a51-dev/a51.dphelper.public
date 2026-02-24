# array

Advanced utilities for JavaScript array manipulation.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `find` | Finds an element recursively | `dphelper.array.find(array, 'key')` |
| `delete` | Deletes an element recursively by key | `dphelper.array.delete(array, 'key')` |
| `merge` | Merges two objects/arrays recursively | `dphelper.array.merge(arrA, arrB)` |
| `mergeByKey` | Merges two arrays of objects via a specific key | `dphelper.array.mergeByKey(arrA, arrB, 'id')` |
| `duplicates` | Finds duplicate elements in an array | `dphelper.array.duplicates(array)` |
| `even` / `odd` | Filters even or odd numbers | `dphelper.array.even(array)` |
| `sumColumn` | Sums values of a column in a multidimensional array | `dphelper.array.sumColumn(arr, 0)` |
| `shuffle` | Randomly shuffles elements | `dphelper.array.shuffle(array)` |
| `generate` | Generates an array of random numbers | `dphelper.array.generate(10)` |
| `testArrayInt` | Checks for missing numbers in a sequence | `dphelper.array.testArrayInt([1,2,4])` |
| `rand32` | Generates an array of random 32-bit integers | `dphelper.array.rand32(5)` |
| `match` | Finds intersections between two arrays of words | `dphelper.array.match(arrA, arrB)` |
| `pathToJson` | Converts an array of paths into a JSON object | `dphelper.array.pathToJson(paths, '/')` |

## Description

Tool for advanced array manipulation. Native functions (such as `unique` via Set, `sort`, or `structuredClone`) have been removed to encourage the use of modern JavaScript APIs.

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220

---

*Automatically generated document - dphelper v3.0.6*
