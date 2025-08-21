# Observer

## Overview

This document provides a comprehensive list of all available observer functions in the `dphelper` library along with their descriptions and examples.

## Functions

### observer([state.name], [function])

- **Description:** Sets up an observer to monitor state changes and trigger a callback.
- **Parameters:**
  - `stateName` (string): The name of the state to monitor.
  - `callBack` (Function): The callback function to run when the state changes.
  - `option` (object): Additional options for the observer.
- **Example:**

  ```javascript
  observer('state.test', (newValue) => {
    console.log('State changed:', newValue);
  });
  ```

### observer([state.name])

- **Description:** Recall the observer previously generated.
- **Returns:** Console log with a note
- **Example:**

  ```javascript
  observer('state.test');
  ```

### observer.list

- **Description:** See the list of all your observer (eventListener) actually installed.
- **Returns:** The list of all installed observers.
- **Example:**

  ```javascript
  observer.list;
  ```

### remove

- **Description:** Remove an observer.
- **Parameters:**
  - `name` (string): The name of the observer to remove.
- **Example:**

  ```javascript
  observer.remove('state.test');
  ```

### removeAll

- **Description:** Remove all observers.
- **Returns:** void
- **Example:**

  ```javascript
  observer.removeAll();
  ```

## License

This project is licensed under the MIT License.
