// src/pages/MockTestExamPage.jsx
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Flag,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  TrendingUp,
  X,
  Check,
  Target,
  Award,
  AlertCircle,
  Home,
  BookOpen,
  Copy,
  Table,
  Code2,
  FileSpreadsheet,
  FileText,
  Grid,
  Eraser,
  Bookmark
} from 'lucide-react';
import { getMockTestById, saveMockResult, getMockResult } from '../data/mockTests/mockTestsConfig.js';
import SEO from '../components/SEO.jsx';

function FormattedCodeSnippet({ code, language = 'Code' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!code) return null;

  return (
    <div
      style={{
        margin: '1.25rem 0',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        background: '#090d16',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)'
      }}
    >
      {/* IDE Top Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 14px',
          background: 'rgba(15, 23, 42, 0.95)',
          borderBottom: '1px solid rgba(56, 189, 248, 0.15)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.04em', textTransform: 'uppercase', marginLeft: '6px' }}>
            {language} Snippet
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            padding: '3px 9px',
            borderRadius: '6px',
            background: copied ? 'rgba(16, 185, 129, 0.2)' : 'rgba(30, 41, 59, 0.8)',
            border: copied ? '1px solid #10b981' : '1px solid #334155',
            color: copied ? '#34d399' : '#94a3b8',
            fontSize: '0.72rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          title="Copy code snippet"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          <span>{copied ? 'Copied!' : 'Copy Code'}</span>
        </button>
      </div>

      {/* Code Body with JetBrains Mono font & preserved indentation */}
      <pre
        style={{
          margin: 0,
          padding: '14px 18px',
          overflowX: 'auto',
          fontFamily: '"JetBrains Mono", "Fira Code", Menlo, Monaco, Consolas, monospace',
          fontSize: '0.88rem',
          lineHeight: '1.65',
          color: '#e2e8f0',
          tabSize: 4,
          whiteSpace: 'pre',
          background: 'transparent'
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

function FormattedDataTable({ data }) {
  if (!data || !data.columns || !data.rows) return null;

  return (
    <div
      style={{
        margin: '1.25rem 0',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        background: 'rgba(15, 23, 42, 0.95)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
          background: 'rgba(30, 41, 59, 0.8)',
          borderBottom: '1px solid rgba(56, 189, 248, 0.15)',
          fontSize: '0.75rem',
          fontWeight: 700,
          color: '#38bdf8',
          letterSpacing: '0.04em',
          textTransform: 'uppercase'
        }}
      >
        <Table size={14} />
        <span>Reference Dataset / Table</span>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            fontSize: '0.86rem',
            color: '#cbd5e1'
          }}
        >
          <thead>
            <tr style={{ background: 'rgba(30, 41, 59, 0.95)', borderBottom: '1px solid #334155' }}>
              {data.columns.map((col, idx) => (
                <th
                  key={idx}
                  style={{
                    padding: '10px 14px',
                    fontWeight: 700,
                    color: '#f8fafc',
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                style={{
                  background: rIdx % 2 === 0 ? 'rgba(15, 23, 42, 0.4)' : 'rgba(30, 41, 59, 0.25)',
                  borderBottom: '1px solid rgba(51, 65, 85, 0.4)',
                  transition: 'background 0.15s ease'
                }}
              >
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    style={{
                      padding: '9px 14px',
                      whiteSpace: 'nowrap',
                      color: typeof cell === 'number' ? '#38bdf8' : '#e2e8f0',
                      fontFamily: typeof cell === 'number' ? 'monospace' : 'inherit'
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ShapePreviewCard({ preview }) {
  if (!preview) return null;

  return (
    <div
      style={{
        margin: '1.25rem 0',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(245, 158, 11, 0.35)',
        background: 'rgba(15, 23, 42, 0.95)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
          background: 'rgba(30, 41, 59, 0.85)',
          borderBottom: '1px solid rgba(245, 158, 11, 0.2)',
          fontSize: '0.75rem',
          fontWeight: 700,
          color: '#fbbf24',
          letterSpacing: '0.04em',
          textTransform: 'uppercase'
        }}
      >
        <Sparkles size={14} />
        <span>{preview.title || 'Target CSS Shape Diagram'}</span>
      </div>

      <div
        style={{
          padding: '24px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at center, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%)'
        }}
      >
        <div style={preview.style || {}} />
      </div>
    </div>
  );
}

function OptionContent({ text }) {
  if (!text) return null;

  // Auto-detect if text looks like code, SQL, OOP, array, or CSS
  const isCode = useMemo(() => {
    if (typeof text !== 'string') return false;
    if (text.includes('\n')) return true;
    if (text.includes('border-radius:') || text.includes('clip-shape:')) return true;
    if (/\b(SELECT|FROM|WHERE|LEFT JOIN|RIGHT JOIN|INNER JOIN|FULL JOIN)\b/i.test(text)) return true;
    if (/\b(class|interface|extends|implements|public static void)\b/.test(text)) return true;
    if (/ARRAY\s+\w+\[/.test(text) || /\bPRINT\s+\w+\[/.test(text)) return true;
    return false;
  }, [text]);

  if (!isCode) {
    return <span style={{ fontSize: '0.92rem', lineHeight: 1.55 }}>{text}</span>;
  }

  return (
    <pre
      style={{
        margin: '2px 0',
        padding: '8px 12px',
        borderRadius: '6px',
        background: 'rgba(9, 13, 22, 0.85)',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        fontFamily: '"JetBrains Mono", "Fira Code", Menlo, Consolas, monospace',
        fontSize: '0.84rem',
        lineHeight: 1.55,
        color: '#f1f5f9',
        whiteSpace: 'pre-wrap',
        tabSize: 4,
        overflowX: 'auto',
        wordBreak: 'break-word',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <code>{text}</code>
    </pre>
  );
}

const formatClock = (seconds) => {
  const safe = Math.max(0, seconds);
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

const formatTimeTaken = (seconds) => {
  const safe = Math.max(0, seconds);
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  if (m === 0) return `${s}s`;
  return `${m}m ${s}s`;
};

export default function MockTestExamPage({ theme = 'dark' }) {
  const { testId = '1' } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const mockTest = useMemo(() => getMockTestById(testId), [testId]);
  const questions = mockTest.questions || [];
  const totalDurationSeconds = useMemo(() => {
    return (mockTest.durationMinutes || questions.length || 45) * 60;
  }, [mockTest.durationMinutes, questions.length]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [markedQuestions, setMarkedQuestions] = useState({});
  const [visitedQuestions, setVisitedQuestions] = useState({ 0: true });

  const [timeRemaining, setTimeRemaining] = useState(totalDurationSeconds);
  const [timeTakenSeconds, setTimeTakenSeconds] = useState(0);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const timerRef = useRef(null);

  // Check if viewing previous result directly
  useEffect(() => {
    if (searchParams.get('view') === 'result') {
      const saved = getMockResult(testId);
      if (saved && saved.userAnswers) {
        setUserAnswers(saved.userAnswers);
        setTimeTakenSeconds(saved.timeTakenSeconds || 0);
        setIsSubmitted(true);
      }
    }
  }, [testId, searchParams]);

  // Reset exam on testId change
  useEffect(() => {
    if (searchParams.get('view') !== 'result') {
      setUserAnswers({});
      setMarkedQuestions({});
      setVisitedQuestions({ 0: true });
      setCurrentIndex(0);
      setTimeRemaining(totalDurationSeconds);
      setTimeTakenSeconds(0);
      setIsTimerPaused(false);
      setIsSubmitted(false);
      setShowSubmitModal(false);
    }
  }, [testId, totalDurationSeconds]);

  // Mark current index visited
  useEffect(() => {
    setVisitedQuestions((prev) => (prev[currentIndex] ? prev : { ...prev, [currentIndex]: true }));
  }, [currentIndex]);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted || isTimerPaused) return;

    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleFinalSubmit();
          return 0;
        }
        return prev - 1;
      });
      setTimeTakenSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isSubmitted, isTimerPaused]);

  // Calculate analytics
  const analytics = useMemo(() => {
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;
    const topicStats = {};

    questions.forEach((q) => {
      const userChoice = userAnswers[q.id];
      const isCorrect = userChoice && String(userChoice).toUpperCase() === String(q.correctAnswer).toUpperCase();
      const isUnattempted = !userChoice;

      if (isUnattempted) {
        unattemptedCount += 1;
      } else if (isCorrect) {
        correctCount += 1;
      } else {
        incorrectCount += 1;
      }

      const tKey = q.topic || 'General';
      if (!topicStats[tKey]) {
        topicStats[tKey] = { total: 0, correct: 0, incorrect: 0, unattempted: 0 };
      }
      topicStats[tKey].total += 1;
      if (isCorrect) topicStats[tKey].correct += 1;
      else if (isUnattempted) topicStats[tKey].unattempted += 1;
      else topicStats[tKey].incorrect += 1;
    });

    const total = questions.length || 45;
    const percentage = Math.round((correctCount / total) * 100);

    let grade = {
      title: 'Foundational Review Needed',
      badge: 'Needs Improvement',
      color: '#ef4444'
    };
    if (percentage >= 80) {
      grade = {
        title: 'Outstanding Performance! Ready for Accenture',
        badge: 'High Hiring Probability',
        color: '#10b981'
      };
    } else if (percentage >= 65) {
      grade = {
        title: 'Good Performance — Near Accenture Cutoff',
        badge: 'Clearing Probability ~75%',
        color: '#38bdf8'
      };
    } else if (percentage >= 50) {
      grade = {
        title: 'Average Performance — Target Revision Areas',
        badge: 'Moderate Readiness',
        color: '#f59e0b'
      };
    }

    return {
      score: correctCount,
      total,
      percentage,
      correctCount,
      incorrectCount,
      unattemptedCount,
      grade,
      topicStats
    };
  }, [questions, userAnswers]);

  const handleFinalSubmit = useCallback(() => {
    setIsSubmitted(true);
    setIsTimerPaused(true);
    setShowSubmitModal(false);
    saveMockResult(testId, {
      testId: parseInt(testId, 10),
      score: analytics.score,
      total: analytics.total,
      percentage: analytics.percentage,
      timeTakenSeconds,
      userAnswers
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [testId, analytics, timeTakenSeconds, userAnswers]);

  const currentQuestion = questions[currentIndex] || questions[0];
  const answeredCount = Object.keys(userAnswers).length;
  const markedCount = Object.keys(markedQuestions).length;
  const progressPercent = Math.round((answeredCount / (questions.length || 1)) * 100);

  const handleSelectOption = (optionId) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  const handleClearResponse = () => {
    if (isSubmitted) return;
    setUserAnswers((prev) => {
      const next = { ...prev };
      delete next[currentQuestion.id];
      return next;
    });
  };

  const handleToggleMark = () => {
    if (isSubmitted) return;
    setMarkedQuestions((prev) => {
      const next = { ...prev };
      if (next[currentQuestion.id]) delete next[currentQuestion.id];
      else next[currentQuestion.id] = true;
      return next;
    });
  };

  const handleResetAssessment = () => {
    setUserAnswers({});
    setMarkedQuestions({});
    setVisitedQuestions({ 0: true });
    setCurrentIndex(0);
    setTimeRemaining(totalDurationSeconds);
    setTimeTakenSeconds(0);
    setIsTimerPaused(false);
    setIsSubmitted(false);
    setShowSubmitModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetakeMissed = () => {
    const nextAnswers = { ...userAnswers };
    let firstMissed = -1;
    questions.forEach((q, idx) => {
      if (String(nextAnswers[q.id]).toUpperCase() !== String(q.correctAnswer).toUpperCase()) {
        delete nextAnswers[q.id];
        if (firstMissed === -1) firstMissed = idx;
      }
    });
    setUserAnswers(nextAnswers);
    setIsSubmitted(false);
    setIsTimerPaused(false);
    if (firstMissed !== -1) setCurrentIndex(firstMissed);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="cloud-assessment-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.25rem 1rem 4rem 1rem' }}>
      <SEO
        title={`${mockTest.title} (${questions.length} Mins • ${questions.length} Questions • ${questions.length} Marks)`}
        description={`Accenture Mock Test ${testId} - Timed ${questions.length}-minute simulation with ${questions.length} questions and 1 mark per question. Complete post-test evaluation and explanations.`}
        path={`/mock-test/${testId}`}
      />

      {/* ================= CLOUD-STYLE QUIZ HEADER (Clean, Real Mock Details Only) ================= */}
      <header className="cloud-quiz-header">
        <div className="cloud-header-top">
          <div className="cloud-brand">
            <div className="cloud-brand-icon">
              <FileSpreadsheet size={24} />
            </div>
            <div>
              <div className="cloud-tag-row">
                <span className="cloud-badge cloud-badge-primary">
                  {mockTest.badge || `Mock Test ${testId}`}
                </span>
                <span className="cloud-badge cloud-badge-secondary">
                  {questions.length} Questions
                </span>
                <span
                  className="cloud-badge"
                  style={{
                    background: 'rgba(56, 189, 248, 0.15)',
                    color: '#38bdf8',
                    borderColor: 'rgba(56, 189, 248, 0.3)'
                  }}
                >
                  ⏱️ {questions.length} Mins (1 min / Q)
                </span>
                <span
                  className="cloud-badge"
                  style={{
                    background: 'rgba(245, 158, 11, 0.15)',
                    color: '#fbbf24',
                    borderColor: 'rgba(245, 158, 11, 0.3)'
                  }}
                >
                  🏆 {questions.length} Marks (+1 Mark / Q)
                </span>
                <span
                  className="cloud-badge"
                  style={{
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#34d399',
                    borderColor: 'rgba(16, 185, 129, 0.3)'
                  }}
                >
                  Accenture Standard
                </span>
              </div>
              <h1 className="cloud-title">{mockTest.title}</h1>
            </div>
          </div>

          <div className="cloud-header-actions">
            <Link
              to="/mock-test"
              className="cloud-btn cloud-btn-ghost"
              style={{ textDecoration: 'none' }}
              title="View All Mock Tests"
            >
              <ChevronLeft size={16} />
              <span>All Tests</span>
            </Link>

            <button
              type="button"
              onClick={handleResetAssessment}
              className="cloud-btn cloud-btn-ghost"
              title="Reset Test"
            >
              <RotateCcw size={16} />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Status & Progress Bar (Completed count, progress track, timer, marked counter) */}
        <div className="cloud-status-bar">
          <div className="cloud-progress-group">
            <span className="cloud-progress-label">
              Completed: <strong>{answeredCount}</strong> / {questions.length} ({progressPercent}%)
            </span>
            <div className="cloud-progress-track">
              <div
                className="cloud-progress-fill"
                style={{ width: `${progressPercent}%` }}
                role="progressbar"
                aria-valuenow={progressPercent}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>

          <div className="cloud-status-right">
            {!isSubmitted && (
              <div
                className={`cloud-timer-pill ${timeRemaining < 300 ? 'timer-warning' : ''}`}
                title={`1 minute per question — ${questions.length} minutes total`}
              >
                <Clock size={16} />
                <span className="cloud-timer-digits">
                  {formatClock(timeRemaining)}
                </span>
                <button
                  type="button"
                  onClick={() => setIsTimerPaused((v) => !v)}
                  className="cloud-timer-pause-btn"
                  title={isTimerPaused ? 'Resume Timer' : 'Pause Timer'}
                >
                  {isTimerPaused ? '▶' : '⏸'}
                </button>
              </div>
            )}

            <div className="cloud-bookmark-pill">
              <Flag size={15} />
              <span>{markedCount} Marked for Review</span>
            </div>
          </div>
        </div>
      </header>

      {/* ================= POST-SUBMISSION COMPREHENSIVE RESULT VIEW ================= */}
      {isSubmitted ? (
        <div>
          {/* Result Score Card */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.85) 100%)',
              border: `1px solid ${analytics.grade.color}55`,
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '1.5rem',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}
          >
            <div style={{ maxWidth: '600px' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '6px',
                  background: `${analytics.grade.color}25`,
                  color: analytics.grade.color,
                  border: `1px solid ${analytics.grade.color}50`,
                  display: 'inline-block',
                  marginBottom: '0.75rem'
                }}
              >
                {analytics.grade.badge}
              </span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
                {analytics.grade.title}
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>
                You scored <strong>{analytics.score} / {questions.length} Marks ({analytics.percentage}%)</strong> in <strong>{formatTimeTaken(timeTakenSeconds)}</strong>.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={handleRetakeMissed}
                style={{
                  padding: '0.75rem 1.25rem',
                  borderRadius: '8px',
                  background: 'rgba(30, 41, 59, 0.9)',
                  border: '1px solid #334155',
                  color: '#f8fafc',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <RotateCcw size={15} />
                <span>Retake Missed ({analytics.incorrectCount + analytics.unattemptedCount})</span>
              </button>

              <button
                type="button"
                onClick={handleResetAssessment}
                style={{
                  padding: '0.75rem 1.25rem',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 14px rgba(2, 132, 199, 0.4)'
                }}
              >
                <RotateCcw size={15} />
                <span>Retake Full Test</span>
              </button>

              <Link
                to="/mock-test"
                style={{
                  padding: '0.75rem 1.25rem',
                  borderRadius: '8px',
                  background: 'rgba(30, 41, 59, 0.9)',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  color: '#38bdf8',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>All 5 Tests</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Metrics Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}
          >
            <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid #334155', borderRadius: '12px', padding: '1.25rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>Total Score</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38bdf8', margin: '4px 0' }}>
                {analytics.score} / {questions.length}
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{analytics.percentage}% accuracy (1 mark each)</span>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid #334155', borderRadius: '12px', padding: '1.25rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>Correct Answers</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981', margin: '4px 0' }}>
                {analytics.correctCount}
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>+{analytics.correctCount} Marks earned</span>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid #334155', borderRadius: '12px', padding: '1.25rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>Incorrect Answers</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ef4444', margin: '4px 0' }}>
                {analytics.incorrectCount}
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>0 Marks deducted (No Negative)</span>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid #334155', borderRadius: '12px', padding: '1.25rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>Unattempted</span>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#94a3b8', margin: '4px 0' }}>
                {analytics.unattemptedCount}
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Skipped questions</span>
            </div>
          </div>

          {/* Topic-Wise Accuracy Breakdown */}
          <div
            style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid #334155',
              borderRadius: '14px',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <TrendingUp size={18} className="text-sky-400" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                Topic Accuracy Breakdown
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {Object.entries(analytics.topicStats).map(([topicName, stat]) => {
                const topicPct = Math.round((stat.correct / stat.total) * 100) || 0;
                return (
                  <div
                    key={topicName}
                    style={{
                      background: 'rgba(30, 41, 59, 0.6)',
                      border: '1px solid #334155',
                      borderRadius: '10px',
                      padding: '1rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>{topicName}</span>
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: topicPct >= 70 ? '#10b981' : '#f59e0b' }}>
                        {stat.correct}/{stat.total} ({topicPct}%)
                      </span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: '#1e293b', borderRadius: '3px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${topicPct}%`,
                          height: '100%',
                          background: topicPct >= 70 ? '#10b981' : topicPct >= 40 ? '#38bdf8' : '#ef4444',
                          borderRadius: '3px',
                          transition: 'width 0.4s ease'
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Full Question-by-Question Solutions Review */}
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
              Complete Solutions & Explanations (All {questions.length} Questions)
            </h3>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
              Review correct answers, your submitted response, and full technical explanations.
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {questions.map((q, idx) => {
              const userChoice = userAnswers[q.id];
              const isCorrect = userChoice && String(userChoice).toUpperCase() === String(q.correctAnswer).toUpperCase();
              const isUnattempted = !userChoice;

              return (
                <div
                  key={q.id}
                  style={{
                    background: 'rgba(15, 23, 42, 0.85)',
                    border: isCorrect
                      ? '1px solid rgba(16, 185, 129, 0.4)'
                      : isUnattempted
                      ? '1px solid #334155'
                      : '1px solid rgba(239, 68, 68, 0.4)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
                  }}
                >
                  {/* Question header row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f8fafc', background: '#1e293b', padding: '2px 8px', borderRadius: '4px', border: '1px solid #334155' }}>
                        Q{idx + 1}
                      </span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>
                        {q.topic}
                      </span>
                      {q.subtopic && (
                        <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                          • {q.subtopic}
                        </span>
                      )}
                    </div>

                    <div>
                      {isCorrect && (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#10b981', fontSize: '0.85rem', fontWeight: 700 }}>
                          <CheckCircle2 size={16} /> Correct (+1 Mark)
                        </span>
                      )}
                      {!isCorrect && !isUnattempted && (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#ef4444', fontSize: '0.85rem', fontWeight: 700 }}>
                          <XCircle size={16} /> Incorrect (0 Marks)
                        </span>
                      )}
                      {isUnattempted && (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 700 }}>
                          <HelpCircle size={16} /> Unattempted
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Question Prompt */}
                  <div style={{ fontSize: '1rem', color: '#f8fafc', fontWeight: 600, lineHeight: 1.6, marginBottom: '0.75rem' }}>
                    {q.question}
                  </div>

                  {/* Code snippet if present */}
                  {q.code && (
                    <FormattedCodeSnippet code={q.code} language={q.topic || 'Code'} />
                  )}

                  {/* Data table if present */}
                  {q.data && (
                    <FormattedDataTable data={q.data} />
                  )}

                  {/* Shape preview diagram if present */}
                  {q.shapePreview && (
                    <ShapePreviewCard preview={q.shapePreview} />
                  )}

                  {/* Options */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1rem' }}>
                    {q.options.map((opt) => {
                      const isThisCorrect = String(opt.id).toUpperCase() === String(q.correctAnswer).toUpperCase();
                      const isSelected = String(opt.id).toUpperCase() === String(userChoice).toUpperCase();

                      let optBg = 'rgba(30, 41, 59, 0.5)';
                      let optBorder = 'rgba(51, 65, 85, 0.6)';
                      let optColor = '#cbd5e1';

                      if (isThisCorrect) {
                        optBg = 'rgba(16, 185, 129, 0.18)';
                        optBorder = '#10b981';
                        optColor = '#34d399';
                      } else if (isSelected && !isThisCorrect) {
                        optBg = 'rgba(239, 68, 68, 0.18)';
                        optBorder = '#ef4444';
                        optColor = '#fca5a5';
                      }

                      const specificExplanation = q.optionExplanations && (
                        q.optionExplanations[opt.text] ||
                        q.optionExplanations[opt.id] ||
                        (typeof opt.text === 'string' && q.optionExplanations[opt.text.trim()])
                      );

                      return (
                        <div
                          key={opt.id}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                            padding: '10px 14px',
                            borderRadius: '8px',
                            background: optBg,
                            border: `1px solid ${optBorder}`,
                            color: optColor,
                            fontSize: '0.9rem'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', flex: 1, minWidth: 0 }}>
                              <span
                                style={{
                                  width: '24px',
                                  height: '24px',
                                  borderRadius: '50%',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '0.75rem',
                                  fontWeight: 700,
                                  background: isThisCorrect ? '#10b981' : isSelected ? '#ef4444' : '#1e293b',
                                  color: '#ffffff',
                                  flexShrink: 0,
                                  marginTop: '2px'
                                }}
                              >
                                {opt.id}
                              </span>
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <OptionContent text={opt.text} />
                              </div>
                            </div>

                            <div style={{ flexShrink: 0 }}>
                              {isThisCorrect && (
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                  <Check size={14} /> Correct Answer
                                </span>
                              )}
                              {isSelected && !isThisCorrect && (
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                  <X size={14} /> Your Choice
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Specific Option Explanation if available */}
                          {specificExplanation && (
                            <div
                              style={{
                                marginTop: '4px',
                                paddingLeft: '34px',
                                fontSize: '0.8rem',
                                lineHeight: 1.45,
                                color: isThisCorrect ? '#86efac' : isSelected ? '#fca5a5' : '#94a3b8'
                              }}
                            >
                              {specificExplanation}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Card */}
                  {q.explanation && (
                    <div
                      style={{
                        padding: '12px 14px',
                        borderRadius: '8px',
                        background: 'rgba(30, 41, 59, 0.7)',
                        border: '1px solid #334155',
                        fontSize: '0.88rem',
                        lineHeight: 1.6,
                        color: '#cbd5e1'
                      }}
                    >
                      <strong style={{ color: '#38bdf8', display: 'block', marginBottom: '4px' }}>
                        Explanation:
                      </strong>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* ================= TWO-COLUMN LIVE EXAM WORKSPACE (Matching Layout Exactly) ================= */
        <div className="cloud-workspace-layout">
          {/* ---------- Left Column: Question Card ---------- */}
          <main className="cloud-question-column">
            <article className="cloud-card">
              {/* Meta row */}
              <div className="cloud-card-meta">
                <div className="cloud-meta-left">
                  <span className="cloud-qnumber">
                    Question <strong>{currentIndex + 1}</strong> of {questions.length}
                  </span>
                  <span className="cloud-badge cloud-badge-tier">
                    {currentQuestion.topic}
                  </span>
                  {currentQuestion.subtopic && (
                    <span className="cloud-badge cloud-badge-secondary">
                      {currentQuestion.subtopic}
                    </span>
                  )}
                  <span
                    className="cloud-badge"
                    style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#34d399',
                      borderColor: 'rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    +1 Mark
                  </span>
                  {markedQuestions[currentQuestion.id] && (
                    <span
                      className="cloud-badge"
                      style={{
                        background: 'rgba(245, 158, 11, 0.15)',
                        color: '#fbbf24',
                        borderColor: 'rgba(245, 158, 11, 0.35)'
                      }}
                    >
                      <Flag size={12} /> Marked
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleToggleMark}
                  className={`cloud-bookmark-btn ${markedQuestions[currentQuestion.id] ? 'active' : ''}`}
                  title={markedQuestions[currentQuestion.id] ? 'Remove from review' : 'Mark for Review'}
                >
                  <Flag size={15} fill={markedQuestions[currentQuestion.id] ? 'currentColor' : 'none'} />
                  <span>{markedQuestions[currentQuestion.id] ? 'Marked' : 'Mark for Review'}</span>
                </button>
              </div>

              {/* Question prompt */}
              <h2 className="cloud-question-text">{currentQuestion.question}</h2>

              {/* Code snippet if present */}
              {currentQuestion.code && (
                <FormattedCodeSnippet code={currentQuestion.code} language={currentQuestion.topic || 'Code'} />
              )}

              {/* Data table if present */}
              {currentQuestion.data && (
                <FormattedDataTable data={currentQuestion.data} />
              )}

              {/* Shape preview diagram if present */}
              {currentQuestion.shapePreview && (
                <ShapePreviewCard preview={currentQuestion.shapePreview} />
              )}

              {/* Options */}
              <div className="cloud-options-grid" role="radiogroup" aria-label="Answer Options">
                {currentQuestion.options.map((option) => {
                  const isSelected = String(userAnswers[currentQuestion.id]).toUpperCase() === String(option.id).toUpperCase();
                  let optionStyle = 'cloud-option-item';
                  if (isSelected) optionStyle += ' cloud-option-selected';

                  return (
                    <button
                      key={option.id}
                      type="button"
                      className={optionStyle}
                      onClick={() => handleSelectOption(option.id)}
                      aria-checked={isSelected}
                      role="radio"
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        textAlign: 'left'
                      }}
                    >
                      <div className="cloud-option-letter-badge" style={{ marginTop: '2px' }}>
                        {option.id}
                      </div>
                      <div className="cloud-option-text-wrap" style={{ flex: 1, minWidth: 0 }}>
                        <OptionContent text={option.text} />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* In-card Action Bar */}
              <div className="cloud-card-actions">
                <div className="cloud-actions-left">
                  {userAnswers[currentQuestion.id] && (
                    <button
                      type="button"
                      onClick={handleClearResponse}
                      className="cloud-btn-clear"
                      title="Clear selected option"
                    >
                      <Eraser size={14} /> Clear Response
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleToggleMark}
                    className={`cloud-btn-hint ${markedQuestions[currentQuestion.id] ? 'cloud-marked-active' : ''}`}
                    title={markedQuestions[currentQuestion.id] ? 'Remove review mark' : 'Mark for Review'}
                    style={
                      markedQuestions[currentQuestion.id]
                        ? {
                            background: '#f59e0b',
                            color: '#1f2937',
                            borderColor: '#f59e0b'
                          }
                        : undefined
                    }
                  >
                    <Flag size={14} />
                    {markedQuestions[currentQuestion.id] ? 'Marked for Review' : 'Mark for Review'}
                  </button>
                </div>

                <div className="cloud-nav-buttons">
                  <button
                    type="button"
                    className="cloud-btn cloud-btn-secondary"
                    onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                  >
                    <ChevronLeft size={16} />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    className="cloud-btn cloud-btn-primary"
                    onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                    disabled={currentIndex === questions.length - 1}
                  >
                    <span>Next</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          </main>

          {/* ---------- Right Column: Question Navigator ---------- */}
          <div className="cloud-palette-column">
            <aside className="cloud-palette-card">
              <div className="cloud-palette-header">
                <div className="cloud-palette-title">
                  <Grid size={18} />
                  <span>Question Navigator</span>
                </div>
                <span className="cloud-palette-summary">
                  {answeredCount}/{questions.length}
                </span>
              </div>

              {/* Legend (Current / Answered / Marked / Unanswered) */}
              <div className="cloud-palette-legend" style={{ marginBottom: '1rem' }}>
                <div className="cloud-legend-item">
                  <span className="cloud-legend-dot dot-current" />
                  <span>Current</span>
                </div>
                <div className="cloud-legend-item">
                  <span className="cloud-legend-dot dot-answered" />
                  <span>Answered</span>
                </div>
                <div className="cloud-legend-item">
                  <span className="cloud-legend-dot dot-marked" />
                  <span>Marked</span>
                </div>
                <div className="cloud-legend-item">
                  <span className="cloud-legend-dot dot-unanswered" />
                  <span>Unanswered</span>
                </div>
              </div>

              {/* Numbered grid 1..N with status colors */}
              <div className="cloud-palette-grid">
                {questions.map((q, idx) => {
                  const isAnswered = Boolean(userAnswers[q.id]);
                  const isMarked = Boolean(markedQuestions[q.id]);
                  const isCurrent = idx === currentIndex;
                  let btnClass = 'cloud-palette-btn';
                  if (isCurrent) btnClass += ' current';
                  if (isAnswered) btnClass += ' answered';
                  if (isMarked) btnClass += ' marked';

                  return (
                    <button
                      key={q.id}
                      type="button"
                      className={btnClass}
                      onClick={() => setCurrentIndex(idx)}
                      title={`Question ${idx + 1}`}
                    >
                      <span>{idx + 1}</span>
                      {isMarked && <span className="cloud-palette-marker" />}
                    </button>
                  );
                })}
              </div>

              {/* Submit & View Analysis button */}
              <div className="cloud-palette-footer">
                <button
                  type="button"
                  className="cloud-submit-btn"
                  onClick={() => setShowSubmitModal(true)}
                >
                  <Award size={16} />
                  <span>Submit & View Analysis</span>
                </button>
              </div>
            </aside>
          </div>
        </div>
      )}

      {/* ================= Submit Confirmation Modal ================= */}
      {showSubmitModal && (
        <div
          className="cloud-modal-overlay"
          onClick={() => setShowSubmitModal(false)}
        >
          <div
            className="cloud-analysis-modal"
            style={{ maxWidth: 460 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cloud-analysis-header">
              <div className="cloud-analysis-title-group">
                <div className="cloud-analysis-badge">
                  <CheckCircle2 size={16} />
                  <span>Ready to Submit?</span>
                </div>
                <h3 className="cloud-analysis-title" style={{ fontSize: '1.25rem' }}>
                  {mockTest.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="cloud-modal-close"
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ padding: '1rem', background: 'rgba(30, 41, 59, 0.6)', border: '1px solid #334155', borderRadius: '10px', margin: '1rem 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.85rem' }}>
              <div>
                <span style={{ color: '#94a3b8' }}>Answered:</span>{' '}
                <strong style={{ color: '#10b981' }}>{answeredCount}</strong>
              </div>
              <div>
                <span style={{ color: '#94a3b8' }}>Unanswered:</span>{' '}
                <strong style={{ color: '#ef4444' }}>{questions.length - answeredCount}</strong>
              </div>
              <div>
                <span style={{ color: '#94a3b8' }}>Marked:</span>{' '}
                <strong style={{ color: '#c084fc' }}>{markedCount}</strong>
              </div>
              <div>
                <span style={{ color: '#94a3b8' }}>Time Left:</span>{' '}
                <strong style={{ color: '#38bdf8' }}>{formatClock(timeRemaining)}</strong>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.5, margin: '0 0 1.5rem 0' }}>
              Once submitted, your final score out of <strong>{questions.length} Marks</strong> and complete technical explanations will be generated immediately.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="cloud-btn cloud-btn-secondary"
                style={{ flex: 1 }}
              >
                Continue Test
              </button>
              <button
                type="button"
                onClick={handleFinalSubmit}
                className="cloud-btn cloud-btn-primary"
                style={{ flex: 1 }}
              >
                <Award size={15} />
                <span>Yes, Submit Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
