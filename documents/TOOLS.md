# All Functions List

## Overview

This document provides a comprehensive list of all available functions in the ```js
dphelper` library along with their descriptions.

## Functions

### Anchor

```js
dphelper.anchor.toOnClick(el)
// Converts an element's href attribute to an onclick event.
```

### Array

```js
dphelper.array.find(array, key)
// Finds an element in an array by key.
```

```js
dphelper.array.unique(array)
// Returns an array with unique elements.
```

```js
dphelper.array.delete(array, key)
// Deletes an element from an array by key.
```

```js
dphelper.array.merge(arrayA, arrayB)
// Merges two arrays.
```

```js
dphelper.array.mergeByKey(arrayA, arrayB, key)
// Merges two arrays by a specific key.
```

```js
dphelper.array.asc(array)
// Sorts an array in ascending order.
```

```js
dphelper.array.desc(array)
// Sorts an array in descending order.
```

```js
dphelper.array.duplicates(array)
// Returns an array of duplicate elements.
```

```js
dphelper.array.even(array)
// Returns an array of even numbers.
```

```js
dphelper.array.odd(array)
// Returns an array of odd numbers.
```

```js
dphelper.array.toObj(array)
// Converts an array to an object.
```

```js
dphelper.array.sumColumn(array, column)
// Sums the values of a specific column in an array.
```

```js
dphelper.array.shuffle(array)
// Shuffles the elements of an array.
```

```js
dphelper.array.generate(num)
// Generates an array with a specified number of elements.
```

```js
dphelper.array.testArrayInt(array)
// Tests if the elements of an array are integers.
```

```js
dphelper.array.rand32(number)
// Generates a random 32-bit number.
```

```js
dphelper.array.findindex(array, key)
// Finds the index of an element in an array by key.
```

```js
dphelper.array.pathToJson(array, separator?)
// Converts an array to a JSON object using a separator.
```

```js
deepClone(src)
// Creates a deep clone of an object.
```

```js
dphelper.array.match(arrayWords, arrayToCheck)
// Checks if two arrays match.
```

```js
dphelper.array.shallow(array)
// Generate a shallow copy of an object.
```

```js
dphelper.array.deeCopy(array)
// Generate a structured copy of an object.
```

```js
dphelper.array.groupBy(array, key)
// Generate a structured copy of an object.
```

### Audio

```js
dphelper.audio.play(url)
// Plays an audio file from a URL.
```

### Avoid

```js
dphelper.avoid.cache(uri)
// Caches a URI.
```

### Browser

```js
dphelper.browser.state(state, title, url)
// Changes the browser state.
```

```js
dphelper.browser.forw(times)
// Moves forward in the browser history.
```

```js
dphelper.browser.back(times)
// Moves backward in the browser history.
```

```js
dphelper.browser.reload()
// Reloads the current page.
```

```js
dphelper.browser.href(url)
// Navigates to a URL.
```

```js
dphelper.browser.offLine(text?)
// Displays an offline message.
```

```js
dphelper.browser.zoom()
// Gets the current zoom level.
```

```js
dphelper.browser.status(code)
// Gets the status text for a status code.
```

### Check

```js
dphelper.check.url(url)
// Checks if a URL is valid.
```

```js
dphelper.check.version(v1, v2, opts)
// Compares two version strings.
```

```js
dphelper.check.npmVer(npm)
// Gets the version of an npm package.
```

### Color

```js
dphelper.color.hex(c)
// Converts a color to hex format.
```

```js
dphelper.color.toHex(rgb)
// Converts RGB to hex format.
```

```js
dphelper.color.toRGB(c)
// Converts a color to RGB format.
```

```js
dphelper.color.oleColor(c)
// Converts a color to OLE format.
```

```js
dphelper.color.gradient(colorStart, colorEnd, colorCount)
// Generates a gradient between two colors.
```

### Console

```js
dphelper.console.info(name, message, fn)
// Logs an info message to the console.
```

```js
dphelper.console.stop(options?[])
// Stops the console.
```

```js
dphelper.console.toHtml(el)
// Converts console output to HTML.
```

### Cookie

```js
dphelper.cookie.set(params: { name, value, time?, path?: "/", sameSite?: "Lax", secure?: "Secure" | "false" })
// Sets a cookie.
```

