// src/utils/importantQuestionsStorage.js

const QUIZ_HISTORY_KEY = 'important-questions-quiz-history';
const BOOKMARKS_KEY = 'important-questions-bookmarks';

export const importantQuestionsStorage = {
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
        id: 'pyq-attempt-' + Date.now(),
        date: new Date().toISOString(),
        ...result
      };
      const updated = [newEntry, ...history].slice(0, 50);
      localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(updated));
      return newEntry;
    } catch (e) {
      console.error('Failed to save important quiz attempt:', e);
      return null;
    }
  },

  getBookmarks() {
    try {
      const data = localStorage.getItem(BOOKMARKS_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
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
      console.error('Failed to toggle important question bookmark:', e);
      return [];
    }
  }
};
