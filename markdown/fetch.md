# fetch

HTTP fetch utilities with automatic retry and exponential backoff.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `get` | Perform GET request with retry | `dphelper.fetch.get(url, options)` |
| `post` | Perform POST request with JSON | `dphelper.fetch.post(url, body, options)` |

## Description

HTTP request utilities:
- **GET** - Fetch data with automatic retries
- **POST** - Send JSON data with automatic JSON headers
- **Retry** - Exponential backoff on failure
- **Error Handling** - Automatic retry on network errors

## Usage Examples

### GET Request

```javascript
// Simple GET request
const response = await dphelper.fetch.get('https://api.example.com/data');
const data = await response.json();

// GET with options
const users = await dphelper.fetch.get('/api/users', {
  headers: { 'Authorization': 'Bearer token' }
});
```

### POST Request

```javascript
// POST JSON data
const response = await dphelper.fetch.post('/api/users', {
  name: 'John',
  email: 'john@example.com'
});

// POST with custom headers
const response = await dphelper.fetch.post('/api/upload', formData, {
  headers: { 'X-Custom-Header': 'value' }
});
```

### Error Handling with Retry

```javascript
// Automatic retry on failure
async function fetchWithRetry(url, options = {}) {
  try {
    const response = await dphelper.fetch.get(url, options);
    return await response.json();
  } catch (error) {
    console.error('Fetch failed:', error);
    return null;
  }
}
```

### API Integration

```javascript
class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint) {
    const response = await dphelper.fetch.get(`${this.baseUrl}${endpoint}`);
    return response.json();
  }

  async post(endpoint, data) {
    const response = await dphelper.fetch.post(`${this.baseUrl}${endpoint}`, data);
    return response.json();
  }
}

const api = new ApiClient('https://api.example.com');
const data = await api.get('/items');
```

## Security Notes

> [!IMPORTANT]
> Network functions (`fetch`, `SSE`, `socket`) require **input validation** by the caller.

This library provides networking primitives **by design**:
- HTTP/HTTPS requests
- Server-Sent Events
- WebSocket connections

As a devtools library, these features are essential for modern web development. **Callers are responsible for validating URLs and data** before passing them to these functions.

### Best Practices

```javascript
// ALWAYS validate and sanitize user input
const sanitizedUrl = dphelper.sanitize.url(userInput);
const validatedData = dphelper.sanitize.html(userData);

await dphelper.fetch.get(sanitizedUrl);
```

---

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20260221
- **Last Modified:** 20260329
- **Environment:** both (browser + Node.js)

---

*Automatically generated document*
