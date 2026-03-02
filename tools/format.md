# format

Utilities for data formatting like currency and phone numbers.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `currency` | Format a number as currency | `dphelper.format.currency(value, locale, currency)` |
| `phoneNumber` | Format a string as a phone number | `dphelper.format.phoneNumber(value, countryCode)` |

## Description

Data formatting utilities:
- **Currency** - Format numbers with locale-specific currency symbols using Intl API
- **Phone Numbers** - Format phone numbers by country code
- **Localization** - Supports multiple locales (en-US, de-DE, ja-JPY, etc.)

## Usage Examples

### Currency Formatting

```javascript
// Basic USD currency (default)
const price = dphelper.format.currency(1234.56);
// Output: "$1,234.56"

// Euro currency with German locale
const euro = dphelper.format.currency(1234.56, 'de-DE', 'EUR');
// Output: "1.234,56 €"

// Japanese Yen
const yen = dphelper.format.currency(5000, 'ja-JPY', 'JPY');
// Output: "¥5,000"

// British Pound
const pound = dphelper.format.currency(99.99, 'en-GB', 'GBP');
// Output: "£99.99"

// Swiss Franc
const franc = dphelper.format.currency(1500, 'de-CH', 'CHF');
// Output: "CHF 1'500.00"
```

### Phone Number Formatting

```javascript
// US phone number
const usPhone = dphelper.format.phoneNumber('5551234567', 'US');
// Output: "(555) 123-4567"

// Invalid format returns original
const invalid = dphelper.format.phoneNumber('123', 'US');
// Output: "123"
```

### E-commerce Price Display

```javascript
function formatProductPrice(product, locale = 'en-US', currency = 'USD') {
  return dphelper.format.currency(product.price, locale, currency);
}

const products = [
  { name: 'Laptop', price: 1299.99 },
  { name: 'Phone', price: 899.00 },
  { name: 'Tablet', price: 549.50 },
  { name: 'Headphones', price: 199.99 }
];

products.forEach(p => {
  console.log(`${p.name}: ${formatProductPrice(p)}`);
});
// Laptop: $1,299.99
// Phone: $899.00
// Tablet: $549.50
// Headphones: $199.99
```

### International Checkout

```javascript
const locales = {
  US: { locale: 'en-US', currency: 'USD', symbol: '$' },
  DE: { locale: 'de-DE', currency: 'EUR', symbol: '€' },
  JP: { locale: 'ja-JPY', currency: 'JPY', symbol: '¥' },
  GB: { locale: 'en-GB', currency: 'GBP', symbol: '£' },
  IT: { locale: 'it-IT', currency: 'EUR', symbol: '€' }
};

function formatByRegion(region, amount) {
  const config = locales[region];
  if (!config) return amount;
  return dphelper.format.currency(amount, config.locale, config.currency);
}

// Format total cart for different regions
const cart = [
  { item: 'Product A', price: 100 },
  { item: 'Product B', price: 50 },
  { item: 'Shipping', price: 10 }
];

const total = cart.reduce((sum, item) => sum + item.price, 0);

console.log('US Total:', formatByRegion('US', total));   // $160.00
console.log('DE Total:', formatByRegion('DE', total));   // 160,00 €
console.log('JP Total:', formatByRegion('JP', total));   // ¥160
console.log('GB Total:', formatByRegion('GB', total));   // £160.00
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.2
- **Creation Date:** 20210101
- **Last Modified:** 20260220
- **Environment:** both (browser + Node.js)

---

*Automatically generated document*
