# text

Utilities for text and string manipulation.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `trim` | Trim specific characters from string | `dphelper.text.trim(s, c, b, e)` |
| `capitalize` | Capitalize first letter of each word | `dphelper.text.capitalize(txt)` |
| `lower` | Convert string to lowercase | `dphelper.text.lower(txt)` |
| `upper` | Convert string to uppercase | `dphelper.text.upper(txt)` |
| `nl2br` | Convert newlines to `<br>` tags | `dphelper.text.nl2br(str)` |
| `sanitize` | Remove HTML tags from string | `dphelper.text.sanitize(str)` |
| `camelCase.toSpace` | Convert camelCase to space-separated | `dphelper.text.camelCase.toSpace(str)` |
| `camelCase.toUnderscore` | Convert camelCase to underscore | `dphelper.text.camelCase.toUnderscore(str)` |
| `fitContainer` | Auto-adjust font size to fit container | `dphelper.text.fitContainer(selector)` |
| `keywords` | Extract keywords from sentence | `dphelper.text.keywords(sentence)` |
| `replaceText` | Replace multiple patterns in text | `dphelper.text.replaceText(text, replacements)` |

## Description

Comprehensive text manipulation utilities:
- **Case Conversion** - lower, upper, capitalize
- **HTML Conversion** - nl2br, sanitize HTML tags
- **camelCase** - Convert to/from space or underscore
- **Text Extraction** - Extract keywords from text
- **Pattern Replacement** - Multi-replacement operations

## Usage Examples

### Capitalize

```javascript
// Capitalize each word
const text = 'hello world from dpHelper';
const capitalized = dphelper.text.capitalize(text);
// Output: "Hello World From DpHelper"

// Use for titles
const title = 'the quick brown fox';
console.log(dphelper.text.capitalize(title));
// "The Quick Brown Fox"
```

### Lower/Upper Case

```javascript
// Convert to lowercase
const upper = 'HELLO WORLD';
console.log(dphelper.text.lower(upper));
// "hello world"

// Convert to uppercase
const lower = 'hello world';
console.log(dphelper.text.upper(lower));
// "HELLO WORLD"

// Normalize user input
const username = '  JohnDoe  ';
console.log(dphelper.text.lower(username.trim()));
// "johndoe"
```

### Newlines to BR Tags

```javascript
// Convert newlines to HTML <br>
const text = 'Line 1\nLine 2\nLine 3';
const html = dphelper.text.nl2br(text);
// Output: "Line 1<br>Line 2<br>Line 3"

// Display user textarea content
function displayTextareaContent(textareaValue) {
  return dphelper.text.nl2br(textareaValue);
}

// Preserve whitespace
const poem = 'Roses are red\nViolets are blue\nSugar is sweet\nAnd so are you';
document.getElementById('poem').innerHTML = dphelper.text.nl2br(poem);
```

### Remove HTML Tags

```javascript
// Strip HTML tags
const html = '<p>Hello <b>World</b></p>';
const plain = dphelper.text.sanitize(html);
// Output: "Hello World"

// Get plain text from rich editor
function getPlainText(htmlContent) {
  return dphelper.text.sanitize(htmlContent);
}

// Extract text from HTML
const article = '<article><h1>Title</h1><p>Content here</p></article>';
console.log(dphelper.text.sanitize(article));
// "TitleContent here"
```

### camelCase Conversions

```javascript
// camelCase to space-separated
const camel = 'userNameFirst';
const spaced = dphelper.text.camelCase.toSpace(camel);
// Output: "User Name First"

// camelCase to underscore
const underscored = dphelper.text.camelCase.toUnderscore(camel);
// Output: "user_name_first"

// Use for readable labels
function createLabel(key) {
  return dphelper.text.camelCase.toSpace(key);
}

console.log(createLabel('firstName'));  // "First Name"
console.log(createLabel('lastName'));   // "Last Name"
console.log(createLabel('emailAddress')); // "Email Address"

// Database to UI
const dbColumn = 'createdAtDate';
console.log(dphelper.text.camelCase.toSpace(dbColumn));
// "Created At Date"
```

### Extract Keywords

```javascript
// Extract keywords from text (words > 3 chars, title case)
const sentence = 'The JavaScript Programming Language is Amazing';
const keywords = dphelper.text.keywords(sentence);
// Output: ["javascript", "programming", "language", "amazing"]

// Analyze text content
function analyzeContent(text) {
  return {
    keywords: dphelper.text.keywords(text),
    wordCount: text.split(/\s+/).length
  };
}

// Tag generation
const article = 'React is a JavaScript library for building user interfaces';
const tags = dphelper.text.keywords(article);
// ["react", "javascript", "library", "building", "user", "interfaces"]
```

### Replace Multiple Patterns

```javascript
// Replace multiple patterns at once
const text = 'Copyright (c) 2024 by Company (r)';
const result = dphelper.text.replaceText(text, {
  '(c)': '&copy;',
  '(r)': '&reg;',
  '(tm)': '&trade;'
});
// Output: "Copyright © 2024 by Company ®"

// Symbol replacement
const legal = 'Copyright (c) 2024 (r) All Rights Reserved (tm)';
console.log(dphelper.text.replaceText(legal, {
  '(c)': '©',
  '(r)': '®',
  '(tm)': '™'
}));
// "Copyright © 2024 ® All Rights Reserved ™"

// Emoticon replacement
const message = 'Hello :) Have a great day !';
const emoticons = dphelper.text.replaceText(message, {
  ':)': '😊',
  '(:': '😊',
  ':(': '😢',
  '):': '😢',
  '!': '❗'
});
// "Hello 😊 Have a great day ❗"
```

### Auto-fit Text to Container

```javascript
// Automatically adjust font size to fit container width
// HTML: <div id="title">Long Title Text Here</div>

dphelper.text.fitContainer('#title');

// The font-size will auto-adjust based on container width
// Responds to window resize events
```

### Complete Form Processor

```javascript
class TextProcessor {
  static formatTitle(text) {
    return dphelper.text.capitalize(dphelper.text.lower(text.trim()));
  }

  static toSlug(text) {
    const spaced = dphelper.text.camelCase.toUnderscore(text);
    return dphelper.text.lower(spaced).replace(/\s+/g, '-');
  }

  static extractSearchTerms(text) {
    return dphelper.text.keywords(text);
  }

  static prepareForDisplay(text) {
    return dphelper.text.nl2br(
      dphelper.text.sanitize(text)
    );
  }

  static replaceSymbols(text, symbols) {
    return dphelper.text.replaceText(text, symbols);
  }
}

// Usage
console.log(TextProcessor.formatTitle('HELLO WORLD'));
// "Hello world"

console.log(TextProcessor.toSlug('User Name First'));
// "user_name_first"

console.log(TextProcessor.extractSearchTerms('React and Vue are Frameworks'));
// ["react", "vue", "frameworks"]
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** both (browser + Node.js)

---

*Automatically generated document*
