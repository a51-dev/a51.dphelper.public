# useObserver

## Overview

This document provides a comprehensive list of all available useObserver functions in the `dpHelper` library along with their descriptions and examples.

## Functions

### useObserver(()=>{ YOUR CODE }, "state.name")

- **Description:** Sets up an useObserver to monitor state changes and trigger a callback.
- **Parameters:**
  - `stateName` (string): The name of the state to monitor.
  - `callBack` (Function): The callback function to run when the state changes.
  - `option` (object): Additional options for the useObserver.

- **Example:**
  > The format is really similar to React useEffect

  ```javascript
  useObserver(
    () => {
      console.log('State changed:', newValue);
    }, 'state.test'
  );
  ```

## License

This project is licensed under the Private License.
