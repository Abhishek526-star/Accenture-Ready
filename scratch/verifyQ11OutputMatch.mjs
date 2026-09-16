// Verification for the "Sum of Distance Between Three Points" (dsa-p-11) trailing-zero fix.
//
// Bug: judge0Service parsed `TEST_RES:` payloads with an inline JSON.parse, so a
// correctly formatted "12.00" became the number 12 and String(12) -> "12", which
// failed the strict string compare against the expected "12.00".
//
// Usage: node scratch/verifyQ11OutputMatch.mjs
import { parseTestResPayload, outputsMatch, normalizeOutput } from '../src/services/judge0Service.js';
import { DSA_PRACTICE_QUESTIONS } from '../src/data/dsaPracticeQuestions.js';

const question = DSA_PRACTICE_QUESTIONS.find((q) => q.id === 'dsa-p-11');
if (!question) throw new Error('dsa-p-11 not found in DSA_PRACTICE_QUESTIONS');

// Exactly what the Java harness for dsa-p-11 prints for the 5 test cases
// (see src/services/dsaPracticeHarness.js -> questionId === 'dsa-p-11').
const rawStdout = `TEST_RES:10.78
TEST_RES:12.00
TEST_RES:0.00
TEST_RES:12.00
TEST_RES:12.00`;

// Mirrors the stdout-parsing loop in judge0Service.executeDsaOnJudge0
const testOutputs = [];
for (const line of rawStdout.trim().split('\n')) {
  if (line.startsWith('TEST_RES:')) {
    testOutputs.push(parseTestResPayload(line.substring(9).trim()));
  }
}

// Mirrors the evaluation in DsaPracticePage.handleRunCode
const legacyParse = (raw) => {
  const val = String(raw ?? '').trim();
  try { return JSON.parse(val); } catch { return val; }
};

let passed = 0;
let legacyPassed = 0;

console.log('Q11:', question.title, '\n');
question.testCases.forEach((tc, idx) => {
  const expectedVal = String(tc.expectedOutput ?? tc.expected ?? '');
  const actual = String(testOutputs[idx] ?? '');
  const ok = outputsMatch(actual, expectedVal);

  // Proof the old parser produced the wrong value
  const oldActual = String(legacyParse(rawStdout.trim().split('\n')[idx].substring(9).trim()));
  const oldOk = normalizeOutput(oldActual) === normalizeOutput(expectedVal);

  if (ok) passed++;
  if (oldOk) legacyPassed++;

  console.log(
    `  TC${idx + 1} ${tc.name.padEnd(28)} expected=${expectedVal.padEnd(6)} actual=${actual.padEnd(6)} ` +
    `${ok ? 'PASS' : 'FAIL'}   | fixed-from-old-parser: actual=${oldActual.padEnd(6)} ${oldOk ? 'PASS' : 'FAIL'}`
  );
});

console.log(`\n  Before (JSON.parse) : ${legacyPassed}/${question.testCases.length} passed`);
console.log(`  After  (this fix)   : ${passed}/${question.testCases.length} passed`);

// Edge cases for the parser + matcher
const edgeCases = [
  ['12.00', '12.00', true, 'trailing zeros preserved'],
  ['0.00', '0.00', true, 'zero with 2 decimals'],
  ['-3.50', '-3.50', true, 'negative decimal'],
  ['12', '12.00', true, 'numeric tolerance'],
  ['12.5', '12.50', true, 'one decimal vs two'],
  ['0', '0.00', true, 'integer zero vs 0.00'],
  ['45.249999', '45.25', true, 'float noise within epsilon'],
  ['1.23', '1.24', false, 'real mismatch stays failed'],
  ['50', '25', false, 'different integers stay failed'],
  ['', '12.00', false, 'empty output stays failed'],
  ['[1, 2, 3]', '[1,2,3]', true, 'array formatting'],
  ['true', 'true', true, 'boolean payload'],
  ['hello i am a', 'Hello I am a', true, 'case/space normalization']
];

console.log('\n  Edge cases:');
let edgeFailures = 0;
for (const [actual, expected, want, label] of edgeCases) {
  const got = outputsMatch(actual, expected);
  if (got !== want) edgeFailures++;
  console.log(`    ${got === want ? 'ok  ' : 'BAD '} "${actual}" vs "${expected}" -> ${got} (want ${want})  [${label}]`);
}

const structured = parseTestResPayload('[1, 2, 3]');
const structuredOk = Array.isArray(structured) && structured.length === 3;
const booleanOk = parseTestResPayload('true') === true;
console.log(`\n  Structured payload preserved: array=${structuredOk} boolean=${booleanOk}`);

const allGood = passed === question.testCases.length && edgeFailures === 0 && structuredOk && booleanOk;
console.log(`\n  RESULT: ${allGood ? 'ALL CHECKS PASSED' : 'CHECKS FAILED'}`);
process.exit(allGood ? 0 : 1);