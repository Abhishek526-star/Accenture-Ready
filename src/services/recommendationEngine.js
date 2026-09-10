// src/services/recommendationEngine.js
// Adaptive Learning System: Detects candidate weak areas and delivers targeted 3-step learning loops

import { getTopicAnalytics } from './readinessEngine.js';
import { mistakesStorage } from './mistakesStorage.js';
import { gamificationService } from './gamificationService.js';

export function getWeakAreas() {
  const topicStats = getTopicAnalytics();
  const mistakes = mistakesStorage.getActiveMistakes();

  // Find topics under 60% accuracy or with unresolved mistakes
  const weakTopics = topicStats.filter(t => t.accuracy < 60 || mistakes.some(m => m.category.toLowerCase().includes(t.name.toLowerCase().split(' ')[0])));

  // If user hasn't practiced much or everything is high, provide the lowest 3
  if (weakTopics.length === 0) {
    return topicStats.sort((a, b) => a.accuracy - b.accuracy).slice(0, 3);
  }

  return weakTopics.sort((a, b) => a.accuracy - b.accuracy).slice(0, 4);
}

export function getSmartRecommendations() {
  const weakAreas = getWeakAreas();
  const activeMistakes = mistakesStorage.getActiveMistakes();
  const gamify = gamificationService.getState();
  const recommendations = [];

  // 1. If there's an active mistake recorded, prioritize it
  if (activeMistakes.length > 0) {
    const topMistake = activeMistakes[0];
    recommendations.push({
      id: `rec-mistake-${topMistake.id}`,
      type: 'mistake_retry',
      badge: 'Immediate Retry Needed',
      badgeColor: '#ef4444',
      title: `Retry Failed: ${topMistake.title}`,
      description: `You encountered errors on this ${topMistake.category} problem. Fixing mistakes builds lasting test confidence.`,
      actionLabel: 'Practice Mistake Now',
      actionRoute: topMistake.route || '/mistakes',
      steps: [
        { icon: '💡', text: 'Review hints & expected test case bounds' },
        { icon: '⚡', text: 'Correct syntax errors and edge conditions' },
        { icon: '✓', text: 'Achieve 100% test pass to clear the mistake flag' }
      ]
    });
  }

  // 2. Add Adaptive 3-Step Loops for top weak topics
  weakAreas.forEach((area) => {
    let learnRoute = '/learn';
    let practiceRoute = area.route;
    let learnLabel = `Learn ${area.name}`;
    let practiceLabel = `Practice ${area.name}`;

    if (area.name.includes('SQL JOIN')) {
      learnRoute = '/learn/cheat-sheets';
      practiceRoute = '/sql-assessment';
      learnLabel = 'Review SQL JOIN Syntax';
      practiceLabel = 'Solve 5 JOIN Problems';
    } else if (area.name.includes('HashMap')) {
      learnRoute = '/learn/dsa';
      practiceRoute = '/practice';
      learnLabel = 'Study Frequency Map Pattern';
      practiceLabel = 'Practice HashMap Questions';
    } else if (area.name.includes('Collections')) {
      learnRoute = '/java-learning';
      practiceRoute = '/java-learning';
      learnLabel = 'Explore Java Collections';
      practiceLabel = 'Run Collection Code Snippets';
    } else if (area.name.includes('Arrays')) {
      learnRoute = '/learn/dsa';
      practiceRoute = '/practice';
      learnLabel = 'Review Two-Pointer & Sliding Window';
      practiceLabel = 'Attempt Array Challenges';
    }

    recommendations.push({
      id: `rec-weak-${area.name.replace(/\s+/g, '-').toLowerCase()}`,
      type: 'weak_topic_loop',
      badge: `${area.accuracy}% Accuracy Warning`,
      badgeColor: '#f59e0b',
      title: `Targeted Loop: ${area.name}`,
      description: `You are scoring below threshold (${area.accuracy}%) in ${area.name}. Follow this structured remediation cycle:`,
      actionLabel: `Start ${area.name} Drill`,
      actionRoute: practiceRoute,
      learnRoute: learnRoute,
      steps: [
        { icon: '📚', text: `Step 1: ${learnLabel}` },
        { icon: '🧪', text: `Step 2: ${practiceLabel}` },
        { icon: '🎯', text: `Step 3: Retest in Mock Assessment` }
      ]
    });
  });

  // 3. Daily Streak Call-to-Action
  recommendations.push({
    id: 'rec-streak',
    type: 'streak_alert',
    badge: `🔥 ${gamify.streak || 1} Day Streak`,
    badgeColor: '#f97316',
    title: 'Keep Your Daily Streak Active',
    description: 'Daily consistent practice is the single highest predictor of clearing Accenture technical rounds.',
    actionLabel: 'Solve Daily Challenge (+50 XP)',
    actionRoute: '/daily-challenge',
    steps: [
      { icon: '📅', text: 'Attempt today\'s curated daily challenge problem' },
      { icon: '⭐', text: 'Earn +50 bonus XP toward your candidate level' },
      { icon: '🏆', text: 'Protect your active streak badge' }
    ]
  });

  return recommendations;
}
