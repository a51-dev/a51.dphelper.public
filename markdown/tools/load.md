# load

Asynchronous resource loading.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `all` | Loads all files from a directory context | `dphelper.load.all(require.context('Scripts', true, /\.(js|ts)$/) [, 'cacheName'])` |
| `file` | Loads a specific file | `dphelper.load.file(filePath)` |
| `fileToElement` | Loads a file and inserts it into an element | `dphelper.load.fileToElement(filePath, elementSelector)` |

## Description

Tool for asynchronous loading of files and resources: scripts, files, and HTML content.

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.1
- **Creation Date:** 20210101
- **Last Modified:** 20240101

---

*Automatically generated document - dphelper v3.0.6*
