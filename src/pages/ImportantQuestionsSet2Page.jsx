// src/pages/ImportantQuestionsSet2Page.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Layers,
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
  IMPORTANT_SET2_TIERS,
  IMPORTANT_SET2_TOPICS,
  importantQuestionsSet2,
  importantSet2StudyGuides,
  filterImportantSet2Questions,
  getImportantSet2OptionBreakdown
} from '../data/importantQuestionsSet2.js';
import { importantQuestionsSet2Storage } from '../utils/importantQuestionsSet2Storage.js';
import CloudAnalysisModal from '../components/cloud/CloudAnalysisModal.jsx';

export default function ImportantQuestionsSet2Page({ theme = 'dark' }) {
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
    return filterImportantSet2Questions({ tier: activeTier, topic: activeTopic });
  }, [activeTier, activeTopic]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [bookmarks, setBookmarks] = useState(() => importantQuestionsSet2Storage.getBookmarks());

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
  const breakdown = currentQuestion ? getImportantSet2OptionBreakdown(currentQuestion.id) || {} : {};

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

  // Helper: Format Time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handlers
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

  const handleToggleBookmark = (id) => {
    const updated = importantQuestionsSet2Storage.toggleBookmark(id);
    setBookmarks(updated);
  };

  const submitAssessment = (isAuto = false) => {
    const total = activeQuestions.length;
    let score = 0;
    activeQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) score++;
    });

    importantQuestionsSet2Storage.saveQuizAttempt({
      totalQuestions: total,
      score,
      percentage: total > 0 ? Math.round((score / total) * 100) : 0,
      timeTaken: timeTakenSeconds,
      tier: activeTier,
      topic: activeTopic,
      mode
    });

    setShowAnalysisModal(true);
  };

  const handleSubmitQuiz = () => {
    submitAssessment(false);
  };

  // Stats
  const answeredCount = Object.keys(userAnswers).length;
  const isPracticeMode = mode === 'practice';
  const hasAnswered = currentQuestion && Boolean(userAnswers[currentQuestion.id]);
  const showExplanation = isPracticeMode && (hasAnswered || showSolutionOverride);

  const renderQuestionBody = (text) => {
    if (!text) return null;
    if (text.includes('\n')) {
      const lines = text.split('\n');
      const firstLine = lines[0];
      const rest = lines.slice(1).join('\n');
      return (
        <div>
          <p style={{ margin: 0, fontWeight: 500 }}>{firstLine}</p>
          <pre
            style={{
              marginTop: '0.6rem',
              padding: '0.75rem',
              background: 'rgba(15, 23, 42, 0.65)',
              borderRadius: '8px',
              border: '1px solid rgba(14, 165, 233, 0.25)',
              color: '#38bdf8',
              fontFamily: 'JetBrains Mono, Menlo, monospace',
              overflowX: 'auto',
              lineHeight: '1.6',
              whiteSpace: 'pre-wrap'
            }}
          >
            <code>{rest}</code>
          </pre>
        </div>
      );
    }
    return <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{text}</p>;
  };

  return (
    <div className="cloud-assessment-page" data-theme={theme}>
      <div className="cloud-page-container">
        {/* Header with Sky/Cyan Theme */}
        <header className="cloud-quiz-header" style={{ borderColor: 'rgba(14, 165, 233, 0.35)' }}>
          <div className="cloud-header-top">
            <div className="cloud-brand">
              <div
                className="cloud-brand-icon"
                style={{
                  background: 'linear-gradient(135deg, #0284c7, #2563eb)',
                  boxShadow: '0 4px 14px rgba(14, 165, 233, 0.35)'
                }}
              >
                <Layers size={26} />
              </div>
              <div>
                <div className="cloud-tag-row">
                  <span
                    className="cloud-badge"
                    style={{
                      background: 'rgba(14, 165, 233, 0.15)',
                      color: '#38bdf8',
                      borderColor: 'rgba(14, 165, 233, 0.3)'
                    }}
                  >
                    High-Yield Signature Track — Set 2
                  </span>
                  <span className="cloud-badge cloud-badge-secondary">
                    {importantQuestionsSet2.length} Must-Know PYQs
                  </span>
                  <Link
                    to="/important-questions"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.2rem 0.6rem',
                      background: 'rgba(245, 158, 11, 0.15)',
                      color: '#fbbf24',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      marginLeft: '0.25rem'
                    }}
                  >
                    <Flame size={13} /> Switch to Set 1 (61 Qs) &rarr;
                  </Link>
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
                </div>
                <h1 className="cloud-title">Most Important Assessment Questions — Set 2 (Accenture PYQs)</h1>
              </div>
            </div>

            {/* Header Controls */}
            <div className="cloud-header-actions">
              <button
                type="button"
                onClick={() => setShowNotesModal(true)}
                className="cloud-btn cloud-btn-secondary"
                style={{ borderColor: 'rgba(14, 165, 233, 0.4)', color: '#38bdf8' }}
              >
                <BookOpen size={16} />
                <span>Set 2 Cheat Sheet</span>
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
                  style={mode === 'practice' ? { background: '#0284c7', color: '#ffffff' } : {}}
                >
                  <Sparkles size={14} />
                  <span>Practice Mode</span>
                </button>
                <button
                  type="button"
                  className={`cloud-mode-btn ${mode === 'exam' ? 'active' : ''}`}
                  onClick={() => setMode('exam')}
                  style={mode === 'exam' ? { background: '#0284c7', color: '#ffffff' } : {}}
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
                style={activeTier === 'all' ? { background: 'rgba(14, 165, 233, 0.15)', borderColor: '#0284c7', color: '#38bdf8' } : {}}
              >
                <span>All PYQs</span>
                <span className="cloud-tier-badge">{importantQuestionsSet2.length}</span>
              </button>

              {IMPORTANT_SET2_TIERS.map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTier === tier.id}
                  className={`cloud-tier-tab ${activeTier === tier.id ? 'active' : ''}`}
                  onClick={() => setActiveTier(tier.id)}
                  style={activeTier === tier.id ? { background: 'rgba(14, 165, 233, 0.15)', borderColor: '#0284c7', color: '#38bdf8' } : {}}
                >
                  <span>{tier.name.split('—')[0].trim()}</span>
                  <span className="cloud-tier-badge">
                    {importantQuestionsSet2.filter((q) => q.tier === tier.id).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Topic Dropdown */}
            <div className="cloud-topic-selector">
              <label htmlFor="important-set2-topic-select" className="cloud-topic-label">
                Topic:
              </label>
              <select
                id="important-set2-topic-select"
                aria-label="Filter by Topic"
                className="cloud-topic-dropdown"
                value={activeTopic}
                onChange={(e) => setActiveTopic(e.target.value)}
              >
                {IMPORTANT_SET2_TOPICS.map((topic) => (
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
                    width: `${
                      activeQuestions.length > 0
                        ? Math.round((answeredCount / activeQuestions.length) * 100)
                        : 0
                    }%`,
                    background: 'linear-gradient(90deg, #0284c7, #38bdf8)'
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
                  style={{ background: '#0284c7' }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <article className="cloud-card" style={{ borderColor: 'rgba(14, 165, 233, 0.25)' }}>
                {/* Top Meta */}
                <div className="cloud-card-meta">
                  <div className="cloud-meta-left">
                    <span className="cloud-qnumber">
                      Question <strong>{currentIndex + 1}</strong> of {activeQuestions.length}
                    </span>
                    <span
                      className="cloud-badge"
                      style={{
                        background: 'rgba(14, 165, 233, 0.15)',
                        color: '#38bdf8',
                        borderColor: 'rgba(14, 165, 233, 0.3)'
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
                    className={`cloud-bookmark-btn ${
                      bookmarks.includes(currentQuestion.id) ? 'active' : ''
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
                      style={{ background: '#0284c7' }}
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
                      background: 'rgba(14, 165, 233, 0.04)',
                      borderColor: 'rgba(14, 165, 233, 0.3)'
                    }}
                  >
                    <div
                      className="cloud-explanation-header"
                      style={{ borderColor: 'rgba(14, 165, 233, 0.2)' }}
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
                      <h4 className="cloud-expl-heading" style={{ color: '#38bdf8' }}>
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
                    <span>Set 2 PYQs Palette</span>
                  </div>
                  <span
                    className="cloud-palette-summary"
                    style={{ background: 'rgba(14, 165, 233, 0.15)', color: '#38bdf8' }}
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
                      background: 'linear-gradient(135deg, #0284c7, #2563eb)',
                      boxShadow: '0 4px 12px rgba(14, 165, 233, 0.35)'
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
        getOptionBreakdownCustom={getImportantSet2OptionBreakdown}
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
                  style={{ background: 'rgba(14, 165, 233, 0.15)', color: '#38bdf8' }}
                >
                  <Layers size={24} />
                </div>
                <div>
                  <h2 className="cloud-notes-title">Accenture Most Important PYQs (Set 2) — Study Guide</h2>
                  <p className="cloud-notes-sub">
                    Master Cloud Storage, OS System Calls, HTTP & REST, VPN Topologies, and Office Tools
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
                {IMPORTANT_SET2_TIERS.map((tier) => {
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
                              background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
                              borderColor: '#38bdf8',
                              boxShadow: '0 4px 16px rgba(14, 165, 233, 0.45)'
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
                            : { background: 'rgba(0, 0, 0, 0.35)', color: '#bae6fd' }
                        }
                      >
                        {importantQuestionsSet2.filter((q) => q.tier === tier.id).length} PYQs
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="cloud-notes-body">
              {(() => {
                const currentGuide =
                  importantSet2StudyGuides[selectedNotesTier] || importantSet2StudyGuides[1];
                const currentTierObj = IMPORTANT_SET2_TIERS.find((t) => t.id === selectedNotesTier);
                return (
                  <div className="cloud-guide-sections">
                    <div className="cloud-guide-banner" style={{ borderColor: 'rgba(14, 165, 233, 0.3)' }}>
                      <div>
                        <h3 className="cloud-guide-title" style={{ color: '#38bdf8' }}>
                          {currentGuide.title}
                        </h3>
                        <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          {currentTierObj?.description}
                        </p>
                      </div>
                      <span
                        className="cloud-badge"
                        style={{
                          background: 'rgba(14, 165, 233, 0.15)',
                          color: '#38bdf8',
                          borderColor: 'rgba(14, 165, 233, 0.3)'
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
                              borderLeft: '3px solid #0ea5e9'
                            }}
                          >
                            <span
                              style={{
                                color: '#38bdf8',
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
