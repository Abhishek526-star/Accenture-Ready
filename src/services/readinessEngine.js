// src/services/readinessEngine.js
// Dynamic Accenture Readiness Engine & Performance Analytics Aggregator
// Evaluates real user activity across Coding (25%), SQL (20%), Java (15%), Aptitude (15%), Cognitive (15%), and Consistency (10%)

import { questions } from '../data/questions.js';
import { sqlQuestions } from '../data/sqlQuestions.js';
import { javaTopics } from '../data/javaTopics.js';
import { storage } from '../utils/storage.js';
import { sqlStorage } from '../utils/sqlStorage.js';
import { javaStorage } from '../utils/javaStorage.js';
import { getCognitiveStats } from '../utils/cognitiveStorage.js';
import { gamificationService } from './gamificationService.js';

export function calculateReadinessScore() {
  // 1. Coding Section (25%)
  const completedCodingIds = storage.getCompletedQuestions();
  const codingTotal = questions.length || 1;
  const codingPercent = Math.min(100, Math.round((completedCodingIds.length / codingTotal) * 100));

  // Also factor in DOM test accuracy
  let totalDomTests = 0;
  let passedDomTests = 0;
  questions.forEach(q => {
    const res = storage.getQuestionResults(q.id);
    if (res && res.results) {
      res.results.forEach(t => {
        totalDomTests++;
        if (t.passed) passedDomTests++;
      });
    }
  });
  const codingAccuracy = totalDomTests > 0 ? (passedDomTests / totalDomTests) : (codingPercent > 0 ? 0.8 : 0);
  const codingScore = Math.round(codingPercent * 0.7 + (codingAccuracy * 100) * 0.3);

  // 2. SQL Section (20%)
  const completedSQLIds = sqlStorage.getCompletedQuestions();
  const sqlTotal = sqlQuestions.length || 1;
  const sqlPercent = Math.min(100, Math.round((completedSQLIds.length / sqlTotal) * 100));
  const sqlScore = sqlPercent;

  // 3. Java Learning (15%)
  const completedJavaIds = javaStorage.getCompletedTopics();
  const javaTotal = javaTopics.length || 1;
  const javaPercent = Math.min(100, Math.round((completedJavaIds.length / javaTotal) * 100));
  const javaScore = javaPercent;

  // 4. Aptitude / MCQs Section (15%) - Network, Security, Cloud, Wi-Fi, OOP
  const netResults = JSON.parse(localStorage.getItem('accenture_network_assessment_v1') || '{}');
  const netSecResults = JSON.parse(localStorage.getItem('accenture_netsec_assessment_v1') || '{}');
  const cloudResults = JSON.parse(localStorage.getItem('accenture_cloud_assessment_v1') || '{}');
  const wifiResults = JSON.parse(localStorage.getItem('accenture_wifi_assessment_v1') || '{}');
  const oopResults = JSON.parse(localStorage.getItem('accenture_oop_assessment_v1') || '{}');
  const pseudoAnswers = JSON.parse(localStorage.getItem('accenture_pseudocode_answers_v1') || '{}');

  const countAnswered = (obj) => Object.keys(obj || {}).length;
  const countCorrect = (obj) => Object.values(obj || {}).filter(v => v === true || v?.isCorrect === true).length;

  const totalAptAttempted = countAnswered(netResults) + countAnswered(netSecResults) + countAnswered(cloudResults) + countAnswered(wifiResults) + countAnswered(oopResults) + countAnswered(pseudoAnswers);
  const totalAptCorrect = countCorrect(netResults) + countCorrect(netSecResults) + countCorrect(cloudResults) + countCorrect(wifiResults) + countCorrect(oopResults) + countCorrect(pseudoAnswers);

  let aptitudeScore = 0;
  if (totalAptAttempted > 0) {
    aptitudeScore = Math.min(100, Math.round((totalAptCorrect / totalAptAttempted) * 100));
  } else {
    // If no MCQs attempted yet, base on overall system baseline
    aptitudeScore = Math.min(60, Math.round((codingScore + sqlScore + javaScore) / 3));
  }

  // 5. Cognitive Games (15%) - Math Bubble & Memory Maze
  const cognitiveStats = getCognitiveStats();
  const gamesPlayed = cognitiveStats.gamesPlayed || 0;
  const mathAcc = cognitiveStats.accuracy || 0;
  // Scaled cognitive score: min 1 game played yields foundation score
  let cognitiveScore = 0;
  if (gamesPlayed > 0) {
    cognitiveScore = Math.min(100, Math.round((mathAcc * 0.7) + (Math.min(gamesPlayed, 5) * 6)));
  } else {
    cognitiveScore = 0;
  }

  // 6. Consistency (10%) - Streaks & XP
  const gamify = gamificationService.getState();
  const streak = gamify.streak || 1;
  const consistencyScore = Math.min(100, Math.round(Math.min(streak, 7) * 14.28));

  // Weighted Overall Readiness Calculation
  const overall = Math.round(
    (codingScore * 0.25) +
    (sqlScore * 0.20) +
    (javaScore * 0.15) +
    (aptitudeScore * 0.15) +
    (cognitiveScore * 0.15) +
    (consistencyScore * 0.10)
  );

  return {
    overallScore: Math.max(0, Math.min(100, overall)),
    breakdown: {
      coding: codingScore,
      sql: sqlScore,
      java: javaScore,
      aptitude: aptitudeScore,
      cognitive: cognitiveScore,
      consistency: consistencyScore
    },
    rawCounts: {
      codingSolved: completedCodingIds.length,
      codingTotal: questions.length,
      sqlSolved: completedSQLIds.length,
      sqlTotal: sqlQuestions.length,
      javaSolved: completedJavaIds.length,
      javaTotal: javaTopics.length,
      aptitudeSolved: totalAptCorrect,
      aptitudeAttempted: totalAptAttempted,
      gamesPlayed: gamesPlayed,
      streak: streak,
      xp: gamify.xp || 0,
      level: gamificationService.getLevel(gamify.xp)
    }
  };
}

