// scratch/test_bubble_generator.js
import { generateQuestionSet, generateMathQuestion } from '../src/games/MathBubble/generator.js';

console.log('Testing Math Bubble Generator across Sets 1 to 5...\n');

let totalTested = 0;
let hasFractions = false;
let hasDecimals = false;
let hasIntegers = false;
let hasAdd = false;
let hasSub = false;
let hasMul = false;
let hasDiv = false;

for (let setNum = 1; setNum <= 5; setNum++) {
  const setQuestions = generateQuestionSet(setNum, 15);
  if (setQuestions.length !== 15) {
    throw new Error(`Set ${setNum} did not generate 15 questions, got ${setQuestions.length}`);
  }

  for (const q of setQuestions) {
    totalTested++;
    if (q.bubbles.length !== 3) {
      throw new Error(`Question ${q.id} does not have exactly 3 bubbles! Count: ${q.bubbles.length}`);
    }

    const vals = q.bubbles.map(b => b.value);
    if (vals.some(v => typeof v !== 'number' || isNaN(v))) {
      throw new Error(`Question ${q.id} has invalid/NaN values: ${JSON.stringify(vals)}`);
    }

    const uniqueVals = new Set(vals);
    if (uniqueVals.size !== 3) {
      throw new Error(`Question ${q.id} has duplicate values: ${JSON.stringify(vals)}`);
    }

    // Check operations and formats
    for (const b of q.bubbles) {
      if (b.expression.includes('/')) hasFractions = true;
      if (b.expression.includes('.')) hasDecimals = true;
      if (!b.expression.includes('/') && !b.expression.includes('.')) hasIntegers = true;

      if (b.expression.includes('+')) hasAdd = true;
      if (b.expression.includes('-')) hasSub = true;
      if (b.expression.includes('×') || b.expression.includes('*')) hasMul = true;
      if (b.expression.includes('÷') || b.expression.includes('/')) hasDiv = true;
    }
  }

  console.log(`✓ Set ${setNum}: Successfully generated 15 questions with exactly 3 unique bubbles each.`);
}

console.log('\n--- Format & Operator Distribution ---');
console.log(`Fractions present: ${hasFractions ? 'YES ✓' : 'NO ✗'}`);
console.log(`Decimals present: ${hasDecimals ? 'YES ✓' : 'NO ✗'}`);
console.log(`Integers present: ${hasIntegers ? 'YES ✓' : 'NO ✗'}`);
console.log(`Addition (+) present: ${hasAdd ? 'YES ✓' : 'NO ✗'}`);
console.log(`Subtraction (-) present: ${hasSub ? 'YES ✓' : 'NO ✗'}`);
console.log(`Multiplication (×) present: ${hasMul ? 'YES ✓' : 'NO ✗'}`);
console.log(`Division (÷) present: ${hasDiv ? 'YES ✓' : 'NO ✗'}`);
console.log(`\nTotal questions generated and verified: ${totalTested} / 75 questions.`);

// Sample display
console.log('\n--- Sample Question Expressions ---');
const sampleQ = generateMathQuestion(3, 1);
sampleQ.bubbles.forEach((b, idx) => {
  console.log(`  Bubble ${idx + 1}: ${b.expression} (value = ${b.value})`);
});
console.log(`  Sorted Answers: ${sampleQ.sortedAnswers.join(' < ')}`);
console.log('\nAll tests passed with 100% success!');
