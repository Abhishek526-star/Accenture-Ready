// src/tests/index.js
import { question9Tests } from "./question9.test.js";
import { question10Tests } from "./question10.test.js";
import { testSuites as foundationSuites } from "./testDefinitions.js";

export const testSuites = {
  // Question 1: Tab Switcher & Badge
  1: question9Tests,
  // Question 2: Char Limit & Progress
  2: question10Tests,
  // Question 3: Interactive Counter
  3: foundationSuites[1] || [],
  // Question 4: Password Validation
  4: foundationSuites[2] || [],
  // Question 5: Chatbot
  5: foundationSuites[3] || [],
  // Question 6: Character Counter
  6: foundationSuites[4] || [],
  // Question 7: To-Do Application
  7: foundationSuites[5] || [],
  // Question 8: Login Form
  8: foundationSuites[6] || [],
  // Question 9: Product Search
  9: foundationSuites[7] || [],
  // Question 10: Show/Hide Password
  10: foundationSuites[8] || [],
  // Question 11: Temperature Converter
  11: foundationSuites[9] || [],
  // Question 12: Theme Toggle
  12: foundationSuites[10] || []
};

export {
  question9Tests,
  question10Tests
};

