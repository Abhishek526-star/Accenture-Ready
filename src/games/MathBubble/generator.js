// src/games/MathBubble/generator.js
/**
 * Math Bubble Question Generator
 * CRITICAL REQUIREMENTS:
 * 1. Exactly 3 bubbles per question.
 * 2. In each bubble: EXACTLY TWO OPERANDS AND ONE OPERATOR (e.g., A + B, A - B, A × B, A ÷ B).
 * 3. Operands can be integers, decimals, or fractions (using clean fractional symbols like ½, ¼, ¾, ⅖).
 * 4. 5 Sets of 15 questions each.
 * 5. Strictly unique values for all 3 bubbles.
 */

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundTo(num, decimals = 2) {
  const factor = Math.pow(10, decimals);
  return Math.round((num + Number.EPSILON) * factor) / factor;
}

// 3 Randomized spatial layout configurations for bubbles
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

/**
 * Generates an expression containing EXACTLY TWO OPERANDS AND ONE OPERATOR.
 * setNumber: 1 to 5 determines the complexity and blend of integers, decimals, and fractions.
 */
function generateTwoOperandExpression(setNumber = 1) {
  // Types:
  // 1 = integer [op1] [operator] [op2]
  // 2 = decimal [op1] [operator] [op2]
  // 3 = fraction [op1] [operator] [op2]
  // 4 = mixed (decimal/fraction + integer/decimal)

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

  const category = choices[getRandomInt(0, choices.length - 1)];

  // Category 1: Integers (Two operands, One operator)
  if (category === 1) {
    const op = ['+', '-', '×', '÷'][getRandomInt(0, 3)];
    switch (op) {
      case '+': {
        const a = getRandomInt(12, 48);
        const b = getRandomInt(7, 36);
        return { text: `${a} + ${b}`, value: a + b, aria: `${a} plus ${b}` };
      }
      case '-': {
        const a = getRandomInt(32, 88);
        const b = getRandomInt(9, a - 6);
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
        const a = roundTo(getRandomInt(15, 75) / 10, 1); // e.g. 1.5 to 7.5
        const b = roundTo(getRandomInt(12, 45) / 10, 1);
        const val = roundTo(a + b, 2);
        return { text: `${a} + ${b}`, value: val, aria: `${a} plus ${b}` };
      }
      case '-': {
        const a = roundTo(getRandomInt(45, 95) / 10, 1);
        const b = roundTo(getRandomInt(12, 38) / 10, 1);
        const val = roundTo(a - b, 2);
        return { text: `${a} - ${b}`, value: val, aria: `${a} minus ${b}` };
      }
      case '×': {
        const decs = [0.5, 1.5, 2.5, 3.5, 0.25, 0.75, 1.2];
        const dec = decs[getRandomInt(0, decs.length - 1)];
        const intVal = dec === 0.25 || dec === 0.75 ? getRandomInt(2, 6) * 4 : getRandomInt(2, 8) * 2;
        const val = roundTo(dec * intVal, 2);
        return { text: `${intVal} × ${dec}`, value: val, aria: `${intVal} times ${dec}` };
      }
      case '÷': {
        const divisors = [2, 4, 5, 0.5];
        const div = divisors[getRandomInt(0, divisors.length - 1)];
        if (div === 0.5) {
          const a = getRandomInt(4, 14);
          return { text: `${a} ÷ 0.5`, value: a * 2, aria: `${a} divided by 0.5` };
        } else {
          const ans = roundTo(getRandomInt(15, 45) / 10, 1);
          const a = roundTo(ans * div, 1);
          return { text: `${a} ÷ ${div}`, value: ans, aria: `${a} divided by ${div}` };
        }
      }
    }
  }

  // Category 3: Fractions (Two operands, One operator, with unambiguous fraction notation)
  if (category === 3) {
    const fractionPairs = [
      // Addition
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

      // Subtraction
      { text: '3 - ½', value: 2.5, aria: 'three minus one half' },
      { text: '2 - ¼', value: 1.75, aria: 'two minus one quarter' },
      { text: '¾ - ¼', value: 0.5, aria: 'three quarters minus one quarter' },
      { text: '4 - ¾', value: 3.25, aria: 'four minus three quarters' },
      { text: '5 - ½', value: 4.5, aria: 'five minus one half' },
      { text: '1 - ⅖', value: 0.6, aria: 'one minus two fifths' },
      { text: '2 - ⅗', value: 1.4, aria: 'two minus three fifths' },

      // Multiplication
      { text: '½ × 16', value: 8, aria: 'one half times 16' },
      { text: '¾ × 12', value: 9, aria: 'three quarters times 12' },
      { text: '¼ × 24', value: 6, aria: 'one quarter times 24' },
      { text: '⅖ × 25', value: 10, aria: 'two fifths times 25' },
      { text: '⅗ × 20', value: 12, aria: 'three fifths times 20' },
      { text: '½ × 28', value: 14, aria: 'one half times 28' },
      { text: '¾ × 20', value: 15, aria: 'three quarters times 20' },
      { text: '¼ × 36', value: 9, aria: 'one quarter times 36' },

      // Division
      { text: '6 ÷ ½', value: 12, aria: 'six divided by one half' },
      { text: '8 ÷ ¼', value: 32, aria: 'eight divided by one quarter' },
      { text: '10 ÷ ½', value: 20, aria: 'ten divided by one half' },
      { text: '12 ÷ ¾', value: 16, aria: 'twelve divided by three quarters' },
      { text: '5 ÷ ½', value: 10, aria: 'five divided by one half' },
      { text: '4 ÷ ¼', value: 16, aria: 'four divided by one quarter' },
      { text: '15 ÷ ½', value: 30, aria: 'fifteen divided by one half' }
    ];

    const pick = fractionPairs[getRandomInt(0, fractionPairs.length - 1)];
    return pick;
  }

  // Category 4: Mixed (Two operands: decimal + fraction or integer)
  const mixedPairs = [
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
    { text: '9.6 ÷ 3', value: 3.2, aria: 'nine point six divided by three' }
  ];

  const pick = mixedPairs[getRandomInt(0, mixedPairs.length - 1)];
  return pick;
}

