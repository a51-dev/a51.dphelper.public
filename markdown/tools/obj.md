# obj (objects)

Utilities for JavaScript object manipulation.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `replaceNullObjects` | Replaces null values with empty strings | `dphelper.obj.replaceNullObjects(obj)` |
| `serialize` | Serializes objects while preserving functions (toString) | `dphelper.obj.serialize(obj)` |
| `deSerialize` | Deserializes objects by processing their values | `dphelper.obj.deSerialize(obj)` |
| `sort` | Sorts an object by its keys | `dphelper.obj.sort(obj)` |
| `toXML` | Converts an object to an XML string | `dphelper.obj.toXML(obj)` |
| `updateByKey` | Updates a value if the key exists | `dphelper.obj.updateByKey(obj, 'k', 'v')` |
| `parse` | Safe JSON.parse that avoids crashes | `dphelper.obj.parse(str)` |
| `isObject` | Checks if a value is a non-null object | `dphelper.obj.isObject(val)` |
| `diff` | Highlights differences between two objects | `dphelper.obj.diff(obj1, obj2)` |
| `path` | Creates a path string from an array of properties | `dphelper.obj.path('prop', ['a','b'])` |
| `setProps` | Recursively sets configuration properties (enumerable, etc.) | `dphelper.obj.setProps(obj, {writable: false})` |

## Description

Tool for advanced JavaScript object manipulation. Basic functions like `Object.entries` or `Object.create` have been removed in favor of native methods.

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220

---

*Automatically generated document - dphelper v3.0.6*
