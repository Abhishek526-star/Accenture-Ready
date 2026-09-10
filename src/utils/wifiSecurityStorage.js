// src/utils/wifiSecurityStorage.js
/**
 * LocalStorage management for Wi-Fi Security Assessment Module
 */

const STORAGE_KEYS = {
  ATTEMPTS: 'accenture_wifisec_attempts_v1',
  BOOKMARKS: 'accenture_wifisec_bookmarks_v1',
  STATS: 'accenture_wifisec_stats_v1'
};

export const wifiSecurityStorage = {
  getAttempts() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading wifi security attempts:', e);
      return [];
    }
  },

  saveAttempt(attempt) {
    try {
      const attempts = this.getAttempts();
      const newAttempt = {
        id: 'wifisec_att_' + Date.now(),
        timestamp: new Date().toISOString(),
        ...attempt
      };
      attempts.unshift(newAttempt);
      if (attempts.length > 30) attempts.length = 30;
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(attempts));
      this.updateOverallStats(newAttempt);
      return newAttempt;
    } catch (e) {
      console.error('Error saving wifi security attempt:', e);
      return null;
    }
  },

  getBookmarks() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading wifi security bookmarks:', e);
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
      console.error('Error toggling wifi security bookmark:', e);
      return [];
    }
  },

  isBookmarked(questionId) {
    return this.getBookmarks().includes(questionId);
  },

  getStats() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STATS);
      return data
        ? JSON.parse(data)
        : {
            totalAttempts: 0,
            bestScore: 0,
            averageScore: 0,
            lastScore: 0,
            tierMastery: {}
          };
    } catch (e) {
      console.error('Error reading wifi security stats:', e);
      return { totalAttempts: 0, bestScore: 0, averageScore: 0, lastScore: 0, tierMastery: {} };
    }
  },

  updateOverallStats(newAttempt) {
    try {
      const currentStats = this.getStats();
      const totalAttempts = currentStats.totalAttempts + 1;
      const score = newAttempt.scorePercentage || 0;
      const bestScore = Math.max(currentStats.bestScore, score);
      const averageScore = Math.round(
        (currentStats.averageScore * currentStats.totalAttempts + score) / totalAttempts
      );

      const tierKey = `tier_${newAttempt.tier || 'all'}`;
      const prevTier = currentStats.tierMastery?.[tierKey] || { attempts: 0, bestScore: 0 };
      const tierMastery = {
        ...(currentStats.tierMastery || {}),
        [tierKey]: {
          attempts: prevTier.attempts + 1,
          bestScore: Math.max(prevTier.bestScore, score)
        }
      };

      const updated = {
        totalAttempts,
        bestScore,
        averageScore,
        lastScore: score,
        lastAttemptDate: newAttempt.timestamp,
        tierMastery
      };

      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(updated));
    } catch (e) {
      console.error('Error updating wifi security stats:', e);
    }
  }
};
