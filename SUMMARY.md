# Table of Contents

* [dpHelper](../README.md)

---

## Core Tools

| Tool | Description |
|------|-------------|
| [ai](tools/ai.md) | AI/LLM utilities: token estimation, PII sanitization, TOON format, text chunking, embeddings |
| [array](tools/array.md) | Advanced array manipulation: find, delete, merge, filter, shuffle, unique |
| [browser](tools/browser.md) | Browser navigation, history, zoom, HTTP status codes |
| [check](tools/check.md) | Version comparison utilities |
| [date](tools/date.md) | Date/time manipulation: format conversion, calculations, localization |
| [form](tools/form.md) | Form utilities: validation, serialization, sanitization |
| [json](tools/json.md) | JSON parsing, validation, CSV conversion, sanitization |
| [load](tools/load.md) | Dynamic file/script loading for SPA and modules |
| [navigation](tools/navigation.md) | AJAX SPA navigation engine |
| [security](tools/security.md) | Encryption, hashing, UUID generation, secure storage |
| [socket](tools/socket.md) | WebSocket connection management |
| [svg](tools/svg.md) | SVG manipulation, connections, element conversion |
| [tools](tools/tools.md) | Miscellaneous utilities: byte size, z-index, password hashing |
| [window](tools/window.md) | Window management: popups, zoom, beforeunload |

---

## UI & DOM Tools

| Tool | Description |
|------|-------------|
| [anchor](tools/anchor.md) | Convert anchor tags to onclick for SPA |
| [audio](tools/audio.md) | Audio playback management |
| [color](tools/color.md) | Color format conversion, gradient generation |
| [coords](tools/coords.md) | Coordinate and position utilities |
| [disable](tools/disable.md) | Disable text selection, right-click, copy/paste |
| [dispatch](tools/dispatch.md) | Event dispatch utilities |
| [element](tools/element.md) | Element manipulation |
| [event](tools/event.md) | Event handling utilities |
| [scrollbar](tools/scrollbar.md) | Scrollbar customization |
| [screen](tools/screen.md) | Fullscreen mode control |
| [trigger](tools/trigger.md) | Programmatic click, change, input events |
| [type](tools/type.md) | Type utilities: of, isBool, isNaN, instOfObj |
| [types](tools/types.md) | Advanced type checking utilities |
| [ui](tools/ui.md) | UI utilities: FPS monitor, box model |

---

## Data & Text Tools

| Tool | Description |
|------|-------------|
| [format](tools/format.md) | Currency and phone number formatting |
| [math](tools/math.md) | Random numbers, time, percentage, prime checking |
| [objects](tools/objects.md) | Object manipulation: serialize, diff, XML conversion |
| [path](tools/path.md) | URL path, hash, query extraction |
| [sanitize](tools/sanitize.md) | HTML escaping for XSS prevention |
| [text](tools/text.md) | Text manipulation: capitalize, camelCase, keywords |
| [translators](tools/translators.md) | CSS matrix to scale conversion |

---

## Network & Storage

| Tool | Description |
|------|-------------|
| [cookie](tools/cookie.md) | Cookie management: get, set, delete |
| [fetch](tools/fetch.md) | HTTP fetch with automatic retry |
| [load](tools/load.md) | Dynamic file/script loading |
| [net](tools/net.md) | Network utilities with retry |
| [sse](tools/sse.md) | Server-Sent Events client |
| [sync](tools/sync.md) | Cross-tab communication, localStorage proxy |

---

## Advanced Tools

| Tool | Description |
|------|-------------|
| [avoid](tools/avoid.md) | Prevention utilities |
| [credits](tools/credits.md) | Credits management |
| [dispatch](tools/dispatch.md) | Event dispatch |
| [logging](tools/logging.md) | Application logging system |
| [memory](tools/memory.md) | State property locking/unlocking |
| [promise](tools/promise.md) | Promise type checking |
| [shortcut](tools/shortcut.md) | Keyboard shortcut handling |
| [sse](tools/sse.md) | Server-Sent Events |
| [system](tools/system.md) | Multi-delimiter string splitting |
| [terminal](tools/terminal.md) | In-browser terminal |
| [timer](tools/timer.md) | Async sleep, time percentage |
| [triggers](tools/triggers.md) | Custom event system (pub/sub) |

---

## Quick Reference

### Most Used Functions

```javascript
// Date formatting
dphelper.date.toYYYYMMDD(new Date())
dphelper.date.toHuman(new Date())

// Array operations
dphelper.array.merge(obj1, obj2)
dphelper.array.shuffle(array)
dphelper.array.unique(array)

// Security
dphelper.security.uuid.v4
await dphelper.security.crypt(data, secret)
await dphelper.security.hashPass(user, pass)

// Navigation
dphelper.navigation.ajax()
dphelper.navigation.load('/page')

// Browser
dphelper.browser.href('/url')
dphelper.browser.reload()
dphelper.browser.zoom()

// Form
dphelper.form.serialize('#form')
dphelper.form.isEmail(email)
dphelper.form.isNumeric(value)

// JSON
dphelper.json.is(jsonString)
dphelper.json.toCsv(data)
dphelper.json.saveCsvAs(csv, 'file')

// AI
dphelper.ai.tokenCount(data)
dphelper.ai.smartSanitize(text)
dphelper.ai.toon(data)

// Sync across tabs
dphelper.sync.tab('channel', callback)
dphelper.sync.pulse('channel', callback)
dphelper.sync.storageProxy('key', defaultValue)

// Custom events
dphelper.triggers.add('event', callback)
dphelper.triggers.emit('event', data)
```

---

*Last Updated: 20260302*
