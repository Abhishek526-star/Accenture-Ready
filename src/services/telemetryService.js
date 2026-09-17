// src/services/telemetryService.js
// Central telemetry, activity tracking, deduplication, and reactive synchronization service

const TELEMETRY_ATTEMPTS_KEY = 'accenture_telemetry_attempts_v1';
const TELEMETRY_TIME_KEY = 'accenture_telemetry_time_v1';

export const telemetryService = {
  // Broadcast an activity update event so all mounted pages (Analytics, Dashboard, etc.)
  // re-fetch and render in real time without requiring a full page refresh
  broadcastActivityUpdate() {
    try {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('accenture-activity-updated', {
          detail: { timestamp: Date.now() }
        }));
      }
    } catch (e) {
      console.warn('Failed to broadcast activity update', e);
    }
  },

  // Get raw attempts history
  getAttempts() {
    try {
      const raw = localStorage.getItem(TELEMETRY_ATTEMPTS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  // Record a problem submission attempt (Coding, DSA, SQL, MCQ)
  // Deduplicates rapid re-submissions within 2 seconds of the same question & status
  recordProblemAttempt(problemId, type, passed, details = {}) {
    try {
      const attempts = this.getAttempts();
      const now = Date.now();

      // Prevent duplicate logging from rapid re-renders or accidental double-clicks
      const recentDup = attempts.find(a =>
        String(a.problemId) === String(problemId) &&
        a.type === type &&
        a.passed === passed &&
        (now - a.timestamp) < 2000
      );
      if (recentDup) {
        return;
      }

      const newEntry = {
        id: `att_${now}_${Math.random().toString(36).slice(2, 6)}`,
        problemId: String(problemId),
        type, // 'coding' | 'dsa' | 'sql' | 'mcq' | 'pseudocode' | 'cognitive'
        passed: Boolean(passed),
        timestamp: now,
        latencyMs: details.latencyMs || null,
        timeTakenSeconds: details.timeTakenSeconds || null,
        category: details.category || 'General'
      };

      // Keep recent 500 attempts to preserve localStorage budget
      const updated = [newEntry, ...attempts].slice(0, 500);
      localStorage.setItem(TELEMETRY_ATTEMPTS_KEY, JSON.stringify(updated));

      // Record time if available
      if (details.timeTakenSeconds && details.timeTakenSeconds > 0) {
        this.recordTimeSpent(details.timeTakenSeconds);
      }

      this.broadcastActivityUpdate();
    } catch (e) {
      console.error('Failed to record telemetry attempt', e);
    }
  },

  // Record time spent on a solution session (in seconds)
  recordTimeSpent(seconds) {
    try {
      const raw = localStorage.getItem(TELEMETRY_TIME_KEY);
      const times = raw ? JSON.parse(raw) : [];
      times.push({
        seconds: Math.round(seconds),
        timestamp: Date.now()
      });
      // Keep last 100 sessions
      const trimmed = times.slice(-100);
      localStorage.setItem(TELEMETRY_TIME_KEY, JSON.stringify(trimmed));
    } catch (e) {
      console.error('Failed to record time spent', e);
    }
  },

  // Calculate actual average solution time based on real user activity
  getAverageSolutionTime() {
    try {
      // 1. Check direct telemetry times
      const rawTimes = localStorage.getItem(TELEMETRY_TIME_KEY);
      const times = rawTimes ? JSON.parse(rawTimes) : [];

      // 2. Check mock assessment history
      const mockHistory = JSON.parse(localStorage.getItem('accenture_mock_history_v1') || '[]');
      
      // 3. Check cognitive session history
      const cognitiveHistory = JSON.parse(localStorage.getItem('frontend-assessment-cognitive-sessions-history') || '[]');

      const allSessionSeconds = [];

      times.forEach(t => {
        if (t.seconds > 0 && t.seconds < 3600) {
          allSessionSeconds.push(t.seconds);
        }
      });

      mockHistory.forEach(m => {
        if (m.timeUsedSeconds && m.totalQuestions > 0) {
          const avgPerQ = Math.round(m.timeUsedSeconds / m.totalQuestions);
          if (avgPerQ > 0) allSessionSeconds.push(avgPerQ);
        }
      });

      cognitiveHistory.forEach(c => {
        if (c.avgTime && c.avgTime > 0) {
          allSessionSeconds.push(Math.round(c.avgTime));
        } else if (c.timeTaken && c.totalQuestions) {
          allSessionSeconds.push(Math.round(c.timeTaken / c.totalQuestions));
        }
      });

      if (allSessionSeconds.length === 0) {
        return {
          formatted: '--',
          totalSeconds: 0,
          hasRealData: false,
          label: 'No sessions timed yet'
        };
      }

      const sum = allSessionSeconds.reduce((acc, s) => acc + s, 0);
      const avgSec = Math.round(sum / allSessionSeconds.length);

      const mins = Math.floor(avgSec / 60);
      const secs = avgSec % 60;
      const formatted = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

      return {
        formatted,
        totalSeconds: avgSec,
        hasRealData: true,
        label: avgSec <= 300 ? 'Well within test budget' : 'Target under 5m per problem'
      };
    } catch {
      return {
        formatted: '--',
        totalSeconds: 0,
        hasRealData: false,
        label: 'No sessions timed yet'
      };
    }
  },

  // Get aggregated attempt counts & accuracy per question type
  getTypeStats(type) {
    const attempts = this.getAttempts().filter(a => a.type === type);
    const passed = attempts.filter(a => a.passed).length;
    const total = attempts.length;
    return {
      attempts: total,
      passed,
      accuracy: total > 0 ? Math.round((passed / total) * 100) : 0
    };
  }
};
