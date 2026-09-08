// src/components/SolutionViewer.jsx
import React, { useState } from 'react';
import {
  Code2,
  FileCode,
  Palette,
  FileText,
  Copy,
  Check,
  Zap,
  ChevronDown,
  ChevronUp,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

function renderFormattedText(text) {
  // Simple helper to render **bold** and `code` safely
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={idx}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={idx}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '1px 5px',
            borderRadius: '4px',
            fontFamily: 'var(--font-mono)',
            fontSize: '11.5px',
            color: '#38bdf8'
          }}
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

export default function SolutionViewer({ question, onLoadSolution }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('explanation'); // 'explanation' | 'js' | 'html' | 'css'
  const [copiedKey, setCopiedKey] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleLoad = () => {
    onLoadSolution();
    setHasLoaded(true);
    setTimeout(() => setHasLoaded(false), 2500);
  };

  return (
    <div className="solution-container">
      {/* Toggle Button */}
      <button
        type="button"
        className={`solution-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <div className="toggle-left">
          <Sparkles size={16} className="solution-sparkle-icon" />
          <span className="toggle-title">Reference Solution & Walkthrough</span>
          <span className="solution-verified-badge">
            <CheckCircle2 size={12} />
            Verified 100% Pass
          </span>
        </div>
        <div className="toggle-right">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {/* Collapsible Solution Content */}
      {isOpen && (
        <div className="solution-content-card">
          {/* Top Bar with Load Solution action */}
          <div className="solution-action-bar">
            <span className="action-hint">
              Need assistance? Review the official implementation or load it directly into your editor:
            </span>
            <button
              type="button"
              className={`load-solution-btn ${hasLoaded ? 'loaded' : ''}`}
              onClick={handleLoad}
              title="Load working HTML, CSS, and JS into your editor"
            >
              {hasLoaded ? (
                <>
                  <Check size={15} />
                  <span>Loaded into Editor!</span>
                </>
              ) : (
                <>
                  <Zap size={15} fill="currentColor" />
                  <span>Load Solution into Editor</span>
                </>
              )}
            </button>
          </div>

          {/* Solution Tabs: 4-Column Grid so styles.css is ALWAYS visible */}
          <div className="solution-tabs-header">
            <button
              type="button"
              className={`solution-tab-btn ${activeTab === 'explanation' ? 'active' : ''}`}
              onClick={() => setActiveTab('explanation')}
              title="View step-by-step logic and walkthrough"
            >
              <FileText size={13} />
              <span>Walkthrough</span>
            </button>
            <button
              type="button"
              className={`solution-tab-btn ${activeTab === 'js' ? 'active' : ''}`}
              onClick={() => setActiveTab('js')}
              title="View JavaScript code"
            >
              <FileCode size={13} />
              <span>script.js</span>
            </button>
            <button
              type="button"
              className={`solution-tab-btn ${activeTab === 'html' ? 'active' : ''}`}
              onClick={() => setActiveTab('html')}
              title="View HTML markup"
            >
              <Code2 size={13} />
              <span>index.html</span>
            </button>
            <button
              type="button"
              className={`solution-tab-btn ${activeTab === 'css' ? 'active' : ''}`}
              onClick={() => setActiveTab('css')}
              title="View CSS stylesheet"
            >
              <Palette size={13} />
              <span>styles.css</span>
            </button>
          </div>

          {/* Tab Panes */}
          <div className="solution-tab-body">
            {/* Explanation Walkthrough */}
            {activeTab === 'explanation' && (
              <div className="solution-explanation-pane">
                <div className="explanation-text">
                  {question.solutionExplanation ? (
                    question.solutionExplanation.split('\n\n').map((paragraph, pIdx) => {
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h4 key={pIdx} className="expl-heading">
                            {paragraph.replace('### ', '')}
                          </h4>
                        );
                      }
                      if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                        return (
                          <ul key={pIdx} className="expl-list">
                            {paragraph.split('\n').map((item, iIdx) => {
                              const cleanItem = item.replace(/^\d+\.\s*|-\s*/, '');
                              return (
                                <li key={iIdx}>
                                  {renderFormattedText(cleanItem)}
                                </li>
                              );
                            })}
                          </ul>
                        );
                      }
                      return (
                        <p key={pIdx} style={{ marginBottom: '8px' }}>
                          {renderFormattedText(paragraph)}
                        </p>
                      );
                    })
                  ) : (
                    <p>Reference solution implements all required HTML elements, CSS styles, and JavaScript event listeners to satisfy 100% of test assertions.</p>
                  )}
                </div>
              </div>
            )}

            {/* JavaScript Tab */}
            {activeTab === 'js' && (
              <div className="solution-code-pane">
                <div className="code-pane-header">
                  <span>JavaScript (script.js)</span>
                  <button
                    type="button"
                    className="copy-code-btn"
                    onClick={() => copyToClipboard(question.solutionJS || '', 'js')}
                  >
                    {copiedKey === 'js' ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedKey === 'js' ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre className="solution-pre">
                  <code>{question.solutionJS}</code>
                </pre>
              </div>
            )}

            {/* HTML Tab */}
            {activeTab === 'html' && (
              <div className="solution-code-pane">
                <div className="code-pane-header">
                  <span>HTML (index.html)</span>
                  <button
                    type="button"
                    className="copy-code-btn"
                    onClick={() => copyToClipboard(question.solutionHTML || '', 'html')}
                  >
                    {copiedKey === 'html' ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedKey === 'html' ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre className="solution-pre">
                  <code>{question.solutionHTML}</code>
                </pre>
              </div>
            )}

            {/* CSS Tab */}
            {activeTab === 'css' && (
              <div className="solution-code-pane">
                <div className="code-pane-header">
                  <span>CSS (styles.css)</span>
                  <button
                    type="button"
                    className="copy-code-btn"
                    onClick={() => copyToClipboard(question.solutionCSS || '', 'css')}
                  >
                    {copiedKey === 'css' ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedKey === 'css' ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre className="solution-pre">
                  <code>{question.solutionCSS}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
