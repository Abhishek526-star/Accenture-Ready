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

  // Editor Code State
  const [code, setCode] = useState(() =>
    sqlStorage.getDraft(currentQuestion.id, currentQuestion.starterCode)
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

  // When question changes, load draft & reset timer
  useEffect(() => {
    const savedCode = sqlStorage.getDraft(currentQuestion.id, currentQuestion.starterCode);
    setCode(savedCode);
    setQueryResult(null);
    setTestSuiteResult(null);
    setActiveTab('output');
    setTimeRemaining(currentQuestion.duration * 60);
  }, [currentIndex, currentQuestion.id, currentQuestion.starterCode, currentQuestion.duration]);

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
    if (window.confirm('Reset this question back to starter SQL? Your previous edits for this task will be cleared.')) {
      setCode(currentQuestion.starterCode);
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
          sqlStorage.markQuestionCompleted(currentQuestion.id);
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
    setCode(sqlQuestions[0].starterCode);
    setQueryResult(null);
    setTestSuiteResult(null);
    setTotalTimeUsed(0);
    setTimeRemaining(sqlQuestions[0].duration * 60);
    setShowResultsModal(false);
    setIsTimerPaused(false);
  };

  return (
    <div className="sql-assessment-page">
      {/* Top Assessment Control Bar */}
      <header className="sql-top-bar">
        <div className="bar-left">
          <div className="round-identity">
            <div className="round-icon">
              <Database size={18} />
            </div>
            <div>
              <span className="round-label">Assessment Round</span>
              <h1 className="round-title">SQL Coding & Querying</h1>
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
                title="Reset to starter query"
              >
                <RotateCcw size={13} />
                <span>Reset</span>
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