```js
dphelper.cookie.get(name)
// Gets a cookie by name.
```

```js
dphelper.cookie.delete(name)
// Deletes a cookie by name.
```

```js
dphelper.cookie.removeAll()
// Clears all cookies.
```

### Coords

```js
dphelper.coods.degreesToRadians(degrees)
// Converts degrees to radians.
```

```js
dphelper.coods.latToMeters(points)
// Converts latitude to meters.
```

```js
dphelper.coods.toVector(points)
// Converts points to a vector.
```

```js
dphelper.coods.convertToDecDegrees(deg, minutes, sec, direction)
// Converts coordinates to decimal degrees.
```

```js
dphelper.coods.distance(point1, point2)
// Calculates the distance between two points.
```

```js
dphelper.coods.polarToCartesian(centerX, centerY, radius, angleInDegrees)
// Converts polar coordinates to Cartesian coordinates.
```

```js
dphelper.coods.mapDegreesToPixels(degree, minDegree, maxDegree, minPixel, maxPixel, padding)
// Maps degrees to pixels.
```

### Date

```js
dphelper.date.days(lang?)
// Returns the days of the week in a specified language.
```

```js
dphelper.date.months(lang?)
// Returns the months of the year in a specified language.
```

```js
dphelper.date.year()
// Returns the current year.
```

```js
dphelper.date.toIso(value, int?)
// Converts a date to ISO format.
```

```js
dphelper.date.toMMDDYYYY(value)
// Converts a date to MM/DD/YYYY format.
```

```js
dphelper.date.toYYYYMMDD(value)
// Converts a date to YYYY/MM/DD format.
```

```js
dphelper.date.toHuman(value)
// Converts a date to a human-readable format.
```

```js
dphelper.date.convert(value, format[])
// Converts a date to a specified format.
```

```js
dphelper.date.iso2Epoch(value)
// Converts an ISO date to epoch time.
```

```js
dphelper.date.localIsoTime(value)
// Converts a date to local ISO time.
```

```js
dphelper.date.utc()
// Returns the current UTC time.
```

```js
dphelper.date.parse(value, separator?)
// Parses a date string.
```

```js
dphelper.date.addDays(date, days)
// Adds days to a date.
```

```js
dphelper.date.dateTimeToString(dateObject)
// Converts a date object to a string.
```

```js
dphelper.date.isoToHuman(value, symbol?)
// Converts an ISO date to a human-readable format.
```

```js
dphelper.date.fullDate()
// Returns the full date.
```

```js
dphelper.date.epoch()
// Returns the current epoch time.
```

```js
dphelper.date.diffInDays(d1, d2)
// Calculates the difference in days between two dates.
```

```js
dphelper.date.diffInWeeks(d1, d2)
// Calculates the difference in weeks between two dates.
```

```js
dphelper.date.diffInMonths(d1, d2)
// Calculates the difference in months between two dates.
```

```js
dphelper.date.diffInYears(d1, d2)
// Calculates the difference in years between two dates.
```

```js
dphelper.date.dateToYMD(date)
// Converts a date to YYYY-MM-DD format.
```

```js
dphelper.date.collection(params: { date?; type; locale? })
// Returns a collection of dates.
```

```js
dphelper.date.timeZones()
// Returns a list of time zones.
```

### Disable

```js
dphelper.disable.select(el?)
// Disables text selection.
```

```js
dphelper.disable.spellCheck(tmr?)
// Disables spell check.
```

```js
dphelper.disable.rightClick(el?)
// Disables right-click.
```

```js
dphelper.disable.copy(el?)
// Disables copy.
```

```js
dphelper.disable.paste(el?)
// Disables paste.
```

```js
dphelper.disable.cut(el?)
// Disables cut.
```

```js
dphelper.disable.drag(el?)
// Disables drag.
```

### Dispatch

```js
dphelper.dispatch.set(name, value?)
// Sets a dispatch event.
```

```js
dphelper.dispatch.listen(name, cb?, flag?)
// Listens for a dispatch event.
```

```js
dphelper.dispatch.remove(name)
// Removes a dispatch event.
```

### Element

```js
dphelper.element.fitScale(el, scale?, fit?)
// Fits an element to a scale.
```

```js
dphelper.element.scaleBasedOnWindow(elm, scale, fit)
// Scales an element based on the window size.
```

### Events

