// src/games/MathBubble/generator.js
/**
 * Math Bubble Question Generator
 * CRITICAL REQUIREMENTS:
 * 1. Exactly 3 bubbles per question.
 * 2. In each bubble: EXACTLY TWO OPERANDS AND ONE OPERATOR (e.g., A + B, A - B, A × B, A ÷ B).
 * 3. Operands can be integers, decimals, or fractions (using clean fractional symbols like ½, ¼, ¾, ⅖, ⅗, ⅘, ⅓, ⅔, ⅛).
 * 4. 7 Sets: Sets 1–5 (15 questions each, 15s timer) and Sets 6–7 (24 questions each, 14s timer, progressive difficulty).
 * 5. Strictly unique values for all 3 bubbles within a question (separation >= 0.2).
 * 6. Non-repeating uniqueness across all questions within a set.
 */

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundTo(num, decimals = 2) {
  const factor = Math.pow(10, decimals);
  return Math.round((num + Number.EPSILON) * factor) / factor;
}

// 4 Randomized spatial layout configurations for bubbles
const LAYOUT_PRESETS = [
  [
    { left: '50%', top: '24%', transform: 'translate(-50%, -50%)' },
    { left: '26%', top: '68%', transform: 'translate(-50%, -50%)' },
    { left: '74%', top: '68%', transform: 'translate(-50%, -50%)' }
  ],
  [
    { left: '28%', top: '30%', transform: 'translate(-50%, -50%)' },
    { left: '72%', top: '32%', transform: 'translate(-50%, -50%)' },
    { left: '50%', top: '72%', transform: 'translate(-50%, -50%)' }
  ],
  [
    { left: '32%', top: '26%', transform: 'translate(-50%, -50%)' },
    { left: '68%', top: '65%', transform: 'translate(-50%, -50%)' },
    { left: '30%', top: '75%', transform: 'translate(-50%, -50%)' }
  ],
  [
    { left: '70%', top: '28%', transform: 'translate(-50%, -50%)' },
    { left: '32%', top: '66%', transform: 'translate(-50%, -50%)' },
    { left: '68%', top: '74%', transform: 'translate(-50%, -50%)' }
  ]
];

