import { writeFileSync } from 'fs';
import { sqlQuestions as Q } from '../src/data/sqlQuestions.js';
import { sqlViewSchemas } from '../src/data/sqlSchemas.js';

const esc = (s) => String(s ?? '').replace(/`/g, '\\`');
const mdTable = (rows) => {
  if (!rows.length) return '_(empty result set)_';
  const cols = Object.keys(rows[0]);
  let t = '| ' + cols.join(' | ') + ' |\n|' + cols.map(() => '---').join('|') + '|\n';
  for (const r of rows) t += '| ' + cols.map(c => String(r[c] ?? '').replace(/\|/g, '\\|')).join(' | ') + ' |\n';
  return t;
};

let md = `# Accenture SQL Assessment Round — Practice Question Bank\n\n> **Extracted from:** \`src/data/sqlQuestions.js\` (30 questions, 90 test cases) + \`src/data/sqlSchemas.js\`\n\n---\n\n## Overview\n\n| # | ID | Title | Difficulty | Duration (min) | Category | Tables |\n|---|----|-------|-----------|----------------|----------|--------|\n`;
Q.forEach((q, i) => {
  md += `| ${i + 1} | \`${q.id}\` | ${q.title} | ${q.difficulty} | ${q.duration} | ${q.category} | ${q.tableSchema.map(t => t.name).join(', ')} |\n`;
});

const diffCount = {};
Q.forEach(q => { diffCount[q.difficulty] = (diffCount[q.difficulty] || 0) + 1; });
md += `\n**Difficulty distribution:** ${Object.entries(diffCount).map(([d, c]) => `${d} = ${c}`).join(' | ')}\n`;
const catCount = {};
Q.forEach(q => { catCount[q.category] = (catCount[q.category] || 0) + 1; });
md += `\n**Category distribution:**\n\n| Category | Questions |\n|----------|-----------|\n`;
for (const [c, n] of Object.entries(catCount)) md += `| ${c} | ${n} |\n`;

// ----- Schema Design section -----
md += `\n---\n\n# Schema Design (Multi-Table View Schemas)\n\nFrom \`src/data/sqlSchemas.js\` — 30 schema families (one per question) shown in the Schema Modal:\n`;
for (const [key, schema] of Object.entries(sqlViewSchemas)) {
  md += `\n## Schema ${key}: ${schema.title} (${schema.tableCount} tables)\n\n`;
  for (const t of schema.tables) {
    md += `- **${t.name}**: ${t.columns.join(', ')}\n`;
  }
}

// ----- Questions section -----
for (const q of Q) {
  md += `\n---\n\n# ${q.id} — ${q.title}\n\n`;
  md += `- **Difficulty:** ${q.difficulty} | **Duration:** ${q.duration} min | **Category:** ${q.category}\n- **Expected Output Columns:** \`${(q.expectedColumns || []).join('`, `')}\`\n- **Order Sensitive:** ${q.orderSensitive ? 'Yes' : 'No'}\n\n`;
  md += `## Problem Statement\n\n${q.problem}\n\n`;
  md += `## Schema (DDL)\n\n`;
  for (const t of q.tableSchema) {
    md += `**Table \`${t.name}\`**\n\n| Column | Type | Primary Key |\n|--------|------|-------------|\n`;
    for (const c of t.columns) md += `| ${c.name} | ${c.type} | ${c.primaryKey ? 'YES' : ''} |\n`;
    md += `\n`;
  }
  if (q.examples && q.examples.length) {
    md += `## Example\n\n`;
    for (const ex of q.examples) {
      md += `### ${ex.title}\n\n**Input:**\n\n`;
      for (const [tbl, rows] of Object.entries(ex.input)) {
        md += `Table \`${tbl}\`:\n\n${mdTable(rows)}\n`;
      }
      md += `**Expected Output:**\n\n${mdTable(ex.output)}\n${ex.explanation ? `\n> ${ex.explanation}\n` : ''}`;
    }
  }
  md += `\n## Solution\n\n\`\`\`sql\n${esc(q.solution)}\n\`\`\`\n\n`;
  md += `## Explanation\n\n${q.explanation}\n\n`;
  if (q.notes && q.notes.length) {
    md += `## Notes / Hints\n\n${q.notes.map(n => `- ${n}`).join('\n')}\n\n`;
  }
  md += `## Test Cases (${(q.testCases || []).length})\n\n`;
  for (const tc of (q.testCases || [])) {
    md += `### ${tc.name} ${tc.isHidden ? '_(hidden)_' : '_(visible)_'}\n\n- **ID:** \`${tc.id}\`\n\n**Input Dataset:**\n\n`;
    for (const [tbl, rows] of Object.entries(tc.data)) {
      md += `Table \`${tbl}\`:\n\n${mdTable(rows)}\n`;
    }
    md += `**Expected Output:**\n\n${mdTable(tc.expected)}\n`;
  }
}

// ----- Design & Architecture section -----
md += `
---

# Design, Architecture, Styling & Test Infrastructure

## 1. Architecture

The SQL Round is served at the SQL assessment route by \`src/pages/SQLAssessmentPage.jsx\` (649 lines).

### Component stack

| Layer | File | Responsibility |
|-------|------|----------------|
| Page | \`src/pages/SQLAssessmentPage.jsx\` | Question navigation, editor state, run/test orchestration, storage sync |
| Question Panel | \`src/components/sql/SQLQuestionPanel.jsx\` | Problem statement (markdown), schema tabs, solution viewer, schema modal |
| Editor | \`src/components/sql/SQLEditor.jsx\` | SQL code editor for the candidate query |
| Example Viewer | \`src/components/sql/SQLExampleViewer.jsx\` | Sample input/output rendering |
| Result Panel | \`src/components/sql/SQLResultPanel.jsx\` | Query output grid |
| Test Results | \`src/components/sql/SQLTestResults.jsx\` | Visible + hidden test-case pass/fail report |
| Results Modal | \`src/components/sql/SQLResultsModal.jsx\` | Final assessment summary overlay |
| Schema Modal | \`src/components/sql/SQLSchemaModal.jsx\` + \`.css\` | Floating-window ER/schema browser |
| Schema Viewer | \`src/components/sql/SQLSchemaViewer.jsx\` | Inline schema tables |
| ER Diagram | \`src/components/sql/DatabaseERDiagram.jsx\` + \`.css\` | Visual entity-relationship diagram |
| Solution Viewer | \`src/components/sql/SQLSolutionViewer.jsx\` | Reference solution display |
| Rich Text | \`src/components/sql/SqlRichText.jsx\` | Markdown renderer for problems |
| Engine | \`src/utils/sqlEngine.js\` (390 lines) | sql.js (SQLite WASM) execution & result comparison |
| Storage | \`src/utils/sqlStorage.js\` | Drafts, solutions, results, completed-set in localStorage |
| Data | \`src/data/sqlQuestions.js\`, \`src/data/sqlSchemas.js\` | 30 questions / 90 test cases; 30 schema families |

### Execution pipeline (sqlEngine.js)

1. **Singleton init**: \`getSQLInstance()\` loads sql.js WASM once (\`/sql-wasm.wasm\`).
2. **Isolated DB**: \`createIsolatedDB(question, dataset)\` spins up \`new Database()\` per question/test.
3. **MySQL polyfills**: registers \`CONCAT\` and \`REGEXP\` custom SQLite functions for MySQL-style queries.
4. **DDL**: tables created from \`question.tableSchema\` (column name + type + PRIMARY KEY).
5. **Seeding**: dataset rows inserted with parameterized statements.
6. **Dual execution**: runs the candidate query AND the reference \`solution\`.
7. **Comparison**: compares column names, row counts, and value tuples (with floating-point tolerance); respects \`orderSensitive\` flag.
8. \`runAssessmentTests()\` loops all test cases (visible + hidden) and returns per-case pass/fail.

### Data flow

1. URL query param selects the active question (\`?q=sql-XXX\`).
2. Draft code auto-saved to localStorage per question (\`sql-answer-<id>\`, with legacy-starter-code guard); solved solutions cached under \`sql-solution-<id>\`.
3. Run button executes against the visible dataset; Test button runs \`runAssessmentTests()\` for all 3 cases.
4. Completion state tracked in \`sql-completed-questions\`; aggregate results in \`sql-assessment-results\`.

## 2. Schema Design

- Questions carry self-contained \`tableSchema\` (1–8 tables) rendered as DDL and ER diagrams.
- \`sqlSchemas.js\` defines 30 schema families (keys 1-30, one per question) shown in the Schema Modal (Banking & Transactions 6T, Employee Payroll 4T, E-Commerce Orders 8T, etc.), shared across questions via the schema modal tabs.

## 3. Styling & CSS Approach

Hybrid styling:

1. **Inline React style objects** — dominant for page banner, nav dots, panels (\`#090e1d\` panels, \`#1e293b\` borders, \`linear-gradient(145deg, #0b1329, #0f1c3a)\` cards, sky accent \`#38bdf8\`, text \`#f8fafc\` / \`#94a3b8\`).
2. **Dedicated CSS files** — \`SQLSchemaModal.css\` (fixed overlay, \`backdrop-filter: blur(8px)\`, \`@keyframes modalFadeIn\` / \`windowScaleUp\` floating-window aesthetic) and \`DatabaseERDiagram.css\` for the ER diagram.
3. **Global utility classes** — \`btn btn-secondary btn-sm\`, \`q-nav-selector\`, \`q-nav-dots\` for navigation chrome.

### Key visual tokens

| Token | Value | Usage |
|-------|-------|-------|
| Sky accent | #38bdf8 / rgba(56,189,248,.12) | Highlights, active tabs |
| Panel | #090e1d / #090e1a | Cards, modal window |
| Border | #1e293b / #334155 | Panels, pills |
| Gradient card | linear-gradient(145deg, #0b1329, #0f1c3a) | Feature cards |
| Overlay | rgba(4,7,15,.75) + blur(8px) | Schema modal backdrop |
| Text | #f8fafc / #cbd5e1 / #94a3b8 | Headings / body / muted |

### UX patterns

- Horizontal \`q-nav-dots\` progress strip (auto-scrolls active dot into view).
- Run Query / Run Tests split with per-case pass/fail chips.
- Floating "iFrame-like" schema window with fade+scale entrance animations.
- Keyboard-free workflow: next/prev buttons with disabled boundary states.
`;
writeFileSync(new URL('../docs/sql-practice-round.md', import.meta.url), md);
console.log('Wrote docs/sql-practice-round.md with', Q.length, 'questions');
