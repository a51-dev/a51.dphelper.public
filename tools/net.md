# net

Resilient networking and fetch utilities.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `smartFetch` | Fetch with automatic retry | `dphelper.net.smartFetch(url, options)` |

## Description

Network communication utilities:
- **Smart Fetch** - Automatic retry with exponential backoff
- **Resilience** - Handle transient network errors
- **Retry Strategy** - Configurable retry attempts and delays

## Usage Examples

### Smart Fetch with Retry

```javascript
// Basic smart fetch
const response = await dphelper.net.smartFetch('/api/data');
const data = await response.json();

// Fetch with options
const result = await dphelper.net.smartFetch('https://api.example.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ key: 'value' })
});
```

### API Error Handling

```javascript
// Robust API calls
async function fetchUserData(userId) {
  try {
    const response = await dphelper.net.smartFetch(`/api/users/${userId}`);
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return null;
  }
}
```

## Details

- **Author:** Dario Passariello & Jo
- **Version:** 0.0.1
- **Creation Date:** 20260220
- **Last Modified:** 20260220
- **Environment:** both (browser + Node.js)

---

*Automatically generated document*
