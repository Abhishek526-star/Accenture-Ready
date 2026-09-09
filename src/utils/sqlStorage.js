// src/utils/sqlStorage.js

const DRAFT_PREFIX = 'sql-answer-';
const SOLUTION_PREFIX = 'sql-solution-';
const RESULTS_KEY = 'sql-assessment-results';
const COMPLETED_KEY = 'sql-completed-questions';

export const sqlStorage = {
  getDraft(questionId, defaultCode = '') {
    try {
      const saved = localStorage.getItem(`${DRAFT_PREFIX}${questionId}`);
      if (saved !== null) {
        // If legacy starter code was previously auto-persisted, ignore it so editor starts empty
        if (saved.trim().startsWith('-- Write your SQL query below')) {
          return defaultCode;
        }
        return saved;
      }
      const solved = localStorage.getItem(`${SOLUTION_PREFIX}${questionId}`);
      if (solved !== null) {
        return solved;
      }
      return defaultCode;
    } catch {
      return defaultCode;
    }
  },

  setDraft(questionId, code) {
    try {
      localStorage.setItem(`${DRAFT_PREFIX}${questionId}`, code);
    } catch (e) {
      console.error('Failed to save SQL draft to localStorage:', e);
    }
  },

  resetDraft(questionId) {
    try {
      localStorage.removeItem(`${DRAFT_PREFIX}${questionId}`);
      localStorage.removeItem(`${SOLUTION_PREFIX}${questionId}`);
    } catch (e) {
      console.error('Failed to reset SQL draft:', e);
    }
  },

  saveUserSolution(questionId, code) {
    try {
      localStorage.setItem(`${SOLUTION_PREFIX}${questionId}`, code);
      localStorage.setItem(`${DRAFT_PREFIX}${questionId}`, code);
    } catch (e) {
      console.error('Failed to save user solution:', e);
    }
  },

  getUserSolution(questionId) {
    try {
      return localStorage.getItem(`${SOLUTION_PREFIX}${questionId}`) || '';
    } catch {
      return '';
    }
  },

  getCompletedQuestions() {
    try {
      const val = localStorage.getItem(COMPLETED_KEY);
      return val ? JSON.parse(val) : [];
    } catch {
      return [];
    }
  },

  markQuestionCompleted(questionId, userCode) {
    try {
      const current = this.getCompletedQuestions();
      if (!current.includes(questionId)) {
        current.push(questionId);
        localStorage.setItem(COMPLETED_KEY, JSON.stringify(current));
      }
      if (userCode !== undefined && userCode !== null) {
        this.saveUserSolution(questionId, userCode);
      }
    } catch (e) {
      console.error('Failed to mark SQL question completed:', e);
    }
  },

  getAssessmentSummary() {
    try {
      const val = localStorage.getItem(RESULTS_KEY);
      return val ? JSON.parse(val) : null;
    } catch {
      return null;
    }
  },

  setAssessmentSummary(summary) {
    try {
      localStorage.setItem(RESULTS_KEY, JSON.stringify(summary));
    } catch (e) {
      console.error('Failed to save SQL assessment summary:', e);
    }
  },

  resetAllSQLProgress(questions = []) {
    try {
      questions.forEach((q) => {
        localStorage.removeItem(`${DRAFT_PREFIX}${q.id}`);
        localStorage.removeItem(`${SOLUTION_PREFIX}${q.id}`);
      });
      localStorage.removeItem(COMPLETED_KEY);
      localStorage.removeItem(RESULTS_KEY);
    } catch (e) {
      console.error('Failed to reset SQL progress:', e);
    }
  }
};
