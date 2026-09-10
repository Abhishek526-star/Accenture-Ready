// src/services/mockTestService.js
// Mock Assessment state manager: 90-minute timed test, section tracking, score calculation, history persistence

import { questions } from '../data/questions.js';
import { sqlQuestions } from '../data/sqlQuestions.js';
import { networkQuestions } from '../data/networkQuestions.js';
import { cloudQuestions } from '../data/cloudQuestions.js';
import { oopQuestions } from '../data/oopQuestions.js';
import { gamificationService } from './gamificationService.js';

const MOCK_ACTIVE_KEY = 'accenture_mock_active_session_v2';
const MOCK_HISTORY_KEY = 'accenture_mock_history_v1';

export function initializeMockSession() {
  // Assemble balanced mock assessment test bundle
  // 1. Frontend Coding (2 questions: 1 Easy, 1 Medium)
  const codingSubset = [
    questions[0] || { id: 1, title: 'Shopping Cart Total', category: 'Frontend' },
    questions[1] || { id: 2, title: 'Grade Calculator & Filter', category: 'Frontend' }
  ];

  // 2. SQL Assessment (3 questions)
  const sqlSubset = (sqlQuestions || []).slice(0, 3);

  // 3. Technical MCQs (15 questions: 5 Network, 5 Cloud, 5 OOP)
  const mcqSubset = [
    ...(networkQuestions || []).slice(0, 5).map(q => ({ ...q, subject: 'Networking' })),
    ...(cloudQuestions || []).slice(0, 5).map(q => ({ ...q, subject: 'Cloud' })),
    ...(oopQuestions || []).slice(0, 5).map(q => ({ ...q, subject: 'OOPs' }))
  ];

  const session = {
    startedAt: Date.now(),
    durationSeconds: 90 * 60, // 90 minutes
    remainingSeconds: 90 * 60,
    isCompleted: false,
    currentSectionIndex: 0,
    answers: {
      coding: {}, // qId -> { code, passed: boolean }
      sql: {},    // sqlId -> { query, passed: boolean }
      mcq: {}     // mcqId -> selectedOption
    },
    sections: [
      { id: 'coding', title: 'Frontend Coding', count: codingSubset.length, questions: codingSubset },
      { id: 'sql', title: 'SQL Queries', count: sqlSubset.length, questions: sqlSubset },
      { id: 'mcq', title: 'Aptitude & Technical MCQs', count: mcqSubset.length, questions: mcqSubset },
      { id: 'cognitive', title: 'Cognitive Reasoning', count: 2, games: ['math_bubble', 'memory_maze'] }
    ]
  };

  localStorage.setItem(MOCK_ACTIVE_KEY, JSON.stringify(session));
  return session;
}

export const mockTestService = {
  getActiveSession() {
    try {
      const raw = localStorage.getItem(MOCK_ACTIVE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  },

  updateSession(session) {
    try {
      localStorage.setItem(MOCK_ACTIVE_KEY, JSON.stringify(session));
    } catch (e) {
      console.error('Failed to update mock session', e);
    }
  },

  clearActiveSession() {
    localStorage.removeItem(MOCK_ACTIVE_KEY);
  },

  saveAnswer(section, qId, value) {
    const session = this.getActiveSession();
    if (!session) return;
    if (!session.answers[section]) session.answers[section] = {};
    session.answers[section][qId] = value;
    this.updateSession(session);
  },

  calculateMockResults(session) {
    // 1. Coding score
    const codingQuestions = session.sections[0].questions;
    let codingCorrect = 0;
    codingQuestions.forEach(q => {
      const ans = session.answers.coding[q.id];
      if (ans && ans.passed) codingCorrect++;
    });
    const codingScore = Math.round((codingCorrect / Math.max(1, codingQuestions.length)) * 100);

    // 2. SQL score
    const sqlList = session.sections[1].questions;
    let sqlCorrect = 0;
    sqlList.forEach(q => {
      const ans = session.answers.sql[q.id];
      if (ans && ans.passed) sqlCorrect++;
    });
    const sqlScore = Math.round((sqlCorrect / Math.max(1, sqlList.length)) * 100);

    // 3. MCQ score
    const mcqList = session.sections[2].questions;
    let mcqCorrect = 0;
    let mcqAttempted = 0;
    mcqList.forEach(q => {
      const selected = session.answers.mcq[q.id];
      if (selected !== undefined && selected !== null) {
        mcqAttempted++;
        // Compare with question correct answer index or text
        if (selected === q.answer || selected === q.correctAnswer || selected === q.correct) {
          mcqCorrect++;
        }
      }
    });
    const mcqScore = Math.round((mcqCorrect / Math.max(1, mcqList.length)) * 100);

    // 4. Cognitive baseline in mock
    const cognitiveScore = 75; // Baseline completed participation

    // Overall weighted score: Coding 30%, SQL 25%, MCQs 30%, Cognitive 15%
    const totalQuestions = codingQuestions.length + sqlList.length + mcqList.length;
    const totalSolved = codingCorrect + sqlCorrect + mcqCorrect;
    const overall = Math.round((codingScore * 0.3) + (sqlScore * 0.25) + (mcqScore * 0.3) + (cognitiveScore * 0.15));

    const timeUsedSeconds = Math.max(0, (session.durationSeconds || 5400) - (session.remainingSeconds || 0));
    const mins = Math.floor(timeUsedSeconds / 60);
    const secs = timeUsedSeconds % 60;
    const timeUsedFormatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const weakAreas = [];
    if (codingScore < 60) weakAreas.push('Frontend Coding & DOM');
    if (sqlScore < 60) weakAreas.push('SQL Queries & JOINs');
    if (mcqScore < 65) weakAreas.push('Technical MCQs (Networks / Cloud / OOPs)');

    const result = {
      id: `mock-${Date.now()}`,
      completedAt: new Date().toISOString(),
      score: overall,
      codingScore,
      sqlScore,
      mcqScore,
      cognitiveScore,
      totalQuestions,
      totalSolved,
      accuracy: totalQuestions > 0 ? Math.round((totalSolved / totalQuestions) * 100) : 0,
      timeUsedSeconds,
      timeUsedFormatted,
      weakAreas: weakAreas.length > 0 ? weakAreas : ['Continue maintaining current speed']
    };

    // Save to history
    this.saveToHistory(result);
    // Award Gamification XP
    gamificationService.addXP(200, 'Completed Full Mock Assessment');
    this.clearActiveSession();

    return result;
  },

  getHistory() {
    try {
      const raw = localStorage.getItem(MOCK_HISTORY_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  saveToHistory(result) {
    try {
      const history = this.getHistory();
      history.unshift(result);
      localStorage.setItem(MOCK_HISTORY_KEY, JSON.stringify(history));
    } catch (e) {
      console.error('Failed to save mock history', e);
    }
  }
};
