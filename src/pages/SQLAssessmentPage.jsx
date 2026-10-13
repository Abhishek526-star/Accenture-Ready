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
  AlertTriangle,
  BookOpen,
  Sparkles,
  Code2,
  X,
  ChevronDown
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
import { telemetryService } from '../services/telemetryService.js';
import { confirmToast } from '../utils/confirmToast.jsx';
import SEO from '../components/SEO.jsx';
import { seoConfig } from '../config/seo.js';
import QuestionDropdown from '../components/QuestionDropdown.jsx';

export default function SQLAssessmentPage({ theme = 'dark' }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const qParam = searchParams.get('q');

  // Guide Modal State
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [openFnSection, setOpenFnSection] = useState(null);
  const toggleFnSection = (key) => setOpenFnSection(prev => prev === key ? null : key);
  const [examplePopup, setExamplePopup] = useState(null);

  // Auto-scroll ref for active question dot
  const activeDotRef = useRef(null);
  const dotsContainerRef = useRef(null);

  // Find initial question index
  const initialIndex = Math.max(
    0,
    sqlQuestions.findIndex((q) => q.id === qParam)
  );

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentQuestion = sqlQuestions[currentIndex] || sqlQuestions[0];

  // Auto-scroll active question dot strictly inside horizontal container
  useEffect(() => {
    if (activeDotRef.current && dotsContainerRef.current) {
      const container = dotsContainerRef.current;
      const dot = activeDotRef.current;
      const containerRect = container.getBoundingClientRect();
      const dotRect = dot.getBoundingClientRect();
      const offset = dotRect.left - containerRect.left;
      const targetLeft = container.scrollLeft + offset - (container.clientWidth / 2) + (dot.clientWidth / 2);
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  // Editor Code State - initially empty until user types or solves
  const [code, setCode] = useState(() =>
    sqlStorage.getDraft(currentQuestion.id, '')
  );

  // Active Bottom Tab: 'output' | 'tests'
  const [activeTab, setActiveTab] = useState('output');
  const [mobileSqlTab, setMobileSqlTab] = useState('both'); // 'both' | 'question' | 'editor'

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
    confirmToast(
      'Clear your SQL query for this question?',
      () => {
        setCode('');
        sqlStorage.resetDraft(currentQuestion.id);
        setQueryResult(null);
        setTestSuiteResult(null);
      },
      { icon: '🗑️', confirmLabel: 'Yes, clear it', type: 'warning' }
    );
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

        const wasAlreadySolved = sqlStorage.getCompletedQuestions().includes(currentQuestion.id);

        // Record telemetry attempt
        telemetryService.recordProblemAttempt(
          currentQuestion.id,
          'sql',
          suiteRes.allPassed,
          { category: currentQuestion.category || 'SQL' }
        );

        if (suiteRes.allPassed) {
          sqlStorage.markQuestionCompleted(currentQuestion.id, code);
          sqlStorage.saveUserSolution(currentQuestion.id, code);
          mistakesStorage.resolveMistake(currentQuestion.id, 'sql');
          if (!wasAlreadySolved) {
            gamificationService.addXP(40, 'Solved SQL Challenge');
          }
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

        telemetryService.broadcastActivityUpdate();
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
              <h1 className="round-title">SQL Assessment Practice</h1>
            </div>
          </div>

          <div className="q-nav-selector">
            <QuestionDropdown
              questions={sqlQuestions}
              currentIndex={currentIndex}
              onSelectQuestion={(idx) => setCurrentIndex(idx)}
              isSolvedFn={(q) => questionStatuses[q.id]?.solved}
              menuTitle="SELECT ACCENTURE SQL ASSESSMENT QUESTION"
            />
            <div className="q-nav-dots" ref={dotsContainerRef}>
              {sqlQuestions.map((q, idx) => {
                const status = questionStatuses[q.id];
                const isCurrent = idx === currentIndex;
                const isSolved = status?.solved;

                return (
                  <button
                    key={q.id}
                    ref={isCurrent ? activeDotRef : null}
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
          {/* SQL Assessment Guide Button */}
          <button
            onClick={() => setShowGuideModal(true)}
            className="btn btn-secondary btn-sm"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              color: '#38bdf8',
              fontWeight: 700
            }}
            title="Comprehensive SQL Assessment Guide"
          >
            <BookOpen size={14} />
            <span className="btn-label-desktop">SQL Guide</span>
          </button>

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

      {/* Mobile Workspace Tabs for SQL Assessment */}
      <div className="workspace-mobile-tabs" style={{ margin: '0.75rem 1rem' }}>
        <button
          type="button"
          className={`workspace-mobile-tab-btn ${mobileSqlTab === 'question' ? 'active' : ''}`}
          onClick={() => setMobileSqlTab('question')}
        >
          <Database size={15} />
          <span>Question & Schema</span>
        </button>
        <button
          type="button"
          className={`workspace-mobile-tab-btn ${mobileSqlTab === 'editor' ? 'active' : ''}`}
          onClick={() => setMobileSqlTab('editor')}
        >
          <Terminal size={15} />
          <span>Editor & Output</span>
        </button>
        <button
          type="button"
          className={`workspace-mobile-tab-btn ${mobileSqlTab === 'both' ? 'active' : ''}`}
          onClick={() => setMobileSqlTab('both')}
        >
          <Sparkles size={15} />
          <span>All in One</span>
        </button>
      </div>

      {/* Main Two-Panel Workspace */}
      <main className="sql-workspace-grid">
        {/* LEFT PANEL: Question Details & Schema */}
        {(mobileSqlTab === 'both' || mobileSqlTab === 'question') && (
          <div className="sql-panel-left">
            <SQLQuestionPanel
              question={currentQuestion}
              onApplySolution={handleCodeChange}
            />
          </div>
        )}

        {/* RIGHT PANEL: Editor + Actions + Results */}
        {(mobileSqlTab === 'both' || mobileSqlTab === 'editor') && (
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
        )}
      </main>

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

      {/* Comprehensive Assessment Guide Modal */}
      {showGuideModal && (
        <div
          className="sql-guide-modal-overlay"
          onClick={() => setShowGuideModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5, 10, 20, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1200,
            padding: '1.25rem'
          }}
        >
          <div
            className="sql-guide-modal-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(145deg, #0b1329, #0f1c3a)',
              border: '1px solid #1e293b',
              borderRadius: '16px',
              maxWidth: '1040px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(56, 189, 248, 0.12)',
              padding: '2rem',
              position: 'relative',
              color: '#cbd5e1'
            }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowGuideModal(false)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(30, 41, 59, 0.85)',
                border: '1px solid #334155',
                color: '#94a3b8',
                borderRadius: '8px',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              title="Close Guide"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div style={{ marginBottom: '1.5rem', paddingRight: '2.5rem' }}>
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
                marginBottom: '0.6rem'
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

            {/* 4 Topic Focus Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(215px, 1fr))',
              gap: '1rem',
              marginBottom: '1.75rem'
            }}>
              <div style={{ background: '#090e1d', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.2rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#38bdf8', margin: '0 0 0.4rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Code2 size={16} /> SQL Topics to Prepare
                </h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#94a3b8', margin: 0 }}>
                  Focus on multi-table joins, conditional aggregations, grouping semantics, nested subqueries, date manipulations, and ranking window functions commonly encountered in technical placement tests.
                </p>
              </div>

              <div style={{ background: '#090e1d', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.2rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fb923c', margin: '0 0 0.4rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Database size={16} /> JOIN Questions
                </h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#94a3b8', margin: 0 }}>
                  Master <code style={{ color: '#fb923c' }}>INNER JOIN</code> for intersecting rows, <code style={{ color: '#fb923c' }}>LEFT JOIN</code> to preserve records with null foreign keys, and self-joins for hierarchical reporting structures.
                </p>
              </div>

              <div style={{ background: '#090e1d', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.2rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#4ade80', margin: '0 0 0.4rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <BookOpen size={16} /> GROUP BY & Aggregate Functions
                </h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#94a3b8', margin: 0 }}>
                  Synthesize metrics using <code style={{ color: '#4ade80' }}>COUNT</code>, <code style={{ color: '#4ade80' }}>SUM</code>, <code style={{ color: '#4ade80' }}>AVG</code>, <code style={{ color: '#4ade80' }}>MIN</code>, and <code style={{ color: '#4ade80' }}>MAX</code>. Always filter grouped aggregations using <code style={{ color: '#4ade80' }}>HAVING</code> rather than <code style={{ color: '#4ade80' }}>WHERE</code>.
                </p>
              </div>

              <div style={{ background: '#090e1d', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.2rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#c084fc', margin: '0 0 0.4rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Terminal size={16} /> Subqueries & Window Functions
                </h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#94a3b8', margin: 0 }}>
                  Utilize correlated subqueries and CTEs for modular logic. Deploy analytical window functions like <code style={{ color: '#c084fc' }}>ROW_NUMBER()</code>, <code style={{ color: '#c084fc' }}>RANK()</code>, and <code style={{ color: '#c084fc' }}>DENSE_RANK() OVER (PARTITION BY ... ORDER BY ...)</code>.
                </p>
              </div>
            </div>

            {/* ── MySQL Functions with Examples ── */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                marginBottom: '1rem'
              }}>
                <Code2 size={17} style={{ color: '#38bdf8' }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                  MySQL Functions with Examples
                </h3>
              </div>

              {/* ── Helper: reusable accordion card ── */}
              {[
                {
                  key: 'datetime', label: '1. Date and Time Functions', color: '#38bdf8',
                  bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.25)',
                  note: '* NOW(), CURDATE(), and CURTIME() return the current date/time when executed — examples are illustrative.',
                  rows: [
                    ['NOW()', "SELECT NOW();", '2026-10-13 16:30:00 *', { attempt: 'Write a query to display the current date and time alongside each employee record from the employees table.', sampleTable: { headers: ['id','name'], rows: [['1','Alice'],['2','Bob']] }, query: 'SELECT name, NOW() AS current_datetime\nFROM employees;', output: { headers: ['name','current_datetime'], rows: [['Alice','2026-10-13 17:30:00'],['Bob','2026-10-13 17:30:00']] }, note: 'NOW() returns the same timestamp for every row within a single query execution.' }],
                    ['CURDATE()', "SELECT CURDATE();", '2026-10-13 *', { attempt: 'Write a query to show each employee name along with today\'s date.', sampleTable: { headers: ['id','name'], rows: [['1','Alice'],['2','Bob']] }, query: 'SELECT name, CURDATE() AS today\nFROM employees;', output: { headers: ['name','today'], rows: [['Alice','2026-10-13'],['Bob','2026-10-13']] }, note: 'CURDATE() returns date only — no time component, unlike NOW().' }],
                    ['CURTIME()', "SELECT CURTIME();", '16:30:00 *', { attempt: 'Write a query to display the current time for each row in the employees table.', sampleTable: null, query: 'SELECT name, CURTIME() AS current_time\nFROM employees;', output: { headers: ['name','current_time'], rows: [['Alice','17:30:00'],['Bob','17:30:00']] }, note: 'CURTIME() returns only the time portion — no date.' }],
                    ['YEAR()', "SELECT YEAR('2026-10-13');", '2026', { attempt: 'Write a query to display each employee\'s name and the year they were hired from the employees table (hire_date column).', sampleTable: { headers: ['name','hire_date'], rows: [['Alice','2022-03-15'],['Bob','2019-07-01']] }, query: 'SELECT name, YEAR(hire_date) AS hire_year\nFROM employees;', output: { headers: ['name','hire_year'], rows: [['Alice','2022'],['Bob','2019']] }, note: 'YEAR() extracts only the 4-digit year from any DATE or DATETIME value.' }],
                    ['MONTH()', "SELECT MONTH('2026-10-13');", '10', { attempt: 'Write a query to find all employees hired in October (month 10) from the employees table.', sampleTable: { headers: ['name','hire_date'], rows: [['Alice','2022-10-05'],['Bob','2019-07-01'],['Carol','2023-10-20']] }, query: 'SELECT name, hire_date\nFROM employees\nWHERE MONTH(hire_date) = 10;', output: { headers: ['name','hire_date'], rows: [['Alice','2022-10-05'],['Carol','2023-10-20']] }, note: 'MONTH() returns an integer from 1 (January) to 12 (December).' }],
                    ['DAY()', "SELECT DAY('2026-10-13');", '13', { attempt: 'Write a query to display each employee\'s name and the day-of-month of their hire date.', sampleTable: { headers: ['name','hire_date'], rows: [['Alice','2022-03-15'],['Bob','2019-07-01']] }, query: 'SELECT name, DAY(hire_date) AS hire_day\nFROM employees;', output: { headers: ['name','hire_day'], rows: [['Alice','15'],['Bob','1']] }, note: 'DAY() is an alias for DAYOFMONTH() — both return the same result.' }],
                    ['DATE_ADD()', "SELECT DATE_ADD('2026-10-13', INTERVAL 7 DAY);", '2026-10-20', { attempt: 'Write a query to display each employee\'s name and their contract end date, which is 90 days after their hire date.', sampleTable: { headers: ['name','hire_date'], rows: [['Alice','2026-01-01'],['Bob','2026-03-15']] }, query: 'SELECT name,\n  DATE_ADD(hire_date, INTERVAL 90 DAY) AS contract_end\nFROM employees;', output: { headers: ['name','contract_end'], rows: [['Alice','2026-04-01'],['Bob','2026-06-13']] }, note: 'INTERVAL units include: DAY, MONTH, YEAR, HOUR, MINUTE, SECOND.' }],
                    ['DATE_SUB()', "SELECT DATE_SUB('2026-10-13', INTERVAL 7 DAY);", '2026-10-06', { attempt: 'Write a query to show employees whose hire date was within the last 30 days from today.', sampleTable: { headers: ['name','hire_date'], rows: [['Alice','2026-09-20'],['Bob','2026-10-01'],['Carol','2025-01-10']] }, query: 'SELECT name, hire_date\nFROM employees\nWHERE hire_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY);', output: { headers: ['name','hire_date'], rows: [['Alice','2026-09-20'],['Bob','2026-10-01']] }, note: 'DATE_SUB subtracts an interval from a date. Equivalent to DATE_ADD with a negative interval.' }],
                    ['DATEDIFF()', "SELECT DATEDIFF('2026-10-20','2026-10-13');", '7', { attempt: 'Write a query to display each employee\'s name and how many days they have been employed (from hire_date to today).', sampleTable: { headers: ['name','hire_date'], rows: [['Alice','2024-10-13'],['Bob','2026-01-01']] }, query: 'SELECT name,\n  DATEDIFF(CURDATE(), hire_date) AS days_employed\nFROM employees;', output: { headers: ['name','days_employed'], rows: [['Alice','730'],['Bob','285']] }, note: 'DATEDIFF(end, start) — argument order matters. Returns a negative number if start > end.' }],
                  ]
                },
                {
                  key: 'string', label: '2. String Functions', color: '#4ade80',
                  bg: 'rgba(74,222,128,0.08)', border: 'rgba(74,222,128,0.25)',
                  note: 'Important: MySQL string positions start at 1, not 0.',
                  rows: [
                    ['CONCAT()', "SELECT CONCAT('Hello',' World');", 'Hello World', { attempt: 'Write a query to display each employee\'s full name by combining first_name and last_name with a space in between.', sampleTable: { headers: ['first_name','last_name'], rows: [['Alice','Smith'],['Bob','Jones']] }, query: "SELECT CONCAT(first_name, ' ', last_name) AS full_name\nFROM employees;", output: { headers: ['full_name'], rows: [['Alice Smith'],['Bob Jones']] }, note: 'If any argument is NULL, CONCAT() returns NULL. Use CONCAT_WS() to skip NULLs automatically.' }],
                    ['LENGTH()', "SELECT LENGTH('Hello');", '5', { attempt: 'Write a query to display employee names and the byte-length of their name, showing only those whose name is longer than 5 characters.', sampleTable: { headers: ['name'], rows: [['Alice'],['Bob'],['Abhishek']] }, query: 'SELECT name, LENGTH(name) AS name_length\nFROM employees\nWHERE LENGTH(name) > 5;', output: { headers: ['name','name_length'], rows: [['Abhishek','8']] }, note: 'LENGTH() returns byte count. Use CHAR_LENGTH() for character count (important for multi-byte/Unicode strings).' }],
                    ['UPPER()', "SELECT UPPER('hello');", 'HELLO', { attempt: 'Write a query to display all employee names in uppercase from the employees table.', sampleTable: { headers: ['name'], rows: [['alice'],['bob'],['carol']] }, query: 'SELECT UPPER(name) AS name_upper\nFROM employees;', output: { headers: ['name_upper'], rows: [['ALICE'],['BOB'],['CAROL']] }, note: 'Useful for case-insensitive comparisons: WHERE UPPER(name) = \'ALICE\' matches any casing.' }],
                    ['LOWER()', "SELECT LOWER('HELLO');", 'hello', { attempt: 'Write a query to display all department names in lowercase from the departments table.', sampleTable: { headers: ['dept_name'], rows: [['HUMAN RESOURCES'],['INFORMATION TECHNOLOGY']] }, query: 'SELECT LOWER(dept_name) AS dept_lower\nFROM departments;', output: { headers: ['dept_lower'], rows: [['human resources'],['information technology']] }, note: 'LOWER() is commonly used when normalizing data before comparisons or inserts.' }],
                    ['TRIM()', "SELECT TRIM('  Hello  ');", 'Hello', { attempt: 'Write a query to display employee names after removing any leading or trailing spaces from the name column.', sampleTable: { headers: ['name'], rows: [['  Alice'],['Bob  '],['  Carol  ']] }, query: 'SELECT TRIM(name) AS clean_name\nFROM employees;', output: { headers: ['clean_name'], rows: [['Alice'],['Bob'],['Carol']] }, note: 'LTRIM() removes only leading spaces; RTRIM() removes only trailing spaces. TRIM() removes both.' }],
                    ['SUBSTRING()', "SELECT SUBSTRING('Abhishek',1,4);", 'Abhi', { attempt: 'Write a query to display only the first 4 characters of each employee\'s name from the employees table.', sampleTable: { headers: ['name'], rows: [['Abhishek'],['Alice'],['Bob']] }, query: 'SELECT name, SUBSTRING(name, 1, 4) AS short_name\nFROM employees;', output: { headers: ['name','short_name'], rows: [['Abhishek','Abhi'],['Alice','Alic'],['Bob','Bob']] }, note: 'MySQL string indexes start at 1. SUBSTRING(str, pos) without length returns from pos to end.' }],
                    ['REPLACE()', "SELECT REPLACE('Hello World','World','SQL');", 'Hello SQL', { attempt: 'Write a query to display job titles from the employees table, replacing the word \'Manager\' with \'Lead\'.', sampleTable: { headers: ['name','job_title'], rows: [['Alice','Sales Manager'],['Bob','HR Manager'],['Carol','Developer']] }, query: "SELECT name, REPLACE(job_title, 'Manager', 'Lead') AS updated_title\nFROM employees;", output: { headers: ['name','updated_title'], rows: [['Alice','Sales Lead'],['Bob','HR Lead'],['Carol','Developer']] }, note: 'REPLACE() is case-sensitive in MySQL. It replaces ALL occurrences, not just the first.' }],
                  ]
                },
                {
                  key: 'math', label: '3. Mathematical Functions', color: '#fb923c',
                  bg: 'rgba(251,146,60,0.08)', border: 'rgba(251,146,60,0.25)', note: null,
                  rows: [
                    ['ROUND()', 'SELECT ROUND(12.567,2);', '12.57', { attempt: 'Write a query to display each employee\'s name and their average monthly salary rounded to 2 decimal places.', sampleTable: { headers: ['name','annual_salary'], rows: [['Alice','72000'],['Bob','55000']] }, query: 'SELECT name,\n  ROUND(annual_salary / 12, 2) AS monthly_salary\nFROM employees;', output: { headers: ['name','monthly_salary'], rows: [['Alice','6000.00'],['Bob','4583.33']] }, note: 'ROUND(x, 0) rounds to the nearest integer. ROUND(x, -1) rounds to the nearest 10.' }],
                    ['ABS()', 'SELECT ABS(-25);', '25', { attempt: 'Write a query to display the absolute difference between each employee\'s salary and the company average salary.', sampleTable: { headers: ['name','salary'], rows: [['Alice','80000'],['Bob','50000'],['Carol','65000']] }, query: 'SELECT name,\n  ABS(salary - AVG(salary) OVER()) AS diff_from_avg\nFROM employees;', output: { headers: ['name','diff_from_avg'], rows: [['Alice','15000'],['Bob','15000'],['Carol','0']] }, note: 'ABS() is essential when computing differences where the sign (positive/negative) does not matter.' }],
                    ['CEIL()', 'SELECT CEIL(4.2);', '5', { attempt: 'Write a query to show the number of pages needed to display all employees if each page holds 5 records.', sampleTable: null, query: 'SELECT CEIL(COUNT(*) / 5) AS total_pages\nFROM employees;', output: { headers: ['total_pages'], rows: [['4 (for 18 employees)']] }, note: 'CEIL() always rounds UP to the nearest integer, even for .1. Also written as CEILING().' }],
                    ['FLOOR()', 'SELECT FLOOR(4.8);', '4', { attempt: 'Write a query to display each employee\'s salary per week (annual / 52), rounded down to nearest whole number.', sampleTable: { headers: ['name','annual_salary'], rows: [['Alice','72000'],['Bob','55000']] }, query: 'SELECT name,\n  FLOOR(annual_salary / 52) AS weekly_salary\nFROM employees;', output: { headers: ['name','weekly_salary'], rows: [['Alice','1384'],['Bob','1057']] }, note: 'FLOOR() always rounds DOWN — useful for computing quotas or page counts without fractions.' }],
                    ['MOD()', 'SELECT MOD(10,3);', '1', { attempt: 'Write a query to display employee IDs that are odd numbers (not divisible by 2).', sampleTable: { headers: ['id','name'], rows: [['1','Alice'],['2','Bob'],['3','Carol'],['4','Dave']] }, query: 'SELECT id, name\nFROM employees\nWHERE MOD(id, 2) = 1;', output: { headers: ['id','name'], rows: [['1','Alice'],['3','Carol']] }, note: 'MOD(x, y) is equivalent to x % y in MySQL. Returns the remainder after division.' }],
                    ['POWER()', 'SELECT POWER(2,3);', '8', { attempt: 'Write a query to calculate 2 raised to the power of each employee\'s years_of_experience and display it alongside their name.', sampleTable: { headers: ['name','years_of_experience'], rows: [['Alice','3'],['Bob','2']] }, query: 'SELECT name,\n  POWER(2, years_of_experience) AS score\nFROM employees;', output: { headers: ['name','score'], rows: [['Alice','8'],['Bob','4']] }, note: 'POWER(base, exponent) — also written as POW(). Returns a FLOAT result.' }],
                    ['SQRT()', 'SELECT SQRT(25);', '5', { attempt: 'Write a query to display the square root of each product\'s stock_quantity from the products table.', sampleTable: { headers: ['product','stock_quantity'], rows: [['Laptop','100'],['Mouse','25'],['Keyboard','49']] }, query: 'SELECT product, SQRT(stock_quantity) AS sqrt_stock\nFROM products;', output: { headers: ['product','sqrt_stock'], rows: [['Laptop','10'],['Mouse','5'],['Keyboard','7']] }, note: 'SQRT() returns NULL for negative numbers. Always returns a FLOAT.' }],
                    ['RAND()', 'SELECT RAND();', 'Random decimal 0 to <1', { attempt: 'Write a query to retrieve 3 random employees from the employees table.', sampleTable: { headers: ['id','name'], rows: [['1','Alice'],['2','Bob'],['3','Carol'],['4','Dave'],['5','Eve']] }, query: 'SELECT id, name\nFROM employees\nORDER BY RAND()\nLIMIT 3;', output: { headers: ['id','name'], rows: [['3','Carol'],['1','Alice'],['5','Eve']] }, note: 'ORDER BY RAND() is the standard way to get random rows. Avoid on very large tables as it is slow.' }],
                  ]
                },
                {
                  key: 'conditional', label: '4. Conditional and NULL Functions', color: '#c084fc',
                  bg: 'rgba(192,132,252,0.08)', border: 'rgba(192,132,252,0.25)', note: null,
                  rows: [
                    ['IF()', "SELECT IF(10>5,'Yes','No');", 'Yes', { attempt: 'Write a query to display each employee\'s name and a \'Status\' column showing \'High\' if salary > 60000, else \'Normal\'.', sampleTable: { headers: ['name','salary'], rows: [['Alice','80000'],['Bob','50000'],['Carol','65000']] }, query: "SELECT name,\n  IF(salary > 60000, 'High', 'Normal') AS status\nFROM employees;", output: { headers: ['name','status'], rows: [['Alice','High'],['Bob','Normal'],['Carol','High']] }, note: 'IF(condition, true_val, false_val) — use CASE for more than two outcomes.' }],
                    ['IFNULL()', 'SELECT IFNULL(NULL,0);', '0', { attempt: 'Write a query to display employee names and their bonus; show 0 if the bonus column is NULL.', sampleTable: { headers: ['name','bonus'], rows: [['Alice','5000'],['Bob','NULL'],['Carol','3000']] }, query: 'SELECT name,\n  IFNULL(bonus, 0) AS bonus_amount\nFROM employees;', output: { headers: ['name','bonus_amount'], rows: [['Alice','5000'],['Bob','0'],['Carol','3000']] }, note: 'IFNULL(expr, alt) returns alt only if expr is NULL — equivalent to COALESCE with two arguments.' }],
                    ['COALESCE()', 'SELECT COALESCE(NULL,NULL,10,20);', '10', { attempt: 'Write a query to display each employee\'s preferred contact: use mobile if available, else landline, else email.', sampleTable: { headers: ['name','mobile','landline','email'], rows: [['Alice','NULL','NULL','alice@x.com'],['Bob','9999','NULL','bob@x.com'],['Carol','NULL','1234','carol@x.com']] }, query: 'SELECT name,\n  COALESCE(mobile, landline, email) AS contact\nFROM employees;', output: { headers: ['name','contact'], rows: [['Alice','alice@x.com'],['Bob','9999'],['Carol','1234']] }, note: 'COALESCE() returns the first non-NULL value from the list. Accepts unlimited arguments.' }],
                    ['NULLIF()', 'SELECT NULLIF(10,10);', 'NULL', { attempt: 'Write a query to calculate the ratio of sales to target, but return NULL instead of dividing by zero when target is 0.', sampleTable: { headers: ['rep','sales','target'], rows: [['Alice','500','100'],['Bob','0','0'],['Carol','300','150']] }, query: 'SELECT rep,\n  sales / NULLIF(target, 0) AS ratio\nFROM sales_data;', output: { headers: ['rep','ratio'], rows: [['Alice','5.00'],['Bob','NULL'],['Carol','2.00']] }, note: 'NULLIF(a, b) returns NULL when a = b — the classic way to prevent division-by-zero errors.' }],
                    ['CASE', "SELECT CASE WHEN 80>=40 THEN 'Pass' ELSE 'Fail' END;", 'Pass', { attempt: 'Write a query to assign a grade label to each student: A (>=90), B (>=75), C (>=60), else Fail.', sampleTable: { headers: ['name','score'], rows: [['Alice','92'],['Bob','78'],['Carol','61'],['Dave','45']] }, query: "SELECT name, score,\n  CASE\n    WHEN score >= 90 THEN 'A'\n    WHEN score >= 75 THEN 'B'\n    WHEN score >= 60 THEN 'C'\n    ELSE 'Fail'\n  END AS grade\nFROM students;", output: { headers: ['name','score','grade'], rows: [['Alice','92','A'],['Bob','78','B'],['Carol','61','C'],['Dave','45','Fail']] }, note: 'CASE is evaluated top-down — the first matching WHEN wins. Always end with END.' }],
                  ]
                },
                {
                  key: 'dbnum', label: '5. Database and Numeric Functions', color: '#fbbf24',
                  bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.25)', note: null,
                  rows: [
                    ['CURRENT_USER()', 'SELECT CURRENT_USER();', 'Current MySQL account', { attempt: 'Write a query to display the current authenticated MySQL user performing the query.', sampleTable: null, query: 'SELECT CURRENT_USER() AS logged_in_user;', output: { headers: ['logged_in_user'], rows: [['root@localhost']] }, note: 'Useful for audit logs and security checks. Returns user@host format.' }],
                    ['DATABASE()', 'SELECT DATABASE();', 'Selected database name', { attempt: 'Write a query to confirm which database is currently selected in your session.', sampleTable: null, query: 'SELECT DATABASE() AS current_db;', output: { headers: ['current_db'], rows: [['accenture_db']] }, note: 'Returns NULL if no database is selected with USE. Common in stored procedures for validation.' }],
                    ['DIV', 'SELECT 10 DIV 3;', '3', { attempt: 'Write a query to calculate how many complete weeks each employee has been employed (days_employed DIV 7).', sampleTable: { headers: ['name','days_employed'], rows: [['Alice','100'],['Bob','50'],['Carol','365']] }, query: 'SELECT name,\n  days_employed DIV 7 AS complete_weeks\nFROM employees;', output: { headers: ['name','complete_weeks'], rows: [['Alice','14'],['Bob','7'],['Carol','52']] }, note: 'DIV performs integer division, discarding the remainder. Equivalent to FLOOR(a/b).' }],
                    ['%', 'SELECT 10 % 3;', '1', { attempt: 'Write a query to display only employees whose ID is divisible by 3 (every 3rd employee).', sampleTable: { headers: ['id','name'], rows: [['1','Alice'],['2','Bob'],['3','Carol'],['4','Dave'],['6','Eve']] }, query: 'SELECT id, name\nFROM employees\nWHERE id % 3 = 0;', output: { headers: ['id','name'], rows: [['3','Carol'],['6','Eve']] }, note: 'The % operator is the modulo operator in MySQL — same as MOD(a, b).' }],
                    ['GREATEST()', 'SELECT GREATEST(10,20,5);', '20', { attempt: 'Write a query to display each employee\'s name and the highest of their three quarterly bonus values.', sampleTable: { headers: ['name','q1','q2','q3'], rows: [['Alice','3000','5000','4000'],['Bob','2000','2000','8000']] }, query: 'SELECT name,\n  GREATEST(q1, q2, q3) AS best_quarter\nFROM bonuses;', output: { headers: ['name','best_quarter'], rows: [['Alice','5000'],['Bob','8000']] }, note: 'GREATEST() returns NULL if any argument is NULL. Use COALESCE on NULLable columns first.' }],
                    ['LEAST()', 'SELECT LEAST(10,20,5);', '5', { attempt: 'Write a query to display each employee\'s name and the lowest of their three quarterly scores.', sampleTable: { headers: ['name','q1','q2','q3'], rows: [['Alice','80','95','70'],['Bob','60','85','90']] }, query: 'SELECT name,\n  LEAST(q1, q2, q3) AS weakest_quarter\nFROM performance;', output: { headers: ['name','weakest_quarter'], rows: [['Alice','70'],['Bob','60']] }, note: 'LEAST() returns NULL if any argument is NULL — mirror behaviour to GREATEST().' }],
                  ]
                },
                {
                  key: 'aggregate', label: '6. Aggregate Functions', color: '#f472b6',
                  bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.25)',
                  note: 'Tip: SUM(CASE WHEN condition THEN 1 ELSE 0 END) is a powerful conditional count pattern. COUNT(*) counts NULLs; COUNT(col) does not. GROUP_CONCAT is MySQL-specific.',
                  rows: [
                    ['COUNT(*)', 'SELECT COUNT(*) FROM employees;', 'Total rows including NULLs', { attempt: 'Write a query to display the total number of employees in each department.', sampleTable: { headers: ['name','dept'], rows: [['Alice','HR'],['Bob','HR'],['Carol','IT'],['Dave','IT'],['Eve','IT']] }, query: 'SELECT dept, COUNT(*) AS total_employees\nFROM employees\nGROUP BY dept;', output: { headers: ['dept','total_employees'], rows: [['HR','2'],['IT','3']] }, note: 'COUNT(*) counts every row including those with NULL values in any column.' }],
                    ['COUNT(col)', 'SELECT COUNT(salary) FROM employees;', 'Non-NULL rows only', { attempt: 'Write a query to count how many employees have a salary recorded (non-NULL) per department.', sampleTable: { headers: ['name','dept','salary'], rows: [['Alice','HR','60000'],['Bob','HR','NULL'],['Carol','IT','75000']] }, query: 'SELECT dept, COUNT(salary) AS employees_with_salary\nFROM employees\nGROUP BY dept;', output: { headers: ['dept','employees_with_salary'], rows: [['HR','1'],['IT','1']] }, note: 'COUNT(column) skips NULL values — use this to count only records with actual data.' }],
                    ['COUNT(DISTINCT)', 'SELECT COUNT(DISTINCT dept_id) FROM employees;', 'Unique department count', { attempt: 'Write a query to find the number of unique departments that have at least one employee.', sampleTable: { headers: ['name','dept_id'], rows: [['Alice','1'],['Bob','1'],['Carol','2'],['Dave','3'],['Eve','3']] }, query: 'SELECT COUNT(DISTINCT dept_id) AS unique_depts\nFROM employees;', output: { headers: ['unique_depts'], rows: [['3']] }, note: 'DISTINCT inside COUNT removes duplicates before counting — very common in assessments.' }],
                    ['SUM()', 'SELECT SUM(salary) FROM employees;', 'Total of all salaries', { attempt: 'Write a query to display the total salary paid per department from the employees table.', sampleTable: { headers: ['name','dept','salary'], rows: [['Alice','HR','60000'],['Bob','HR','55000'],['Carol','IT','75000']] }, query: 'SELECT dept, SUM(salary) AS total_salary\nFROM employees\nGROUP BY dept;', output: { headers: ['dept','total_salary'], rows: [['HR','115000'],['IT','75000']] }, note: 'SUM() ignores NULL values. To treat NULL as 0, use SUM(IFNULL(col, 0)).' }],
                    ['AVG()', 'SELECT AVG(salary) FROM employees;', 'Mean salary (NULLs ignored)', { attempt: 'Write a query to display each department and its average salary, showing only departments where the average exceeds 60000.', sampleTable: { headers: ['name','dept','salary'], rows: [['Alice','HR','60000'],['Bob','HR','55000'],['Carol','IT','80000'],['Dave','IT','75000']] }, query: 'SELECT dept, AVG(salary) AS avg_salary\nFROM employees\nGROUP BY dept\nHAVING AVG(salary) > 60000;', output: { headers: ['dept','avg_salary'], rows: [['IT','77500.0000']] }, note: 'AVG() ignores NULLs. Use HAVING (not WHERE) to filter on aggregate results.' }],
                    ['MIN()', 'SELECT MIN(salary) FROM employees;', 'Lowest salary value', { attempt: 'Write a query to display the employee name and salary of the lowest-paid employee in each department.', sampleTable: { headers: ['name','dept','salary'], rows: [['Alice','HR','60000'],['Bob','HR','55000'],['Carol','IT','80000'],['Dave','IT','70000']] }, query: 'SELECT dept, MIN(salary) AS min_salary\nFROM employees\nGROUP BY dept;', output: { headers: ['dept','min_salary'], rows: [['HR','55000'],['IT','70000']] }, note: 'To get the employee name with the minimum salary, use a subquery or window function.' }],
                    ['MAX()', 'SELECT MAX(salary) FROM employees;', 'Highest salary value', { attempt: 'Write a query to display the highest salary in the entire company from the employees table.', sampleTable: { headers: ['name','salary'], rows: [['Alice','60000'],['Bob','80000'],['Carol','75000']] }, query: 'SELECT MAX(salary) AS highest_salary\nFROM employees;', output: { headers: ['highest_salary'], rows: [['80000']] }, note: 'To find the employee with the max salary, use: WHERE salary = (SELECT MAX(salary) FROM employees).' }],
                    ['GROUP_CONCAT()', "SELECT GROUP_CONCAT(name SEPARATOR ', ') FROM employees;", 'Alice, Bob, Charlie', { attempt: 'Write a query to display each department along with a comma-separated list of all employee names belonging to that department.', sampleTable: { headers: ['id','name','dept'], rows: [['1','Alice','HR'],['2','Bob','HR'],['3','Carol','IT']] }, query: "SELECT dept,\n  GROUP_CONCAT(name SEPARATOR ', ') AS members\nFROM employees\nGROUP BY dept;", output: { headers: ['dept','members'], rows: [['HR','Alice, Bob'],['IT','Carol']] }, note: 'GROUP_CONCAT is MySQL-specific. Default separator is comma. Use ORDER BY inside: GROUP_CONCAT(name ORDER BY name).' }],
                    ['SUM + CASE', "SELECT SUM(CASE WHEN gender='M' THEN 1 ELSE 0 END) FROM employees;", 'Count of male employees', { attempt: 'Write a query to display the count of male and female employees side by side in a single row from the employees table.', sampleTable: { headers: ['name','gender'], rows: [['Alice','F'],['Bob','M'],['Carol','F'],['Dave','M'],['Eve','F']] }, query: "SELECT\n  SUM(CASE WHEN gender = 'M' THEN 1 ELSE 0 END) AS male_count,\n  SUM(CASE WHEN gender = 'F' THEN 1 ELSE 0 END) AS female_count\nFROM employees;", output: { headers: ['male_count','female_count'], rows: [['2','3']] }, note: 'This conditional aggregation pattern is extremely common in Accenture assessments for pivot-style reports.' }],
                  ]
                },
                {
                  key: 'window', label: '7. Window / Analytical Functions', color: '#67e8f9',
                  bg: 'rgba(103,232,249,0.08)', border: 'rgba(103,232,249,0.25)',
                  note: 'Syntax: FUNCTION() OVER (PARTITION BY col ORDER BY col). ROW_NUMBER=unique ranks; RANK=gaps on ties; DENSE_RANK=no gaps. LAG/LEAD access adjacent rows without self-joins.',
                  rows: [
                    ['ROW_NUMBER()', 'ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC)', 'Unique rank per dept, no ties', { attempt: 'Write a query to assign a unique rank to each employee within their department based on salary (highest = 1).', sampleTable: { headers: ['name','dept','salary'], rows: [['Alice','HR','80000'],['Bob','HR','60000'],['Carol','IT','90000'],['Dave','IT','90000']] }, query: 'SELECT name, dept, salary,\n  ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS rn\nFROM employees;', output: { headers: ['name','dept','salary','rn'], rows: [['Alice','HR','80000','1'],['Bob','HR','60000','2'],['Carol','IT','90000','1'],['Dave','IT','90000','2']] }, note: 'ROW_NUMBER() never produces ties — even equal salaries get different numbers (order is arbitrary for ties).' }],
                    ['RANK()', 'RANK() OVER (ORDER BY salary DESC)', 'Rank with gaps: 1,1,3', { attempt: 'Write a query to rank all employees by salary. Employees with equal salaries should receive the same rank, and the next rank should skip accordingly.', sampleTable: { headers: ['name','salary'], rows: [['Alice','90000'],['Bob','90000'],['Carol','75000'],['Dave','60000']] }, query: 'SELECT name, salary,\n  RANK() OVER (ORDER BY salary DESC) AS rnk\nFROM employees;', output: { headers: ['name','salary','rnk'], rows: [['Alice','90000','1'],['Bob','90000','1'],['Carol','75000','3'],['Dave','60000','4']] }, note: 'RANK() skips numbers after ties: two employees at rank 1 means no rank 2 — next is rank 3.' }],
                    ['DENSE_RANK()', 'DENSE_RANK() OVER (ORDER BY salary DESC)', 'Rank without gaps: 1,1,2', { attempt: 'Write a query to rank employees by salary without any gaps in the ranking sequence, even when salaries are tied.', sampleTable: { headers: ['name','salary'], rows: [['Alice','90000'],['Bob','90000'],['Carol','75000'],['Dave','60000']] }, query: 'SELECT name, salary,\n  DENSE_RANK() OVER (ORDER BY salary DESC) AS d_rank\nFROM employees;', output: { headers: ['name','salary','d_rank'], rows: [['Alice','90000','1'],['Bob','90000','1'],['Carol','75000','2'],['Dave','60000','3']] }, note: 'DENSE_RANK() never skips — two employees at rank 1 means the next distinct salary gets rank 2.' }],
                    ['NTILE(n)', 'NTILE(4) OVER (ORDER BY salary)', 'Divides rows into 4 buckets', { attempt: 'Write a query to divide employees into 4 salary quartiles (1=lowest, 4=highest) based on their salary.', sampleTable: { headers: ['name','salary'], rows: [['Alice','40000'],['Bob','55000'],['Carol','70000'],['Dave','85000'],['Eve','95000']] }, query: 'SELECT name, salary,\n  NTILE(4) OVER (ORDER BY salary) AS quartile\nFROM employees;', output: { headers: ['name','salary','quartile'], rows: [['Alice','40000','1'],['Bob','55000','2'],['Carol','70000','2'],['Dave','85000','3'],['Eve','95000','4']] }, note: 'NTILE(n) distributes rows as evenly as possible. Extra rows go to the first buckets.' }],
                    ['LAG(col, n)', 'LAG(salary, 1) OVER (ORDER BY hire_date)', 'Previous row salary value', { attempt: 'Write a query to display each employee\'s salary alongside the salary of the employee hired just before them.', sampleTable: { headers: ['name','hire_date','salary'], rows: [['Alice','2020-01-01','50000'],['Bob','2021-06-01','60000'],['Carol','2022-03-01','70000']] }, query: 'SELECT name, salary,\n  LAG(salary, 1) OVER (ORDER BY hire_date) AS prev_salary\nFROM employees;', output: { headers: ['name','salary','prev_salary'], rows: [['Alice','50000','NULL'],['Bob','60000','50000'],['Carol','70000','60000']] }, note: 'LAG(col, 1) looks back 1 row. First row has no previous, so it returns NULL.' }],
                    ['LEAD(col, n)', 'LEAD(salary, 1) OVER (ORDER BY hire_date)', 'Next row salary value', { attempt: 'Write a query to display each employee\'s salary alongside the salary of the next employee hired after them.', sampleTable: { headers: ['name','hire_date','salary'], rows: [['Alice','2020-01-01','50000'],['Bob','2021-06-01','60000'],['Carol','2022-03-01','70000']] }, query: 'SELECT name, salary,\n  LEAD(salary, 1) OVER (ORDER BY hire_date) AS next_salary\nFROM employees;', output: { headers: ['name','salary','next_salary'], rows: [['Alice','50000','60000'],['Bob','60000','70000'],['Carol','70000','NULL']] }, note: 'LEAD() looks forward. The last row returns NULL since there is no next row.' }],
                    ['FIRST_VALUE()', 'FIRST_VALUE(salary) OVER (PARTITION BY dept ORDER BY salary DESC)', 'Highest salary in dept', { attempt: 'Write a query to display each employee alongside the highest salary in their department.', sampleTable: { headers: ['name','dept','salary'], rows: [['Alice','HR','80000'],['Bob','HR','60000'],['Carol','IT','90000'],['Dave','IT','70000']] }, query: 'SELECT name, dept, salary,\n  FIRST_VALUE(salary) OVER (PARTITION BY dept ORDER BY salary DESC) AS dept_max\nFROM employees;', output: { headers: ['name','dept','salary','dept_max'], rows: [['Alice','HR','80000','80000'],['Bob','HR','60000','80000'],['Carol','IT','90000','90000'],['Dave','IT','70000','90000']] }, note: 'FIRST_VALUE() returns the first value in the window frame — ordering determines which row is first.' }],
                    ['LAST_VALUE()', 'LAST_VALUE(salary) OVER (...ROWS UNBOUNDED)', 'Lowest salary in dept', { attempt: 'Write a query to display each employee alongside the minimum salary in their department using LAST_VALUE.', sampleTable: { headers: ['name','dept','salary'], rows: [['Alice','HR','80000'],['Bob','HR','60000'],['Carol','IT','90000'],['Dave','IT','70000']] }, query: 'SELECT name, dept, salary,\n  LAST_VALUE(salary) OVER (\n    PARTITION BY dept ORDER BY salary DESC\n    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING\n  ) AS dept_min\nFROM employees;', output: { headers: ['name','dept','salary','dept_min'], rows: [['Alice','HR','80000','60000'],['Bob','HR','60000','60000'],['Carol','IT','90000','70000'],['Dave','IT','70000','70000']] }, note: 'LAST_VALUE() requires explicit ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING to see the true last row.' }],
                    ['SUM() OVER()', 'SUM(salary) OVER (PARTITION BY dept)', 'Running dept total per row', { attempt: 'Write a query to display each employee\'s name, salary, and the total salary of their entire department alongside each row.', sampleTable: { headers: ['name','dept','salary'], rows: [['Alice','HR','80000'],['Bob','HR','60000'],['Carol','IT','90000'],['Dave','IT','70000']] }, query: 'SELECT name, dept, salary,\n  SUM(salary) OVER (PARTITION BY dept) AS dept_total\nFROM employees;', output: { headers: ['name','dept','salary','dept_total'], rows: [['Alice','HR','80000','140000'],['Bob','HR','60000','140000'],['Carol','IT','90000','160000'],['Dave','IT','70000','160000']] }, note: 'Unlike GROUP BY, window SUM() keeps individual rows intact while adding the aggregate alongside.' }],
                  ]
                },
                {
                  key: 'stringext', label: '8. String Functions (Extended)', color: '#86efac',
                  bg: 'rgba(134,239,172,0.08)', border: 'rgba(134,239,172,0.25)',
                  note: 'CHAR_LENGTH() counts characters (Unicode-safe); LENGTH() counts bytes. LOCATE() returns 0 if substring is not found.',
                  rows: [
                    ['LEFT()', "SELECT LEFT('Abhishek', 4);", 'Abhi', { attempt: 'Write a query to display the first 3 characters of each employee\'s first name from the employees table.', sampleTable: { headers: ['first_name'], rows: [['Abhishek'],['Alice'],['Bob']] }, query: 'SELECT first_name,\n  LEFT(first_name, 3) AS initials\nFROM employees;', output: { headers: ['first_name','initials'], rows: [['Abhishek','Abh'],['Alice','Ali'],['Bob','Bob']] }, note: 'LEFT(str, n) is equivalent to SUBSTRING(str, 1, n). If n exceeds string length, full string is returned.' }],
                    ['RIGHT()', "SELECT RIGHT('Abhishek', 3);", 'hek', { attempt: 'Write a query to extract the last 4 characters of each employee\'s employee_code from the employees table.', sampleTable: { headers: ['name','employee_code'], rows: [['Alice','EMP20241'],['Bob','EMP20239'],['Carol','EMP20245']] }, query: 'SELECT name,\n  RIGHT(employee_code, 4) AS code_suffix\nFROM employees;', output: { headers: ['name','code_suffix'], rows: [['Alice','0241'],['Bob','0239'],['Carol','0245']] }, note: 'RIGHT(str, n) extracts from the end. Useful for extracting suffixes like year codes or IDs.' }],
                    ['LPAD()', "SELECT LPAD('5', 4, '0');", '0005', { attempt: 'Write a query to display employee IDs padded with leading zeros to always be 6 digits wide.', sampleTable: { headers: ['id','name'], rows: [['1','Alice'],['42','Bob'],['999','Carol']] }, query: "SELECT LPAD(id, 6, '0') AS padded_id, name\nFROM employees;", output: { headers: ['padded_id','name'], rows: [['000001','Alice'],['000042','Bob'],['000999','Carol']] }, note: 'LPAD(str, total_length, pad_str) — if str is already longer than total_length, it is truncated from the left.' }],
                    ['RPAD()', "SELECT RPAD('Hi', 5, '.');", 'Hi...', { attempt: 'Write a query to display product codes right-padded with dashes to a total width of 10 characters.', sampleTable: { headers: ['product','code'], rows: [['Laptop','A1'],['Mouse','B12'],['Keyboard','C1234']] }, query: "SELECT product,\n  RPAD(code, 10, '-') AS padded_code\nFROM products;", output: { headers: ['product','padded_code'], rows: [['Laptop','A1--------'],['Mouse','B12-------'],['Keyboard','C1234-----']] }, note: 'RPAD(str, total_length, pad_str) pads on the right. Useful for fixed-width report formatting.' }],
                    ['LOCATE()', "SELECT LOCATE('is', 'Abhishek');", '4 (position of first match)', { attempt: 'Write a query to find employees whose email contains the domain \'@gmail.com\' and display the position where it starts.', sampleTable: { headers: ['name','email'], rows: [['Alice','alice@gmail.com'],['Bob','bob@yahoo.com'],['Carol','carol@gmail.com']] }, query: "SELECT name, email,\n  LOCATE('@gmail.com', email) AS at_pos\nFROM employees\nWHERE LOCATE('@gmail.com', email) > 0;", output: { headers: ['name','email','at_pos'], rows: [['Alice','alice@gmail.com','6'],['Carol','carol@gmail.com','6']] }, note: 'LOCATE(substr, str) returns 0 if not found. Positions start at 1, not 0.' }],
                    ['INSTR()', "SELECT INSTR('Abhishek', 'shek');", '5', { attempt: 'Write a query to display employee names that contain the substring \'son\' anywhere in their last_name.', sampleTable: { headers: ['first_name','last_name'], rows: [['Alice','Johnson'],['Bob','Smith'],['Carol','Anderson']] }, query: "SELECT first_name, last_name\nFROM employees\nWHERE INSTR(last_name, 'son') > 0;", output: { headers: ['first_name','last_name'], rows: [['Alice','Johnson'],['Carol','Anderson']] }, note: 'INSTR(str, substr) is similar to LOCATE() but argument order is reversed.' }],
                    ['REVERSE()', "SELECT REVERSE('SQL');", 'LQS', { attempt: 'Write a query to display each employee name alongside its reversed version from the employees table.', sampleTable: { headers: ['name'], rows: [['Alice'],['Bob'],['Carol']] }, query: 'SELECT name, REVERSE(name) AS reversed_name\nFROM employees;', output: { headers: ['name','reversed_name'], rows: [['Alice','ecilA'],['Bob','boB'],['Carol','loraC']] }, note: 'REVERSE() can be used to detect palindromes: WHERE name = REVERSE(name).' }],
                    ['REPEAT()', "SELECT REPEAT('Ha', 3);", 'HaHaHa', { attempt: 'Write a query to create a visual rating bar for each product using asterisks repeated by the rating value.', sampleTable: { headers: ['product','rating'], rows: [['Laptop','5'],['Mouse','3'],['Keyboard','4']] }, query: "SELECT product, REPEAT('★', rating) AS stars\nFROM products;", output: { headers: ['product','stars'], rows: [['Laptop','★★★★★'],['Mouse','★★★'],['Keyboard','★★★★']] }, note: 'REPEAT(str, n) returns an empty string if n <= 0, and NULL if str or n is NULL.' }],
                    ['CHAR_LENGTH()', "SELECT CHAR_LENGTH('Hello 🌟');", '7 (character count)', { attempt: 'Write a query to find employees whose full name (first + last) exceeds 15 characters in length.', sampleTable: { headers: ['first_name','last_name'], rows: [['Alice','Smith'],['Christopher','Anderson'],['Bob','Li']] }, query: "SELECT CONCAT(first_name, ' ', last_name) AS full_name,\n  CHAR_LENGTH(CONCAT(first_name, ' ', last_name)) AS name_len\nFROM employees\nHAVING name_len > 15;", output: { headers: ['full_name','name_len'], rows: [['Christopher Anderson','20']] }, note: 'CHAR_LENGTH() counts characters (Unicode-safe). LENGTH() counts bytes — different for emoji/accented chars.' }],
                    ['INSERT()', "SELECT INSERT('Hello World', 7, 5, 'MySQL');", 'Hello MySQL', { attempt: 'Write a query to replace the 5th through 8th character of each employee\'s code with \'XXXX\' to mask part of the ID.', sampleTable: { headers: ['name','emp_code'], rows: [['Alice','EMP12345'],['Bob','EMP67890']] }, query: "SELECT name,\n  INSERT(emp_code, 4, 4, 'XXXX') AS masked_code\nFROM employees;", output: { headers: ['name','masked_code'], rows: [['Alice','EMPXXXX5'],['Bob','EMPXXXX0']] }, note: 'INSERT(str, pos, len, newstr) replaces len characters starting at pos with newstr.' }],
                  ]
                },
                {
                  key: 'typeconv', label: '9. Type Conversion Functions', color: '#fda4af',
                  bg: 'rgba(253,164,175,0.08)', border: 'rgba(253,164,175,0.25)',
                  note: 'STR_TO_DATE() format: %d=day, %m=month, %Y=4-digit year. Use CAST() to avoid silent integer division when computing percentages.',
                  rows: [
                    ['CAST()', "SELECT CAST('123' AS UNSIGNED);", '123 (string → integer)', { attempt: 'Write a query to calculate the percentage of employees earning above 60000, avoiding integer division truncation.', sampleTable: { headers: ['name','salary'], rows: [['Alice','80000'],['Bob','50000'],['Carol','70000'],['Dave','45000']] }, query: 'SELECT\n  CAST(SUM(salary > 60000) AS DECIMAL(5,2)) /\n  COUNT(*) * 100 AS pct_high_earners\nFROM employees;', output: { headers: ['pct_high_earners'], rows: [['50.00']] }, note: 'Without CAST, integer/integer division truncates to 0. Always cast at least one operand when computing ratios.' }],
                    ['CAST() decimal', "SELECT CAST(7 AS DECIMAL(5,2));", '7.00', { attempt: 'Write a query to display each employee\'s salary formatted as a decimal with exactly 2 decimal places.', sampleTable: { headers: ['name','salary'], rows: [['Alice','80000'],['Bob','55000']] }, query: 'SELECT name,\n  CAST(salary AS DECIMAL(10,2)) AS formatted_salary\nFROM employees;', output: { headers: ['name','formatted_salary'], rows: [['Alice','80000.00'],['Bob','55000.00']] }, note: 'DECIMAL(10,2) means up to 10 total digits, 2 after decimal point.' }],
                    ['CONVERT()', "SELECT CONVERT(12.5, CHAR);", "'12.5' (number → string)", { attempt: 'Write a query to concatenate each employee\'s salary (numeric) with the string \' USD\' as a single text value.', sampleTable: { headers: ['name','salary'], rows: [['Alice','80000'],['Bob','55000']] }, query: "SELECT name,\n  CONCAT(CONVERT(salary, CHAR), ' USD') AS salary_str\nFROM employees;", output: { headers: ['name','salary_str'], rows: [['Alice','80000 USD'],['Bob','55000 USD']] }, note: 'CONVERT(value, type) is the MySQL syntax. CONVERT(value USING charset) is for character set conversion.' }],
                    ['FORMAT()', 'SELECT FORMAT(1234567.891, 2);', "'1,234,567.89' (formatted string)", { attempt: 'Write a query to display total salary per department formatted with comma separators and 2 decimal places.', sampleTable: { headers: ['name','dept','salary'], rows: [['Alice','HR','80000'],['Bob','HR','55000'],['Carol','IT','90000']] }, query: 'SELECT dept,\n  FORMAT(SUM(salary), 2) AS total_salary\nFROM employees\nGROUP BY dept;', output: { headers: ['dept','total_salary'], rows: [['HR','135,000.00'],['IT','90,000.00']] }, note: 'FORMAT() returns a STRING, not a number. Do not use it in further arithmetic calculations.' }],
                    ['STR_TO_DATE()', "SELECT STR_TO_DATE('13-10-2026','%d-%m-%Y');", '2026-10-13 (DATE type)', { attempt: 'Write a query to convert the string column join_date (stored as DD/MM/YYYY) to a proper DATE and display employees who joined after 2024-01-01.', sampleTable: { headers: ['name','join_date'], rows: [['Alice','15/03/2022'],['Bob','01/07/2025'],['Carol','20/01/2024']] }, query: "SELECT name,\n  STR_TO_DATE(join_date, '%d/%m/%Y') AS proper_date\nFROM employees\nWHERE STR_TO_DATE(join_date, '%d/%m/%Y') > '2024-01-01';", output: { headers: ['name','proper_date'], rows: [['Bob','2025-07-01']] }, note: 'STR_TO_DATE() is the inverse of DATE_FORMAT(). Returns NULL if the string does not match the format.' }],
                    ['DATE_FORMAT()', "SELECT DATE_FORMAT('2026-10-13','%d/%m/%Y');", "'13/10/2026' (display string)", { attempt: 'Write a query to display each employee\'s name and hire date formatted as \'Month DD, YYYY\' (e.g., October 13, 2026).', sampleTable: { headers: ['name','hire_date'], rows: [['Alice','2022-03-15'],['Bob','2019-07-01']] }, query: "SELECT name,\n  DATE_FORMAT(hire_date, '%M %d, %Y') AS formatted_date\nFROM employees;", output: { headers: ['name','formatted_date'], rows: [['Alice','March 15, 2022'],['Bob','July 01, 2019']] }, note: 'DATE_FORMAT() returns a STRING. Format specifiers: %M=full month, %d=day, %Y=4-digit year.' }],
                    ['DATE_FORMAT() time', "SELECT DATE_FORMAT(NOW(),'%H:%i:%s');", "e.g. '17:30:00'", { attempt: 'Write a query to display the current date and time in a friendly format like \'13 Oct 2026 at 17:30\'.', sampleTable: null, query: "SELECT DATE_FORMAT(NOW(), '%d %b %Y at %H:%i') AS friendly_datetime;", output: { headers: ['friendly_datetime'], rows: [['13 Oct 2026 at 17:30']] }, note: '%b = abbreviated month (Jan, Feb…), %H = 24h hour, %h = 12h hour, %p = AM/PM.' }],
                    ['ROUND cast tip', 'SELECT SUM(col1) / CAST(SUM(col2) AS DECIMAL(10,2));', 'Prevents silent integer division', { attempt: 'Write a query to calculate the on-time delivery rate (%) for each warehouse, avoiding integer division.', sampleTable: { headers: ['warehouse','on_time','total'], rows: [['WH-A','45','50'],['WH-B','30','60']] }, query: 'SELECT warehouse,\n  ROUND(\n    CAST(on_time AS DECIMAL(10,2)) / total * 100, 1\n  ) AS delivery_rate_pct\nFROM deliveries;', output: { headers: ['warehouse','delivery_rate_pct'], rows: [['WH-A','90.0'],['WH-B','50.0']] }, note: 'Integer ÷ Integer = Integer in MySQL. Always CAST numerator or denominator to DECIMAL for ratio calculations.' }],
                  ]
                },
              ].map(({ key, label, color, bg, border, rows, note }) => (
                <div
                  key={key}
                  style={{
                    marginBottom: '0.65rem',
                    border: `1px solid ${border}`,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: '#070b16'
                  }}
                >
                  {/* Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleFnSection(key)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.8rem 1.1rem',
                      background: bg,
                      border: 'none',
                      cursor: 'pointer',
                      color,
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      letterSpacing: '0.2px',
                      transition: 'background 0.15s'
                    }}
                  >
                    <span>{label}</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transition: 'transform 0.25s ease',
                        transform: openFnSection === key ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </button>

                  {/* Accordion Body */}
                  {openFnSection === key && (
                    <div style={{ padding: '0.75rem 1rem 1rem' }}>
                      <div style={{ overflowX: 'auto' }}>
                        <table style={{
                          width: '100%',
                          borderCollapse: 'collapse',
                          fontSize: '0.82rem',
                          minWidth: '480px'
                        }}>
                          <thead>
                            <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                              {['Function / Operator', 'Example', 'Output', ''].map(h => (
                                <th key={h} style={{
                                  padding: '0.5rem 0.75rem',
                                  textAlign: 'left',
                                  color,
                                  fontWeight: 700,
                                  borderBottom: `1px solid ${border}`,
                                  whiteSpace: 'nowrap'
                                }}>{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {rows.map(([fn, ex, out, detail], i) => (
                              <tr
                                key={i}
                                style={{
                                  background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.025)',
                                  transition: 'background 0.12s'
                                }}
                              >
                                <td style={{
                                  padding: '0.45rem 0.75rem',
                                  color,
                                  fontWeight: 700,
                                  fontFamily: 'monospace',
                                  whiteSpace: 'nowrap'
                                }}>{fn}</td>
                                <td style={{
                                  padding: '0.45rem 0.75rem',
                                  color: '#94a3b8',
                                  fontFamily: 'monospace',
                                  fontSize: '0.8rem'
                                }}>{ex}</td>
                                <td style={{
                                  padding: '0.45rem 0.75rem',
                                  color: '#e2e8f0'
                                }}>{out}</td>
                                <td style={{ padding: '0.3rem 0.5rem', whiteSpace: 'nowrap' }}>
                                  {detail && (
                                    <button
                                      type="button"
                                      onClick={() => setExamplePopup({ ...detail, fnName: fn, color })}
                                      style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                                        padding: '0.25rem 0.6rem',
                                        background: `${color}18`,
                                        border: `1px solid ${color}55`,
                                        borderRadius: '6px',
                                        color,
                                        fontSize: '0.72rem',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        transition: 'all 0.15s'
                                      }}
                                    >
                                      <Code2 size={11} /> Example
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {note && (
                        <p style={{
                          marginTop: '0.6rem',
                          fontSize: '0.78rem',
                          color: '#64748b',
                          fontStyle: 'italic',
                          lineHeight: 1.5
                        }}>{note}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mistakes to Avoid Alert Section */}
            <div style={{ background: '#070b16', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f87171', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertTriangle size={17} /> Common SQL Assessment Mistakes to Avoid
              </h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.87rem', lineHeight: 1.7, color: '#cbd5e1' }}>
                <li><strong>Filtering aggregates in WHERE:</strong> Use <code style={{ color: '#f87171' }}>HAVING</code> for aggregate conditions (e.g., <code style={{ color: '#f87171' }}>HAVING COUNT(*) &gt; 1</code>), not WHERE.</li>
                <li><strong>NULL handling in calculations:</strong> Remember that arithmetic with NULL yields NULL. Wrap nullable fields in <code style={{ color: '#f87171' }}>COALESCE()</code> or <code style={{ color: '#f87171' }}>IFNULL()</code>.</li>
                <li><strong>COUNT(*) vs COUNT(column):</strong> <code style={{ color: '#f87171' }}>COUNT(*)</code> counts all rows including NULLs, while <code style={{ color: '#f87171' }}>COUNT(column)</code> counts only non-null values.</li>
                <li><strong>Integer division truncations:</strong> When computing percentages or conversion rates, cast integer values to float/decimal to prevent integer division truncating to zero.</li>
              </ul>
            </div>

            {/* ── Per-Function Example Popup ── */}
            {examplePopup && (
              <div
                onClick={() => setExamplePopup(null)}
                style={{
                  position: 'fixed', inset: 0,
                  background: 'rgba(2,6,15,0.75)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 1400, padding: '1rem'
                }}
              >
                <div
                  onClick={e => e.stopPropagation()}
                  style={{
                    background: 'linear-gradient(145deg,#080f22,#0c1830)',
                    border: `1px solid ${examplePopup.color}44`,
                    borderRadius: '14px',
                    maxWidth: '600px', width: '100%',
                    maxHeight: '88vh', overflowY: 'auto',
                    boxShadow: `0 20px 60px -10px rgba(0,0,0,0.9), 0 0 30px ${examplePopup.color}20`,
                    padding: '1.5rem',
                    position: 'relative'
                  }}
                >
                  {/* Popup close */}
                  <button type="button" onClick={() => setExamplePopup(null)}
                    style={{
                      position:'absolute', top:'1rem', right:'1rem',
                      background:'rgba(30,41,59,0.8)', border:'1px solid #334155',
                      color:'#94a3b8', borderRadius:'7px', width:'30px', height:'30px',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      cursor:'pointer'
                    }}
                  ><X size={15} /></button>

                  {/* Header */}
                  <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1.1rem', paddingRight:'2rem' }}>
                    <Code2 size={16} style={{ color: examplePopup.color }} />
                    <span style={{ fontSize:'1.05rem', fontWeight:800, color:'#f8fafc' }}>{examplePopup.fnName}</span>
                    <span style={{
                      fontSize:'0.7rem', fontWeight:700, padding:'2px 8px',
                      background:`${examplePopup.color}18`, color: examplePopup.color,
                      borderRadius:'6px', border:`1px solid ${examplePopup.color}44`,
                      textTransform:'uppercase', letterSpacing:'0.5px'
                    }}>MySQL</span>
                  </div>

                  {/* 1. How to Attempt */}
                  <div style={{ marginBottom:'1rem' }}>
                    <div style={{ fontSize:'0.72rem', fontWeight:700, color: examplePopup.color, textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:'0.4rem' }}>❓ How to Attempt?</div>
                    <div style={{
                      background:'rgba(255,255,255,0.04)', border:`1px solid ${examplePopup.color}30`,
                      borderRadius:'8px', padding:'0.7rem 0.9rem',
                      fontSize:'0.87rem', lineHeight:1.65, color:'#e2e8f0'
                    }}>{examplePopup.attempt}</div>
                  </div>

                  {/* 2. Sample Table */}
                  {examplePopup.sampleTable && (
                    <div style={{ marginBottom:'1rem' }}>
                      <div style={{ fontSize:'0.72rem', fontWeight:700, color:'#64748b', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:'0.4rem' }}>📋 Sample Table</div>
                      <div style={{ overflowX:'auto' }}>
                        <table style={{ borderCollapse:'collapse', fontSize:'0.8rem', width:'100%' }}>
                          <thead>
                            <tr style={{ background:'rgba(255,255,255,0.05)' }}>
                              {examplePopup.sampleTable.headers.map(h => (
                                <th key={h} style={{ padding:'0.35rem 0.65rem', textAlign:'left', color:'#94a3b8', fontWeight:700, borderBottom:'1px solid #1e293b', whiteSpace:'nowrap' }}>{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {examplePopup.sampleTable.rows.map((row, ri) => (
                              <tr key={ri} style={{ background: ri%2===0?'transparent':'rgba(255,255,255,0.02)' }}>
                                {row.map((cell, ci) => (
                                  <td key={ci} style={{ padding:'0.3rem 0.65rem', color: cell==='NULL'?'#f87171':'#cbd5e1', fontFamily:'monospace', fontSize:'0.78rem' }}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* 3. Query */}
                  <div style={{ marginBottom:'1rem' }}>
                    <div style={{ fontSize:'0.72rem', fontWeight:700, color:'#64748b', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:'0.4rem' }}>💻 Query</div>
                    <pre style={{
                      background:'#040810', border:'1px solid #1e293b', borderRadius:'8px',
                      padding:'0.85rem 1rem', margin:0,
                      fontFamily:'monospace', fontSize:'0.82rem', lineHeight:1.65,
                      color:'#7dd3fc', overflowX:'auto', whiteSpace:'pre'
                    }}>{examplePopup.query}</pre>
                  </div>

                  {/* 4. Output */}
                  <div style={{ marginBottom:'1rem' }}>
                    <div style={{ fontSize:'0.72rem', fontWeight:700, color:'#64748b', textTransform:'uppercase', letterSpacing:'0.5px', marginBottom:'0.4rem' }}>📤 Output</div>
                    <div style={{ overflowX:'auto' }}>
                      <table style={{ borderCollapse:'collapse', fontSize:'0.8rem', width:'100%' }}>
                        <thead>
                          <tr style={{ background:`${examplePopup.color}12` }}>
                            {examplePopup.output.headers.map(h => (
                              <th key={h} style={{ padding:'0.35rem 0.65rem', textAlign:'left', color: examplePopup.color, fontWeight:700, borderBottom:`1px solid ${examplePopup.color}40`, whiteSpace:'nowrap' }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {examplePopup.output.rows.map((row, ri) => (
                            <tr key={ri} style={{ background: ri%2===0?'transparent':'rgba(255,255,255,0.025)' }}>
                              {row.map((cell, ci) => (
                                <td key={ci} style={{ padding:'0.3rem 0.65rem', color: cell==='NULL'?'#f87171':'#e2e8f0', fontFamily:'monospace', fontSize:'0.78rem' }}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 5. Key Note */}
                  {examplePopup.note && (
                    <div style={{
                      background:`${examplePopup.color}0d`, border:`1px solid ${examplePopup.color}30`,
                      borderRadius:'8px', padding:'0.65rem 0.9rem',
                      fontSize:'0.8rem', lineHeight:1.6, color:'#94a3b8'
                    }}>
                      <span style={{ fontWeight:700, color: examplePopup.color }}>💡 Key Note: </span>
                      {examplePopup.note}
                    </div>
                  )}

                  {/* Close */}
                  <div style={{ display:'flex', justifyContent:'flex-end', marginTop:'1.1rem' }}>
                    <button type="button" onClick={() => setExamplePopup(null)}
                      style={{
                        padding:'0.5rem 1.2rem', fontWeight:700, fontSize:'0.85rem',
                        background:`${examplePopup.color}22`, border:`1px solid ${examplePopup.color}55`,
                        color: examplePopup.color, borderRadius:'8px', cursor:'pointer'
                      }}
                    >Close Example</button>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Bottom Action Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => setShowGuideModal(false)}
                className="btn btn-primary btn-sm"
                style={{ padding: '0.6rem 1.4rem', fontWeight: 700 }}
              >
                Close & Return to Practice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
