# 📘 Project Summary & Technical Blueprint
## Current Implementation, Codebase Directories & Execution Roadmap

> **File:** `docs/SUMMARY.md`  
> **Platform:** Accenture Ready (Technical Assessment & Placement Preparation Platform)  
> **Repository:** [Accenture Ready Workspace](file:///d:/Project/Accenture)

---

## 📑 Quick Navigation

1. [Platform Overview & Executive Summary](#1-platform-overview--executive-summary)
2. [Complete Directory & File System Guide](#2-complete-directory--file-system-guide)
   - [2.1 Root Configuration & Infrastructure](#21-root-configuration--infrastructure)
   - [2.2 Server Architecture (`/server`)](#22-server-architecture-server)
   - [2.3 Data Aggregation Scripts (`/scripts`)](#23-data-aggregation-scripts-scripts)
   - [2.4 Frontend Source Breakdown (`/src`)](#24-frontend-source-breakdown-src)
3. [Current Website Implementation (What is Live Today)](#3-current-website-implementation-what-is-live-today)
   - [3.1 Complete 38-Page Routing Catalog](#31-complete-38-page-routing-catalog)
   - [3.2 The 3 Interactive Code & Test Engines](#32-the-3-interactive-code--test-engines)
   - [3.3 Timed PYQ & Technical Assessment Engines](#33-timed-pyq--technical-assessment-engines)
   - [3.4 Cognitive Assessment Mini-Games](#34-cognitive-assessment-mini-games)
   - [3.5 Real-Time Presence & Telemetry System](#35-real-time-presence--telemetry-system)
   - [3.6 Gamification, Readiness & Local Storage Persistence](#36-gamification-readiness--local-storage-persistence)
4. [Current Runtime Execution Architecture & Data Flows](#4-current-runtime-execution-architecture--data-flows)
   - [4.1 Frontend DOM Code Execution Flow](#41-frontend-dom-code-execution-flow)
   - [4.2 In-Browser SQLite WASM Query Execution Flow](#42-in-browser-sqlite-wasm-query-execution-flow)
   - [4.3 Judge0 DSA Remote Code Execution Flow](#43-judge0-dsa-remote-code-execution-flow)
   - [4.4 Timed Technical & PYQ Mock Exam Lifecycle](#44-timed-technical--pyq-mock-exam-lifecycle)
   - [4.5 Real-Time WebSocket Presence Flow](#45-real-time-websocket-presence-flow)
   - [4.6 Client-Side Persistence Architecture](#46-client-side-persistence-architecture)

---

## 1. Platform Overview & Executive Summary

**Accenture Ready** is an enterprise-grade placement preparation and assessment web application. It transforms static problem-solving into realistic browser-based assessment environments simulating modern recruitment platforms.

### Key Capabilities Live in the Codebase:
- 💻 **Interactive Multi-File Frontend IDE**: Live editable HTML, CSS, and JS with sandboxed iframe preview and automated DOM mutation tests.
- 🗄️ **Zero-Latency In-Browser SQL Assessment**: WebAssembly SQLite engine (`sql.js`) executing live DDL/DML queries against question-specific schemas with column/row assertion diffs.
- ⚡ **Multi-Language DSA Code Runner**: Integrated with Judge0 CE across Python, Java, C++, C#, and JavaScript with custom test harness generation and float/array normalization.
- 📝 **Extensive Question Banks & Mocks**: 30+ specialized data banks, 45-question timed technical mocks, past exam question papers (PYQs), bitwise pseudocode solvers, and certification tracks (Cloud, Network Security, MS Office, Java, OOP, DevOps).
- 🧠 **Cognitive Testing Suite**: Two interactive game simulations (Math Bubble for speed calculations and Memory Maze for spatial recall).
- 👥 **Real-Time Live Presence**: Node.js Express 5 + WebSocket server broadcasting active concurrent learners across channels.

---

## 2. Complete Directory & File System Guide

### 🌲 Full Workspace Directory Tree

```text
Accenture/
├── docs/                                  # Documentation and architectural specifications
│   ├── README.md                          # Future multi-company blueprint & database DDL (73KB)
│   └── SUMMARY.md                         # Current website implementation & directory guide (this file)
├── public/                                # Public static assets served at root
│   ├── favicon.svg                        # Platform favicon
│   ├── sql-wasm.wasm                      # SQLite WebAssembly runtime binary
│   └── ...                                # Social cards & icons
├── scripts/                               # Data aggregation & question generation scripts
│   ├── buildCompleteNetworkData.js        # Compiles full computer networking question datasets
│   ├── buildNetworkSecurityData.js        # Compiles network security and cloud security MCQs
│   └── generateNetworkQuestions.js        # Script generating question templates
├── server/                                # Node.js backend infrastructure
│   ├── index.js                           # Express 5 server mounting static SPA & WebSocket
│   └── presenceServer.js                  # WebSocket server managing real-time learner presence
├── src/                                   # Application source code
│   ├── assets/                            # SVG icons & illustrations
│   ├── components/                        # UI component library (17 root + 32 sub-components)
│   │   ├── cloud/                         # Cloud assessment sub-components (5 files)
│   │   │   ├── CloudAnalysisModal.jsx     # Detailed cloud assessment report modal
│   │   │   ├── CloudQuestionCard.jsx      # Cloud MCQ question card with options
│   │   │   ├── CloudQuestionPalette.jsx   # Question status palette (answered, review, unvisited)
│   │   │   ├── CloudQuizHeader.jsx        # Exam header with timer and score
│   │   │   └── CloudStudyNotesModal.jsx   # Cloud concepts revision notes modal
│   │   ├── cognitive/                     # Cognitive assessment widgets (5 files)
│   │   │   ├── DailyChallengeCard.jsx     # Daily challenge streak card
│   │   │   ├── GameHeader.jsx             # Score, lives, and timer header for cognitive games
│   │   │   ├── GameInstructions.jsx       # Pre-game instruction dialog
│   │   │   ├── GameTransition.jsx         # Round-to-round transition overlay
│   │   │   └── cognitive.css              # Cognitive game specific styles
│   │   ├── interview/                     # Interview simulator widgets (2 files)
│   │   │   ├── RecentSetFollowupChain.jsx # Follow-up interview questions chain
│   │   │   └── RecentSetIntroModule.jsx   # Company interview experience intro modal
│   │   ├── java/                          # Core Java learning components (4 files)
│   │   │   ├── JavaCodeViewer.jsx         # Java syntax highlighted code viewer
│   │   │   ├── JavaMethodTable.jsx        # Java built-in method reference table
│   │   │   ├── JavaTipCard.jsx            # Java interview gotcha card
│   │   │   └── JavaTopicSidebar.jsx       # Java topic navigation sidebar
│   │   ├── pseudocode/                    # Pseudocode simulator components (3 files)
│   │   │   ├── PseudocodeHandbookModal.jsx# Bitwise & loop handbook modal
│   │   │   ├── PseudocodeScratchpad.jsx   # Interactive calculation scratchpad
│   │   │   └── PseudocodeTracer.jsx       # Line-by-line variable execution tracer
│   │   ├── sql/                           # In-browser SQLite workspace components (13 files)
│   │   │   ├── DatabaseERDiagram.css      # ER diagram layout styles
│   │   │   ├── DatabaseERDiagram.jsx      # Interactive ER table relationship diagram
│   │   │   ├── SQLEditor.jsx              # Monaco Editor configured for SQL syntax
│   │   │   ├── SQLExampleViewer.jsx       # Sample queries and SQL pattern reference
│   │   │   ├── SQLQuestionPanel.jsx       # Problem description & schema table views
│   │   │   ├── SQLResultPanel.jsx         # Live query output grid
│   │   │   ├── SQLResultsModal.jsx        # Final test pass/fail score modal
│   │   │   ├── SQLSchemaModal.css         # Schema modal styling
│   │   │   ├── SQLSchemaModal.jsx         # Full schema structure and DDL modal
│   │   │   ├── SQLSchemaViewer.jsx        # Compact table schema viewer widget
│   │   │   ├── SQLSolutionViewer.jsx      # Reference SQL solution viewer
│   │   │   ├── SQLTestResults.jsx         # Query assertion comparison diff panel
│   │   │   └── SqlRichText.jsx            # Formatted text and markdown renderer
│   │   ├── BeautifiedExplanation.jsx     # Markdown parser for question explanations
│   │   ├── CodeEditor.jsx                 # Multi-tab frontend editor (HTML, CSS, JS)
│   │   ├── ErrorBoundary.jsx              # React runtime error boundary
│   │   ├── GlobalSearchModal.jsx          # Cmd+K / Ctrl+K universal search dialog
│   │   ├── Header.jsx                     # Practice workspace top control bar
│   │   ├── LiveViewer.jsx                 # Real-time WebSocket online learner indicator
│   │   ├── Navbar.jsx                     # Master application navigation bar with menus
│   │   ├── Navigation.jsx                 # Previous/Next problem controls
│   │   ├── PreviewPanel.jsx               # Sandboxed iframe preview for frontend code
│   │   ├── QuestionDropdown.jsx           # Rapid jump question selector
│   │   ├── QuestionPanel.jsx              # Problem description and test case preview
│   │   ├── QuestionSidebar.jsx            # Collapsible challenge list drawer
│   │   ├── ResetModal.jsx                 # Starter code reset confirmation modal
│   │   ├── SEO.jsx                        # react-helmet-async SEO manager
│   │   ├── SolutionViewer.jsx             # Reference code solution viewer modal
│   │   ├── TestResults.jsx                # DOM test assertion status feedback panel
│   │   └── Timer.jsx                      # Assessment countdown timer component
│   ├── config/                            # Platform configuration
│   │   └── seo.js                         # Dynamic SEO metadata & OpenGraph configs
│   ├── data/                              # Static question banks & PYQ datasets (30 files, ~2.5MB)
│   │   ├── cheatSheets.js                 # Quick revision cheatsheets (23KB)
│   │   ├── cloudFundamentalsPyq.json      # Cloud fundamentals PYQ exam bank (86KB)
│   │   ├── cloudQuestions.js              # Cloud & AWS/Azure MCQs (126KB)
│   │   ├── cloudSecurityQuestions.js      # Cloud security questions (58KB)
│   │   ├── computerNetworkPyq.json        # Networking PYQ exam bank (98KB)
│   │   ├── dailyChallenges.js             # Daily practice challenges (20KB)
│   │   ├── devopsQuestions.js             # CI/CD and DevOps MCQs (70KB)
│   │   ├── dsaOptimalSolutions.js         # Reference code solutions across languages (58KB)
│   │   ├── dsaOsSqlMcq.json               # OS & DBMS MCQ exam bank (106KB)
│   │   ├── dsaPatterns.js                 # Algorithmic pattern guides (54KB)
│   │   ├── dsaPracticeQuestions.js        # 100+ Data Structures & Algorithms challenges (364KB)
│   │   ├── dsaTestCases.js                # Public and hidden test cases for Judge0 (116KB)
│   │   ├── importantQuestions.js          # High-yield PYQ Set 1 (102KB)
│   │   ├── importantQuestionsSet2.js      # High-yield PYQ Set 2 (113KB)
│   │   ├── interviewQuestions.js          # Technical and HR interview questions (91KB)
│   │   ├── javaTopics.js                  # Core Java concept curriculum (49KB)
│   │   ├── mixedPyq.json                  # Multi-topic mock exam paper (56KB)
│   │   ├── msOfficePyqFull.json           # Complete MS Office PYQ exam bank (157KB)
│   │   ├── msOfficeQuestions.js           # MS Office practice MCQs (54KB)
│   │   ├── networkQuestions.js            # Computer Networks MCQs (189KB)
│   │   ├── networkSecurityCloudPyq.json   # NetSec + Cloud PYQ exam bank (86KB)
│   │   ├── networkSecurityQuestions.js    # Network security practice MCQs (207KB)
│   │   ├── oopQuestions.js                # Object-Oriented Programming MCQs (73KB)
│   │   ├── pseudocodeQuestions.js         # Bitwise & flow pseudocode questions (64KB)
│   │   ├── pyqBanks.js                    # Catalog metadata of all PYQ papers (13KB)
│   │   ├── questions.js                   # 10 Frontend DOM challenges (78KB)
│   │   ├── recentQuestions.js             # Recent placement questions (274KB)
│   │   ├── sqlQuestions.js                # 50+ relational SQL challenges (271KB)
│   │   ├── sqlSchemas.js                  # Table schemas & mock datasets (20KB)
│   │   └── wifiSecurityQuestions.js       # Wireless security practice MCQs (54KB)
│   ├── games/                             # Cognitive assessment mini-games
│   │   ├── MathBubble/                    # Rapid speed arithmetic game
│   │   └── MemoryMaze/                    # Spatial memory and grid recall game
│   ├── hooks/                             # Custom React hooks
│   │   └── useLiveViewer.js               # WebSocket presence connection hook
│   ├── pages/                             # 38 Routed application pages
│   │   ├── AchievementsPage.jsx           # Gamification badges & XP levels
│   │   ├── AnalyticsPage.jsx              # Radar charts & performance analysis
│   │   ├── BookmarksPage.jsx              # Saved questions repository
│   │   ├── CheatSheetsPage.jsx            # Quick revision cards
│   │   ├── CloudAssessmentPage.jsx        # Cloud test simulator
│   │   ├── CloudSecurityPage.jsx          # Cloud security topic track
│   │   ├── CognitiveDashboard.jsx         # Cognitive game portal
│   │   ├── CognitiveResults.jsx           # Cognitive game percentile & scores
│   │   ├── DailyChallengePage.jsx         # Daily streak challenge solver
│   │   ├── Dashboard.jsx                  # Main user progress dashboard
│   │   ├── DevOpsAssessmentPage.jsx       # DevOps test track
│   │   ├── DsaPatternsPage.jsx            # Pattern-based learning (Sliding Window, etc.)
│   │   ├── DsaPracticePage.jsx            # Full DSA code editor + Judge0 integration
│   │   ├── FullAssessmentPage.jsx         # Combined multi-section exam
│   │   ├── FullCognitiveMock.jsx          # Timed cognitive mock test
│   │   ├── Home.jsx                       # Platform landing page & features
│   │   ├── ImportantQuestionsPage.jsx     # High-yield questions Set 1
│   │   ├── ImportantQuestionsSet2Page.jsx # High-yield questions Set 2
│   │   ├── InterviewPrepPage.jsx          # Behavioral & tech interview simulator
│   │   ├── JavaLearningPage.jsx           # Java deep dive module
│   │   ├── LearningHubPage.jsx            # Central course curriculum catalog
│   │   ├── MathBubblePage.jsx             # Math bubble game container
│   │   ├── MemoryMazePage.jsx             # Memory maze game container
│   │   ├── MistakesPage.jsx               # Revision notebook for failed questions
│   │   ├── MockAssessmentPage.jsx         # Custom mock exam generator
│   │   ├── MsOfficeAssessmentPage.jsx     # MS Office mock assessment
│   │   ├── NetworkAssessmentPage.jsx      # Computer networking test page
│   │   ├── NetworkSecurityPage.jsx        # Network security test page
│   │   ├── OopAssessmentPage.jsx          # OOP concepts & test simulator
│   │   ├── Practice.jsx                   # Frontend DOM assessment workspace
│   │   ├── PreparationRoadmapPage.jsx     # 30-day prep guide
│   │   ├── PseudocodePage.jsx             # Pseudocode calculation test
│   │   ├── PYQExamPage.jsx                # Exam-style timed mock interface
│   │   ├── RecentQuestionsPage.jsx        # Dated interview questions
│   │   ├── ScoreHistoryPage.jsx           # Past test attempt history
│   │   ├── SQLAssessmentPage.jsx          # Interactive SQL workspace & WASM engine
│   │   ├── TechnicalAssessmentPage.jsx    # 45-question timed mock exam
│   │   └── WifiSecurityPage.jsx           # Wireless security test simulator
│   ├── services/                          # Business logic & execution services (10 files)
│   │   ├── bookmarksStorage.js            # Bookmarks local storage manager
│   │   ├── dsaPracticeHarness.js          # Code generator for Judge0 runners (116KB)
│   │   ├── gamificationService.js         # Streak, badge, and XP calculator
│   │   ├── judge0Service.js               # Judge0 API client & output comparator (67KB)
│   │   ├── mistakesStorage.js             # Failed question persistence manager
│   │   ├── mockTestService.js             # Random mock test generator
│   │   ├── readinessEngine.js             # Probability of selection algorithm
│   │   ├── recommendationEngine.js        # Next best problem algorithm
│   │   ├── technicalMcqEngine.js          # Technical MCQ scoring & timers
│   │   └── telemetryService.js            # User interaction event logger
│   ├── styles/                            # Specialized stylesheets
│   │   └── technicalAssessment.css        # Exam palette and quiz styling
│   ├── tests/                             # Automated DOM unit test suites (12 files)
│   │   ├── index.js                       # Test runner entry point
│   │   ├── testDefinitions.js             # Assertion specifications (26KB)
│   │   ├── question1.test.js              # Unit tests for Counter challenge
│   │   ├── question2.test.js              # Unit tests for Password Validator
│   │   ├── question3.test.js              # Unit tests for Chatbot challenge
│   │   ├── question4.test.js              # Unit tests for Character Counter
│   │   ├── question5.test.js              # Unit tests for To-Do App
│   │   ├── question6.test.js              # Unit tests for Login Form
│   │   ├── question7.test.js              # Unit tests for Product Search
│   │   ├── question8.test.js              # Unit tests for Show/Hide Password
│   │   ├── question9.test.js              # Unit tests for Temperature Converter
│   │   └── question10.test.js             # Unit tests for Theme Toggle
│   ├── utils/                             # Utility functions & storage abstractions (24 files)
│   │   ├── achievements.js                # Achievement and badge definitions
│   │   ├── audio.js                       # Web Audio API sound effects for games
│   │   ├── cloudSecurityStorage.js        # Cloud security test progress storage
│   │   ├── cloudStorage.js                # Cloud test score storage
│   │   ├── cognitiveStorage.js            # Cognitive game score storage
│   │   ├── confirmToast.jsx               # Reusable confirmation toast UI
│   │   ├── devopsStorage.js               # DevOps test score storage
│   │   ├── dsaCodeTemplates.js            # Boilerplate starter templates
│   │   ├── importantQuestionsSet2Storage.js
│   │   ├── importantQuestionsStorage.js
│   │   ├── javaStorage.js                 # Java learning module storage
│   │   ├── msOfficeStorage.js             # MS Office test storage
│   │   ├── networkSecurityStorage.js      # NetSec test storage
│   │   ├── networkStorage.js              # Network test score storage
│   │   ├── oopStorage.js                  # OOP test score storage
│   │   ├── pseudocodeStorage.js           # Pseudocode test score storage
│   │   ├── sandbox.js                     # IFrame DOM sandbox builder
│   │   ├── sqlEngine.js                   # sql.js WASM singleton & DB isolation (12KB)
│   │   ├── sqlFormatter.js                # SQL query beautifier
│   │   ├── sqlMarkdown.js                 # Markdown parser for explanations
│   │   ├── sqlStorage.js                  # SQL progress storage
│   │   ├── storage.js                     # Base localStorage helper
│   │   ├── visitorSession.js              # Session identifier generator
│   │   └── wifiSecurityStorage.js         # Wifi security test score storage
│   ├── App.css                            # Core layout styles
│   ├── App.jsx                            # Main router, route definitions & theme
│   ├── index.css                          # Primary CSS design system (227KB)
│   └── main.jsx                           # Application DOM mount
├── .gitignore
├── .oxlintrc.json                         # Fast JS/React linter config
├── index.html                             # Single Page Application HTML shell
├── package.json                           # Dependencies & run scripts
├── render.yaml                            # Render deployment configuration
├── vercel.json                            # Vercel SPA routing rewrite config
└── vite.config.js                         # Vite build configuration
```

---

### 2.1 Root Configuration & Infrastructure

| Path | File/Dir | Role & Responsibility |
|:---|:---|:---|
| [`package.json`](file:///d:/Project/Accenture/package.json) | File | Node.js project manifest: React 19, Vite 8, Express 5, Monaco Editor, sql.js, ws, lucide-react. |
| [`vite.config.js`](file:///d:/Project/Accenture/vite.config.js) | File | Vite bundler config with React plugin and development server settings. |
| [`index.html`](file:///d:/Project/Accenture/index.html) | File | Single Page Application entry HTML shell mounting the `#root` container. |
| [`vercel.json`](file:///d:/Project/Accenture/vercel.json) | File | Vercel deployment rewrite rules routing all client paths to `/index.html`. |
| [`render.yaml`](file:///d:/Project/Accenture/render.yaml) | File | Infrastructure-as-code for deploying the Express + WebSocket server on Render. |
| [`.oxlintrc.json`](file:///d:/Project/Accenture/oxlintrc.json) | File | Oxlint static analysis configuration for ultra-fast JS/React linting. |
| [`public/`](file:///d:/Project/Accenture/public) | Directory | Static assets served directly: `favicon.svg`, logos, and `sql-wasm.wasm` (SQLite binary). |
| [`docs/`](file:///d:/Project/Accenture/docs) | Directory | Complete architectural blueprints and engineering specifications. |

---

### 2.2 Server Architecture (`/server`)

Located in [`server/`](file:///d:/Project/Accenture/server):
- [`server/index.js`](file:///d:/Project/Accenture/server/index.js):
  - Built on **Express 5.2.1** and Node's native `http.createServer`.
  - Serves static production frontend builds from `dist/` with SPA fallback.
  - Mounts permissive CORS middleware for local API development.
  - Exposes health-check API (`/api/health`) returning server status and online learner counts.
  - Hosts the WebSocket presence server under the `/ws` path.
- [`server/presenceServer.js`](file:///d:/Project/Accenture/server/presenceServer.js):
  - Implements a WebSocket server using `ws` (8.21.3).
  - Handles client channel subscriptions (`website`, `mock-test`, `dsa`).
  - Implements ping/pong heartbeat intervals (30s) to prune dead connections.
  - Broadcasts updated viewer numbers to all connected clients in real time.

---

### 2.3 Data Aggregation Scripts (`/scripts`)

Located in [`scripts/`](file:///d:/Project/Accenture/scripts):
- [`scripts/buildCompleteNetworkData.js`](file:///d:/Project/Accenture/scripts/buildCompleteNetworkData.js): Compiles and validates computer networking MCQs.
- [`scripts/buildNetworkSecurityData.js`](file:///d:/Project/Accenture/scripts/buildNetworkSecurityData.js): Generates network security and cloud protection questions.
- [`scripts/generateNetworkQuestions.js`](file:///d:/Project/Accenture/scripts/generateNetworkQuestions.js): Automation script for formatting raw question dumps into structured JS data modules.

---

### 2.4 Component Library Breakdown (`src/components/`)

The component library contains **17 top-level components** and **32 domain-specific subcomponents**:

1. **Top-Level Components**:
   - `CodeEditor.jsx`: Monaco Editor wrapper supporting JavaScript, HTML, and CSS tabs with line numbers and bracket matching.
   - `PreviewPanel.jsx`: Responsive device wrapper (`Desktop`, `Tablet`, `Mobile`) hosting the sandboxed preview iframe.
   - `QuestionPanel.jsx`: Problem requirements, guidelines, test cases, and bookmark toggle.
   - `TestResults.jsx`: Assertion status view comparing expected DOM values against received DOM values with pass/fail counts.
   - `SolutionViewer.jsx`: Modal displaying reference solution code with one-click copy.
   - `Navbar.jsx`: Application navigation header with search shortcut, theme switcher, and topic dropdown menus.
   - `Navigation.jsx`: Problem pagination bar with previous/next controls and solve counters.
   - `Header.jsx`: Practice workspace actions (Run Code, Run Tests, Reset Code, View Solution).
   - `Timer.jsx`: Floating or inline assessment countdown clock with warning thresholds.
   - `LiveViewer.jsx`: Real-time online learner counter badge.
   - `GlobalSearchModal.jsx`: Cmd+K universal search dialog indexing questions and tracks.
   - `QuestionDropdown.jsx`: Jump dropdown for rapid challenge switching.
   - `QuestionSidebar.jsx`: Drawer showing challenge completion icons.
   - `ResetModal.jsx`: Confirmation dialog preventing accidental code resets.
   - `SEO.jsx`: Dynamic title and OpenGraph meta tag generator.
   - `ErrorBoundary.jsx`: React runtime crash handler preventing white screens.
   - `BeautifiedExplanation.jsx`: Syntax-highlighted explanation renderer.

2. **Domain Subcomponents**:
   - `src/components/sql/` (13 files): `SQLEditor.jsx`, `SQLQuestionPanel.jsx`, `SQLResultPanel.jsx`, `SQLTestResults.jsx`, `DatabaseERDiagram.jsx`, `SQLSchemaModal.jsx`, `SQLSchemaViewer.jsx`, `SQLSolutionViewer.jsx`, `SQLResultsModal.jsx`, `SQLExampleViewer.jsx`, `SqlRichText.jsx`.
   - `src/components/cloud/` (5 files): `CloudAnalysisModal.jsx`, `CloudQuestionCard.jsx`, `CloudQuestionPalette.jsx`, `CloudQuizHeader.jsx`, `CloudStudyNotesModal.jsx`.
   - `src/components/cognitive/` (5 files): `DailyChallengeCard.jsx`, `GameHeader.jsx`, `GameInstructions.jsx`, `GameTransition.jsx`, `cognitive.css`.
   - `src/components/java/` (4 files): `JavaCodeViewer.jsx`, `JavaMethodTable.jsx`, `JavaTipCard.jsx`, `JavaTopicSidebar.jsx`.
   - `src/components/pseudocode/` (3 files): `PseudocodeHandbookModal.jsx`, `PseudocodeScratchpad.jsx`, `PseudocodeTracer.jsx`.
   - `src/components/interview/` (2 files): `RecentSetFollowupChain.jsx`, `RecentSetIntroModule.jsx`.

---

### 2.5 Data Stores & Question Banks (`src/data/` ~2.5MB)

Contains **30 data modules** housing all practice questions, schemas, solutions, and PYQs:
- `questions.js` (78KB): 10 core Frontend challenges (Interactive Counter, Password Validator, Chatbot, Character Counter, To-Do App, Login Form, Product Search, Show/Hide Password, Temperature Converter, Theme Toggle).
- `dsaPracticeQuestions.js` (364KB): 100+ algorithmic coding questions with difficulty levels, constraints, and hints.
- `dsaOptimalSolutions.js` (58KB): Clean optimal solutions in Python, Java, C++, and JavaScript.
- `dsaTestCases.js` (116KB): Hidden and visible test cases for Judge0 harness execution.
- `dsaPatterns.js` (54KB): Algorithmic pattern explanations (Two Pointers, Sliding Window, Fast & Slow Pointers, Merge Intervals).
- `sqlQuestions.js` (271KB): 50+ relational database queries across Easy, Medium, and Hard tiers.
- `sqlSchemas.js` (20KB): DDL creation statements and mock data seeders for SQLite.
- `pseudocodeQuestions.js` (64KB): Accenture-style pseudocode tracing questions.
- `importantQuestions.js` (102KB) & `importantQuestionsSet2.js` (113KB): High-yield past interview questions with step-by-step answers.
- `recentQuestions.js` (274KB): Placement exam questions filtered by track (DSA, SQL, Frontend).
- **6 Full Past Exam PYQ Banks**:
  - `msOfficePyqFull.json` (157KB): Excel, Word, and PowerPoint MCQs.
  - `dsaOsSqlMcq.json` (106KB): Operating Systems, DBMS, and DSA fundamentals.
  - `computerNetworkPyq.json` (98KB): OSI model, TCP/IP, IP addressing, and routing.
  - `networkSecurityCloudPyq.json` (86KB): Cloud fundamentals and network security.
  - `cloudFundamentalsPyq.json` (86KB): Cloud deployment models, virtualization, and storage.
  - `mixedPyq.json` (56KB): Comprehensive multi-topic mock paper.
- Topic Modules: `networkQuestions.js` (189KB), `networkSecurityQuestions.js` (207KB), `cloudQuestions.js` (126KB), `devopsQuestions.js` (70KB), `oopQuestions.js` (73KB), `wifiSecurityQuestions.js` (54KB), `javaTopics.js` (49KB), `cheatSheets.js` (23KB), `dailyChallenges.js` (20KB), `interviewQuestions.js` (91KB), `pyqBanks.js` (13KB).

---

### 2.6 Core Services (`src/services/` - 10 Files)

- `judge0Service.js` (67KB): REST client for the Judge0 CE API; normalizes stdout, handles numeric decimal formatting, and verifies outputs against expected results.
- `dsaPracticeHarness.js` (116KB): Language-specific code wrapper generating compilable programs across Python, Java, C++, C#, and JavaScript.
- `technicalMcqEngine.js` (26KB): Scoring engine and section validator for 45-question technical assessments.
- `readinessEngine.js` (16KB): Calculates placement readiness percentage using difficulty weights and mock scores.
- `gamificationService.js` (9KB): XP, streaks, level progression, and badge reward calculator.
- `mockTestService.js` (6KB): Generates randomized mock papers from question banks.
- `telemetryService.js` (5KB): Tracks user solve speed, hints opened, and attempt counts.
- `recommendationEngine.js` (4KB): Analyzes user history and recommends the next best challenge.
- `mistakesStorage.js` (2KB): Manages failed question logging for revision.
- `bookmarksStorage.js` (1.9KB): Manages saved questions list.

---

### 2.7 Utilities Directory (`src/utils/` - 24 Files)

- `sqlEngine.js` (12KB): Loads `sql-wasm.wasm`, creates isolated databases per question, and polyfills MySQL functions (`CONCAT`, `REGEXP`).
- `dsaCodeTemplates.js` (12KB): Boilerplate starter code for algorithmic questions.
- `sandbox.js` (5.4KB): Compiles HTML, CSS, JS, and assertion scripts into an iframe `srcDoc`.
- `audio.js` (5KB): Web Audio API sound generator for game buzzers, ticks, and completion chimes.
- `storage.js` (4.7KB): Central localStorage helper managing user code bundles and active IDs.
- `cognitiveStorage.js` (5.8KB): Scores and percentiles for cognitive games.
- `msOfficeStorage.js`, `devopsStorage.js`, `networkStorage.js`, `networkSecurityStorage.js`, `cloudStorage.js`, `cloudSecurityStorage.js`, `oopStorage.js`, `wifiSecurityStorage.js`, `pseudocodeStorage.js`, `javaStorage.js`: Isolated storage controllers for topic quizzes.
- `sqlStorage.js` (3KB): Stores SQL query drafts and completed question IDs.
- `sqlFormatter.js` (3.6KB): SQL query syntax beautifier.
- `sqlMarkdown.js` (3.2KB): Renders formatted explanations for database queries.
- `confirmToast.jsx` (3.1KB): Custom confirmation prompt for destructive actions.
- `visitorSession.js` (1.3KB): Generates anonymous session tokens for telemetry.

---

### 2.8 Test Suites Directory (`src/tests/` - 12 Files)

Contains automated DOM unit testing suites for the 10 frontend challenges:
- `testDefinitions.js` (26KB): Assertion specifications and test expectations.
- `question1.test.js` to `question10.test.js`: Individual unit tests asserting DOM mutations, event listeners, input changes, and styling rules.
- `index.js`: Test runner export aggregator.


---

## 3. Current Website Implementation (What is Live Today)

### 3.1 Complete 38-Page Routing Catalog

The platform currently includes 38 functional pages mapped in [`src/App.jsx`](file:///d:/Project/Accenture/src/App.jsx):

```text
┌──────────────────────┬────────────────────────────────┬────────────────────────────────────────────────────────┐
│ URL Route            │ React Page Component           │ Core Purpose & Functionality                           │
├──────────────────────┼────────────────────────────────┼────────────────────────────────────────────────────────┤
│ /                    │ Home.jsx                       │ Landing page with hero banner, features & stats        │
│ /dashboard           │ Dashboard.jsx                  │ User readiness score, streak tracker & progress hub    │
│ /learn               │ LearningHubPage.jsx            │ Curriculum directory across technical topics           │
│ /learn/dsa           │ DsaPatternsPage.jsx            │ Algorithmic patterns deep dive & visual examples       │
│ /learn/cheat-sheets  │ CheatSheetsPage.jsx            │ Fast-revision flashcards and syntax cheatsheets        │
│ /java-learning       │ JavaLearningPage.jsx           │ Core Java roadmap, quizzes & concepts                  │
│ /practice            │ Practice.jsx                   │ Interactive Frontend DOM code editor & test suite      │
│ /dsa-practice        │ DsaPracticePage.jsx            │ DSA Monaco editor + Judge0 remote compilation runner   │
│ /bookmarks           │ BookmarksPage.jsx              │ Saved questions repository for quick review            │
│ /mistakes            │ MistakesPage.jsx               │ Error revision notebook logging failed submissions     │
│ /daily-challenge     │ DailyChallengePage.jsx         │ 24-hour expiring challenge with streak rewards         │
│ /mock-test           │ MockAssessmentPage.jsx         │ Customizable exam simulator with timed sections        │
│ /history             │ ScoreHistoryPage.jsx           │ Past test score reports and historical attempts        │
│ /analytics           │ AnalyticsPage.jsx              │ Radar charts, accuracy rates & topic breakdown         │
│ /achievements        │ AchievementsPage.jsx           │ Badges, level milestones, and XP progression           │
│ /interview           │ InterviewPrepPage.jsx          │ Technical & HR interview simulator with tips           │
│ /roadmap             │ PreparationRoadmapPage.jsx     │ 30-day structured study plan for placements            │
│ /pseudocode          │ PseudocodePage.jsx             │ Bitwise operator & control flow calculation questions  │
│ /sql-assessment      │ SQLAssessmentPage.jsx          │ In-browser SQLite WASM interactive query challenge     │
│ /cloud-assessment    │ CloudAssessmentPage.jsx        │ Cloud computing MCQ test suite                         │
│ /cloud-security      │ CloudSecurityPage.jsx          │ AWS/Azure cloud security topic test                    │
│ /network-assessment  │ NetworkAssessmentPage.jsx      │ Computer networks exam simulator                       │
│ /network-security    │ NetworkSecurityPage.jsx        │ Cyber security and network defense MCQs                │
│ /wifi-security       │ WifiSecurityPage.jsx           │ Wireless security and encryption assessment            │
│ /oop-assessment      │ OopAssessmentPage.jsx          │ Object-oriented programming concept quizzes            │
│ /devops-assessment   │ DevOpsAssessmentPage.jsx       │ CI/CD pipelines, Docker and Git MCQ test               │
│ /ms-office-assessment│ MsOfficeAssessmentPage.jsx     │ Excel formulas, Word shortcuts & PowerPoint quizzes    │
│ /technical-assessment│ TechnicalAssessmentPage.jsx    │ 45-Question timed mock exam simulating Accenture test  │
│ /pyq/:bankId         │ PYQExamPage.jsx                │ Past paper examination portal with question palette    │
│ /important-questions │ ImportantQuestionsPage.jsx     │ High-yield PYQ Set 1 with detailed answers             │
│ /important-questions-2│ImportantQuestionsSet2Page.jsx │ High-yield PYQ Set 2 with step-by-step solutions      │
│ /recent-questions    │ RecentQuestionsPage.jsx        │ Dated placement questions with filters (DSA, SQL, FE)  │
│ /cognitive           │ CognitiveDashboard.jsx         │ Cognitive assessment portal & game selection           │
│ /cognitive/full-mock │ FullCognitiveMock.jsx          │ Combined multi-game timed cognitive assessment         │
│ /cognitive/memory-maze│MemoryMazePage.jsx             │ Spatial memory and grid recall game                    │
│ /cognitive/math-bubble│MathBubblePage.jsx             │ Rapid arithmetic calculation mini-game                 │
│ /cognitive/results   │ CognitiveResults.jsx           │ Cognitive percentile and speed/accuracy breakdown      │
└──────────────────────┴────────────────────────────────┴────────────────────────────────────────────────────────┘
```

---

### 3.2 The 3 Interactive Code & Test Engines

```text
1. Frontend Coding Sandbox (Practice.jsx)
   - Code Input: HTML, CSS, JavaScript in Monaco Editor
   - Sandboxing: Invisible <iframe sandbox="allow-scripts">
   - Test Runner: Injects custom assertion script into iframe DOM
   - Feedback: Real-time visual comparison (Expected vs Received)

2. In-Browser SQL Engine (SQLAssessmentPage.jsx)
   - Engine: sql.js WebAssembly SQLite singleton
   - Isolation: Generates an in-memory database per question
   - Polyfills: Custom CONCAT and REGEXP functions in SQLite
   - Verification: Compares result matrix, column headers & rows against solution query

3. DSA Execution Runner (DsaPracticePage.jsx)
   - Languages: Python (3.8), Java (13), C++ (GCC 9), C# (Mono 6), JavaScript (Node 12)
   - API: Judge0 Community Edition (https://ce.judge0.com)
   - Harness: Automatically wraps user algorithm in I/O driver
   - Matcher: Structural JSON comparison + floating point tolerance (1e-6)
```

---

### 3.3 Timed PYQ & Technical Assessment Engines
- **Accenture 45-Question Technical Mock (`/technical-assessment`)**:
  - 45 timed questions covering Cognitive, Technical MCQs, Pseudocode, and Cloud.
  - Sectional navigation palette with question flags (Mark for Review, Answered, Unvisited).
  - Final score report with sectional accuracy radar.
- **Exam-Style PYQ Portal (`/pyq/:bankId`)**:
  - Supports 6 distinct question banks (`msOfficePyqFull`, `dsaOsSqlMcq`, `computerNetworkPyq`, `cloudFundamentalsPyq`, `networkSecurityCloudPyq`, `mixedPyq`).
  - Full-screen proctored assessment simulation with countdown timer and automated submission on expiration.

---

### 3.4 Cognitive Assessment Mini-Games
1. **Math Bubble (`/cognitive/math-bubble`)**:
   - Tests numerical calculation speed under time constraints.
   - Generates random arithmetic equations where users pop floating bubbles with correct values.
   - Tracks reaction time, correct streak multipliers, and accuracy.
2. **Memory Maze (`/cognitive/memory-maze`)**:
   - Tests visual and spatial recall.
   - Lights up an N×N tile pattern for 2.5 seconds before hiding it.
   - Evaluates memory retention and pattern reconstruction accuracy.

---

### 3.5 Real-Time Presence & Telemetry System
- **WebSocket Presence**: When a user opens any page, `src/hooks/useLiveViewer.js` establishes a WebSocket link to `server/presenceServer.js` on `/ws`.
- **Live Counters**: Displays active concurrent learners on headers and landing page badges.
- **Telemetry Logger**: `src/services/telemetryService.js` logs problem open timestamps, solve times, and hint clicks.

---

### 3.6 Gamification, Readiness & Local Storage Persistence
- **Readiness Score**: `src/services/readinessEngine.js` calculates placement probability (0-100%) by weighting completed coding challenges, mock scores, and consistency.
- **XP & Streaks**: `src/services/gamificationService.js` awards XP for daily challenges and tracks consecutive solve streaks.
- **Offline Persistence**: Candidate code drafts, theme, test results, mistakes, and bookmarks are persistently stored in browser `localStorage`.

---

## 4. Current Runtime Execution Architecture & Data Flows

This section details how the current platform actually executes code, processes assessments, synchronizes state, and handles real-time traffic today.

---

### 4.1 Frontend DOM Code Execution Flow

```text
[User Code: HTML/CSS/JS] 
          │
          ▼
   [storage.js] ── (Persists draft to localStorage)
          │
          ▼
   [sandbox.js: buildSandboxSrcDoc()]
          │
          ├─► Injects HTML markup
          ├─► Injects CSS stylesheets
          ├─► Injects Candidate JavaScript
          └─► Injects Automated DOM Test Script
          │
          ▼
[Hidden <iframe sandbox="allow-scripts">]
          │
          ▼
[Synthetic Event Dispatcher]
  ├─► document.querySelector(...)
  ├─► fireEvent('click', button)
  ├─► fireEvent('input', inputElement)
  └─► Compare DOM state vs Expected Values
          │
          ▼
[window.parent.postMessage({ type: 'TEST_RESULTS', results })]
          │
          ▼
[Practice.jsx Message Listener]
          │
          ├─► setTestResults(results)
          ├─► mistakesStorage.recordMistake(...) (if failed)
          ├─► gamificationService.recordSolve(...) (if all passed)
          └─► Render Visual Badges in TestResults.jsx
```

---

### 4.2 In-Browser SQLite WASM Query Execution Flow

```text
[User Types SQL Query] ──► [SQLEditor.jsx (Monaco)]
                                   │
                                   ▼
                       [sqlEngine.js: getSQLInstance()]
                                   │
                     (Lazily loads /sql-wasm.wasm)
                                   │
                                   ▼
                      [createIsolatedDB(question, dataset)]
                                   │
   ├─► Spawns ephemeral in-memory SQLite database: new SQL.Database()
   ├─► Registers MySQL polyfill functions: CONCAT(), REGEXP()
   ├─► Executes DDL schema: CREATE TABLE ...
   └─► Seeds table rows with mock records: INSERT INTO ...
                                   │
                                   ▼
                      [Execute User Query & Solution Query]
                                   │
   ├─► db.exec(userSql) ──────► userResult { columns, values }
   └─► db.exec(solutionSql) ──► solutionResult { columns, values }
                                   │
                                   ▼
                      [runAssessmentTests() Assertion Matcher]
                                   │
   ├─► Column header equality test (case-insensitive)
   ├─► Row count verification
   ├─► Tuple-by-tuple value comparison (float tolerance 1e-4)
   └─► Unordered row sorting comparison (when ORDER BY is optional)
                                   │
                                   ▼
             [Render SQLResultPanel.jsx & SQLTestResults.jsx]
```

---

### 4.3 Judge0 DSA Remote Code Execution Flow

```text
[User Selects Language: Python | Java | C++ | C# | JavaScript]
                               │
                               ▼
        [dsaPracticeHarness.js: buildJudge0Harness()]
                               │
  ├─► Injects user algorithm class/function
  ├─► Injects standard I/O reader & JSON parser
  ├─► Loads test cases from dsaTestCases.js (inputs & expected outputs)
  └─► Emits unified execution script printing `TEST_RES: <payload>`
                               │
                               ▼
            [Judge0 Community Edition REST Endpoint]
           POST https://ce.judge0.com/submissions?wait=true
                               │
  Payload: {
    source_code: base64(harnessCode),
    language_id: JUDGE0_LANGUAGE_IDS[lang],
    stdin: base64(testInput)
  }
                               │
                               ▼
                  [Judge0 Docker Execution Sandbox]
                               │
                               ▼
             [Output Parsing & Tolerant Assertion Engine]
                               │
  ├─► parseTestResPayload(): Preserves formatted decimal literals ("12.00")
  ├─► normalizeOutput(): Strips carriage returns, extra spaces, bracket noise
  └─► outputsMatch(): Structural JSON compare + epsilon float comparison (1e-6)
                               │
                               ▼
               [Display Results in DsaPracticePage.jsx]
```

---

### 4.4 Timed Technical & PYQ Mock Exam Lifecycle

```text
1. Initialization:
   - User navigates to `/technical-assessment` (45 MCQs) or `/pyq/:bankId` (Past Exam Papers).
   - `technicalMcqEngine.js` or `pyqBanks.js` loads question arrays and initializes timer.

2. Exam Session:
   - Active question index maintained in React component state.
   - Question Palette tracks question status:
     • Unvisited (Gray)
     • Answered (Green)
     • Marked for Review (Purple)
     • Answered & Marked for Review (Blue)
   - Countdown timer (`Timer.jsx`) runs with auto-submit watchdog at 00:00.

3. Submission & Evaluation:
   - Auto-calculates total score, correct count, negative markings, and time taken.
   - Classifies weak vs strong domains (Cloud, NetSec, MS Office, Pseudocode).
   - Generates score report with topic accuracy breakdowns.
   - Logs incorrect answers into `mistakesStorage.js` for revision.
```

---

### 4.5 Real-Time WebSocket Presence Flow

```text
[Client Opens Any Page]
          │
          ▼
[useLiveViewer('website') Hook Initializes]
          │
          ├─► Resolves WebSocket URL: ws://localhost:3001/ws or wss://domain/ws
          ├─► Opens persistent WebSocket connection
          │
          ▼
[server/presenceServer.js on Connection]
          │
          ├─► Assigns connection to requested channel ('website')
          ├─► Increments active learner counter
          ├─► Broadcasts updated count: { type: 'COUNT_UPDATE', count: N }
          │
          ▼
[Client Heartbeat Loop]
          │
          ├─► Server pings client every 30 seconds
          ├─► Client responds with 'pong'
          └─► Inactive/closed sockets pruned automatically
          │
          ▼
[LiveViewer.jsx Component]
          │
          └─► Displays: "🟢 N learners currently practicing"
```

---

### 4.6 Client-Side Persistence Architecture

```text
Browser LocalStorage Namespace: 'frontend-assessment-*'
├── frontend-assessment-theme               -> 'dark' | 'light'
├── frontend-assessment-active-question-id  -> Currently active question ID
├── frontend-practice-bundle-q{id}          -> Editable code bundle { js, html, css }
├── frontend-assessment-sql-draft-q{id}     -> SQL draft query
├── frontend-assessment-bookmarks           -> Array of saved question IDs
├── frontend-assessment-mistakes            -> Array of failed questions with diagnostic logs
├── frontend-assessment-gamification        -> { xp, streak, lastActiveDate, badges }
└── frontend-assessment-readiness           -> Probability score & completed milestones
```

> **Note on Future Architectural Evolution:**  
> For the enterprise multi-company expansion plan (Supabase integration, multi-tenant isolation, admin panels, and payment tiers), refer to the comprehensive architectural specification in **[docs/README.md](file:///d:/Project/Accenture/docs/README.md)**.

