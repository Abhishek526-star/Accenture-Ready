// src/pages/DailyChallengePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import {
  Flame,
  Calendar,
  Zap,
  Play,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Award,
  Sparkles,
  RotateCcw,
  BookOpen,
  Code2,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  HelpCircle,
  Clock,
  Database,
  ArrowRight,
  ExternalLink,
  X
} from 'lucide-react';
import { getTodaysChallenge, markTodayChallengeComplete } from '../data/dailyChallenges.js';
import { gamificationService } from '../services/gamificationService.js';
import { executeDsaOnJudge0, normalizeOutput } from '../services/judge0Service.js';
import SEO from '../components/SEO.jsx';
import { seoConfig } from '../config/seo.js';

const DC_CPP_STARTERS = {
  'dc-01': `#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int firstUniqChar(string s) {
        // TODO: Complete this function
        // Find the first non-repeating character in s and return its index
        // Return -1 if no unique character exists
        return -1;
    }
};
`,
  'dc-02': `#include <iostream>
#include <string>
#include <cctype>
using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {
        // TODO: Complete this function
        // Clean string to lowercase alphanumeric and return true if it's a palindrome
        return false;
    }
};
`,
  'dc-03': `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // TODO: Complete this function
        // Return indices of the two numbers such that they add up to target
        return {};
    }
};
`,
  'dc-04': `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        // TODO: Complete this function
        // Move all 0's to the end while maintaining relative order of non-zero elements
    }
};
`
};

const LANGUAGE_CONFIG = [
  { id: 'python', label: 'Python 3', monacoLang: 'python', icon: '🐍' },
  { id: 'java', label: 'Java', monacoLang: 'java', icon: '☕' },
  { id: 'cpp', label: 'C++', monacoLang: 'cpp', icon: '⚙️' },
  { id: 'csharp', label: 'C#', monacoLang: 'csharp', icon: '🔷' },
  { id: 'javascript', label: 'JavaScript', monacoLang: 'javascript', icon: '⚡' }
];

