# form

Comprehensive form utilities for validation, serialization, and input management.

## Functions

### Serialization

| Function | Description | Example |
|----------|-------------|---------|
| `serialize` | Converts form data to JavaScript object | `dphelper.form.serialize('#myForm')` |

### Validation

| Function | Description | Example |
|----------|-------------|---------|
| `confirmType` | Validates value against a specific type | `dphelper.form.confirmType('email', 'test@example.com')` |
| `required` | Checks if a value is present | `dphelper.form.required(value)` |
| `minLength` | Validates minimum string length | `dphelper.form.minLength('hello', 3)` |
| `maxLength` | Validates maximum string length | `dphelper.form.maxLength('hello', 10)` |
| `maxPhoneNumber` | Validates phone number length | `dphelper.form.maxPhoneNumber('1234567890', 10)` |
| `isNumeric` | Checks if value is numeric | `dphelper.form.isNumeric(42)` |
| `isEmail` | Validates email format | `dphelper.form.isEmail('test@example.com')` |

### Input Control

| Function | Description | Example |
|----------|-------------|---------|
| `pattern` | Validates input against type-specific pattern | `dphelper.form.pattern(event)` |
| `noSpecialChars` | Blocks special characters in input | `dphelper.form.noSpecialChars(event)` |

### Utilities

| Function | Description | Example |
|----------|-------------|---------|
| `table` | Generates an editable data table | `dphelper.form.table([7, 24], 'tableId', element)` |
| `sanitize` | Removes dangerous characters from input | `dphelper.form.sanitize(userInput)` |

## Description

Complete form management solution:
- **Data Serialization** - Form to object conversion with type handling
- **Validation** - Required fields, length, email, numeric, patterns
- **Input Filtering** - Block special characters, pattern enforcement
- **Table Generation** - Create editable data grids
- **Security** - Input sanitization for XSS prevention

## Usage Examples

### Form Serialization

```javascript
// HTML form
// <form id="myForm">
//   <input name="username" value="john">
//   <input name="age" value="30">
//   <input name="active" value="true">
// </form>

const data = dphelper.form.serialize('#myForm');
console.log(data);
// { username: "john", age: 30, active: true }

// Handles nested names
// <input name="user[name]" value="John">
// <input name="user[email]" value="john@example.com">

const userData = dphelper.form.serialize('#myForm');
console.log(userData);
// { user: { name: "John", email: "john@example.com" } }

// Array handling
// <input name="tags[]" value="javascript">
// <input name="tags[]" value="typescript">

const tagsData = dphelper.form.serialize('#myForm');
// { tags: ["javascript", "typescript"] }
```

### Form Validation

```javascript
// Required field
console.log(dphelper.form.required("hello"));      // undefined (valid)
console.log(dphelper.form.required(""));            // "Required"
console.log(dphelper.form.required(null));          // "Required"
console.log(dphelper.form.required(undefined));     // "Required"

// Minimum length
console.log(dphelper.form.minLength("hello", 3));   // undefined (valid)
console.log(dphelper.form.minLength("hi", 3));     // "Must Enter a Value"

// Maximum length
console.log(dphelper.form.maxLength("hello", 10)); // undefined (valid)
console.log(dphelper.form.maxLength("hello world", 5)); // "Exceeds Max Length"

// Phone number validation
console.log(dphelper.form.maxPhoneNumber("1234567890", 10)); // undefined
console.log(dphelper.form.maxPhoneNumber("12345678901", 10)); // "Exceeds Max Length"

// Type confirmation
console.log(dphelper.form.confirmType("number", "123"));  // true
console.log(dphelper.form.confirmType("number", "abc"));  // false
console.log(dphelper.form.confirmType("email", "test@example.com")); // true
```

### Email Validation

