# dpHelper State

## Overview

This document provides a comprehensive list of all available state functions in the `dphelper` library along with their descriptions and examples.

## Functions

### state.[state.name] ex: _state.test_

- **Description:** Set and get state values.
- **Example:**

  ```javascript
  // To set a state value
  state.name = 'value';

  // To get a state value
  const value = state.name;
  ```

### state.list

- **Description:** Show all states out of proxy.
- **Example:**

  ```javascript
  state.list;
  ```

### state.remove([state.name])

- **Description:** Remove a state.
- **Parameters:**
  - `name` (string): The name of the state to remove.
- **Example:**

  ```javascript
  state.remove('stateName');
  ```

### state.name.lock()

- **Description:** Lock a state (only for types: Array, Object).
- **Example:**

  ```javascript
  state.name = {test:"test"}
  state.name.lock();
  "Now you can't add more data or remove it"
  ```

### state.removeAll()

- **Description:** Remove all states.
- **Example:**

  ```javascript
  state.name = {test:"test"}
  state.removeAll();
  "Now you can't see state.name (all states are removed)"
  "Use for Log-out / Sign-out operation"
  ```

## License

This project is licensed under the MIT License.
