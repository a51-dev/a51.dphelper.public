# logging

Advanced logging system.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `list` | Get all stored logs | `dphelper.log.list()` |
| `reg` | Log regular message | `dphelper.log.reg(message)` |
| `debug` | Log debug message | `dphelper.log.debug(message)` |
| `error` | Log error message | `dphelper.log.error(message)` |

## Description

Application logging system:
- **Multiple Levels** - Regular, debug, and error logging
- **Log Storage** - Keep history of all logged messages
- **Retrieval** - Access logs anytime with list()
- **Development** - Useful for debugging and monitoring

## Usage Examples

### Basic Logging

```javascript
// Regular log
dphelper.log.reg('Application started');
dphelper.log.reg('User logged in');

// Debug log
dphelper.log.debug('Variable value:', someVariable);
dphelper.log.debug('API Response:', response);

// Error log
dphelper.log.error('Failed to fetch data');
dphelper.log.error('Invalid input:', error);
```

### Retrieve Logs

```javascript
// Get all logs
const allLogs = dphelper.log.list();
// Returns array of all logged messages

// Display in console
console.table(dphelper.log.list());

// Filter by type
const logs = dphelper.log.list();
const errors = logs.filter(l => l.type === 'error');
```

### Debugging Application

```javascript
// Track function execution
function processData(data) {
  dphelper.log.debug('Processing started', data);

  try {
    const result = transform(data);
    dphelper.log.debug('Processing complete', result);
    return result;
  } catch (err) {
    dphelper.log.error('Processing failed', err);
    throw err;
  }
}
```

### Error Tracking

```javascript
// API error handling
async function fetchData(url) {
  try {
    const response = await fetch(url);
    dphelper.log.reg(`Fetched: ${url}`);
    return response.json();
  } catch (err) {
    dphelper.log.error(`Failed to fetch ${url}`, err);
    return null;
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