```javascript
// Basic email validation
console.log(dphelper.form.isEmail("test@example.com"));      // true
console.log(dphelper.form.isEmail("john.doe@company.co.uk")); // true
console.log(dphelper.form.isEmail("invalid"));                // false
console.log(dphelper.form.isEmail("@example.com"));          // false
console.log(dphelper.form.isEmail("test@"));                // false

// Use in form validation
function validateForm(formData) {
  const errors = {};

  if (dphelper.form.required(formData.email)) {
    errors.email = "Email is required";
  } else if (!dphelper.form.isEmail(formData.email)) {
    errors.email = "Invalid email format";
  }

  if (dphelper.form.minLength(formData.password, 8)) {
    errors.password = "Password must be at least 8 characters";
  }

  return errors;
}
```

### Numeric Validation

```javascript
// Check if value is numeric
console.log(dphelper.form.isNumeric(123));       // true
console.log(dphelper.form.isNumeric("123"));     // true
console.log(dphelper.form.isNumeric("12.34"));    // true
console.log(dphelper.form.isNumeric("abc"));     // false
console.log(dphelper.form.isNumeric(NaN));       // false
```

### Input Event Handlers

```javascript
// Pattern validation on input change
// <input type="text" onchange="dphelper.form.pattern(event)">
document.querySelector('input[type="text"]').addEventListener('change', dphelper.form.pattern);

// Block special characters
// <input onkeyup="dphelper.form.noSpecialChars(event)">
document.querySelector('input').addEventListener('keyup', dphelper.form.noSpecialChars);

// Example: Username input
const usernameInput = document.getElementById('username');
usernameInput.addEventListener('input', (e) => {
  // Only allow letters, numbers, and underscores
  const original = e.target.value;
  const cleaned = original.replace(/[^a-zA-Z0-9_]/g, '');
  if (cleaned !== original) {
    e.target.value = cleaned;
  }
});
```

### Table Generation

```javascript
// Generate a data entry table
const container = document.getElementById('tableContainer');

// Default 7 columns x 24 rows
dphelper.form.table([7, 24], 'dataTable', container);

// Custom size: 5 columns x 10 rows
dphelper.form.table([5, 10], 'myTable', container);

// Creates an editable table with:
// - Column headers (1-5)
// - Row numbers (1-10)
// - Number inputs in each cell
// - Random values (0-99)
// - Tab navigation (column + row based)
```

### Input Sanitization

```javascript
// Remove dangerous characters
console.log(dphelper.form.sanitize("<script>alert('xss')</script>"));
// "scriptalertxssscript"

// Remove special characters but keep spaces
console.log(dphelper.form.sanitize("Hello World! @#$%"));
// "Hello World "

// Use for form input
function handleFormSubmit(e) {
  e.preventDefault();

  const formData = {};
  const inputs = e.target.querySelectorAll('input');

  inputs.forEach(input => {
    formData[input.name] = dphelper.form.sanitize(input.value);
  });

  // Now safe to process
  console.log(formData);
}
```

## Advanced Usage

### Complete Form Validation

```javascript
class FormValidator {
  constructor() {
    this.errors = {};
  }

  validate(field, value, rules) {
    this.errors[field] = undefined;

    if (rules.required) {
      const error = dphelper.form.required(value);
      if (error) {
        this.errors[field] = error;
        return false;
      }
    }

    if (rules.minLength) {
      const error = dphelper.form.minLength(value, rules.minLength);
      if (error) {
        this.errors[field] = error;
        return false;
      }
    }

    if (rules.maxLength) {
      const error = dphelper.form.maxLength(value, rules.maxLength);
      if (error) {
        this.errors[field] = error;
        return false;
      }
    }

    if (rules.email && !dphelper.form.isEmail(value)) {
      this.errors[field] = "Invalid email address";
      return false;
    }

    if (rules.numeric && !dphelper.form.isNumeric(value)) {
      this.errors[field] = "Must be a number";
      return false;
    }

    return true;
  }

  getErrors() {
    return this.errors;
  }

  hasErrors() {
    return Object.values(this.errors).some(e => e !== undefined);
  }
}

// Usage
const validator = new FormValidator();

validator.validate('username', 'john', {
  required: true,
  minLength: 3,
  maxLength: 20
});

validator.validate('email', 'john@example.com', {
  required: true,
  email: true
});

console.log(validator.getErrors());
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
