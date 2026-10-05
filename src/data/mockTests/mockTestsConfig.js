// src/data/mockTests/mockTestsConfig.js
import { mockTest1 } from './mockTest1.js';
import { mockTest2 } from './mockTest2.js';
import { mockTest3 } from './mockTest3.js';
import { mockTest4 } from './mockTest4.js';
import { mockTest5 } from './mockTest5.js';

export const MOCK_TESTS = [
  {
    id: 1,
    title: 'Accenture Mock Test 1',
    shortTitle: 'Mock Test 1',
    badge: 'Set 1',
    description: 'Comprehensive 45-minute exam covering Pseudocode, Networking, Security & Cloud, and MS Office.',
    questions: mockTest1,
    questionsCount: mockTest1.length,
    durationMinutes: mockTest1.length,
    totalMarks: mockTest1.length,
    marksPerQuestion: 1,
    negativeMarking: 0,
    topics: ['Pseudocode', 'Networking & Cloud', 'Web & Security', 'MS Office & Architecture']
  },
  {
    id: 2,
    title: 'Accenture Mock Test 2',
    shortTitle: 'Mock Test 2',
    badge: 'Set 2',
    description: 'Timed full-length mock assessment testing technical precision under strict 1-min-per-question limits.',
    questions: mockTest2,
    questionsCount: mockTest2.length,
    durationMinutes: mockTest2.length,
    totalMarks: mockTest2.length,
    marksPerQuestion: 1,
    negativeMarking: 0,
    topics: ['Pseudocode', 'Networking & Cloud', 'Web & Security', 'MS Office & Architecture']
  },
  {
    id: 3,
    title: 'Accenture Mock Test 3',
    shortTitle: 'Mock Test 3',
    badge: 'Set 3',
    description: 'High-yield exam paper with rigorous multi-concept questions in cloud architectures and protocols.',
    questions: mockTest3,
    questionsCount: mockTest3.length,
    durationMinutes: mockTest3.length,
    totalMarks: mockTest3.length,
    marksPerQuestion: 1,
    negativeMarking: 0,
    topics: ['Pseudocode', 'Networking & Cloud', 'Web & Security', 'MS Office & Architecture']
  },
  {
    id: 4,
    title: 'Accenture Mock Test 4',
    shortTitle: 'Mock Test 4',
    badge: 'Set 4',
    description: 'Speed and accuracy test simulating the real Accenture on-campus technical assessment round.',
    questions: mockTest4,
    questionsCount: mockTest4.length,
    durationMinutes: mockTest4.length,
    totalMarks: mockTest4.length,
    marksPerQuestion: 1,
    negativeMarking: 0,
    topics: ['Pseudocode', 'Networking & Cloud', 'Web & Security', 'MS Office & Architecture']
  },
  {
    id: 5,
    title: 'Accenture Mock Test 5',
    shortTitle: 'Mock Test 5',
    badge: 'Set 5',
    description: 'Final readiness booster mock test designed to benchmark your score against hiring cutoffs.',
    questions: mockTest5,
    questionsCount: mockTest5.length,
    durationMinutes: mockTest5.length,
    totalMarks: mockTest5.length,
    marksPerQuestion: 1,
    negativeMarking: 0,
    topics: ['Pseudocode', 'Networking & Cloud', 'Web & Security', 'MS Office & Architecture']
  }
];

const STORAGE_KEY_PREFIX = 'accenture_mock_result_set_';

export function getMockTestById(id) {
  const numId = parseInt(id, 10);
  return MOCK_TESTS.find(t => t.id === numId) || MOCK_TESTS[0];
}

export function saveMockResult(testId, resultData) {
  try {
    const key = `${STORAGE_KEY_PREFIX}${testId}`;
    const previous = getMockResult(testId);
    const bestScore = previous ? Math.max(previous.bestScore || 0, resultData.score) : resultData.score;
    const toSave = {
      ...resultData,
      bestScore,
      timestamp: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(toSave));
    return toSave;
  } catch (e) {
    console.error('Error saving mock test result:', e);
    return resultData;
  }
}

export function getMockResult(testId) {
  try {
    const key = `${STORAGE_KEY_PREFIX}${testId}`;
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}
