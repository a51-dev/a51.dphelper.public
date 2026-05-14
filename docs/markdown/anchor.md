# anchor

Convert anchor tags to JavaScript onclick events for SPA (Single Page Application) navigation while maintaining compatibility with older browsers.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `toOnClick` | Converts all anchor tags in an element to onclick events | `dphelper.anchor.toOnClick('#container')` |

## Description

This tool enables smooth SPA navigation by converting traditional `<a>` tags to JavaScript event handlers. It prevents full page reloads while maintaining browser history functionality. Useful for:
- Converting legacy HTML to SPA-compatible navigation
- Mixed environments (some pages SPA, some traditional)
- Progressive enhancement of existing sites

## Usage Examples

### Basic Usage

```javascript
// Convert all links in a container to onclick events
dphelper.anchor.toOnClick('#main-content');

// Now all <a> tags in #main-content will use JavaScript navigation
// instead of traditional page reloads
```

### HTML Structure

```html
<div id="content">
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>

  <main>
    <a href="/dashboard">Dashboard</a>
    <a href="/settings">Settings</a>
  </main>
</div>

<script>
  // Convert all links in the content area
  dphelper.anchor.toOnClick('#content');
</script>
```

### How It Works

When you call `toOnClick`:

1. **Selection** - Finds all `<a>` tags within the specified element
2. **PathRail Integration** - Adds path-based CSS classes for styling
3. **Event Conversion** - Removes `href` attribute and adds click handlers
4. **Navigation Handling**:
   - Relative paths (`/dashboard`) → Uses SPA router via `history.pushState`
   - External paths (`https://...`) → Uses `dphelper.browser.href()`

### Integration with PathRail

```javascript
// PathRail must be configured for full functionality
// When used with dphelper.navigation, enables:
// - Dynamic page loading
// - CSS class targeting based on current path
// - History management

// Example: Current path is /dashboard/users
dphelper.anchor.toOnClick('#app');

// Adds class 'dashboardusers' to each anchor for path-based styling
```

## Advanced Usage

### SPA Router Integration

```javascript
// Simple SPA router using anchor conversion
class SPARouter {
  constructor(selector) {
    this.selector = selector;
    this.routes = {};

    // Convert anchors when initialized
    dphelper.anchor.toOnClick(selector);

    // Handle browser back/forward
    window.addEventListener('popstate', () => this.load(window.location.pathname));
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  load(path) {
    const handler = this.routes[path];
    if (handler) {
      handler();
      document.dispatchEvent(new CustomEvent('route:change', { detail: { path } }));
    }
  }

  navigate(path) {
    history.pushState({}, '', path);
    this.load(path);
  }
}

// Usage
const router = new SPARouter('#app');
router.addRoute('/', () => renderHome());
router.addRoute('/about', () => renderAbout());
router.addRoute('/dashboard', () => renderDashboard());
```

### Progressive Enhancement

```javascript
// Convert anchors while preserving accessibility
function enhanceAnchors(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const anchors = container.querySelectorAll('a');

  anchors.forEach(anchor => {
    // Add aria-label if missing
    if (!anchor.getAttribute('aria-label')) {
      anchor.setAttribute('aria-label', anchor.textContent);
    }

    // Ensure keyboard accessibility
    anchor.setAttribute('tabindex', '0');
  });

  // Convert to onclick
  dphelper.anchor.toOnClick(containerSelector);
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
