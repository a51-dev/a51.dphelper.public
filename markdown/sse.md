# sse

Server-Sent Events (SSE) client for real-time streaming data.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `open` | Open SSE connection with custom options | `dphelper.sse.open('/api/stream', options)` |

## Description

Server-Sent Events client:
- **Streaming** - Receive real-time updates from server
- **Custom Headers** - POST requests, authentication
- **Event Types** - message, error, open handlers
- **Auto Reconnect** - Built-in connection handling

## Usage Examples

### Basic SSE Connection

```javascript
// Open SSE connection
const sse = dphelper.sse.open('/api/stream');

// Listen for messages
sse.on('message', (data) => {
  console.log('Received:', data);
});

// Handle errors
sse.on('error', (err) => {
  console.error('SSE Error:', err);
});

// Connection opened
sse.on('open', (info) => {
  console.log('Connected:', info.status);
});
```

### POST Request with Headers

```javascript
// SSE with authentication
const sse = dphelper.sse.open('/api/stream', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ query: 'updates' })
});

sse.on('message', (data) => {
  updateUI(data);
});
```

### Complete Real-time Updates

```javascript
class RealtimeUpdater {
  constructor(url, options = {}) {
    this.url = url;
    this.options = options;
    this.connection = null;
  }

  connect() {
    this.connection = dphelper.sse.open(this.url, this.options);

    this.connection.on('message', (data) => {
      this.handleMessage(data);
    });

    this.connection.on('error', (err) => {
      console.error('Connection error:', err);
    });

    this.connection.on('open', (info) => {
      console.log('Connected:', info.status);
    });
  }

  handleMessage(data) {
    console.log('Update:', data);
  }

  disconnect() {
    if (this.connection) {
      this.connection.close();
    }
  }
}

// Usage
const updater = new RealtimeUpdater('/api/updates', {
  headers: { 'X-API-Key': 'secret' }
});
updater.connect();
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.1
- **Creation Date:** 20260221
- **Last Modified:** 20260221
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
