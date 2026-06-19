# browser

Complete browser navigation and state management utilities with connection monitoring and HTTP status handling.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `state` | Pushes a new state to browser history without reload | `dphelper.browser.state(state, title, url)` |
| `forw` | Moves forward in browser history by n steps | `dphelper.browser.forw(1)` |
| `back` | Moves backward in browser history by n steps | `dphelper.browser.back(1)` |
| `reload` | Reloads the current page | `dphelper.browser.reload()` |
| `href` | Navigates to a specific URL | `dphelper.browser.href('https://example.com')` |
| `offLine` | Displays an offline message overlay when connection is lost | `dphelper.browser.offLine('Custom offline message')` |
| `zoom` | Returns the current browser zoom level as percentage | `dphelper.browser.zoom()` |
| `status` | Returns human-readable description of HTTP status codes | `dphelper.browser.status(404)` |
| `interlock` | Detects and monitors other active tabs of the same app | `dphelper.browser.interlock((count) => console.log(count))` |

## Description

Comprehensive browser management tool that provides:
- **History Navigation** - Push state, go forward/back, reload
- **URL Management** - Navigate to specific URLs
- **Connection Monitoring** - Detect online/offline status
- **Display Information** - Get zoom level, HTTP status descriptions
- **Multi-tab Detection** - Monitor concurrent tab usage

## Usage Examples

### Changing URL Without Reload (SPA Routing)

```javascript
// Add a new history entry without page reload
dphelper.browser.state({ page: 'dashboard', userId: 123 }, 'Dashboard', '/dashboard');

// The browser's back button will now work
window.addEventListener('popstate', (event) => {
  console.log('Navigated to:', event.state);
});
```

### Programmatic Navigation

```javascript
// Navigate to a specific URL
dphelper.browser.href('/search?q=javascript');

// Navigate to external site
dphelper.browser.href('https://google.com');

// Go forward 2 pages in history
dphelper.browser.forw(2);

// Go back 1 page in history
dphelper.browser.back(1);

// Reload the page
dphelper.browser.reload();
```

### Offline Detection Overlay

```javascript
// Show default offline message
dphelper.browser.offLine();

// Show custom offline message (text is sanitized for security)
dphelper.browser.offLine('⚠️ Connection Lost. Please check your internet.');

// The overlay appears automatically when offline
// and disappears when connection is restored
```

### Get Browser Zoom Level

```javascript
const zoom = dphelper.browser.zoom();
console.log(zoom); // 100 (or 150, 200, etc. depending on zoom)

// Responsive design based on zoom
if (zoom > 100) {
  document.body.classList.add('zoomed-in');
}
```

### HTTP Status Code Descriptions

```javascript
// Get description for common status codes
console.log(dphelper.browser.status(200)); // "200 OK"
console.log(dphelper.browser.status(201)); // "201 Created"
console.log(dphelper.browser.status(301)); // "301 Moved Permanently"
console.log(dphelper.browser.status(400)); // "400 Bad Request"
console.log(dphelper.browser.status(401)); // "401 Unauthorized"
console.log(dphelper.browser.status(403)); // "403 Forbidden"
console.log(dphelper.browser.status(404)); // "404 Not Found"
console.log(dphelper.browser.status(500)); // "500 Internal Server Error"

// Display user-friendly error messages
function handleApiError(statusCode) {
  const message = dphelper.browser.status(statusCode);
  alert(`Error: ${message}`);
}
```

### Multi-Tab Synchronization

```javascript
// Monitor active tabs of your application
dphelper.browser.interlock((tabCount) => {
  console.log(`Active tabs: ${tabCount}`);

  if (tabCount > 1) {
    // Warn user about multiple tabs
    showNotification('This app is open in multiple tabs. Changes may conflict.');
  }
});

// Use BroadcastChannel for real-time sync between tabs
const channel = new BroadcastChannel('app_sync');
channel.postMessage({ type: 'UPDATE', data: 'new value' });
```

## Advanced Usage

### Complete SPA Navigation Handler

```javascript
class Router {
  constructor() {
    this.routes = {};

    // Handle browser back/forward
    window.addEventListener('popstate', (e) => {
      this.navigate(window.location.pathname, false);
    });
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  navigate(path, addToHistory = true) {
    const handler = this.routes[path];
    if (handler) {
      if (addToHistory) {
        dphelper.browser.state({ path }, 'App', path);
      }
      handler();
    }
  }
}

// Usage
const router = new Router();
router.addRoute('/', () => renderHome());
router.addRoute('/about', () => renderAbout());
router.addRoute('/dashboard', () => renderDashboard());
```

### Connection Status Manager

```javascript
class ConnectionManager {
  constructor() {
    this.isOnline = navigator.onLine;
    this.listeners = [];

    window.addEventListener('online', () => {
      this.isOnline = true;
      this.notifyListeners();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      this.notifyListeners();
    });

    // Show offline overlay
    dphelper.browser.offLine('🔌 You are offline. Some features are disabled.');
  }

  onStatusChange(callback) {
    this.listeners.push(callback);
  }

  notifyListeners() {
    this.listeners.forEach(cb => cb(this.isOnline));
  }
}
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