```js
dphelper.events.list(el)
// Lists all events on an element.
```

```js
dphelper.events.multi(element, eventNames, listenerListener)
// Adds multiple event listeners to an element.
```

```js
dphelper.events.copy(el)
// Copies an element.
```

```js
dphelper.events.onDrag(elem)
// Adds a drag event to an element.
```

```js
dphelper.events.keys(e): { key; ctrl; alt; shift }
// Gets the key, ctrl, alt, and shift status from a keyboard event.
```

### Form

```js
dphelper.form.serialize(form): { [key] }
// Serializes a form to an object.
```

```js
dphelper.form.confirmType(type, value)
// Confirms the type of a value.
```

```js
dphelper.form.required(value)
// Checks if a value is required.
```

```js
dphelper.form.minLength(value, num?)
// Checks if a value meets the minimum length.
```

```js
dphelper.form.maxLength(value, num?)
// Checks if a value exceeds the maximum length.
```

```js
dphelper.form.maxPhoneNumber(value, num?)
// Checks if a phone number exceeds the maximum length.
```

```js
dphelper.form.isNumeric(value)
// Checks if a value is numeric.
```

```js
dphelper.form.isEmail(value)
// Checks if a value is an email.
```

```js
dphelper.form.pattern(e)
// Validates a pattern.
```

```js
dphelper.form.noSpecialChars(e)
// Disallows special characters.
```

```js
dphelper.form.table(size, id, elem)
// Creates a table.
```

```js
dphelper.form.sanitize(str)
// Sanitizes a string.
```

### Format

```js
dphelper.format.currency(value, locale?, currency?)
// Formats a value as currency.
```

```js
dphelper.format.phoneNumber(value, countryCode?)
// Formats a phone number.
```

### Imports

```js
dphelper.imports.file(elem, file)
// Imports a file.
```

### Json

```js
dphelper.json.counter(json, key?, val?)
// Counts occurrences in a JSON object.
```

```js
dphelper.json.toCsv(jsonInput)
// Converts JSON to CSV.
```

```js
dphelper.json.saveCsvAs(csvData, fileName)
// Saves CSV data as a file.
```

```js
dphelper.json.is(str)
// Checks if a string is valid JSON.
```

```js
dphelper.json.parse(file)
// Parses a JSON file.
```

```js
dphelper.json.sanitize(str)
// Sanitizes a JSON string.
```

```js
dphelper.json.sanitizeJsonValue(str)
// Sanitizes a JSON value.
```

### Load

```js
dphelper.load.all(context, cacheName?)
// Loads all modules in a context.
```

```js
dphelper.load.file(filePath)
// Loads a file.
```

```js
dphelper.load.fileToElement(elementSelector, filePath)
// Loads a file into an element.
```

```js
dphelper.load.json(filePath)
// Loads a JSON file.
```

```js
dphelper.load.remote(path, method?, headers?)
// Loads data from a remote URL.
```

```js
dphelper.load.script(scripts[], elementSelector?)
// Loads scripts.
```

```js
dphelper.load.toJson(context, cacheName?)
// Converts a context to JSON.
```

### Logging

```js
dphelper.logging.list: { type; message }
// List of log messages.
```

```js
dphelper.logging.reg(txt)
// Logs a regular message.
```

```js
dphelper.logging.debug(txt)
// Logs a debug message.
```

```js
dphelper.logging.error(txt)
// Logs an error message.
```

### Math

```js
dphelper.math.rnd()
// Generates a random number.
```

```js
dphelper.math.tmr()
// Returns the current time in milliseconds.
```

```js
dphelper.math.add(a, b)
// Adds two numbers.
```

```js
dphelper.math.sub(a, b)
// Subtracts two numbers.
```

```js
dphelper.math.multi(a, b)
// Multiplies two numbers.
```

```js
dphelper.math.div(a, b)
// Divides two numbers.
```

```js
dphelper.math.rem(a, b)
// Returns the remainder of two numbers.
```

```js
dphelper.math.exp(a, b)
// Returns the exponent of two numbers.
```

```js
dphelper.math.isOdd(a)
// Checks if a number is odd.
```

```js
dphelper.math.float2int(a)
// Converts a float to an integer.
```

```js
dphelper.math.percent(n, tot)
// Calculates the percentage.
```

```js
dphelper.math.isPrime(n)
// Checks if a number is prime.
```

