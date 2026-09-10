// src/components/sql/SQLSolutionViewer.jsx
import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  ChevronUp,
  ChevronDown,
  Copy,
  Check,
  Zap,
  BookOpen,
  FileCode
} from 'lucide-react';
import { formatExplanationHtml, formatInlineMarkdown } from '../../utils/sqlMarkdown.js';

export default function SQLSolutionViewer({ question, onLoadSolution }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('explanation'); // 'explanation' | 'sql'
  const [copied, setCopied] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  if (!question || (!question.solution && !question.explanation)) {
    return null;
  }

  const handleCopy = () => {
    if (question.solution) {
      navigator.clipboard.writeText(question.solution);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleLoad = () => {
    if (onLoadSolution && question.solution) {
      onLoadSolution(question.solution);
      setHasLoaded(true);
      setTimeout(() => setHasLoaded(false), 2500);
    }
  };

  return (
    <div className="solution-container" style={{ marginBottom: '1rem' }}>
      {/* Toggle Button */}
      <button
        type="button"
        className={`solution-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <div className="toggle-left">
          <Sparkles size={16} className="solution-sparkle-icon" />
          <span className="toggle-title">Reference Solution & Query Walkthrough</span>
          <span className="solution-verified-badge">
            <CheckCircle2 size={12} />
            Verified SQLite Pass
          </span>
        </div>
        <div className="toggle-right">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {/* Collapsible Solution Content */}
      {isOpen && (
        <div className="solution-content-card">
          {/* Action Bar */}
          <div className="solution-action-bar">
            <span className="action-hint">
              Review query architecture or load working SQL into your editor:
            </span>
            {onLoadSolution && (
              <button
                type="button"
                className={`load-solution-btn ${hasLoaded ? 'loaded' : ''}`}
                onClick={handleLoad}
                title="Load working SQL into your editor"
              >
                {hasLoaded ? (
                  <>
                    <Check size={14} />
                    <span>Loaded Into Editor!</span>
                  </>
                ) : (
                  <>
                    <Zap size={14} />
                    <span>Load Solution Into Editor</span>
                  </>
                )}
              </button>
            )}
          </div>

          {/* Sub-tabs Header */}
          <div className="solution-tabs-header">
            <button
              type="button"
              className={`solution-tab-btn ${activeTab === 'explanation' ? 'active' : ''}`}
              onClick={() => setActiveTab('explanation')}
            >
              <BookOpen size={13} />
              <span>Explanation & Logic</span>
            </button>
            <button
              type="button"
              className={`solution-tab-btn ${activeTab === 'sql' ? 'active' : ''}`}
              onClick={() => setActiveTab('sql')}
            >
              <FileCode size={13} />
              <span>Official SQL Query</span>
            </button>
          </div>

          {/* Sub-tab Body */}
          <div className="solution-tab-body">
            {activeTab === 'explanation' && (
              <div className="solution-explanation-pane">
                <h4 className="expl-heading">Query Logic Breakdown</h4>
                <div
                  className="solution-expl-text"
                  dangerouslySetInnerHTML={{
                    __html: formatExplanationHtml(
                      question.explanation || 'Review the SQL syntax and table constraints below.'
                    )
                  }}
                />
                {question.notes && question.notes.length > 0 && (
                  <div style={{ marginTop: '14px' }}>
                    <h4 className="expl-heading">Key Considerations</h4>
                    <ul className="expl-list">
                      {question.notes.map((note, idx) => (
                        <li
                          key={idx}
                          dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(note) }}
                        />
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'sql' && (
              <div className="solution-code-pane">
                <div className="code-pane-header">
                  <span>SQLite Query</span>
                  <button
                    type="button"
                    className="copy-code-btn"
                    onClick={handleCopy}
                    title="Copy SQL to clipboard"
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="solution-pre">
                  <code>{question.solution}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
