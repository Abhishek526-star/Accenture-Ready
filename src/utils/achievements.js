// src/utils/achievements.js
import { cognitiveStorage } from './cognitiveStorage.js';

export const ALL_ACHIEVEMENTS = [
  {
    id: 'first_victory',
    icon: '🏆',
    title: 'First Victory',
    description: 'Complete your first cognitive game session.',
    condition: (stats) => stats.gamesCompleted >= 1
  },
  {
    id: 'speed_demon',
    icon: '⚡',
    title: 'Speed Demon',
    description: 'Complete a Math Bubble question in under 3 seconds.',
    condition: (stats) => stats.fastestResponse !== undefined && stats.fastestResponse < 3.0
  },
  {
    id: 'number_ninja',
    icon: '🧠',
    title: 'Number Ninja',
    description: 'Achieve 95%+ accuracy in a Math Bubble round.',
    condition: (stats) => stats.mathAccuracy !== undefined && stats.mathAccuracy >= 95
  },
  {
    id: 'path_master',
    icon: '🗺️',
    title: 'Path Master',
    description: 'Complete 5 or more Path Finder puzzles.',
    condition: (stats) => stats.puzzlesCompleted !== undefined && stats.puzzlesCompleted >= 5
  },
  {
    id: 'perfect_round',
    icon: '🔥',
    title: 'Perfect Round',
    description: 'Complete a round without a single incorrect selection.',
    condition: (stats) => stats.incorrectSelections === 0 && (stats.completedQuestions >= 5 || stats.puzzlesCompleted >= 3)
  }
];

export const achievementsManager = {
  getUnlocked() {
    return cognitiveStorage.get('unlocked-achievements', []);
  },

  checkAndUnlock(stats) {
    const unlocked = new Set(this.getUnlocked());
    const newlyUnlocked = [];

    ALL_ACHIEVEMENTS.forEach((ach) => {
      if (!unlocked.has(ach.id) && ach.condition(stats)) {
        unlocked.add(ach.id);
        newlyUnlocked.push(ach);
      }
    });

    if (newlyUnlocked.length > 0) {
      cognitiveStorage.set('unlocked-achievements', Array.from(unlocked));
    }

    return newlyUnlocked;
  }
};

export const ACHIEVEMENTS_LIST = ALL_ACHIEVEMENTS;

export function getUnlockedAchievements() {
  const list = achievementsManager.getUnlocked();
  const map = {};
  list.forEach(id => {
    map[id] = true;
  });
  return map;
}

export function checkAchievements() {
  const history = cognitiveStorage.getSessionsHistory();
  const mathSessions = history.filter(s => s.gameType === 'math_bubble' || s.gameType === 'full_assessment');
  const pathSessions = history.filter(s => s.gameType === 'path_finder' || s.gameType === 'full_assessment');

  const stats = {
    gamesCompleted: history.length,
    fastestResponse: 2.5, // placeholder evaluation from active session if present
    mathAccuracy: mathSessions.length > 0 ? mathSessions[0].accuracy : 0,
    puzzlesCompleted: pathSessions.length,
    incorrectSelections: 0,
    completedQuestions: history.length * 5
  };

  return achievementsManager.checkAndUnlock(stats);
}

