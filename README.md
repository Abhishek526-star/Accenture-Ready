# Frontend Coding Assessment Practice

A complete, high-fidelity browser-based **Frontend Coding Assessment Practice Platform** inspired by the technical assessments used by top technology companies (such as Accenture, HackerRank, LeetCode, and CodeSignal).

The platform allows candidates to read real-world frontend questions, inspect and edit **HTML**, **CSS**, and **JavaScript** files in a full Monaco code editor, execute their code in an isolated sandboxed preview, and receive instant diagnostic feedback from automated browser DOM test suites.

---

## 🌟 Key Features

1. **Multi-File Code Editor (HTML, CSS, JavaScript)**:
   - Powered by **Monaco Editor** (the VS Code editing engine).
   - Full support for JavaScript, HTML, and CSS syntax highlighting, indentation, bracket matching, line numbers, and dark/light themes.
   - All files (`script.js`, `index.html`, `styles.css`) are independently editable and autosaved.
   - Dedicated Monaco text models preventing tab switching race conditions or cross-tab contamination.

2. **10 Comprehensive Assessment Questions**:
   - Covers core frontend competencies: DOM querying, element creation, event handling, real-time form validation, string parsing, case-insensitive list filtering, attribute toggling, CSS state classes, and math conversions.
   - Structured breakdown for every question:
     - 🌐 **HTML Tasks**: Adding missing semantic markup, buttons, labels, and hint text.
     - 🎨 **CSS Tasks**: Writing custom rules, colors, hover states, and theme variables.
     - ⚡ **JavaScript Tasks**: Implementing event listeners, state boundaries, DOM updates, and error handling.
     - ⚠️ **Constraints**: Clear rules preserving IDs and structure.

3. **Secure Sandboxed Live Preview (`<iframe>`)**:
   - Candidate code executes inside an isolated iframe with `sandbox="allow-scripts"`.
   - Strictly blocks access to parent window, host application state, parent cookies, and parent `localStorage`.
   - Responsive preview modes with device toggles: **Desktop (100%)**, **Tablet (768px)**, and **Mobile (375px)**.

4. **Automated In-Browser DOM Testing System**:
   - 54 automated browser test cases running real assertions against rendered elements.
   - Instant visual feedback: green checkmarks for passed tests, red indicators with detailed **Expected vs Received** diff views for failed tests.
   - Test implementation code is kept completely private from candidate inspection.
   - Integrated console log interceptor capturing `console.log`, `warn`, and `error` in a dedicated tab.

5. **Runtime Error & Watchdog Safety**:
   - Catches syntax errors, runtime exceptions, and unhandled promise rejections without crashing the React host application.
   - 4-second execution watchdog timer that aborts and reports infinite loops (e.g. `while(true)`).

6. **Candidate Progress & Dashboard**:
   - Automatic local persistence using browser `localStorage` (`frontend-practice-bundle-q{id}`, completed questions, active question, and test results).
   - Dedicated **Candidate Assessment Dashboard** tracking solved counts, test scores, and overall success percentage.
   - Assessment countdown timer with practice-mode pause and disable toggle.
   - Safe confirmation modal for resetting files back to original starter templates.

---

## 🛠️ Technology Stack

- **Framework**: React 19 with JSX
- **Build Tool**: Vite 8
- **Routing**: React Router v7 (`react-router-dom`)
- **Editor**: Monaco Editor (`@monaco-editor/react`)
- **Icons**: Lucide React (`lucide-react`)
- **Styling**: Vanilla CSS with tailored design tokens, modern dark/light modes, and responsive breakpoints
- **State & Storage**: Client-side `localStorage` with safe JSON serialization

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended; tested on v22)
- npm (v9 or higher)

### Installation

```bash
# Clone or navigate to the repository directory
cd d:/Project/Accenture

# Install project dependencies
npm install
```

### Running Locally

```bash
# Start the Vite development server
npm run dev
```

Open your browser and navigate to:
```
http://localhost:5173/
```

### Building for Production

