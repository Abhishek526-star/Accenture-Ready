# DSA Question Data Format

> **File:** `docs/content/dsa-question-format.md`
> **Applies to:** Accenture Ready (`src/data/`)

---

## Where DSA questions are stored

DSA questions are **not** stored in JSON or Markdown. They are saved as **JavaScript ES module files** under `src/data/`, each exporting a named constant (array or object) that the React pages import directly:

| File | Export | Contents |
|------|--------|----------|
| `src/data/dsaPatterns.js` | `export const dsaPatterns = [...]` | 49 curated high-yield DSA questions (patterns, arrays, numbers, strings, recursion) |
| `src/data/dsaPracticeQuestions.js` | `export const DSA_PRACTICE_QUESTIONS = [...]` | 10 authentic Accenture exam-style coding questions with test cases & starter code |
| `src/data/dsaOptimalSolutions.js` | `export const DSA_OPTIMAL_SOLUTIONS = { ... }` | Reference solutions keyed by question id (`'dsa-1'`...), per language (Python, Java, C++, C#, JS) |
| `src/data/dsaTestCases.js` | test case bank | Inputs & expected outputs consumed by the Judge0 harness |
| `src/data/dsaOsSqlMcq.json` | JSON | DSA/OS/SQL multiple-choice questions (the only JSON-based DSA bank) |
| `src/data/dsaPracticeHarness.js` | harness builder (`buildJudge0Harness()`) | Builds Judge0 execution code from question data |

---

## Question object schema (`dsaPatterns.js`)

```js
{
  id: 'dsa-1',                      // unique id, used by dsaOptimalSolutions / test cases
  qno: 1,                           // question number
  title: 'Triangle 1',
  name: 'Triangle 1 (Number Triangle)',
  category: 'Pattern Questions',    // Patterns | Arrays | Numbers | Strings | Recursion | Implementations
  difficulty: 'Easy',               // Easy | Medium | Hard
  link: 'https://www.geeksforgeeks.org/...',  // practice link
  linkText: 'Pattern 3 | Practice | GeeksforGeeks',
  concept: '...',                   // approach description
  timeComplexity: 'O(N^2)',
  spaceComplexity: 'O(1)',
  whenToUse: ['...'],               // array of usage notes
  template: `// Java template code`,
  example: `For N = 4:\n1\n1 2\n...`
}
```

---

## Question object schema (`dsaPracticeQuestions.js`)

```js
{
  id: 'dsa-p-01',                   // 'dsa-p-XX' for practice questions
  qno: 1,
  title: 'Absolute Difference',
  difficulty: 'Easy',
  category: 'Arrays',
  topic: 'Array Traversal / Absolute Difference',
  company: 'Accenture',
  pattern: 'Linear Scan',
  timeComplexity: 'O(N)',
  spaceComplexity: 'O(1)',
  rewardXp: 50,                     // gamification XP
  targetMins: 15,                   // suggested solve time
  description: `...`,               // problem statement (backtick template string)
  rules: ['...'],                   // array of rule strings
  coreLogic: `...`,                 // step-by-step algorithm explanation
  dryRun: [                         // worked-example trace table rows
    { element: 12, diffCalc: '|12 - 13| = 1', valid: 'Yes (1 <= 2)', runningCount: 1 },
    // ...
  ],
  constraints: ['1 <= length <= 10^5', '...'],
  testCases: [                      // 5 test cases per question
    {
      id: 'tc-1',
      name: 'Given Example',
      input: 'arr = [12, 3, 14, 56, 77, 13], num = 13, diff = 2',
      expectedOutput: '3',
      explanation: '...'
    },
    // ...
  ],
  starterCode: {                    // multi-language starter code (backtick strings)
    python: `def find_count(arr, length, num, diff): ...`,
    java:   `public class Solution { ... }`,
    cpp:    `int findCount(int arr[], ...) { ... }`,
    csharp: `...`,
    javascript: `...`
  }
}
```

---

## Optimal solutions format (`dsaOptimalSolutions.js`)

An object keyed by question id, each holding per-language reference solutions as template strings:

```js
export const DSA_OPTIMAL_SOLUTIONS = {
  'dsa-1': {
    python: `class Solution:\n    def printTriangle(self, n): ...`,
    java:   `...`,
    cpp:    `...`,
    csharp: `...`,
    javascript: `...`
  },
  'dsa-2': { /* ... */ }
}
```

---

## How the pieces connect at runtime

```text
dsaPracticeQuestions.js (question + starterCode)
        +
dsaTestCases.js        (inputs / expected outputs)
        |
        v
dsaPracticeHarness.js  buildJudge0Harness()  ->  Judge0 CE REST API
        |
        v
DsaPracticePage.jsx    (renders question, editor, and test results)
```

**Key conventions:**
- IDs are stable strings: `'dsa-1'`... for the curated bank, `'dsa-p-01'`... for practice questions. `dsaOptimalSolutions` and test cases must key off these IDs.
- All code (templates, starter code, solutions) is embedded as backtick template-literal strings inside the JS files.
- Multi-language support: Python, Java, C++, C#, JavaScript.
