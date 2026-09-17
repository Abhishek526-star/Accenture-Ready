// src/services/readinessEngine.js
// Dynamic Accenture Readiness Engine & Performance Analytics Aggregator
// Evaluates real user activity across Coding (25%), SQL (20%), Java (15%), Aptitude (15%), Cognitive (15%), and Consistency (10%)

import { questions } from '../data/questions.js';
import { DSA_PRACTICE_QUESTIONS } from '../data/dsaPracticeQuestions.js';
import { sqlQuestions } from '../data/sqlQuestions.js';
import { javaTopics } from '../data/javaTopics.js';
import { pseudocodeQuestions } from '../data/pseudocodeQuestions.js';
import { storage } from '../utils/storage.js';
import { sqlStorage } from '../utils/sqlStorage.js';
import { javaStorage } from '../utils/javaStorage.js';
import { getCognitiveStats } from '../utils/cognitiveStorage.js';
import { gamificationService } from './gamificationService.js';
import { telemetryService } from './telemetryService.js';
import { mistakesStorage } from './mistakesStorage.js';

export function calculateReadinessScore() {
  // 1. Coding Section (25%)
  // Aggregate unique solves across Frontend Coding (12), DSA Practice (61), and Recent PYQs (8)
  const completedFeCoding = storage.getCompletedQuestions();
  let completedDsaPractice = [];
  try {
    completedDsaPractice = JSON.parse(localStorage.getItem('dsa-practice-solved') || '[]');
  } catch {}

  let completedRecent = [];
  try {
    completedRecent = JSON.parse(localStorage.getItem('recent-solved') || '[]');
  } catch {}
  const completedRecentCoding = completedRecent.filter(id => !String(id).includes('sql'));

  const uniqueCodingSolvedSet = new Set([
    ...completedFeCoding.map(String),
    ...completedDsaPractice.map(String),
    ...completedRecentCoding.map(String)
  ]);

  const totalCodingQuestions = (questions.length || 12) + (DSA_PRACTICE_QUESTIONS.length || 61) + 8;
  const codingSolvedCount = uniqueCodingSolvedSet.size;
  const codingPercent = Math.min(100, Math.round((codingSolvedCount / totalCodingQuestions) * 100));

  // Compute coding accuracy from telemetry attempts
  const codingTelemetry = telemetryService.getTypeStats('coding');
  const dsaTelemetry = telemetryService.getTypeStats('dsa');
  const totalCodingAttempts = Math.max(codingSolvedCount, codingTelemetry.attempts + dsaTelemetry.attempts);
  const totalCodingPassed = codingTelemetry.passed + dsaTelemetry.passed;
  const codingAccuracy = totalCodingAttempts > 0
    ? (codingTelemetry.attempts + dsaTelemetry.attempts > 0
        ? (totalCodingPassed / (codingTelemetry.attempts + dsaTelemetry.attempts))
        : (codingSolvedCount > 0 ? 0.9 : 0))
    : 0;

  const codingScore = Math.round(codingPercent * 0.7 + (codingAccuracy * 100) * 0.3);

  // 2. SQL Section (20%)
  // Aggregate SQL Sandbox (30) + Recent SQL (4)
  const completedSQL = sqlStorage.getCompletedQuestions();
  const completedRecentSQL = completedRecent.filter(id => String(id).includes('sql'));
  const uniqueSqlSolvedSet = new Set([
    ...completedSQL.map(String),
    ...completedRecentSQL.map(String)
  ]);

  const totalSqlQuestions = (sqlQuestions.length || 30) + 4;
  const sqlSolvedCount = uniqueSqlSolvedSet.size;
  const sqlPercent = Math.min(100, Math.round((sqlSolvedCount / totalSqlQuestions) * 100));

  const sqlTelemetry = telemetryService.getTypeStats('sql');
  const totalSqlAttempts = Math.max(sqlSolvedCount, sqlTelemetry.attempts);
  const sqlAccuracy = totalSqlAttempts > 0
    ? (sqlTelemetry.attempts > 0
        ? (sqlTelemetry.passed / sqlTelemetry.attempts)
        : (sqlSolvedCount > 0 ? 0.9 : 0))
    : 0;

  const sqlScore = Math.round(sqlPercent * 0.7 + (sqlAccuracy * 100) * 0.3);

  // 3. Java Learning (15%)
  const completedJava = javaStorage.getCompletedTopics();
  const totalJavaTopics = javaTopics.length || 31;
  const javaPercent = Math.min(100, Math.round((completedJava.length / totalJavaTopics) * 100));
  const javaScore = javaPercent;

  // 4. Aptitude & Technical MCQs Section (15%)
  // Read real quiz history and stats from active storage modules
  let totalAptAttempted = 0;
  let totalAptCorrect = 0;

  // Network Storage
  try {
    const netStats = JSON.parse(localStorage.getItem('accenture_network_stats_v1') || 'null');
    if (netStats && netStats.totalQuestionsAttempted) {
      totalAptAttempted += netStats.totalQuestionsAttempted;
      totalAptCorrect += netStats.totalCorrect || 0;
    } else {
      const netAttempts = JSON.parse(localStorage.getItem('accenture_network_attempts_v1') || '[]');
      netAttempts.forEach(a => {
        totalAptAttempted += a.totalQuestions || 0;
        totalAptCorrect += a.correctCount || 0;
      });
    }
  } catch {}

  // Network Security Storage
  try {
    const netsecStats = JSON.parse(localStorage.getItem('accenture_netsec_stats_v1') || 'null');
    if (netsecStats && netsecStats.totalQuestionsAttempted) {
      totalAptAttempted += netsecStats.totalQuestionsAttempted;
      totalAptCorrect += netsecStats.totalCorrect || 0;
    } else {
      const netsecAttempts = JSON.parse(localStorage.getItem('accenture_netsec_attempts_v1') || '[]');
      netsecAttempts.forEach(a => {
        totalAptAttempted += a.totalQuestions || 0;
        totalAptCorrect += a.correctCount || 0;
      });
    }
  } catch {}

  // Cloud Storage
  try {
    const cloudHistory = JSON.parse(localStorage.getItem('cloud-assessment-quiz-history') || '[]');
    cloudHistory.forEach(a => {
      totalAptAttempted += a.totalQuestions || 0;
      totalAptCorrect += a.correctCount || 0;
    });
  } catch {}

  // Cloud Security Storage
  try {
    const cloudSecHistory = JSON.parse(localStorage.getItem('cloud-security-quiz-history') || '[]');
    cloudSecHistory.forEach(a => {
      totalAptAttempted += a.totalQuestions || 0;
      totalAptCorrect += a.correctCount || 0;
    });
  } catch {}

  // Wi-Fi Security Storage
  try {
    const wifiStats = JSON.parse(localStorage.getItem('accenture_wifisec_stats_v1') || 'null');
    if (wifiStats && wifiStats.totalQuestionsAttempted) {
      totalAptAttempted += wifiStats.totalQuestionsAttempted;
      totalAptCorrect += wifiStats.totalCorrect || 0;
    } else {
      const wifiAttempts = JSON.parse(localStorage.getItem('accenture_wifisec_attempts_v1') || '[]');
      wifiAttempts.forEach(a => {
        totalAptAttempted += a.totalQuestions || 0;
        totalAptCorrect += a.correctCount || 0;
      });
    }
  } catch {}

  // OOP Storage
  try {
    const oopStats = JSON.parse(localStorage.getItem('accenture_oop_stats_v1') || 'null');
    if (oopStats && oopStats.totalQuestionsAttempted) {
      totalAptAttempted += oopStats.totalQuestionsAttempted;
      totalAptCorrect += oopStats.totalCorrect || 0;
    } else {
      const oopAttempts = JSON.parse(localStorage.getItem('accenture_oop_attempts_v1') || '[]');
      oopAttempts.forEach(a => {
        totalAptAttempted += a.totalQuestions || 0;
        totalAptCorrect += a.correctCount || 0;
      });
    }
  } catch {}

  // DevOps Storage
  try {
    const devopsStats = JSON.parse(localStorage.getItem('accenture_devops_stats_v1') || 'null');
    if (devopsStats && devopsStats.totalQuestionsAttempted) {
      totalAptAttempted += devopsStats.totalQuestionsAttempted;
      totalAptCorrect += devopsStats.totalCorrect || 0;
    } else {
      const devopsAttempts = JSON.parse(localStorage.getItem('accenture_devops_attempts_v1') || '[]');
      devopsAttempts.forEach(a => {
        totalAptAttempted += a.totalQuestions || 0;
        totalAptCorrect += a.correctCount || 0;
      });
    }
  } catch {}

  // MS Office Storage
  try {
    const msStats = JSON.parse(localStorage.getItem('accenture_msoffice_stats_v1') || 'null');
    if (msStats && msStats.totalQuestionsAttempted) {
      totalAptAttempted += msStats.totalQuestionsAttempted;
      totalAptCorrect += msStats.totalCorrect || 0;
    } else {
      const msAttempts = JSON.parse(localStorage.getItem('accenture_msoffice_attempts_v1') || '[]');
      msAttempts.forEach(a => {
        totalAptAttempted += a.totalQuestions || 0;
        totalAptCorrect += a.correctCount || 0;
      });
    }
  } catch {}

  // Pseudocode Round
  try {
    const pseudoAnswers = JSON.parse(localStorage.getItem('accenture_pseudocode_answers_v1') || '{}');
    const pseudoAttempted = Object.keys(pseudoAnswers).length;
    const pseudoCorrect = Object.values(pseudoAnswers).filter(v => v?.isCorrect === true || v === true).length;
    totalAptAttempted += pseudoAttempted;
    totalAptCorrect += pseudoCorrect;
  } catch {}

  // Important Questions Quiz History (Set 1 & Set 2)
  try {
    const pyqHistory = JSON.parse(localStorage.getItem('important-questions-quiz-history') || '[]');
    pyqHistory.forEach(a => {
      totalAptAttempted += a.totalQuestions || 0;
      totalAptCorrect += a.correctCount || 0;
    });
    const pyq2History = JSON.parse(localStorage.getItem('important-questions-set2-quiz-history') || '[]');
    pyq2History.forEach(a => {
      totalAptAttempted += a.totalQuestions || 0;
      totalAptCorrect += a.correctCount || 0;
    });
  } catch {}

  let aptitudeScore = 0;
  if (totalAptAttempted > 0) {
    aptitudeScore = Math.min(100, Math.round((totalAptCorrect / totalAptAttempted) * 100));
  } else {
    // If no MCQs attempted yet, reflect 0% accurately
    aptitudeScore = 0;
  }

  // 5. Cognitive Games (15%) - Math Bubble & Memory Maze
  const cognitiveStats = getCognitiveStats();
  const gamesPlayed = cognitiveStats.gamesPlayed || 0;
  const mathAcc = cognitiveStats.accuracy || 0;
  let cognitiveScore = 0;
  if (gamesPlayed > 0) {
    cognitiveScore = Math.min(100, Math.round((mathAcc * 0.6) + (Math.min(gamesPlayed, 8) * 5)));
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
      codingSolved: codingSolvedCount,
      codingTotal: totalCodingQuestions,
      codingAttempted: totalCodingAttempts,
      sqlSolved: sqlSolvedCount,
      sqlTotal: totalSqlQuestions,
      sqlAttempted: totalSqlAttempts,
      javaSolved: completedJava.length,
      javaTotal: totalJavaTopics,
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
  const completedFeCoding = storage.getCompletedQuestions();
  let completedDsa = [];
  try {
    completedDsa = JSON.parse(localStorage.getItem('dsa-practice-solved') || '[]');
  } catch {}

  let completedRecent = [];
  try {
    completedRecent = JSON.parse(localStorage.getItem('recent-solved') || '[]');
  } catch {}

  const completedSQL = sqlStorage.getCompletedQuestions();
  const completedJava = javaStorage.getCompletedTopics();
  let pseudoAnswers = {};
  try {
    pseudoAnswers = JSON.parse(localStorage.getItem('accenture_pseudocode_answers_v1') || '{}');
  } catch {}

  const activeMistakes = mistakesStorage.getActiveMistakes();

  // Dynamic Topics mapped to real questions in the codebase
  const topics = [
    {
      name: 'Arrays & Traversal',
      category: 'Coding',
      total: 25,
      solved: (
        completedDsa.filter(id => {
          const q = DSA_PRACTICE_QUESTIONS.find(p => p.id === id);
          return q && q.category && q.category.toLowerCase().includes('array');
        }).length +
        completedFeCoding.filter(id => id <= 8).length
      ),
      route: '/dsa-practice',
      type: 'coding'
    },
    {
      name: 'Strings & Parsing',
      category: 'Coding',
      total: 18,
      solved: (
        completedDsa.filter(id => {
          const q = DSA_PRACTICE_QUESTIONS.find(p => p.id === id);
          return q && q.category && q.category.toLowerCase().includes('string');
        }).length +
        completedFeCoding.filter(id => id > 8 && id <= 14).length
      ),
      route: '/dsa-practice',
      type: 'coding'
    },
    {
      name: 'Bit Manipulation & Math',
      category: 'Coding & Tech',
      total: 20,
      solved: (
        completedDsa.filter(id => {
          const q = DSA_PRACTICE_QUESTIONS.find(p => p.id === id);
          return q && q.category && (q.category.toLowerCase().includes('bit') || q.category.toLowerCase().includes('math'));
        }).length
      ),
      route: '/dsa-practice',
      type: 'coding'
    },
    {
      name: 'SQL GROUP BY & Aggregates',
      category: 'SQL',
      total: 12,
      solved: (
        completedSQL.filter(id => {
          const q = sqlQuestions.find(s => s.id === id);
          return q && (q.category?.toLowerCase().includes('aggregate') || q.title?.toLowerCase().includes('group') || String(id).includes('002') || String(id).includes('005'));
        }).length
      ),
      route: '/sql-assessment',
      type: 'sql'
    },
    {
      name: 'SQL JOIN & Multi-Table',
      category: 'SQL',
      total: 14,
      solved: (
        completedSQL.filter(id => {
          const q = sqlQuestions.find(s => s.id === id);
          return q && (q.category?.toLowerCase().includes('join') || q.title?.toLowerCase().includes('join') || String(id).includes('004') || String(id).includes('007'));
        }).length
      ),
      route: '/sql-assessment',
      type: 'sql'
    },
    {
      name: 'Java Collections Framework',
      category: 'Java',
      total: 10,
      solved: (
        completedJava.filter(id =>
          String(id).toLowerCase().includes('collection') ||
          String(id).toLowerCase().includes('map') ||
          String(id).toLowerCase().includes('list') ||
          String(id).toLowerCase().includes('set')
        ).length
      ),
      route: '/java-learning',
      type: 'java'
    },
    {
      name: 'Java OOPs & Architecture',
      category: 'Java & Core CS',
      total: 12,
      solved: (
        completedJava.filter(id =>
          String(id).toLowerCase().includes('oop') ||
          String(id).toLowerCase().includes('class') ||
          String(id).toLowerCase().includes('interface') ||
          String(id).toLowerCase().includes('inherit')
        ).length
      ),
      route: '/java-learning',
      type: 'java'
    },
    {
      name: 'Pseudocode & Recursive Tracing',
      category: 'Technical Round',
      total: pseudocodeQuestions.length || 40,
      solved: Object.values(pseudoAnswers).filter(v => v?.isCorrect === true || v === true).length,
      route: '/pseudocode',
      type: 'pseudocode'
    }
  ];

  return topics.map(t => {
    const attemptsForTopic = t.solved;
    const hasMistake = activeMistakes.some(m =>
      m.category?.toLowerCase().includes(t.name.toLowerCase().split(' ')[0]) ||
      m.title?.toLowerCase().includes(t.name.toLowerCase().split(' ')[0])
    );

    // If user has solved questions in this topic, calculate accuracy
    // If not attempted at all (solved = 0), mark as not_started
    let accuracy = 0;
    let status = 'not_started';
    let isWeak = false;

    if (t.solved > 0) {
      if (hasMistake) {
        accuracy = Math.max(35, Math.min(65, Math.round((t.solved / (t.solved + 1)) * 100)));
        status = 'needs_practice';
        isWeak = true;
      } else {
        accuracy = Math.min(100, Math.round((t.solved / Math.max(1, t.solved)) * 100));
        status = 'mastered';
        isWeak = false;
      }
    } else {
      if (hasMistake) {
        accuracy = 30;
        status = 'weak';
        isWeak = true;
      } else {
        accuracy = 0;
        status = 'not_started';
        isWeak = false;
      }
    }

    return {
      ...t,
      accuracy,
      status,
      isWeak
    };
  });
}
