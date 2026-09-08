// src/components/TestResults.jsx
import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Terminal,
  ChevronDown,
  ChevronUp,
  Sparkles
} from 'lucide-react';

export default function TestResults({
  results,
  runtimeError,
  isRunning,
  logs = []
}) {
  const [activeView, setActiveView] = useState('tests'); // 'tests' | 'console'
  const [expandedTests, setExpandedTests] = useState({});

  const toggleExpand = (id) => {
    setExpandedTests((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (isRunning) {
    return (
      <div className="test-results-panel running">
        <div className="running-indicator">
          <div className="spinner" />
          <div className="running-text">
            <h4>Running Automated Tests...</h4>
            <p>Executing DOM assertions in isolated sandbox</p>
          </div>
        </div>
      </div>
    );
  }

  const passedCount = results ? results.filter((r) => r.passed).length : 0;
  const totalCount = results ? results.length : 0;
  const allPassed = totalCount > 0 && passedCount === totalCount;

  return (
    <div className="test-results-panel">
      <div className="results-header-bar">
        <div className="results-tabs">
          <button
            onClick={() => setActiveView('tests')}
            className={`results-tab-btn ${activeView === 'tests' ? 'active' : ''}`}
          >
            <span>Test Results</span>
            {results && (
              <span className={`results-count-pill ${allPassed ? 'all-passed' : 'has-failures'}`}>
                {passedCount} / {totalCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveView('console')}
            className={`results-tab-btn ${activeView === 'console' ? 'active' : ''}`}
          >
            <Terminal size={13} />
            <span>Console Logs ({logs.length})</span>
          </button>
        </div>

        {results && !runtimeError && (
          <div className="results-summary-tag">
            {allPassed ? (
              <span className="summary-passed">
                <Sparkles size={14} /> All {totalCount} Tests Passed!
              </span>
            ) : (
              <span className="summary-failed">
                {passedCount} / {totalCount} Passed ({totalCount - passedCount} Failed)
              </span>
            )}
          </div>
        )}
      </div>

      <div className="results-body">
        {/* Runtime / Syntax Error Banner */}
        {runtimeError && (
          <div className="runtime-error-box">
            <div className="error-header">
              <AlertTriangle size={18} />
              <h4>Runtime Error</h4>
            </div>
            <p className="error-desc">
              The submitted JavaScript threw an uncaught error during execution:
            </p>
            <pre className="error-stack">{runtimeError}</pre>
          </div>
        )}

        {/* Test Cases View */}
        {activeView === 'tests' && !runtimeError && (
          <>
            {!results ? (
              <div className="empty-results-state">
                <p>Click <strong>▶ Run Code</strong> to execute the automated test suite against your solution.</p>
              </div>
            ) : (
              <div className="tests-list">
                {results.map((test, index) => {
                  const isExpanded = expandedTests[test.id] ?? !test.passed;

                  return (
                    <div
                      key={test.id || index}
                      className={`test-card ${test.passed ? 'passed' : 'failed'}`}
                    >
                      <div
                        className="test-card-header"
                        onClick={() => !test.passed && toggleExpand(test.id)}
                      >
                        <div className="test-status-icon">
                          {test.passed ? (
                            <CheckCircle2 size={18} className="icon-pass" />
                          ) : (
                            <XCircle size={18} className="icon-fail" />
                          )}
                        </div>
                        <span className="test-name">{test.name}</span>
                        {!test.passed && (
                          <div className="expand-indicator">
                            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </div>
                        )}
                      </div>

                      {!test.passed && isExpanded && (
                        <div className="test-failure-details">
                          {test.message && (
                            <div className="failure-message">{test.message}</div>
                          )}
                          <div className="diff-grid">
                            <div className="diff-col">
                              <span className="diff-label">Expected:</span>
                              <pre className="diff-box expected">{test.expected || 'true'}</pre>
                            </div>
                            <div className="diff-col">
                              <span className="diff-label">Received:</span>
                              <pre className="diff-box received">{test.received || 'false'}</pre>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        {/* Console Logs View */}
        {activeView === 'console' && (
          <div className="console-logs-view">
            {logs.length === 0 ? (
              <p className="empty-logs">No console output generated yet.</p>
            ) : (
              <div className="logs-stream">
                {logs.map((log, i) => (
                  <div key={i} className={`log-entry log-${log.level}`}>
                    <span className="log-level">[{log.level.toUpperCase()}]</span>
                    <span className="log-text">{log.message}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
