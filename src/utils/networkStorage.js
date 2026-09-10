// src/utils/networkStorage.js
/**
 * LocalStorage management for Computer Networking Assessment Module
 */

const STORAGE_KEYS = {
  ATTEMPTS: 'accenture_network_attempts_v1',
  BOOKMARKS: 'accenture_network_bookmarks_v1',
  STATS: 'accenture_network_stats_v1'
};

export const networkStorage = {
  // Get all saved quiz attempts
  getAttempts() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading network attempts from localStorage:', e);
      return [];
    }
  },

  // Save a completed quiz attempt
  saveAttempt(attempt) {
    try {
      const attempts = this.getAttempts();
      const newAttempt = {
        id: 'net_att_' + Date.now(),
        timestamp: new Date().toISOString(),
        ...attempt
      };
      attempts.unshift(newAttempt);
      // Keep up to 30 past attempts
      if (attempts.length > 30) attempts.length = 30;
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(attempts));
      this.updateOverallStats(newAttempt);
      return newAttempt;
    } catch (e) {
      console.error('Error saving network attempt to localStorage:', e);
      return null;
    }
  },

  // Bookmarks
  getBookmarks() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading network bookmarks:', e);
      return [];
    }
  },

  toggleBookmark(questionId) {
    try {
      const bookmarks = this.getBookmarks();
      const index = bookmarks.indexOf(questionId);
      let updated;
      if (index === -1) {
        updated = [...bookmarks, questionId];
      } else {
        updated = bookmarks.filter((id) => id !== questionId);
      }
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Error toggling network bookmark:', e);
      return [];
    }
  },

  isBookmarked(questionId) {
    const bookmarks = this.getBookmarks();
    return bookmarks.includes(questionId);
  },

  // Overall Statistics
  getStats() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STATS);
      return data
        ? JSON.parse(data)
        : {
            quizzesTaken: 0,
            totalQuestionsAnswered: 0,
            totalCorrect: 0,
            bestScorePercent: 0,
            lastScorePercent: 0
          };
    } catch (e) {
      console.error('Error reading network stats:', e);
      return { quizzesTaken: 0, totalQuestionsAnswered: 0, totalCorrect: 0, bestScorePercent: 0, lastScorePercent: 0 };
    }
  },

  updateOverallStats(newAttempt) {
    try {
      const stats = this.getStats();
      const currentScorePct = newAttempt.scorePercent || 0;
      const updated = {
        quizzesTaken: stats.quizzesTaken + 1,
        totalQuestionsAnswered: stats.totalQuestionsAnswered + (newAttempt.totalQuestions || 0),
        totalCorrect: stats.totalCorrect + (newAttempt.score || 0),
        bestScorePercent: Math.max(stats.bestScorePercent || 0, currentScorePct),
        lastScorePercent: currentScorePct
      };
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(updated));
    } catch (e) {
      console.error('Error updating network stats:', e);
    }
  }
};