export function getTopicAnalytics() {
  const completedCoding = storage.getCompletedQuestions();
  const completedSQL = sqlStorage.getCompletedQuestions();
  const completedJava = javaStorage.getCompletedTopics();

  // Aggregate standard topics
  const topics = [
    {
      name: 'Arrays & DOM',
      category: 'Coding',
      total: 5,
      solved: completedCoding.filter(id => id <= 5).length,
      route: '/practice',
      type: 'coding'
    },
    {
      name: 'Strings & Parsing',
      category: 'Coding',
      total: 4,
      solved: completedCoding.filter(id => id > 5 && id <= 9).length,
      route: '/practice',
      type: 'coding'
    },
    {
      name: 'HashMap & Frequency',
      category: 'Coding',
      total: 4,
      solved: completedCoding.filter(id => id > 9 && id <= 13).length,
      route: '/practice',
      type: 'coding'
    },
    {
      name: 'SQL GROUP BY & Aggregates',
      category: 'SQL',
      total: 6,
      solved: completedSQL.filter(id => String(id).includes('group') || String(id).includes('002') || String(id).includes('005')).length,
      route: '/sql-assessment',
      type: 'sql'
    },
    {
      name: 'SQL JOIN & Multi-Table',
      category: 'SQL',
      total: 8,
      solved: completedSQL.filter(id => String(id).includes('join') || String(id).includes('004') || String(id).includes('007')).length,
      route: '/sql-assessment',
      type: 'sql'
    },
    {
      name: 'Java Collections (List/Map/Set)',
      category: 'Java',
      total: 5,
      solved: completedJava.filter(id => String(id).includes('collection') || String(id).includes('map') || String(id).includes('list') || id >= 18).length,
      route: '/java-learning',
      type: 'java'
    },
    {
      name: 'OOPs & Architecture',
      category: 'Core CS',
      total: 6,
      solved: completedJava.filter(id => String(id).includes('oop') || String(id).includes('class') || (id >= 11 && id <= 17)).length,
      route: '/oop-assessment',
      type: 'mcq'
    },
    {
      name: 'Pseudocode & Bitwise',
      category: 'Technical',
      total: 10,
      solved: Object.values(JSON.parse(localStorage.getItem('accenture_pseudocode_answers_v1') || '{}')).filter(v => v?.isCorrect).length,
      route: '/pseudocode',
      type: 'pseudocode'
    }
  ];

  return topics.map(t => {
    // Dynamic accuracy percentage calculation based on actual solves and total
    const acc = t.total > 0 ? Math.round((t.solved / t.total) * 100) : 0;
    return {
      ...t,
      accuracy: acc,
      isWeak: acc < 60
    };
  });
}
