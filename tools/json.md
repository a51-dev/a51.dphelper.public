# json

JSON utilities for parsing, validation, conversion, and sanitization.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `counter` | Count occurrences of key-value in JSON | `dphelper.json.counter(data, 'status', 'active')` |
| `toCsv` | Convert JSON array to CSV string | `dphelper.json.toCsv(users)` |
| `saveCsvAs` | Download JSON as CSV file | `dphelper.json.saveCsvAs(csvData, 'export')` |
| `is` | Check if string is valid JSON | `dphelper.json.is('{"key": "value"}')` |
| `parse` | Parse JSON string safely | `dphelper.json.parse('{"key": "value"}')` |
| `sanitize` | Sanitize malformed JSON string | `dphelper.json.sanitize(input)` |
| `sanitizeJsonValue` | Sanitize individual JSON values | `dphelper.json.sanitizeJsonValue('hello')` |

## Description

Complete JSON manipulation toolkit:
- **Validation** - Check if strings are valid JSON
- **Parsing** - Safe JSON parsing with error handling
- **Conversion** - JSON to CSV export
- **Sanitization** - Clean JSON strings, prevent injection

## Usage Examples

### JSON Validation

```javascript
// Check if string is valid JSON
console.log(dphelper.json.is('{"name": "John", "age": 30}')); // true
console.log(dphelper.json.is('[1, 2, 3]'));                   // true
console.log(dphelper.json.is('not valid json'));              // false
console.log(dphelper.json.is(''));                            // false

// Use for API response validation
function handleResponse(response) {
  const text = await response.text();
  if (!dphelper.json.is(text)) {
    throw new Error('Invalid JSON response');
  }
  return JSON.parse(text);
}
```

### JSON Parsing

```javascript
// Parse JSON safely
const obj = dphelper.json.parse('{"name": "John", "age": 30}');
console.log(obj); // { name: "John", age: 30 }

// Handles parsing errors gracefully
const bad = dphelper.json.parse('not json');
console.log(bad); // "Json not parsable"

// Use for user input
function parseUserInput(input) {
  try {
    return dphelper.json.parse(input);
  } catch {
    return null;
  }
}
```

### Counting JSON Properties

```javascript
const data = {
  items: [
    { id: 1, status: 'active' },
    { id: 2, status: 'active' },
    { id: 3, status: 'inactive' },
    { id: 4, status: 'active' }
  ]
};

// Count items with specific status
console.log(dphelper.json.counter(data, 'status', 'active')); // 3
console.log(dphelper.json.counter(data, 'status', 'inactive')); // 1

// Count total keys
console.log(dphelper.json.counter(data)); // 1 (the 'items' key)

// Works with nested arrays
const users = {
  users: [
    { role: 'admin', active: true },
    { role: 'user', active: true },
    { role: 'user', active: false }
  ]
};
console.log(dphelper.json.counter(users, 'role', 'user')); // 2
```

### JSON to CSV Conversion

```javascript
// Convert array of objects to CSV
const users = [
  { name: 'John', age: 30, city: 'NYC' },
  { name: 'Jane', age: 25, city: 'LA' },
  { name: 'Bob', age: 35, city: 'Chicago' }
];

const csv = dphelper.json.toCsv(users);
console.log(csv);
/*
name,age,city
John,30,NYC
Jane,25,LA
Bob,35,Chicago
*/

// Export API response to CSV
async function exportToCsv() {
  const response = await fetch('/api/users');
  const users = await response.json();

  const csv = dphelper.json.toCsv(users);
  dphelper.json.saveCsvAs(csv, 'users-export');
}
```

### Save CSV as File

```javascript
// Download CSV data as file
const data = [
  { product: 'Apple', price: 1.99, quantity: 100 },
  { product: 'Banana', price: 0.59, quantity: 200 }
];

const csv = dphelper.json.toCsv(data);
dphelper.json.saveCsvAs(csv, 'products');

// Filename will include timestamp: "products_20260302120000.csv"
```

### JSON Sanitization

```javascript
// Sanitize malformed JSON
const dirty = '{ "name": "John", "age": 30 }';
console.log(dphelper.json.sanitize(dirty));
// '{ "name":"John","age":30}'

// Clean up spacing issues
const messy = '{ "key" : "value" }';
console.log(dphelper.json.sanitize(messy));
// '{"key":"value"}'

// Handles various data types
const mixed = '{ "string": "hello", "number": 42, "bool": true, "null": null }';
console.log(dphelper.json.sanitize(mixed));
// '{"string":"hello","number":42,"bool":true,"null":""}'
```

### Value Sanitization

```javascript
// Sanitize individual JSON values
console.log(dphelper.json.sanitizeJsonValue('hello'));      // '"hello"'
console.log(dphelper.json.sanitizeJsonValue('hello world')); // '"hello world"'
console.log(dphelper.json.sanitizeJsonValue('test"quote')); // '"test"quote"'
console.log(dphelper.json.sanitizeJsonValue('line1\nline2')); // '"line1\nline2"'
console.log(dphelper.json.sanitizeJsonValue('tab\there'));    // '"tab here"'

// Use for building JSON manually
function safeJsonString(key, value) {
  const safeValue = dphelper.json.sanitizeJsonValue(value);
  return `"${key}":${safeValue}`;
}
```

## Advanced Usage

### Complete Data Export

```javascript
class DataExporter {
  constructor() {}

  exportToCsv(data, filename) {
    if (!Array.isArray(data) || data.length === 0) {
      console.error('Data must be a non-empty array');
      return;
    }

    const csv = dphelper.json.toCsv(data);
    dphelper.json.saveCsvAs(csv, filename);
  }

  exportTableToCsv(tableId, filename) {
    const rows = document.querySelectorAll(`#${tableId} tr`);
    const data = Array.from(rows).map(row => {
      return Array.from(row.querySelectorAll('td')).map(td => td.textContent);
    });

    this.exportToCsv(data, filename);
  }
}

// Usage
const exporter = new DataExporter();
exporter.exportToCsv(userList, 'users');
```

### JSON Validation Middleware

```javascript
function validateJsonMiddleware(req, res, next) {
  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    if (!dphelper.json.is(body)) {
      return res.status(400).json({ error: 'Invalid JSON' });
    }

    try {
      req.body = dphelper.json.parse(body);
      next();
    } catch (err) {
      return res.status(400).json({ error: 'JSON parse error' });
    }
  });
}
```

### API Response Handler

```javascript
async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const text = await response.text();

  if (!dphelper.json.is(text)) {
    throw new Error('Response is not valid JSON');
  }

  return dphelper.json.parse(text);
}

// Usage
const data = await fetchJson('/api/users');
console.log(data);
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** Works in both client and server environments

---

*Automatically generated document*
