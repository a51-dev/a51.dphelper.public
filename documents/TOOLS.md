# All Functions List

## Overview

This document provides a comprehensive list of all available functions in the `dphelper` library along with their descriptions.

## Functions

### Anchor

- `dphelper.anchor.toOnClick(el)`
  <br/> Converts an element's href attribute to an onclick event.

### Array

- `dphelper.array.find(array, key)`
  <br> Finds an element in an array by key.
- `dphelper.array.unique(array)`
  <br> Returns an array with unique elements.
- `dphelper.array.delete(array, key)`
  <br> Deletes an element from an array by key.
- `dphelper.array.merge(arrayA, arrayB)`
  <br> Merges two arrays.
- `dphelper.array.mergeByKey(arrayA, arrayB, key)`
  <br> Merges two arrays by a specific key.
- `dphelper.array.asc(array)`
  <br> Sorts an array in ascending order.
- `dphelper.array.desc(array)`
  <br> Sorts an array in descending order.
- `dphelper.array.duplicates(array)`
  <br> Returns an array of duplicate elements.
- `dphelper.array.even(array)`
  <br> Returns an array of even numbers.
- `dphelper.array.odd(array)`
  <br> Returns an array of odd numbers.
- `dphelper.array.toObj(array)`
  <br> Converts an array to an object.
- `dphelper.array.sumColumn(array, column)`
  <br> Sums the values of a specific column in an array.
- `dphelper.array.shuffle(array)`
  <br> Shuffles the elements of an array.
- `dphelper.array.generate(num)`
  <br> Generates an array with a specified number of elements.
- `dphelper.array.testArrayInt(array)`
  <br> Tests if the elements of an array are integers.
- `dphelper.array.rand32(number)`
  <br> Generates a random 32-bit number.
- `dphelper.array.findindex(array, key)`
  <br> Finds the index of an element in an array by key.
- `dphelper.array.pathToJson(array, separator?)`
  <br> Converts an array to a JSON object using a separator.
- `deepClone(src)`
  <br> Creates a deep clone of an object.
- `dphelper.array.match(arrayWords, arrayToCheck)`
  <br> Checks if two arrays match.
- `dphelper.array.shallow(array)`
  <br> Generate a shallow copy of an object.
- `dphelper.array.deeCopy(array)`
  <br> Generate a structured copy of an object.
- `dphelper.array.groupBy(array, key)`
  <br> Generate a structured copy of an object.

### Audio

- `dphelper.audio.play(url)`
  <br> Plays an audio file from a URL.

### Avoid

- `dphelper.avoid.cache(uri)`
  <br> Caches a URI.

### Browser

- `dphelper.browser.state(state, title, url)`
  <br> Changes the browser state.
- `dphelper.browser.forw(times)`
  <br> Moves forward in the browser history.
- `dphelper.browser.back(times)`
  <br> Moves backward in the browser history.
- `dphelper.browser.reload()`
  <br> Reloads the current page.
- `dphelper.browser.href(url)`
  <br> Navigates to a URL.
- `dphelper.browser.offLine(text?)`
  <br> Displays an offline message.
- `dphelper.browser.zoom()`
  <br> Gets the current zoom level.
- `dphelper.browser.status(code)`
  <br> Gets the status text for a status code.

### Check

- `dphelper.check.url(url)`
  <br> Checks if a URL is valid.
- `dphelper.check.version(v1, v2, opts)`
  <br> Compares two version strings.
- `dphelper.check.npmVer(npm)`
  <br> Gets the version of an npm package.

### Color

- `dphelper.color.hex(c)`
  <br> Converts a color to hex format.
- `dphelper.color.toHex(rgb)`
  <br> Converts RGB to hex format.
- `dphelper.color.toRGB(c)`
  <br> Converts a color to RGB format.
- `dphelper.color.oleColor(c)`
  <br> Converts a color to OLE format.
- `dphelper.color.gradient(colorStart, colorEnd, colorCount)`
  <br> Generates a gradient between two colors.

### Console

- `dphelper.console.info(name, message, fn)`
  <br> Logs an info message to the console.
- `dphelper.console.stop(options?[])`
  <br> Stops the console.
- `dphelper.console.toHtml(el)`
  <br> Converts console output to HTML.

### Cookie

- `dphelper.cookie.set(params: { name, value, time?, path?: "/", sameSite?: "Lax", secure?: "Secure" | "false" })`
  <br> Sets a cookie.
