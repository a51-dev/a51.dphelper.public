# dpHelper

![dpHelper](https://raw.githubusercontent.com/passariello/container/refs/heads/main/dphelper/assets/images/banner.svg)

**Manager | DevTools** by [Dario Passariello](https://dario.passariello.ca) (c)

[![version](https://img.shields.io/npm/v/dphelper.svg)](https://npmjs.org/package/dphelper)
[![downloads](https://img.shields.io/npm/dm/dphelper.svg)](https://npmjs.org/package/dphelper)
![TypeScript](https://img.shields.io/badge/TypeScript-006b98?logo=TypeScript&logoColor=white)

![dphelper](https://img.shields.io/badge/dphelper-npm-green?logo=dphelper&logoColor=white)
![browser extension](https://img.shields.io/badge/browser%20extension-beta-orange.svg)

<!--
[![dphelper](https://snyk.io/advisor/npm-package/dphelper/badge.svg)](https://snyk.io/advisor/npm-package/dphelper)
[![Socket Badge](https://socket.dev/api/badge/npm/package/dphelper)](https://socket.dev/npm/package/dphelper)
-->

## About 🔥

dpHelper is a precise and complete collection of 190+ tools ready to use in all web/SaaS applications. State and Store Management are now easy, accessible everywhere in your application, including Ajax or React apps, without the need for extra files.

1. __Single Source of Truth__: The application's entire state is held within a single object in one store, ensuring consistent and accessible state management throughout the app.

2. __State is flexible__: State changes are facilitated exclusively through actions. These actions, which are straightforward JavaScript objects, delineate what has occurred. This methodology ensures that state changes remain predictable.

3. __Changes are made with proxy handle function__: To define state changes, dpHelper employs pure functions as intermediaries. These functions accept the current state as input and produce a new state as output, ensuring predictability and ease of testing in the system.

### Example in React

```javascript
import { useEffect } from 'react';
import 'dphelper';

  function App() {
    // Store a value in the state
    state.test = 'Hello, World!';

    // Use the stored value in a React component
    useEffect(() => {
      console.log("You can recall from all pages: " + state.test); // Output: "Hello, World!"
    }, []);

    return (
      <div>
        <h1>{state.test}</h1>
      </div>
    );
  }

export default App;
```

## Live Demo

[https://a51.dev/tests/](https://a51.dev/tests/)

You can see an HTML version where dpHelper and LayerPro work together seamlessly. dpHelper is compatible with a variety of frontend libraries, including:
* HTML
* React
* Vue
* And any other frontend library

## Documentation

You can see:
- [State](https://passariello.gitbook.io/dphelper-devtools/general/state)
- [Store](https://passariello.gitbook.io/dphelper-devtools/general/store)
- [Observer](https://passariello.gitbook.io/dphelper-devtools/general/observer)
- [List of functions](https://passariello.gitbook.io/dphelper-devtools/general/tools)

You can see more tutorials, information, and examples about **dpHelper** [clicking here](https://passariello.gitbook.io/dphelper-devtools).

## Usage

Install dpHelper.

```shell
npm i dphelper --save-dev
```

or update:

```shell
npm i dphelper@latest --save-dev
```

Use it in the main root file (and only there):

```javascript
import "dphelper";
```

or

```javascript
require("dphelper");
```

## Install for EJS or Other Types of Projects (like HTML)

Note: You don't need to use npm install in this case, or you will get an error.

```html
<script src="https://cdn.jsdelivr.net/npm/dphelper@latest"></script>
```

## The Best Way To Use State 💥

### Using the "state" Function

You can use the state function to store and reuse data throughout your application. Similar to other state managers, you can save state information in JSON format and access it easily in various contexts, including React useEffect and/or dispatch.

For example, you can store a value like this: _state.test = 'I am ready'_ and then retrieve it later using state.test.

_example:_

You can use the browser's devtools console and type " **state.test = 'I am ready'** ". Every time you want to use '**test**' values, you need just recall **state.test**.

```javascript
// Set a state
state.test = "I am ready" *

// Get the state
state.test *

// List all states
state.list // or just "state" to see the proxy

// Lock a state from edit (Only for Objects or Array)
state.test.lock() *

// Remove a state
state.remove("test")

// Remove all states
state.removeAll()

*["test" is only an example]

```

### Observer 😎 for States

**Note**: _Observer works only with states. Stores are excluded at the moment._

If you want to run a function every time a state changes, you can use:

```javascript
/**
* Observer is a non-cumulative listener,
* triggered from customEvent / dispatch from state
* @parameters
* [ state | store, function ]
*/
observer( "state.test", () => alert("Test Changes to: " + state.test) )
          |__________|  |___________________________________________|
          State: string                   Function

PS: you need to use the name of state | store as string
```

You can use it everywhere. Works like "useState" in React but with more flexibility (use one observer for each state!).

### Example:

```javascript
import 'dphelper';

// Use the observer to log the changing state value
observer(
  'state.count',
  () => console.log("State changed: ", state.count)
);

// Store a value in the state that changes every 5 seconds
setInterval(() => state.count = Date.now(), 5000);
```

#### Another Simple Example:

```javascript
import 'dphelper';

// Set a state
state.myData = 'Hello, world!';

// Retrieve the state
console.log(state.myData); // Output: Hello, world!

// Observe state changes
observer('myData', () => {
  console.log('myData has changed to:', state.myData);
});

// Change the state
state.myData = 'New value';
```

## The Best Way To Use Store 🫙

### Persistent Storage with dpHelper

When using dpHelper for permanent storage, you should use the **store**, which stores data persistently across sessions.

#### Important Security Note

1. **Use store for persistent storage:** If you want to store data permanently, use store to ensure it is saved in localStorage.

2. **Remove data when necessary:** To maintain security, remove stored data when it is no longer needed, such as during logout.

3. **Remove all stored data:** Use store.removeAll() to securely remove all stored data from your application.

```javascript
// Set a store:
store.set("test", { test: "test" })

// Get a store:
store.get("test") // Output: { test: "test" }

// Remove a store:
store.remove("test") // Output: "ok"

// Remove all stores:
store.removeAll() // Output: "ok"
```

### Example in React

```javascript
import { useEffect } from 'react';
import 'dphelper';

function App() {

  // Store a value in the store (persistent storage)
  store.set(
    'user',
    {
      name: 'John Doe',
      age: 30
    }
  );

  // Use the stored value in a React component
  useEffect(
    () => {
      console.log(store.get("user")); // Output: { name: "John Doe", age: 30 }
      $("#name").text(store.get("user").name)
    }, []
  );

  // Remove all stored data if necessary
  // store.removeAll();

  return (
    <div>
      <h1 id="name">...</h1>
    </div>
  );
}

export default App;
```

## Console It!

Type **dphelper** in the devtool console of your browser to have a look at all available tools that you can use! You can call these from everywhere without import (just one time in the main/root page).

## Browser Extension (Chrome/Edge) ♥️

![browser extension](https://img.shields.io/badge/browser%20extension-beta-orange.svg)

![dphelper Banner](https://raw.githubusercontent.com/passariello/container/refs/heads/main/dphelper/assets/images/banner.png)

![dphelper Banner](https://raw.githubusercontent.com/passariello/container/refs/heads/main/dphelper/assets/images/screenshot.png)

Chrome: [Download from Google Web Store](https://chrome.google.com/webstore/detail/dphelper-manager-dev-tool/oppppldaoknfddeikfloonnialijngbk)

Edge: [Download from Microsoft Addons](https://microsoftedge.microsoft.com/addons/detail/dphelper-manager-dev-to/kphabkbdpaljlfagldhojilhfammepnk)

PS: **dpHelper** is compatible with all Chromium-based browsers like **Edge or Brave**!

## dpHelper Browser Extension

The dpHelper browser extension allows you to manage your application's dpHelper NPM. Key features include:

1. Simplified API operations: Easily manage and manipulate data with dpHelper's collection of scripts.
2. Real-time monitoring: Track memory usage and localStorage to optimize your application's performance.
3. Stay up-to-date: Receive updates and tips to improve your daily workflow.
4. Easy installation: Simply import 'dphelper' in your project index to get started.
5. Global accessibility: All scripts are available globally and can be accessed from anywhere in your application.

## Check

[Socket.dev](https://socket.dev/npm/package/dphelper)

[Snyk.io](https://security.snyk.io/package/npm/dphelper)

## License

[MIT - https://en.wikipedia.org/wiki/MIT_License](https://en.wikipedia.org/wiki/MIT_License)

- [LICENCE](https://passariello.gitbook.io/dphelper-devtools/documents/license)
- [CODE OF CONDUCT](https://passariello.gitbook.io/dphelper-devtools/documents/code_of_conduct)
- [SECURITY](https://passariello.gitbook.io/dphelper-devtools/documents/security)
- [CONTRIBUTING](https://passariello.gitbook.io/dphelper-devtools/documents/contributing)

---

Dario Passariello - dariopassariello@gmail.com, All rights reserved - Copyright (c) 2019 - 2024
