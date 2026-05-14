# memory

Memory and state management.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `lock` | Lock a state property | `dphelper.memory.lock('state[key]')` |
| `unlock` | Unlock a state property | `dphelper.memory.unlock('state[key]')` |

## Description

State property protection:
- **Lock** - Make property non-writable and non-configurable
- **Unlock** - Restore writability and configurability
- **Global State** - Work with window-level state objects

## Usage Examples

### Lock State Property

```javascript
// Define global state
window.myApp = {
  config: { theme: 'dark' },
  user: { name: 'John' }
};

// Lock the config
dphelper.memory.lock('myApp.config');

// Try to modify (will fail silently or throw in strict mode)
myApp.config = {}; // Won't work - locked

// Can still modify properties if not locked
myApp.config.theme = 'light'; // May work depending on implementation
```

### Unlock State Property

```javascript
// Unlock previously locked property
dphelper.memory.unlock('myApp.config');

// Now can modify
myApp.config = { theme: 'light' };
```

### Protect Application State

```javascript
// Create protected app state
const appState = {
  version: '1.0.0',
  initialized: false,
  data: {}
};

// Add to window
window.appState = appState;

// Lock critical properties
dphelper.memory.lock('appState.version'); // Prevent version changes
dphelper.memory.lock('appState.initialized'); // Prevent re-initialization

// Unlock when needed (e.g., updates)
function updateVersion(newVersion) {
  dphelper.memory.unlock('appState.version');
  appState.version = newVersion;
  dphelper.memory.lock('appState.version');
}
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20230101
- **Last Modified:** 20230111
- **Environment:** client (browser)

---

*Automatically generated document*
