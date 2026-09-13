// src/pages/SQLAssessmentPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Play,
  RotateCcw,
  Send,
  ChevronLeft,
  ChevronRight,
  Clock,
  Database,
  CheckCircle2,
  Terminal,
  FileCheck2,
  Trophy,
  AlertTriangle
} from 'lucide-react';
import { sqlQuestions } from '../data/sqlQuestions.js';
import { runQueryOnDataset, runAssessmentTests } from '../utils/sqlEngine.js';
import { sqlStorage } from '../utils/sqlStorage.js';
import SQLQuestionPanel from '../components/sql/SQLQuestionPanel.jsx';
import SQLEditor from '../components/sql/SQLEditor.jsx';
import SQLResultPanel from '../components/sql/SQLResultPanel.jsx';
import SQLTestResults from '../components/sql/SQLTestResults.jsx';
import SQLResultsModal from '../components/sql/SQLResultsModal.jsx';
import { gamificationService } from '../services/gamificationService.js';
import { mistakesStorage } from '../services/mistakesStorage.js';
import SEO from '../components/SEO.jsx';
import { seoConfig } from '../config/seo.js';
import { BookOpen, Sparkles, HelpCircle, Code2 } from 'lucide-react';

export default function SQLAssessmentPage({ theme = 'dark' }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const qParam = searchParams.get('q');

  // Find initial question index
  const initialIndex = Math.max(
    0,
    sqlQuestions.findIndex((q) => q.id === qParam)
  );

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentQuestion = sqlQuestions[currentIndex] || sqlQuestions[0];

  // Editor Code State - initially empty until user types or solves
  const [code, setCode] = useState(() =>
    sqlStorage.getDraft(currentQuestion.id, '')
  );

  // Active Bottom Tab: 'output' | 'tests'
  const [activeTab, setActiveTab] = useState('output');

  // Execution States
  const [isExecuting, setIsExecuting] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [queryResult, setQueryResult] = useState(null);
  const [testSuiteResult, setTestSuiteResult] = useState(null);

  // Question-by-Question Assessment Tracking
  const [questionStatuses, setQuestionStatuses] = useState(() => {
    const completed = sqlStorage.getCompletedQuestions();
    const initial = {};
    sqlQuestions.forEach((q) => {
      initial[q.id] = {
        questionId: q.id,
        title: q.title,
        difficulty: q.difficulty,
        solved: completed.includes(q.id),
        attempted: false,
        testsPassed: 0,
        totalTests: q.testCases.length
      };
    });
    return initial;
  });

  // Timer State (per question)
  const [timeRemaining, setTimeRemaining] = useState(currentQuestion.duration * 60);
  const [totalTimeUsed, setTotalTimeUsed] = useState(0);
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  // Scorecard Modal State
  const [showResultsModal, setShowResultsModal] = useState(false);

  // When question changes, load draft (or user typed solution) & reset timer
  useEffect(() => {
    const savedCode = sqlStorage.getDraft(currentQuestion.id, '');
    setCode(savedCode);
    setQueryResult(null);
    setTestSuiteResult(null);
    setActiveTab('output');
    setTimeRemaining(currentQuestion.duration * 60);
  }, [currentIndex, currentQuestion.id, currentQuestion.duration]);

  // Sync URL search param
  useEffect(() => {
    setSearchParams({ q: currentQuestion.id }, { replace: true });
  }, [currentQuestion.id, setSearchParams]);

  // Auto-save code on change
  const handleCodeChange = (newCode) => {
    setCode(newCode);
    sqlStorage.setDraft(currentQuestion.id, newCode);
  };

  // Timer Tick
  useEffect(() => {
    if (isTimerPaused || showResultsModal) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          // Time expired for this question
          return 0;
        }
        return prev - 1;
      });
      setTotalTimeUsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerPaused, showResultsModal]);

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // 1. Run Query on Visible Sample Dataset
  const handleRunQuery = async () => {
    setIsExecuting(true);
    setActiveTab('output');

    try {
      // Use first test case or example input as visible dataset
      const visibleData = currentQuestion.testCases[0]?.data || currentQuestion.examples[0]?.input || {};
      const res = await runQueryOnDataset(currentQuestion, code, visibleData);
      setQueryResult(res);
    } catch (err) {
      setQueryResult({
        success: false,
        columns: [],
        rows: [],
        error: err.message,
        executionTimeMs: 0
      });
    } finally {
      setIsExecuting(false);
    }
  };

  // 2. Reset Query Code
  const handleResetCode = () => {
    if (window.confirm('Clear your SQL query for this question?')) {
      setCode('');
      sqlStorage.resetDraft(currentQuestion.id);
      setQueryResult(null);
      setTestSuiteResult(null);
    }
  };

  // 3. Submit & Run All Tests (Visible + Hidden)
  const handleSubmitAndTest = async () => {
    setIsTesting(true);
    setActiveTab('tests');

    try {
      const suiteRes = await runAssessmentTests(currentQuestion, code);
      setTestSuiteResult(suiteRes);

      // Update question status
      setQuestionStatuses((prev) => {
        const updated = {
          ...prev,
          [currentQuestion.id]: {
            ...prev[currentQuestion.id],
            solved: suiteRes.allPassed,
            attempted: true,
            testsPassed: suiteRes.passedCount,
            totalTests: suiteRes.totalCount
          }
        };

        if (suiteRes.allPassed) {
          sqlStorage.markQuestionCompleted(currentQuestion.id, code);
          sqlStorage.saveUserSolution(currentQuestion.id, code);
          mistakesStorage.resolveMistake(currentQuestion.id, 'sql');
          gamificationService.addXP(40, 'Solved SQL Challenge');
        } else {
          mistakesStorage.recordMistake({
            id: currentQuestion.id,
            type: 'sql',
            title: currentQuestion.title,
            category: currentQuestion.category,
            difficulty: currentQuestion.difficulty,
            route: `/sql-assessment?q=${currentQuestion.id}`,
            errorSummary: `${suiteRes.passedCount || 0}/${suiteRes.totalCount || 0} test cases passed`
          });
        }

        return updated;
      });
    } catch (err) {
      console.error('Test execution error:', err);
    } finally {
      setIsTesting(false);
    }
  };

  // Navigation handlers
  const handleNextQuestion = () => {
    if (currentIndex < sqlQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleFinishAssessment = () => {
    setShowResultsModal(true);
    setIsTimerPaused(true);
  };

  const handleRetake = () => {
    sqlStorage.resetAllSQLProgress(sqlQuestions);
    setQuestionStatuses(() => {
      const initial = {};
      sqlQuestions.forEach((q) => {
        initial[q.id] = {
          questionId: q.id,
          title: q.title,
          difficulty: q.difficulty,
          solved: false,
          attempted: false,
          testsPassed: 0,
          totalTests: q.testCases.length
        };
      });
      return initial;
    });
    setCurrentIndex(0);
    setCode('');
    setQueryResult(null);
    setTestSuiteResult(null);
    setTotalTimeUsed(0);
    setTimeRemaining(sqlQuestions[0].duration * 60);
    setShowResultsModal(false);
    setIsTimerPaused(false);
  };

  return (
    <div className="sql-assessment-page">
      <SEO {...seoConfig.sqlAssessment} />
      {/* Top Assessment Control Bar */}
      <header className="sql-top-bar">
        <div className="bar-left">
          <div className="round-identity">
            <div className="round-icon">
              <Database size={18} />
            </div>
            <div>
              <span className="round-label">Assessment Round</span>
              <h1 className="round-title">Accenture SQL Assessment Practice</h1>
            </div>
          </div>

          <div className="q-nav-selector">
            <span className="q-progress-text">
              Question {currentIndex + 1} of {sqlQuestions.length}
            </span>
            <div className="q-nav-dots">
              {sqlQuestions.map((q, idx) => {
                const status = questionStatuses[q.id];
                const isCurrent = idx === currentIndex;
                const isSolved = status?.solved;

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`nav-dot-btn ${isCurrent ? 'active' : ''} ${isSolved ? 'solved' : ''}`}
                    title={`Question ${idx + 1}: ${q.title} (${isSolved ? 'Solved' : 'Pending'})`}
                  >
                    {idx + 1}
                    {isSolved && <span className="dot-check">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bar-right">
          {/* Timer Display */}
          <div className={`timer-box ${timeRemaining < 120 ? 'timer-warning' : ''}`}>
            <Clock size={16} />
            <span className="timer-text">{formatTimer(timeRemaining)}</span>
          </div>

          {/* Previous / Next buttons */}
          <div className="nav-step-buttons">
            <button
              onClick={handlePrevQuestion}
              disabled={currentIndex === 0}
              className="btn btn-secondary btn-sm"
              title="Previous Question"
            >
              <ChevronLeft size={16} />
              <span className="btn-label-desktop">Previous</span>
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={currentIndex === sqlQuestions.length - 1}
              className="btn btn-secondary btn-sm"
              title="Next Question"
            >
              <span className="btn-label-desktop">Next</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Submit Assessment Button */}
          <button
            onClick={handleFinishAssessment}
            className="btn btn-primary btn-sm btn-finish"
          >
            <Trophy size={14} />
            <span>Finish Assessment</span>
          </button>
        </div>
      </header>

      {/* Main Two-Panel Workspace */}
      <main className="sql-workspace-grid">
        {/* LEFT PANEL: Question Details & Schema */}
        <div className="sql-panel-left">
          <SQLQuestionPanel
            question={currentQuestion}
            onApplySolution={handleCodeChange}
          />
        </div>

        {/* RIGHT PANEL: Editor + Actions + Results */}
        <div className="sql-panel-right">
          {/* Editor Header / Action Bar */}
          <div className="editor-control-bar">
            <div className="editor-tab-tag">
              <Terminal size={14} />
              <span>SQL Query Editor</span>
            </div>

            <div className="editor-actions-group">
              <button
                onClick={handleResetCode}
                className="btn btn-outline btn-sm"
                title="Clear SQL query"
              >
                <RotateCcw size={13} />
                <span>Clear</span>
              </button>

              <button
                onClick={handleRunQuery}
                disabled={isExecuting}
                className="btn btn-secondary btn-sm btn-run"
                title="Execute query against sample table (Ctrl+Enter)"
              >
                <Play size={14} />
                <span>{isExecuting ? 'Running...' : 'Run Query'}</span>
              </button>

              <button
                onClick={handleSubmitAndTest}
                disabled={isTesting}
                className="btn btn-primary btn-sm btn-submit"
                title="Run all visible and hidden test cases"
              >
                <Send size={14} />
                <span>{isTesting ? 'Evaluating...' : 'Submit & Next'}</span>
              </button>
            </div>
          </div>

          {/* Monaco SQL Editor */}
          <div className="sql-editor-wrapper">
            <SQLEditor
              value={code}
              onChange={handleCodeChange}
              onRun={handleRunQuery}
              theme={theme}
            />
          </div>

          {/* Bottom Results & Test Runner Panel */}
          <div className="sql-bottom-panel">
            {/* Tabs Header */}
            <div className="bottom-panel-tabs">
              <button
                onClick={() => setActiveTab('output')}
                className={`panel-tab-btn ${activeTab === 'output' ? 'active' : ''}`}
              >
                <Database size={14} />
                <span>Query Output</span>
                {queryResult && (
                  <span className={`tab-indicator ${queryResult.success ? 'success' : 'fail'}`} />
                )}
              </button>

              <button
                onClick={() => setActiveTab('tests')}
                className={`panel-tab-btn ${activeTab === 'tests' ? 'active' : ''}`}
              >
                <FileCheck2 size={14} />
                <span>Test Cases</span>
                {testSuiteResult && (
                  <span className={`tab-indicator ${testSuiteResult.allPassed ? 'success' : 'fail'}`}>
                    {testSuiteResult.passedCount}/{testSuiteResult.totalCount}
                  </span>
                )}
              </button>
            </div>

            {/* Tab Contents */}
            <div className="bottom-panel-body">
              {activeTab === 'output' ? (
                <SQLResultPanel result={queryResult} isLoading={isExecuting} />
              ) : (
                <SQLTestResults testSuiteResult={testSuiteResult} isRunning={isTesting} />
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Visible SEO & Candidate SQL Preparation Guide */}
      <section className="sql-seo-guide" style={{
        maxWidth: '1440px',
        margin: '2rem auto 3rem auto',
        padding: '2rem 1.5rem',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.85))',
        border: '1px solid #334155',
        borderRadius: '16px',
        color: '#cbd5e1'
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '4px 10px',
            background: 'rgba(56, 189, 248, 0.12)',
            color: '#38bdf8',
            borderRadius: '10px',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '0.5rem'
          }}>
            <Sparkles size={14} /> Comprehensive Assessment Guide
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
            What is an Accenture SQL Assessment?
          </h2>
          <p style={{ lineHeight: 1.7, color: '#94a3b8', margin: 0, fontSize: '0.95rem' }}>
            The Accenture SQL assessment evaluates technical aptitude, logical reasoning, and practical relational database querying. Candidates are presented with database schemas containing multiple interrelated tables and are tasked with writing clean, performant SQL statements that extract, transform, aggregate, and report insights under time constraints.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
          <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#38bdf8', margin: '0 0 0.4rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Code2 size={16} /> SQL Topics to Prepare
            </h3>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#94a3b8', margin: 0 }}>
              Focus on multi-table joins, conditional aggregations, grouping semantics, nested subqueries, date manipulations, and ranking window functions commonly encountered in technical placement tests.
            </p>
          </div>

          <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fb923c', margin: '0 0 0.4rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Database size={16} /> JOIN Questions
            </h3>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#94a3b8', margin: 0 }}>
              Master <code style={{ color: '#fb923c' }}>INNER JOIN</code> for intersecting rows, <code style={{ color: '#fb923c' }}>LEFT JOIN</code> to preserve records with null foreign keys, and self-joins for hierarchical reporting structures.
            </p>
          </div>

          <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#4ade80', margin: '0 0 0.4rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={16} /> GROUP BY & Aggregate Functions
            </h3>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#94a3b8', margin: 0 }}>
              Synthesize metrics using <code style={{ color: '#4ade80' }}>COUNT</code>, <code style={{ color: '#4ade80' }}>SUM</code>, <code style={{ color: '#4ade80' }}>AVG</code>, <code style={{ color: '#4ade80' }}>MIN</code>, and <code style={{ color: '#4ade80' }}>MAX</code>. Always filter grouped aggregations using <code style={{ color: '#4ade80' }}>HAVING</code> rather than <code style={{ color: '#4ade80' }}>WHERE</code>.
            </p>
          </div>

          <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#c084fc', margin: '0 0 0.4rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Terminal size={16} /> Subqueries & Window Functions
            </h3>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#94a3b8', margin: 0 }}>
              Utilize correlated subqueries and CTEs for modular logic. Deploy analytical window functions like <code style={{ color: '#c084fc' }}>ROW_NUMBER()</code>, <code style={{ color: '#c084fc' }}>RANK()</code>, and <code style={{ color: '#c084fc' }}>DENSE_RANK() OVER (PARTITION BY ... ORDER BY ...)</code>.
            </p>
          </div>
        </div>

        <div style={{ background: '#090d16', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '12px', padding: '1.25rem 1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f87171', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertTriangle size={17} /> Common SQL Assessment Mistakes to Avoid
          </h3>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.88rem', lineHeight: 1.7, color: '#cbd5e1' }}>
            <li><strong>Filtering aggregates in WHERE:</strong> Use <code style={{ color: '#f87171' }}>HAVING</code> for aggregate conditions (e.g., <code style={{ color: '#f87171' }}>HAVING COUNT(*) &gt; 1</code>), not WHERE.</li>
            <li><strong>NULL handling in calculations:</strong> Remember that arithmetic with NULL yields NULL. Wrap nullable fields in <code style={{ color: '#f87171' }}>COALESCE()</code> or <code style={{ color: '#f87171' }}>IFNULL()</code>.</li>
            <li><strong>COUNT(*) vs COUNT(column):</strong> <code style={{ color: '#f87171' }}>COUNT(*)</code> counts all rows including NULLs, while <code style={{ color: '#f87171' }}>COUNT(column)</code> counts only non-null values.</li>
            <li><strong>Integer division truncations:</strong> When computing percentages or conversion rates, cast integer values to float/decimal to prevent integer division truncating to zero.</li>
          </ul>
        </div>
      </section>

      {/* Assessment Final Completion Scorecard Modal */}
      <SQLResultsModal
        isOpen={showResultsModal}
        results={Object.values(questionStatuses)}
        totalQuestions={sqlQuestions.length}
        timeUsedSeconds={totalTimeUsed}
        onClose={() => {
          setShowResultsModal(false);
          setIsTimerPaused(false);
        }}
        onRetake={handleRetake}
      />
    </div>
  );
}
