// src/components/Header.jsx
import React, { useRef, useEffect, useState } from 'react';
import { RotateCcw, Code2, BookOpen } from 'lucide-react';
import Timer from './Timer.jsx';
import { storage } from '../utils/storage.js';
import QuestionDropdown from './QuestionDropdown.jsx';
import FrontendFunctionsGuide from './FrontendFunctionsGuide.jsx';

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
  const dotsContainerRef = useRef(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // Auto-scroll active question dot strictly inside its local horizontal container
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
  }, [question?.id]);

  // Keyboard shortcut: Alt+G to toggle Frontend Functions Guide
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.altKey && e.key.toLowerCase() === 'g') || (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'f')) {
        e.preventDefault();
        setIsGuideOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
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
            <QuestionDropdown
              questions={allQuestions}
              currentIndex={Math.max(0, allQuestions.findIndex((q) => q.id === (question?.id || 1)))}
              onSelectQuestion={(idx) => onSelectQuestion(allQuestions[idx]?.id || idx + 1)}
              isSolvedFn={(q) =>
                (completedQuestions && completedQuestions.includes(q.id)) ||
                (typeof storage.isQuestionCompleted === 'function' && storage.isQuestionCompleted(q.id)) ||
                storage.getQuestionResults?.(q.id)?.allPassed
              }
              menuTitle="SELECT ACCENTURE CODING QUESTION"
            />
            <div className="q-nav-dots" ref={dotsContainerRef}>
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

          {/* Highlighted Area: Frontend Functions with Examples Button */}
          <button
            type="button"
            onClick={() => setIsGuideOpen(true)}
            className="frontend-functions-trigger-btn"
            title="Open Frontend & CSS Functions with Examples (Alt+G)"
            aria-label="Frontend Functions with Examples"
          >
            <Code2 size={13} className="guide-btn-icon" />
            <span className="guide-btn-text">Frontend Functions</span>
            <span className="guide-badge-count">10</span>
          </button>
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

      {/* Interactive Frontend Functions with Examples Guide Modal */}
      <FrontendFunctionsGuide
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </>
  );
}