// Curated fractions dataset (Two operands, One operator)
const FRACTION_PAIRS = [
  // Addition
  { text: '½ + ½', value: 1.0, aria: 'one half plus one half' },
  { text: '½ + ¾', value: 1.25, aria: 'one half plus three quarters' },
  { text: '¼ + ½', value: 0.75, aria: 'one quarter plus one half' },
  { text: '½ + 2', value: 2.5, aria: 'one half plus two' },
  { text: '¾ + ¾', value: 1.5, aria: 'three quarters plus three quarters' },
  { text: '⅖ + ⅗', value: 1.0, aria: 'two fifths plus three fifths' },
  { text: '⅕ + ⅖', value: 0.6, aria: 'one fifth plus two fifths' },
  { text: '¼ + ¾', value: 1.0, aria: 'one quarter plus three quarters' },
  { text: '½ + 3', value: 3.5, aria: 'one half plus three' },
  { text: '¾ + 1', value: 1.75, aria: 'three quarters plus one' },
  { text: '⅓ + ⅔', value: 1.0, aria: 'one third plus two thirds' },
  { text: '⅖ + 1', value: 1.4, aria: 'two fifths plus one' },
  { text: '⅗ + 2', value: 2.6, aria: 'three fifths plus two' },
  { text: '¼ + 2', value: 2.25, aria: 'one quarter plus two' },
  { text: '¾ + 2', value: 2.75, aria: 'three quarters plus two' },
  { text: '½ + 4', value: 4.5, aria: 'one half plus four' },

  // Subtraction
  { text: '3 - ½', value: 2.5, aria: 'three minus one half' },
  { text: '2 - ¼', value: 1.75, aria: 'two minus one quarter' },
  { text: '¾ - ¼', value: 0.5, aria: 'three quarters minus one quarter' },
  { text: '4 - ¾', value: 3.25, aria: 'four minus three quarters' },
  { text: '5 - ½', value: 4.5, aria: 'five minus one half' },
  { text: '1 - ⅖', value: 0.6, aria: 'one minus two fifths' },
  { text: '2 - ⅗', value: 1.4, aria: 'two minus three fifths' },
  { text: '3 - ¾', value: 2.25, aria: 'three minus three quarters' },
  { text: '1 - ¼', value: 0.75, aria: 'one minus one quarter' },
  { text: '4 - ½', value: 3.5, aria: 'four minus one half' },
  { text: '2 - ⅖', value: 1.6, aria: 'two minus two fifths' },

  // Multiplication
  { text: '½ × 16', value: 8, aria: 'one half times 16' },
  { text: '¾ × 12', value: 9, aria: 'three quarters times 12' },
  { text: '¼ × 24', value: 6, aria: 'one quarter times 24' },
  { text: '⅖ × 25', value: 10, aria: 'two fifths times 25' },
  { text: '⅗ × 20', value: 12, aria: 'three fifths times 20' },
  { text: '½ × 28', value: 14, aria: 'one half times 28' },
  { text: '¾ × 20', value: 15, aria: 'three quarters times 20' },
  { text: '¼ × 36', value: 9, aria: 'one quarter times 36' },
  { text: '⅘ × 40', value: 32, aria: 'four fifths times 40' },
  { text: '½ × 18', value: 9, aria: 'one half times 18' },
  { text: '¾ × 16', value: 12, aria: 'three quarters times 16' },
  { text: '¼ × 32', value: 8, aria: 'one quarter times 32' },
  { text: '⅖ × 35', value: 14, aria: 'two fifths times 35' },
  { text: '⅗ × 30', value: 18, aria: 'three fifths times 30' },
  { text: '½ × 22', value: 11, aria: 'one half times 22' },

  // Division
  { text: '6 ÷ ½', value: 12, aria: 'six divided by one half' },
  { text: '8 ÷ ¼', value: 32, aria: 'eight divided by one quarter' },
  { text: '10 ÷ ½', value: 20, aria: 'ten divided by one half' },
  { text: '12 ÷ ¾', value: 16, aria: 'twelve divided by three quarters' },
  { text: '5 ÷ ½', value: 10, aria: 'five divided by one half' },
  { text: '4 ÷ ¼', value: 16, aria: 'four divided by one quarter' },
  { text: '15 ÷ ½', value: 30, aria: 'fifteen divided by one half' },
  { text: '9 ÷ ¾', value: 12, aria: 'nine divided by three quarters' },
  { text: '7 ÷ ½', value: 14, aria: 'seven divided by one half' },
  { text: '3 ÷ ¼', value: 12, aria: 'three divided by one quarter' }
];

// Curated mixed expressions (Two operands: decimal + fraction, or decimal + integer)
const MIXED_PAIRS = [
  { text: '2.5 + ½', value: 3.0, aria: 'two point five plus one half' },
  { text: '4.75 - ¾', value: 4.0, aria: 'four point seven five minus three quarters' },
  { text: '1.5 × 4', value: 6.0, aria: 'one point five times four' },
  { text: '2.5 × 6', value: 15.0, aria: 'two point five times six' },
  { text: '3.5 - ½', value: 3.0, aria: 'three point five minus one half' },
  { text: '8.4 ÷ 2', value: 4.2, aria: 'eight point four divided by two' },
  { text: '0.5 × 18', value: 9.0, aria: 'zero point five times 18' },
  { text: '6.5 + ½', value: 7.0, aria: 'six point five plus one half' },
  { text: '7.5 ÷ ½', value: 15.0, aria: 'seven point five divided by one half' },
  { text: '12 - 2.5', value: 9.5, aria: 'twelve minus two point five' },
  { text: '16 × 0.25', value: 4.0, aria: '16 times zero point two five' },
  { text: '15.5 - 4.5', value: 11.0, aria: 'fifteen point five minus four point five' },
  { text: '3.25 + ¾', value: 4.0, aria: 'three point two five plus three quarters' },
  { text: '9.6 ÷ 3', value: 3.2, aria: 'nine point six divided by three' },
  { text: '1.25 × 8', value: 10.0, aria: 'one point two five times eight' },
  { text: '14.4 ÷ 1.2', value: 12.0, aria: 'fourteen point four divided by one point two' },
  { text: '0.75 × 36', value: 27.0, aria: 'zero point seven five times thirty-six' },
  { text: '3.25 × 4', value: 13.0, aria: 'three point two five times four' },
  { text: '17.5 - 8.75', value: 8.75, aria: 'seventeen point five minus eight point seven five' },
  { text: '18.5 - 9.25', value: 9.25, aria: 'eighteen point five minus nine point two five' },
  { text: '7.5 ÷ 0.25', value: 30.0, aria: 'seven point five divided by zero point two five' },
  { text: '1.5 × 14', value: 21.0, aria: 'one point five times fourteen' },
  { text: '8.75 + 1.25', value: 10.0, aria: 'eight point seven five plus one point two five' },
  { text: '22.5 - 7.5', value: 15.0, aria: 'twenty-two point five minus seven point five' },
  { text: '18 ÷ 0.75', value: 24.0, aria: 'eighteen divided by zero point seven five' },
  { text: '24 × 0.375', value: 9.0, aria: 'twenty-four times zero point three seven five' }
];

