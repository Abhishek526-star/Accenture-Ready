// src/services/gamificationService.js
// Central gamification service for XP, Levels, Streaks, and Achievements across the Accenture Platform

const GAMIFICATION_KEY = 'accenture_gamification_v2';
const ACHIEVEMENTS_KEY = 'accenture_unlocked_achievements_v2';

export const ACHIEVEMENTS_CATALOG = [
  {
    id: 'first_solve',
    title: 'First Solve',
    description: 'Solve your first coding problem or SQL query.',
    icon: '🏆',
    xpReward: 50,
    category: 'coding'
  },
  {
    id: 'week_warrior',
    title: 'Week Warrior',
    description: 'Practice for 7 consecutive days.',
    icon: '🔥',
    xpReward: 200,
    category: 'streak'
  },
  {
    id: 'sql_master',
    title: 'SQL Master',
    description: 'Solve 10 or more SQL challenge queries.',
    icon: '💯',
    xpReward: 150,
    category: 'sql'
  },
  {
    id: 'java_explorer',
    title: 'Java Explorer',
    description: 'Complete 10 Java learning topics and methods.',
    icon: '☕',
    xpReward: 150,
    category: 'java'
  },
  {
    id: 'cognitive_champion',
    title: 'Cognitive Champion',
    description: 'Complete rounds in both Math Bubble and Memory Maze.',
    icon: '🧠',
    xpReward: 120,
    category: 'cognitive'
  },
  {
    id: 'mock_master',
    title: 'Mock Master',
    description: 'Complete a full Accenture mock assessment session.',
    icon: '🎯',
    xpReward: 250,
    category: 'mock'
  },
  {
    id: 'speed_coder',
    title: 'Speed Coder',
    description: 'Solve a question under target time.',
    icon: '⚡',
    xpReward: 100,
    category: 'speed'
  },
  {
    id: 'clean_streak',
    title: 'Consistency Star',
    description: 'Maintain a 3-day active practice streak.',
    icon: '🌟',
    xpReward: 100,
    category: 'streak'
  },
  {
    id: 'dsa_scholar',
    title: 'DSA Pattern Scholar',
    description: 'Study 5 DSA pattern templates.',
    icon: '🧩',
    xpReward: 120,
    category: 'learning'
  }
];

