import { writeFileSync } from 'fs';
import { pseudocodeQuestions as Q, PSEUDOCODE_SETS, PSEUDOCODE_TOPICS, PSEUDOCODE_HANDBOOK } from '../src/data/pseudocodeQuestions.js';

const opts = ['A', 'B', 'C', 'D', 'E'];
const esc = (s) => String(s).replace(/`/g, '\\`');

let md = `# Accenture Pseudocode Round — Practice Question Bank\n\n> **Extracted from:** \`src/data/pseudocodeQuestions.js\`\n> **Total Questions:** ${Q.length} across ${PSEUDOCODE_SETS.length} sets\n\n---\n\n## Overview\n\n| Set | Badge | Description | Questions |\n|-----|-------|-------------|-----------|\n`;
for (const s of PSEUDOCODE_SETS) {
  md += `| ${s.name} | ${s.badge} | ${s.description} | ${s.questionCount} |\n`;
}
md += `\n**Topics covered:**\n\n`;
for (const t of PSEUDOCODE_TOPICS) md += `- **${t.label}** (\`${t.id}\`)\n`;

md += `\n---\n\n## Operator Handbook (Quick Reference)\n\n`;
for (const sec of PSEUDOCODE_HANDBOOK.sections) {
  md += `### ${sec.heading}\n\n`;
  for (const line of sec.content) md += `- ${line}\n`;
  md += `\n`;
}

for (const set of PSEUDOCODE_SETS) {
  const qs = Q.filter(q => q.set === set.id).sort((a, b) => a.qno - b.qno);
  md += `\n---\n\n# ${set.name} (${qs.length} Questions)\n\n`;
  md += qs.map(q => {
    let s = `## ${q.title}\n\n`;
    s += `- **ID:** \`${q.id}\`\n- **Difficulty:** ${q.difficulty}\n- **Topic:** ${q.topic}\n\n`;
    s += `### Pseudocode\n\n\`\`\`\n${esc(q.pseudocode)}\n\`\`\`\n\n`;
    s += `### Options\n\n`;
    q.options.forEach((o, i) => {
      const mark = i === q.correctAnswer ? ' :white_check_mark:' : '';
      s += `- **${opts[i]}.** ${o}${mark}\n`;
    });
    s += `\n### Correct Answer: ${opts[q.correctAnswer]}. ${q.options[q.correctAnswer]}\n\n`;
    s += `### Explanation\n\n\`\`\`text\n${esc(q.explanation)}\n\`\`\`\n\n`;
    if (q.stepTrace && q.stepTrace.length) {
      s += `### Step-by-Step Trace\n\n| Line | Code | Variables | Note |\n|------|------|-----------|------|\n`;
      for (const t of q.stepTrace) {
        s += `| ${t.line} | \`${esc(t.code)}\` | \`${esc(Object.entries(t.variables).map(([k, v]) => `${k}=${v}`).join(', '))}\` | ${t.note} |\n`;
      }
      s += `\n`;
    }
    return s;
  }).join('\n---\n\n');
}

md += `
---

# Design, Architecture & Styling of the Pseudocode Round

## 1. Architecture

The Pseudocode Round is served at /pseudocode (with /pseudo redirecting to it) by src/pages/PseudocodePage.jsx.

### Component stack

| Layer | File | Responsibility |
|-------|------|----------------|
| Page | src/pages/PseudocodePage.jsx | State orchestration, practice/exam modes, timer, scorecard |
| Tracer | src/components/pseudocode/PseudocodeTracer.jsx | Interactive step-by-step execution trace viewer |
| Handbook | src/components/pseudocode/PseudocodeHandbookModal.jsx | Modal overlay with operator-precedence quick reference |
| Scratchpad | src/components/pseudocode/PseudocodeScratchpad.jsx | Free-form rough-work area during tracing |
| Data | src/data/pseudocodeQuestions.js | Question bank (38 PYQs), topic list, set metadata, handbook content, filterPseudocodeQuestions() helper |
| Persistence | src/utils/pseudocodeStorage.js | pseudocodeStorage — answers, bookmarks and exam results (localStorage) |
| SEO | src/components/SEO.jsx + src/config/seo.js | seoConfig.pseudocode meta tags |

### Data flow

1. PSEUDOCODE_SETS renders set tabs (Set 1: 18 Qs, Set 2: 20 Qs).
2. filterPseudocodeQuestions({ topic, set }) produces the active question list (memoized with useMemo).
3. Topic selection syncs to the URL via useSearchParams (?topic=..., replace: true).
4. Selecting an option calls pseudocodeStorage.saveAnswer() then React state refreshes from storage.
5. Exam mode: timer = questions x 2 minutes; on expiry or Finish, handleFinishExam() computes score %, correct count and time used, then persists via pseudocodeStorage.saveExamResult().
6. Practice mode: immediate per-option feedback with explanation and interactive trace.

### State model (PseudocodePage)

- activeTopic — current topic filter (URL-synced)
- selectedSet — 'set-1' | 'set-2'
- mode — 'practice' | 'exam'
- currentIndex — active question pointer
- userAnswers / bookmarks — hydrated from pseudocodeStorage
- examRemainingSeconds / examFinished / examScorecard — exam-mode lifecycle

## 2. Styling & CSS Approach

The page uses no dedicated CSS file. Styling is a hybrid of:

1. Inline React style objects — the dominant approach for the page banner, set tabs, mode switcher, buttons, and question cards. Self-contained, theme-aware styling without class collisions.
2. Tailwind utility classes — used in supporting components (e.g., Navbar: text-amber-400) and layout helpers.
3. Semantic container class — root wrapper div.pseudocode-page-container for page-level scoping.

### Key visual tokens (dark theme)

| Token | Value | Usage |
|-------|-------|-------|
| Banner background | linear-gradient(135deg, rgba(30,41,59,.95), rgba(15,23,42,.98)) | Top hero banner |
| Accent (amber) | #eab308 / #facc15 | Badges, handbook button, borders |
| Panel base | #0f172a | Buttons, segmented controls |
| Border neutral | #334155 | Mode switcher container |
| Practice active | #0284c7 (sky) | Practice-mode pill |
| Exam active | #ea580c (orange) | Exam-mode pill |
| Text primary / muted | #f8fafc / #94a3b8 | Headings / descriptions |
| Radii | 20px banner, 10-12px controls, 6-8px pills | Rounded system |

### Interaction & UX patterns

- Segmented Practice / Exam toggle inside a bordered pill container.
- Badge chip (amber, border-radius 12px) for TECHNICAL ROUND ASSESSMENT.
- Question navigation with ArrowLeft / ArrowRight icons.
- Bookmark toggle and option-level correct/incorrect feedback icons.
- Handbook opens as a modal overlay; Scratchpad available during tracing.
- Fully responsive via flexWrap wrap on all major rows.
`;

writeFileSync(new URL('../docs/pseudocode-round.md', import.meta.url), md);
console.log('Wrote docs/pseudocode-round.md with', Q.length, 'questions');
