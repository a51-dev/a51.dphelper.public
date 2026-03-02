# socket

WebSocket management for real-time communication.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `start` | Initializes and starts a named socket connection | `dphelper.socket.start(el, 'ws://...', 'main')` |
| `send` | Sends a message through a specific socket | `dphelper.socket.send('msg', 'type', 'main')` |
| `receive` | Manages data reception and DOM updates | `dphelper.socket.receive('#target', 'main')` |
| `check` | Cleans the internal list of closed connections | `dphelper.socket.check()` |
| `list` | Returns the list of tracked active sockets | `dphelper.socket.list()` |
| `keepAlive` | Keeps the connection active via ping/pong | `dphelper.socket.keepAlive('main')` |

## Description

Tool for simplified WebSocket management. Note: socket tracking has been made safer by removing global monkey patching of the `WebSocket` object.

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220

---

*Automatically generated document*
