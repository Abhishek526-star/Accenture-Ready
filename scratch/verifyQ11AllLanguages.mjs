// Multi-language end-to-end verification for dsa-p-11.
// For each language: build the real harness via the app's builder using the
// question's own reference solution, execute it with the local toolchain,
// then parse the actual stdout with the FIXED parser and compare with the
// question's expected outputs using outputsMatch.
// Usage: node scratch/verifyQ11AllLanguages.mjs
import { execFileSync } from 'node:child_process';
import { writeFileSync, rmSync, existsSync } from 'node:fs';
import { execFileSync as runSync } from 'node:child_process';
import { parseTestResPayload, outputsMatch } from '../src/services/judge0Service.js';
import { buildDsaPracticeHarness } from '../src/services/dsaPracticeHarness.js';
import { DSA_PRACTICE_QUESTIONS } from '../src/data/dsaPracticeQuestions.js';

const dir = new URL('./', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const question = DSA_PRACTICE_QUESTIONS.find((q) => q.id === 'dsa-p-11');

const opts = { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] };

const langs = [
  { lang: 'python', file: 'Q11py.py', run: () => runSync('python', [`${dir}Q11py.py`], opts) },
  { lang: 'cpp', file: 'Q11cpp.cpp', build: () => runSync('g++', ['-std=c++17', '-o', `${dir}Q11cpp.exe`, `${dir}Q11cpp.cpp`], opts), run: () => runSync(`${dir}Q11cpp.exe`, [], opts) },
  { lang: 'javascript', file: 'Q11js.js', run: () => runSync('node', [`${dir}Q11js.js`], opts) },
  { lang: 'java', file: 'Main.java', build: () => runSync('javac', ['-d', dir, `${dir}Main.java`], opts), run: () => runSync('java', ['-cp', dir, 'Main'], opts) }
];

const legacyParse = (raw) => {
  const v = String(raw ?? '').trim();
  try { return JSON.parse(v); } catch { return v; }
};

let allOk = true;
for (const { lang, file, build, run } of langs) {
  const code = question.solutions[lang];
  const harness = buildDsaPracticeHarness('dsa-p-11', code, lang);
  writeFileSync(`${dir}${file}`, harness, 'utf8');

  let stdout;
  try {
    if (build) build();
    stdout = run();
  } catch (err) {
    console.log(`\n[${lang}] TOOLCHAIN/RUN ERROR: ${err.message.split('\n')[0]}`);
    allOk = false;
    continue;
  }

  const lines = stdout.trim().split('\n');
  const testOutputs = lines
    .filter((l) => l.startsWith('TEST_RES:'))
    .map((l) => parseTestResPayload(l.substring(9).trim()));

  let passed = 0;
  let legacyPassed = 0;
  const details = question.testCases.map((tc, idx) => {
    const expectedVal = String(tc.expectedOutput ?? tc.expected ?? '');
    const actual = String(testOutputs[idx] ?? '');
    const ok = outputsMatch(actual, expectedVal);
    if (ok) passed++;

    const legacyActual = String(legacyParse(lines[idx]?.substring(9).trim() ?? ''));
    const legacyOk = legacyActual === expectedVal;
    if (legacyOk) legacyPassed++;

    return `      TC${idx + 1} expected=${expectedVal.padEnd(6)} actual=${actual.padEnd(6)} ${ok ? 'PASS' : 'FAIL'} (old parser: "${legacyActual}" ${legacyOk ? 'PASS' : 'FAIL'})`;
  });

  if (passed !== question.testCases.length) allOk = false;
  console.log(`\n[${lang}] raw stdout: ${lines.join(' | ')}`);
  console.log(details.join('\n'));
  console.log(`    before=${legacyPassed}/5  after=${passed}/5`);
}

// cleanup generated sources/binaries
for (const f of ['Q11py.py', 'Q11cpp.cpp', 'Q11cpp.exe', 'Q11js.js', 'Main.java', 'Main.class', 'Solution.class']) {
  const p = `${dir}${f}`;
  if (existsSync(p)) rmSync(p, { force: true });
}

console.log(`\nRESULT: ${allOk ? 'ALL LANGUAGES 5/5 TEST CASES PASSED' : 'SOME CHECKS FAILED'}`);
process.exit(allOk ? 0 : 1);