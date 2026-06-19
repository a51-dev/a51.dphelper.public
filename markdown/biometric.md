# biometric

WebAuthn and biometric authentication utilities for secure passwordless login using fingerprint, face recognition, and hardware security keys.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `isAvailable` | Check if WebAuthn is available | `dphelper.biometric.isAvailable()` |
| `getWebAuthnSupport` | Get detailed support info | `dphelper.biometric.getWebAuthnSupport()` |
| `isSensorAvailable` | Check specific sensor (fingerprint/face/iris) | `await dphelper.biometric.isSensorAvailable('fingerprint')` |
| `register` | Register new credential | `await dphelper.biometric.register('user123', 'example.com')` |
| `authenticate` | Authenticate with credential | `await dphelper.biometric.authenticate('user123', 'example.com')` |
| `getCredential` | Get stored credential by ID | `dphelper.biometric.getCredential(credentialId)` |
| `deleteCredential` | Delete stored credential | `dphelper.biometric.deleteCredential(credentialId)` |
| `listCredentials` | List all stored credentials | `dphelper.biometric.listCredentials()` |

## Description

Secure biometric authentication module providing:
- **WebAuthn/FIDO2** - Industry-standard passwordless authentication
- **Platform Authenticators** - Fingerprint, Face ID, Windows Hello
- **Cross-platform** - Works with hardware security keys (YubiKey, etc.)
- **Credential Management** - Store, retrieve, and delete credentials
- **Sensor Detection** - Check availability of specific biometric types

## Usage Examples

### Checking Availability

```javascript
// Simple availability check
if (dphelper.biometric.isAvailable()) {
  console.log('Biometric authentication is available!');
} else {
  console.log('Biometric auth not supported');
}

// Get detailed support information
const support = dphelper.biometric.getWebAuthnSupport();
console.log(support);
// {
//   supported: true,
//   platformAuthenticator: true,
//   hybridTransport: false,
//   uvToken: false
// }

// Check specific sensor
const hasFingerprint = await dphelper.biometric.isSensorAvailable('fingerprint');
const hasFace = await dphelper.biometric.isSensorAvailable('face');
console.log('Fingerprint:', hasFingerprint, 'Face:', hasFace);
```

### Registration (Enrolling a Credential)

```javascript
// Register a new biometric credential
async function registerUser(userId) {
  if (!dphelper.biometric.isAvailable()) {
    return { success: false, error: 'WebAuthn not supported' };
  }

  const result = await dphelper.biometric.register(
    userId,           // User ID
    'example.com',   // Relying Party ID (your domain)
    'My App',        // Relying Party Name
    'john@example.com' // Display name
  );

  if (result.success) {
    console.log('Registered! Credential ID:', result.credentialId);
    // Store credentialId in your database for this user
  } else {
    console.error('Registration failed:', result.error);
  }

  return result;
}

// Usage
const result = await registerUser('user_123');
```

### Authentication (Login)

```javascript
// Authenticate with stored credential
async function loginUser(userId, credentialId) {
  if (!dphelper.biometric.isAvailable()) {
    return { success: false, error: 'WebAuthn not supported' };
  }

  const result = await dphelper.biometric.authenticate(
    userId,           // User ID
    'example.com',   // Relying Party ID
    credentialId     // Optional: specific credential to use
  );

  if (result.success) {
    console.log('Authentication successful!');
  } else {
    console.error('Authentication failed:', result.error);
  }

  return result;
}

// Usage - login with known credential
const result = await loginUser('user_123', 'stored_credential_id');
```

### Credential Management

```javascript
// List all stored credentials
const credentials = dphelper.biometric.listCredentials();
console.log('Stored credentials:', credentials);

// Get a specific credential
const cred = dphelper.biometric.getCredential('credential_id_123');
console.log('Credential:', cred);

// Delete a credential
const deleted = dphelper.biometric.deleteCredential('credential_id_123');
console.log('Deleted:', deleted);

// After deletion
console.log('Remaining:', dphelper.biometric.listCredentials());
```

## Advanced Usage

### Complete Authentication System