- `dphelper.cookie.get(name)`
  <br> Gets a cookie by name.
- `dphelper.cookie.delete(name)`
  <br> Deletes a cookie by name.
- `dphelper.cookie.removeAll()`
  <br> Clears all cookies.

### Coords

- `dphelper.coods.degreesToRadians(degrees)`
  <br> Converts degrees to radians.
- `dphelper.coods.latToMeters(points)`
  <br> Converts latitude to meters.
- `dphelper.coods.toVector(points)`
  <br> Converts points to a vector.
- `dphelper.coods.convertToDecDegrees(deg, minutes, sec, direction)`
  <br> Converts coordinates to decimal degrees.
- `dphelper.coods.distance(point1, point2)`
  <br> Calculates the distance between two points.
- `dphelper.coods.polarToCartesian(centerX, centerY, radius, angleInDegrees)`
  <br> Converts polar coordinates to Cartesian coordinates.
- `dphelper.coods.mapDegreesToPixels(degree, minDegree, maxDegree, minPixel, maxPixel, padding)`
  <br> Maps degrees to pixels.

### Date

- `dphelper.date.days(lang?)`
  <br> Returns the days of the week in a specified language.
- `dphelper.date.months(lang?)`
  <br> Returns the months of the year in a specified language.
- `dphelper.date.year()`
  <br> Returns the current year.
- `dphelper.date.toIso(value, int?)`
  <br> Converts a date to ISO format.
- `dphelper.date.toMMDDYYYY(value)`
  <br> Converts a date to MM/DD/YYYY format.
- `dphelper.date.toYYYYMMDD(value)`
  <br> Converts a date to YYYY/MM/DD format.
- `dphelper.date.toHuman(value)`
  <br> Converts a date to a human-readable format.
- `dphelper.date.convert(value, format[])`
  <br> Converts a date to a specified format.
- `dphelper.date.iso2Epoch(value)`
  <br> Converts an ISO date to epoch time.
- `dphelper.date.localIsoTime(value)`
  <br> Converts a date to local ISO time.
- `dphelper.date.utc()`
  <br> Returns the current UTC time.
- `dphelper.date.parse(value, separator?)`
  <br> Parses a date string.
- `dphelper.date.addDays(date, days)`
  <br> Adds days to a date.
- `dphelper.date.dateTimeToString(dateObject)`
  <br> Converts a date object to a string.
- `dphelper.date.isoToHuman(value, symbol?)`
  <br> Converts an ISO date to a human-readable format.
- `dphelper.date.fullDate()`
  <br> Returns the full date.
- `dphelper.date.epoch()`
  <br> Returns the current epoch time.
- `dphelper.date.diffInDays(d1, d2)`
  <br> Calculates the difference in days between two dates.
- `dphelper.date.diffInWeeks(d1, d2)`
  <br> Calculates the difference in weeks between two dates.
- `dphelper.date.diffInMonths(d1, d2)`
  <br> Calculates the difference in months between two dates.
- `dphelper.date.diffInYears(d1, d2)`
  <br> Calculates the difference in years between two dates.
- `dphelper.date.dateToYMD(date)`
  <br> Converts a date to YYYY-MM-DD format.
- `dphelper.date.collection(params: { date?; type; locale? })`
  <br> Returns a collection of dates.
- `dphelper.date.timeZones()`
  <br> Returns a list of time zones.

### Disable

- `dphelper.disable.select(el?)`
  <br> Disables text selection.
- `dphelper.disable.spellCheck(tmr?)`
  <br> Disables spell check.
- `dphelper.disable.rightClick(el?)`
  <br> Disables right-click.
- `dphelper.disable.copy(el?)`
  <br> Disables copy.
- `dphelper.disable.paste(el?)`
  <br> Disables paste.
- `dphelper.disable.cut(el?)`
  <br> Disables cut.
- `dphelper.disable.drag(el?)`
  <br> Disables drag.

### Dispatch

- `dphelper.dispatch.set(name, value?)`
  <br> Sets a dispatch event.
- `dphelper.dispatch.listen(name, cb?, flag?)`
  <br> Listens for a dispatch event.
- `dphelper.dispatch.remove(name)`
  <br> Removes a dispatch event.

### Element

- `dphelper.element.fitScale(el, scale?, fit?)`
  <br> Fits an element to a scale.
- `dphelper.element.scaleBasedOnWindow(elm, scale, fit)`
  <br> Scales an element based on the window size.

### Events

