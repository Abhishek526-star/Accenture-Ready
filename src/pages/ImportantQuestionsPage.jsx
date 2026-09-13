// src/pages/ImportantQuestionsPage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Flame,
  Sparkles,
  Clock,
  BookOpen,
  Award,
  Pause,
  Play,
  Bookmark,
  RotateCcw,
  Zap,
  Info,
  CheckCircle2,
  XCircle,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Grid,
  ShieldCheck,
  Cloud,
  Network,
  Database,
  FileSpreadsheet,
  Code2
} from 'lucide-react';
import {
  IMPORTANT_TIERS,
  IMPORTANT_TOPICS,
  importantQuestions,
  importantStudyGuides,
  filterImportantQuestions,
  getImportantOptionBreakdown
} from '../data/importantQuestions.js';
import { importantQuestionsStorage } from '../utils/importantQuestionsStorage.js';
import CloudAnalysisModal from '../components/cloud/CloudAnalysisModal.jsx';
import SEO from '../components/SEO.jsx';
import { seoConfig } from '../config/seo.js';

export default function ImportantQuestionsPage({ theme = 'dark' }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialTierParam = searchParams.get('tier') || 'all';
  const initialTopicParam = searchParams.get('topic') || 'all';

  const [activeTier, setActiveTier] = useState(() => {
    return initialTierParam !== 'all' && !isNaN(Number(initialTierParam))
      ? Number(initialTierParam)
      : initialTierParam;
  });
  const [activeTopic, setActiveTopic] = useState(initialTopicParam);
  const [mode, setMode] = useState('practice'); // default to practice for immediate 4-option feedback

  // Filtered questions
  const activeQuestions = useMemo(() => {
    return filterImportantQuestions({ tier: activeTier, topic: activeTopic });
  }, [activeTier, activeTopic]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [bookmarks, setBookmarks] = useState(() => importantQuestionsStorage.getBookmarks());

  // Timer
  const [timeRemaining, setTimeRemaining] = useState(activeQuestions.length * 60);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [timeTakenSeconds, setTimeTakenSeconds] = useState(0);

  // Modals
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [selectedNotesTier, setSelectedNotesTier] = useState(1);
  const [showSolutionOverride, setShowSolutionOverride] = useState(false);

  // Current Question
  const currentQuestion = activeQuestions[currentIndex] || activeQuestions[0];
  const breakdown = currentQuestion ? getImportantOptionBreakdown(currentQuestion.id) || {} : {};

  // Sync Timer & Question index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setUserAnswers({});
    setShowSolutionOverride(false);
    const initialTime = Math.max(300, activeQuestions.length * 60);
    setTimeRemaining(initialTime);
    setTimeTakenSeconds(0);
    setIsTimerPaused(false);
  }, [activeTier, activeTopic, activeQuestions.length]);

  // Sync URL Params
  useEffect(() => {
    setSearchParams(
      {
        tier: activeTier.toString(),
        topic: activeTopic
      },
      { replace: true }
    );
  }, [activeTier, activeTopic, setSearchParams]);

  // Timer countdown
  useEffect(() => {
    if (mode !== 'exam' || isTimerPaused || showAnalysisModal) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          submitAssessment(true);
          return 0;
        }
        return prev - 1;
      });
      setTimeTakenSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [mode, isTimerPaused, showAnalysisModal]);

  const handleSelectOption = (optionId) => {
    if (!currentQuestion) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  const handleClearOption = () => {
    if (!currentQuestion) return;
    setUserAnswers((prev) => {
      const next = { ...prev };
      delete next[currentQuestion.id];
      return next;
    });
  };

  const handleToggleBookmark = (questionId) => {
    const updated = importantQuestionsStorage.toggleBookmark(questionId);
    setBookmarks(updated);
  };

  const submitAssessment = (isAuto = false) => {
    let correctCount = 0;
    activeQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const percentage =
      activeQuestions.length > 0 ? Math.round((correctCount / activeQuestions.length) * 100) : 0;

    importantQuestionsStorage.saveQuizAttempt({
      tier: activeTier,
      topic: activeTopic,
      totalQuestions: activeQuestions.length,
      correctCount,
      percentage,
      timeTakenSeconds: timeTakenSeconds || 1,
      mode
    });

    setShowAnalysisModal(true);
  };

  const handleSubmitQuiz = () => {
    const answered = Object.keys(userAnswers).filter((k) => userAnswers[k]).length;
    const remaining = activeQuestions.length - answered;

    if (remaining > 0 && mode === 'exam') {
      const confirm = window.confirm(
        `You have ${remaining} unanswered questions. Are you sure you want to submit?`
      );
      if (!confirm) return;
    }

    submitAssessment(false);
  };

  const answeredCount = Object.keys(userAnswers).filter((k) => userAnswers[k]).length;
  const hasAnswered = currentQuestion && Boolean(userAnswers[currentQuestion.id]);
  const isPracticeMode = mode === 'practice';
  const showExplanation = isPracticeMode && (hasAnswered || showSolutionOverride);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Helper to nicely render question text with code block formatting if present
  const renderQuestionBody = (text) => {
    if (!text) return null;
    if (text.includes('\n\n')) {
      const parts = text.split('\n\n');
      const lead = parts[0];
      const codeOrRest = parts.slice(1).join('\n\n');
      return (
        <div>
          <p style={{ margin: '0 0 1rem 0', fontWeight: 600 }}>{lead}</p>
          <pre
            style={{
              background: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              borderRadius: '8px',
              padding: '1rem',
              color: '#f8fafc',
              fontSize: '0.92rem',
              fontFamily: 'JetBrains Mono, Menlo, monospace',
              overflowX: 'auto',
              lineHeight: '1.6',
              whiteSpace: 'pre-wrap'
            }}
          >
            <code>{codeOrRest}</code>
          </pre>
        </div>
      );
    }
    return <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{text}</p>;
  };

  return (
    <div className="cloud-assessment-page" data-theme={theme}>
      <SEO {...seoConfig.importantQuestions} />
      <div className="cloud-page-container">
        {/* Header with Amber Theme */}
        <header className="cloud-quiz-header" style={{ borderColor: 'rgba(245, 158, 11, 0.35)' }}>
          <div className="cloud-header-top">
            <div className="cloud-brand">
              <div
                className="cloud-brand-icon"
                style={{
                  background: 'linear-gradient(135deg, #d97706, #b45309)',
                  boxShadow: '0 4px 14px rgba(245, 158, 11, 0.35)'
                }}
              >
                <Flame size={26} />
              </div>
              <div>
                <div className="cloud-tag-row">
                  <span
                    className="cloud-badge"
                    style={{
                      background: 'rgba(245, 158, 11, 0.15)',
                      color: '#fbbf24',
                      borderColor: 'rgba(245, 158, 11, 0.3)'
                    }}
                  >
                    High-Yield Signature Track
                  </span>
                  <span className="cloud-badge cloud-badge-secondary">{importantQuestions.length} Must-Know PYQs</span>
                  <Link
                    to="/cloud-security"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.2rem 0.6rem',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#34d399',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      marginLeft: '0.25rem'
                    }}
                  >
                    <ShieldCheck size={13} /> Cloud Security &rarr;
                  </Link>
                  <Link
                    to="/pseudocode"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.2rem 0.6rem',
                      background: 'rgba(99, 102, 241, 0.15)',
                      color: '#a5b4fc',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      marginLeft: '0.25rem'
                    }}
                  >
                    <Code2 size={13} /> Pseudocode Round &rarr;
                  </Link>
                </div>
                <h1 className="cloud-title">Accenture Important Questions – Coding, SQL & Technical PYQs</h1>
              </div>
            </div>

            {/* Header Controls */}
            <div className="cloud-header-actions">
              <button
                type="button"
                onClick={() => setShowNotesModal(true)}
                className="cloud-btn cloud-btn-secondary"
                style={{ borderColor: 'rgba(245, 158, 11, 0.4)', color: '#fbbf24' }}
              >
                <BookOpen size={16} />
                <span>PYQ Cheat Sheet</span>
              </button>

              <button
                type="button"
                className="cloud-btn cloud-btn-ghost"
                onClick={() => {
                  if (window.confirm('Reset all answers for this session?')) {
                    setUserAnswers({});
                    setCurrentIndex(0);
                    setTimeRemaining(activeQuestions.length * 60);
                  }
                }}
                title="Reset answers"
              >
                <RotateCcw size={15} />
                <span>Reset</span>
              </button>

              {/* Mode Switcher */}
              <div className="cloud-mode-toggle" role="group" aria-label="Assessment Mode">
                <button
                  type="button"
                  className={`cloud-mode-btn ${mode === 'practice' ? 'active' : ''}`}
                  onClick={() => setMode('practice')}
                  style={mode === 'practice' ? { background: '#d97706', color: '#ffffff' } : {}}
                >
                  <Sparkles size={14} />
                  <span>Practice Mode</span>
                </button>
                <button
                  type="button"
                  className={`cloud-mode-btn ${mode === 'exam' ? 'active' : ''}`}
                  onClick={() => setMode('exam')}
                  style={mode === 'exam' ? { background: '#d97706', color: '#ffffff' } : {}}
                >
                  <Clock size={14} />
                  <span>Exam Mode</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tier & Topic Navigation */}
          <div className="cloud-tier-nav">
            <div className="cloud-tier-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTier === 'all'}
                className={`cloud-tier-tab ${activeTier === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTier('all')}
                style={activeTier === 'all' ? { background: 'rgba(245, 158, 11, 0.15)', borderColor: '#f59e0b', color: '#fbbf24' } : {}}
              >
                <span>All PYQs</span>
                <span className="cloud-tier-badge">{importantQuestions.length}</span>
              </button>

              {IMPORTANT_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTier === tier.id}
                  className={`cloud-tier-tab ${activeTier === tier.id ? 'active' : ''}`}
                  onClick={() => setActiveTier(tier.id)}
                  style={activeTier === tier.id ? { background: 'rgba(245, 158, 11, 0.15)', borderColor: '#f59e0b', color: '#fbbf24' } : {}}
                >
                  <span>{tier.name.split('—')[0].trim()}</span>
                  <span className="cloud-tier-badge">
                    {importantQuestions.filter((q) => q.tier === tier.id).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Topic Dropdown */}
            <div className="cloud-topic-selector">
              <label htmlFor="important-topic-select" className="cloud-topic-label">
                Topic:
              </label>
              <select
                id="important-topic-select"
                aria-label="Filter by Topic"
                className="cloud-topic-dropdown"
                value={activeTopic}
                onChange={(e) => setActiveTopic(e.target.value)}
              >
                {IMPORTANT_TOPICS.map((topic) => (
                  <option key={topic} value={topic === 'All Topics' ? 'all' : topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Status Bar */}
          <div className="cloud-status-bar">
            <div className="cloud-progress-group">
              <div className="cloud-progress-info">
                <span className="cloud-progress-label">
                  Answered: <strong>{answeredCount}</strong> / {activeQuestions.length} (
                  {activeQuestions.length > 0
                    ? Math.round((answeredCount / activeQuestions.length) * 100)
                    : 0}
                  %)
                </span>
                {bookmarks.length > 0 && (
                  <span className="cloud-bookmark-pill">
                    <Bookmark size={13} /> {bookmarks.length} Marked
                  </span>
                )}
              </div>
              <div className="cloud-progress-track">
                <div
                  className="cloud-progress-fill"
                  style={{
                    width: `${activeQuestions.length > 0
                        ? Math.round((answeredCount / activeQuestions.length) * 100)
                        : 0
                      }%`,
                    background: 'linear-gradient(90deg, #d97706, #fbbf24)'
                  }}
                />
              </div>
            </div>

            {mode === 'exam' && (
              <div className="cloud-timer-container">
                <div className={`cloud-timer-box ${timeRemaining < 300 ? 'cloud-timer-warning' : ''}`}>
                  <Clock size={16} />
                  <span className="cloud-timer-digits">{formatTime(timeRemaining)}</span>
                  <button
                    type="button"
                    className="cloud-timer-control"
                    onClick={() => setIsTimerPaused(!isTimerPaused)}
                  >
                    {isTimerPaused ? <Play size={14} /> : <Pause size={14} />}
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Workspace Layout */}
        <div className="cloud-workspace-layout">
          <main className="cloud-question-column">
            {activeQuestions.length === 0 ? (
              <div className="cloud-empty-state">
                <h3>No questions found matching your filter.</h3>
                <p>Try switching topics or selecting "All PYQs" above.</p>
                <button
                  type="button"
                  className="cloud-btn cloud-btn-primary"
                  onClick={() => {
                    setActiveTier('all');
                    setActiveTopic('all');
                  }}
                  style={{ background: '#d97706' }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <article className="cloud-card" style={{ borderColor: 'rgba(245, 158, 11, 0.25)' }}>
                {/* Top Meta */}
                <div className="cloud-card-meta">
                  <div className="cloud-meta-left">
                    <span className="cloud-qnumber">
                      Question <strong>{currentIndex + 1}</strong> of {activeQuestions.length}
                    </span>
                    <span
                      className="cloud-badge"
                      style={{
                        background: 'rgba(245, 158, 11, 0.15)',
                        color: '#fbbf24',
                        borderColor: 'rgba(245, 158, 11, 0.3)'
                      }}
                    >
                      {currentQuestion.tierName}
                    </span>
                    <span className="cloud-badge cloud-badge-topic">{currentQuestion.topic}</span>
                    <span className="cloud-badge cloud-badge-secondary">{currentQuestion.difficulty}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleToggleBookmark(currentQuestion.id)}
                    className={`cloud-bookmark-btn ${bookmarks.includes(currentQuestion.id) ? 'active' : ''
                      }`}
                  >
                    <Bookmark
                      size={17}
                      fill={bookmarks.includes(currentQuestion.id) ? 'currentColor' : 'none'}
                    />
                    <span>
                      {bookmarks.includes(currentQuestion.id) ? 'Bookmarked' : 'Bookmark'}
                    </span>
                  </button>
                </div>

                {/* Prompt */}
                <div className="cloud-question-text">
                  {renderQuestionBody(currentQuestion.question)}
                </div>

                {/* Options Grid */}
                <div className="cloud-options-grid" role="radiogroup">
                  {currentQuestion.options.map((option) => {
                    const isSelected = userAnswers[currentQuestion.id] === option.id;
                    const isCorrect = option.id === currentQuestion.correctAnswer;

                    let optionStyle = 'cloud-option-item';

                    if (isPracticeMode && hasAnswered) {
                      if (isCorrect) {
                        optionStyle += ' cloud-option-correct';
                      } else if (isSelected && !isCorrect) {
                        optionStyle += ' cloud-option-incorrect';
                      } else {
                        optionStyle += ' cloud-option-disabled';
                      }
                    } else if (isSelected) {
                      optionStyle += ' cloud-option-selected';
                    }

                    return (
                      <button
                        key={option.id}
                        type="button"
                        className={optionStyle}
                        onClick={() => handleSelectOption(option.id)}
                        role="radio"
                        aria-checked={isSelected}
                      >
                        <div className="cloud-option-letter-badge">{option.id}</div>
                        <div className="cloud-option-text-wrap">
                          <span className="cloud-option-text">{option.text}</span>
                        </div>
                        <div className="cloud-option-status-icon">
                          {isPracticeMode && hasAnswered && isCorrect && (
                            <CheckCircle2 size={20} className="cloud-icon-correct" />
                          )}
                          {isPracticeMode && hasAnswered && isSelected && !isCorrect && (
                            <XCircle size={20} className="cloud-icon-wrong" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Actions */}
                <div className="cloud-card-actions">
                  <div className="cloud-actions-left">
                    {hasAnswered && (
                      <button
                        type="button"
                        onClick={handleClearOption}
                        className="cloud-btn-clear"
                      >
                        <RotateCcw size={14} /> Clear Selection
                      </button>
                    )}

                    {isPracticeMode && !hasAnswered && (
                      <button
                        type="button"
                        onClick={() => setShowSolutionOverride(!showSolutionOverride)}
                        className="cloud-btn-hint"
                      >
                        <Lightbulb size={14} />
                        {showSolutionOverride ? 'Hide Solution' : 'Show Solution & Options'}
                      </button>
                    )}
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
                      onClick={() =>
                        setCurrentIndex((prev) =>
                          Math.min(activeQuestions.length - 1, prev + 1)
                        )
                      }
                      disabled={currentIndex === activeQuestions.length - 1}
                      style={{ background: '#d97706' }}
                    >
                      <span>Next</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* 4-Option Breakdown when answered in Practice Mode */}
                {showExplanation && (
                  <div
                    className="cloud-explanation-box"
                    style={{
                      background: 'rgba(245, 158, 11, 0.04)',
                      borderColor: 'rgba(245, 158, 11, 0.3)'
                    }}
                  >
                    <div
                      className="cloud-explanation-header"
                      style={{ borderColor: 'rgba(245, 158, 11, 0.2)' }}
                    >
                      <div className="cloud-expl-badge">
                        <CheckCircle2 size={18} />
                        <span>Correct Answer: Option {currentQuestion.correctAnswer}</span>
                      </div>
                      {currentQuestion.memoryTip && (
                        <div className="cloud-memory-shortcut">
                          <Zap size={14} />
                          <span>Accenture Rule: {currentQuestion.memoryTip}</span>
                        </div>
                      )}
                    </div>

                    {/* All 4 Options Breakdown Cards */}
                    <div className="cloud-options-breakdown-section">
                      <h4 className="cloud-breakdown-heading">
                        <Info size={15} /> All 4 Options Analysis & Explanation:
                      </h4>

                      <div className="cloud-breakdown-cards">
                        {currentQuestion.options.map((opt) => {
                          const isThisCorrect = opt.id === currentQuestion.correctAnswer;
                          const isUserSelected = userAnswers[currentQuestion.id] === opt.id;
                          const optExpl =
                            breakdown[opt.id] ||
                            (isThisCorrect ? currentQuestion.explanation : 'Incorrect option.');

                          let cardClass = 'cloud-breakdown-card';
                          if (isThisCorrect) cardClass += ' card-correct-green';
                          else if (isUserSelected && !isThisCorrect) cardClass += ' card-user-wrong';
                          else cardClass += ' card-neutral-wrong';

                          return (
                            <div key={opt.id} className={cardClass}>
                              <div className="breakdown-card-top">
                                <div className="breakdown-letter-group">
                                  <span className="breakdown-letter">{opt.id}</span>
                                  <span className="breakdown-opt-title">{opt.text}</span>
                                </div>
                                <div className="breakdown-status-badges">
                                  {isThisCorrect && (
                                    <span className="breakdown-pill pill-correct">
                                      <Check size={13} /> Correct Answer
                                    </span>
                                  )}
                                  {isUserSelected && !isThisCorrect && (
                                    <span className="breakdown-pill pill-user-wrong">
                                      <X size={13} /> Your Choice (Incorrect)
                                    </span>
                                  )}
                                  {!isThisCorrect && !isUserSelected && (
                                    <span className="breakdown-pill pill-distractor">
                                      <X size={12} /> Incorrect
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="breakdown-card-desc">
                                <p className="breakdown-text">{optExpl}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Overall Summary */}
                    <div className="cloud-explanation-body">
                      <h4 className="cloud-expl-heading" style={{ color: '#fbbf24' }}>
                        <Sparkles size={14} /> Core Exam Concept:
                      </h4>
                      <p className="cloud-expl-text" style={{ whiteSpace: 'pre-line' }}>
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            )}
          </main>

          {/* Right Navigator Palette */}
          {activeQuestions.length > 0 && (
            <div className="cloud-palette-column">
              <aside className="cloud-palette-card">
                <div className="cloud-palette-header">
                  <div className="cloud-palette-title">
                    <Grid size={18} />
                    <span>Important PYQs</span>
                  </div>
                  <span
                    className="cloud-palette-summary"
                    style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}
                  >
                    {answeredCount}/{activeQuestions.length}
                  </span>
                </div>

                <div className="cloud-palette-grid">
                  {activeQuestions.map((item, idx) => {
                    const isCurrent = currentIndex === idx;
                    const isAnswered = Boolean(userAnswers[item.id]);
                    const isMarked = bookmarks.includes(item.id);

                    let btnClass = 'cloud-palette-btn';
                    if (isCurrent) btnClass += ' current';
                    if (isAnswered) btnClass += ' answered';
                    if (isMarked) btnClass += ' marked';

                    return (
                      <button
                        key={item.id}
                        type="button"
                        className={btnClass}
                        onClick={() => setCurrentIndex(idx)}
                      >
                        <span>{idx + 1}</span>
                        {isMarked && <span className="cloud-palette-marker" />}
                      </button>
                    );
                  })}
                </div>

                <div className="cloud-palette-footer">
                  <button
                    type="button"
                    className="cloud-submit-btn"
                    onClick={handleSubmitQuiz}
                    style={{
                      background: 'linear-gradient(135deg, #d97706, #b45309)',
                      boxShadow: '0 4px 12px rgba(245, 158, 11, 0.35)'
                    }}
                  >
                    <Award size={16} />
                    <span>Submit & View Analysis</span>
                  </button>
                </div>
              </aside>
            </div>
          )}
        </div>
      </div>

      {/* Post-Quiz Analysis Modal */}
      <CloudAnalysisModal
        isOpen={showAnalysisModal}
        onClose={() => setShowAnalysisModal(false)}
        questions={activeQuestions}
        userAnswers={userAnswers}
        bookmarks={bookmarks}
        timeTakenSeconds={timeTakenSeconds}
        getOptionBreakdownCustom={getImportantOptionBreakdown}
        onRetakeQuiz={() => {
          setUserAnswers({});
          setCurrentIndex(0);
          setTimeRemaining(activeQuestions.length * 60);
          setShowAnalysisModal(false);
        }}
        onRetakeIncorrect={() => {
          const next = { ...userAnswers };
          activeQuestions.forEach((q) => {
            if (next[q.id] !== q.correctAnswer) delete next[q.id];
          });
          setUserAnswers(next);
          setShowAnalysisModal(false);
        }}
      />

      {/* Study Notes & Handbook Modal */}
      {showNotesModal && (
        <div className="cloud-modal-overlay" onClick={() => setShowNotesModal(false)}>
          <div className="cloud-notes-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cloud-notes-header">
              <div className="cloud-notes-title-group">
                <div
                  className="cloud-notes-icon"
                  style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}
                >
                  <Flame size={24} />
                </div>
                <div>
                  <h2 className="cloud-notes-title">Accenture Most Important PYQs — Study Guide</h2>
                  <p className="cloud-notes-sub">
                    Master formulas, bitwise truth tables, subnet shortcuts, and core concepts
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="cloud-modal-close"
                onClick={() => setShowNotesModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Tier Selector Tabs */}
            <div className="cloud-notes-tabs-wrapper">
              <div className="cloud-notes-tabs" role="tablist">
                {IMPORTANT_TIERS.map((tier) => {
                  const isActive = selectedNotesTier === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`cloud-notes-tab ${isActive ? 'active' : ''}`}
                      onClick={() => setSelectedNotesTier(tier.id)}
                      style={
                        isActive
                          ? {
                            background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                            borderColor: '#fbbf24',
                            boxShadow: '0 4px 16px rgba(217, 119, 6, 0.45)'
                          }
                          : {}
                      }
                    >
                      <Sparkles size={16} />
                      <span className="cloud-notes-tab-title">{tier.name.split('—')[0].trim()}</span>
                      <span
                        className="cloud-notes-tab-badge"
                        style={
                          isActive
                            ? { background: 'rgba(255, 255, 255, 0.22)', color: '#ffffff' }
                            : { background: 'rgba(0, 0, 0, 0.35)', color: '#fde68a' }
                        }
                      >
                        {importantQuestions.filter((q) => q.tier === tier.id).length} PYQs
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="cloud-notes-body">
              {(() => {
                const currentGuide = importantStudyGuides[selectedNotesTier] || importantStudyGuides[1];
                const currentTierObj = IMPORTANT_TIERS.find((t) => t.id === selectedNotesTier);
                return (
                  <div className="cloud-guide-sections">
                    <div className="cloud-guide-banner" style={{ borderColor: 'rgba(245, 158, 11, 0.3)' }}>
                      <div>
                        <h3 className="cloud-guide-title" style={{ color: '#fbbf24' }}>
                          {currentGuide.title}
                        </h3>
                        <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          {currentTierObj?.description}
                        </p>
                      </div>
                      <span
                        className="cloud-badge"
                        style={{
                          background: 'rgba(245, 158, 11, 0.15)',
                          color: '#fbbf24',
                          borderColor: 'rgba(245, 158, 11, 0.3)'
                        }}
                      >
                        Tier {selectedNotesTier} Mastery
                      </span>
                    </div>

                    <div className="cloud-guide-section-card">
                      <div className="cloud-guide-content">
                        {currentGuide.content.map((point, pIdx) => (
                          <div
                            key={pIdx}
                            style={{
                              display: 'flex',
                              gap: '0.75rem',
                              alignItems: 'flex-start',
                              marginBottom: '0.85rem',
                              padding: '0.75rem',
                              background: 'rgba(15, 23, 42, 0.4)',
                              borderRadius: '8px',
                              borderLeft: '3px solid #f59e0b'
                            }}
                          >
                            <span
                              style={{
                                color: '#fbbf24',
                                fontWeight: 700,
                                fontSize: '0.85rem',
                                minWidth: '22px'
                              }}
                            >
                              {pIdx + 1}.
                            </span>
                            <span
                              style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-primary)' }}
                              dangerouslySetInnerHTML={{
                                __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
