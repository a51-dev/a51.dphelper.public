# [dphelper](https://npmjs.com/package/dphelper)

![dpHelper](https://raw.githubusercontent.com/passariello/container/refs/heads/main/dphelper/assets/images/banner.svg)

**The supercharged toolkit for modern web development, AI engineering & DevTools.**

[![version](https://img.shields.io/npm/v/dphelper.svg)](https://npmjs.org/package/dphelper)
[![downloads](https://img.shields.io/npm/dm/dphelper.svg)](https://npmjs.org/package/dphelper)
![Javascript](https://img.shields.io/badge/Javascript-gray?logo=Javascript)
![TypeScript](https://img.shields.io/badge/TypeScript-gray?logo=typescript)
![AI Ready](https://img.shields.io/badge/AI-Ready-brightgreen?logo=openai)
![TOON](https://img.shields.io/badge/TOON-Format-blue)

![Node.js](https://img.shields.io/badge/Node.js-gray?logo=node.js)
![Jest](https://img.shields.io/badge/Jest-gray?logo=jest)
![ESLint](https://img.shields.io/badge/Eslint-gray?logo=eslint)
![esbuild](https://img.shields.io/badge/esbuild-gray?logo=esbuild)
![Snyk](https://img.shields.io/badge/Snyk-gray?logo=Snyk)

[![GitBook](https://img.shields.io/static/v1?message=Documented%20on%20GitBook&logo=gitbook&logoColor=ffffff&label=%20&labelColor=5c5c5c&color=3F89A1)](https://a51.gitbook.io/dphelper)

---

## About

**dphelper** is a powerful, zero-dependency utility library that brings together 45+ production-ready tools for web developers, AI engineers, and DevTools creators.

Think of it as your **universal toolbox** - from DOM manipulation to cryptographic operations, from real-time WebSocket handling to AI-powered token optimization. No more juggling multiple packages. One import, infinite possibilities.

### Why dphelper?

- **⚡ Zero Dependencies** - Pure vanilla JavaScript/TypeScript. No bloat, no surprises.
- **🤖 AI-First Design** - Built for LLM apps with TOON optimization, token counting, and RAG support.
- **🌐 Universal** - Works in browser, Node.js, Bun, and Deno.
- **🔒 Type-Safe** - Full TypeScript definitions auto-generated for every tool.
- **📦 Tiny Bundle** - Only ~136KB minified, tree-shakeable.

> *"dphelper is what you'd build if you combined lodash, socket.io, and an AI SDK - but lighter."*

---

> [!IMPORTANT]
> Application state is currently handled through Memorio and RGS.

## To integrate state management into your project

- Simple State and Store Manager [Memorio](http://www.npmjs.com/package/memorio)
- Enterprise Lever State Manager [Argis RGS](https://www.npmjs.com/package/@biglogic/rgs)

---

## 🚀 Version 3.0: The AI Leap

`dphelper` has evolved into a powerhouse for AI-driven applications. We've removed legacy dependencies (bye-bye jQuery!) and shifted focus to **performance**, **modularity**, and **LLM optimization**.

### ✨ Highlights

- **🤖 Advanced AI Module**: Built-in support for RAG, token counting, and prompt engineering.
- **🚀 AI Black Box (Snapshot)**: The first "Flight Recorder" for apps, capturing the internal state in TOON for instant AI debugging.
- **🎒 TOON Integration**: Native support for **Token-Oriented Object Notation** (3.0), reducing LLM context usage by up to 50%.
- **🛠️ Zero Dependencies**: Pure vanilla JavaScript/TypeScript architecture.
- **🌐 Fetch & SSE Pro**: High-level networking with automatic retries and custom headers.
- **⚡ Bulletproof Dispatcher**: Integrated listener management with automatic cleanup.
- **🔄 UI Mirror & Pulse**: Cross-tab synchronization and automatic UI state recovery (Zero-Code Persistence).
- **🌊 SSE Pro**: Server-Sent Events with POST & Custom Header support (modern AI streaming ready).
- **🧬 Modular Types**: Auto-generated Type definitions for all 200+ tools.

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

## Installation

```shell
npm i dphelper --save-dev
```

### Usage

Import it precisely **once** in your entry point (e.g., `index.js`, `main.ts`, or `App.tsx`):

```js
import "dphelper";
// dphelper is now available globally across your entire project!
```

For plain HTML/CDN:

```html
<script src="https://unpkg.com/dphelper/dphelper.umd.js"></script>

<!-- Optional check -->
<script>
  console.debug(dphelper.version);  // latest version
  console.debud(dphelper.isBrowser); // true
</script>
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
3. Synchronizes TypeScript interfaces in `types/dphelper.d.ts`.

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

We take security seriously. Every release is audited:

- [Socket.dev Audit](https://socket.dev/npm/package/dphelper)
- [Snyk Security Report](https://security.snyk.io/package/npm/dphelper)

---

Dario Passariello - <dariopassariello@gmail.com>
All rights reserved - Copyright (c) 2019 - 2026
