// src/tests/index.js
import { question1Tests } from "./question1.test.js";
import { question2Tests } from "./question2.test.js";
import { question3Tests } from "./question3.test.js";
import { question4Tests } from "./question4.test.js";
import { question5Tests } from "./question5.test.js";
import { question6Tests } from "./question6.test.js";
import { question7Tests } from "./question7.test.js";
import { question8Tests } from "./question8.test.js";
import { question9Tests } from "./question9.test.js";
import { question10Tests } from "./question10.test.js";
import { testSuites as foundationSuites } from "./testDefinitions.js";

export const testSuites = {
  // New Question Set (from screenshot)
  1: question1Tests,
  2: question2Tests,
  3: question3Tests,
  4: question4Tests,
  5: question5Tests,
  6: question6Tests,
  7: question7Tests,
  8: question8Tests,
  9: question9Tests,
  10: question10Tests,
  // Foundation Question Set (questions 11 to 20)
  11: foundationSuites[1] || [],
  12: foundationSuites[2] || [],
  13: foundationSuites[3] || [],
  14: foundationSuites[4] || [],
  15: foundationSuites[5] || [],
  16: foundationSuites[6] || [],
  17: foundationSuites[7] || [],
  18: foundationSuites[8] || [],
  19: foundationSuites[9] || [],
  20: foundationSuites[10] || []
};

export {
  question1Tests,
  question2Tests,
  question3Tests,
  question4Tests,
  question5Tests,
  question6Tests,
  question7Tests,
  question8Tests,
  question9Tests,
  question10Tests
};
