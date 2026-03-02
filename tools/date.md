# date

Comprehensive date and time manipulation utilities with support for multiple formats, locales, and timezone handling.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `days` | Returns array of day names in specified language | `dphelper.date.days('en')` |
| `months` | Returns array of month names in specified language | `dphelper.date.months('en')` |
| `year` | Returns current year | `dphelper.date.year()` |
| `toIso` | Converts date to ISO format (localized) | `dphelper.date.toIso(value, 'en')` |
| `toMMDDYYYY` | Converts to MMDDYYYY format | `dphelper.date.toMMDDYYYY(value)` |
| `toYYYYMMDD` | Converts to YYYYMMDD format (database-friendly) | `dphelper.date.toYYYYMMDD(value)` |
| `toHuman` | Converts to human-readable format | `dphelper.date.toHuman(value)` |
| `convert` | Converts date between formats using month array | `dphelper.date.convert(value, format)` |
| `iso2Epoch` | Converts ISO date to epoch milliseconds | `dphelper.date.iso2Epoch(value)` |
| `localIsoTime` | Gets local ISO time for a date | `dphelper.date.localIsoTime(value)` |
| `utc` | Gets current UTC time string | `dphelper.date.utc()` |
| `parse` | Parses date with custom separator | `dphelper.date.parse(value, '/')` |
| `addDays` | Adds days to a date | `dphelper.date.addDays(date, 5)` |
| `dateTimeToString` | Converts date to formatted string | `dphelper.date.dateTimeToString(date)` |
| `isoToHuman` | Converts ISO to human format with time | `dphelper.date.isoToHuman(value, '@')` |
| `fullDate` | Returns DD-MM-YYYY HH:MM:SS format | `dphelper.date.fullDate()` |
| `epoch` | Returns current epoch time in milliseconds | `dphelper.date.epoch()` |
| `diffInDays` | Calculates difference between two dates in days | `dphelper.date.diffInDays(d1, d2)` |
| `diffInWeeks` | Calculates difference between two dates in weeks | `dphelper.date.diffInWeeks(d1, d2)` |
| `diffInMonths` | Calculates difference between two dates in months | `dphelper.date.diffInMonths(d1, d2)` |
| `diffInYears` | Calculates difference between two dates in years | `dphelper.date.diffInYears(d1, d2)` |
| `dateToYMD` | Converts date to YYYY-MM-DD format | `dphelper.date.dateToYMD(date)` |
| `collection` | Returns various date format representations | `dphelper.date.collection({ type: 'toISOString' })` |
| `timeZones` | Returns array of all supported timezones | `dphelper.date.timeZones()` |

## Description

Complete date manipulation library providing:
- **Format Conversion** - ISO, MMDDYYYY, YYYYMMDD, human-readable
- **Localization** - Multi-language day/month names
- **Timezone Support** - UTC, local time, timezone list
- **Date Arithmetic** - Add days, calculate differences
- **Epoch/Unix Time** - Convert to/from milliseconds
- **Date Collections** - Multiple format representations

## Usage Examples

### Getting Current Date Information

```javascript
// Get current year
console.log(dphelper.date.year()); // 2026

// Get current UTC time
console.log(dphelper.date.utc()); // "Mon, 02 Mar 2026 09:44:55 GMT"

// Get full date and time
console.log(dphelper.date.fullDate()); // "02-03-2026 09:44:55"

// Get current epoch time
console.log(dphelper.date.epoch()); // 1709375095000

// Get supported timezones
console.log(dphelper.date.timeZones()); // ["Africa/Abidjan", "America/Adak", ...]
```

### Format Conversions

```javascript
const date = new Date('2026-03-15T10:30:00Z');

// To ISO format (localized)
console.log(dphelper.date.toIso(date, 'en'));  // "March 15, 2026"
console.log(dphelper.date.toIso(date, 'it'));  // "15 marzo 2026"

// To MMDDYYYY
console.log(dphelper.date.toMMDDYYYY(date)); // "03152026"

// To YYYYMMDD (database format)
console.log(dphelper.date.toYYYYMMDD(date)); // "20260315"

// To human readable
console.log(dphelper.date.toHuman(date)); // "Sunday, March 15, 2026"

// To YYYY-MM-DD
console.log(dphelper.date.dateToYMD(date)); // "2026-03-15"

// ISO to human with custom separator
console.log(dphelper.date.isoToHuman('2026-03-15T14:30:00', '@'));
// "15 March 2026 @ 14:30"
```

