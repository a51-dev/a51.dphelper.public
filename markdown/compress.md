# compress

Compression and encoding utilities for data compression, decompression, and various encoding formats including gzip, deflate, LZW, base64, URL, and HTML encoding.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `gzip` | Compress with gzip | `await dphelper.compress.gzip('Hello World')` |
| `gunzip` | Decompress gzip | `await dphelper.compress.gunzip(compressedBlob)` |
| `deflate` | Compress with deflate | `await dphelper.compress.deflate('Hello World')` |
| `inflate` | Decompress deflate | `await dphelper.compress.inflate(compressedBlob)` |
| `compress` | LZW compress | `dphelper.compress.compress('Hello World')` |
| `decompress` | LZW decompress | `dphelper.compress.decompress(compressedString)` |
| `base64Encode` | Encode to base64 | `dphelper.compress.base64Encode('Hello')` |
| `base64Decode` | Decode from base64 | `dphelper.compress.base64Decode('SGVsbG8=')` |
| `urlEncode` | URL encode | `dphelper.compress.urlEncode('Hello World!')` |
| `urlDecode` | URL decode | `dphelper.compress.urlDecode('Hello%20World!')` |
| `htmlEncode` | HTML encode | `dphelper.compress.htmlEncode('<script>')` |
| `htmlDecode` | HTML decode | `dphelper.compress.htmlDecode('<script>')` |

## Description

Comprehensive compression and encoding module providing:
- **Gzip/Deflate** - Browser-native compression using CompressionStream API
- **LZW Compression** - JavaScript-compatible compression for data storage
- **Base64** - Binary-to-text encoding for data transfer
- **URL Encoding** - Percent-encoding for URLs and query strings
- **HTML Encoding** - Escape special characters for safe HTML rendering
- **Universal** - Works in both browser and server environments

## Usage Examples

### Gzip Compression

```javascript
// Compress string with gzip
const original = 'Hello World! This is a test string for compression.';
const compressed = await dphelper.compress.gzip(original);

console.log('Original size:', original.length);
console.log('Compressed type:', compressed.type); // "application/gzip"

// Decompress
const decompressed = await dphelper.compress.gunzip(compressed);
console.log('Decompressed:', decompressed); // "Hello World! This is a test..."
```

### Deflate Compression

```javascript
// Compress with deflate (smaller than gzip, no header)
const data = JSON.stringify({ users: [...], metadata: {...} });
const deflated = await dphelper.compress.deflate(data);

// Decompress
const inflated = await dphelper.compress.inflate(deflated);
console.log(JSON.parse(inflated));
```

### LZW Compression (JavaScript Compatible)

```javascript
// LZW compression - works in both browser and Node.js
const original = 'ABABABABABABABAB';
const compressed = dphelper.compress.compress(original);

console.log('Original:', original.length, 'chars');
console.log('Compressed:', compressed.length, 'chars');

// Decompress
const decompressed = dphelper.compress.decompress(compressed);
console.log('Decompressed:', decompressed); // "ABABABABABABABAB"
```

### Base64 Encoding

```javascript
// Encode string to base64
const plain = 'Hello, World!';
const encoded = dphelper.compress.base64Encode(plain);
console.log(encoded); // "SGVsbG8sIFdvcmxkIQ=="

// Decode from base64
const decoded = dphelper.compress.base64Decode(encoded);
console.log(decoded); // "Hello, World!"

// Encode binary data
const bytes = new Uint8Array([72, 101, 108, 108, 111]);
const binaryEncoded = dphelper.compress.base64Encode(String.fromCharCode(...bytes));
console.log(binaryEncoded); // "SGVsbG8="
```

### URL Encoding

```javascript
// URL encode (percent-encoding)
const url = 'Hello World! Test=1&value=abc';
const encoded = dphelper.compress.urlEncode(url);
console.log(encoded); // "Hello%20World!%20Test%3D1%26value%3Dabc"

// URL decode
const decoded = dphelper.compress.urlDecode(encoded);
console.log(decoded); // "Hello World! Test=1&value=abc"

// Encode for query string
const query = 'name=John Doe&city=New York';
const queryEncoded = dphelper.compress.urlEncode(query);
console.log(queryEncoded); // "name%3DJohn%20Doe%26city%3DNew%20York"
```

### HTML Encoding

