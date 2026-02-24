# system

Utilities for extending system-level functionality.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `multiSplit` | Splits a string using multiple delimiters simultaneously | `dphelper.system.multiSplit(str, [',', ':', ';'])` |

## Description

System functionalities have been cleaned to avoid *Prototype Pollution*. The `multiSplit` function is now a standalone utility and no longer modifies the global behavior of `String.prototype`.

## Example

```javascript
const str = "apple,pear:banana;orange";
const fruits = dphelper.system.multiSplit(str, [',', ':', ';']);
// Result: ["apple", "pear", "banana", "orange"]
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20231121
- **Last Modified:** 20260220

---

*Automatically generated document - dphelper v3.0.6*
