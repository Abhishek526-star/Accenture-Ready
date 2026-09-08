# 🚀 Accenture Ready

<div align="center">

### 💻 Frontend Coding Assessment Practice Platform

**Practice. Code. Test. Improve.**

A browser-based coding platform designed to help developers prepare for **frontend technical assessments** through real coding challenges, live execution, and automated DOM testing.

<br>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Monaco](https://img.shields.io/badge/Monaco_Editor-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

<br>

**[🌐 Live Demo](https://accentureready.vercel.app/)** &nbsp; • &nbsp;

</div>

---

## 🎯 Why Accenture Ready?

Frontend interviews aren't just about knowing JavaScript.

You need to be able to:

> **Read a requirement → Write code → Run it → Debug it → Pass the tests.**

That's exactly what this project is built to simulate.

**Accenture Ready** provides a complete browser-based assessment environment where you can write HTML, CSS, and JavaScript and immediately validate your solution using automated browser tests.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🧑‍💻 **Code in Browser** | Write HTML, CSS & JavaScript using Monaco Editor |
| ⚡ **Run Code** | Execute your solution instantly |
| 🧪 **Automated Testing** | Validate your implementation with browser DOM tests |
| 🔍 **Instant Feedback** | See passed/failed tests with expected vs received values |
| 📱 **Responsive Preview** | Test Desktop, Tablet and Mobile layouts |
| 💾 **Auto Save** | Your code and progress are saved locally |
| 📊 **Progress Dashboard** | Track solved questions and test performance |
| ⏱️ **Assessment Timer** | Practice under a time limit |
| 🌙 **Dark / Light Mode** | Choose your preferred coding environment |
| 🔄 **Reset Code** | Restore the original starter code anytime |

### 🧪 Assessment Engine

The platform currently includes:

- **10 frontend coding challenges**
- **54 automated browser test cases**
- Real DOM interaction testing
- Expected vs received test results
- Runtime error detection
- Sandboxed code execution

---

## 🧩 Assessment Topics

The current challenges focus on practical frontend fundamentals:

```text
HTML
 ├── Semantic Structure
 ├── Forms
 └── UI Components

CSS
 ├── Styling
 ├── States
 ├── Responsive Layouts
 └── Themes

JavaScript
 ├── DOM Manipulation
 ├── Event Handling
 ├── Form Validation
 ├── Filtering
 ├── State Management
 └── Browser APIs
```

### Current Challenges

| # | Challenge | Focus |
|---|---|---|
| 01 | 🔢 Interactive Counter | DOM & Events |
| 02 | 🔐 Password Validation | Forms |
| 03 | 🤖 Chatbot | DOM & Events |
| 04 | 🔤 Character Counter | Input Events |
| 05 | ✅ To-Do App | DOM Manipulation |
| 06 | 🔑 Login Form | Validation |
| 07 | 🔎 Product Search | Filtering |
| 08 | 👁️ Show / Hide Password | DOM & Attributes |
| 09 | 🌡️ Temperature Converter | JavaScript Logic |
| 10 | 🌓 Theme Toggle | CSS & State |

---

## 🧪 How It Works

The assessment workflow is simple:

```text
        📖 Read Question
               ↓
        ✍️ Write Code
               ↓
        ▶️ Run Application
               ↓
       🧪 Run Test Suite
               ↓
      ┌────────┴────────┐
      ↓                 ↓
   ✅ PASSED          ❌ FAILED
      ↓                 ↓
   Continue        Debug & Retry
```

Each question provides three editable files:

```text
📄 index.html
🎨 styles.css
⚡ script.js
```

Your code runs inside an isolated sandboxed preview, while automated tests validate the rendered DOM and user interactions.

---

## 🔍 Smart Test Feedback

Instead of simply showing **"Wrong Answer"**, the platform provides diagnostic feedback.

Example:

```text
❌ Test Failed

Expected:
Button text should be "Reset"

Received:
"Clear"

────────────────────────

💡 Fix your implementation
   and run the test again.
```

This makes the platform useful for both:

**Assessment Practice + Learning Through Debugging**

---

## 🖥️ Responsive Preview

Test your frontend implementation across different viewport sizes:

```text
┌──────────────────────────────────────┐
│              Desktop                 │
│                                      │
│          100% Preview                │
│                                      │
└──────────────────────────────────────┘

┌────────────────────────────┐
│          Tablet            │
│                            │
│         768px              │
│                            │
└────────────────────────────┘

┌──────────────────┐
│      Mobile      │
│                  │
│      375px       │
│                  │
└──────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

- ⚛️ **React 19**
- ⚡ **Vite 8**
- 🧭 **React Router v7**
- 🎨 **Vanilla CSS**
- 🖼️ **Lucide React**

### Core Technologies

- 📝 **Monaco Editor**
- 🧪 **Custom DOM Test Runner**
- 💾 **Browser localStorage**
- 🛡️ **Sandboxed iframe**

---

## 🏗️ Architecture

```text
                    ┌───────────────────┐
                    │    React App      │
                    └─────────┬─────────┘
                              │
             ┌────────────────┼────────────────┐
             ↓                ↓                ↓
       Question Panel    Monaco Editor     Dashboard
                              │
                              ↓
                     Candidate HTML/CSS/JS
                              │
                              ↓
                     Sandboxed iframe
                              │
                              ↓
                       DOM Test Runner
                              │
                              ↓
                    ┌─────────┴─────────┐
                    ↓                   ↓
                 ✅ Pass             ❌ Fail
                    │                   │
                    └─────────┬─────────┘
                              ↓
                       Test Results UI
```

---

# 🚀 Getting Started

## Prerequisites

Make sure you have:

- Node.js **18+**
- npm **9+**

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Abhishek526-star/Accenture-Ready.git
```

## 2️⃣ Navigate to the Project

```bash
cd Accenture-Ready
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Start Development Server

```bash
npm run dev
```

## 5️⃣ Open in Browser

```text
http://localhost:5173
```

---

## 📸 Screenshots

Add screenshots of your application here.

Example:

```md
![Home Page](./screenshots/home.png)

![Practice Interface](./screenshots/practice.png)

![Dashboard](./screenshots/dashboard.png)
```

---

## 📈 Roadmap

- [x] Frontend coding challenges
- [x] Monaco code editor
- [x] Live preview
- [x] Automated DOM testing
- [x] Progress tracking
- [x] Assessment timer
- [x] Dark / Light mode
- [ ] More coding questions
- [ ] Difficulty levels
- [ ] SQL practice
- [ ] Aptitude & reasoning
- [ ] Backend challenges
- [ ] User authentication
- [ ] Cloud progress synchronization
- [ ] AI-powered code feedback
- [ ] Interview preparation

---

## 🎯 Project Goal

**Accenture Ready** is built around one simple idea:

> ### Don't just practice coding questions.
> ### Practice solving them like a real assessment.

Write code.

Run it.

Break it.

Debug it.

Pass the tests.

**Become assessment-ready. 🚀**

---

## 👨‍💻 Author

### Abhishek

Built with ❤️ using:

**React + Vite + JavaScript + Monaco Editor**

If you found this project useful, consider giving the repository a ⭐.

---

<div align="center">

### 🚀 Practice → Code → Test → Improve

**Made for developers preparing for frontend technical assessments.**

⭐ **Star the repository if you like the project!**

</div>
