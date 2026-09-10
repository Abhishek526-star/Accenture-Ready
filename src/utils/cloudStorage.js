// src/utils/cloudStorage.js

const QUIZ_HISTORY_KEY = 'cloud-assessment-quiz-history';
const BOOKMARKS_KEY = 'cloud-assessment-bookmarks';
const SETTINGS_KEY = 'cloud-assessment-settings';

export const cloudStorage = {
  // Quiz History & Attempts
  getQuizHistory() {
    try {
      const data = localStorage.getItem(QUIZ_HISTORY_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveQuizAttempt(result) {
    try {
      const history = this.getQuizHistory();
      const newEntry = {
        id: 'attempt-' + Date.now(),
        date: new Date().toISOString(),
        ...result
      };
      const updated = [newEntry, ...history].slice(0, 50); // keep last 50
      localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(updated));
      return newEntry;
    } catch (e) {
      console.error('Failed to save quiz attempt:', e);
      return null;
    }
  },

  getBestScore() {
    const history = this.getQuizHistory();
    if (history.length === 0) return null;
    return history.reduce((best, cur) => (cur.percentage > (best?.percentage || 0) ? cur : best), null);
  },

  // Bookmarks / Flagged Questions
  getBookmarks() {
    try {
      const data = localStorage.getItem(BOOKMARKS_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  isBookmarked(questionId) {
    return this.getBookmarks().includes(questionId);
  },

  toggleBookmark(questionId) {
    try {
      const bookmarks = this.getBookmarks();
      let updated;
      if (bookmarks.includes(questionId)) {
        updated = bookmarks.filter((id) => id !== questionId);
      } else {
        updated = [...bookmarks, questionId];
      }
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Failed to toggle bookmark:', e);
      return [];
    }
  },

  // User preferences (timer duration, mode)
  getSettings() {
    try {
      const data = localStorage.getItem(SETTINGS_KEY);
      return data ? JSON.parse(data) : { defaultMode: 'exam', timed: true, timePerQuestionSec: 60 };
    } catch {
      return { defaultMode: 'exam', timed: true, timePerQuestionSec: 60 };
    }
  },

  saveSettings(settings) {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings:', e);
    }
  },

  clearAllHistory() {
    try {
      localStorage.removeItem(QUIZ_HISTORY_KEY);
      localStorage.removeItem(BOOKMARKS_KEY);
    } catch (e) {
      console.error('Failed to clear cloud storage:', e);
    }
  }
};
