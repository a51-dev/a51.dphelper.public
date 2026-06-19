# security

Comprehensive security and cryptography utilities for encryption, hashing, identity generation, and browser fingerprinting.

## Functions

### UUID Generation

| Function | Description | Example |
|----------|-------------|---------|
| `uuid.v4` | Generates a random UUID v4 | `dphelper.security.uuid.v4` |
| `uuid.v5` | Generates a random UUID v5 | `dphelper.security.uuid.v5` |
| `uuid.byVal` | Generates a deterministic UUID from a string | `dphelper.security.uuid.byVal('string')` |

### Encryption/Decryption

| Function | Description | Example |
|----------|-------------|---------|
| `crypt` | Encrypts data using AES-256-GCM | `await dphelper.security.crypt(data, secret)` |
| `deCrypt` | Decrypts AES-256-GCM encrypted data | `await dphelper.security.deCrypt(encrypted, secret)` |
| `AES_KeyGen` | Generates a secure AES key | `await dphelper.security.AES_KeyGen(passKey)` |

### Hashing

| Function | Description | Example |
|----------|-------------|---------|
| `hashPass` | Creates secure password hash with salt (SHA-256) | `await dphelper.security.hashPass(user, pass)` |
| `SHA256_Hex` | Generates SHA-256 hash in hexadecimal | `await dphelper.security.SHA256_Hex(data)` |

### Identity Generation

| Function | Description | Example |
|----------|-------------|---------|
| `ulid` | Generates Universally Unique Lexicographically Sortable Identifier | `dphelper.security.ulid()` |
| `fingerprint` | Generates unique browser fingerprint | `await dphelper.security.fingerprint()` |

### Secure Storage

| Function | Description | Example |
|----------|-------------|---------|
| `saveEncrypted` | Encrypts and saves data to localStorage with HMAC | `await dphelper.security.saveEncrypted(key, value, secret)` |
| `getEncrypted` | Retrieves and decrypts data from localStorage | `await dphelper.security.getEncrypted(key, secret)` |

## Description

Enterprise-grade security module providing:
- **UUID Generation** - v4 (random), v5 (namespace-based), deterministic
- **Encryption** - AES-256-GCM with PBKDF2 key derivation
- **Hashing** - SHA-256 with secure salt generation
- **Identity** - ULID for sortable unique IDs, browser fingerprinting
- **Secure Storage** - Encrypted localStorage with HMAC integrity

## Usage Examples

### UUID Generation

```javascript
// Random UUID v4 (most common use case)
console.log(dphelper.security.uuid.v4);
// "550e8400-e29b-41d4-a716-446655440000"

// Random UUID v5
console.log(dphelper.security.uuid.v5);
// "a3bb189e-8bf9-3888-9912-ace4e6543002"

// Deterministic UUID from string (same input = same output)
console.log(dphelper.security.uuid.byVal('hello'));
// "2cfb4a2e-7b3c-4a8e-9d1c-5e4f6a7b8c9d"

console.log(dphelper.security.uuid.byVal('hello'));
// "2cfb4a2e-7b3c-4a8e-9d1c-5e4f6a7b8c9d" (same!)

// Useful for generating consistent IDs from usernames
const userId = dphelper.security.uuid.byVal('john@example.com');
```

### Encryption/Decryption

```javascript
// Encrypt sensitive data
const secret = 'my-secret-password';
const data = 'Hello, World!';

const encrypted = await dphelper.security.crypt(data, secret);
console.log(encrypted);
// "base64encodedstring..." (contains salt + iv + encrypted data)

// Decrypt the data
const decrypted = await dphelper.security.deCrypt(encrypted, secret);
console.log(decrypted); // "Hello, World!"

// Generate a secure key from password
const key = await dphelper.security.AES_KeyGen('user-password');
console.log(key);
// "salthadexstring...keybits..."
```

### Password Hashing

```javascript
// Hash a password (with automatic salt generation)
const user = 'john@example.com';
const password = 'mySecurePassword!123';

const hash = await dphelper.security.hashPass(user, password);
console.log(hash);
// "salthere...hashhere..." (64 char hex string)

// Verify password later
const storedHash = '...'; // Previously stored hash
const inputPassword = 'mySecurePassword!123';
const newHash = await dphelper.security.hashPass(user, inputPassword);

if (newHash === storedHash) {
  console.log('Password correct!');
} else {
  console.log('Invalid password');
}

// SHA-256 hash (raw)
const sha256 = await dphelper.security.SHA256_Hex('hello world');
console.log(sha256);
// "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9"
```

