// src/pages/TechnicalAssessmentPage.jsx
/**
 * Accenture 45-Question Technical MCQ Assessment Page
 *
 * Implements the exact 45-question distribution exclusively from existing
 * Accenture PYQs across Pseudocode, Networking, Security & Cloud, and MS Office.
 *
 * Features:
 *  - Set 1 & Set 2 with 0 overlapping questions
 *  - 45-minute countdown timer
 *  - Interactive 1–45 palette with status indicators (Answered, Marked, Current, Unvisited)
 *  - Submission confirmation modal
 *  - Complete Post-Submission Analytics:
 *      • Overall Score, Percentage, Correct/Incorrect/Unattempted counts
 *      • Main Topic performance (Pseudocode 14, Networking 10, Security & Cloud 14, MS Office 7)
 *      • Hierarchical Subtopic Performance Breakdown (e.g. OSI & TCP/IP: 1/2)
 *      • Full question review with original PYQ explanations
 *      • Retake Missed / Retake Full Paper / Switch Set
 */

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Award,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  HelpCircle,
  Flag,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Sparkles,
  Layers,
  FileSpreadsheet,
  Zap,
  ShieldCheck,
  Network,
  Cpu,
  ArrowRight,
  TrendingUp,
  X,
  Check
} from 'lucide-react';
import {
  getTechnicalMcqSet,
  calculateAssessmentAnalytics,
  TECHNICAL_MAIN_TOPICS,
  TECHNICAL_DISTRIBUTION
} from '../services/technicalMcqEngine.js';
import SEO from '../components/SEO.jsx';
import BeautifiedExplanation from '../components/BeautifiedExplanation.jsx';
import '../styles/technicalAssessment.css';

const EXAM_DURATION_SECONDS = 45 * 60; // 45 minutes

