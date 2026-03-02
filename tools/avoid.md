# avoid

Utilities for preventing caching issues in web applications.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `cache` | Appends cache-busting query parameter to URL | `dphelper.avoid.cache('/api/data')` |

## Description

Prevents browser caching issues:
- **Cache Busting** - Add unique query params to URLs

## Usage Examples

### Cache Busting

```javascript
// Add unique query parameter to prevent caching
const url = '/api/users';
const uncachedUrl = dphelper.avoid.cache(url);
console.log(uncachedUrl); // "/api/users?t=abc123xyz"

// Useful for:
// - API calls that need fresh data
// - Dynamic content
// - Debugging (force reload)
dphelper.avoid.cache('/api/latest-data');
```

### Using with Fetch

```javascript
// Fetch with cache busting
async function fetchFresh(url) {
  const response = await fetch(dphelper.avoid.cache(url));
  return response.json();
}
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** Works in both client and server environments

---

*Automatically generated document*
