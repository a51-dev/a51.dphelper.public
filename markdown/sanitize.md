# sanitize

Input/output sanitization for security.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `html` | Sanitize HTML by escaping special characters | `dphelper.sanitize.html(html)` |

## Description

Security-focused sanitization utilities:
- **HTML Escape** - Convert special characters to HTML entities
- **XSS Prevention** - Prevent cross-site scripting attacks
- **Input Validation** - Clean user-provided content

## Usage Examples

### HTML Sanitization

```javascript
// Escape HTML special characters
const userInput = '<script>alert("XSS")</script>';
const safe = dphelper.sanitize.html(userInput);
// Output: "<script>alert("XSS")</script>"

// More examples
const html1 = dphelper.sanitize.html('<div class="test">Hello</div>');
// "<div class="test">Hello</div>"

const html2 = dphelper.sanitize.html('Use <br> for line breaks');
// "Use <br> for line breaks"

const html3 = dphelper.sanitize.html("It's a beautiful day");
// "It's a beautiful day"
```

### Display User Content Safely

```javascript
// Safely display user comments
function displayComment(comment) {
  const sanitized = dphelper.sanitize.html(comment);
  document.getElementById('comments').innerHTML = sanitized;
}

// User input (malicious)
const maliciousInput = '<img src=x onerror=alert(1)>';
displayComment(maliciousInput);
// Safely displays as text, not executed

// Chat message sanitization
const messages = [
  '<b>User1:</b> Hello everyone!',
  '<script>stealCookies()</script>Welcome!',
  'Check out <a href="http://evil.com">this link</a>'
];

messages.forEach(msg => {
  console.log(dphelper.sanitize.html(msg));
});
// <b>User1:</b> Hello everyone!
// <script>stealCookies()</script>Welcome!
// Check out <a href="http://evil.com">this link</a>
```

### Form Input Validation

```javascript
// Sanitize form inputs before storage
function sanitizeFormInput(input) {
  if (typeof input !== 'string') return '';
  return dphelper.sanitize.html(input.trim());
}

const formData = {
  username: '  <script>bad()</script>user  ',
  bio: 'I love <programming> and "quotes"',
  website: 'https://example.com'
};

const sanitized = {
  username: sanitizeFormInput(formData.username),
  bio: sanitizeFormInput(formData.bio),
  website: sanitizeFormInput(formData.website)
};
// { username: "<script>bad()</script>user", ... }
```

### Database Storage

```javascript
// Sanitize before storing in database
function saveToDatabase(data) {
  const sanitized = {};
  for (const key in data) {
    if (typeof data[key] === 'string') {
      sanitized[key] = dphelper.sanitize.html(data[key]);
    } else {
      sanitized[key] = data[key];
    }
  }
  return sanitized;
}
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20241204
- **Last Modified:** 20241204
- **Environment:** both (browser + Node.js)

---

*Automatically generated document*
