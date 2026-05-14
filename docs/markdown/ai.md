# ai

AI and LLM utilities for text processing, token estimation, data formatting, and integration tools.

## Functions

| Function | Description | Example |
|----------|-------------|---------|
| `tokenCount` | Estimates token count for LLM input | `dphelper.ai.tokenCount({ users: [1,2,3] })` |
| `smartSanitize` | Removes PII (emails, phones, etc.) from text | `dphelper.ai.smartSanitize(text)` |
| `toon` | Converts JSON to TOON format | `dphelper.ai.toon({ users: [{id: 1, name: 'Ada'}] })` |
| `toonToJson` | Converts TOON format back to JSON | `dphelper.ai.toonToJson('users[1]{id,name}:\n  1,Ada')` |
| `chunker` | Splits long text into chunks for RAG | `dphelper.ai.chunker(text, { size: 1000, overlap: 200 })` |
| `similarity` | Calculates cosine similarity between vectors | `dphelper.ai.similarity(vecA, vecB)` |
| `extractReasoning` | Extracts AI reasoning tags from response | `dphelper.ai.extractReasoning(aiResponse)` |
| `prompt` | Template engine for prompt variable injection | `dphelper.ai.prompt('Hello {{name}}', { name: 'Ada' })` |
| `schema` | Generates TOON-style schema definition | `dphelper.ai.schema({ id: 1, name: 'Ada' })` |
| `snapshot` | Captures app state snapshot for AI debugging | `dphelper.ai.snapshot()` |

## Description

Comprehensive AI/LLM integration utilities:
- **Token Estimation** - Estimate token counts for API limits
- **Data Format Conversion** - TOON (Token-Oriented Object Notation) format
- **Text Processing** - PII removal, text chunking for RAG
- **Vector Operations** - Cosine similarity for embeddings
- **Prompt Engineering** - Template variables, schema generation
- **AI Debugging** - Extract reasoning, capture app snapshots

## Usage Examples

### Token Count Estimation

```javascript
// Estimate tokens for a string
const text = "Hello, how are you today?";
console.log(dphelper.ai.tokenCount(text)); // ~8 tokens

// Estimate tokens for an object (uses TOON format)
const data = {
  users: [
    { id: 1, name: "John", email: "john@example.com" },
    { id: 2, name: "Jane", email: "jane@example.com" }
  ]
};
console.log(dphelper.ai.tokenCount(data)); // ~45 tokens

// Use for API rate limiting
const prompt = "Analyze the following data: " + JSON.stringify(data);
const tokens = dphelper.ai.tokenCount(prompt);
if (tokens > 4000) {
  console.log("Warning: Approaching token limit");
}
```

### PII Sanitization

```javascript
// Remove personal information from text
const text = `
  My name is John Smith and my email is john.smith@example.com.
  You can call me at (555) 123-4567.
  My credit card is 1234-5678-9012-3456.
  SSN: 123-45-6789
`;

const sanitized = dphelper.ai.smartSanitize(text);
console.log(sanitized);
// My name is John Smith and my email is [EMAIL].
// You can call me at [PHONE].
// My credit card is [CREDIT_CARD].
// SSN: [SSN]

// Use before sending data to external AI APIs
async function sendToAI(data) {
  const safeData = dphelper.ai.smartSanitize(JSON.stringify(data));
  return await fetch('/api/ai/analyze', {
    method: 'POST',
    body: JSON.stringify({ text: safeData })
  });
}
```

### TOON Format Conversion

```javascript
// Convert JSON to TOON (compact, token-efficient format)
const data = {
  users: [
    { id: 1, name: "Ada", age: 30 },
    { id: 2, name: "Bob", age: 25 }
  ]
};

const toon = dphelper.ai.toon(data);
console.log(toon);
/*
users[2]{id,name,age}:
  1,Ada,30
  2,Bob,25
*/

// Convert back from TOON to JSON
const json = dphelper.ai.toonToJson(toon);
console.log(json); // Original data restored

// Simple array
const arr = [1, 2, 3, 4, 5];
console.log(dphelper.ai.toon(arr));
// [5]: 1, 2, 3, 4, 5
```

### Text Chunking for RAG

```javascript
const longText = sit amet...`. `Lorem ipsum dolorrepeat(100);

// Split into chunks embedding for vector
const chunks = dphelper.ai.chunker(longText, { size: 1000, overlap: 200 });
console.log(chunks.length); // Number of chunks
console.log(chunks[0].length); // ~1000 characters

// Process each chunk for embedding
async function embedText(text) {
  const chunks = dphelper.ai.chunker(text, { size: 500, overlap: 50 });
  const embeddings = [];

  for (const chunk of chunks) {
    const embedding = await getEmbedding(chunk);
    embeddings.push({ chunk, embedding });
  }

  return embeddings;
}
```

### Cosine Similarity

