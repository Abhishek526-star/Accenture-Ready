// src/components/Navigation.jsx
import React from 'react';
import { ArrowLeft, ArrowRight, Play, Loader2 } from 'lucide-react';

export default function Navigation({
  currentQuestionId,
  totalQuestions,
  onPrevious,
  onNext,
  onRunCode,
  isRunning
}) {
  const isFirst = currentQuestionId === 1;
  const isLast = currentQuestionId === totalQuestions;

  return (
    <footer className="assessment-navigation-bar">
      <div className="nav-col left">
        <button
          onClick={onPrevious}
          disabled={isFirst || isRunning}
          className="btn btn-secondary nav-btn"
          title="Go to previous question (Question {currentQuestionId - 1})"
        >
          <ArrowLeft size={16} />
          <span>Previous</span>
        </button>
      </div>

      <div className="nav-col center">
        <button
          onClick={onRunCode}
          disabled={isRunning}
          className="btn btn-primary run-code-btn"
          title="Execute code and run automated tests"
        >
          {isRunning ? (
            <>
              <Loader2 size={16} className="spinning" />
              <span>Running tests...</span>
            </>
          ) : (
            <>
              <Play size={16} fill="currentColor" />
              <span>Run Code</span>
            </>
          )}
        </button>
      </div>

      <div className="nav-col right">
        <button
          onClick={onNext}
          disabled={isLast || isRunning}
          className="btn btn-secondary nav-btn"
          title="Go to next question (Question {currentQuestionId + 1})"
        >
          <span>Next</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </footer>
  );
}