```javascript
class BiometricAuth {
  constructor(rpId, rpName) {
    this.rpId = rpId;
    this.rpName = rpName;
    this.available = dphelper.biometric.isAvailable();
  }

  async checkSupport() {
    if (!this.available) {
      return { supported: false, reason: 'WebAuthn not supported' };
    }

    const support = dphelper.biometric.getWebAuthnSupport();
    const fingerprint = await dphelper.biometric.isSensorAvailable('fingerprint');
    const face = await dphelper.biometric.isSensorAvailable('face');

    return {
      supported: true,
      platformAuthenticator: support.platformAuthenticator,
      fingerprint,
      face
    };
  }

  async register(userId, userName) {
    if (!this.available) {
      throw new Error('Biometric authentication not available');
    }

    const result = await dphelper.biometric.register(
      userId,
      this.rpId,
      this.rpName,
      userName
    );

    if (result.success) {
      // In production: save credentialId to your backend
      console.log('Biometric registered:', result.credentialId);
    }

    return result;
  }

  async login(userId, credentialId) {
    if (!this.available) {
      throw new Error('Biometric authentication not available');
    }

    return await dphelper.biometric.authenticate(
      userId,
      this.rpId,
      credentialId
    );
  }

  getStoredCredentials() {
    return dphelper.biometric.listCredentials();
  }

  removeCredential(credentialId) {
    return dphelper.biometric.deleteCredential(credentialId);
  }
}

// Usage
const auth = new BiometricAuth('example.com', 'My Application');

// Check if biometric is available
const support = await auth.checkSupport();
if (support.supported) {
  console.log('Biometric types available:', support);
}

// Register new user
await auth.register('user_123', 'john@example.com');

// Login
const loginResult = await auth.login('user_123');
if (loginResult.success) {
  console.log('Logged in with biometric!');
}
```

### Passwordless Login Flow

```javascript
// Frontend: Initiate passwordless login
async function initiatePasswordlessLogin() {
  // 1. Check if biometric is available
  if (!dphelper.biometric.isAvailable()) {
    alert('Please use a supported browser');
    return;
  }

  // 2. Get available credentials for this user
  const credentials = dphelper.biometric.listCredentials();

  if (credentials.length === 0) {
    // No credentials - prompt to register
    const register = confirm('No biometric credentials found. Register now?');
    if (register) {
      await registerNewUser();
    }
    return;
  }

  // 3. Attempt authentication with any stored credential
  for (const credId of credentials) {
    const result = await dphelper.biometric.authenticate(
      'current_user',
      window.location.hostname,
      credId
    );

    if (result.success) {
      // 4. Verify with server
      await verifyWithServer(credId);
      return;
    }
  }

  console.log('All credentials failed');
}

// Server verification (pseudo-code)
async function verifyWithServer(credentialId) {
  const response = await fetch('/api/auth/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ credentialId })
  });

  if (response.ok) {
    const { token } = await response.json();
    localStorage.setItem('auth_token', token);
    window.location.href = '/dashboard';
  }
}
```

### Progressive Registration

```javascript
// Offer biometric as an option during existing login
async function offerBiometricUpgrade(userId, userName) {
  const support = await dphelper.biometric.checkSupport();

  if (!support.supported) {
    console.log('Biometric not available on this device');
    return;
  }

  // Show modal or prompt
  const shouldRegister = confirm(
    `Enable ${support.fingerprint ? 'fingerprint' : 'biometric'} login for faster access?`
  );

  if (shouldRegister) {
    const result = await dphelper.biometric.register(
      userId,
      window.location.hostname,
      'My App',
      userName
    );

    if (result.success) {
      // Save credential to user account
      await saveCredentialToUser(userId, result.credentialId);
      alert('Biometric authentication enabled!');
    } else {
      alert('Registration failed: ' + result.error);
    }
  }
}
```

## Security Notes

### WebAuthn Security Features
- **Public-key cryptography** - Uses asymmetric keys, never transmitted
- **User presence** - Requires user action (touch/face) to authenticate
- **Platform binding** - Credentials bound to specific device
- **Phishing resistance** - Relying Party ID must match exactly

### Best Practices
- Always verify authentication on the server side
- Store credential IDs in your database, not the credentials themselves
- Support multiple credentials per user (different devices)
- Provide fallback for unsupported browsers

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.1
- **Creation Date:** 20260313
- **Last Modified:** 20260313
- **Environment:** Client-side only (browser with WebAuthn support)

---

*Automatically generated document*
