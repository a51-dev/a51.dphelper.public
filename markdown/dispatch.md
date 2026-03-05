# dispatch

Custom event dispatch and listener management utilities.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `set` | Dispatch a custom event | `dphelper.dispatch.set('myEvent', { detail: data })` |
| `listen` | Listen for custom events | `dphelper.dispatch.listen('myEvent', callback)` |
| `remove` | Remove event listener | `dphelper.dispatch.remove('myEvent')` |

## Description

Custom event management:
- **Dispatch** - Fire custom events with data
- **Listen** - Register event handlers
- **Manage** - Remove listeners

## Usage Examples

### Dispatching Events

```javascript
// Simple event
dphelper.dispatch.set('user:login');

// With data
dphelper.dispatch.set('user:login', {
  detail: { userId: 123, timestamp: Date.now() }
});

// Application events
dphelper.dispatch.set('app:loaded');
dphelper.dispatch.set('data:updated', { detail: { source: 'api' } });
```

### Listening for Events

```javascript
// Listen for event
dphelper.dispatch.listen('user:login', (e) => {
  console.log('User logged in:', e.detail);
});

// Multiple handlers
dphelper.dispatch.listen('data:updated', (e) => {
  console.log('Data updated:', e.detail);
});

// App lifecycle
dphelper.dispatch.listen('app:loaded', () => {
  console.log('App ready!');
  initializeApp();
});
```

### Removing Listeners

```javascript
// Remove specific listener
dphelper.dispatch.remove('user:login');

// Clean up on component unmount
function cleanup() {
  dphelper.dispatch.remove('myEvent');
}
```

### Complete Event System

```javascript
class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    dphelper.dispatch.listen(event, callback);
  }

  emit(event, data) {
    dphelper.dispatch.set(event, { detail: data });
  }

  off(event) {
    dphelper.dispatch.remove(event);
  }
}

// Usage
const events = new EventBus();

events.on('user:action', (e) => console.log('Action:', e.detail));
events.emit('user:action', { type: 'click', target: 'button' });
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20231231
- **Last Modified:** 20240612
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
