// src/utils/pseudocodeStorage.js
// Storage manager for Accenture Pseudocode Assessment Round

import { gamificationService } from '../services/gamificationService.js';
import { mistakesStorage } from '../services/mistakesStorage.js';

const STORAGE_KEYS = {
  ANSWERS: 'accenture_pseudocode_answers_v1',
  COMPLETED: 'accenture_pseudocode_completed_v1',
  BOOKMARKS: 'accenture_pseudocode_bookmarks_v1',
  EXAM_HISTORY: 'accenture_pseudocode_exams_v1',
  NOTES: 'accenture_pseudocode_scratchpad_v1'
};

export const pseudocodeStorage = {
  getAnswers() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.ANSWERS);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  },

  saveAnswer(questionId, optionIndex, isCorrect, questionMeta = {}) {
    try {
      const answers = this.getAnswers();
      answers[questionId] = {
        selected: optionIndex,
        isCorrect,
        answeredAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEYS.ANSWERS, JSON.stringify(answers));

      if (isCorrect) {
        this.markCompleted(questionId);
        mistakesStorage.resolveMistake(questionId, 'pseudocode');
        gamificationService.addXP(40, 'Solved Pseudocode Question');
      } else {
        mistakesStorage.recordMistake({
          id: questionId,
          type: 'pseudocode',
          title: questionMeta.title || `Pseudocode #${questionId}`,
          category: 'Pseudocode Tracing',
          difficulty: questionMeta.difficulty || 'Medium',
          route: `/pseudocode?q=${questionId}`,
          errorSummary: 'Incorrect output trace selected'
        });
      }
    } catch (e) {
      console.error('Failed to save pseudocode answer', e);
    }
  },

  getCompleted() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.COMPLETED);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  markCompleted(questionId) {
    try {
      const completed = new Set(this.getCompleted());
      completed.add(questionId);
      localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(Array.from(completed)));
    } catch (e) {}
  },

  getBookmarks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  toggleBookmark(questionId) {
    try {
      let bookmarks = this.getBookmarks();
      if (bookmarks.includes(questionId)) {
        bookmarks = bookmarks.filter(id => id !== questionId);
      } else {
        bookmarks.push(questionId);
      }
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
      return bookmarks.includes(questionId);
    } catch (e) {
      return false;
    }
  },

  getScratchpad(questionId) {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.NOTES);
      const notes = raw ? JSON.parse(raw) : {};
      return notes[questionId] || '';
    } catch (e) {
      return '';
    }
  },

  saveScratchpad(questionId, content) {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.NOTES);
      const notes = raw ? JSON.parse(raw) : {};
      notes[questionId] = content;
      localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
    } catch (e) {}
  },

  saveExamResult(result) {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.EXAM_HISTORY);
      const history = raw ? JSON.parse(raw) : [];
      history.unshift(result);
      localStorage.setItem(STORAGE_KEYS.EXAM_HISTORY, JSON.stringify(history));
      gamificationService.addXP(100, 'Completed Pseudocode Exam');
    } catch (e) {}
  },

  getExamHistory() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.EXAM_HISTORY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  resetAll() {
    localStorage.removeItem(STORAGE_KEYS.ANSWERS);
    localStorage.removeItem(STORAGE_KEYS.COMPLETED);
    localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
  }
};