```javascript
// HTML encode (escape special characters)
const unsafe = '<script>alert("XSS!")</script>';
const encoded = dphelper.compress.htmlEncode(unsafe);
console.log(encoded);
// "<script>alert("XSS!")</script>"

// HTML decode
const decoded = dphelper.compress.htmlDecode(encoded);
console.log(decoded); // '<script>alert("XSS!")</script>'

// Encode user input before displaying
const userInput = '<div onclick="evil()">Click me</div>';
const safe = dphelper.compress.htmlEncode(userInput);
// In HTML: <div onclick="evil()">Click me</div>
```

## Advanced Usage

### Data Compression for Storage

```javascript
class CompressedStorage {
  async compress(key, data) {
    const json = JSON.stringify(data);
    const compressed = await dphelper.compress.gzip(json);
    localStorage.setItem(key, await compressed.text());
  }

  async decompress(key) {
    const stored = localStorage.getItem(key);
    if (!stored) return null;

    const blob = new Blob([stored], { type: 'application/gzip' });
    const decompressed = await dphelper.compress.gunzip(blob);
    return JSON.parse(decompressed);
  }
}

// Usage
const storage = new CompressedStorage();
await storage.compress('cache', { users: [...], timestamp: Date.now() });
const data = await storage.decompress('cache');
```

### API Response Compression

```javascript
// Compress data before sending to server
async function sendCompressed(url, data) {
  const json = JSON.stringify(data);
  const compressed = await dphelper.compress.gzip(json);

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/gzip'
    },
    body: compressed
  });
}

// Decompress server response
async function fetchCompressed(url) {
  const response = await fetch(url);
  const compressed = await response.blob();
  const decompressed = await dphelper.compress.gunzip(compressed);
  return JSON.parse(decompressed);
}
```

### String Compression for URLs

```javascript
// Compress data for URL-safe storage (using LZW)
function compressForUrl(data) {
  const compressed = dphelper.compress.compress(JSON.stringify(data));
  return dphelper.compress.base64Encode(compressed)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

// Decompress from URL
function decompressFromUrl(encoded) {
  const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, '=');
  const compressed = dphelper.compress.base64Decode(padded);
  return JSON.parse(dphelper.compress.decompress(compressed));
}

// Usage
const data = { id: 123, type: 'test', values: [1,2,3] };
const encoded = compressForUrl(data);
console.log(encoded); // URL-safe compressed string

const decoded = decompressFromUrl(encoded);
console.log(decoded); // { id: 123, type: 'test', values: [1,2,3] }
```

### Secure Data Transfer

```javascript
// Encode sensitive data for transfer
function encodeSecure(data) {
  const json = JSON.stringify(data);
  const base64 = dphelper.compress.base64Encode(json);
  return base64;
}

// Decode secure data
function decodeSecure(encoded) {
  const json = dphelper.compress.base64Decode(encoded);
  return JSON.parse(json);
}

// Sanitize HTML content
function sanitizeHtml(content) {
  return dphelper.compress.htmlEncode(content);
}

// Build safe query string
function buildQueryString(params) {
  return Object.entries(params)
    .map(([k, v]) => `${dphelper.compress.urlEncode(k)}=${dphelper.compress.urlEncode(v)}`)
    .join('&');
}

console.log(buildQueryString({ name: 'John Doe', age: '30' }));
// "name=John%20Doe=30"
```

### Cache with Compression

```javascript
class CacheManager {
  constructor(prefix = 'cache_') {
    this.prefix = prefix;
  }

  async set(key, value, maxAge = 3600000) {
    const entry = {
      data: value,
      expires: Date.now() + maxAge
    };

    const compressed = await dphelper.compress.gzip(JSON.stringify(entry));
    localStorage.setItem(
      this.prefix + key,
      await compressed.text()
    );
  }

  async get(key) {
    const stored = localStorage.getItem(this.prefix + key);
    if (!stored) return null;

    try {
      const blob = new Blob([stored], { type: 'application/gzip' });
      const decompressed = await dphelper.compress.gunzip(blob);
      const entry = JSON.parse(decompressed);

      if (Date.now() > entry.expires) {
        localStorage.removeItem(this.prefix + key);
        return null;
      }

      return entry.data;
    } catch {
      return null;
    }
  }

  clear() {
    Object.keys(localStorage)
      .filter(k => k.startsWith(this.prefix))
      .forEach(k => localStorage.removeItem(k));
  }
}

// Usage
const cache = new CacheManager();
await cache.set('user_123', { name: 'John', email: 'john@example.com' });
const user = await cache.get('user_123');
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.1
- **Creation Date:** 20260313
- **Last Modified:** 20260313
- **Environment:** Works in both client and server environments

---

*Automatically generated document*
