# navigation

Single Page Application (SPA) navigation engine in Vanilla JavaScript.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `ajax` | Activates the SPA engine that intercepts local links | `dphelper.navigation.ajax()` |
| `load` | Loads a specific page via AJAX and updates the body | `dphelper.navigation.load('/home')` |

## Description

This tool transforms the site into a Single Page Application. It intercepts clicks on links starting with `/`, fetches the page content via `fetch`, and injects it into the `body` without reloading the entire page. It automatically manages browser history (`history.pushState`), page title updates, and body classes.

## Usage Examples

### Global Activation

Insert this command during site initialization to activate smooth navigation:

```javascript
dphelper.navigation.ajax();
```

### Programmatic Loading

Load a specific section via code:

```javascript
await dphelper.navigation.load('/products');
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20260223
- **Last Modified:** 20260223

---

*Automatically generated document*
