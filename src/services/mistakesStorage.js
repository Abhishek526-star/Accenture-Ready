// src/services/mistakesStorage.js
// Universal mistake and retry question tracker across all assessment formats

const MISTAKES_KEY = 'accenture_mistakes_v1';

export const mistakesStorage = {
  getMistakes() {
    try {
      const raw = localStorage.getItem(MISTAKES_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Failed to read mistakes', e);
      return [];
    }
  },

  hasMistake(id, type = 'coding') {
    const list = this.getMistakes();
    return list.some(m => String(m.id) === String(id) && m.type === type && !m.resolved);
  },

  recordMistake(item) {
    try {
      const list = this.getMistakes();
      const existingIndex = list.findIndex(m => String(m.id) === String(item.id) && m.type === item.type);
      
      const entry = {
        id: item.id,
        type: item.type || 'coding',
        title: item.title || `Question #${item.id}`,
        category: item.category || 'General',
        difficulty: item.difficulty || 'Medium',
        route: item.route || '/practice',
        failedAt: new Date().toISOString(),
        attemptCount: existingIndex >= 0 ? (list[existingIndex].attemptCount || 1) + 1 : 1,
        resolved: false,
        errorSummary: item.errorSummary || 'Tests failed or incorrect result'
      };

      if (existingIndex >= 0) {
        list[existingIndex] = entry;
      } else {
        list.unshift(entry);
      }

      localStorage.setItem(MISTAKES_KEY, JSON.stringify(list));
      return true;
    } catch (e) {
      return false;
    }
  },

  resolveMistake(id, type = 'coding') {
    try {
      let list = this.getMistakes();
      const target = list.find(m => String(m.id) === String(id) && m.type === type);
      if (target) {
        target.resolved = true;
        target.resolvedAt = new Date().toISOString();
        localStorage.setItem(MISTAKES_KEY, JSON.stringify(list));
      }
      return true;
    } catch (e) {
      return false;
    }
  },

  deleteMistake(id, type = 'coding') {
    try {
      let list = this.getMistakes();
      list = list.filter(m => !(String(m.id) === String(id) && m.type === type));
      localStorage.setItem(MISTAKES_KEY, JSON.stringify(list));
      return true;
    } catch (e) {
      return false;
    }
  },

  getActiveMistakes() {
    return this.getMistakes().filter(m => !m.resolved);
  },

  getResolvedMistakes() {
    return this.getMistakes().filter(m => m.resolved);
  }
};
