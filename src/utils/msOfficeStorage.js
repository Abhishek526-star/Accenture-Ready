// src/utils/msOfficeStorage.js
/**
 * LocalStorage management for MS Office Assessment Module
 */
import { gamificationService } from '../services/gamificationService.js';

const STORAGE_KEYS = {
  ATTEMPTS: 'accenture_msoffice_attempts_v1',
  BOOKMARKS: 'accenture_msoffice_bookmarks_v1',
  STATS: 'accenture_msoffice_stats_v1'
};

export const msOfficeStorage = {
  getAttempts() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading MS Office attempts:', e);
      return [];
    }
  },

  saveAttempt(attempt) {
    try {
      const attempts = this.getAttempts();
      const newAttempt = {
        id: 'msoffice_att_' + Date.now(),
        timestamp: new Date().toISOString(),
        ...attempt
      };
      attempts.unshift(newAttempt);
      if (attempts.length > 30) attempts.length = 30;
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(attempts));
      this.updateOverallStats(newAttempt);

      // Award XP via gamification service if score >= 60%
      if (newAttempt.scorePercentage >= 60) {
        gamificationService.addXP(40, `Passed MS Office Assessment (${newAttempt.scorePercentage}%)`);
      }

      return newAttempt;
    } catch (e) {
      console.error('Error saving MS Office attempt:', e);
      return null;
    }
  },

  getBookmarks() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading MS Office bookmarks:', e);
      return [];
    }
  },

  toggleBookmark(questionId) {
    try {
      const bookmarks = this.getBookmarks();
      const idx = bookmarks.indexOf(questionId);
      let updated;
      if (idx === -1) {
        updated = [...bookmarks, questionId];
      } else {
        updated = bookmarks.filter((id) => id !== questionId);
      }
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Error toggling MS Office bookmark:', e);
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
      return (
        data
          ? JSON.parse(data)
          : {
              totalAttempts: 0,
              bestScore: 0,
              averageScore: 0,
              totalQuestionsAttempted: 0,
              totalCorrect: 0,
              tierMastery: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
            }
      );
    } catch (e) {
      console.error('Error reading MS Office stats:', e);
      return {
        totalAttempts: 0,
        bestScore: 0,
        averageScore: 0,
        totalQuestionsAttempted: 0,
        totalCorrect: 0,
        tierMastery: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
      };
    }
  },

  updateOverallStats(newAttempt) {
    try {
      const current = this.getStats();
      const attempts = this.getAttempts();

      const totalAttempts = attempts.length;
      const bestScore = Math.max(current.bestScore, newAttempt.scorePercentage);
      const totalScore = attempts.reduce((acc, a) => acc + (a.scorePercentage || 0), 0);
      const averageScore = Math.round(totalScore / totalAttempts);

      const totalQuestionsAttempted =
        current.totalQuestionsAttempted + (newAttempt.totalQuestions || 0);
      const totalCorrect = current.totalCorrect + (newAttempt.correctCount || 0);

      const tierMastery = { ...current.tierMastery };
      if (newAttempt.tier && newAttempt.tier !== 'all') {
        const tNum = Number(newAttempt.tier);
        tierMastery[tNum] = Math.max(tierMastery[tNum] || 0, newAttempt.scorePercentage);
      }

      const updatedStats = {
        totalAttempts,
        bestScore,
        averageScore,
        totalQuestionsAttempted,
        totalCorrect,
        tierMastery
      };

      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(updatedStats));
      return updatedStats;
    } catch (e) {
      console.error('Error updating MS Office stats:', e);
      return null;
    }
  },

  clearData() {
    try {
      localStorage.removeItem(STORAGE_KEYS.ATTEMPTS);
      localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
      localStorage.removeItem(STORAGE_KEYS.STATS);
      return true;
    } catch (e) {
      console.error('Error clearing MS Office storage:', e);
      return false;
    }
  }
};
