// src/components/QuestionPanel.jsx
import React, { useState } from 'react';
import {
  BookOpen,
  Code2,
  Palette,
  Zap,
  AlertCircle,
  Layers,
  ListFilter,
  Bookmark,
  Lightbulb,
  Play,
  CheckCircle2
} from 'lucide-react';
import SolutionViewer from './SolutionViewer.jsx';
import QuestionSidebar from './QuestionSidebar.jsx';
import { bookmarksStorage } from '../services/bookmarksStorage.js';

export default function QuestionPanel({
  question,
  onApplySolution,
  allQuestions = [],
  onSelectQuestion,
  onRunCustomTest
}) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [revealedHints, setRevealedHints] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(() => bookmarksStorage.isBookmarked(question.id, 'coding'));
  const [customInput, setCustomInput] = useState('');
  const [customOutput, setCustomOutput] = useState(null);

  const handleToggleBookmark = () => {
    const newState = bookmarksStorage.toggleBookmark({
      id: question.id,
      type: 'coding',
      title: question.title,
      category: question.category,
      difficulty: question.difficulty,
      route: `/practice?q=${question.id}`
    });
    setIsBookmarked(newState);
  };

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

  // Default progressive hints if not present on question object
  const defaultHints = [
    `💡 Hint 1: Carefully verify target HTML IDs: "${question.htmlObjectives ? question.htmlObjectives[0] : 'Check DOM targets'}".`,
    `💡 Hint 2: For calculations, remember to parse numerical inputs safely (e.g. parseFloat or Math.max) and prevent NaN.`,
    `💡 Hint 3: Format final display strings strictly according to constraints (e.g. precision or currency signs).`
  ];

  const hintsList = question.hints || defaultHints;

  const handleRunCustomTestLocal = () => {
    if (onRunCustomTest) {
      onRunCustomTest(customInput);
    } else {
      setCustomOutput({
        input: customInput || 'Default event trigger',
        status: 'evaluated',
        message: 'Sandbox executed with custom parameters. Check the live preview panel for reactive DOM updates.'
      });
    }
  };

  return (
    <div className="question-panel">
      <div className="question-header">
        <div className="badge-row" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
            <span className={`badge ${getDifficultyClass(question.difficulty)}`}>
              {question.difficulty}
            </span>
            <span className="badge-category">
              <Layers size={12} />
              {question.category}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <button
              type="button"
              onClick={handleToggleBookmark}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '4px 10px',
                borderRadius: '6px',
                background: isBookmarked ? 'rgba(234, 179, 8, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                color: isBookmarked ? '#facc15' : '#94a3b8',
                border: isBookmarked ? '1px solid #facc15' : '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
              title="Bookmark question for rapid revision"
            >
              <Bookmark size={13} fill={isBookmarked ? '#facc15' : 'none'} />
              <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            {allQuestions.length > 0 && onSelectQuestion && (
              <button
                type="button"
                className="toggle-sidebar-trigger-btn"
                onClick={() => setShowSidebar((prev) => !prev)}
                title="View all Assessment Questions"
              >
                <ListFilter size={13} />
                <span>Questions</span>
              </button>
            )}
          </div>
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

        {/* Progressive Hint System */}
        <section className="instruction-section" style={{ background: 'rgba(234, 179, 8, 0.05)', border: '1px solid rgba(234, 179, 8, 0.2)', borderRadius: '10px', padding: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h2 className="section-title" style={{ color: '#facc15', margin: 0, fontSize: '0.95rem' }}>
              <Lightbulb size={16} />
              <span>Progressive Clues & Hints</span>
            </h2>
            {revealedHints < hintsList.length && (
              <button
                onClick={() => setRevealedHints(prev => prev + 1)}
                style={{
                  padding: '3px 8px',
                  background: '#0f172a',
                  border: '1px solid #eab308',
                  color: '#facc15',
                  borderRadius: '5px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Reveal Hint {revealedHints + 1}
              </button>
            )}
          </div>

          {revealedHints === 0 ? (
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>
              Hints are progressive. Click "Reveal Hint" to unlock helpful guidance without immediately spoiling the solution.
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {hintsList.slice(0, revealedHints).map((h, hIdx) => (
                <div key={hIdx} style={{ fontSize: '0.8rem', color: '#fef08a', background: '#0f172a', padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(234, 179, 8, 0.2)' }}>
                  {h}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Custom Test Case Section */}
        <section className="instruction-section" style={{ background: 'rgba(56, 189, 248, 0.05)', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '10px', padding: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h2 className="section-title" style={{ color: '#38bdf8', margin: 0, fontSize: '0.95rem' }}>
              <Code2 size={16} />
              <span>Custom Test Input</span>
            </h2>
            <button
              onClick={handleRunCustomTestLocal}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '3px 10px',
                background: '#0284c7',
                border: 'none',
                color: '#ffffff',
                borderRadius: '5px',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <Play size={12} />
              <span>Run Custom Test</span>
            </button>
          </div>
          <input
            type="text"
            placeholder="Custom test value e.g. promo code SAVE10, input 42..."
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            style={{
              width: '100%',
              padding: '6px 10px',
              background: '#0f172a',
              border: '1px solid #334155',
              borderRadius: '6px',
              color: '#f8fafc',
              fontSize: '0.8rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
          {customOutput && (
            <div style={{ marginTop: '0.5rem', background: '#0f172a', padding: '6px 10px', borderRadius: '6px', fontSize: '0.75rem', color: '#94a3b8' }}>
              <strong style={{ color: '#38bdf8' }}>Result:</strong> {customOutput.message}
            </div>
          )}
        </section>

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
