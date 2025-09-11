# dpHelper Store

## Overview

This document provides a comprehensive list of all available store functions in the `dphelper` library along with their descriptions and examples.

**Based on [Memorio](https://www.npmjs.com/package/memorio) by Dario Passariello** to manage STATE, STORE, SESSION and OBSERVER. You can use Memorio is you need only state management. DpHelper is indicate when you use a complete suite of tools.

## Functions

### store.get([store.name])

- **Description:** Retrieve an item from local storage.
- **Parameters:**
  - `name` (string): The name of the item to retrieve.
- **Example:**

  ```javascript
  const value = store.get('itemName');
  console.log(value);
  ```

### store.set([name, value])

- **Description:** Set an item in local storage.
- **Parameters:**
  - `name` (string): The name of the item to set.
  - `value` (any): The value of the item to set.
- **Example:**

  ```javascript
  store.set('itemName', value);
  ```

### store.remove([store.name])

- **Description:** Delete an item from local storage.
- **Parameters:**
  - `name` (string): The name of the item to delete.
- **Example:**

  ```javascript
  store.remove('itemName');
  ```

### store.removeAll()

- **Description:** Remove all items from local storage.
- **Parameters:** None
- **Example:**

  ```javascript
  store.removeAll();
  ```

### store.quota()

- **Description:** Estimate the storage quota and usage.
- **Parameters:** None
- **Example:**

  ```javascript
  const quota = store.quota();
  console.log(quota);
  ```

### store.size()

- **Description:** Calculate the total size of all items in local storage.
- **Parameters:** None
- **Example:**

  ```javascript
  const totalSize = store.size();
  console.log(totalSize);
  ```

## License

This project is licensed under the MIT License.
