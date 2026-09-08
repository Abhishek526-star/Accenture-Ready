// src/components/QuestionSidebar.jsx
import React from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';

export default function QuestionSidebar({
  questions,
  currentQuestionId,
  onSelectQuestion,
  isOpen,
  onClose
}) {
  const set1 = questions.filter((q) => q.id <= 10);
  const set2 = questions.filter((q) => q.id > 10);

  return (
    <aside className={`question-sidebar-drawer ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-title-row">
          <Layers size={16} className="sidebar-icon" />
          <span className="sidebar-title">Assessment Questions</span>
        </div>
        {onClose && (
          <button
            type="button"
            className="sidebar-close-btn"
            onClick={onClose}
            aria-label="Close question list"
          >
            &times;
          </button>
        )}
      </div>

      <div className="sidebar-sections-scroll">
        {/* Set 1: Exact Set from Assessment Screenshot */}
        <div className="sidebar-set-group">
          <div className="sidebar-set-title">Assessment Set (1-10)</div>
          <ul className="sidebar-questions-list">
            {set1.map((q) => {
              const isActive = q.id === currentQuestionId;
              return (
                <li key={q.id}>
                  <button
                    type="button"
                    className={`sidebar-q-btn ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      onSelectQuestion(q.id);
                      if (onClose) onClose();
                    }}
                  >
                    <span className="q-title-text">
                      {q.id}. {q.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Set 2: Foundation Practice Questions (11-20) */}
        {set2.length > 0 && (
          <div className="sidebar-set-group" style={{ marginTop: '16px' }}>
            <div className="sidebar-set-title">Foundation Practice (11-20)</div>
            <ul className="sidebar-questions-list">
              {set2.map((q) => {
                const isActive = q.id === currentQuestionId;
                return (
                  <li key={q.id}>
                    <button
                      type="button"
                      className={`sidebar-q-btn ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        onSelectQuestion(q.id);
                        if (onClose) onClose();
                      }}
                    >
                      <span className="q-title-text">
                        {q.id}. {q.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
}
