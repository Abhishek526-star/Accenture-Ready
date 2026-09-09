// src/components/CodeEditor.jsx
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { FileCode, Edit3, Sparkles } from 'lucide-react';

export default function CodeEditor({
  question,
  codeBundle, // { js, html, css }
  onCodeChange, // (fileKey, value) => void
  theme = 'vs-dark'
}) {
  const [activeTab, setActiveTab] = useState('javascript'); // 'javascript' | 'html' | 'css'

  const getEditorContent = () => {
    switch (activeTab) {
      case 'html':
        return (codeBundle.html !== undefined && codeBundle.html !== null && codeBundle.html.trim() !== '')
          ? codeBundle.html
          : question.html;
      case 'css':
        return (codeBundle.css !== undefined && codeBundle.css !== null && codeBundle.css.trim() !== '' && !codeBundle.css.includes('Same as provided solution'))
          ? codeBundle.css
          : question.css;
      case 'javascript':
      default:
        return codeBundle.js ?? question.starterJS;
    }
  };

  const getLanguage = () => {
    switch (activeTab) {
      case 'html':
        return 'html';
      case 'css':
        return 'css';
      case 'javascript':
      default:
        return 'javascript';
    }
  };

  const getModelPath = () => {
    switch (activeTab) {
      case 'html':
        return `question-${question.id}/index.html`;
      case 'css':
        return `question-${question.id}/styles.css`;
      case 'javascript':
      default:
        return `question-${question.id}/script.js`;
    }
  };

  const handleEditorChange = (value) => {
    const fileKey = activeTab === 'javascript' ? 'js' : activeTab;
    if (onCodeChange) {
      onCodeChange(fileKey, value || '');
    }
  };

  return (
    <div className="code-editor-panel">
      <div className="editor-tab-bar">
        <div className="tabs-left">
          <button
            onClick={() => setActiveTab('javascript')}
            className={`editor-tab ${activeTab === 'javascript' ? 'active' : ''}`}
            aria-selected={activeTab === 'javascript'}
          >
            <FileCode size={14} className="tab-icon js-icon" />
            <span>script.js</span>
            <span className="tab-status-tag editable">
              <Edit3 size={10} /> Editable
            </span>
          </button>

          <button
            onClick={() => setActiveTab('html')}
            className={`editor-tab ${activeTab === 'html' ? 'active' : ''}`}
            aria-selected={activeTab === 'html'}
          >
            <FileCode size={14} className="tab-icon html-icon" />
            <span>index.html</span>
            <span className="tab-status-tag editable">
              <Edit3 size={10} /> Editable
            </span>
          </button>

          <button
            onClick={() => setActiveTab('css')}
            className={`editor-tab ${activeTab === 'css' ? 'active' : ''}`}
            aria-selected={activeTab === 'css'}
          >
            <FileCode size={14} className="tab-icon css-icon" />
            <span>styles.css</span>
            <span className="tab-status-tag editable">
              <Edit3 size={10} /> Editable
            </span>
          </button>
        </div>

        <div className="tabs-right">
          <span className="editor-lang-indicator">
            {getLanguage().toUpperCase()}
          </span>
        </div>
      </div>

      <div className="monaco-container">
        <Editor
          height="100%"
          language={getLanguage()}
          path={getModelPath()}
          value={getEditorContent()}
          theme={theme === 'dark' ? 'vs-dark' : 'light'}
          onChange={handleEditorChange}
          options={{
            readOnly: false,
            minimap: { enabled: false },
            fontSize: 13.5,
            fontFamily: "'Fira Code', Consolas, Monaco, monospace",
            fontLigatures: true,
            tabSize: 2,
            insertSpaces: true,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            automaticLayout: true,
            bracketPairColorization: { enabled: true },
            autoClosingBrackets: 'always',
            renderWhitespace: 'none',
            overviewRulerLanes: 0,
            hideCursorInOverviewRuler: true
          }}
          loading={
            <div className="editor-loading">
              <Sparkles size={20} className="spinning" />
              <span>Loading Monaco Editor...</span>
            </div>
          }
        />
      </div>

      <div className="editor-footer-status">
        <span>✏️ All files are editable (JavaScript, HTML, CSS)</span>
        <span className="editor-footer-tip">Autosaved to localStorage</span>
      </div>
    </div>
  );
}
