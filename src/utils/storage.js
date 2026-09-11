// src/utils/storage.js

const PREFIX = 'frontend-assessment-';

export const storage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(PREFIX + key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error('Failed to read from localStorage:', e);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch (e) {
      console.error('Failed to write to localStorage:', e);
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(PREFIX + key);
    } catch (e) {
      console.error('Failed to remove from localStorage:', e);
    }
  },

  // Specialized helpers for candidate code (all editable: JS, HTML, CSS)
  getCandidateCode(questionId, defaultJS = '', defaultHTML = '', defaultCSS = '') {
    try {
      // Check full code bundle first
      const savedBundle = localStorage.getItem(`frontend-practice-bundle-q${questionId}`);
      if (savedBundle) {
        const parsed = JSON.parse(savedBundle);
        // Guard against any previously corrupted data where js contained html tags
        let js = parsed.js;
        if (typeof js === 'string' && js.trim().startsWith('<')) {
          js = defaultJS;
        }
        let css = parsed.css;
        if (!css || typeof css !== 'string' || css.trim() === '' || css.includes('Same as provided solution')) {
          css = defaultCSS;
        }
        let html = parsed.html;
        if (!html || typeof html !== 'string' || html.trim() === '') {
          html = defaultHTML;
        }
        return {
          js: js || defaultJS,
          html: html,
          css: css
        };
      }

      // Check legacy single key
      const legacyCode = localStorage.getItem(`frontend-practice-code-q${questionId}`);
      let js = defaultJS;
      if (legacyCode && !legacyCode.trim().startsWith('<')) {
        js = legacyCode;
      }

      return {
        js: js,
        html: defaultHTML,
        css: defaultCSS
      };
    } catch (e) {
      return {
        js: defaultJS,
        html: defaultHTML,
        css: defaultCSS
      };
    }
  },

  setCandidateCode(questionId, codeBundle) {
    try {
      localStorage.setItem(
        `frontend-practice-bundle-q${questionId}`,
        JSON.stringify(codeBundle)
      );
      // Also sync primary js key
      if (codeBundle.js) {
        localStorage.setItem(`frontend-practice-code-q${questionId}`, codeBundle.js);
      }
    } catch (e) {
      console.error('Failed to save code bundle:', e);
    }
  },

  resetCandidateCode(questionId, defaultJS, defaultHTML, defaultCSS) {
    try {
      const resetBundle = {
        js: defaultJS,
        html: defaultHTML,
        css: defaultCSS
      };
      localStorage.setItem(
        `frontend-practice-bundle-q${questionId}`,
        JSON.stringify(resetBundle)
      );
      localStorage.setItem(`frontend-practice-code-q${questionId}`, defaultJS);
      this.remove(`results-q${questionId}`);
    } catch (e) {
      console.error('Failed to reset code:', e);
    }
  },

  // Completed questions tracking
  getCompletedQuestions() {
    return this.get('completed-questions', []);
  },

  isQuestionCompleted(questionId) {
    const completed = new Set(this.getCompletedQuestions());
    return completed.has(Number(questionId));
  },

  markQuestionCompleted(questionId) {
    const completed = new Set(this.getCompletedQuestions());
    completed.add(Number(questionId));
    this.set('completed-questions', Array.from(completed));
  },

  unmarkQuestionCompleted(questionId) {
    const completed = new Set(this.getCompletedQuestions());
    completed.delete(Number(questionId));
    this.set('completed-questions', Array.from(completed));
  },

  // Test results per question
  getQuestionResults(questionId) {
    return this.get(`results-q${questionId}`, null);
  },

  setQuestionResults(questionId, results) {
    this.set(`results-q${questionId}`, results);
    if (results && results.allPassed) {
      this.markQuestionCompleted(questionId);
    }
  },

  // Active question ID
  getActiveQuestionId() {
    return this.get('active-question-id', 1);
  },

  setActiveQuestionId(id) {
    this.set('active-question-id', Number(id));
  },

  // Timer preferences
  getTimerSettings() {
    return this.get('timer-settings', {
      enabled: true,
      remainingSeconds: 3600, // 60 minutes
      isPaused: false,
    });
  },

  setTimerSettings(settings) {
    this.set('timer-settings', settings);
  },

  // Theme preference
  getTheme() {
    return this.get('theme', 'dark');
  },

  setTheme(theme) {
    this.set('theme', theme);
  }
};
