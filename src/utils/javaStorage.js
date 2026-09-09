// src/utils/javaStorage.js

const COMPLETED_KEY = 'java-learning-completed-topics';
const ACTIVE_TOPIC_KEY = 'java-learning-active-topic';
const DRAFT_PREFIX = 'java-topic-code-';

export const javaStorage = {
  getCompletedTopics() {
    try {
      const val = localStorage.getItem(COMPLETED_KEY);
      return val ? JSON.parse(val) : [];
    } catch {
      return [];
    }
  },

  isTopicCompleted(topicId) {
    return this.getCompletedTopics().includes(topicId);
  },

  toggleTopicCompleted(topicId) {
    try {
      const current = this.getCompletedTopics();
      let updated;
      if (current.includes(topicId)) {
        updated = current.filter((id) => id !== topicId);
      } else {
        updated = [...current, topicId];
      }
      localStorage.setItem(COMPLETED_KEY, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Failed to toggle completed Java topic:', e);
      return [];
    }
  },

  markTopicCompleted(topicId) {
    try {
      const current = this.getCompletedTopics();
      if (!current.includes(topicId)) {
        current.push(topicId);
        localStorage.setItem(COMPLETED_KEY, JSON.stringify(current));
      }
      return current;
    } catch (e) {
      console.error('Failed to mark Java topic completed:', e);
      return [];
    }
  },

  getActiveTopicId(defaultId = 'java-basics-syntax') {
    try {
      return localStorage.getItem(ACTIVE_TOPIC_KEY) || defaultId;
    } catch {
      return defaultId;
    }
  },

  setActiveTopicId(topicId) {
    try {
      localStorage.setItem(ACTIVE_TOPIC_KEY, topicId);
    } catch (e) {
      console.error('Failed to set active Java topic:', e);
    }
  },

  getTopicDraft(topicId, defaultCode = '') {
    try {
      const saved = localStorage.getItem(`${DRAFT_PREFIX}${topicId}`);
      return saved !== null ? saved : defaultCode;
    } catch {
      return defaultCode;
    }
  },

  setTopicDraft(topicId, code) {
    try {
      localStorage.setItem(`${DRAFT_PREFIX}${topicId}`, code);
    } catch (e) {
      console.error('Failed to save Java topic draft:', e);
    }
  },

  resetTopicDraft(topicId) {
    try {
      localStorage.removeItem(`${DRAFT_PREFIX}${topicId}`);
    } catch (e) {
      console.error('Failed to reset Java topic draft:', e);
    }
  },

  resetAllProgress(topics = []) {
    try {
      localStorage.removeItem(COMPLETED_KEY);
      localStorage.removeItem(ACTIVE_TOPIC_KEY);
      topics.forEach((t) => {
        localStorage.removeItem(`${DRAFT_PREFIX}${t.id}`);
      });
    } catch (e) {
      console.error('Failed to reset all Java learning progress:', e);
    }
  }
};