- `dphelper.events.list(el)`
  <br> Lists all events on an element.
- `dphelper.events.multi(element, eventNames, listenerListener)`
  <br> Adds multiple event listeners to an element.
- `dphelper.events.copy(el)`
  <br> Copies an element.
- `dphelper.events.onDrag(elem)`
  <br> Adds a drag event to an element.
- `dphelper.events.keys(e): { key; ctrl; alt; shift }`
  <br> Gets the key, ctrl, alt, and shift status from a keyboard event.

### Form

- `dphelper.form.serialize(form): { [key] }`
  <br> Serializes a form to an object.
- `dphelper.form.confirmType(type, value)`
  <br> Confirms the type of a value.
- `dphelper.form.required(value)`
  <br> Checks if a value is required.
- `dphelper.form.minLength(value, num?)`
  <br> Checks if a value meets the minimum length.
- `dphelper.form.maxLength(value, num?)`
  <br> Checks if a value exceeds the maximum length.
- `dphelper.form.maxPhoneNumber(value, num?)`
  <br> Checks if a phone number exceeds the maximum length.
- `dphelper.form.isNumeric(value)`
  <br> Checks if a value is numeric.
- `dphelper.form.isEmail(value)`
  <br> Checks if a value is an email.
- `dphelper.form.pattern(e)`
  <br> Validates a pattern.
- `dphelper.form.noSpecialChars(e)`
  <br> Disallows special characters.
- `dphelper.form.table(size, id, elem)`
  <br> Creates a table.
- `dphelper.form.sanitize(str)`
  <br> Sanitizes a string.

### Format

- `dphelper.format.currency(value, locale?, currency?)`
  <br> Formats a value as currency.
- `dphelper.format.phoneNumber(value, countryCode?)`
  <br> Formats a phone number.

### Imports

- `dphelper.imports.file(elem, file)`
  <br> Imports a file.

### Json

- `dphelper.json.counter(json, key?, val?)`
  <br> Counts occurrences in a JSON object.
- `dphelper.json.toCsv(jsonInput)`
  <br> Converts JSON to CSV.
- `dphelper.json.saveCsvAs(csvData, fileName)`
  <br> Saves CSV data as a file.
- `dphelper.json.is(str)`
  <br> Checks if a string is valid JSON.
- `dphelper.json.parse(file)`
  <br> Parses a JSON file.
- `dphelper.json.sanitize(str)`
  <br> Sanitizes a JSON string.
- `dphelper.json.sanitizeJsonValue(str)`
  <br> Sanitizes a JSON value.

### Load

- `dphelper.load.all(context, cacheName?)`
  <br> Loads all modules in a context.
- `dphelper.load.file(filePath)`
  <br> Loads a file.
- `dphelper.load.fileToElement(elementSelector, filePath)`
  <br> Loads a file into an element.
- `dphelper.load.json(filePath)`
  <br> Loads a JSON file.
- `dphelper.load.remote(path, method?, headers?)`
  <br> Loads data from a remote URL.
- `dphelper.load.script(scripts[], elementSelector?)`
  <br> Loads scripts.
- `dphelper.load.toJson(context, cacheName?)`
  <br> Converts a context to JSON.

### Logging

- `dphelper.logging.list: { type; message }`
  <br> List of log messages.
- `dphelper.logging.reg(txt)`
  <br> Logs a regular message.
- `dphelper.logging.debug(txt)`
  <br> Logs a debug message.
- `dphelper.logging.error(txt)`
  <br> Logs an error message.

### Math

- `dphelper.math.rnd()`
  <br> Generates a random number.
- `dphelper.math.tmr()`
  <br> Returns the current time in milliseconds.
- `dphelper.math.add(a, b)`
  <br> Adds two numbers.
- `dphelper.math.sub(a, b)`
  <br> Subtracts two numbers.
- `dphelper.math.multi(a, b)`
  <br> Multiplies two numbers.
- `dphelper.math.div(a, b)`
  <br> Divides two numbers.
- `dphelper.math.rem(a, b)`
  <br> Returns the remainder of two numbers.
- `dphelper.math.exp(a, b)`
  <br> Returns the exponent of two numbers.
- `dphelper.math.isOdd(a)`
  <br> Checks if a number is odd.
- `dphelper.math.float2int(a)`
  <br> Converts a float to an integer.
- `dphelper.math.percent(n, tot)`
  <br> Calculates the percentage.
