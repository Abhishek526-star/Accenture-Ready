// src/pages/Practice.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { questions } from '../data/questions.js';
import { storage } from '../utils/storage.js';
import { buildSandboxSrcDoc } from '../utils/sandbox.js';

import Header from '../components/Header.jsx';
import QuestionPanel from '../components/QuestionPanel.jsx';
import CodeEditor from '../components/CodeEditor.jsx';
import PreviewPanel from '../components/PreviewPanel.jsx';
import TestResults from '../components/TestResults.jsx';
import Navigation from '../components/Navigation.jsx';
import ResetModal from '../components/ResetModal.jsx';

import { BookOpen, Code, Eye, CheckCircle2 } from 'lucide-react';

export default function Practice({ theme }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Determine active question ID
  const qParam = searchParams.get('q');
  const initialId = qParam ? parseInt(qParam, 10) : storage.getActiveQuestionId();
  const validId = questions.some((q) => q.id === initialId) ? initialId : 1;

  const [currentId, setCurrentId] = useState(validId);
  const currentQuestion = questions.find((q) => q.id === currentId) || questions[0];

  // Candidate Code Bundle state (JavaScript, HTML, CSS all editable)
  const [codeBundle, setCodeBundle] = useState(() => {
    return storage.getCandidateCode(
      currentQuestion.id,
      currentQuestion.starterJS,
      currentQuestion.html,
      currentQuestion.css
    );
  });

  // Sandboxed iframe srcDoc
  const [previewSrcDoc, setPreviewSrcDoc] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [runtimeError, setRuntimeError] = useState(null);
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  // Responsive mobile active tab
  const [mobileTab, setMobileTab] = useState('editor'); // 'question' | 'editor' | 'preview' | 'results'

  // Watchdog timer ref
  const watchdogRef = useRef(null);

  // Load question code when question changes
  useEffect(() => {
    const savedBundle = storage.getCandidateCode(
      currentQuestion.id,
      currentQuestion.starterJS,
      currentQuestion.html,
      currentQuestion.css
    );
    setCodeBundle(savedBundle);
    storage.setActiveQuestionId(currentQuestion.id);

    // Load existing results if any
    const savedResults = storage.getQuestionResults(currentQuestion.id);
    if (savedResults && savedResults.results) {
      setTestResults(savedResults.results);
    } else {
      setTestResults(null);
    }
    setRuntimeError(null);
    setConsoleLogs([]);

    // Update Live Preview with saved bundle
    const initialDoc = buildSandboxSrcDoc({
      question: currentQuestion,
      candidateJS: savedBundle.js,
      candidateHTML: savedBundle.html,
      candidateCSS: savedBundle.css,
      runTests: false
    });
    setPreviewSrcDoc(initialDoc);
  }, [currentQuestion.id]);

  // Keep URL query in sync
  useEffect(() => {
    setSearchParams({ q: currentId }, { replace: true });
  }, [currentId, setSearchParams]);

  // Handle postMessage communication from the sandbox iframe
  useEffect(() => {
    const handleMessage = (event) => {
      const data = event.data;
      if (!data || typeof data !== 'object') return;

      if (data.type === 'TEST_RESULTS' && data.questionId === currentQuestion.id) {
        if (watchdogRef.current) clearTimeout(watchdogRef.current);
        setIsRunning(false);
        setTestResults(data.results);
        setRuntimeError(null);
        if (data.logs) setConsoleLogs(data.logs);

        // Store results in localStorage
        storage.setQuestionResults(currentQuestion.id, {
          results: data.results,
          allPassed: data.allPassed,
          passedCount: data.passedCount,
          totalCount: data.totalCount
        });
      } else if (data.type === 'RUNTIME_ERROR' && data.questionId === currentQuestion.id) {
        if (watchdogRef.current) clearTimeout(watchdogRef.current);
        setIsRunning(false);
        setRuntimeError(data.error || 'A runtime error occurred in candidate code.');
        if (data.logs) setConsoleLogs(data.logs);
      } else if (data.type === 'PREVIEW_READY' && data.questionId === currentQuestion.id) {
        if (data.logs) setConsoleLogs(data.logs);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
      if (watchdogRef.current) clearTimeout(watchdogRef.current);
    };
  }, [currentQuestion.id]);

  // Handle Code Changes for any file (js, html, css)
  const handleCodeChange = (fileKey, newContent) => {
    setCodeBundle((prev) => {
      const next = { ...prev, [fileKey]: newContent };
      storage.setCandidateCode(currentQuestion.id, next);

      // Update live preview document (without running tests)
      const doc = buildSandboxSrcDoc({
        question: currentQuestion,
        candidateJS: next.js,
        candidateHTML: next.html,
        candidateCSS: next.css,
        runTests: false
      });
      setPreviewSrcDoc(doc);

      return next;
    });
  };

  // Run Code and execute automated tests
  const handleRunCode = useCallback(() => {
    setIsRunning(true);
    setRuntimeError(null);

    // Switch to results tab on mobile
    if (window.innerWidth < 1024) {
      setMobileTab('results');
    }

    // Set 4-second watchdog timer to handle infinite loops
    if (watchdogRef.current) clearTimeout(watchdogRef.current);
    watchdogRef.current = setTimeout(() => {
      setIsRunning(false);
      setRuntimeError('Execution Timed Out: Your JavaScript execution took longer than 4000ms. Please check for infinite loops or unresolved event blocks.');
    }, 4000);

    // Build test document that runs assertions inside iframe
    const testDoc = buildSandboxSrcDoc({
      question: currentQuestion,
      candidateJS: codeBundle.js,
      candidateHTML: codeBundle.html,
      candidateCSS: codeBundle.css,
      runTests: true
    });

    setPreviewSrcDoc(testDoc);
  }, [currentQuestion, codeBundle]);

  // Reload preview manually
  const handleReloadPreview = () => {
    const doc = buildSandboxSrcDoc({
      question: currentQuestion,
      candidateJS: codeBundle.js,
      candidateHTML: codeBundle.html,
      candidateCSS: codeBundle.css,
      runTests: false
    });
    setPreviewSrcDoc(doc);
  };

  // Reset candidate code
  const handleConfirmReset = () => {
    storage.resetCandidateCode(
      currentQuestion.id,
      currentQuestion.starterJS,
      currentQuestion.html,
      currentQuestion.css
    );
    const resetBundle = {
      js: currentQuestion.starterJS,
      html: currentQuestion.html,
      css: currentQuestion.css
    };
    setCodeBundle(resetBundle);
    setTestResults(null);
    setRuntimeError(null);
    setConsoleLogs([]);
    setIsResetModalOpen(false);

    const doc = buildSandboxSrcDoc({
      question: currentQuestion,
      candidateJS: resetBundle.js,
      candidateHTML: resetBundle.html,
      candidateCSS: resetBundle.css,
      runTests: false
    });
    setPreviewSrcDoc(doc);
  };

  // Load Reference Solution
  const handleApplySolution = () => {
    const solutionBundle = {
      js: currentQuestion.solutionJS || currentQuestion.starterJS,
      html: currentQuestion.solutionHTML || currentQuestion.html,
      css: currentQuestion.solutionCSS || currentQuestion.css
    };
    setCodeBundle(solutionBundle);
    storage.setCandidateCode(currentQuestion.id, solutionBundle);

    const doc = buildSandboxSrcDoc({
      question: currentQuestion,
      candidateJS: solutionBundle.js,
      candidateHTML: solutionBundle.html,
      candidateCSS: solutionBundle.css,
      runTests: false
    });
    setPreviewSrcDoc(doc);
  };

  // Navigation handlers
  const handlePrevious = () => {
    if (currentId > 1) {
      setCurrentId((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentId < questions.length) {
      setCurrentId((prev) => prev + 1);
    }
  };

  const completedQuestions = storage.getCompletedQuestions();

  return (
    <div className="practice-layout">
      {/* Assessment Header */}
      <Header
        question={currentQuestion}
        totalQuestions={questions.length}
        completedCount={completedQuestions.length}
        onResetClick={() => setIsResetModalOpen(true)}
        onSelectQuestion={(id) => setCurrentId(id)}
        allQuestions={questions}
      />

      {/* Mobile Tabs Bar */}
      <div className="mobile-tabs-bar">
        <button
          className={`mobile-tab-btn ${mobileTab === 'question' ? 'active' : ''}`}
          onClick={() => setMobileTab('question')}
        >
          <BookOpen size={14} />
          <span>Task</span>
        </button>
        <button
          className={`mobile-tab-btn ${mobileTab === 'editor' ? 'active' : ''}`}
          onClick={() => setMobileTab('editor')}
        >
          <Code size={14} />
          <span>Editor</span>
        </button>
        <button
          className={`mobile-tab-btn ${mobileTab === 'preview' ? 'active' : ''}`}
          onClick={() => setMobileTab('preview')}
        >
          <Eye size={14} />
          <span>Preview</span>
        </button>
        <button
          className={`mobile-tab-btn ${mobileTab === 'results' ? 'active' : ''}`}
          onClick={() => setMobileTab('results')}
        >
          <CheckCircle2 size={14} />
          <span>Tests</span>
          {testResults && (
            <span className="mobile-pill">
              {testResults.filter((r) => r.passed).length}/{testResults.length}
            </span>
          )}
        </button>
      </div>

      {/* Main 3-Panel Workspace */}
      <main className={`workspace-panels mobile-tab-${mobileTab}`}>
        {/* Left Column: Question Panel */}
        <section className="panel-column question-col">
          <QuestionPanel
            question={currentQuestion}
            onApplySolution={handleApplySolution}
            allQuestions={questions}
            onSelectQuestion={(id) => setCurrentId(id)}
          />
        </section>

        {/* Middle Column: Code Editor (All tabs editable) */}
        <section className="panel-column editor-col">
          <CodeEditor
            question={currentQuestion}
            codeBundle={codeBundle}
            onCodeChange={handleCodeChange}
            theme={theme}
          />
        </section>

        {/* Right Column: Live Preview & Test Results */}
        <section className="panel-column preview-results-col">
          <div className="preview-split-top">
            <PreviewPanel
              srcDoc={previewSrcDoc}
              onReload={handleReloadPreview}
            />
          </div>

          <div className="preview-split-bottom">
            <TestResults
              results={testResults}
              runtimeError={runtimeError}
              isRunning={isRunning}
              logs={consoleLogs}
            />
          </div>
        </section>
      </main>

      {/* Bottom Navigation Bar */}
      <Navigation
        currentQuestionId={currentId}
        totalQuestions={questions.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onRunCode={handleRunCode}
        isRunning={isRunning}
      />

      {/* Reset Code Confirmation Modal */}
      <ResetModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirm={handleConfirmReset}
        questionTitle={currentQuestion.title}
      />
    </div>
  );
}