/**
 * Generates an expression containing EXACTLY TWO OPERANDS AND ONE OPERATOR.
 * Supports setNumber 1 to 7 and optional progressiveTier (1 to 4).
 */
function generateTwoOperandExpression(setNumber = 1, progressiveTier = null) {
  let category = 1;

  if (progressiveTier !== null) {
    // Progressive Difficulty Tiers (for Set 6 & Set 7)
    if (progressiveTier === 1) {
      // Foundational: Mostly clean integers, occasional basic fraction
      category = [1, 1, 1, 2, 3][getRandomInt(0, 4)];
    } else if (progressiveTier === 2) {
      // Intermediate: Decimals, clean fractions, some integers
      category = [1, 2, 2, 3, 4][getRandomInt(0, 4)];
    } else if (progressiveTier === 3) {
      // Upper-Intermediate: Decimals, mixed fractions, products
      category = [2, 2, 3, 3, 4, 4][getRandomInt(0, 5)];
    } else {
      // Advanced: High cognitive demand mixed calculations & division
      category = [2, 3, 4, 4, 4][getRandomInt(0, 4)];
    }
  } else {
    // Classic Sets 1 to 5
    const choices = [];
    if (setNumber === 1) {
      choices.push(1, 1, 2, 2, 3);
    } else if (setNumber === 2) {
      choices.push(1, 2, 2, 3, 4);
    } else if (setNumber === 3) {
      choices.push(2, 2, 3, 3, 4);
    } else if (setNumber === 4) {
      choices.push(2, 3, 3, 4, 4);
    } else {
      choices.push(2, 3, 4, 4, 4);
    }
    category = choices[getRandomInt(0, choices.length - 1)];
  }

  // Category 1: Integers (Two operands, One operator)
  if (category === 1) {
    const op = ['+', '-', '×', '÷'][getRandomInt(0, 3)];
    switch (op) {
      case '+': {
        const a = getRandomInt(11, 48);
        const b = getRandomInt(6, 36);
        return { text: `${a} + ${b}`, value: a + b, aria: `${a} plus ${b}` };
      }
      case '-': {
        const a = getRandomInt(32, 88);
        const b = getRandomInt(8, a - 6);
        return { text: `${a} - ${b}`, value: a - b, aria: `${a} minus ${b}` };
      }
      case '×': {
        const a = getRandomInt(4, 12);
        const b = getRandomInt(3, 9);
        return { text: `${a} × ${b}`, value: a * b, aria: `${a} times ${b}` };
      }
      case '÷': {
        const b = getRandomInt(3, 9);
        const ans = getRandomInt(4, 14);
        const a = b * ans;
        return { text: `${a} ÷ ${b}`, value: ans, aria: `${a} divided by ${b}` };
      }
    }
  }

  // Category 2: Decimals (Two operands, One operator)
  if (category === 2) {
    const op = ['+', '-', '×', '÷'][getRandomInt(0, 3)];
    switch (op) {
      case '+': {
        const a = roundTo(getRandomInt(15, 85) / 10, 1);
        const b = roundTo(getRandomInt(12, 55) / 10, 1);
        const val = roundTo(a + b, 2);
        return { text: `${a} + ${b}`, value: val, aria: `${a} plus ${b}` };
      }
      case '-': {
        const a = roundTo(getRandomInt(55, 95) / 10, 1);
        const b = roundTo(getRandomInt(12, 42) / 10, 1);
        const val = roundTo(a - b, 2);
        return { text: `${a} - ${b}`, value: val, aria: `${a} minus ${b}` };
      }
      case '×': {
        const decs = [0.5, 1.5, 2.5, 3.5, 0.25, 0.75, 1.25];
        const dec = decs[getRandomInt(0, decs.length - 1)];
        const intVal = (dec === 0.25 || dec === 0.75 || dec === 1.25) ? getRandomInt(2, 6) * 4 : getRandomInt(2, 8) * 2;
        const val = roundTo(dec * intVal, 2);
        return { text: `${intVal} × ${dec}`, value: val, aria: `${intVal} times ${dec}` };
      }
      case '÷': {
        const divisors = [2, 4, 5, 0.5, 1.5];
        const div = divisors[getRandomInt(0, divisors.length - 1)];
        if (div === 0.5) {
          const a = getRandomInt(4, 16);
          return { text: `${a} ÷ 0.5`, value: a * 2, aria: `${a} divided by 0.5` };
        } else if (div === 1.5) {
          const ans = getRandomInt(4, 12);
          const a = roundTo(ans * 1.5, 1);
          return { text: `${a} ÷ 1.5`, value: ans, aria: `${a} divided by 1.5` };
        } else {
          const ans = roundTo(getRandomInt(15, 45) / 10, 1);
          const a = roundTo(ans * div, 1);
          return { text: `${a} ÷ ${div}`, value: ans, aria: `${a} divided by ${div}` };
        }
      }
    }
  }

  // Category 3: Fractions
  if (category === 3) {
    const pick = FRACTION_PAIRS[getRandomInt(0, FRACTION_PAIRS.length - 1)];
    return pick;
  }

  // Category 4: Mixed (decimal + fraction or decimal + integer)
  const pick = MIXED_PAIRS[getRandomInt(0, MIXED_PAIRS.length - 1)];
  return pick;
}

