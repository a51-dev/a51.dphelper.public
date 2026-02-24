# browser

Functionality for navigation and browser state.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `state` | Pushes a new state to the history | `dphelper.browser.state([state, title, url])` |
| `forw` | Moves forward in the history | `dphelper.browser.forw([number])` |
| `back` | Moves backward in the history | `dphelper.browser.back([number])` |
| `reload` | Reloads the page | `dphelper.browser.reload()` |
| `href` | Navigates to a URL | `dphelper.browser.href()` |
| `offLine` | Shows an offline message | `dphelper.browser.offLine()` |
| `zoom` | Returns the zoom level | `dphelper.browser.zoom()` |
| `status` | Returns a description of the HTTP status | `dphelper.browser.status()` |

## Description

A complete tool for managing browser navigation, including history, URLs, and connection status.

## Usage Examples

### Change URL without reloading

```javascript
dphelper.browser.state({ id: 1 }, "Page Title", "/new-url");
```

### Forced navigation

```javascript
dphelper.browser.href("https://google.com");
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.1
- **Creation Date:** 20210101
- **Last Modified:** 20210101

---

*Automatically generated document - dphelper v3.0.6*
