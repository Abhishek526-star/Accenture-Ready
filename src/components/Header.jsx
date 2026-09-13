// src/components/Header.jsx
import React, { useRef, useEffect } from 'react';
import { RotateCcw, Code2 } from 'lucide-react';
import Timer from './Timer.jsx';
import { storage } from '../utils/storage.js';

export default function Header({
  question,
  totalQuestions,
  completedCount,
  completedQuestions = [],
  onResetClick,
  onSelectQuestion,
  allQuestions = []
}) {
  const activeDotRef = useRef(null);

  // Auto-scroll active question dot into view in horizontal container
  useEffect(() => {
    if (activeDotRef.current) {
      activeDotRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [question?.id]);

  return (
    <header className="practice-header">
      <div className="bar-left practice-bar-left">
        <div className="round-identity practice-round-identity">
          <div className="round-icon practice-round-icon">
            <Code2 size={18} />
          </div>
          <div>
            <span className="round-label">Assessment Round</span>
            <h1 className="round-title">Accenture Coding Practice</h1>
          </div>
        </div>

        <div className="q-nav-selector">
          <div className="q-progress-text">
            <span className="q-progress-label">Question</span>
            <span className="q-progress-count">
              {question?.id || 1} of {totalQuestions}
            </span>
          </div>
          <div className="q-nav-dots">
            {allQuestions.map((q) => {
              const isCurrent = q.id === question?.id;
              const isSolved =
                (completedQuestions && completedQuestions.includes(q.id)) ||
                (typeof storage.isQuestionCompleted === 'function' && storage.isQuestionCompleted(q.id)) ||
                storage.getQuestionResults?.(q.id)?.allPassed;

              return (
                <button
                  key={q.id}
                  ref={isCurrent ? activeDotRef : null}
                  onClick={() => onSelectQuestion(q.id)}
                  className={`nav-dot-btn ${isCurrent ? 'active' : ''} ${isSolved ? 'solved' : ''}`}
                  title={`Question ${q.id}: ${q.title} (${isSolved ? 'Solved' : 'Pending'})`}
                  aria-label={`Go to Question ${q.id}: ${q.title}`}
                >
                  {q.id}
                  {isSolved && <span className="dot-check">✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bar-right practice-bar-right">
        <Timer />

        <button
          onClick={onResetClick}
          className="btn btn-outline reset-code-btn"
          title="Reset your JavaScript to starter code"
        >
          <RotateCcw size={14} />
          <span className="btn-label-desktop">Reset Code</span>
        </button>
      </div>
    </header>
  );
}
