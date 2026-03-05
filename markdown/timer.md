# timer

Management of timers, delays, and intervals.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `sleep` | Pause execution for milliseconds | `dphelper.timer.sleep(ms)` |
| `percentage` | Calculate time percentage between dates | `dphelper.timer.percentage(start, end)` |

## Description

Timer utilities:
- **Sleep** - Async pause/delay
- **Percentage** - Calculate elapsed time percentage

## Usage Examples

### Sleep/Delay

```javascript
// Async delay
await dphelper.timer.sleep(1000);
// Pauses for 1 second

// In async functions
async function delayedAction() {
  console.log('Start');
  await dphelper.timer.sleep(2000);
  console.log('After 2 seconds');
}

// Retry with delay
async function retryWithBackoff(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i < maxRetries - 1) {
        await dphelper.timer.sleep(1000 * Math.pow(2, i));
      }
    }
  }
}
```

### Time Percentage

```javascript
// Calculate progress percentage
const start = new Date('2024-01-01');
const end = new Date('2024-12-31');
const now = new Date('2024-06-15');

const progress = dphelper.timer.percentage(start, end);
// Returns percentage of year complete (approximately 50%)

// Countdown timer
const eventStart = new Date('2024-12-25');
const today = new Date();

const percentComplete = dphelper.timer.percentage(today, eventStart);
console.log(`${percentComplete}% until event`);
```

### Progress Tracking

```javascript
// Track operation progress
function trackProgress(startTime, duration) {
  const now = Date.now();
  const elapsed = now - startTime;
  return dphelper.timer.percentage(startTime, startTime + duration);
}

const operationDuration = 10000; // 10 seconds
const start = Date.now();

// In a loop
setInterval(() => {
  const progress = trackProgress(start, operationDuration);
  console.log(`${progress}% complete`);
  if (progress >= 100) clearInterval(this);
}, 500);
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** both (browser + Node.js)

---

*Automatically generated document*