export default function DailyChallengePage({ theme = 'dark' }) {
  const [challenge, setChallenge] = useState(() => getTodaysChallenge());
  const [selectedLang, setSelectedLang] = useState('python');
  
  // Per-language code storage so switching languages preserves candidate work
  const [codeMap, setCodeMap] = useState(() => {
    const templates = challenge.starterTemplates || {};
    return {
      python: templates.python || '',
      java: templates.java || '',
      cpp: templates.cpp || DC_CPP_STARTERS[challenge.id] || '',
      csharp: templates.csharp || '',
      javascript: templates.javascript || ''
    };
  });

  const [revealedHints, setRevealedHints] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [executionEngine, setExecutionEngine] = useState('Judge0 CE');
  const [isPassed, setIsPassed] = useState(challenge.isCompletedToday);
  const [gamify, setGamify] = useState(() => gamificationService.getState());
  
  // UI Modals & Toggles
  const [showSolutionModal, setShowSolutionModal] = useState(false);
  const [solutionTabLang, setSolutionTabLang] = useState('python');
  const [isEditorExpanded, setIsEditorExpanded] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedSolution, setCopiedSolution] = useState(false);

  // Sync current code
  const currentCode = codeMap[selectedLang] || challenge.starterTemplates[selectedLang] || '';

  const handleCodeChange = (newVal) => {
    setCodeMap(prev => ({
      ...prev,
      [selectedLang]: newVal || ''
    }));
  };

  const handleResetCode = () => {
    if (window.confirm(`Reset ${LANGUAGE_CONFIG.find(l => l.id === selectedLang)?.label} code back to the function starter template?`)) {
      setCodeMap(prev => ({
        ...prev,
        [selectedLang]: challenge.starterTemplates[selectedLang] || ''
      }));
      setTestResults(null);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopySolutionCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedSolution(true);
    setTimeout(() => setCopiedSolution(false), 2000);
  };

  const handleLoadSolutionToEditor = () => {
    const solCode = challenge.solution?.code?.[selectedLang];
    if (solCode) {
      setCodeMap(prev => ({
        ...prev,
        [selectedLang]: solCode
      }));
      setShowSolutionModal(false);
    }
  };

  const handleRevealHint = () => {
    if (revealedHints < (challenge.hints || []).length) {
      setRevealedHints(prev => prev + 1);
    }
  };

  // Run Test Cases with Judge0 CE remote compiler
  const handleRunCode = async () => {
    setIsRunning(true);
    setTestResults(null);

    const codeToTest = currentCode.trim();
    if (!codeToTest) {
      setTestResults({
        allPassed: false,
        error: 'Please enter your solution code before running test cases.',
        results: [],
        executionEngine: 'Judge0 CE ⭐ (Remote Compiler)',
        isJudge0: true
      });
      setIsRunning(false);
      return;
    }

    try {
      // 1. Submit to Judge0 CE
      const j0Res = await executeDsaOnJudge0(challenge, currentCode, selectedLang);

      if (j0Res.isJudge0 && j0Res.success) {
        const latencyStr = j0Res.time ? `${Math.round(parseFloat(j0Res.time) * 1000)}ms` : '71ms';
        const results = challenge.testCases.map((tc, idx) => {
          const actual = j0Res.testOutputs[idx] !== undefined ? j0Res.testOutputs[idx] : 'No output';
          let passed = false;
          if (typeof tc.expected === 'boolean') {
            passed = String(actual).trim().toLowerCase() === String(tc.expected).toLowerCase();
          } else if (typeof tc.expected === 'number') {
            passed = Number(actual) === tc.expected;
          } else if (Array.isArray(tc.expected)) {
            passed = normalizeOutput(actual) === normalizeOutput(tc.expected);
          } else {
            passed = normalizeOutput(actual) === normalizeOutput(tc.expected);
          }

          return {
            id: idx + 1,
            name: `Exam Test Case ${idx + 1}`,
            input: typeof tc.input === 'object' ? JSON.stringify(tc.input) : String(tc.input),
            expected: typeof tc.expected === 'object' ? JSON.stringify(tc.expected) : String(tc.expected),
            actual: typeof actual === 'object' ? JSON.stringify(actual) : String(actual),
            passed,
            latency: latencyStr
          };
        });

        const allPassed = results.length > 0 && results.every(r => r.passed);
        setTestResults({
          allPassed,
          results,
          executionEngine: 'Judge0 CE ⭐ (Remote Compiler)',
          execTime: latencyStr,
          isJudge0: true
        });

        if (allPassed && !isPassed) {
          setIsPassed(true);
          markTodayChallengeComplete();
          gamificationService.addXP(challenge.xpReward, 'Solved Daily Challenge');
          setGamify(gamificationService.getState());
        }
        setIsRunning(false);
        return;
      } else if (!j0Res.isFallback && !j0Res.success) {
        // Compiler error / runtime error on Judge0
        setTestResults({
          allPassed: false,
          error: `${j0Res.errorType || 'Remote Execution Error'}: ${j0Res.errorMessage || 'Execution error on Judge0'}`,
          results: [],
          executionEngine: 'Judge0 CE ⭐ (Remote Compiler)',
          isJudge0: true
        });
        setIsRunning(false);
        return;
      }

      // 2. Fallback only if offline or network connection to Judge0 timed out
      if (selectedLang === 'javascript') {
        try {
          // eslint-disable-next-line no-new-func
          const userFn = new Function(`${codeToTest}; return typeof firstUniqChar === 'function' ? firstUniqChar : (typeof isPalindrome === 'function' ? isPalindrome : (typeof twoSum === 'function' ? twoSum : (typeof moveZeroes === 'function' ? moveZeroes : null)));`)();

          if (typeof userFn !== 'function') {
            throw new Error('Solution function not found. Please ensure function name matches the starter code.');
          }

          const results = challenge.testCases.map((tc, idx) => {
            try {
              let actual;
              if (typeof tc.input === 'object' && tc.input.nums && tc.input.target !== undefined) {
                actual = userFn(tc.input.nums, tc.input.target);
              } else if (Array.isArray(tc.input)) {
                actual = userFn([...tc.input]);
              } else {
                actual = userFn(tc.input);
              }

              let passed = false;
              if (typeof tc.expected === 'boolean') {
                passed = String(actual).toLowerCase() === String(tc.expected).toLowerCase();
              } else if (typeof tc.expected === 'number') {
                passed = Number(actual) === tc.expected;
              } else if (Array.isArray(tc.expected)) {
                passed = JSON.stringify(actual) === JSON.stringify(tc.expected);
              } else {
                passed = normalizeOutput(actual) === normalizeOutput(tc.expected);
              }

              return {
                id: idx + 1,
                name: `Exam Test Case ${idx + 1}`,
                input: typeof tc.input === 'object' ? JSON.stringify(tc.input) : String(tc.input),
                expected: typeof tc.expected === 'object' ? JSON.stringify(tc.expected) : String(tc.expected),
                actual: typeof actual === 'object' ? JSON.stringify(actual) : String(actual),
                passed,
                latency: '16ms'
              };
            } catch (err) {
              return {
                id: idx + 1,
                name: `Exam Test Case ${idx + 1}`,
                input: JSON.stringify(tc.input),
                expected: JSON.stringify(tc.expected),
                actual: `Runtime Error: ${err.message}`,
                passed: false,
                latency: '0ms'
              };
            }
          });

          const allPassed = results.length > 0 && results.every(r => r.passed);
          setTestResults({
            allPassed,
            results,
            executionEngine: 'Local Sandbox (Judge0 Offline)',
            execTime: '16ms',
            isJudge0: false
          });

          if (allPassed && !isPassed) {
            setIsPassed(true);
            markTodayChallengeComplete();
            gamificationService.addXP(challenge.xpReward, 'Solved Daily Challenge');
            setGamify(gamificationService.getState());
          }
        } catch (err) {
          setTestResults({
            allPassed: false,
            error: `Execution Error: ${err.message}`,
            results: [],
            executionEngine: 'Local Sandbox (Judge0 Offline)',
            isJudge0: false
          });
        }
      } else {
        setTestResults({
          allPassed: false,
          error: `Remote execution failed: ${j0Res?.error || 'Unable to connect to Judge0 CE (Remote Compiler). Please check your internet connection or try again.'}`,
          results: [],
          executionEngine: 'Judge0 CE ⭐ (Remote Compiler)',
          isJudge0: true
        });
      }
    } catch (e) {
      setTestResults({
        allPassed: false,
        error: e.message,
        results: [],
        executionEngine: 'Judge0 CE ⭐ (Remote Compiler)',
        isJudge0: true
      });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '1.5rem 1.25rem' }}>
      <SEO {...seoConfig.dailyChallenge} />
      {/* Top Banner with Streak & Date */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
        border: '1px solid rgba(249, 115, 22, 0.3)',
        borderRadius: '16px',
        padding: '1.75rem 2rem',
        marginBottom: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)'
      }}>
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(249, 115, 22, 0.15)',
            color: '#f97316',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            letterSpacing: '0.5px'
          }}>
            <Calendar size={14} /> TODAY'S CURATED ACCENTURE CHALLENGE • {challenge.dateString}
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.4rem 0' }}>
            Accenture Daily Coding Challenge: {challenge.title}
          </h1>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: '#94a3b8', fontSize: '0.875rem', flexWrap: 'wrap' }}>
            <span style={{
              background: challenge.difficulty === 'Easy' ? 'rgba(74, 222, 128, 0.15)' : 'rgba(250, 204, 21, 0.15)',
              color: challenge.difficulty === 'Easy' ? '#4ade80' : '#facc15',
              padding: '2px 8px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '0.75rem'
            }}>
              {challenge.difficulty}
            </span>
            <span>•</span>
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>
              Category: {challenge.category}
            </span>
            <span>•</span>
            <span style={{ color: '#fb923c', fontWeight: 600 }}>
              Reward: +{challenge.xpReward} XP
            </span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={14} /> Target: {challenge.targetMinutes} Mins
            </span>
          </div>
        </div>

        {/* Right Header Status */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button
            onClick={() => {
              setSolutionTabLang(selectedLang);
              setShowSolutionModal(true);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '10px 18px',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              borderRadius: '12px',
              color: '#38bdf8',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)'}
            onMouseOut={e => e.currentTarget.style.background = 'rgba(56, 189, 248, 0.12)'}
          >
            <Lightbulb size={16} />
            <span>View Solution</span>
          </button>

          {/* Streak Indicator */}
          <div style={{
            background: '#0f172a',
            border: '1px solid #334155',
            borderRadius: '14px',
            padding: '0.75rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(249, 115, 22, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316' }}>
              <Flame size={24} />
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Streak</span>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'JetBrains Mono' }}>
                {gamify.streak} {gamify.streak === 1 ? 'Day' : 'Days'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Two Column Area */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isEditorExpanded ? '1fr' : 'minmax(340px, 460px) 1fr',
        gap: '1.5rem',
        alignItems: 'start'
      }}>
        {/* Left Column: Problem & Hints (hidden if editor expanded) */}
        {!isEditorExpanded && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Problem Description Card */}
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '14px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', margin: 0, fontWeight: 700 }}>Problem Statement</h3>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', background: '#0f172a', padding: '2px 8px', borderRadius: '6px' }}>
                  Accenture Pattern
                </span>
              </div>
              
              <p style={{ color: '#cbd5e1', lineHeight: 1.65, fontSize: '0.92rem', margin: '0 0 1.25rem 0' }}>
                {challenge.prompt}
              </p>

              {/* Examples */}
              <h4 style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 0.5rem 0' }}>
                Examples
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
                {challenge.examples.map((ex, idx) => (
                  <div key={idx} style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '8px', padding: '10px 14px', fontSize: '0.85rem' }}>
                    <div style={{ color: '#38bdf8', fontFamily: 'JetBrains Mono', marginBottom: '3px' }}>
                      <span style={{ color: '#64748b' }}>Input:</span> {ex.input}
                    </div>
                    <div style={{ color: '#4ade80', fontFamily: 'JetBrains Mono' }}>
                      <span style={{ color: '#64748b' }}>Output:</span> {ex.output}
                    </div>
                    {ex.explanation && (
                      <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '6px', borderTop: '1px dashed #1e293b', paddingTop: '4px' }}>
                        💡 {ex.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Constraints */}
              {challenge.constraints && (
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 0.5rem 0' }}>
                    Constraints
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    {challenge.constraints.map((c, idx) => (
                      <li key={idx} style={{ fontFamily: 'JetBrains Mono' }}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Progressive Hint System */}
            <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '14px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <h3 style={{ fontSize: '1rem', color: '#f8fafc', margin: 0, display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
                  <Lightbulb size={18} className="text-amber-400" />
                  <span>Progressive Hints ({revealedHints}/{(challenge.hints || []).length})</span>
                </h3>
                {revealedHints < (challenge.hints || []).length && (
                  <button
                    onClick={handleRevealHint}
                    style={{
                      padding: '5px 12px',
                      background: 'rgba(234, 179, 8, 0.1)',
                      border: '1px solid #eab308',
                      color: '#fef08a',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Reveal Hint {revealedHints + 1}
                  </button>
                )}
              </div>

              {revealedHints === 0 ? (
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>
                  Try thinking about the optimal approach first. If you need a gentle nudge, click "Reveal Hint" to unlock progressive clues without spoiling the solution.
                </p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {challenge.hints.slice(0, revealedHints).map((hint, idx) => (
                    <div key={idx} style={{ background: '#0f172a', border: '1px solid rgba(234, 179, 8, 0.3)', borderRadius: '8px', padding: '10px 12px', fontSize: '0.85rem', color: '#fef08a' }}>
                      <strong>💡 Hint {idx + 1}:</strong> {hint}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Solution Trigger Banner */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.9))',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '14px',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem'
            }}>
              <div>
                <div style={{ color: '#f8fafc', fontWeight: 700, fontSize: '0.9rem', marginBottom: '2px' }}>
                  Need help or want to compare?
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
                  See step-by-step logic and full code in Python, Java, C#, & JS.
                </div>
              </div>
              <button
                onClick={() => {
                  setSolutionTabLang(selectedLang);
                  setShowSolutionModal(true);
                }}
                style={{
                  padding: '7px 14px',
                  background: '#0284c7',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                View Solution
              </button>
            </div>
          </div>
        )}

        {/* Right Column: Code Editor & Execution */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{
            background: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '14px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}>
            {/* Top Editor Toolbar */}
            <div style={{
              background: '#0f172a',
              borderBottom: '1px solid #334155',
              padding: '0.75rem 1.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {/* Language Selector Pills */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', marginRight: '4px', fontWeight: 600 }}>Language:</span>
                {LANGUAGE_CONFIG.map(lang => {
                  const isActive = selectedLang === lang.id;
                  return (
                    <button
                      key={lang.id}
                      onClick={() => setSelectedLang(lang.id)}
                      style={{
                        padding: '5px 12px',
                        borderRadius: '8px',
                        border: isActive ? '1px solid #f97316' : '1px solid #334155',
                        background: isActive ? 'rgba(249, 115, 22, 0.2)' : '#1e293b',
                        color: isActive ? '#fb923c' : '#cbd5e1',
                        fontSize: '0.8rem',
                        fontWeight: isActive ? 700 : 500,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        transition: 'all 0.15s'
                      }}
                    >
                      <span>{lang.icon}</span>
                      <span>{lang.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {/* View Solution */}
                <button
                  onClick={() => {
                    setSolutionTabLang(selectedLang);
                    setShowSolutionModal(true);
                  }}
                  title="View Solution"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '6px 12px',
                    background: '#1e293b',
                    border: '1px solid #38bdf8',
                    borderRadius: '8px',
                    color: '#38bdf8',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <Lightbulb size={14} />
                  <span>Solution</span>
                </button>

                {/* Reset Code */}
                <button
                  onClick={handleResetCode}
                  title="Reset to function completion starter code"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '6px 10px',
                    background: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#cbd5e1',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <RotateCcw size={14} />
                  <span>Reset</span>
                </button>

                {/* Copy Code */}
                <button
                  onClick={handleCopyCode}
                  title="Copy Code"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '6px 10px',
                    background: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: copiedCode ? '#4ade80' : '#cbd5e1',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {copiedCode ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>

                {/* Fullscreen Expand Toggle */}
                <button
                  onClick={() => setIsEditorExpanded(prev => !prev)}
                  title={isEditorExpanded ? 'Collapse Layout' : 'Expand Editor'}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '6px 10px',
                    background: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#cbd5e1',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {isEditorExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                  <span>{isEditorExpanded ? 'Split' : 'Expand'}</span>
                </button>

                {/* Run Test Cases Button */}
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '6px 16px',
                    background: isRunning ? '#334155' : 'linear-gradient(135deg, #f97316, #ea580c)',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    cursor: isRunning ? 'not-allowed' : 'pointer',
                    boxShadow: '0 2px 8px rgba(249, 115, 22, 0.3)'
                  }}
                >
                  <Play size={14} fill="#ffffff" />
                  <span>{isRunning ? 'Compiling on Judge0...' : 'Run on Judge0 ⭐'}</span>
                </button>
              </div>
            </div>

            {/* Instruction note + Monaco & Judge0 Badges */}
            <div style={{
              background: '#0b1329',
              borderBottom: '1px solid #1e293b',
              padding: '7px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px',
              fontSize: '0.75rem',
              color: '#94a3b8',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Code2 size={14} className="text-amber-400" />
                <span>
                  <strong>Accenture Coding Pattern:</strong> The surrounding class/function structure is pre-written. Complete only the inner function logic.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: 'rgba(99, 102, 241, 0.14)',
                  border: '1px solid rgba(99, 102, 241, 0.32)',
                  color: '#a5b4fc',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '0.72rem'
                }}>
                  <Sparkles size={12} className="text-indigo-400" />
                  Monaco Editor ⭐
                </span>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: 'rgba(16, 185, 129, 0.14)',
                  border: '1px solid rgba(16, 185, 129, 0.32)',
                  color: '#6ee7b7',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '0.72rem'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                  Judge0 ⭐ Remote Compiler
                </span>
              </div>
            </div>

            {/* Monaco Editor Component */}
            <div style={{ height: isEditorExpanded ? '640px' : '520px', position: 'relative' }}>
              <Editor
                height="100%"
                language={LANGUAGE_CONFIG.find(l => l.id === selectedLang)?.monacoLang || 'python'}
                theme="vs-dark"
                value={currentCode}
                onChange={handleCodeChange}
                options={{
                  fontSize: 14,
                  fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
                  fontLigatures: true,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: selectedLang === 'python' ? 4 : 2,
                  lineNumbers: 'on',
                  roundedSelection: true,
                  renderLineHighlight: 'all',
                  scrollbar: {
                    vertical: 'visible',
                    horizontal: 'visible'
                  }
                }}
              />
            </div>
          </div>

          {/* Test Results Output */}
          {testResults && (
            <div style={{
              background: '#1e293b',
              border: testResults.allPassed ? '1px solid #22c55e' : '1px solid #ef4444',
              borderRadius: '14px',
              padding: '1.25rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {testResults.allPassed ? (
                    <CheckCircle2 size={20} className="text-emerald-400" />
                  ) : testResults.error ? (
                    <X size={20} className="text-rose-400" />
                  ) : (
                    <Sparkles size={20} className="text-amber-400" />
                  )}
                  <h4 style={{
                    margin: 0,
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: testResults.allPassed ? '#4ade80' : testResults.error ? '#f87171' : '#facc15'
                  }}>
                    {testResults.allPassed
                      ? 'All Exam Test Cases Passed! +50 XP Awarded'
                      : testResults.error
                      ? 'Test Execution Error'
                      : `Tests Incomplete (${testResults.results.filter(r => r.passed).length} / ${testResults.results.length} Passed)`}
                  </h4>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    color: testResults.isJudge0 !== false ? '#38bdf8' : '#cbd5e1',
                    background: testResults.isJudge0 !== false ? 'rgba(56, 189, 248, 0.12)' : 'rgba(100, 116, 139, 0.16)',
                    border: testResults.isJudge0 !== false ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(100, 116, 139, 0.3)',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span>⚡</span>
                    <span>{testResults.executionEngine || 'Judge0 CE ⭐ (Remote Compiler)'}</span>
                    {testResults.execTime && <span style={{ opacity: 0.85 }}>({testResults.execTime})</span>}
                  </span>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: testResults.allPassed ? '#4ade80' : testResults.error ? '#f87171' : '#facc15',
                    background: testResults.allPassed
                      ? 'rgba(34, 197, 94, 0.12)'
                      : testResults.error
                      ? 'rgba(239, 68, 68, 0.12)'
                      : 'rgba(245, 158, 11, 0.12)',
                    padding: '3px 8px',
                    borderRadius: '6px'
                  }}>
                    {testResults.results.filter(r => r.passed).length} / {testResults.results.length} Passed
                  </span>
                </div>
              </div>

              {testResults.error && (
                <div style={{
                  background: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid rgba(239, 68, 68, 0.35)',
                  borderRadius: '8px',
                  padding: '12px 14px',
                  color: '#fca5a5',
                  fontSize: '0.82rem',
                  fontFamily: "'JetBrains Mono', Consolas, monospace",
                  whiteSpace: 'pre-wrap',
                  lineHeight: 1.6,
                  marginBottom: testResults.results.length > 0 ? '0.75rem' : 0,
                  maxHeight: '220px',
                  overflowY: 'auto'
                }}>
                  <div style={{ fontWeight: 700, color: '#f87171', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <X size={14} />
                    <span>Compiler / Diagnostic Output</span>
                  </div>
                  {testResults.error}
                </div>
              )}

              {testResults.results.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {testResults.results.map((tr) => (
                    <div
                      key={tr.id}
                      style={{
                        background: '#0f172a',
                        border: tr.passed ? '1px solid #334155' : '1px solid rgba(239, 68, 68, 0.4)',
                        borderRadius: '8px',
                        padding: '10px 14px',
                        fontSize: '0.85rem'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontWeight: 700, color: '#38bdf8' }}>Exam Test Case {tr.id}</span>
                        <span style={{
                          color: tr.passed ? '#4ade80' : '#f87171',
                          fontSize: '0.75rem',
                          background: tr.passed ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                          padding: '1px 6px',
                          borderRadius: '4px',
                          fontWeight: 700
                        }}>
                          {tr.passed ? `Passed (${tr.latency})` : 'Failed'}
                        </span>
                      </div>
                      <div style={{ color: '#94a3b8', fontFamily: 'JetBrains Mono', fontSize: '0.8rem' }}>
                        Input: <span style={{ color: '#cbd5e1' }}>{tr.input}</span>
                      </div>
                      <div style={{ color: '#94a3b8', fontFamily: 'JetBrains Mono', fontSize: '0.8rem' }}>
                        Expected: <span style={{ color: '#94a3b8' }}>{tr.expected}</span>
                      </div>
                      <div style={{ color: '#94a3b8', fontFamily: 'JetBrains Mono', fontSize: '0.8rem' }}>
                        Output: <span style={{ color: tr.passed ? '#4ade80' : '#f87171' }}>{tr.actual}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {isPassed && (
                <div style={{
                  marginTop: '1rem',
                  padding: '1rem 1.25rem',
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(20, 83, 45, 0.2))',
                  border: '1px solid #22c55e',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#4ade80'
                }}>
                  <Sparkles size={26} />
                  <div>
                    <strong style={{ fontSize: '1rem', display: 'block', color: '#86efac' }}>
                      Daily Challenge Solved! +50 XP Awarded
                    </strong>
                    <span style={{ fontSize: '0.85rem', color: '#bbf7d0' }}>
                      Your streak is now {gamify.streak} days. Return tomorrow for the next curated Accenture challenge!
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Complete Solution Modal */}
      {showSolutionModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '1.5rem'
        }}>
          <div style={{
            background: '#1e293b',
            border: '1px solid #38bdf8',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '860px',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid #334155',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#0f172a',
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Lightbulb size={22} className="text-amber-400" />
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                  Complete Solution & Explanation
                </h2>
              </div>
              <button
                onClick={() => setShowSolutionModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Intuition / Approach in Easy Language */}
              <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '12px', padding: '1.25rem' }}>
                <h3 style={{ fontSize: '0.95rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <BookOpen size={16} />
                  <span>How to Think About This Problem (Easy Language)</span>
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6, margin: 0, whiteSpace: 'pre-line' }}>
                  {challenge.solution?.approach}
                </p>
              </div>

              {/* Complexity Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid #334155', borderRadius: '10px', padding: '0.85rem 1rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Time Complexity</div>
                  <div style={{ fontSize: '0.9rem', color: '#4ade80', fontWeight: 700, fontFamily: 'JetBrains Mono', marginTop: '2px' }}>
                    {challenge.solution?.timeComplexity}
                  </div>
                </div>
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid #334155', borderRadius: '10px', padding: '0.85rem 1rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Space Complexity</div>
                  <div style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: 700, fontFamily: 'JetBrains Mono', marginTop: '2px' }}>
                    {challenge.solution?.spaceComplexity}
                  </div>
                </div>
              </div>

              {/* Multi-Language Code Tabs */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    {LANGUAGE_CONFIG.map(lang => (
                      <button
                        key={lang.id}
                        onClick={() => setSolutionTabLang(lang.id)}
                        style={{
                          padding: '5px 12px',
                          borderRadius: '6px',
                          border: solutionTabLang === lang.id ? '1px solid #f97316' : '1px solid #334155',
                          background: solutionTabLang === lang.id ? 'rgba(249, 115, 22, 0.2)' : '#0f172a',
                          color: solutionTabLang === lang.id ? '#fb923c' : '#94a3b8',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        {lang.icon} {lang.label}
                      </button>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => handleCopySolutionCode(challenge.solution?.code?.[solutionTabLang] || '')}
                      style={{
                        padding: '4px 10px',
                        background: '#0f172a',
                        border: '1px solid #334155',
                        borderRadius: '6px',
                        color: copiedSolution ? '#4ade80' : '#cbd5e1',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      {copiedSolution ? <Check size={12} /> : <Copy size={12} />}
                      <span>{copiedSolution ? 'Copied' : 'Copy'}</span>
                    </button>

                    {solutionTabLang === selectedLang && (
                      <button
                        onClick={handleLoadSolutionToEditor}
                        style={{
                          padding: '4px 12px',
                          background: '#f97316',
                          border: 'none',
                          borderRadius: '6px',
                          color: '#ffffff',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <ArrowRight size={12} />
                        <span>Insert into Editor</span>
                      </button>
                    )}
                  </div>
                </div>

                <pre style={{
                  background: '#0a0f1d',
                  border: '1px solid #334155',
                  borderRadius: '10px',
                  padding: '1.25rem',
                  color: '#e2e8f0',
                  fontFamily: "'JetBrains Mono', Consolas, monospace",
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                  overflowX: 'auto',
                  margin: 0
                }}>
                  <code>{challenge.solution?.code?.[solutionTabLang]}</code>
                </pre>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '1rem 1.5rem',
              borderTop: '1px solid #334155',
              background: '#0f172a',
              display: 'flex',
              justifyContent: 'flex-end',
              borderBottomLeftRadius: '16px',
              borderBottomRightRadius: '16px'
            }}>
              <button
                onClick={() => setShowSolutionModal(false)}
                style={{
                  padding: '8px 18px',
                  background: '#334155',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
