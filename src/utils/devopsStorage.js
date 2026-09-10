// src/utils/devopsStorage.js
/**
 * LocalStorage management for DevOps Assessment Module
 */
import { gamificationService } from '../services/gamificationService.js';

const STORAGE_KEYS = {
  ATTEMPTS: 'accenture_devops_attempts_v1',
  BOOKMARKS: 'accenture_devops_bookmarks_v1',
  STATS: 'accenture_devops_stats_v1'
};

export const devopsStorage = {
  getAttempts() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading devops attempts:', e);
      return [];
    }
  },

  saveAttempt(attempt) {
    try {
      const attempts = this.getAttempts();
      const newAttempt = {
        id: 'devops_att_' + Date.now(),
        timestamp: new Date().toISOString(),
        ...attempt
      };
      attempts.unshift(newAttempt);
      if (attempts.length > 30) attempts.length = 30;
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(attempts));
      this.updateOverallStats(newAttempt);

      // Award XP via gamification service if score >= 60%
      if (newAttempt.scorePercentage >= 60) {
        gamificationService.addXP(40, `Passed DevOps Assessment (${newAttempt.scorePercentage}%)`);
      }

      return newAttempt;
    } catch (e) {
      console.error('Error saving devops attempt:', e);
      return null;
    }
  },

  getBookmarks() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading devops bookmarks:', e);
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
      console.error('Error toggling devops bookmark:', e);
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
      console.error('Error reading devops stats:', e);
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
      console.error('Error updating devops stats:', e);
    }
  }
};
