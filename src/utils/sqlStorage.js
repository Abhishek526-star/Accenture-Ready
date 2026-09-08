// src/utils/sqlStorage.js

const DRAFT_PREFIX = 'sql-answer-';
const RESULTS_KEY = 'sql-assessment-results';
const COMPLETED_KEY = 'sql-completed-questions';

export const sqlStorage = {
  getDraft(questionId, defaultCode = '') {
    try {
      const saved = localStorage.getItem(`${DRAFT_PREFIX}${questionId}`);
      return saved !== null ? saved : defaultCode;
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
    } catch (e) {
      console.error('Failed to reset SQL draft:', e);
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

  markQuestionCompleted(questionId) {
    try {
      const current = this.getCompletedQuestions();
      if (!current.includes(questionId)) {
        current.push(questionId);
        localStorage.setItem(COMPLETED_KEY, JSON.stringify(current));
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
      });
      localStorage.removeItem(COMPLETED_KEY);
      localStorage.removeItem(RESULTS_KEY);
    } catch (e) {
      console.error('Failed to reset SQL progress:', e);
    }
  }
};
