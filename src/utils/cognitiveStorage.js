// src/utils/cognitiveStorage.js

const PREFIX = 'frontend-assessment-cognitive-';

export const cognitiveStorage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(PREFIX + key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error('Failed to read cognitive data:', e);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch (e) {
      console.error('Failed to save cognitive data:', e);
    }
  },

  // Streaks management
  getStreak() {
    const defaultData = { current: 1, best: 1, lastDate: new Date().toISOString().slice(0, 10) };
    const streakData = this.get('streak', defaultData);
    const today = new Date().toISOString().slice(0, 10);

    if (streakData.lastDate === today) {
      return streakData;
    }

    // Check if yesterday
    const last = new Date(streakData.lastDate);
    const now = new Date(today);
    const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      streakData.current += 1;
      streakData.best = Math.max(streakData.best, streakData.current);
      streakData.lastDate = today;
      this.set('streak', streakData);
    } else if (diffDays > 1) {
      streakData.current = 1;
      streakData.lastDate = today;
      this.set('streak', streakData);
    }

    return streakData;
  },

  updateStreakActivity() {
    const today = new Date().toISOString().slice(0, 10);
    const streakData = this.getStreak();
    streakData.lastDate = today;
    this.set('streak', streakData);
  },

  // Daily challenge status
  getDailyChallengeStatus() {
    const today = new Date().toISOString().slice(0, 10);
    const saved = this.get('daily-challenge', null);
    if (saved && saved.date === today) {
      return saved;
    }
    return {
      date: today,
      mathCompleted: false,
      pathCompleted: false,
      allCompleted: false,
      score: 0
    };
  },

  updateDailyChallenge(update) {
    const current = this.getDailyChallengeStatus();
    const next = { ...current, ...update };
    if (next.mathCompleted && next.pathCompleted) {
      next.allCompleted = true;
    }
    this.set('daily-challenge', next);
    this.updateStreakActivity();
    return next;
  },

  // Overall Cognitive Sessions History
  getSessionsHistory() {
    return this.get('sessions-history', []);
  },

  saveSessionResult(session) {
    const history = this.getSessionsHistory();
    history.unshift({
      ...session,
      timestamp: Date.now()
    });
    // Keep last 30 sessions
    this.set('sessions-history', history.slice(0, 30));
    this.updateStreakActivity();
  },

  // Best scores
  getBestScores() {
    return this.get('best-scores', {
      memoryMaze: 0,
      mathBubble: 0,
      pathFinder: 0,
      fullAssessment: 0
    });
  },

  updateBestScore(category, score) {
    const best = this.getBestScores();
    if (score > (best[category] || 0)) {
      best[category] = score;
      this.set('best-scores', best);
    }
    return best;
  }
};

export function getCognitiveStats() {
  const history = cognitiveStorage.getSessionsHistory();
  const best = cognitiveStorage.getBestScores();
  const streak = cognitiveStorage.getStreak();

  const totalXP = history.reduce((sum, s) => sum + (s.score || 0), 0);

  return {
    totalXP,
    bestScores: {
      memory_maze: best.memoryMaze || best.memory_maze || 0,
      math_bubble: best.mathBubble || best.math_bubble || 0,
      path_finder: best.pathFinder || best.path_finder || 0,
      full_assessment: best.fullAssessment || 0
    },
    streak: streak.current || 1,
    recentSessions: history
  };
}

export function saveSessionResult(session) {
  const saved = {
    ...session,
    id: `sess_${Date.now()}`,
    timestamp: Date.now()
  };
  cognitiveStorage.saveSessionResult(saved);

  if (session.gameType === 'memory_maze') {
    cognitiveStorage.updateBestScore('memoryMaze', session.score);
  } else if (session.gameType === 'math_bubble') {
    cognitiveStorage.updateBestScore('mathBubble', session.score);
  } else if (session.gameType === 'path_finder') {
    cognitiveStorage.updateBestScore('pathFinder', session.score);
  } else if (session.gameType === 'full_assessment' || session.gameType === 'full_cognitive_mock') {
    cognitiveStorage.updateBestScore('fullAssessment', session.score);
  }

  return saved;
}

export function getDailyChallenge() {
  const status = cognitiveStorage.getDailyChallengeStatus();
  const streak = cognitiveStorage.getStreak();
  const day = new Date().getDate();
  const game = day % 2 === 0 ? 'math_bubble' : 'path_finder';

  const completed = game === 'math_bubble' ? status.mathCompleted : status.pathCompleted;

  return {
    game,
    streak: streak.current || 1,
    completed: Boolean(completed)
  };
}

export function updateDailyChallenge(game) {
  if (game === 'math_bubble') {
    return cognitiveStorage.updateDailyChallenge({ mathCompleted: true });
  } else {
    return cognitiveStorage.updateDailyChallenge({ pathCompleted: true });
  }
}

