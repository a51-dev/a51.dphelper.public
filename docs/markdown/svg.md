# svg

SVG manipulation utilities for creating connections, diagrams, and converting elements to SVG format.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `init` | Initialize SVG connection between elements | `dphelper.svg.init(container, [el1, 'right'], [el2, 'left'])` |
| `check` | Check SVG browser support | `dphelper.svg.check()` |
| `update` | Update SVG connection positions | `dphelper.svg.update(rect1, rect2, path)` |
| `getCurve` | Calculate curve path between points | `dphelper.svg.getCurve([x1,y1], [x2,y2], distance)` |
| `getIntersection` | Calculate element intersection point | `dphelper.svg.getIntersection(dx, dy, cx, cy, w, h)` |
| `setConnector` | Set connector point on element | `dphelper.svg.setConnector(element, 'right')` |
| `removeConnection` | Remove SVG connection from container | `dphelper.svg.removeConnection(container)` |
| `makeScrollable` | Update connection on scroll | `dphelper.svg.makeScrollable(svg, scroll, el1, el2, rect1, rect2)` |
| `makeDraggable` | Make SVG element draggable | `dphelper.svg.makeDraggable(event)` |
| `toggle` | Toggle SVG connection on/off | `dphelper.svg.toggle(event, container, el1, el2)` |
| `convert` | Convert HTML element to SVG | `dphelper.svg.convert({ children: '#myDiv' })` |

## Description

Complete SVG toolkit:
- **Connection Drawing** - Create visual links between elements
- **Geometry Calculations** - Curves, intersections, positions
- **Interactivity** - Draggable elements, scroll handling
- **Conversion** - Transform HTML to SVG

## Usage Examples

### Creating Connections

```javascript
// HTML structure
// <div id="container">
//   <div id="element1">Source</div>
//   <div id="element2">Target</div>
// </div>

const container = document.getElementById('container');
const el1 = document.getElementById('element1');
const el2 = document.getElementById('element2');

// Initialize connection from right of el1 to left of el2
dphelper.svg.init(container, [el1, 'right'], [el2, 'left']);

// Connection uses bezier curves
```

### Connection Sides

```javascript
// Available connection points
dphelper.svg.init(container, [el1, 'top'], [el2, 'bottom']);
dphelper.svg.init(container, [el1, 'right'], [el2, 'left']);
dphelper.svg.init(container, [el1, 'left'], [el2, 'right']);
dphelper.svg.init(container, [el1, 'bottom'], [el2, 'top']);
```

### Toggle Connection

```javascript
// Toggle connection with checkbox
const checkbox = document.getElementById('toggleConnection');
const container = document.getElementById('diagram');
const source1 = document.getElementById('node1');
const source2 = document.getElementById('node2');

checkbox.addEventListener('change', (e) => {
  dphelper.svg.toggle(e, container, source1, source2);
});
```

### HTML to SVG Conversion

```javascript
// Convert a div to SVG
dphelper.svg.convert({
  children: '#myContent',  // Element to convert
  active: true,
  size: [1920, 1080],     // ViewBox size
  fit: ['100%', '100%'],  // Display size
  preserveAspectRatio: 'xMidYMid meet'
});

// Creates SVG with foreignObject containing the HTML
```

### Check SVG Support

```javascript
// Check if browser supports SVG
if (dphelper.svg.check()) {
  console.log('SVG supported');
} else {
  console.log('SVG not supported - fallback to canvas');
}
```

### Remove Connections

```javascript
// Remove all SVG connections from container
dphelper.svg.removeConnection(document.getElementById('container'));
```

## Advanced Usage

### Flowchart Builder

```javascript
class FlowchartBuilder {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.connections = [];
  }

  addNode(id, x, y, label) {
    const node = document.createElement('div');
    node.id = id;
    node.className = 'flow-node';
    node.style.left = x + 'px';
    node.style.top = y + 'px';
    node.textContent = label;
    this.container.appendChild(node);
    return node;
  }

  connect(fromId, toId) {
    const from = document.getElementById(fromId);
    const to = document.getElementById(toId);

    dphelper.svg.init(this.container, [from, 'right'], [to, 'left']);
  }
}

// Usage
const flowchart = new FlowchartBuilder('canvas');
flowchart.addNode('start', 10, 50, 'Start');
flowchart.addNode('process', 200, 50, 'Process');
flowchart.addNode('end', 400, 50, 'End');

flowchart.connect('start', 'process');
flowchart.connect('process', 'end');
```

### Draggable SVG Elements

```javascript
// Make SVG elements draggable
const svgElement = document.querySelector('#mySvg circle');
dphelper.svg.makeDraggable(svgElement);

// Enables mouse drag functionality on SVG elements
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