```javascript
// Calculate similarity between two embedding vectors
const vectorA = [1.0, 0.5, 0.3, 0.8];
const vectorB = [0.9, 0.6, 0.2, 0.7];

const similarity = dphelper.ai.similarity(vectorA, vectorB);
console.log(similarity); // ~0.98 (very similar)

// Find most similar document
const query = [1.0, 0.5, 0.3];
const documents = [
  [0.9, 0.4, 0.2],  // Similar
  [0.1, 0.1, 0.1],  // Different
  [0.8, 0.6, 0.4]   // Similar
];

let mostSimilar = 0;
let bestDoc = 0;
documents.forEach((doc, i) => {
  const sim = dphelper.ai.similarity(query, doc);
  if (sim > mostSimilar) {
    mostSimilar = sim;
    bestDoc = i;
  }
});
console.log(`Most similar: document ${bestDoc} (${mostSimilar})`);
```

### Extract AI Reasoning

```javascript
// Extract reasoning from AI response (e.g., Claude, OpenAI o1)
const aiResponse = `
<think>
The user is asking about the weather. Let me think about what data I have available.
I can provide current conditions based on the user's location.
</think>
The current weather in your area is sunny with a temperature of 72°F.
`;

const extracted = dphelper.ai.extractReasoning(aiResponse);
console.log(extracted.reasoning);
// "The user is asking about the weather. Let me think about what data I have available..."

console.log(extracted.content);
// "The current weather in your area is sunny with a temperature of 72°F."
```

### Prompt Template Engine

```javascript
// Simple variable substitution
const template = "Hello {{name}}, welcome to {{place}}!";
const result = dphelper.ai.prompt(template, { name: "Ada", place: "our app" });
console.log(result); // "Hello Ada, welcome to our app!"

// With object variables (converts to TOON)
const template2 = `Analyze this user data:
{{user}}`;

const userData = {
  id: 123,
  name: "John",
  preferences: { theme: "dark", lang: "en" }
};
console.log(dphelper.ai.prompt(template2, { user: userData }));
/*
Analyze this user data:
id: 123
name: John
preferences:
  theme: dark
  lang: en
*/

// Default values for missing variables
const t3 = "Welcome, {{name}}! Your role is {{role:guest}}.";
console.log(dphelper.ai.prompt(t3, { name: "Alice" }));
// "Welcome, Alice! Your role is guest."
```

### Schema Generation

```javascript
// Generate TOON-style schema from data
const data = {
  id: 1,
  name: "John",
  email: "john@example.com",
  age: 30,
  active: true
};

const schema = dphelper.ai.schema(data);
console.log(schema);
/*
id: number
name: string
email: string
age: number
active: boolean
*/

// Array schema
const users = [
  { id: 1, name: "Ada" },
  { id: 2, name: "Bob" }
];
console.log(dphelper.ai.schema(users));
// users: Array<{id: number, name: string}>
```

### App State Snapshot

```javascript
// Capture current app state for AI debugging
const snapshot = dphelper.ai.snapshot();
console.log(snapshot);

/*
context:
  env: browser
  time: 2026-03-02T09:44:55.000Z
  url: https://app.example.com/dashboard
  title: My Dashboard
state: ...
logs: ...
system:
  lang: en-US
  screen: 1920x1080
  zoom: 100
*/

// Useful for AI-assisted debugging
async function askAIForHelp(error) {
  const snapshot = dphelper.ai.snapshot();
  const prompt = `I'm seeing this error: ${error}\n\nCurrent state:\n${snapshot}`;

  return await fetch('/api/ai/debug', {
    method: 'POST',
    body: JSON.stringify({ prompt, snapshot })
  });
}
```

## Advanced Usage

### Complete RAG Pipeline

```javascript
class RAGPipeline {
  constructor(chunkSize = 500, overlap = 50) {
    this.chunkSize = chunkSize;
    this.overlap = overlap;
  }

  async indexDocument(text, metadata = {}) {
    // Chunk the text
    const chunks = dphelper.ai.chunker(text, {
      size: this.chunkSize,
      overlap: this.overlap
    });

    // Generate embeddings for each chunk
    const documents = [];
    for (let i = 0; i < chunks.length; i++) {
      const embedding = await this.getEmbedding(chunks[i]);
      documents.push({
        id: `doc_${i}`,
        text: chunks[i],
        embedding,
        metadata,
        tokenCount: dphelper.ai.tokenCount(chunks[i])
      });
    }

    return documents;
  }

  async query(queryText, topK = 5) {
    const queryEmbedding = await this.getEmbedding(queryText);

    // Find most similar documents
    const results = this.documents
      .map(doc => ({
        ...doc,
        similarity: dphelper.ai.similarity(queryEmbedding, doc.embedding)
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, topK);

    return results;
  }
}
```

## Details

- **Author:** Dario Passariello
- **Version:** 0.0.3
- **Creation Date:** 20260220
- **Last Modified:** 20260221
- **Environment:** Works in both client and server environments

---

*Automatically generated document*