/**
 * Generates a validated question with EXACTLY 3 BUBBLES.
 * Each bubble has EXACTLY TWO OPERANDS AND ONE OPERATOR.
 * Enforces 3 strictly UNIQUE answers with distinguishable values.
 */
export function generateMathQuestion(setOrDifficulty = 1, questionNumber = 1, totalSetQuestions = 15) {
  let setNumber = 1;
  if (typeof setOrDifficulty === 'number') {
    setNumber = Math.max(1, Math.min(7, setOrDifficulty));
  } else if (typeof setOrDifficulty === 'string') {
    if (setOrDifficulty === 'medium') setNumber = 3;
    else if (setOrDifficulty === 'hard') setNumber = 5;
    else setNumber = 1;
  }

  // Determine progressive tier if in Set 6 or 7
  let progressiveTier = null;
  if (setNumber >= 6) {
    const fraction = (questionNumber - 1) / Math.max(1, totalSetQuestions - 1);
    if (fraction < 0.25) progressiveTier = 1;       // Q1-6: Foundational
    else if (fraction < 0.50) progressiveTier = 2;  // Q7-12: Intermediate
    else if (fraction < 0.75) progressiveTier = 3;  // Q13-18: Upper Intermediate
    else progressiveTier = 4;                       // Q19-24: Advanced
  }

  // 14 seconds timer for Sets 6 & 7; 15 seconds for Sets 1–5
  const timeLimit = setNumber >= 6 ? 14 : 15;

  let attempts = 0;
  while (attempts < 200) {
    attempts++;
    const expr1 = generateTwoOperandExpression(setNumber, progressiveTier);
    const expr2 = generateTwoOperandExpression(setNumber, progressiveTier);
    const expr3 = generateTwoOperandExpression(setNumber, progressiveTier);

    // Ensure expressions within the question are not identical
    if (expr1.text === expr2.text || expr2.text === expr3.text || expr1.text === expr3.text) {
      continue;
    }

    const values = [expr1.value, expr2.value, expr3.value];
    const uniqueValues = new Set(values);

    // Rule 1: Exactly 3 unique values required
    // Rule 2: Differences >= 0.2 so values are cleanly distinguishable
    if (
      uniqueValues.size === 3 &&
      Math.abs(values[0] - values[1]) >= 0.2 &&
      Math.abs(values[1] - values[2]) >= 0.2 &&
      Math.abs(values[0] - values[2]) >= 0.2
    ) {
      const sortedValues = [...values].sort((a, b) => a - b);
      const preset = LAYOUT_PRESETS[getRandomInt(0, LAYOUT_PRESETS.length - 1)];

      const bubbles = [
        {
          id: 'b1',
          expression: expr1.text,
          value: expr1.value,
          aria: expr1.aria,
          position: preset[0]
        },
        {
          id: 'b2',
          expression: expr2.text,
          value: expr2.value,
          aria: expr2.aria,
          position: preset[1]
        },
        {
          id: 'b3',
          expression: expr3.text,
          value: expr3.value,
          aria: expr3.aria,
          position: preset[2]
        }
      ];

      const difficultyLabel = setNumber >= 6
        ? (progressiveTier === 1 ? 'easy' : progressiveTier === 2 ? 'medium' : progressiveTier === 3 ? 'hard' : 'expert')
        : (setNumber <= 2 ? 'easy' : setNumber <= 4 ? 'medium' : 'hard');

      return {
        id: `q_set${setNumber}_${questionNumber}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        setNumber,
        questionNumber,
        difficulty: difficultyLabel,
        bubbles, // EXACTLY 3 BUBBLES
        expressions: [expr1.text, expr2.text, expr3.text],
        answers: values,
        sortedAnswers: sortedValues, // [lowest, middle, highest]
        timeLimit
      };
    }
  }

  // Safe fallback (exactly two operands, one operator each)
  const fallbackPreset = LAYOUT_PRESETS[0];
  return {
    id: `q_set${setNumber}_${questionNumber}`,
    setNumber,
    questionNumber,
    difficulty: setNumber >= 6 ? 'medium' : 'easy',
    bubbles: [
      { id: 'b1', expression: '2.5 + 1.5', value: 4, aria: '2.5 plus 1.5', position: fallbackPreset[0] },
      { id: 'b2', expression: '½ × 16', value: 8, aria: 'one half times 16', position: fallbackPreset[1] },
      { id: 'b3', expression: '15 - 3', value: 12, aria: '15 minus 3', position: fallbackPreset[2] }
    ],
    expressions: ['2.5 + 1.5', '½ × 16', '15 - 3'],
    answers: [4, 8, 12],
    sortedAnswers: [4, 8, 12],
    timeLimit
  };
}

/**
 * Returns default question count for a given set number:
 * Sets 1–5: 15 questions
 * Sets 6–7: 24 questions
 */
export function getSetTotalQuestions(setNumber = 1) {
  return setNumber >= 6 ? 24 : 15;
}

/**
 * Returns time limit per question for a given set number:
 * Sets 1–5: 15 seconds
 * Sets 6–7: 14 seconds
 */
export function getSetTimeLimit(setNumber = 1) {
  return setNumber >= 6 ? 14 : 15;
}

/**
 * Generates an entire set of questions.
 * Enforces strict set-level non-repeating uniqueness so no question repeats within the set.
 */
export function generateQuestionSet(setNumber = 1, totalQuestions = null) {
  const count = totalQuestions !== null && totalQuestions !== undefined
    ? totalQuestions
    : getSetTotalQuestions(setNumber);

  const set = [];
  const usedQuestionSignatures = new Set();

  for (let q = 1; q <= count; q++) {
    let question = null;
    let attempts = 0;

    while (attempts < 100) {
      attempts++;
      const candidate = generateMathQuestion(setNumber, q, count);
      // Signature based on sorted expressions in the question
      const sig = candidate.expressions.slice().sort().join(' | ');

      if (!usedQuestionSignatures.has(sig)) {
        usedQuestionSignatures.add(sig);
        question = candidate;
        break;
      }
    }

    if (!question) {
      question = generateMathQuestion(setNumber, q, count);
    }

    set.push(question);
  }

  return set;
}

export const generateBubbleQuestion = generateMathQuestion;
