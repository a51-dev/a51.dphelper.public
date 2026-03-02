# navigation

AJAX-based Single Page Application (SPA) navigation engine for seamless page transitions.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `ajax` | Initialize SPA navigation engine | `dphelper.navigation.ajax()` |
| `load` | Load page via AJAX | `dphelper.navigation.load('/about')` |

## Description

Complete SPA navigation solution:
- **AJAX Loading** - Load pages without refresh
- **History Management** - Browser back/forward support
- **Hash Support** - Scroll to hash elements
- **XSS Protection** - HTML sanitization

## Usage Examples

### Initialize SPA Navigation

```javascript
// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  dphelper.navigation.ajax();
});

// Now all anchor links will use AJAX navigation
// <a href="/about">About</a> will load without refresh
```

### Manual Page Load

```javascript
// Load a page programmatically
dphelper.navigation.load('/dashboard');

// Loads /dashboard content into current page
// Updates browser history
// Scrolls to top

// With slug normalization
dphelper.navigation.load('about');     // Loads 'about/'
dphelper.navigation.load('/contact');  // Loads 'contact/'
dphelper.navigation.load('home');      // Loads 'home/'
```

### How It Works

1. **Initialization** - `ajax()` binds all anchor tags
2. **Click Interception** - Links are converted to AJAX handlers
3. **Content Loading** - Page content fetched via fetch API
4. **Content Injection** - Body content replaced (sanitized)
5. **History Update** - Browser history updated with pushState

### HTML Structure

```html
<!-- Standard links - automatically handled -->
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>

<!-- Main content area -->
<main id="app">
  <!-- Content loaded here -->
</main>
```

### Hash Navigation

```html
<!-- Scroll to element on page -->
<a href="#section1">Section 1</a>

<!-- Smooth scroll to section -->
<div id="section1">Content</div>
```

### Security Features

- **XSS Prevention** - HTML content is sanitized
- **Same-origin** - Only same-origin URLs allowed
- **Open Redirect Prevention** - Validates URL origins

## Advanced Usage

### Conditional Navigation

```javascript
class SPANavigator {
  constructor() {
    this.init();
  }

  init() {
    dphelper.navigation.ajax();
  }

  navigate(path) {
    dphelper.navigation.load(path);
  }

  // Programmatic navigation
  goHome() {
    this.navigate('/');
  }

  goTo(path) {
    this.navigate(path);
  }
}

const navigator = new SPANavigator();
```

### Loading State

```javascript
// The loader is automatically added
// Customize with CSS:
/*
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.9);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
*/
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20260223
- **Last Modified:** 20260223
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
