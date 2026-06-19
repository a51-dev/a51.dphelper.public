# obj (objects)

Utilities for JavaScript object manipulation.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `replaceNullObjects` | Replace null values with empty strings | `dphelper.obj.replaceNullObjects(obj)` |
| `serialize` | Serialize objects preserving functions | `dphelper.obj.serialize(obj)` |
| `deSerialize` | Deserialize objects by processing values | `dphelper.obj.deSerialize(obj)` |
| `sort` | Sort object by keys | `dphelper.obj.sort(obj)` |
| `toXML` | Convert object to XML string | `dphelper.obj.toXML(obj)` |
| `updateByKey` | Update value if key exists | `dphelper.obj.updateByKey(obj, 'key', 'value')` |
| `parse` | Safe JSON.parse avoiding crashes | `dphelper.obj.parse(str)` |
| `isObject` | Check if value is non-null object | `dphelper.obj.isObject(val)` |
| `diff` | Show differences between two objects | `dphelper.obj.diff(obj1, obj2)` |
| `path` | Create path string from properties | `dphelper.obj.path('prop', ['a','b'])` |
| `setProps` | Recursively set property descriptors | `dphelper.obj.setProps(obj, {writable: false})` |

## Description

Advanced JavaScript object manipulation:
- **Serialization** - Convert objects to JSON/XML, handle functions
- **Parsing** - Safe JSON parsing with error handling
- **Comparison** - Find differences between objects
- **Transformation** - Sort keys, update by key
- **Property Control** - Set enumerable/writable/configurable

## Usage Examples

### Replace Null Values

```javascript
// Replace null values with empty strings
const data = {
  name: 'John',
  email: null,
  phone: null,
  age: 30
};

dphelper.obj.replaceNullObjects(data);
// Now: { name: 'John', email: '', phone: '', age: 30 }
```

### Object Serialization

```javascript
// Serialize object (including functions as strings)
const obj = {
  name: 'test',
  method: function() { return 'hello'; },
  value: 42
};

const serialized = dphelper.obj.serialize(obj);
// Functions are converted to toString()

// Deserialize back
const deserialized = dphelper.obj.deSerialize(serialized);
```

### Object to XML

```javascript
// Convert JSON to XML
const data = {
  user: {
    name: 'John',
    email: 'john@example.com',
    address: {
      city: 'NYC',
      zip: '10001'
    }
  }
};

const xml = dphelper.obj.toXML(data);
/*
<user>
  <name>John</name>
  <email>john@example.com</email>
  <address>
    <city>NYC</city>
    <zip>10001</zip>
  </address>
</user>
*/
```

### Safe JSON Parse

```javascript
// Safe parse - won't crash on invalid JSON
const validJson = '{"name": "John", "age": 30}';
const obj = dphelper.obj.parse(validJson);
// { name: "John", age: 30 }

const invalidJson = 'not valid json';
const result = dphelper.obj.parse(invalidJson);
// Returns original string, logs error

// Use for API responses
function handleApiResponse(response) {
  return dphelper.obj.parse(response);
}
```

### Object Difference

```javascript
// Find differences between two objects
const obj1 = {
  name: 'John',
  age: 30,
  city: 'NYC'
};

const obj2 = {
  name: 'Jane',
  age: 30,
  city: 'LA'
};

const differences = dphelper.obj.diff(obj1, obj2);
/*
{
  name: { obj1: 'John', obj2: 'Jane' },
  city: { obj1: 'NYC', obj2: 'LA' }
}
*/

// Use in testing
function assertObjectsEqual(a, b) {
  const diff = dphelper.obj.diff(a, b);
  if (Object.keys(diff).length > 0) {
    console.error('Differences found:', diff);
    return false;
  }
  return true;
}
```

### Sort Object Keys

```javascript
// Sort object alphabetically by keys
const unsorted = {
  z: 1,
  a: 2,
  m: 5,
  b: 3
};

const sorted = dphelper.obj.sort(unsorted);
// { a: 2, b: 3, m: 5, z: 1 }

// Useful for consistent JSON stringify
JSON.stringify(dphelper.obj.sort(unsorted));
```

### Update By Key

```javascript
// Update value if key exists
const user = {
  name: 'John',
  email: 'john@example.com'
};

dphelper.obj.updateByKey(user, 'email', 'newemail@example.com');
// { name: 'John', email: 'newemail@example.com' }

dphelper.obj.updateByKey(user, 'phone', '555-1234');
// Key doesn't exist, no change
// { name: 'John', email: 'newemail@example.com' }
```

### Object Path

```javascript
// Create dot-notation path
const path = dphelper.obj.path('name', ['user', 'profile']);
// "user.profile.name"
```

### Set Properties

```javascript
// Make object immutable
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
};

dphelper.obj.setProps(config, {
  writable: false,
  configurable: false
});

// Now config.apiUrl = 'changed'; // Error in strict mode

// Make all properties non-enumerable
const data = { a: 1, b: 2, c: 3 };
dphelper.obj.setProps(data, { enumerable: false });

// for...in won't show these properties
```

### Is Object Check

```javascript
// Check if value is a plain object
console.log(dphelper.obj.isObject({}));           // true
console.log(dphelper.obj.isObject({ a: 1 }));    // true
console.log(dphelper.obj.isObject(null));         // false
console.log(dphelper.obj.isObject([]));          // true (arrays are objects!)
console.log(dphelper.obj.isObject('string'));     // false
console.log(dphelper.obj.isObject(123));          // false

// Use in type checking
function processValue(val) {
  if (dphelper.obj.isObject(val)) {
    console.log('Processing object:', val);
  } else {
    console.log('Not an object:', typeof val);
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
