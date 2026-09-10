// src/utils/networkSecurityStorage.js
/**
 * LocalStorage management for Network Security Assessment Module
 */

const STORAGE_KEYS = {
  ATTEMPTS: 'accenture_netsec_attempts_v1',
  BOOKMARKS: 'accenture_netsec_bookmarks_v1',
  STATS: 'accenture_netsec_stats_v1'
};

export const networkSecurityStorage = {
  getAttempts() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading netsec attempts:', e);
      return [];
    }
  },

  saveAttempt(attempt) {
    try {
      const attempts = this.getAttempts();
      const newAttempt = {
        id: 'netsec_att_' + Date.now(),
        timestamp: new Date().toISOString(),
        ...attempt
      };
      attempts.unshift(newAttempt);
      if (attempts.length > 30) attempts.length = 30;
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(attempts));
      this.updateOverallStats(newAttempt);
      return newAttempt;
    } catch (e) {
      console.error('Error saving netsec attempt:', e);
      return null;
    }
  },

  getBookmarks() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading netsec bookmarks:', e);
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
      console.error('Error toggling netsec bookmark:', e);
      return [];
    }
  },

  isBookmarked(questionId) {
    const bookmarks = this.getBookmarks();
    return bookmarks.includes(questionId);
  },

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
      console.error('Error reading netsec stats:', e);
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
      console.error('Error updating netsec stats:', e);
    }
  }
};