### Date Parsing

```javascript
// Parse date with custom separator
console.log(dphelper.date.parse('03152026', '/')); // "03/15/2026"
console.log(dphelper.date.parse('15.03.2026', '.')); // "15.03.2026"

// Convert between formats using month array
const months = dphelper.date.months('en');
console.log(dphelper.date.convert('03152026', months)); // "15 March 2026"
```

### Date Arithmetic

```javascript
const today = new Date('2026-03-15');

// Add days to a date
const nextWeek = dphelper.date.addDays(today, 7);
console.log(nextWeek); // Date object for 2026-03-22

const lastMonth = dphelper.date.addDays(today, -30);
console.log(lastMonth); // Date object for 2026-02-13
```

### Date Differences

```javascript
const date1 = new Date('2026-01-01');
const date2 = new Date('2026-03-15');

// Calculate differences
console.log(dphelper.date.diffInDays(date1, date2));   // 73 days
console.log(dphelper.date.diffInWeeks(date1, date2)); // 10 weeks
console.log(dphelper.date.diffInMonths(date1, date2)); // 2 months
console.log(dphelper.date.diffInYears(date1, date2));  // 0 years

// Calculate age
const birthDate = new Date('1990-05-20');
const now = new Date();
const age = dphelper.date.diffInYears(birthDate, now);
console.log(age); // 35 (approximately)
```

### Epoch/Unix Time Conversion

```javascript
const isoDate = '2026-03-15T10:30:00Z';

// ISO to epoch (milliseconds)
console.log(dphelper.date.iso2Epoch(isoDate)); // 1778979000000

// Current epoch
console.log(dphelper.date.epoch()); // 1709375095000

// Epoch back to date
const epoch = 1709375095000;
const date = new Date(epoch);
console.log(date.toISOString()); // "2026-03-02T09:44:55.000Z"
```

### Local vs UTC Time

```javascript
const date = new Date();

// Get local ISO time
console.log(dphelper.date.localIsoTime(date));
// "2026-03-02T02:44:55.123"

// Get UTC time
console.log(dphelper.date.utc());
// "Mon, 02 Mar 2026 09:44:55 GMT"
```

### Date Collection (Multiple Formats)

```javascript
const date = new Date('2026-03-15T14:30:00');

// Get various representations
console.log(dphelper.date.collection({ date, type: 'toDateString' }));
// "Sun Mar 15 2026"

console.log(dphelper.date.collection({ date, type: 'toISOString' }));
// "2026-03-15T14:30:00.000Z"

console.log(dphelper.date.collection({ date, type: 'toLocaleDateString' }));
// "3/15/2026"

console.log(dphelper.date.collection({ date, type: 'toLocaleString' }));
// "3/15/2026, 7:30:00 AM"

console.log(dphelper.date.collection({ date, type: 'toISOStringShort' }));
// "2026-03-15"
```

### Localization

```javascript
// Get day names in different languages
console.log(dphelper.date.days('en'));
// ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

console.log(dphelper.date.days('it'));
// ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"]

// Get month names in different languages
console.log(dphelper.date.months('en'));
// ["January", "February", "March", ...]

console.log(dphelper.date.months('it'));
// ["gennaio", "febbraio", "marzo", ...]
```

## Advanced Usage

### Date Range Calculator

```javascript
function getDateRange(startDate, endDate) {
  const days = dphelper.date.diffInDays(startDate, endDate);
  const weeks = dphelper.date.diffInWeeks(startDate, endDate);
  const months = dphelper.date.diffInMonths(startDate, endDate);

  return { days, weeks, months };
}

const start = new Date('2026-01-01');
const end = new Date('2026-12-31');
console.log(getDateRange(start, end));
// { days: 364, weeks: 52, months: 11 }
```

### Timestamp Logger

```javascript
function logWithTimestamp(message) {
  const timestamp = dphelper.date.fullDate();
  console.log(`[${timestamp}] ${message}`);
}

logWithTimestamp('Application started');
// [02-03-2026 09:44:55] Application started
```

### Database Date Handler

```javascript
// Save to database
const dbDate = dphelper.date.toYYYYMMDD(new Date());
console.log(dbDate); // "20260302"

// Read from database
const dbValue = "20260315";
const displayDate = dphelper.date.toHuman(new Date(dbValue));
console.log(displayDate); // "Sunday, March 15, 2026"
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** Works in both client and server environments

---

*Automatically generated document*
