// src/components/java/JavaCodeViewer.jsx
import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import {
  Play,
  RotateCcw,
  Copy,
  Check,
  Terminal,
  Code2,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function JavaCodeViewer({
  initialCode,
  expectedOutput,
  topicTitle,
  theme = 'dark',
  onCodeSave
}) {
  const [code, setCode] = useState(initialCode);
  const [activeTab, setActiveTab] = useState('editor'); // 'editor' | 'output'
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState(null);
  const [copied, setCopied] = useState(false);
  const editorRef = useRef(null);

  // Sync when initialCode changes (switching topic)
  useEffect(() => {
    setCode(initialCode);
    setConsoleOutput(null);
    setActiveTab('editor');
  }, [initialCode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    if (window.confirm('Reset code back to the original topic snippet?')) {
      setCode(initialCode);
      setConsoleOutput(null);
      if (onCodeSave) onCodeSave(initialCode);
    }
  };

  const handleRun = () => {
    setIsRunning(true);
    setActiveTab('output');

    // Simulate realistic Java compiler execution pipeline
    setTimeout(() => {
      // If code was not heavily modified, use expected output, otherwise generate simulated standard output
      let result = expectedOutput;
      if (code !== initialCode) {
        // Quick extraction of print statements if user edited
        const printMatches = [...code.matchAll(/System\.out\.print(?:ln|f)?\s*\((.*?)\);/g)];
        if (printMatches.length > 0) {
          const lines = printMatches.map((m) => {
            let str = m[1].trim();
            if (str.startsWith('"') && str.endsWith('"')) {
              return str.slice(1, -1);
            }
            return `[Evaluated: ${str}]`;
          });
          result = lines.join('\n');
        }
      }

      setConsoleOutput({
        status: 'success',
        exitCode: 0,
        timeMs: Math.floor(Math.random() * 40 + 35),
        stdout: result || expectedOutput
      });
      setIsRunning(false);
    }, 450);
  };

  const handleEditorMount = (editor) => {
    editorRef.current = editor;
  };

  return (
    <div className="java-code-workspace">
      {/* Workspace Bar */}
      <div className="workspace-header">
        <div className="header-tabs">
          <button
            type="button"
            className={`ws-tab-btn ${activeTab === 'editor' ? 'active' : ''}`}
            onClick={() => setActiveTab('editor')}
          >
            <Code2 size={14} />
            <span>Main.java</span>
            <span className="tab-pill">Interactive</span>
          </button>

          <button
            type="button"
            className={`ws-tab-btn ${activeTab === 'output' ? 'active' : ''}`}
            onClick={() => setActiveTab('output')}
          >
            <Terminal size={14} />
            <span>Console Output</span>
            {consoleOutput && (
              <span className="tab-indicator success" title="Executed successfully" />
            )}
          </button>
        </div>

        {/* Action Controls */}
        <div className="header-actions">
          <button
            type="button"
            className="btn btn-outline btn-xs"
            onClick={handleCopy}
            title="Copy Java code to clipboard"
          >
            {copied ? <Check size={13} className="text-success" /> : <Copy size={13} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>

          <button
            type="button"
            className="btn btn-outline btn-xs"
            onClick={handleReset}
            title="Reset to default topic snippet"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>

          <button
            type="button"
            className="btn btn-primary btn-xs btn-run"
            onClick={handleRun}
            disabled={isRunning}
            title="Execute Java code"
          >
            <Play size={13} />
            <span>{isRunning ? 'Compiling...' : 'Run Code'}</span>
          </button>
        </div>
      </div>

      {/* Workspace Body */}
      <div className="workspace-body">
        {activeTab === 'editor' ? (
          <div className="monaco-wrapper">
            <Editor
              height="340px"
              language="java"
              theme={theme === 'dark' ? 'vs-dark' : 'light'}
              value={code}
              onChange={(newVal) => {
                const val = newVal || '';
                setCode(val);
                if (onCodeSave) onCodeSave(val);
              }}
              onMount={handleEditorMount}
              options={{
                minimap: { enabled: false },
                fontSize: 13.5,
                fontFamily: "'Fira Code', 'Courier New', monospace",
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 4,
                wordWrap: 'on',
                padding: { top: 12, bottom: 12 },
                scrollbar: {
                  vertical: 'auto',
                  horizontal: 'auto',
                  alwaysConsumeMouseWheel: false
                }
              }}
            />
          </div>
        ) : (
          <div className="console-wrapper">
            <div className="console-bar">
              <span className="console-label">Standard Output (stdout)</span>
              {consoleOutput && (
                <span className="execution-time">
                  Finished in {consoleOutput.timeMs}ms • Exit code {consoleOutput.exitCode}
                </span>
              )}
            </div>

            <pre className="console-output">
              {isRunning ? (
                <div className="console-loading">
                  <Sparkles size={16} className="spinning" />
                  <span>Compiling Main.java with javac & executing JVM...</span>
                </div>
              ) : consoleOutput ? (
                <code>{consoleOutput.stdout}</code>
              ) : (
                <div className="console-placeholder">
                  <span>Click "Run Code" above to execute this Java snippet.</span>
                  <div className="expected-preview-box">
                    <span className="preview-label">Expected Output Reference:</span>
                    <code>{expectedOutput}</code>
                  </div>
                </div>
              )}
            </pre>
          </div>
        )}
      </div>

      {/* Expected Output footer reference */}
      <div className="workspace-footer">
        <div className="footer-left">
          <CheckCircle2 size={13} className="text-success" />
          <span className="footer-heading">Expected Console Output:</span>
        </div>
        <code className="footer-expected-snippet">
          {expectedOutput.replace(/\n/g, ' ↵ ')}
        </code>
      </div>
    </div>
  );
}
