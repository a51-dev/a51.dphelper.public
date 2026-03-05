# cookie

Cookie management utilities with security features.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `set` | Creates a cookie with specified properties | `dphelper.cookie.set({name: 'user', value: 'john', time: 365})` |
| `get` | Retrieves a cookie value by name | `dphelper.cookie.get('user')` |
| `delete` | Deletes a cookie by name | `dphelper.cookie.delete('user')` |
| `removeAll` | Clears all cookies | `dphelper.cookie.removeAll()` |

## Description

Complete cookie management:
- **Create** - Set cookies with expiration, path, security
- **Read** - Get cookie values
- **Delete** - Remove specific or all cookies
- **Security** - SameSite, Secure flags for CSRF protection

## Usage Examples

### Setting Cookies

```javascript
// Simple cookie
dphelper.cookie.set({
  name: 'theme',
  value: 'dark'
});

// Cookie with expiration (days)
dphelper.cookie.set({
  name: 'user',
  value: 'john@example.com',
  time: 30 // 30 days
});

// Secure cookie (HTTPS only)
dphelper.cookie.set({
  name: 'session',
  value: 'abc123',
  secure: true,
  sameSite: 'Strict'
});
```

### Reading Cookies

```javascript
// Get cookie value
const theme = dphelper.cookie.get('theme');
console.log(theme); // "dark"

// Get session
const session = dphelper.cookie.get('session');
```

### Deleting Cookies

```javascript
// Delete specific cookie
dphelper.cookie.delete('theme');

// Clear all cookies
dphelper.cookie.removeAll();
```

### Complete Example

```javascript
class CookieManager {
  constructor() {}

  // Save user preferences
  savePreferences(prefs) {
    dphelper.cookie.set({
      name: 'preferences',
      value: JSON.stringify(prefs),
      time: 365,
      sameSite: 'Lax'
    });
  }

  // Load preferences
  loadPreferences() {
    const prefs = dphelper.cookie.get('preferences');
    return prefs ? JSON.parse(prefs) : null;
  }

  // Clear all
  clearAll() {
    dphelper.cookie.removeAll();
  }
}
```

## Security Features

- **SameSite** - Default 'Lax' for CSRF protection
- **Secure** - Automatic on HTTPS
- **Value Encoding** - URL encoding to prevent injection

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20240613
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