- `dphelper.math.isPrime(n)`
  <br> Checks if a number is prime.

### Memory

- `dphelper.memory.lock(obj)`
  <br> Locks an object in memory.
- `dphelper.memory.unlock(obj)`
  <br> Unlocks an object in memory.

### Object

- `dphelper.obj.toArray(object)`
  <br> Converts an object to an array.
- `dphelper.obj.replaceNullObjects(data)`
  <br> Replaces null objects in a record.
- `dphelper.obj.serialize(value)`
  <br> Serializes a value.
- `dphelper.obj.deSerialize(valueNew)`
  <br> Deserializes a value.
- `dphelper.obj.sort(o)`
  <br> Sorts an object.
- `dphelper.obj.toXML(obj)`
  <br> Converts an object to XML.
- `dphelper.obj.find(object, key, value)`
  <br> Finds an element in an object by key and value.
- `dphelper.obj.instance(obj)`
  <br> Returns the instance of an object.
- `dphelper.obj.updateByKey(obj, key, newValue)`
  <br> Updates an object by key.
- `dphelper.obj.findindex(object, key)`
  <br> Finds the index of an element in an object by key.
- `dphelper.obj.parse(val)`
  <br> Parses a value.
- `dphelper.obj.isObject(val)`
  <br> Checks if a value is an object.
- `dphelper.obj.diff(obj1, obj2)`
  <br> Finds the difference between two objects.
- `dphelper.obj.path(prop, object[], separator?)`
  <br> Converts a property path to a string.
- `dphelper.obj.shallow(object)`
  <br> Generate a shallow copy of an object.
- `dphelper.obj.deeCopy(object)`
  <br> Generate a structured copy of an object.

### Path

- `dphelper.path.rail()`
  <br> Returns the rail path.
- `dphelper.path.hash()`
  <br> Returns the hash path.
- `dphelper.path.query(url)`
  <br> Parses the query string of a URL.

### Promise

- `dphelper.promise.check(p)`
  <br> Checks if a value is a promise.
- `dphelper.promise.resolve(data)`
  <br> Resolves a promise with data.

### Sanitize

- `dphelper.sanitize.html(s)`
  <br> Sanitizes HTML.

### Screen

- `dphelper.screen.fullScreen(el)`
  <br> Enables full screen mode for an element.
- `dphelper.screen.toggle(el)`
  <br> Toggles full screen mode for an element.
- `dphelper.screen.info(): { width; height; availWidth; availHeight; colorDepth; pixelDepth }`
  <br> Gets screen information.

### Scrollbar

- `dphelper.scrollbar.custom(el, options)`
  <br> Customizes a scrollbar.
- `dphelper.scrollbar.indicator(props)`
  <br> Adds a scrollbar indicator.
- `dphelper.scrollbar.position: { get(el); set(el) }`
  <br> Gets and sets scrollbar position.
- `dphelper.scrollbar.smooth(target, speed, smooth)`
  <br> Smooth scrolls to a target.
- `dphelper.scrollbar.scrollTo(container, element, gap?)`
  <br> Scrolls to an element within a container.

### Security

- `dphelper.security.uuid: { byVal(string); v4; v5 }`
  <br> Generates UUIDs.
- `dphelper.security.hashPass(u, p, t?)`
  <br> Hashes a password.
- `dphelper.security.crypt(u, p, mode?)`
  <br> Encrypts data.
- `dphelper.security.deCrypt(u, p, mode?)`
  <br> Decrypts data.
- `dphelper.security.AES_KeyGen(passKey?)`
  <br> Generates an AES key.
- `dphelper.security.SHA256_Hex(passKey)`
  <br> Generates a SHA256 hash.
- `dphelper.security.ulid()`
  <br> Generates ULID (Universally Unique Lexicographically Sortable Identifier).

### Shortcut

- `dphelper.shortcut.keys(e, trigger)`
  <br> Adds a keyboard shortcut.

### Socket

- `dphelper.socket.info()`
  <br> Gets socket information.
- `dphelper.socket.start(element, server)`
  <br> Starts a socket connection.
- `dphelper.socket.conn(id, server)`
  <br> Connects to a socket server.
- `dphelper.socket.connect(server)`
  <br> Connects to a server.
- `dphelper.socket.open(id, server)`
  <br> Opens a socket connection.
- `dphelper.socket.send(mex, type?)`
  <br> Sends a message through a socket.
- `dphelper.socket.ping()`
  <br> Sends a ping through a socket.
