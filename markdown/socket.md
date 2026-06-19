# socket

WebSocket utilities for real-time bidirectional communication.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `info` | Get socket library information | `dphelper.socket.info()` |
| `start` | Initialize and start a socket connection | `dphelper.socket.start(element, server, name)` |
| `connect` | Connect to a WebSocket server | `dphelper.socket.connect(server, name)` |
| `open` | Open a named socket connection | `dphelper.socket.open(id, server, name)` |
| `send` | Send data through socket | `dphelper.socket.send(message, type, name)` |
| `receive` | Set up message receiver | `dphelper.socket.receive(element, name)` |
| `keepAlive` | Maintain connection with ping/pong | `dphelper.socket.keepAlive(name)` |
| `ping` | Send ping to server | `dphelper.socket.ping(name)` |
| `check` | Check and cleanup closed connections | `dphelper.socket.check()` |
| `list` | List all active WebSocket connections | `dphelper.socket.list()` |

## Description

Complete WebSocket management toolkit:
- **Connection Management** - Connect, disconnect, keep-alive
- **Messaging** - Send and receive data
- **Monitoring** - Track active connections
- **Security** - Enforces WSS (TLS) for production

## Usage Examples

### Basic Connection

```javascript
// Initialize a socket connection
dphelper.socket.connect('wss://example.com/socket', 'myConnection');

// Set up message receiver
dphelper.socket.receive('#messageContainer', 'myConnection');

// Send a message
dphelper.socket.send('Hello World', 'message', 'myConnection');
```

### Complete Real-time Chat

```javascript
// Initialize chat connection
function initChat() {
  const server = 'wss://chat.example.com/ws';
  const name = 'chat';

  // Connect to server
  dphelper.socket.connect(server, name);

  // Set up message handler
  dphelper.socket.receive('#chatMessages', name);

  // Keep connection alive
  dphelper.socket.keepAlive(name);
}

// Send message
function sendMessage(text) {
  dphelper.socket.send(text, 'chat', 'chat');
}

// HTML: <div id="chatMessages"></div>
// HTML: <input type="text" id="chatInput">
// HTML: <button onclick="sendMessage(document.getElementById('chatInput').value)">Send</button>
```

### Multiple Socket Connections

```javascript
// Create multiple named connections
dphelper.socket.connect('wss://api.example.com/notifications', 'notifications');
dphelper.socket.connect('wss://api.example.com/updates', 'updates');
dphelper.socket.connect('wss://api.example.com/chat', 'chat');

// Send to specific connection
dphelper.socket.send('New user', 'notification', 'notifications');
dphelper.socket.send('Update data', 'update', 'updates');

// List all active connections
const connections = dphelper.socket.list();
console.log(`Active connections: ${connections.length}`);
```

### Keep-Alive Implementation

```javascript
// Maintain connection with automatic ping/pong
dphelper.socket.keepAlive('mainConnection');

// Manual ping
dphelper.socket.ping('mainConnection');

// Check connection health
dphelper.socket.check();
```

### Form Submission via Socket

```javascript
// Send form data through socket
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  dphelper.socket.send(JSON.stringify(data), 'form', 'mainConnection');
});
```

## Security Features

- **TLS Enforcement** - Only allows secure WebSocket connections (wss://)
- **URL Validation** - Prevents arbitrary origin connections
- **Same-origin fallback** - Supports relative URLs

> [!IMPORTANT]
> **Input Validation Required:** Callers must validate and sanitize URLs before passing them to socket functions. Use `dphelper.sanitize.url()` for URL validation.

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260329
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
