# load

Dynamic file and script loading utilities for managing modules, components, and resources.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `all` | Load all files from glob object | `dphelper.load.all(import.meta.glob('./**/*.ts'))` |
| `file` | Load a specific file | `dphelper.load.file(path)` |
| `fileToElement` | Load file content into element | `dphelper.load.fileToElement('#target', '/content.html')` |
| `script` | Dynamically load scripts | `dphelper.load.script(['/app.js'])` |
| `toJson` | Create JSON from folder glob | `dphelper.load.toJson(glob, 'routes')` |

## Description

Dynamic loading utilities:
- **Module Loading** - Load ES modules via Vite/esbuild
- **File Loading** - Fetch and inject content
- **Script Loading** - Dynamic script injection
- **Caching** - Optional result caching

## Usage Examples

### Load All Modules (Vite)

```javascript
// Load all TypeScript modules from folder
dphelper.load.all(
  import.meta.glob('./components/*.ts', { eager: true }),
  'components'
);

// Components are now loaded and cached
console.log(window.components); // ['./components/Button.ts', ...]
```

### Load File to Element

```javascript
// Load HTML content into element
await dphelper.load.fileToElement('#content', '/partials/home.html');

// Loads home.html and inserts into #content
// Content is sanitized for XSS protection
```

### Dynamic Script Loading

```javascript
// Load multiple scripts
dphelper.load.script([
  'https://cdn.example.com/lib1.js',
  'https://cdn.example.com/lib2.js'
], 'body');

// Scripts load asynchronously
// Appended to specified element (default: html)
```

### Create JSON from Glob

```javascript
// Create route registry from folder
dphelper.load.toJson(
  import.meta.glob('./routes/*.ts'),
  'routes'
);

// Creates window.routes as JSON object
// Keys are file paths, values are modules
```

## Advanced Usage

### Component Lazy Loading

```javascript
// Load components on demand
async function loadComponent(name) {
  const modules = import.meta.glob('./components/*.vue');
  const loader = modules[`./components/${name}.vue`];

  if (loader) {
    return await loader();
  }

  throw new Error(`Component ${name} not found`);
}

// Usage
const Button = await loadComponent('Button');
```

### Dynamic Module Loading

```javascript
class ModuleLoader {
  constructor(basePath) {
    this.basePath = basePath;
  }

  async load(moduleName) {
    const modules = import.meta.glob('./modules/*.js');
    const key = `./modules/${moduleName}.js`;

    if (modules[key]) {
      return await modules[key]();
    }

    return null;
  }

  loadAll() {
    dphelper.load.all(
      import.meta.glob('./modules/*.js', { eager: true }),
      'allModules'
    );
  }
}
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.3
- **Creation Date:** 20210101
- **Last Modified:** 20260228
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
