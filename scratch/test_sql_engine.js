// scratch/test_sql_engine.js
import { sqlQuestions } from '../src/data/sqlQuestions.js';
import { runAssessmentTests } from '../src/utils/sqlEngine.js';

async function runAll18QuestionsTests() {
  console.log(`Testing all ${sqlQuestions.length} SQL Questions in the Question Bank...\n`);

  let totalQuestionsPassed = 0;
  let totalTestsPassed = 0;
  let totalTestsCount = 0;

  for (let i = 0; i < sqlQuestions.length; i++) {
    const q = sqlQuestions[i];
    if (!q.solution) {
      console.error(`Missing solution for question ${q.id}: ${q.title}`);
      process.exit(1);
    }

    const res = await runAssessmentTests(q, q.solution);
    totalTestsPassed += res.passedCount;
    totalTestsCount += res.totalCount;

    if (res.allPassed) {
      totalQuestionsPassed++;
      console.log(`[PASS] (${i + 1}/${sqlQuestions.length}) ${q.id}: ${q.title} — ${res.passedCount}/${res.totalCount} tests passed`);
    } else {
      console.error(`[FAIL] (${i + 1}/${sqlQuestions.length}) ${q.id}: ${q.title} — ${res.passedCount}/${res.totalCount} tests passed`);
      res.testResults.filter(t => !t.passed).forEach(t => {
        console.error(`       ✕ ${t.name}: ${t.message}`);
      });
    }
  }

  console.log(`\n======================================================`);
  console.log(`Overall Result: ${totalQuestionsPassed}/${sqlQuestions.length} Questions 100% Passed`);
  console.log(`Total Test Cases: ${totalTestsPassed}/${totalTestsCount} Passed (${Math.round(totalTestsPassed / totalTestsCount * 100)}%)`);
  console.log(`======================================================`);

  if (totalQuestionsPassed !== sqlQuestions.length) {
    process.exit(1);
  }
}

runAll18QuestionsTests().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
