# sync

Modern state synchronization and browser storage helpers.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `tab` | Sync data between tabs | `dphelper.sync.tab(channel, callback)` |
| `storageProxy` | Auto-syncing localStorage proxy | `dphelper.sync.storageProxy(key, defaultValue)` |
| `pulse` | Low-latency cross-tab event bus | `dphelper.sync.pulse(channel, callback)` |

## Description

Cross-tab synchronization:
- **BroadcastChannel** - Native browser API for tab communication
- **Storage Proxy** - Automatic localStorage synchronization
- **Event Bus** - Real-time messaging between tabs
- **Security** - Same-origin validation, prototype pollution protection

## Usage Examples

### Cross-Tab Communication

```javascript
// Open two tabs and communicate between them

// In Tab 1: Listen for messages
const sync = dphelper.sync.tab('chat', (data) => {
  console.log('Received:', data);
});

// In Tab 1: Send message to other tabs
sync.post({ message: 'Hello from Tab 1!' });

// When done, close the channel
sync.close();
```

### Real-time Updates Across Tabs

```javascript
// Sync user preferences across tabs
const prefs = dphelper.sync.tab('user_prefs', (data) => {
  console.log('Preferences updated:', data);
  applyTheme(data.theme);
});

// Update preferences (sends to all other tabs)
prefs.post({ theme: 'dark', notifications: true });
```

### Auto-syncing localStorage

```javascript
// Create auto-syncing storage proxy
const settings = dphelper.sync.storageProxy('app_settings', {
  theme: 'light',
  language: 'en',
  notifications: true
});

// Changes automatically sync to localStorage
settings.theme = 'dark';
// localStorage now has: { "app_settings": "{\"theme\":\"dark\",...}" }

// Changes sync across tabs (with StorageEvent listener)
```

### With Encryption

```javascript
// Create encrypted storage proxy
const secureSettings = dphelper.sync.storageProxy('secure_data', {
  apiKey: 'secret-key',
  token: 'auth-token'
}, 'my-secret-key');

// Data is encrypted in localStorage
```

### Pulse Event Bus

```javascript
// Low-latency messaging with pulse
const pulse = dphelper.sync.pulse('notifications', (data) => {
  showNotification(data);
});

// Send notification
pulse.emit({ type: 'info', message: 'New message!' });

// Stop listening
pulse.stop();
```

### Complete Real-time App

```javascript
// Multi-tab state management
class TabSync {
  constructor(channel) {
    this.channel = channel;
    this.connection = null;
  }

  connect() {
    this.connection = dphelper.sync.tab(this.channel, (data) => {
      this.handleMessage(data);
    });
  }

  handleMessage(data) {
    console.log('Sync:', data);
    // Update UI
  }

  broadcast(action, payload) {
    if (this.connection) {
      this.connection.post({ action, payload, timestamp: Date.now() });
    }
  }

  disconnect() {
    if (this.connection) {
      this.connection.close();
    }
  }
}

// Usage
const sync = new TabSync('app_state');
sync.connect();
sync.broadcast('UPDATE_USER', { name: 'John' });
```

## Details

- **Author:** Dario Passariello & Jo
- **Version:** 0.0.2
- **Creation Date:** 20260220
- **Last Modified:** 20260221
- **Environment:** client (browser)

---

*Automatically generated document*
