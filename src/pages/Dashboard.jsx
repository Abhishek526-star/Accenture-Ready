// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  XCircle,
  Clock,
  ArrowRight,
  RotateCcw,
  BarChart3,
  Award,
  BookOpen,
  Brain,
  Zap,
  Flame,
  Database,
  Coffee
} from 'lucide-react';
import { questions } from '../data/questions.js';
import { sqlQuestions } from '../data/sqlQuestions.js';
import { javaTopics } from '../data/javaTopics.js';
import { storage } from '../utils/storage.js';
import { sqlStorage } from '../utils/sqlStorage.js';
import { javaStorage } from '../utils/javaStorage.js';
import { getCognitiveStats } from '../utils/cognitiveStorage.js';

export default function Dashboard() {
  const [completedIds, setCompletedIds] = useState(() => storage.getCompletedQuestions());
  const [completedSQLIds, setCompletedSQLIds] = useState(() => sqlStorage.getCompletedQuestions());
  const [completedJavaIds, setCompletedJavaIds] = useState(() => javaStorage.getCompletedTopics());
  const [cognitiveStats, setCognitiveStats] = useState(() => getCognitiveStats());
  const [refreshKey, setRefreshKey] = useState(0);

  // Compute test stats across all questions
  let totalTestsAcrossAll = 0;
  let totalPassedTests = 0;
  let attemptedCount = 0;

  const questionStats = questions.map((q) => {
    const saved = storage.getQuestionResults(q.id);
    const isCompleted = completedIds.includes(q.id);

    if (saved && saved.results) {
      attemptedCount++;
      const passed = saved.results.filter((r) => r.passed).length;
      const total = saved.results.length;
      totalPassedTests += passed;
      totalTestsAcrossAll += total;

      return {
        ...q,
        status: isCompleted ? 'completed' : passed > 0 ? 'in-progress' : 'attempted',
        passedCount: passed,
        totalTests: total,
        allPassed: saved.allPassed
      };
    }

    return {
      ...q,
      status: isCompleted ? 'completed' : 'unattempted',
      passedCount: 0,
      totalTests: 0,
      allPassed: isCompleted
    };
  });

  const completionPercent = Math.round((completedIds.length / questions.length) * 100);
  const sqlCompletionPercent = Math.round((completedSQLIds.length / sqlQuestions.length) * 100);
  const successRate = totalTestsAcrossAll > 0
    ? Math.round((totalPassedTests / totalTestsAcrossAll) * 100)
    : 0;

  const handleResetAll = () => {
    if (window.confirm('Are you sure you want to reset all your assessment progress, saved code, and test results? This cannot be undone.')) {
      questions.forEach((q) => {
        storage.resetCandidateCode(q.id, q.starterJS);
      });
      storage.set('completed-questions', []);
      sqlStorage.resetAllSQLProgress(sqlQuestions);
      javaStorage.resetAllProgress(javaTopics);
      setCompletedIds([]);
      setCompletedSQLIds([]);
      setCompletedJavaIds([]);
      setRefreshKey((k) => k + 1);
    }
  };

  const getDifficultyBadge = (diff) => {
    switch (diff.toLowerCase()) {
      case 'easy':
        return <span className="badge badge-easy">Easy</span>;
      case 'medium':
        return <span className="badge badge-medium">Medium</span>;
      case 'hard':
        return <span className="badge badge-hard">Hard</span>;
      default:
        return <span className="badge badge-easy">Easy</span>;
    }
  };

  return (
    <div className="dashboard-page" key={refreshKey}>
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <span className="platform-tag">Candidate Assessment Summary</span>
            <h1 className="dashboard-title">Practice Dashboard</h1>
            <p className="dashboard-subtitle">
              Track your completion rate, test scores, and performance across Frontend, SQL, and Cognitive practice modules.
            </p>
          </div>

          <div className="dashboard-header-actions">
            <button
              onClick={handleResetAll}
              className="btn btn-outline"
              title="Reset all questions and stored code"
            >
              <RotateCcw size={14} />
              <span>Reset All Progress</span>
            </button>
            <Link to="/sql-assessment" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #ea580c, #c2410c)', border: 'none' }}>
              <Database size={14} />
              <span>Launch SQL Round</span>
            </Link>
          </div>
        </div>

        {/* Metrics Overview Cards */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-icon primary">
              <Award size={24} />
            </div>
            <div className="metric-info">
              <span className="metric-label">Frontend Completed</span>
              <h3 className="metric-value">
                {completedIds.length} <span className="metric-total">/ {questions.length}</span>
              </h3>
              <div className="metric-progress-bar">
                <div
                  className="metric-progress-fill"
                  style={{ width: `${completionPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon" style={{ background: 'rgba(249, 115, 22, 0.15)', color: '#f97316' }}>
              <Database size={24} />
            </div>
            <div className="metric-info">
              <span className="metric-label">SQL Problems Solved</span>
              <h3 className="metric-value">
                {completedSQLIds.length} <span className="metric-total">/ {sqlQuestions.length}</span>
              </h3>
              <div className="metric-progress-bar">
                <div
                  className="metric-progress-fill"
                  style={{ width: `${sqlCompletionPercent}%`, background: '#f97316' }}
                />
              </div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon success">
              <CheckCircle2 size={24} />
            </div>
            <div className="metric-info">
              <span className="metric-label">DOM Tests Passed</span>
              <h3 className="metric-value">{totalPassedTests}</h3>
              <span className="metric-subtext">Across attempted modules</span>
            </div>
          </div>
        </div>

        {/* Java Learning & Preparation Card */}
        <div style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          border: '1px solid rgba(249, 115, 22, 0.4)',
          borderRadius: '16px',
          padding: '1.5rem 1.75rem',
          marginBottom: '1.5rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(249, 115, 22, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316' }}>
                <Coffee size={22} />
              </div>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', background: 'rgba(249, 115, 22, 0.15)', color: '#f97316', padding: '1px 8px', borderRadius: '12px', fontSize: '0.68rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                  NEW ADDITION
                </div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#f8fafc' }}>Java Learning & Assessment Preparation</h3>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Core Syntax • Arrays & Strings • Collections • OOP • Live Interactive Code Runner</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/java-learning" className="btn btn-primary btn-sm" style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)', border: 'none' }}>
                <Coffee size={14} />
                <span>{completedJavaIds.length > 0 ? 'Continue Java Prep' : 'Start Java Prep'}</span>
              </Link>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid #334155'
          }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Available Topics</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'JetBrains Mono' }}>
                {javaTopics.length} Topics
              </div>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Completed Topics</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#4ade80', fontFamily: 'JetBrains Mono' }}>
                {completedJavaIds.length} / {javaTopics.length}
              </div>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Readiness Score</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'JetBrains Mono' }}>
                {Math.round((completedJavaIds.length / javaTopics.length) * 100)}%
              </div>
            </div>
          </div>
        </div>

        {/* SQL Assessment Round Card */}
        <div style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          border: '1px solid rgba(249, 115, 22, 0.3)',
          borderRadius: '16px',
          padding: '1.5rem 1.75rem',
          marginBottom: '1.5rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(249, 115, 22, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316' }}>
                <Database size={22} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#f8fafc' }}>SQL Assessment Round</h3>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Real SQLite WASM Engine • Schema & Querying • Hidden Test Evaluation</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/sql-assessment" className="btn btn-primary btn-sm" style={{ background: 'linear-gradient(135deg, #ea580c, #c2410c)', border: 'none' }}>
                <Database size={14} />
                <span>{completedSQLIds.length > 0 ? 'Continue SQL Round' : 'Start SQL Round'}</span>
              </Link>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid #334155'
          }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Available Problems</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'JetBrains Mono' }}>
                {sqlQuestions.length} Problems
              </div>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Completed Tasks</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#4ade80', fontFamily: 'JetBrains Mono' }}>
                {completedSQLIds.length} / {sqlQuestions.length}
              </div>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Engine Type</span>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#38bdf8', fontFamily: 'JetBrains Mono' }}>
                SQLite (WASM)
              </div>
            </div>
          </div>
        </div>

        {/* Cognitive Assessment Round Overview Card */}
        <div style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '1.5rem 1.75rem',
          marginBottom: '2rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                <Brain size={22} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#f8fafc' }}>Gamified Cognitive Round</h3>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Math Bubble (sequential order) & Memory Maze (spatial memory)</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/cognitive" className="btn btn-secondary btn-sm">
                <span>Cognitive Hub</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/cognitive/assessment" className="btn btn-primary btn-sm" style={{ background: '#0284c7' }}>
                <span>Launch Cognitive Test</span>
              </Link>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid #334155'
          }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Total Cognitive XP</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'JetBrains Mono' }}>
                {cognitiveStats.totalXP} XP
              </div>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Math Bubble Best</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'JetBrains Mono' }}>
                {cognitiveStats.bestScores.math_bubble} pts
              </div>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Cognitive Streak</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fb923c', display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'JetBrains Mono' }}>
                <Flame size={18} className="fill-orange-400" />
                {cognitiveStats.streak} Days
              </div>
            </div>
          </div>
        </div>

        {/* Question Directory Table / Cards */}
        <div className="dashboard-section">
          <div className="section-title-row">
            <h2>Questions Progress Breakdown</h2>
            <span className="directory-count">{questions.length} Modules Available</span>
          </div>

          <div className="dashboard-table-card">
            <div className="table-header-row">
              <span className="col-status">Status</span>
              <span className="col-title">Question</span>
              <span className="col-difficulty">Difficulty</span>
              <span className="col-category">Category</span>
              <span className="col-score">Test Score</span>
              <span className="col-action">Action</span>
            </div>

            <div className="table-body">
              {questionStats.map((q) => {
                const isCompleted = q.status === 'completed';
                const isInProgress = q.status === 'in-progress';

                return (
                  <div key={q.id} className={`table-row ${isCompleted ? 'row-completed' : ''}`}>
                    <div className="col-status">
                      {isCompleted ? (
                        <span className="status-icon completed" title="Completed">
                          <CheckCircle2 size={18} />
                        </span>
                      ) : isInProgress ? (
                        <span className="status-icon in-progress" title="In Progress">
                          <Clock size={18} />
                        </span>
                      ) : (
                        <span className="status-icon unattempted" title="Unattempted">
                          <span className="circle-dot" />
                        </span>
                      )}
                    </div>

                    <div className="col-title">
                      <Link to={`/practice?q=${q.id}`} className="row-q-title">
                        Question {q.id} — {q.title}
                      </Link>
                      <span className="row-q-desc">{q.howToAttempt.slice(0, 70)}...</span>
                    </div>

                    <div className="col-difficulty">
                      {getDifficultyBadge(q.difficulty)}
                    </div>

                    <div className="col-category">
                      <span className="category-tag">{q.category}</span>
                    </div>

                    <div className="col-score">
                      {q.totalTests > 0 ? (
                        <span className={`score-badge ${q.allPassed ? 'perfect' : 'partial'}`}>
                          {q.passedCount} / {q.totalTests} Passed
                        </span>
                      ) : (
                        <span className="score-badge unattempted">Not Run Yet</span>
                      )}
                    </div>

                    <div className="col-action">
                      <Link
                        to={`/practice?q=${q.id}`}
                        className={`btn btn-sm ${isCompleted ? 'btn-secondary' : 'btn-primary'}`}
                      >
                        <span>{isCompleted ? 'Review' : 'Solve'}</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
