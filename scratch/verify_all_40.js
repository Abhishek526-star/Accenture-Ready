import { sqlQuestions } from '../src/data/sqlQuestions.js';
import { sqlViewSchemas } from '../src/data/sqlSchemas.js';
import { runAssessmentTests } from '../src/utils/sqlEngine.js';

async function main() {
  console.log(`Verifying SQL Suite... Total Questions: ${sqlQuestions.length}`);
  console.log(`Total View Schemas: ${Object.keys(sqlViewSchemas).length}`);

  if (sqlQuestions.length !== 40) {
    throw new Error(`Expected 40 questions, got ${sqlQuestions.length}`);
  }

  let totalPassedTests = 0;
  let totalTests = 0;

  for (let i = 0; i < sqlQuestions.length; i++) {
    const q = sqlQuestions[i];
    const res = await runAssessmentTests(q, q.solution);
    totalTests += res.totalCount;
    totalPassedTests += res.passedCount;

    if (!res.allPassed) {
      console.error(`FAILED: Question ${q.id} (${q.title}) - ${res.passedCount}/${res.totalCount} passed`);
      console.error(res.results.filter(t => !t.passed));
      throw new Error(`Question ${q.id} failed test suite`);
    } else {
      console.log(`[PASS] ${q.id} (Q${i+1}): ${q.title} (${res.passedCount}/${res.totalCount} passed)`);
    }
  }

  console.log(`\nALL 40 QUESTIONS PASSED! Total Tests: ${totalPassedTests}/${totalTests} (100% SUCCESS)`);
}

main().catch(err => {
  console.error("Verification failed:", err);
  process.exit(1);
});
