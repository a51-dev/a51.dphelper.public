# svg

Advanced management of SVG elements and connections.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `init` | Initializes a dynamic connection between two HTML elements via an SVG path | `dphelper.svg.init(source1, source2, container)` |
| `check` | Verifies native SVG support in the browser (obsolete VML logic removed) | `dphelper.svg.check()` |
| `update` | Recalculates coordinates for an existing connection | `dphelper.svg.update(rect1, rect2, path)` |
| `removeConnection` | Safely removes connections created by the tool in the container | `dphelper.svg.removeConnection(container)` |
| `makeDraggable` | Enables drag & drop on an SVG element | `dphelper.svg.makeDraggable(svg)` |
| `makeScrollable` | Enables drag-based scrolling on a container | `dphelper.svg.makeScrollable(container)` |

## Description

Advanced tool for managing graphical connections between elements. The current version has been cleaned of legacy technology support (VML) and optimized to handle multiple simultaneous connections using dynamic IDs and `data-*` attributes.

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220

---

*Automatically generated document*