/**
 * Generates a validated question with EXACTLY 3 BUBBLES.
 * Each bubble has EXACTLY TWO OPERANDS AND ONE OPERATOR.
 * Enforces 3 strictly UNIQUE answers with distinguishable values.
 */
export function generateMathQuestion(setOrDifficulty = 1, questionNumber = 1) {
  let setNumber = 1;
  if (typeof setOrDifficulty === 'number') {
    setNumber = Math.max(1, Math.min(5, setOrDifficulty));
  } else if (typeof setOrDifficulty === 'string') {
    if (setOrDifficulty === 'medium') setNumber = 3;
    else if (setOrDifficulty === 'hard') setNumber = 5;
    else setNumber = 1;
  }

  let attempts = 0;
  while (attempts < 200) {
    attempts++;
    const expr1 = generateTwoOperandExpression(setNumber);
    const expr2 = generateTwoOperandExpression(setNumber);
    const expr3 = generateTwoOperandExpression(setNumber);

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
          expression: expr1.text, // Exactly two operands, one operator!
          value: expr1.value,
          aria: expr1.aria,
          position: preset[0]
        },
        {
          id: 'b2',
          expression: expr2.text, // Exactly two operands, one operator!
          value: expr2.value,
          aria: expr2.aria,
          position: preset[1]
        },
        {
          id: 'b3',
          expression: expr3.text, // Exactly two operands, one operator!
          value: expr3.value,
          aria: expr3.aria,
          position: preset[2]
        }
      ];

      return {
        id: `q_set${setNumber}_${questionNumber}_${Date.now()}_${Math.random()}`,
        setNumber,
        questionNumber,
        difficulty: setNumber <= 2 ? 'easy' : setNumber <= 4 ? 'medium' : 'hard',
        bubbles, // EXACTLY 3 BUBBLES
        expressions: [expr1.text, expr2.text, expr3.text],
        answers: values,
        sortedAnswers: sortedValues, // [lowest, middle, highest]
        timeLimit: 15
      };
    }
  }

  // Safe fallback (exactly two operands, one operator each)
  const fallbackPreset = LAYOUT_PRESETS[0];
  return {
    id: `q_set${setNumber}_${questionNumber}`,
    setNumber,
    questionNumber,
    difficulty: 'easy',
    bubbles: [
      { id: 'b1', expression: '2.5 + 1.5', value: 4, aria: '2.5 plus 1.5', position: fallbackPreset[0] },
      { id: 'b2', expression: '½ × 16', value: 8, aria: 'one half times 16', position: fallbackPreset[1] },
      { id: 'b3', expression: '15 - 3', value: 12, aria: '15 minus 3', position: fallbackPreset[2] }
    ],
    expressions: ['2.5 + 1.5', '½ × 16', '15 - 3'],
    answers: [4, 8, 12],
    sortedAnswers: [4, 8, 12],
    timeLimit: 15
  };
}

/**
 * Generates an entire set of 15 questions for the specified set number (1 to 5).
 */
export function generateQuestionSet(setNumber = 1, totalQuestions = 15) {
  const set = [];
  for (let q = 1; q <= totalQuestions; q++) {
    set.push(generateMathQuestion(setNumber, q));
  }
  return set;
}

export const generateBubbleQuestion = generateMathQuestion;
