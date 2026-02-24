# json

Utilities for JSON data manipulation.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `is` | Verifies if a string is a valid JSON | `dphelper.json.is(str)` |
| `sanitize` | Attempts to fix and normalize malformed JSON strings | `dphelper.json.sanitize(str)` |
| `toCsv` | Converts an array of objects to CSV format | `dphelper.json.toCsv(data)` |
| `saveCsvAs` | Generates and downloads a CSV file from provided data | `dphelper.json.saveCsvAs(csv, 'file.csv')` |
| `counter` | Counts occurrences of keys/values in a structure | `dphelper.json.counter(data)` |

## Description

Tool for JSON manipulation: safe parsing, normalization of dirty data (via `sanitize`), CSV conversions, and validation.

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220

---

*Automatically generated document - dphelper v3.0.6*
