// src/components/sql/SQLResultsModal.jsx
import React from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, LayoutDashboard, ArrowRight, Clock, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SQLResultsModal({
  isOpen,
  results,
  totalQuestions,
  timeUsedSeconds,
  onClose,
  onRetake
}) {
  if (!isOpen || !results) return null;

  const solvedCount = results.filter((r) => r.solved).length;
  const attemptedCount = results.filter((r) => r.attempted).length;
  let totalTestsPassed = 0;
  let totalTestsAcrossAll = 0;

  results.forEach((r) => {
    totalTestsPassed += r.testsPassed || 0;
    totalTestsAcrossAll += r.totalTests || 0;
  });

  const scorePercent = totalTestsAcrossAll > 0
    ? Math.round((totalTestsPassed / totalTestsAcrossAll) * 100)
    : 0;

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div className="sql-modal-overlay">
      <div className="sql-modal-card">
        <div className="modal-header-hero">
          <div className="hero-icon-ring">
            <Trophy size={32} />
          </div>
          <span className="modal-tag">Assessment Final Report</span>
          <h2 className="modal-title">SQL ASSESSMENT COMPLETE</h2>
          <p className="modal-subtitle">
            Here is your comprehensive evaluation across all database querying and schema test cases.
          </p>
        </div>

        {/* High-level Scorecard Grid */}
        <div className="scorecard-grid">
          <div className="scorecard-stat">
            <span className="stat-name">Questions Attempted</span>
            <span className="stat-val">{attemptedCount} <span className="stat-denom">/ {totalQuestions}</span></span>
          </div>

          <div className="scorecard-stat">
            <span className="stat-name">Questions Solved</span>
            <span className="stat-val text-success">{solvedCount} <span className="stat-denom">/ {totalQuestions}</span></span>
          </div>

          <div className="scorecard-stat">
            <span className="stat-name">Test Cases Passed</span>
            <span className="stat-val text-blue">{totalTestsPassed} <span className="stat-denom">/ {totalTestsAcrossAll}</span></span>
          </div>

          <div className="scorecard-stat highlight">
            <span className="stat-name">Final Score</span>
            <span className="stat-val text-gold">{scorePercent}%</span>
          </div>
        </div>

        {/* Time Used */}
        <div className="time-used-banner">
          <Clock size={16} />
          <span>Total Assessment Time Used: <strong>{formatTime(timeUsedSeconds)}</strong></span>
        </div>

        {/* Detailed Question Breakdown Table */}
        <div className="modal-breakdown-section">
          <h4 className="breakdown-title">Question Breakdown</h4>
          <div className="breakdown-table-wrapper">
            <table className="breakdown-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Question Title</th>
                  <th>Difficulty</th>
                  <th>Tests Passed</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {results.map((q, idx) => (
                  <tr key={q.questionId || idx}>
                    <td>{idx + 1}</td>
                    <td className="font-semibold">{q.title}</td>
                    <td>
                      <span className={`badge-sm badge-${q.difficulty?.toLowerCase() || 'medium'}`}>
                        {q.difficulty}
                      </span>
                    </td>
                    <td>
                      {q.testsPassed} / {q.totalTests}
                    </td>
                    <td>
                      {q.solved ? (
                        <span className="status-pill-success">
                          <CheckCircle2 size={13} /> Solved
                        </span>
                      ) : (
                        <span className="status-pill-fail">
                          <XCircle size={13} /> Incomplete
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="modal-actions-footer">
          <button onClick={onRetake} className="btn btn-outline">
            <RotateCcw size={15} />
            <span>Retake SQL Round</span>
          </button>
          <button onClick={onClose} className="btn btn-secondary">
            <span>Review Questions</span>
          </button>
          <Link to="/dashboard" className="btn btn-primary">
            <LayoutDashboard size={15} />
            <span>Go to Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