### ULID Generation

```javascript
// Generate ULID (unique, lexicographically sortable, time-based)
const id1 = dphelper.security.ulid();
const id2 = dphelper.security.ulid();

console.log(id1); // "01ARYZ6S41TVGZFM0X5SZW0JYP"
console.log(id2); // "01ARYZ6S41TVHZ0WS0QJZWMY5A"

// ULIDs are time-sortable
console.log(id1 < id2); // true (if id1 was created first)

// Great for database primary keys
const orderId = dphelper.security.ulid(); // Sortable by creation time
```

### Browser Fingerprinting

```javascript
// Generate unique browser fingerprint
const fingerprint = await dphelper.security.fingerprint();
console.log(fingerprint);
// "a1b2c3d4e5f6..." (SHA-256 hash)

// Use for analytics, fraud detection, or session management
async function identifyUser() {
  const fp = await dphelper.security.fingerprint();

  // Send to your server
  await fetch('/api/identify', {
    method: 'POST',
    body: JSON.stringify({ fingerprint: fp })
  });
}
```

### Secure LocalStorage

```javascript
// Save encrypted data to localStorage
await dphelper.security.saveEncrypted('user_token', 'abc123xyz', 'my-secret');

await dphelper.security.saveEncrypted('user_data', JSON.stringify({
  name: 'John',
  email: 'john@example.com'
}), 'my-secret');

// Retrieve and decrypt data
const token = await dphelper.security.getEncrypted('user_token', 'my-secret');
console.log(token); // "abc123xyz"

const userData = await dphelper.security.getEncrypted('user_data', 'my-secret');
console.log(JSON.parse(userData));
// { name: 'John', email: 'john@example.com' }

// Tamper detection - returns null if data was modified
localStorage.setItem('user_token', 'modified_by_hacker');
const tampered = await dphelper.security.getEncrypted('user_token', 'my-secret');
console.log(tampered); // null (detected tampering!)
```

## Security Features

### AES-256-GCM Encryption
- Uses PBKDF2 with **310,000 iterations** (OWASP 2023 compliant) for key derivation
- Random 16-byte salt for each encryption
- Random 12-byte IV (Initialization Vector)
- Authenticated encryption (confidentiality + integrity)

### Secure Password Hashing
- **SHA-256 only** (CNSA compliant, SHA-1 deprecated)
- Random 16-byte salt per hash
- Salt + hash stored together for verification
- Time-safe comparison

### HMAC-Protected Storage
- AES encryption for confidentiality
- HMAC-SHA256 for integrity verification
- Tamper detection on retrieval
- Version support for future updates

### Network Functions Security

> [!IMPORTANT]
> Network primitives (`fetch`, `sse`, `socket`) are **by design** for modern web development. Callers must:
> - Validate and sanitize all URLs before passing to these functions
> - Use `dphelper.sanitize.url()` for URL validation
> - Never pass untrusted user input directly to network functions

```javascript
// Correct usage
const safeUrl = dphelper.sanitize.url(userInput);
await dphelper.fetch.get(safeUrl);
```

## Advanced Usage

### Complete Authentication Flow

```javascript
class AuthManager {
  constructor(secret) {
    this.secret = secret;
  }

  async register(username, password) {
    // Hash password for storage
    const hash = await dphelper.security.hashPass(username, password);

    // Generate user ID
    const userId = dphelper.security.uuid.byVal(username);

    // Save user data securely
    await dphelper.security.saveEncrypted(`user_${userId}`,
      JSON.stringify({ hash, created: Date.now() }),
      this.secret
    );

    return userId;
  }

  async login(username, password) {
    const userId = dphelper.security.uuid.byVal(username);
    const stored = await dphelper.security.getEncrypted(`user_${userId}`, this.secret);

    if (!stored) return null;

    const userData = JSON.parse(stored);
    const inputHash = await dphelper.security.hashPass(username, password);

    return inputHash === userData.hash ? userId : null;
  }
}
```

### Secure Message Passing

```javascript
async function sendSecureMessage(recipient, message) {
  // Generate encryption key
  const key = await dphelper.security.AES_KeyGen(recipient);

  // Encrypt message
  const encrypted = await dphelper.security.crypt(message, key);

  // Create message ID
  const messageId = dphelper.security.ulid();

  return { id: messageId, encrypted, key };
}
```

## Details

- **Author:** Dario Passariello & Jo
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** Works in both client and server environments

---

*Automatically generated document*
