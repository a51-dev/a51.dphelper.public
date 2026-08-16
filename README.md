# [dphelper](https://npmjs.com/package/dphelper)

![dpHelper](https://raw.githubusercontent.com/passariello/container/refs/heads/main/dphelper/assets/images/banner.svg)

> **The supercharged toolkit for modern web development, AI engineering & DevTools.**

[![version](https://img.shields.io/npm/v/dphelper.svg)](https://npmjs.org/package/dphelper)
[![downloads](https://img.shields.io/npm/dm/dphelper.svg)](https://npmjs.org/package/dphelper)

![Node.js](https://img.shields.io/badge/Node.js-gray?logo=node.js)
![tsup](https://img.shields.io/badge/tsup-gray?logo=esbuild)

![React](https://img.shields.io/badge/React-gray?logo=React)
![TypeScript](https://img.shields.io/badge/TypeScript-gray?logo=typescript)
![Javascript](https://img.shields.io/badge/Javascript-gray?logo=Javascript)

![Vitest](https://img.shields.io/badge/Vitest-gray?logo=vitest)
![OXlint](https://img.shields.io/badge/Oxlint-gray?logo=oxc)
[![E2E with Playwright](https://img.shields.io/badge/E2E%20with-Playwright-2ECC71.svg)](https://playwright.dev/)

![AI Ready](https://img.shields.io/badge/AI-Ready-brightgreen?logo=openai)
![TOON](https://img.shields.io/badge/TOON-Format-blue)

---

## Table of Contents

1. [About](#about)
2. [Installation](#installation)
3. [AI Power User Guide](#ai-power-user-guide)
4. [Modular Architecture](#modular-architecture)
5. [Browser Extension (Chrome/Edge)](#browser-extension-chromeedge)
6. [Environment Compatibility](#environment-compatibility)
7. [Security](#security)

---

## About

**dphelper** is a powerful, zero-dependency utility library that brings together **production-ready tools** for web developers, AI engineers, and DevTools creators.

Think of it as your **universal toolbox** - from DOM manipulation to cryptographic operations, from real-time WebSocket handling to AI-powered token optimization. No more juggling multiple packages. One import, infinite possibilities.

### Why dphelper?

- **⚡ Zero Dependencies** - Pure vanilla JavaScript/TypeScript. No bloat, no surprises.
- **🤖 AI-First Design** - Built for LLM apps with TOON optimization, token counting, and RAG support.
- **🌐 Universal** - Works in browser, Node.js, Bun, and Deno.
- **🔒 Type-Safe** - Full TypeScript definitions auto-generated for every tool.
- **📦 Tiny Bundle** - Only ~171KB minified, tree-shakeable.
- **🔐 Security First** - NIST/NSA compliant, CNSA algorithms, PBKDF2 310k iterations

> [!NOTE]
> **Network Access:** This library includes networking primitives (`fetch`, `sse`, `socket`) by design for modern web development. Callers are responsible for validating and sanitizing URLs before use. See the [Security](#security) section for best practices.

> *"dphelper is what you'd build if you combined lodash, socket.io, and an AI SDK - but lighter."*

---

## State and Store removed from dpHelper

> [!IMPORTANT]
> dpHelper do not integrate state management directly anymore
>
> Application state is currently handled through **Memorio** or **RGS**.

If you need to use state/store management please consider:

- [Memorio](http://www.npmjs.com/package/memorio) - State and Store Manager
- [Argis RGS](https://www.npmjs.com/package/@biglogic/rgs) - Enterprise Lever State Manager

---

## Installation

```shell
npm i dphelper --save-dev
```

### Usage

Import it precisely **once** in your entry point (e.g., `index.js`, `main.ts`, or `App.tsx`):

```js
// IMPORT ONCE AT YOUR APP ENTRY POINT

import "dphelper";
```

### Modular imports

For a smaller bundle or cleaner tree-shaking, import only the tool you need. Each modular entry point exposes the tool both as a **named export** and on the **global `dphelper`** object, so existing global-usage code keeps working unchanged.

```ts
import { sanitize } from "dphelper/sanitize"
import { format } from "dphelper/format"
import { fetch } from "dphelper/fetch"
import { security } from "dphelper/security"

sanitize.html("<strong>safe text</strong>")
format.currency(1234.56, "en-US", "USD")
await fetch.get("https://api.example.com")
security.ulid()
```

The same tool is also available on the global after import:

```ts
import "dphelper/format"

// Identical to the named export above
dphelper.format.currency(1234.56, "en-US", "USD")
```

> [!NOTE]
> Every tool under `tools/` is published as `dphelper/<tool>` (e.g. `dphelper/array`, `dphelper/i18n`, `dphelper/worker`). The full list is generated automatically from the `tools/` directory at build time, so adding a new tool creates its modular entry point with no extra configuration.

> [!IMPORTANT]
> **TypeScript + `resolvePackageJsonExports`:** Modular subpath imports (e.g. `import { sanitize } from "dphelper/sanitize"`) are resolved through the `exports` map in `dphelper`'s `package.json`. If your `tsconfig.json` sets `"resolvePackageJsonExports": false`, TypeScript will fall back to physical path resolution and fail with `Cannot find module 'dphelper/<tool>' or its corresponding type declarations` (TS2307), because the tool actually lives under `modules/<tool>` rather than at the package root.
>
> To fix it, either:
> - keep `"resolvePackageJsonExports": true` (the default for `moduleResolution: "bundler"`), or
> - import from the physical path: `import { sanitize } from "dphelper/modules/sanitize"`.
>
> Note: this is a TypeScript-only resolution issue. Vite and other bundlers resolve the subpath correctly at build/runtime via the `exports` map regardless of that flag.

For plain HTML/CDN:

```html
<script src="https://unpkg.com/dphelper/dphelper.js"></script>

<!-- Optional check -->
<script>
  console.debug(dphelper.version);  // latest version
  console.debug(dphelper.isBrowser); // true
</script>
```

---

## ⚙️ Web Worker Module

```javascript
// Create worker from file
const worker = dphelper.worker.create('worker.js', {
  onmessage: (e) => console.log(e.data)
});

// Create inline worker
const inlineWorker = dphelper.worker.createInline(`
  self.onmessage = e => postMessage(e.data * 2);
`);

// Worker pool for parallel processing
const pool = dphelper.worker.pool('worker.js', 4);
const results = await dphelper.worker.poolExec(pool, [1, 2, 3, 4]);

// SharedWorker for cross-tab communication
const shared = dphelper.worker.shared('worker.js', { name: 'my-shared' });
```

---

## 🌍 i18n Module

```javascript
// Set locale
dphelper.i18n.setLocale('it');

// Add translations
dphelper.i18n.addTranslations('it', {
  hello: 'Ciao {name}!',
  items: '{count, plural, one{# item} other{# items}}'
});

// Translate with interpolation
dphelper.i18n.t('hello', { name: 'World' }); // "Ciao World!"

// Pluralize
dphelper.i18n.pluralize(5, { one: 'item', other: 'items' }); // "items"

// Format number/currency
dphelper.i18n.number(1234.56, 'de-DE', { style: 'currency', currency: 'EUR' });

// Relative time
dphelper.i18n.relativeTime(Date.now() - 3600000); // "1 hour ago"
```
---

## 🗜️ Compression Module

```javascript
// Gzip compression
const compressed = await dphelper.compress.gzip('Hello World');
const decompressed = await dphelper.compress.gunzip(compressed);

// Base64 encoding
const encoded = dphelper.compress.base64Encode('Hello');
const decoded = dphelper.compress.base64Decode(encoded);

// URL encoding
const urlEncoded = dphelper.compress.urlEncode('Hello World!');
const urlDecoded = dphelper.compress.urlDecode(urlEncoded);

// HTML encoding
const htmlEncoded = dphelper.compress.htmlEncode('<script>');
const htmlDecoded = dphelper.compress.htmlDecode('&lt;script&gt;');
```

---

## 🔐 Biometric Module (WebAuthn)

```javascript
// Check availability
const available = dphelper.biometric.isAvailable();

// Get support details
const support = dphelper.biometric.getWebAuthnSupport();

// Register credential
const { success, credentialId } = await dphelper.biometric.register('user123');

// Authenticate
const { success } = await dphelper.biometric.authenticate('user123');

// Check specific sensor
const hasFingerprint = await dphelper.biometric.isSensorAvailable('fingerprint');
```

---

## AI Power User Guide

The new `dphelper.ai` module is designed for the modern AI stack (LLMs, RAG, Vector Search).

```javascript
// ⚡ TOON: The ultimate JSON alternative for prompts
const toonData = dphelper.ai.toon(myJsonObject);
// Efficient, compact, and deterministic.

// 📏 Context-Aware Token Counting
const tokens = dphelper.ai.tokenCount(myJsonObject);
// Automatically calculates tokens based on the optimal TOON representation.

// 🧩 Smart Chunker (RAG Ready)
const chunks = dphelper.ai.chunker(longText, { size: 1000, overlap: 200 });

// 🔍 Semantic Similarity
const score = dphelper.ai.similarity(embeddingA, embeddingB);

// 🧠 Reasoning Extractor (DeepSeek/O1 support)
const { reasoning, content } = dphelper.ai.extractReasoning(rawAiReply);

// 📸 The AI Black Box (Snapshot)
const appStateToon = dphelper.ai.snapshot();
// Generates a complete app "mental dump" (URL, gState, Logs) optimized for LLMs.
```

---

## Modular Architecture

Every tool in `dphelper` is now a self-contained module. Our new build system automatically:

1. Scans the `tools/` directory.
2. Generates dynamic imports for the core.
3. Synchronizes TypeScript interfaces in `dphelper.d.ts`.

This ensures that adding new tools is instantaneous and always documented with full Intellisense support.

---

## 🔄 UI Mirror & Auto-Recovery

`dphelper` makes your web app feel like a native desktop application with cross-tab intelligence.

```javascript
// ⚓ Auto-Recovery: Save scroll and input values across reloads/crashes
dphelper.UI.anchorContext();

// 💓 Pulse: Real-time event bus between all open tabs (No Backend needed!)
const bus = dphelper.sync.pulse('my-app', (msg) => {
  console.debug('Received from another tab:', msg);
});
bus.emit({ action: 'theme-change', value: 'dark' });

// 🔒 Interlock: Monitor how many tabs of your app are active
dphelper.browser.interlock((count) => {
  console.debug(`Active tabs: ${count}`);
});

// 🌊 SSE: Modern streaming (Support for POST & Headers)
const stream = dphelper.sse.open('/api/ai', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer ...' },
  body: JSON.stringify({ prompt: 'Hello AI' })
});

stream.on('message', (data) => console.debug('Chunk:', data));
stream.on('error', (err) => console.error('Stream failure:', err));
```

---

## Browser Extension (Chrome/Edge)

![dphelper Banner](https://raw.githubusercontent.com/passariello/container/refs/heads/main/dphelper/assets/images/screenshot.png)

Manage your `dphelper` environment, monitor memory usage, and access documentation directly from your browser.

- [Download for Chrome](https://chrome.google.com/webstore/detail/dphelper-manager-dev-tool/oppppldaoknfddeikfloonnialijngbk)
- [Download for Edge](https://microsoftedge.microsoft.com/addons/detail/dphelper-manager-dev-to/kphabkbdpaljlfagldhojilhfammepnk)

---

## Environment Compatibility

`dphelper` tools are classified by their execution target to ensure stability across the stack.

| Icon | Type | Description |
| :--- | :--- | :--- |
| 🌐 | **Client** | Browser only (requires DOM, window, or navigator). |
| 🖥️ | **Server** | Node.js / Bun / Deno only (access to process, fs, etc). |
| 🧬 | **Isomorphic** | Universal. Works in both Browser and Server (AI, Logic, Math). |

### Core Module Status

- `dphelper.ai`: 🧬 Isomorphic
- `dphelper.fetch`: 🧬 Isomorphic (Supports Node 18+)
- `dphelper.sse`: 🌐 Client (Streaming fetch)
- `dphelper.socket`: 🌐 Client (WebSocket)
- `dphelper.sync`: 🌐 Client (BroadcastChannel)
- `dphelper.UI`: 🌐 Client (DOM based)

---

## Security

dphelper follows **NIST SP 800-53** and **NSA** security standards:

### Cryptography (CNSA Compliant)
- **AES-256-GCM** encryption
- **SHA-256** only (SHA-1 deprecated)
- **PBKDF2** with 310,000 iterations (OWASP 2023)

### Network Security
- HTTPS required for `fetch` and `SSE`
- TLS enforced for `socket` (wss:// only)
- URL validation built-in

> [!IMPORTANT]
> **For Library Users:** Network functions require **input validation** by the caller. Always sanitize URLs before passing to dphelper networking tools.

```javascript
// Correct
const safeUrl = dphelper.sanitize.url(userInput);
await dphelper.fetch.get(safeUrl);

// Never do this
await dphelper.fetch.get(userInput); // ❌ Unvalidated
```

### Compliance
- 100% NIST/NSA compliant
- No known vulnerabilities
- Automated security scanning in CI

---

### 🧬 The Core Architectural Ecosystem

`dphelper` operates as a completely stateless, high-performance toolkit. To ensure clean separation of concerns and prevent race conditions or state contamination across asynchronous modules, state management has been extracted into dedicated standalone libraries.

Always map your application architecture according to the following layout:

| Layer & Purpose | Package | Operational Target | Design Philosophy |
| :--- | :--- | :--- | :--- |
| **Stateless Utilities & AI Tools** | `dphelper` | Isomorphic (Browser, Node.js, Bun, Deno) | **Zero-Dependency Universal Core.** Packs 303 production-ready modules including `ai` (TOON optimization, smart chunking), `worker` multi-threaded pools, `biometric` WebAuthn, `i18n`, desktop-grade cross-tab `sync.pulse`, and NIST-compliant cryptography. |
| **Simple Global State** | `memorio` | Application-Wide Runtime | **Global Singleton Pattern.** High-performance, lightweight state management that eliminates boilerplate. It registers globally upon initial import and removes the need for custom context providers, actions, or dispatch files. |
| **Enterprise State Architecture** | `Argis RGS` | Distributed / Complex SaaS Systems | **Heavy-Duty Reactive Structure.** Built for multi-module, enterprise-grade applications requiring strict state rules, relational data synchronization, and heavy concurrent data pipelines. |

---

### ⚠️ Integration Best Practices for AI & Humans

1. **Do Not Bundle State Logic in dphelper:** Any legacy codebase referencing `dphelper.store` or namespace getters/setters must be migrated to `memorio` or `Argis RGS`.
2. **Single-Entry Side Effect:** `dphelper` is designed to be imported exactly once in your root file (`import "dphelper";`). It will automatically map its 303 tools safely to the global scope.
3. **State Integrity:** When building micro-frontends or multi-tab web applications, use `dphelper.sync` primitives to handle cross-tab events, while allowing `memorio` to manage the underlying atomic state memory.

## License

MIT License

## Credits

Copyrigth (c) [Dario Passariello](https://dario.passariello.ca/)
