// src/components/Header.jsx
import React from 'react';
import { RotateCcw, CheckCircle2, ChevronDown } from 'lucide-react';
import Timer from './Timer.jsx';

export default function Header({
  question,
  totalQuestions,
  completedCount,
  onResetClick,
  onSelectQuestion,
  allQuestions
}) {
  const progressPercent = Math.round((completedCount / totalQuestions) * 100);

  return (
    <header className="practice-header">
      <div className="header-left">
        <div className="title-section">
          <span className="platform-tag">Assessment Workspace</span>
          <div className="question-selector-wrapper">
            <select
              className="question-dropdown"
              value={question.id}
              onChange={(e) => onSelectQuestion(Number(e.target.value))}
              aria-label="Select Question"
            >
              <optgroup label="Assessment Set (1-10)">
                {allQuestions.filter((q) => q.id <= 10).map((q) => (
                  <option key={q.id} value={q.id}>
                    {q.id}. {q.title} ({q.difficulty})
                  </option>
                ))}
              </optgroup>
              {allQuestions.some((q) => q.id > 10) && (
                <optgroup label="Foundation Practice (11-20)">
                  {allQuestions.filter((q) => q.id > 10).map((q) => (
                    <option key={q.id} value={q.id}>
                      {q.id}. {q.title} ({q.difficulty})
                    </option>
                  ))}
                </optgroup>
              )}
            </select>
            <ChevronDown size={14} className="dropdown-arrow" />
          </div>
        </div>
      </div>

      <div className="header-center">
        <div className="progress-container" title={`${completedCount} of ${totalQuestions} Questions Completed`}>
          <div className="progress-labels">
            <span className="question-badge">
              Question {question.id} / {totalQuestions}
            </span>
            <span className="completion-rate">
              <CheckCircle2 size={13} className="completion-icon" />
              {completedCount}/{totalQuestions} Solved ({progressPercent}%)
            </span>
          </div>
          <div className="progress-track" role="progressbar" aria-valuenow={progressPercent} aria-valuemin="0" aria-valuemax="100">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="header-right">
        <Timer />

        <button
          onClick={onResetClick}
          className="btn btn-outline reset-code-btn"
          title="Reset your JavaScript to starter code"
        >
          <RotateCcw size={14} />
          <span>Reset Code</span>
        </button>
      </div>
    </header>
  );
}