- `dphelper.socket.receive(el?)`
  <br> Receives a message through a socket.
- `dphelper.socket.keepAlive()`
  <br> Keeps a socket connection alive.
- `dphelper.socket.check()`
  <br> Checks the status of a socket connection.
- `dphelper.socket.list()`
  <br> Lists all socket connections.

### SVG

- `dphelper.svg.init(container, source1, source2, cb?)`
  <br> Initializes an SVG container.
- `dphelper.svg.check()`
  <br> Checks if SVG is supported.
- `dphelper.svg.update(rect1, rect2, cxn)`
  <br> Updates an SVG element.
- `dphelper.svg.getCurve(p1, p2, dx)`
  <br> Gets a curve path between two points.
- `dphelper.svg.getIntersection(dx, dy, cx, cy, w, h)`
  <br> Gets the intersection point of a curve.
- `dphelper.svg.setConnector(source, side)`
  <br> Sets a connector for an SVG element.
- `dphelper.svg.removeConnection(container)`
  <br> Removes a connection from an SVG container.
- `dphelper.svg.makeScrollable(svgContainer, scrollContainer, elm1, elm2, rect1, rect2)`
  <br> Makes an SVG container scrollable.
- `dphelper.svg.makeDraggable(evt)`
  <br> Makes an SVG element draggable.
- `dphelper.svg.toggle(evt, container, source1, source2)`
  <br> Toggles an SVG element.
- `dphelper.svg.convert(options)`
  <br> Converts an SVG element.

### System

- `dphelper.svg.multiSplit()`
  <br> Splits a string into multiple parts.

### Terminal

- `dphelper.terminal()`
  <br> Initializes a terminal.

### Text

- `dphelper.text.trim(s, c, b, e)`
  <br> Trims a string.
- `dphelper.text.capitalize(txt)`
  <br> Capitalizes a string.
- `dphelper.text.lower(txt)`
  <br> Converts a string to lowercase.
- `dphelper.text.upper(txt)`
  <br> Converts a string to uppercase.
- `dphelper.text.nl2br(str)`
  <br> Converts newlines to <br> tags.
- `dphelper.text.sanitize(str)`
  <br> Sanitizes a string.
- `dphelper.text.camelCase(str)`
  <br> Converts camelCase to space or underscore.
- `dphelper.text.fitContainer(el)`
  <br> Fits a text element to its container.

### Timer

- `dphelper.timer.sleep(ms)`
  <br> Pauses execution for a specified time.
- `dphelper.timer.percentage(start, end)`
  <br> Calculates the percentage of time elapsed.

### Tools

- `dphelper.dev.getip()`
  <br> Gets the IP address.
- `dphelper.dev.byteSize(bytes)`
  <br> Converts bytes to a human-readable format.
- `dphelper.dev.zIndex()`
  <br> Gets the z-index.
- `dphelper.dev.zeroToFalse(value)`
  <br> Converts zero to false.

### Translators

- `dphelper.translator.convertMatrixToScale(values)`
  <br> Converts a matrix to a scale.

### Trigger

- `dphelper.trigger.click(elem)`
  <br> Triggers a click event.
- `dphelper.trigger.change(elem)`
  <br> Triggers a change event.
- `dphelper.trigger.input(elem)`
  <br> Triggers an input event.

### Type

- `dphelper.type.of(p)`
  <br> Gets the type of a value.
- `dphelper.type.instOfObj(p)`
  <br> Checks if a value is an instance of an object.
- `dphelper.type.isNull(p)`
  <br> Checks if a value is null.
- `dphelper.type.isBool(val)`
  <br> Checks if a value is a boolean.

### UI

- `dphelper.ui: null`
  <br> User interface operations.

### Window

- `dphelper.window.enhancement()`
  <br> Enhances the window.
- `dphelper.window.animationframe()`
  <br> Gets the animation frame.
- `dphelper.window.center(params: { url; title; name; w; h })`
  <br> Centers a window.
- `dphelper.window.onBeforeUnLoad(e)`
  <br> Handles the before unload event.
- `dphelper.window.purge(d?, time?)`
  <br> Purges the document.
- `dphelper.window.stopZoomWheel(e)`
  <br> Stops the zoom wheel.
- `dphelper.window.setZoom(element?, zoom?)`
  <br> Sets the zoom level.
- `dphelper.window.getZoom(element?)`
  <br> Gets the zoom level.

## License

This project is licensed under the MIT License.