function getTodayString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getYesterdayString() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const gamificationService = {
  getState() {
    try {
      const raw = localStorage.getItem(GAMIFICATION_KEY);
      const today = getTodayString();
      const yesterday = getYesterdayString();

      let state = raw ? JSON.parse(raw) : null;
      if (!state) {
        state = {
          xp: 120, // Initial welcome bonus
          streak: 1,
          bestStreak: 1,
          lastActiveDate: today,
          dailyChallengesCompleted: []
        };
        localStorage.setItem(GAMIFICATION_KEY, JSON.stringify(state));
      } else {
        // Evaluate streak integrity
        if (state.lastActiveDate !== today) {
          if (state.lastActiveDate === yesterday) {
            // Consecutive day: will increment on next action or maintain
          } else {
            // Inactivity detected: streak breaks to 1
            const diffDays = Math.floor((new Date(today) - new Date(state.lastActiveDate)) / (1000 * 60 * 60 * 24));
            if (diffDays > 1) {
              state.streak = 1;
              localStorage.setItem(GAMIFICATION_KEY, JSON.stringify(state));
            }
          }
        }
      }
      return state;
    } catch (e) {
      return { xp: 100, streak: 1, bestStreak: 1, lastActiveDate: getTodayString(), dailyChallengesCompleted: [] };
    }
  },

  recordActivity() {
    try {
      const state = this.getState();
      const today = getTodayString();
      const yesterday = getYesterdayString();

      if (state.lastActiveDate !== today) {
        if (state.lastActiveDate === yesterday) {
          state.streak = (state.streak || 0) + 1;
        } else {
          state.streak = 1;
        }
        state.lastActiveDate = today;
        if (state.streak > (state.bestStreak || 1)) {
          state.bestStreak = state.streak;
        }
        localStorage.setItem(GAMIFICATION_KEY, JSON.stringify(state));
      }
      this.checkAchievements();
    } catch (e) {
      console.error('Failed to record gamification activity', e);
    }
  },

  addXP(amount, reason = '') {
    try {
      const state = this.getState();
      state.xp = Math.max(0, (state.xp || 0) + Number(amount));
      this.recordActivity();
      localStorage.setItem(GAMIFICATION_KEY, JSON.stringify(state));
      this.checkAchievements();
      return state.xp;
    } catch (e) {
      return 0;
    }
  },

  getLevel(xp = null) {
    const currentXp = xp !== null ? xp : this.getState().xp;
    // Every 200 XP is 1 level
    return Math.max(1, Math.floor(currentXp / 200) + 1);
  },

  getXPToNextLevel(xp = null) {
    const currentXp = xp !== null ? xp : this.getState().xp;
    const currentLevel = this.getLevel(currentXp);
    const nextLevelXP = currentLevel * 200;
    const progressInLevel = currentXp - ((currentLevel - 1) * 200);
    return {
      currentLevel,
      currentXp,
      nextLevelXP,
      progressInLevel,
      percent: Math.min(100, Math.round((progressInLevel / 200) * 100))
    };
  },

  getUnlockedAchievements() {
    try {
      const raw = localStorage.getItem(ACHIEVEMENTS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  checkAchievements(externalStats = {}) {
    try {
      const unlocked = new Set(this.getUnlockedAchievements());
      const state = this.getState();
      const newlyUnlocked = [];

      // Check streak
      if (state.streak >= 7 && !unlocked.has('week_warrior')) {
        unlocked.add('week_warrior');
        newlyUnlocked.push('week_warrior');
      }
      if (state.streak >= 3 && !unlocked.has('clean_streak')) {
        unlocked.add('clean_streak');
        newlyUnlocked.push('clean_streak');
      }

      // Check storage stats
      const completedCoding = JSON.parse(localStorage.getItem('frontend-assessment-completed-questions') || '[]');
      const completedSQL = JSON.parse(localStorage.getItem('accenture-sql-completed-questions') || '[]');
      const completedJava = JSON.parse(localStorage.getItem('accenture_java_completed_topics') || '[]');
      const cognitiveHistory = JSON.parse(localStorage.getItem('cognitive-assessment-sessions') || '[]');
      const mockHistory = JSON.parse(localStorage.getItem('accenture_mock_history_v1') || '[]');

      if ((completedCoding.length > 0 || completedSQL.length > 0) && !unlocked.has('first_solve')) {
        unlocked.add('first_solve');
        newlyUnlocked.push('first_solve');
      }

      if (completedSQL.length >= 10 && !unlocked.has('sql_master')) {
        unlocked.add('sql_master');
        newlyUnlocked.push('sql_master');
      }

      if (completedJava.length >= 10 && !unlocked.has('java_explorer')) {
        unlocked.add('java_explorer');
        newlyUnlocked.push('java_explorer');
      }

      const hasMath = cognitiveHistory.some(s => s.gameType === 'math_bubble' || s.gameType === 'full_assessment');
      const hasMaze = cognitiveHistory.some(s => s.gameType === 'memory_maze' || s.gameType === 'full_assessment');
      if (hasMath && hasMaze && !unlocked.has('cognitive_champion')) {
        unlocked.add('cognitive_champion');
        newlyUnlocked.push('cognitive_champion');
      }

      if (mockHistory.length >= 1 && !unlocked.has('mock_master')) {
        unlocked.add('mock_master');
        newlyUnlocked.push('mock_master');
      }

      if (newlyUnlocked.length > 0) {
        localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(Array.from(unlocked)));
        // Award XP for newly unlocked achievements
        newlyUnlocked.forEach(id => {
          const item = ACHIEVEMENTS_CATALOG.find(a => a.id === id);
          if (item && item.xpReward) {
            state.xp = (state.xp || 0) + item.xpReward;
          }
        });
        localStorage.setItem(GAMIFICATION_KEY, JSON.stringify(state));
      }

      return newlyUnlocked;
    } catch (e) {
      return [];
    }
  }
};
