# triggers

Custom event trigger system for application-wide event handling.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `add` | Add event listener | `dphelper.triggers.add(event, callback)` |
| `on` | Listen for event (alias for add) | `dphelper.triggers.on(event, callback)` |
| `emit` | Trigger an event with data | `dphelper.triggers.emit(event, data)` |
| `remove` | Remove all listeners for event | `dphelper.triggers.remove(event)` |
| `off` | Remove specific callback | `dphelper.triggers.off(event, callback)` |
| `clear` | Clear all triggers | `dphelper.triggers.clear()` |
| `list` | List all registered events | `dphelper.triggers.list()` |

## Description

Custom event system:
- **Event Listeners** - Add/remove custom event listeners
- **Event Emission** - Emit events with data payloads
- **Namespacing** - Organize events by name
- **Error Handling** - Safe callback execution

## Usage Examples

### Add Event Listeners

```javascript
// Listen for custom events
dphelper.triggers.add('user:login', (user) => {
  console.log('User logged in:', user);
});

dphelper.triggers.on('data:loaded', (data) => {
  console.log('Data received:', data);
});
```

### Emit Events

```javascript
// Emit events with data
dphelper.triggers.emit('user:login', { id: 1, name: 'John' });

dphelper.triggers.emit('notification', {
  type: 'success',
  message: 'Operation complete!'
});
```

### Remove Listeners

```javascript
// Remove all listeners for an event
dphelper.triggers.remove('user:login');

// Remove specific callback
const handler = (data) => console.log(data);
dphelper.triggers.on('event', handler);
// ... later
dphelper.triggers.off('event', handler);
```

### List Registered Events

```javascript
// See all registered events
const events = dphelper.triggers.list();
console.log(events); // ['user:login', 'data:loaded', ...]

// Clear all triggers
dphelper.triggers.clear();
```

### Event-Driven Architecture

```javascript
// Pub/Sub event system
class EventBus {
  constructor() {
    this.triggers = dphelper.triggers;
  }

  subscribe(event, callback) {
    this.triggers.on(event, callback);
    return () => this.triggers.off(event, callback);
  }

  publish(event, data) {
    this.triggers.emit(event, data);
  }
}

const bus = new EventBus();

// Subscribe
const unsubscribe = bus.subscribe('order:created', (order) => {
  console.log('Order created:', order.id);
});

// Publish
bus.publish('order:created', { id: 123, total: 99.99 });

// Unsubscribe
unsubscribe();
```

### Component Communication

```javascript
// Component A - Sender
function notifyUser(userId, message) {
  dphelper.triggers.emit('notification', { userId, message });
}

// Component B - Receiver
dphelper.triggers.on('notification', ({ userId, message }) => {
  showToast(`User ${userId}: ${message}`);
});
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.1
- **Creation Date:** 20250220
- **Last Modified:** 20250220
- **Environment:** client (browser)

---

*Automatically generated document*
