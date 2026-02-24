# path

Management of URL paths.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `rail` | Extracts path segments from the URL | `dphelper.path.rail()` |
| `hash` | Extracts hash from the URL | `dphelper.path.hash([hashUrl])` |
| `query` | Extracts query parameters from the URL | `dphelper.path.query([queryString])` |

## Description

Tool for extracting segments, hashes, and query parameters from URLs.

## Usage Examples

### Extract URL segments

If the URL is `https://example.com/blog/article-1`, `rail()` will return `['blog', 'article-1']`.

```javascript
const segments = dphelper.path.rail();
console.log(segments[0]); // 'blog'
```

### Extract Query parameters

If the URL is `?id=123&user=dario`, `query()` will return `{"id": "123", "user": "dario"}`.

```javascript
const params = dphelper.path.query();
console.log(params.id); // '123'
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.1
- **Creation Date:** 20210101
- **Last Modified:** 20250513

---

*Automatically generated document - dphelper v3.0.6*
