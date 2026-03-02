# check

Validation utilities for version comparison and other checks.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `version` | Compare two version strings | `dphelper.check.version('1.2.0', '1.1.0')` |

## Description

Version comparison utilities:
- **Semantic Versioning** - Compare version numbers
- **Custom Options** - Lexicographic and zero-pad support

## Usage Examples

### Version Comparison

```javascript
// Compare versions
console.log(dphelper.check.version('1.2.0', '1.1.0'));  // 1 (v1 > v2)
console.log(dphelper.check.version('1.1.0', '1.2.0'));  // -1 (v1 < v2)
console.log(dphelper.check.version('1.0.0', '1.0.0'));  // 0 (equal)

// With zero padding
console.log(dphelper.check.version('1.2', '1.2.0', { zero: true })); // 0

// With lexicographic comparison
console.log(dphelper.check.version('1.0.0a', '1.0.0b', { lex: true })); // -1
```

### Software Update Checker

```javascript
function checkForUpdate(currentVersion, latestVersion) {
  const result = dphelper.check.version(currentVersion, latestVersion);

  if (result === 1) {
    console.log('Update available!');
    return 'Update available';
  } else if (result === 0) {
    console.log('You have the latest version.');
    return 'Up to date';
  } else {
    console.log('You are on a newer version.');
    return 'Ahead';
  }
}

checkForUpdate('1.0.0', '1.1.0'); // "Update available!"
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20240829
- **Last Modified:** 20240829
- **Environment:** Works in both client and server environments

---

*Automatically generated document*