const formatClock = (seconds) => {
  const safe = Math.max(0, seconds);
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

const formatTimeTaken = (totalSeconds) => {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  if (mins === 0) return `${secs}s`;
  return `${mins}m ${secs}s`;
};

export default function TechnicalAssessmentPage({ theme = 'dark' }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawSetParam = searchParams.get('set');
  const setNumber = rawSetParam === '2' ? 2 : 1;

  // Load the 45 questions for this set (memoized in engine with 0 overlap)
  const questions = useMemo(() => {
    return getTechnicalMcqSet(setNumber);
  }, [setNumber]);

  // Quiz State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [markedQuestions, setMarkedQuestions] = useState({});
  const [visitedQuestions, setVisitedQuestions] = useState({ 0: true });
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('tech-mcq-bookmarks') || '[]');
    } catch {
      return [];
    }
  });

  // Timer state
  const [timeRemaining, setTimeRemaining] = useState(EXAM_DURATION_SECONDS);
  const [timeTakenSeconds, setTimeTakenSeconds] = useState(0);
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  // Modal / Results state
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [paletteFilter, setPaletteFilter] = useState('all'); // 'all' | 'answered' | 'marked' | 'left'
  const timerRef = useRef(null);

  // Reset when switching sets
  useEffect(() => {
    setCurrentIndex(0);
    setUserAnswers({});
    setMarkedQuestions({});
    setVisitedQuestions({ 0: true });
    setTimeRemaining(EXAM_DURATION_SECONDS);
    setTimeTakenSeconds(0);
    setIsTimerPaused(false);
    setIsSubmitted(false);
    setShowSubmitModal(false);
  }, [setNumber]);

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
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
      setTimeTakenSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isSubmitted, isTimerPaused]);

  // Current Question
  const currentQuestion = questions[currentIndex] || questions[0];

  // Derived counts
  const answeredCount = Object.keys(userAnswers).length;
  const markedCount = Object.keys(markedQuestions).length;

  // Handle Option Selection
  const handleSelectOption = (optionId) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  // Clear Selection
  const handleClearResponse = () => {
    if (isSubmitted) return;
    setUserAnswers((prev) => {
      const next = { ...prev };
      delete next[currentQuestion.id];
      return next;
    });
  };

  // Toggle Mark for Review
  const handleToggleMark = () => {
    if (isSubmitted) return;
    setMarkedQuestions((prev) => {
      const next = { ...prev };
      if (next[currentQuestion.id]) {
        delete next[currentQuestion.id];
      } else {
        next[currentQuestion.id] = true;
      }
      return next;
    });
  };

  // Toggle Bookmark
  const handleToggleBookmark = () => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(currentQuestion.id)
        ? prev.filter((id) => id !== currentQuestion.id)
        : [...prev, currentQuestion.id];
      localStorage.setItem('tech-mcq-bookmarks', JSON.stringify(next));
      return next;
    });
  };

  // Navigation
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleJumpToIndex = (idx) => {
    if (idx >= 0 && idx < questions.length) {
      setCurrentIndex(idx);
    }
  };

  // Final submission
  const handleSubmitAssessment = () => {
    setShowSubmitModal(false);
    setIsSubmitted(true);
    setIsTimerPaused(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset Full Assessment
  const handleResetAssessment = () => {
    setUserAnswers({});
    setMarkedQuestions({});
    setVisitedQuestions({ 0: true });
    setCurrentIndex(0);
    setTimeRemaining(EXAM_DURATION_SECONDS);
    setTimeTakenSeconds(0);
    setIsTimerPaused(false);
    setIsSubmitted(false);
    setShowSubmitModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retake Missed Questions Only
  const handleRetakeMissed = () => {
    const nextAnswers = { ...userAnswers };
    let firstMissedIdx = -1;
    questions.forEach((q, idx) => {
      if (nextAnswers[q.id] !== q.correctAnswer) {
        delete nextAnswers[q.id];
        if (firstMissedIdx === -1) firstMissedIdx = idx;
      }
    });
    setUserAnswers(nextAnswers);
    setIsSubmitted(false);
    setIsTimerPaused(false);
    if (firstMissedIdx !== -1) setCurrentIndex(firstMissedIdx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Switch Set handler
  const handleSwitchSet = (targetSet) => {
    setSearchParams({ set: String(targetSet) });
  };

  // Compute analytics
  const analytics = useMemo(() => {
    return calculateAssessmentAnalytics(questions, userAnswers);
  }, [questions, userAnswers]);

  // Topic Color Mapping
  const getTopicColor = (topicId) => {
    return TECHNICAL_MAIN_TOPICS[topicId]?.color || '#38bdf8';
  };

  const getTopicTitle = (topicId) => {
    return TECHNICAL_MAIN_TOPICS[topicId]?.title || topicId;
  };

  return (
    <div className="tech-exam-container">
      <SEO
        title={`Accenture 45-Question Technical MCQ Assessment (Set ${setNumber})`}
        description="Comprehensive 45-question Accenture Technical MCQ mock assessment with exact topic quotas from official PYQs: Pseudocode (14), Networking (10), Security & Cloud (14), and MS Office (7)."
      />

      {/* ================= Sticky Header ================= */}
      <header className="tech-exam-header">
        <div className="tech-exam-header-inner">
          {/* Brand & Title */}
          <div className="tech-exam-brand">
            <div className="tech-exam-badge-icon">
              <Award size={22} />
            </div>
            <div>
              <h1 className="tech-exam-title-text">
                Accenture Technical MCQ Assessment
                <span
                  style={{
                    fontSize: '0.72rem',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: '#0284c7',
                    color: '#fff',
                    fontWeight: 700
                  }}
                >
                  SET {setNumber} • 45 Qs
                </span>
              </h1>
              <div className="tech-exam-subtext">
                100% Authentic Accenture PYQ Questions • 45 Minutes Timed Test
              </div>
            </div>
          </div>

          {/* Set Switcher */}
          <div className="tech-set-switcher">
            <button
              type="button"
              className={`tech-set-btn ${setNumber === 1 ? 'active' : ''}`}
              onClick={() => handleSwitchSet(1)}
            >
              <Sparkles size={14} />
              <span>Set 1 (45 Qs)</span>
            </button>
            <button
              type="button"
              className={`tech-set-btn ${setNumber === 2 ? 'active' : ''}`}
              onClick={() => handleSwitchSet(2)}
            >
              <Layers size={14} />
              <span>Set 2 (45 Qs)</span>
            </button>
          </div>

          {/* Controls: Timer & Progress */}
          <div className="tech-exam-controls">
            {!isSubmitted && (
              <div className={`tech-timer-chip ${timeRemaining <= 300 ? 'warning' : ''}`}>
                <Clock size={16} />
                <span>{formatClock(timeRemaining)}</span>
              </div>
            )}

            <div className="tech-progress-badge">
              <span>
                {answeredCount} / {questions.length} Answered
              </span>
            </div>

            <button
              type="button"
              className="tech-btn tech-btn-secondary"
              onClick={handleResetAssessment}
              title="Reset Assessment"
            >
              <RotateCcw size={14} />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= If Submitted: Display Rich Analytics ================= */}
      {isSubmitted ? (
        <main className="tech-results-container">
          {/* Top Score Banner */}
          <div className="tech-score-banner">
            <div className="tech-score-left">
              <div
                className="tech-score-circle"
                style={{ borderColor: analytics.grade.color, color: analytics.grade.color }}
              >
                <span className="tech-score-num">{analytics.score}</span>
                <span className="tech-score-denom">/ 45</span>
              </div>
              <div className="tech-score-info">
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '3px 8px',
                    borderRadius: '4px',
                    backgroundColor: `${analytics.grade.color}20`,
                    color: analytics.grade.color,
                    textTransform: 'uppercase'
                  }}
                >
                  {analytics.grade.badge}
                </span>
                <h2>{analytics.grade.title}</h2>
                <div className="tech-score-desc">
                  You scored <strong>{analytics.percentage}%</strong> across all 45 questions in{' '}
                  <strong>{formatTimeTaken(timeTakenSeconds)}</strong>.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="tech-btn tech-btn-secondary"
                onClick={handleRetakeMissed}
              >
                <RotateCcw size={15} />
                <span>Retake Missed ({analytics.incorrectCount + analytics.unattemptedCount})</span>
              </button>
              <button
                type="button"
                className="tech-btn tech-btn-primary"
                onClick={handleResetAssessment}
              >
                <RotateCcw size={15} />
                <span>Retake Full Set {setNumber}</span>
              </button>
              <button
                type="button"
                className="tech-btn tech-btn-secondary"
                onClick={() => handleSwitchSet(setNumber === 1 ? 2 : 1)}
                style={{ borderColor: '#38bdf8', color: '#38bdf8' }}
              >
                <ArrowRight size={15} />
                <span>Switch to Set {setNumber === 1 ? 2 : 1}</span>
              </button>
            </div>
          </div>

          {/* Overall Metrics Cards */}
          <div className="tech-metrics-grid">
            <div className="tech-metric-card">
              <span className="label">Total Score</span>
              <span className="val" style={{ color: '#38bdf8' }}>
                {analytics.score} / 45
              </span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                {analytics.percentage}% Overall Accuracy
              </span>
            </div>
            <div className="tech-metric-card">
              <span className="label">Correct Answers</span>
              <span className="val" style={{ color: '#10b981' }}>
                {analytics.correctCount}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Questions solved correctly</span>
            </div>
            <div className="tech-metric-card">
              <span className="label">Incorrect Answers</span>
              <span className="val" style={{ color: '#ef4444' }}>
                {analytics.incorrectCount}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Review solutions below</span>
            </div>
            <div className="tech-metric-card">
              <span className="label">Unattempted</span>
              <span className="val" style={{ color: '#94a3b8' }}>
                {analytics.unattemptedCount}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Skipped questions</span>
            </div>
          </div>

          {/* Main Topics Breakdown Cards (14 / 10 / 14 / 7) */}
          <div>
            <h3
              style={{
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#f8fafc',
                marginBottom: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Cpu size={18} className="text-sky-400" />
              <span>Main Topic Performance (Accenture 4-Pillar Distribution)</span>
            </h3>

            <div className="tech-main-topics-grid">
              {Object.entries(analytics.mainTopicStats).map(([topicKey, stats]) => {
                const topicMeta = TECHNICAL_MAIN_TOPICS[topicKey];
                const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                return (
                  <div key={topicKey} className="tech-topic-card">
                    <div className="tech-topic-card-header">
                      <div className="tech-topic-name">{topicMeta.shortTitle}</div>
                      <div
                        className="tech-topic-score-badge"
                        style={{
                          backgroundColor: `${topicMeta.color}20`,
                          color: topicMeta.color
                        }}
                      >
                        {stats.correct} / {stats.total} Qs ({pct}%)
                      </div>
                    </div>

                    <div className="tech-progress-bar-bg">
                      <div
                        className="tech-progress-bar-fill"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: topicMeta.color
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.75rem',
                        color: '#94a3b8'
                      }}
                    >
                      <span>{stats.correct} Correct</span>
                      <span>{stats.incorrect} Wrong</span>
                      <span>{stats.unattempted} Skipped</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hierarchical Subtopic Performance Breakdown */}
          <div className="tech-subtopic-tree-card">
            <div className="tech-subtopic-tree-title">
              <TrendingUp size={20} className="text-indigo-400" />
              <span>Subtopic Accuracy Breakdown</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0 }}>
              Performance breakdown for all subtopics tested in this attempt based on your selected answers.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '0.5rem' }}>
              {Object.entries(analytics.subtopicStats).map(([mainKey, subtopics]) => {
                const topicMeta = TECHNICAL_MAIN_TOPICS[mainKey];
                const mainStats = analytics.mainTopicStats[mainKey];

                return (
                  <div key={mainKey} className="tech-tree-group">
                    <div className="tech-tree-group-header">
                      <span>{topicMeta.title}</span>
                      <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                        Total: {mainStats.correct}/{mainStats.total}
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '8px', marginTop: '4px' }}>
                      {Object.entries(subtopics).map(([subName, subStat]) => {
                        const isAllCorrect = subStat.correct === subStat.total;
                        const hasErrors = subStat.incorrect > 0;
                        const badgeBg = isAllCorrect
                          ? 'rgba(16, 185, 129, 0.18)'
                          : hasErrors
                          ? 'rgba(239, 68, 68, 0.18)'
                          : 'rgba(100, 116, 139, 0.18)';
                        const badgeColor = isAllCorrect
                          ? '#10b981'
                          : hasErrors
                          ? '#ef4444'
                          : '#94a3b8';

                        return (
                          <div key={subName} className="tech-tree-subtopic-item">
                            <span>{subName}</span>
                            <span
                              className="tech-tree-subtopic-badge"
                              style={{ backgroundColor: badgeBg, color: badgeColor }}
                            >
                              {subStat.correct}/{subStat.total}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Question Review & Solutions */}
          <div className="tech-review-section">
            <h3
              style={{
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#f8fafc',
                margin: '0.5rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <CheckCircle2 size={18} className="text-emerald-400" />
              <span>Question Review & Authentic PYQ Explanations (45 Questions)</span>
            </h3>

            {questions.map((q, idx) => {
              const userChoice = userAnswers[q.id];
              const isCorrect = userChoice === q.correctAnswer;
              const isUnattempted = !userChoice;
              const statusClass = isCorrect
                ? 'correct'
                : isUnattempted
                ? 'unattempted'
                : 'incorrect';

              return (
                <div key={q.id} className={`tech-review-item ${statusClass}`}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="tech-q-number">Q{idx + 1}</span>
                      <span
                        className="tech-topic-tag"
                        style={{
                          backgroundColor: `${getTopicColor(q.assignedMainTopic)}20`,
                          color: getTopicColor(q.assignedMainTopic)
                        }}
                      >
                        {TECHNICAL_MAIN_TOPICS[q.assignedMainTopic]?.shortTitle}
                      </span>
                      <span className="tech-subtopic-pill">{q.assignedSubtopic}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', fontWeight: 700 }}>
                      {isCorrect && (
                        <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <CheckCircle2 size={16} /> Correct (+1)
                        </span>
                      )}
                      {!isCorrect && !isUnattempted && (
                        <span style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <XCircle size={16} /> Incorrect
                        </span>
                      )}
                      {isUnattempted && (
                        <span style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <HelpCircle size={16} /> Unattempted
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="tech-question-text" style={{ fontSize: '0.98rem' }}>
                    {q.question}
                  </div>

                  {/* Options Review */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {q.options.map((opt) => {
                      const isThisCorrect = opt.id === q.correctAnswer;
                      const isSelected = opt.id === userChoice;
                      let bg = 'rgba(15, 23, 42, 0.5)';
                      let border = 'rgba(51, 65, 85, 0.6)';
                      let textColor = '#cbd5e1';

                      if (isThisCorrect) {
                        bg = 'rgba(16, 185, 129, 0.14)';
                        border = '#10b981';
                        textColor = '#a7f3d0';
                      } else if (isSelected && !isThisCorrect) {
                        bg = 'rgba(239, 68, 68, 0.14)';
                        border = '#ef4444';
                        textColor = '#fca5a5';
                      }

                      return (
                        <div
                          key={opt.id}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            background: bg,
                            border: `1px solid ${border}`,
                            fontSize: '0.88rem'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontWeight: 800, color: isThisCorrect ? '#10b981' : isSelected ? '#ef4444' : '#94a3b8' }}>
                              {opt.id}.
                            </span>
                            <span style={{ color: textColor }}>{opt.text}</span>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
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
                      );
                    })}
                  </div>

                  {/* Beautified Official PYQ Explanation */}
                  <BeautifiedExplanation
                    explanation={q.explanation}
                    optionExplanations={q.optionExplanations}
                    options={q.options}
                    correctAnswer={q.correctAnswer}
                    userChoice={userChoice}
                  />
                </div>
              );
            })}
          </div>
        </main>
      ) : (
        /* ================= Active Exam Viewport ================= */
        <main className="tech-exam-body">
          {/* Left: Question Card */}
          <div className="tech-question-card">
            {/* Meta Row */}
            <div className="tech-meta-row">
              <div className="tech-meta-left">
                <span className="tech-q-number">
                  Question {currentIndex + 1} of {questions.length}
                </span>

                <span
                  className="tech-topic-tag"
                  style={{
                    backgroundColor: `${getTopicColor(currentQuestion.assignedMainTopic)}20`,
                    color: getTopicColor(currentQuestion.assignedMainTopic)
                  }}
                >
                  {TECHNICAL_MAIN_TOPICS[currentQuestion.assignedMainTopic]?.shortTitle}
                </span>

                <span className="tech-subtopic-pill">
                  {currentQuestion.assignedSubtopic}
                </span>

                <span className="tech-source-label">
                  ({currentQuestion.source})
                </span>
              </div>

              <button
                type="button"
                className="tech-btn tech-btn-secondary"
                onClick={handleToggleBookmark}
                title="Bookmark for review later"
                style={{ padding: '4px 10px' }}
              >
                <Bookmark
                  size={14}
                  fill={bookmarkedIds.includes(currentQuestion.id) ? '#f59e0b' : 'none'}
                  color={bookmarkedIds.includes(currentQuestion.id) ? '#f59e0b' : 'currentColor'}
                />
                <span style={{ fontSize: '0.78rem' }}>
                  {bookmarkedIds.includes(currentQuestion.id) ? 'Saved' : 'Bookmark'}
                </span>
              </button>
            </div>

            {/* Question Text */}
            <div className="tech-question-text">
              {currentQuestion.pseudocode ? (
                <div>
                  <div style={{ marginBottom: '0.5rem' }}>{currentQuestion.title}</div>
                  <pre className="tech-pseudocode-snippet">{currentQuestion.pseudocode}</pre>
                </div>
              ) : (
                currentQuestion.question
              )}
            </div>

            {/* Options List */}
            <div className="tech-options-list">
              {currentQuestion.options.map((option) => {
                const isSelected = userAnswers[currentQuestion.id] === option.id;
                return (
                  <div
                    key={option.id}
                    className={`tech-option-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectOption(option.id)}
                  >
                    <div className="tech-option-letter">{option.id}</div>
                    <div className="tech-option-text">{option.text}</div>
                  </div>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="tech-action-bar">
              <div className="tech-action-left">
                <button
                  type="button"
                  className="tech-btn tech-btn-secondary"
                  onClick={handleClearResponse}
                  disabled={!userAnswers[currentQuestion.id]}
                >
                  Clear Response
                </button>
                <button
                  type="button"
                  className={`tech-btn tech-btn-mark ${markedQuestions[currentQuestion.id] ? 'marked' : ''}`}
                  onClick={handleToggleMark}
                >
                  <Flag size={14} />
                  <span>
                    {markedQuestions[currentQuestion.id] ? 'Marked for Review' : 'Mark for Review'}
                  </span>
                </button>
              </div>

              <div className="tech-action-right">
                <button
                  type="button"
                  className="tech-btn tech-btn-secondary"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft size={16} />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  className="tech-btn tech-btn-primary"
                  onClick={handleNext}
                  disabled={currentIndex === questions.length - 1}
                >
                  <span>Next</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Question Palette */}
          <aside className="tech-palette-card">
            <div className="tech-palette-header">
              <span className="tech-palette-title">
                <span>Question Palette</span>
              </span>
              <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                {answeredCount}/45 Done
              </span>
            </div>

            {/* Palette Grid */}
            <div className="tech-palette-grid">
              {questions.map((q, idx) => {
                const isAnswered = Boolean(userAnswers[q.id]);
                const isMarked = Boolean(markedQuestions[q.id]);
                const isCurrent = idx === currentIndex;

                let cls = 'tech-palette-num';
                if (isCurrent) cls += ' current';
                if (isAnswered) cls += ' answered';
                if (isMarked) cls += ' marked';

                return (
                  <button
                    key={q.id}
                    type="button"
                    className={cls}
                    onClick={() => handleJumpToIndex(idx)}
                    title={`Q${idx + 1} (${q.assignedSubtopic})`}
                  >
                    <span>{idx + 1}</span>
                    {isMarked && <span className="tech-palette-marker" />}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="tech-legend">
              <div className="tech-legend-item">
                <span className="tech-legend-dot" style={{ background: '#10b981' }} />
                <span>Answered ({answeredCount})</span>
              </div>
              <div className="tech-legend-item">
                <span className="tech-legend-dot" style={{ background: '#f59e0b' }} />
                <span>Marked ({markedCount})</span>
              </div>
              <div className="tech-legend-item">
                <span className="tech-legend-dot" style={{ background: 'rgba(15, 23, 42, 0.9)', border: '1px solid #38bdf8' }} />
                <span>Current</span>
              </div>
              <div className="tech-legend-item">
                <span className="tech-legend-dot" style={{ background: 'rgba(51, 65, 85, 0.7)' }} />
                <span>Unanswered ({questions.length - answeredCount})</span>
              </div>
            </div>

            {/* Big Submit Button */}
            <button
              type="button"
              className="tech-submit-btn"
              onClick={() => setShowSubmitModal(true)}
            >
              <Award size={18} />
              <span>Submit Assessment</span>
            </button>
          </aside>
        </main>
      )}

      {/* ================= Submit Confirmation Modal ================= */}
      {showSubmitModal && (
        <div className="tech-modal-backdrop" onClick={() => setShowSubmitModal(false)}>
          <div className="tech-modal-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <AlertCircle size={24} className="text-amber-400" />
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#f8fafc', fontWeight: 800 }}>
                Submit Assessment?
              </h3>
            </div>

            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6, color: '#cbd5e1' }}>
              You have answered <strong>{answeredCount}</strong> of <strong>{questions.length}</strong> questions.
              {markedCount > 0 && (
                <span style={{ display: 'block', marginTop: '6px', color: '#fbbf24' }}>
                  ⚠️ You have {markedCount} question(s) marked for review.
                </span>
              )}
              {questions.length - answeredCount > 0 && (
                <span style={{ display: 'block', marginTop: '6px', color: '#94a3b8' }}>
                  There are {questions.length - answeredCount} unanswered questions which will be graded as unattempted.
                </span>
              )}
            </p>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
              <button
                type="button"
                className="tech-btn tech-btn-secondary"
                onClick={() => setShowSubmitModal(false)}
              >
                Keep Working
              </button>
              <button
                type="button"
                className="tech-btn tech-btn-primary"
                onClick={handleSubmitAssessment}
              >
                <Award size={16} />
                <span>Yes, Final Submit</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
