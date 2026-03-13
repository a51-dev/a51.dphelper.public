# idb

Comprehensive IndexedDB wrapper providing a simple Promise-based API for client-side database operations with schema parsing, queries, and transactions.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `open` | Open or create an IndexedDB database | `dphelper.idb.open('mydb', 1, { users: 'id++,name,email' })` |
| `put` | Insert or update a record | `dphelper.idb.put('mydb', 'users', { name: 'John' })` |
| `get` | Get a record by key | `dphelper.idb.get('mydb', 'users', 1)` |
| `getAll` | Get all records from a store | `dphelper.idb.getAll('mydb', 'users')` |
| `delete` | Delete a record by key | `dphelper.idb.delete('mydb', 'users', 1)` |
| `clear` | Clear all records from a store | `dphelper.idb.clear('mydb', 'users')` |
| `count` | Count records in a store | `dphelper.idb.count('mydb', 'users')` |
| `query` | Query records by index | `dphelper.idb.query('mydb', 'users', 'name', 'John')` |
| `bulkPut` | Insert or update multiple records | `dphelper.idb.bulkPut('mydb', 'users', [{name: 'A'}, {name: 'B'}])` |
| `close` | Close a database connection | `dphelper.idb.close('mydb')` |

## Description

A powerful IndexedDB wrapper that simplifies browser storage with:
- **Promise-based API** - All operations return Promises for easy async/await
- **Schema Parsing** - Simple string-based schema definition (e.g., `'users: id++,name,email'`)
- **Auto-increment Support** - Built-in support for auto-incrementing keys
- **Index Support** - Create and query by indexed fields
- **Transaction Management** - Automatic transaction handling
- **Database Caching** - Connection pooling for better performance

## Usage Examples

### Opening a Database

```javascript
// Open database with schema
const db = await dphelper.idb.open('myapp', 1, {
  users: 'id++,name,email,age',
  settings: 'key*,theme,language'
});

console.log('Database opened successfully');
```

Schema format: `storeName: keyPath*indexes` where:
- `++` = auto-incrementing key
- `*` = string key
- `!` after field = unique index

### CRUD Operations

```javascript
// Add a record
const id = await dphelper.idb.put('myapp', 'users', {
  name: 'John Doe',
  email: 'john@example.com',
  age: 30
});
console.log(`Created user with ID: ${id}`);

// Get a record
const user = await dphelper.idb.get('myapp', 'users', 1);
console.log(user); // { name: 'John Doe', email: 'john@example.com', ... }

// Update a record
await dphelper.idb.put('myapp', 'users', {
  id: 1,
  name: 'John Updated',
  email: 'john.new@example.com',
  age: 31
});

// Delete a record
await dphelper.idb.delete('myapp', 'users', 1);
```

### Bulk Operations

```javascript
// Insert multiple records
const users = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
  { name: 'Charlie', email: 'charlie@example.com' }
];

const ids = await dphelper.idb.bulkPut('myapp', 'users', users);
console.log(`Inserted ${ids.length} users`);

// Get all records
const allUsers = await dphelper.idb.getAll('myapp', 'users');
console.log(allUsers);
```

### Queries

```javascript
// Query by index (requires index in schema)
// Schema: users: 'id++,name,email' creates 'name' and 'email' indexes

// Get all users named 'John'
const johns = await dphelper.idb.query('myapp', 'users', 'name', 'John');

// Query with options
const results = await dphelper.idb.query(
  'myapp',
  'users',
  'age',
  undefined,
  {
    direction: 'next',
    limit: 10
  }
);
```

### Counting and Clearing

```javascript
// Count records
const userCount = await dphelper.idb.count('myapp', 'users');
console.log(`Total users: ${userCount}`);

// Clear all records
await dphelper.idb.clear('myapp', 'users');
console.log('Users store cleared');

// Close database
dphelper.idb.close('myapp');
```

## Advanced Usage

### Complete CRUD Application

```javascript
class UserRepository {
  constructor(dbName, version) {
    this.dbName = dbName;
    this.version = version;
  }

  async init() {
    this.db = await dphelper.idb.open(this.dbName, this.version, {
      users: 'id++,name,email,createdAt'
    });
  }

  async create(userData) {
    const user = {
      ...userData,
      createdAt: new Date().toISOString()
    };
    return await dphelper.idb.put(this.dbName, 'users', user);
  }

  async findById(id) {
    return await dphelper.idb.get(this.dbName, 'users', id);
  }

  async findAll() {
    return await dphelper.idb.getAll(this.dbName, 'users');
  }

  async update(id, userData) {
    const existing = await this.findById(id);
    if (!existing) throw new Error('User not found');

    return await dphelper.idb.put(this.dbName, 'users', {
      ...existing,
      ...userData,
      id
    });
  }

  async delete(id) {
    return await dphelper.idb.delete(this.dbName, 'users', id);
  }

  async count() {
    return await dphelper.idb.count(this.dbName, 'users');
  }
}

// Usage
const users = new UserRepository('myapp', 1);
await users.init();

const id = await users.create({ name: 'John', email: 'john@example.com' });
const user = await users.findById(id);
await users.update(id, { name: 'John Updated' });
await users.delete(id);
```

### Offline-First Data Sync

```javascript
class OfflineStore {
  constructor(dbName) {
    this.dbName = dbName;
  }

  async init() {
    await dphelper.idb.open(this.dbName, 1, {
      pendingSync: 'id++,type,data,createdAt',
      synced: 'id++,type,data,syncedAt'
    });
  }

  async queueForSync(type, data) {
    return await dphelper.idb.put(this.dbName, 'pendingSync', {
      type,
      data,
      createdAt: new Date().toISOString()
    });
  }

  async getPendingSync() {
    return await dphelper.idb.getAll(this.dbName, 'pendingSync');
  }

  async markSynced(id, type, data) {
    await dphelper.idb.delete(this.dbName, 'pendingSync', id);
    return await dphelper.idb.put(this.dbName, 'synced', {
      type,
      data,
      syncedAt: new Date().toISOString()
    });
  }
}
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.1
- **Creation Date:** 20260313
- **Last Modified:** 20260313
- **Environment:** Client-side only (browser)

---

*Automatically generated document*
