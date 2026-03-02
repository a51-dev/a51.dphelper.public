# system

Utilities for extending system-level functionality.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `multiSplit` | Split string by multiple delimiters | `dphelper.system.multiSplit(str, tokens)` |

## Description

System-level utilities:
- **Multi-Split** - Split a string using multiple delimiters at once
- **Safe** - No prototype pollution, clean implementation

## Usage Examples

### Multi-Split

```javascript
// Split by multiple delimiters
const str = "apple,pear:banana;orange";
const fruits = dphelper.system.multiSplit(str, [',', ':', ';']);
// Result: ["apple", "pear", "banana", "orange"]

// Parse CSV with mixed delimiters
const data = "name,email:phone;address";
const parts = dphelper.system.multiSplit(data, [',', ':', ';']);
// ["name", "email", "phone", "address"]

// Parse log line
const log = "ERROR|WARNING|INFO:message here";
const sections = dphelper.system.multiSplit(log, ['|', ':']);
// ["ERROR", "WARNING", "INFO", "message here"]

// URL parsing
const url = "protocol:host/path?query=value";
const urlParts = dphelper.system.multiSplit(url, ['://', '/', '?', '=']);
// More complex parsing
```

### Parse Complex Data

```javascript
// Parse mixed delimiter data
function parseData(input) {
  const delimiters = [',', ';', '|', '\t'];
  return dphelper.system.multiSplit(input.trim(), delimiters);
}

console.log(parseData("a,b;c|d"));
// ["a", "b", "c", "d"]

console.log(parseData("item1\titem2,item3;item4"));
// ["item1", "item2", "item3", "item4"]
```

### CSV Header Processing

```javascript
// Process CSV with various delimiters
const csv = "name,age,city;country";
const headers = dphelper.system.multiSplit(csv, [',', ';']);
// ["name", "age", "city", "country"]
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20231121
- **Last Modified:** 20260220
- **Environment:** both (browser + Node.js)

---

*Automatically generated document*