### Memory

```js
dphelper.memory.lock(obj)
// Locks an object in memory.
```

```js
dphelper.memory.unlock(obj)
// Unlocks an object in memory.
```

### Object

```js
dphelper.obj.toArray(object)
// Converts an object to an array.
```

```js
dphelper.obj.replaceNullObjects(data)
// Replaces null objects in a record.
```

```js
dphelper.obj.serialize(value)
// Serializes a value.
```

```js
dphelper.obj.deSerialize(valueNew)
// Deserializes a value.
```

```js
dphelper.obj.sort(o)
// Sorts an object.
```

```js
dphelper.obj.toXML(obj)
// Converts an object to XML.
```

```js
dphelper.obj.find(object, key, value)
// Finds an element in an object by key and value.
```

```js
dphelper.obj.instance(obj)
// Returns the instance of an object.
```

```js
dphelper.obj.updateByKey(obj, key, newValue)
// Updates an object by key.
```

```js
dphelper.obj.findindex(object, key)
// Finds the index of an element in an object by key.
```

```js
dphelper.obj.parse(val)
// Parses a value.
```

```js
dphelper.obj.isObject(val)
// Checks if a value is an object.
```

```js
dphelper.obj.diff(obj1, obj2)
// Finds the difference between two objects.
```

```js
dphelper.obj.path(prop, object[], separator?)
// Converts a property path to a string.
```

```js
dphelper.obj.shallow(object)
// Generate a shallow copy of an object.
```

```js
dphelper.obj.deeCopy(object)
// Generate a structured copy of an object.
```

### Path

```js
dphelper.path.rail()
// Returns the rail path.
```

```js
dphelper.path.hash()
// Returns the hash path.
```

```js
dphelper.path.query(url)
// Parses the query string of a URL.
```

### Promise

```js
dphelper.promise.check(p)
// Checks if a value is a promise.
```

```js
dphelper.promise.resolve(data)
// Resolves a promise with data.
```

### Sanitize

```js
dphelper.sanitize.html(s)
// Sanitizes HTML.
```

### Screen

```js
dphelper.screen.fullScreen(el)
// Enables full screen mode for an element.
```

```js
dphelper.screen.toggle(el)
// Toggles full screen mode for an element.
```

```js
dphelper.screen.info(): { width; height; availWidth; availHeight; colorDepth; pixelDepth }
// Gets screen information.
```

### Scrollbar

```js
dphelper.scrollbar.custom(el, options)
// Customizes a scrollbar.
```

```js
dphelper.scrollbar.indicator(props)
// Adds a scrollbar indicator.
```

```js
dphelper.scrollbar.position: { get(el); set(el) }
// Gets and sets scrollbar position.
```

```js
dphelper.scrollbar.smooth(target, speed, smooth)
// Smooth scrolls to a target.
```

```js
dphelper.scrollbar.scrollTo(container, element, gap?)
// Scrolls to an element within a container.
```

### Security

```js
dphelper.security.uuid: { byVal(string); v4; v5 }
// Generates UUIDs.
```

```js
dphelper.security.hashPass(u, p, t?)
// Hashes a password.
```

```js
dphelper.security.crypt(u, p, mode?)
// Encrypts data.
```

```js
dphelper.security.deCrypt(u, p, mode?)
// Decrypts data.
```

```js
dphelper.security.AES_KeyGen(passKey?)
// Generates an AES key.
```

```js
dphelper.security.SHA256_Hex(passKey)
// Generates a SHA256 hash.
```

```js
dphelper.security.ulid()
// Generates ULID (Universally Unique Lexicographically Sortable Identifier).
```

### Shortcut

```js
dphelper.shortcut.keys(e, trigger)
// Adds a keyboard shortcut.
```

### Socket

```js
dphelper.socket.info()
// Gets socket information.
```

```js
dphelper.socket.start(element, server)
// Starts a socket connection.
```

```js
dphelper.socket.conn(id, server)
// Connects to a socket server.
```

```js
dphelper.socket.connect(server)
// Connects to a server.
```

```js
dphelper.socket.open(id, server)
// Opens a socket connection.
```

```js
dphelper.socket.send(mex, type?)
// Sends a message through a socket.
```

```js
dphelper.socket.ping()
// Sends a ping through a socket.
```

