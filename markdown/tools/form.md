# form

Complete management of HTML forms.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `serialize` | Serializes form into an object | `dphelper.form.serialize([form])` |
| `confirmType` | Confirms the type of a value | `dphelper.form.confirmType([type, value])` |
| `required` | Checks if a value is required | `dphelper.form.required([value])` |
| `minLength` | Checks minimum length | `dphelper.form.minLength([value, num = 1])` |
| `maxLength` | Checks maximum length | `dphelper.form.maxLength([value, num = 1])` |

## Description

Complete tool for form management: serialization, validation, and field control.

## Usage Examples

### Serialize a Form

```javascript
const formData = dphelper.form.serialize('#my-form');
console.log(formData.email); // 'user@email.com'
```

### Quick Validation

```javascript
if (!dphelper.form.required(input.value)) {
    console.error("Required field!");
}

if (!dphelper.form.minLength(password.value, 8)) {
    console.warn("Password too short.");
}
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.1
- **Creation Date:** 20210101
- **Last Modified:** 20210101

---

*Automatically generated document - dphelper v3.0.6*
