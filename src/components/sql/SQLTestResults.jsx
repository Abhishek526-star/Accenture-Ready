// src/components/sql/SQLTestResults.jsx
import React from 'react';
import { CheckCircle2, XCircle, EyeOff, Check, X, ShieldAlert } from 'lucide-react';

export default function SQLTestResults({ testSuiteResult, isRunning }) {
  if (isRunning) {
    return (
      <div className="sql-test-results running">
        <div className="spinner-sm" />
        <span>Executing test datasets against isolated databases...</span>
      </div>
    );
  }

  if (!testSuiteResult) {
    return (
      <div className="sql-test-results unrun">
        <p>Click <strong>"Submit & Next"</strong> to run your query against all visible and hidden test datasets.</p>
      </div>
    );
  }

  const { allPassed, passedCount, totalCount, testResults } = testSuiteResult;

  return (
    <div className="sql-test-results">
      {/* Banner */}
      <div className={`test-summary-banner ${allPassed ? 'all-passed' : 'has-failures'}`}>
        <div className="banner-left">
          {allPassed ? (
            <CheckCircle2 size={22} className="banner-icon-success" />
          ) : (
            <XCircle size={22} className="banner-icon-fail" />
          )}
          <div>
            <h4 className="banner-title">
              {allPassed ? '✓ Correct — All Test Cases Passed!' : '✕ Some Test Cases Failed'}
            </h4>
            <span className="banner-subtitle">
              {passedCount} / {totalCount} Test Cases Passed
            </span>
          </div>
        </div>
        <div className="banner-badge">
          {Math.round((passedCount / totalCount) * 100)}% Passing
        </div>
      </div>

      {/* Test Cases List */}
      <div className="test-cases-list">
        {testResults.map((tc, idx) => {
          return (
            <div key={tc.id || idx} className={`test-case-card ${tc.passed ? 'passed' : 'failed'}`}>
              <div className="tc-header">
                <div className="tc-title-row">
                  <span className={`tc-status-icon ${tc.passed ? 'passed' : 'failed'}`}>
                    {tc.passed ? <Check size={14} /> : <X size={14} />}
                  </span>
                  <span className="tc-name">
                    {tc.isHidden ? `Hidden Test Case ${idx + 1}` : tc.name}
                  </span>
                  {tc.isHidden && (
                    <span className="hidden-badge" title="Hidden test case">
                      <EyeOff size={11} /> Hidden
                    </span>
                  )}
                </div>

                <span className={`tc-pill ${tc.passed ? 'passed' : 'failed'}`}>
                  {tc.passed ? 'PASSED' : 'FAILED'}
                </span>
              </div>

              {/* Message if failed or explanation */}
              {!tc.passed && tc.message && (
                <div className="tc-fail-reason">
                  <ShieldAlert size={14} />
                  <span>{tc.message}</span>
                </div>
              )}

              {/* Visible Test Case Inspection */}
              {!tc.isHidden && (
                <div className="tc-details">
                  {tc.actualRows && (
                    <div className="tc-actual-preview">
                      <span className="preview-label">Your Query Output ({tc.actualRows.length} rows):</span>
                      {tc.actualRows.length === 0 ? (
                        <div className="empty-preview">(0 rows returned)</div>
                      ) : (
                        <div className="table-scroll-mini">
                          <table className="mini-table">
                            <thead>
                              <tr>
                                {tc.actualColumns.map((c) => (
                                  <th key={c}>{c}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {tc.actualRows.slice(0, 5).map((r, rIdx) => (
                                <tr key={rIdx}>
                                  {tc.actualColumns.map((c) => (
                                    <td key={c}>
                                      {r[c] === null ? (
                                        <span className="null-tag-sm">NULL</span>
                                      ) : (
                                        String(r[c])
                                      )}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          {tc.actualRows.length > 5 && (
                            <div className="more-rows-note">...and {tc.actualRows.length - 5} more rows</div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