```bash
# Create an optimized production bundle
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```text
d:/Project/Accenture/
├── public/
│   └── favicon.svg              # Platform favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Global top navigation & theme switcher
│   │   ├── Header.jsx           # Assessment header, progress bar, timer, question selector
│   │   ├── QuestionPanel.jsx    # Problem instructions, HTML/CSS/JS tasks, constraints
│   │   ├── CodeEditor.jsx       # Monaco Editor with JS, HTML, CSS tabs and model management
│   │   ├── PreviewPanel.jsx     # Sandboxed iframe with Desktop/Tablet/Mobile viewports
│   │   ├── TestResults.jsx      # Automated test results list, diffs, and console logs
│   │   ├── Navigation.jsx       # Bottom bar with Previous, Run Code, and Next buttons
│   │   ├── Timer.jsx            # Countdown assessment timer with pause/toggle
│   │   └── ResetModal.jsx       # Confirmation dialog to restore starter code
│   │
│   ├── data/
│   │   └── questions.js         # 10 full question definitions (HTML, CSS, JS starter & solutions)
│   │
│   ├── tests/
│   │   ├── question1.test.js    # Test suite for Interactive Counter
│   │   ├── question2.test.js    # Test suite for Password Validation
│   │   ├── question3.test.js    # Test suite for Chatbot
│   │   ├── question4.test.js    # Test suite for Character Counter
│   │   ├── question5.test.js    # Test suite for To-Do Application
│   │   ├── question6.test.js    # Test suite for Login Form
│   │   ├── question7.test.js    # Test suite for Product Search
│   │   ├── question8.test.js    # Test suite for Show/Hide Password
│   │   ├── question9.test.js    # Test suite for Temperature Converter
│   │   ├── question10.test.js   # Test suite for Theme Toggle
│   │   └── index.js             # Aggregated test suites map
│   │
│   ├── utils/
│   │   ├── storage.js           # Safe localStorage management for code bundles & progress
│   │   └── sandbox.js           # Sandboxed iframe document builder and test bridge
│   │
│   ├── pages/
│   │   ├── Home.jsx             # Assessment landing page with curriculum & question cards
│   │   ├── Practice.jsx         # 3-panel assessment workspace
│   │   └── Dashboard.jsx        # Candidate progress metrics & question breakdown
│   │
│   ├── App.jsx                  # Root router setup & theme persistence
│   ├── main.jsx                 # Application entrypoint
│   └── index.css                # CSS design system, typography, dark/light themes
│
├── index.html                   # HTML entrypoint
├── package.json                 # Dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                    # Project documentation
```

---

## 🏗️ Architecture & Core Mechanics

### 1. How the Code Editor Works
The code editor integrates `@monaco-editor/react`. Each question has three files:
- `script.js` (JavaScript logic)
- `index.html` (Markup structure)
- `styles.css` (Visual presentation)

Monaco utilizes unique model paths (`question-{id}/script.js`, etc.) so that each file retains its own undo/redo history, cursor position, and syntax tree without memory cross-talk when switching tabs. Edits are debounced and saved into the browser's `localStorage` as a unified code bundle for the question.

### 2. How the Sandbox Works
When the candidate types or clicks **Run Code**, `buildSandboxSrcDoc` constructs an HTML document string:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>/* Candidate's CSS */</style>
  </head>
  <body>
    <!-- Candidate's HTML -->
    <script>
      // 1. Console bridge capturing log/warn/error
      // 2. Global error handlers (window.onerror & unhandledrejection)
      // 3. Candidate JS execution in try/catch
      // 4. Test runner executing assertions if runTests is true
    </script>
  </body>
</html>
```
The iframe is declared with `sandbox="allow-scripts"`. Under browser security specifications:
- The iframe has an opaque origin (`null`).
- It cannot read or write to `window.parent.localStorage`.
- It cannot read cookies or touch host DOM.
- It communicates results exclusively via `window.parent.postMessage()`.

### 3. How Tests Work
Each test case is written as an asynchronous assertion function:
```javascript
{
  id: "q1_t1",
  name: "[HTML] Reset button #reset-btn added inside .btn-group",
  testFn: async ({ document, assert }) => {
    const btn = document.getElementById("reset-btn");
    assert(btn !== null, "Reset button with id='reset-btn' must exist", "Button element", btn);
  }
}
```
When **Run Code** is clicked:
1. The test functions are serialized and injected into the iframe sandbox.
2. The candidate's code executes first to establish DOM listeners.
3. The test runner loops through test cases, dispatching synthetic events (e.g. `click()`, `input` events).
4. If an assertion fails, the runner records `{ name, passed: false, expected, received, error }`.
5. The final report is posted to the React parent, updating the test results drawer.

---

## ➕ How to Add a New Question

1. Open `src/data/questions.js` and append a new question object:
   ```javascript
   {
     id: 11,
     title: "Accordion FAQ",
     difficulty: "Easy",
     category: "HTML / CSS / DOM",
     howToAttempt: "Build an interactive accordion component...",
     htmlObjectives: ["Add .accordion-item container"],
     cssObjectives: ["Style active accordion panel"],
     jsObjectives: ["Toggle accordion open/close on click"],
     constraints: ["Do not reload page"],
     html: "...",
     css: "...",
     starterJS: "..."
   }
   ```
2. Create `src/tests/question11.test.js` with your assertion suite.
3. Import and add it to `src/tests/index.js`.
4. The question will automatically appear on the Landing Page, Practice selector, and Dashboard!

---

## 🔒 Security Considerations

- **Opaque Origin**: `sandbox="allow-scripts"` guarantees that untrusted candidate scripts run in a separate browsing context.
- **Parent Isolation**: The parent React state and candidate answers for other questions cannot be accessed from within the iframe.
- **Watchdog Protection**: Long-running loops or timeouts will be caught after 4 seconds to prevent browser freezes.

---

## 💡 Notes & Browser Limitations

- Browser-only test execution relies on standard synthetic DOM events (`dispatchEvent(new Event('input'))`). Some browser-specific security restrictions (like accessing real user input hardware or clipboard) cannot be tested in pure client-side sandbox environments.
- All practice state resides in the local browser; clearing browser cache or running in Incognito will restore default starter codes.
#   A c c e n t u r e - R e a d y  
 