// src/components/QuestionPanel.jsx
import React, { useState } from 'react';
import {
  BookOpen,
  Code2,
  Palette,
  Zap,
  AlertCircle,
  Layers,
  ListFilter
} from 'lucide-react';
import SolutionViewer from './SolutionViewer.jsx';
import QuestionSidebar from './QuestionSidebar.jsx';

export default function QuestionPanel({
  question,
  onApplySolution,
  allQuestions = [],
  onSelectQuestion
}) {
  const [showSidebar, setShowSidebar] = useState(false);

  const getDifficultyClass = (diff) => {
    switch (diff ? diff.toLowerCase() : 'easy') {
      case 'easy':
        return 'badge-easy';
      case 'medium':
        return 'badge-medium';
      case 'hard':
        return 'badge-hard';
      default:
        return 'badge-easy';
    }
  };

  return (
    <div className="question-panel">
      <div className="question-header">
        <div className="badge-row">
          <span className={`badge ${getDifficultyClass(question.difficulty)}`}>
            {question.difficulty}
          </span>
          <span className="badge-category">
            <Layers size={12} />
            {question.category}
          </span>
          {allQuestions.length > 0 && onSelectQuestion && (
            <button
              type="button"
              className="toggle-sidebar-trigger-btn"
              onClick={() => setShowSidebar((prev) => !prev)}
              title="View all 10 Assessment Questions"
            >
              <ListFilter size={13} />
              <span>Questions List</span>
            </button>
          )}
        </div>
        <h1 className="question-title">
          {question.id}. {question.title}
        </h1>
      </div>

      {/* Embedded Drawer / Sidebar when toggled */}
      {showSidebar && allQuestions.length > 0 && (
        <div className="panel-sidebar-overlay">
          <QuestionSidebar
            questions={allQuestions}
            currentQuestionId={question.id}
            onSelectQuestion={(id) => {
              onSelectQuestion(id);
              setShowSidebar(false);
            }}
            isOpen={true}
            onClose={() => setShowSidebar(false)}
          />
        </div>
      )}

      <div className="question-content">
        {/* Solution & Walkthrough Section */}
        {onApplySolution && (
          <section className="instruction-section solution-section">
            <SolutionViewer
              question={question}
              onLoadSolution={onApplySolution}
            />
          </section>
        )}

        <section className="instruction-section">
          <h2 className="section-title">
            <BookOpen size={15} />
            How to Attempt?
          </h2>
          <p className="section-body">{question.howToAttempt}</p>
        </section>

        {/* HTML Tasks Section */}
        {question.htmlObjectives && question.htmlObjectives.length > 0 && (
          <section className="instruction-section">
            <h2 className="section-title html-task-title">
              <Code2 size={15} />
              HTML Tasks (index.html)
            </h2>
            <ul className="objectives-list">
              {question.htmlObjectives.map((obj, idx) => (
                <li key={idx} className="objective-item">
                  <span className="bullet-dot html-dot" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CSS Tasks Section */}
        {question.cssObjectives && question.cssObjectives.length > 0 && (
          <section className="instruction-section">
            <h2 className="section-title css-task-title">
              <Palette size={15} />
              CSS Tasks (styles.css)
            </h2>
            <ul className="objectives-list">
              {question.cssObjectives.map((obj, idx) => (
                <li key={idx} className="objective-item">
                  <span className="bullet-dot css-dot" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* JavaScript Tasks Section */}
        {question.jsObjectives && question.jsObjectives.length > 0 && (
          <section className="instruction-section">
            <h2 className="section-title js-task-title">
              <Zap size={15} />
              JavaScript Tasks (script.js)
            </h2>
            <ul className="objectives-list">
              {question.jsObjectives.map((obj, idx) => (
                <li key={idx} className="objective-item">
                  <span className="bullet-dot js-dot" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Constraints */}
        {question.constraints && question.constraints.length > 0 && (
          <section className="instruction-section">
            <h2 className="section-title warning-title">
              <AlertCircle size={15} />
              Constraints
            </h2>
            <div className="constraints-card">
              <ul className="constraints-list">
                {question.constraints.map((constraint, idx) => (
                  <li key={idx} className="constraint-item">
                    <span>•</span>
                    <span>{constraint}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
