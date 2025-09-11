# dpHelper Session

## Overview

This document provides a comprehensive list of all available session functions in the `dphelper` library along with their descriptions and examples.

**Based on [Memorio](https://www.npmjs.com/package/memorio) by Dario Passariello** to manage STATE, STORE, SESSION and OBSERVER. You can use Memorio is you need only state management. DpHelper is indicate when you use a complete suite of tools.

## Functions

### session.get([session.name])

- **Description:** Retrieve an item from session storage.
- **Parameters:**
  - `name` (string): The name of the item to retrieve.
- **Example:**

  ```javascript
  const value = session.get('itemName');
  console.log(value);
  ```

### session.set([name, value])

- **Description:** Set an item in session storage.
- **Parameters:**
  - `name` (string): The name of the item to set.
  - `value` (any): The value of the item to set.
- **Example:**

  ```javascript
  session.set('itemName', value);
  ```

### session.remove([session.name])

- **Description:** Delete an item from session storage.
- **Parameters:**
  - `name` (string): The name of the item to delete.
- **Example:**

  ```javascript
  session.remove('itemName');
  ```

### session.removeAll()

- **Description:** Remove all items from session storage.
- **Parameters:** None
- **Example:**

  ```javascript
  session.removeAll();
  ```

## License

This project is licensed under the MIT License.