```js
dphelper.socket.receive(el?)
// Receives a message through a socket.
```

```js
dphelper.socket.keepAlive()
// Keeps a socket connection alive.
```

```js
dphelper.socket.check()
// Checks the status of a socket connection.
```

```js
dphelper.socket.list()
// Lists all socket connections.
```

### SVG

```js
dphelper.svg.init(container, source1, source2, cb?)
// Initializes an SVG container.
```

```js
dphelper.svg.check()
// Checks if SVG is supported.
```

```js
dphelper.svg.update(rect1, rect2, cxn)
// Updates an SVG element.
```

```js
dphelper.svg.getCurve(p1, p2, dx)
// Gets a curve path between two points.
```

```js
dphelper.svg.getIntersection(dx, dy, cx, cy, w, h)
// Gets the intersection point of a curve.
```

```js
dphelper.svg.setConnector(source, side)
// Sets a connector for an SVG element.
```

```js
dphelper.svg.removeConnection(container)
// Removes a connection from an SVG container.
```

```js
dphelper.svg.makeScrollable(svgContainer, scrollContainer, elm1, elm2, rect1, rect2)
// Makes an SVG container scrollable.
```

```js
dphelper.svg.makeDraggable(evt)
// Makes an SVG element draggable.
```

```js
dphelper.svg.toggle(evt, container, source1, source2)
// Toggles an SVG element.
```

```js
dphelper.svg.convert(options)
// Converts an SVG element.
```

### System

```js
dphelper.svg.multiSplit()
// Splits a string into multiple parts.
```

### Terminal

```js
dphelper.terminal()
// Initializes a terminal.
```

### Text

```js
dphelper.text.trim(s, c, b, e)
// Trims a string.
```

```js
dphelper.text.capitalize(txt)
// Capitalizes a string.
```

```js
dphelper.text.lower(txt)
// Converts a string to lowercase.
```

```js
dphelper.text.upper(txt)
// Converts a string to uppercase.
```

```js
dphelper.text.nl2br(str)
// Converts newlines to
 tags.
```

```js
dphelper.text.sanitize(str)
// Sanitizes a string.
```

```js
dphelper.text.camelCase(str)
// Converts camelCase to space or underscore.
```

```js
dphelper.text.fitContainer(el)
// Fits a text element to its container.
```

### Timer

```js
dphelper.timer.sleep(ms)
// Pauses execution for a specified time.
```

```js
dphelper.timer.percentage(start, end)
// Calculates the percentage of time elapsed.
```

### Tools

```js
dphelper.dev.getip()
// Gets the IP address.
```

```js
dphelper.dev.byteSize(bytes)
// Converts bytes to a human-readable format.
```

```js
dphelper.dev.zIndex()
// Gets the z-index.
```

```js
dphelper.dev.zeroToFalse(value)
// Converts zero to false.
```

### Translators

```js
dphelper.translator.convertMatrixToScale(values)
// Converts a matrix to a scale.
```

### Trigger

```js
dphelper.trigger.click(elem)
// Triggers a click event.
```

```js
dphelper.trigger.change(elem)
// Triggers a change event.
```

```js
dphelper.trigger.input(elem)
// Triggers an input event.
```

### Type

```js
dphelper.type.of(p)
// Gets the type of a value.
```

```js
dphelper.type.instOfObj(p)
// Checks if a value is an instance of an object.
```

```js
dphelper.type.isNull(p)
// Checks if a value is null.
```

```js
dphelper.type.isBool(val)
// Checks if a value is a boolean.
```

### UI

```js
dphelper.ui: null`
// User interface operations.
```

### Window

```js
dphelper.window.enhancement()
// Enhances the window.
```

```js
dphelper.window.animationframe()
// Gets the animation frame.
```

```js
dphelper.window.center(params: { url; title; name; w; h })
// Centers a window.
```

```js
dphelper.window.onBeforeUnLoad(e)
// Handles the before unload event.
```

```js
dphelper.window.purge(d?, time?)
// Purges the document.
```

```js
dphelper.window.stopZoomWheel(e)
// Stops the zoom wheel.
```

```js
dphelper.window.setZoom(element?, zoom?)
// Sets the zoom level.
```

```js
dphelper.window.getZoom(element?)
// Gets the zoom level.
```

## License

This project is licensed under the MIT License.
