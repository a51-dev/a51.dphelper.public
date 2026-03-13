# worker

Web Worker management utilities for multi-threaded JavaScript execution, including worker creation, pool management, and parallel task processing.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `create` | Create a worker from URL | `dphelper.worker.create('worker.js', { onmessage: (e) => console.log(e.data) })` |
| `createInline` | Create worker from inline code | `dphelper.worker.createInline('self.onmessage = e => postMessage(e.data * 2)')` |
| `post` | Send message to worker | `dphelper.worker.post(worker, { type: 'compute', data: 42 })` |
| `terminate` | Stop a worker | `dphelper.worker.terminate(worker)` |
| `pool` | Create worker pool | `dphelper.worker.pool('worker.js', 4)` |
| `poolExec` | Execute tasks in pool | `dphelper.worker.poolExec(pool, tasks)` |
| `importScripts` | Import scripts into worker | `dphelper.worker.importScripts(worker, ['lib1.js', 'lib2.js'])` |
| `shared` | Create SharedWorker | `dphelper.worker.shared('my-worker.js', { name: 'shared' })` |

## Description

Powerful Web Worker management module providing:
- **Inline Workers** - Create workers from JavaScript strings without external files
- **Worker Pools** - Manage multiple workers for parallel processing
- **SharedWorkers** - Cross-tab communication via shared worker
- **Script Import** - Dynamically import external scripts into workers
- **Transferable Support** - Efficient data transfer using Transferable objects

## Usage Examples

### Basic Worker Creation

```javascript
// Create worker from external file
const worker = dphelper.worker.create('worker.js', {
  onmessage: (e) => {
    console.log('Received:', e.data);
  },
  onerror: (e) => {
    console.error('Worker error:', e);
  }
});

// Send message to worker
dphelper.worker.post(worker, { type: 'hello', data: 'world' });

// When done, terminate worker
dphelper.worker.terminate(worker);
```

### Inline Workers

```javascript
// Create worker from inline code
const worker = dphelper.worker.createInline(`
  self.onmessage = function(e) {
    // Perform heavy computation
    const result = e.data * 2;
    postMessage(result);
  };
`, {
  onmessage: (e) => {
    console.log('Result:', e.data); // 84
  }
});

dphelper.worker.post(worker, 42);
```

### Worker Pool for Parallel Processing

```javascript
// Create a pool of 4 workers
const pool = dphelper.worker.pool('compute-worker.js', 4);

// Prepare tasks
const tasks = [
  { id: 1, data: 100 },
  { id: 2, data: 200 },
  { id: 3, data: 300 },
  { id: 4, data: 400 },
  { id: 5, data: 500 }
];

// Execute all tasks in parallel across the pool
const results = await dphelper.worker.poolExec(pool, tasks);
console.log(results); // [200, 400, 600, 800, 1000]
```

### SharedWorker for Cross-Tab Communication

```javascript
// Create shared worker (accessible from multiple tabs)
const shared = dphelper.worker.shared('shared-worker.js', {
  name: 'my-shared-worker',
  onconnect: (e) => {
    console.log('New connection:', e.ports[0]);
  },
  onmessage: (e) => {
    console.log('Shared message:', e.data);
  }
});

// Send message through port
shared.port.postMessage({ type: 'hello' });
shared.port.start();
```

### Importing Scripts

```javascript
const worker = dphelper.worker.create('main-worker.js');

// Import external libraries into worker
dphelper.worker.importScripts(worker, [
  'https://cdn.example.com/lib1.js',
  'https://cdn.example.com/lib2.js'
]);
```

## Advanced Usage

### Parallel Data Processing

```javascript
// Worker file: data-processor.js
/*
self.onmessage = function(e) {
  const { id, numbers } = e.data;

  // Heavy computation
  const sum = numbers.reduce((a, b) => a + b, 0);
  const avg = sum / numbers.length;

  postMessage({ id, sum, avg });
};
*/

async function processData(items) {
  const pool = dphelper.worker.pool('data-processor.js', navigator.hardwareConcurrency || 4);

  const tasks = items.map((item, index) => ({
    index,
    data: { id: item.id, numbers: item.values }
  }));

  const results = await dphelper.worker.poolExec(pool, tasks);

  // Sort by original index
  return results.sort((a, b) => a.id - b.id);
}

// Usage
const data = [
  { id: 1, values: [1, 2, 3, 4, 5] },
  { id: 2, values: [10, 20, 30] },
  { id: 3, values: [100, 200] }
];

const processed = await processData(data);
console.log(processed);
```

### Real-time Communication with Pool

```javascript
class WorkerPoolManager {
  constructor(workerScript, poolSize = 4) {
    this.pool = dphelper.worker.pool(workerScript, poolSize);
    this.results = new Map();
  }

  async processTask(taskId, data) {
    return new Promise((resolve, reject) => {
      const handler = (e) => {
        if (e.data.taskId === taskId) {
          this.results.delete(taskId);
          resolve(e.data.result);
        }
      };

      this.pool.workers.forEach(w => w.addEventListener('message', handler));

      dphelper.worker.post(this.pool.workers[0], { taskId, data });
    });
  }

  terminate() {
    this.pool.workers.forEach(w => dphelper.worker.terminate(w));
  }
}
```

### Web Worker with Transferables

```javascript
// Efficiently transfer large data without copying
const buffer = new ArrayBuffer(1024 * 1024); // 1MB
const numbers = new Uint8Array(buffer);

// Fill with data...

const worker = dphelper.worker.createInline(`
  self.onmessage = function(e) {
    const data = new Uint8Array(e.data.buffer);
    // Process data...
    postMessage({ processed: true }, [e.data.buffer]);
  };
`);

// Transfer the buffer ownership to worker
dphelper.worker.post(worker, numbers, [buffer]);
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.1
- **Creation Date:** 20260313
- **Last Modified:** 20260313
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
