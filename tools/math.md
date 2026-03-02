# math

Advanced mathematical functions and utilities.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `rnd` | Generate a random number | `dphelper.math.rnd()` |
| `tmr` | Get current epoch time in seconds | `dphelper.math.tmr()` |
| `isOdd` | Check if a number is odd | `dphelper.math.isOdd(a)` |
| `percent` | Calculate percentage (n/tot * 100) | `dphelper.math.percent(n, tot)` |
| `isPrime` | Check if a number is prime | `dphelper.math.isPrime(n)` |

## Description

Mathematical utility functions:
- **Random** - Generate random numbers based on time
- **Time** - Get epoch timestamp in seconds
- **Number Tests** - Check odd/even, prime numbers
- **Percentage** - Calculate percentage of value relative to total

## Usage Examples

### Random Number Generation

```javascript
// Generate random number
const randomNum = dphelper.math.rnd();
// Returns a random number (typically 6 digits)

// Use in unique ID generation
function generateId() {
  return `id_${dphelper.math.rnd()}_${Date.now()}`;
}
```

### Time Measurement

```javascript
// Get current epoch in seconds
const timestamp = dphelper.math.tmr();
// Returns current Unix timestamp (seconds)

// Measure function execution time
function myFunction() {
  // ... some operations
}

const start = dphelper.math.tmr();
myFunction();
const end = dphelper.math.tmr();
console.log(`Execution took ${end - start} seconds`);
```

### Odd/Even Detection

```javascript
// Check if number is odd
console.log(dphelper.math.isOdd(5));   // true
console.log(dphelper.math.isOdd(4));   // false
console.log(dphelper.math.isOdd(0));   // false
console.log(dphelper.math.isOdd(-3));  // true

// Use in filtering
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter(n => dphelper.math.isOdd(n));
// [1, 3, 5, 7, 9]
```

### Percentage Calculation

```javascript
// Basic percentage
const percent = dphelper.math.percent(25, 100);
// Output: 25

// Calculate progress
const progress = dphelper.math.percent(45, 100);
console.log(`${progress}% complete`);
// 45% complete

// Sales commission
function calculateCommission(sales, target) {
  return dphelper.math.percent(sales, target);
}

console.log(calculateCommission(50000, 100000)); // 50%

// Vote percentage
const votes = { yes: 450, no: 50, abstained: 25 };
const total = votes.yes + votes.no + votes.abstained;

console.log(`Yes: ${dphelper.math.percent(votes.yes, total)}%`);
console.log(`No: ${dphelper.math.percent(votes.no, total)}%`);
// Yes: 81.8%
// No: 9.1%
```

### Prime Number Check

```javascript
// Check if number is prime
console.log(dphelper.math.isPrime(7));   // true
console.log(dphelper.math.isPrime(4));   // false
console.log(dphelper.math.isPrime(1));   // false
console.log(dphelper.math.isPrime(2));   // true
console.log(dphelper.math.isPrime(17));  // true
console.log(dphelper.math.isPrime(18));  // false

// Find prime numbers in range
function findPrimes(min, max) {
  const primes = [];
  for (let i = min; i <= max; i++) {
    if (dphelper.math.isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(findPrimes(1, 20));
// [2, 3, 5, 7, 11, 13, 17, 19]

// Use in validation
function isValidPrimeInput(n) {
  return Number.isInteger(n) && n > 0 && dphelper.math.isPrime(n);
}
```

### Combined Math Operations

```javascript
class MathUtils {
  // Calculate discount percentage
  static discountPercentage(original, sale) {
    const percent = dphelper.math.percent(sale, original);
    return Math.round(100 - percent);
  }

  // Check if number is odd prime
  static isOddPrime(n) {
    return dphelper.math.isOdd(n) && dphelper.math.isPrime(n);
  }

  // Generate random odd number
  static randomOdd(min = 1, max = 100) {
    let num;
    do {
      num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (!dphelper.math.isOdd(num));
    return num;
  }
}

console.log(MathUtils.discountPercentage(100, 75));  // 25
console.log(MathUtils.isOddPrime(7));               // true
console.log(MathUtils.isOddPrime(2));               // false
console.log(MathUtils.randomOdd(1, 50));            // Random odd number
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** both (browser + Node.js)

---

*Automatically generated document*
