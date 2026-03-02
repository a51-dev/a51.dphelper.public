# security

Security and cryptography functions.

## Functions

| Function | Description | Example |
| :--- | :--- | :--- |
| `fingerprint` | Generates a unique browser fingerprint | `dphelper.security.fingerprint()` |
| `saveEncrypted` | Encrypts and saves data to localStorage | `dphelper.security.saveEncrypted(key, val, secret)` |
| `getEncrypted` | Retrieves and decrypts data from localStorage | `dphelper.security.getEncrypted(key, secret)` |
| `ulid` | Generates a Universally Unique Lexicographically Sortable Identifier | `dphelper.security.ulid()` |
| `uuid.v4` / `v5` | Generates random UUIDs | `dphelper.security.uuid.v4` |
| `uuid.byVal` | Generates a stable UUID based on a string | `dphelper.security.uuid.byVal('string')` |
| `crypt` / `deCrypt` | Encrypts or Decrypts strings using AES | `dphelper.security.crypt(data, secret)` |
| `hashPass` | Generates a secure password hash (SHA-256) | `dphelper.security.hashPass(user, pass)` |
| `SHA256_Hex` | Generates a raw SHA256 hex string | `dphelper.security.SHA256_Hex(data)` |

## Description

The security module provides advanced tools for data protection, identity generation, and browser identification. It includes modern ID systems like ULID and fingerprinting techniques to secure web applications.

## Details

- **Author:** Dario Passariello & Jo
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220

---

*Automatically generated document*
