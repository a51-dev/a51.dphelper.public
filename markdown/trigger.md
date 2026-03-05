# trigger

Programmatic DOM event triggers.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `click` | Trigger click event | `dphelper.trigger.click(element)` |
| `change` | Trigger change event | `dphelper.trigger.change(element)` |
| `input` | Trigger input event | `dphelper.trigger.input(element)` |

## Description

Programmatic event triggering:
- **Click** - Simulate user clicks
- **Change** - Trigger value change events
- **Input** - Trigger input events
- **Testing** - Useful for automated testing

## Usage Examples

### Trigger Click

```javascript
// Click an element
const button = document.getElementById('submit');
dphelper.trigger.click(button);

// Click first element in collection
const links = document.querySelectorAll('.nav-link');
if (links.length > 0) {
  dphelper.trigger.click(links[0]);
}
```

### Trigger Change

```javascript
// Trigger change on input
const input = document.getElementById('username');
input.value = 'newvalue';
dphelper.trigger.change(input);

// Trigger change on select
const select = document.getElementById('country');
select.value = 'US';
dphelper.trigger.change(select);
```

### Trigger Input

```javascript
// Trigger input event
const input = document.getElementById('search');
input.value = 'search term';
dphelper.trigger.input(input);

// For autocomplete/typeahead
function simulateTyping(element, text) {
  element.value = '';
  text.split('').forEach((char, i) => {
    element.value += char;
    dphelper.trigger.input(element);
  });
}
```

### Form Automation

```javascript
// Fill and submit form programmatically
function fillForm(data) {
  Object.entries(data).forEach(([field, value]) => {
    const input = document.querySelector(`[name="${field}"]`);
    if (input) {
      input.value = value;
      dphelper.trigger.input(input);
      dphelper.trigger.change(input);
    }
  });

  // Submit
  const submitBtn = document.querySelector('button[type="submit"]');
  dphelper.trigger.click(submitBtn);
}
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.1
- **Creation Date:** 20210101
- **Last Modified:** 20241001
- **Environment:** client (browser)

---

*Automatically generated document*
