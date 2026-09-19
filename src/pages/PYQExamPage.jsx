// src/pages/PYQExamPage.jsx
/**
 * PYQ Exam Interface — a full parity clone of the "Accenture Cloud
 * Assessment – Cloud Computing Practice" page (cloud-* design system):
 *
 *  Header:   brand icon + badges + title, Study Notes-style actions,
 *            ↻ Reset, Exam/Practice mode toggle, topic tabs (All Qs /
 *            per-topic), topic dropdown, Completed progress bar,
 *            timer (1 min per question) + Bookmarked counter.
 *  Left:     question card — meta badges, Bookmark, options, and an
 *            action bar with Clear Selection / Mark for Review /
 *            Previous / Next.
 *  Right:    Question Navigator — All/Done/Left/Marked filters, numbered
 *            grid (Green=Answered, Grey=Unvisited, Orange=Marked,
 *            Blue ring=Current), legend, Submit & View Analysis.
 *  Exam:     timer auto-submits; submitting opens the Analysis modal.
 *            When every question is answered, analysis auto-opens.
 *  Practice: clicking an option instantly reveals correct/incorrect and
 *            renders per-option explanation cards + takeaway.
 *
 * Answers/marks/visited state are keyed by question id, so switching
 * questions never loses selections. Progress persists to localStorage.
 */
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FileSpreadsheet,
  Clock,
  Bookmark,
  RotateCcw,
  Award,
  Sparkles,
  Layers,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Flag,
  Eraser,
  Grid,
  Check,
  X,
  AlertTriangle,
  FileText
} from 'lucide-react';
import {
  PYQ_BANKS,
  getPyqBankById,
  buildPyqGroups,
  buildPyqTopicOptions
} from '../data/pyqBanks.js';
import { storage } from '../utils/storage.js';
import SEO from '../components/SEO.jsx';

const loadPersistedProgress = (bankId) => {
  const raw = storage.get(`pyq-exam-${bankId}`, null);
  return raw && typeof raw === 'object' ? raw : null;
};

const savePersistedProgress = (bankId, state) => {
  storage.set(`pyq-exam-${bankId}`, state);
};

const clearPersistedProgress = (bankId) => {
  storage.remove(`pyq-exam-${bankId}`);
};

const formatClock = (totalSeconds) => {
  const safe = Math.max(0, totalSeconds);
  const h = Math.floor(safe / 3600);
  const m = Math.floor((safe % 3600) / 60);
  const s = safe % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
};

const formatTaken = (totalSec) => {
  const mins = Math.floor(totalSec / 60);
  const secs = totalSec % 60;
  return mins === 0 ? `${secs}s` : `${mins}m ${secs}s`;
};

export default function PYQExamPage({ theme = 'dark' }) {
  const { bankId } = useParams();
  const bank = useMemo(() => getPyqBankById(bankId), [bankId]);

  const allQuestions = bank?.questions ?? [];
  const totalCount = allQuestions.length;

  /* -------- Cloud-style header selections -------- */
  const [activeGroup, setActiveGroup] = useState('all'); // topic tabs
  const [activeTopic, setActiveTopic] = useState('all'); // dropdown
  const [mode, setMode] = useState('exam'); // 'exam' | 'practice'

  /* Filtered active set (topic tabs + dropdown share the same keys) */
  const activeQuestions = useMemo(() => {
    const key = activeTopic !== 'all' ? activeTopic : activeGroup;
    if (key === 'all') return allQuestions;
    return allQuestions.filter((q) => q.topic === key);
  }, [allQuestions, activeGroup, activeTopic]);

  const total = activeQuestions.length;
  const timerTotal = total * 60; // timer equals number of questions (1 min each)

  /* -------- Core quiz state (keyed by question id) -------- */
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [marked, setMarked] = useState({}); // Marked-for-Review map
  const [visited, setVisited] = useState({});
  const [bookmarks, setBookmarks] = useState([]);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(() => timerTotal);
  const [timeTakenSeconds, setTimeTakenSeconds] = useState(0);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const autoSubmitRef = useRef(false);

  /* Reset state when the active set or mode changes */
  useEffect(() => {
    setCurrentIndex(0);
    autoSubmitRef.current = false;
    setTimeRemaining(timerTotal);
    setTimeTakenSeconds(0);
    setIsTimerPaused(false);
    setIsAnalysisOpen(false);
    setShowSubmitConfirm(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bankId, activeGroup, activeTopic, mode]);

  /* Restore persisted progress once per bank (first mount) */
  useEffect(() => {
    if (!bank) return;
    const saved = loadPersistedProgress(bank.id);
    if (saved && saved.answers && totalCount > 0) {
      setUserAnswers(saved.answers ?? {});
      setMarked(saved.marked ?? {});
      setVisited(saved.visited ?? {});
      setBookmarks(Array.isArray(saved.bookmarks) ? saved.bookmarks : []);
      if (typeof saved.timeTakenSeconds === 'number') {
        setTimeTakenSeconds(saved.timeTakenSeconds);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bankId]);

  /* Mark current question visited */
  useEffect(() => {
    const q = activeQuestions[currentIndex];
    if (!q) return;
    setVisited((prev) => (prev[q.id] ? prev : { ...prev, [q.id]: true }));
  }, [currentIndex, activeQuestions]);

  /* Persist progress */
  useEffect(() => {
    if (!bank) return;
    savePersistedProgress(bank.id, {
      answers: userAnswers,
      marked,
      visited,
      bookmarks,
      timeTakenSeconds
    });
  }, [bank, userAnswers, marked, visited, bookmarks, timeTakenSeconds]);

  /* Submit helper — opens the analysis report */
  const submitAssessment = useCallback(() => {
    setIsAnalysisOpen(true);
    setShowSubmitConfirm(false);
    setIsTimerPaused(true);
  }, []);

  /* Countdown timer (exam mode only; 1 min per question) */
  useEffect(() => {
    if (mode !== 'exam' || isTimerPaused || isAnalysisOpen || total === 0) {
      return undefined;
    }
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          autoSubmitRef.current = true;
          submitAssessment();
          return 0;
        }
        return prev - 1;
      });
      setTimeTakenSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [mode, isTimerPaused, isAnalysisOpen, total, submitAssessment]);

  const answeredCount = useMemo(
    () => activeQuestions.filter((q) => userAnswers[q.id]).length,
    [activeQuestions, userAnswers]
  );

  /* Auto-open analysis once every question is answered (exam mode) */
  useEffect(() => {
    if (
      mode === 'exam' &&
      !isAnalysisOpen &&
      total > 0 &&
      answeredCount === total &&
      !autoSubmitRef.current
    ) {
      autoSubmitRef.current = true;
      submitAssessment();
    }
  }, [mode, isAnalysisOpen, total, answeredCount, submitAssessment]);

  const currentQuestion = activeQuestions[currentIndex];
  const selectedAnswer = currentQuestion ? userAnswers[currentQuestion.id] : undefined;
  const isCurrentMarked = currentQuestion ? Boolean(marked[currentQuestion.id]) : false;
  const isCurrentBookmarked = currentQuestion
    ? bookmarks.includes(currentQuestion.id)
    : false;

  /* Practice-mode reveal: after answering, show per-option breakdown */
  const showPracticeReveal =
    mode === 'practice' && Boolean(selectedAnswer) && Boolean(currentQuestion);

  /* -------- Actions -------- */
  const handleSelectOption = (optionId) => {
    if (!currentQuestion) return;
    // In practice mode the first click locks the answer (Cloud behavior)
    if (mode === 'practice' && userAnswers[currentQuestion.id]) return;
    setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionId }));
  };

  const handleClearResponse = () => {
    if (!currentQuestion) return;
    setUserAnswers((prev) => {
      const next = { ...prev };
      delete next[currentQuestion.id];
      return next;
    });
  };

  const handleToggleMark = () => {
    if (!currentQuestion) return;
    setMarked((prev) => {
      const next = { ...prev };
      if (next[currentQuestion.id]) {
        delete next[currentQuestion.id];
      } else {
        next[currentQuestion.id] = true;
      }
      return next;
    });
  };

  const handleToggleBookmark = () => {
    if (!currentQuestion) return;
    setBookmarks((prev) =>
      prev.includes(currentQuestion.id)
        ? prev.filter((id) => id !== currentQuestion.id)
        : [...prev, currentQuestion.id]
    );
  };

  const goToIndex = useCallback(
    (idx) => {
      if (idx >= 0 && idx < total) {
        setCurrentIndex(idx);
        setSidebarOpen(false);
      }
    },
    [total]
  );

  const handleNextQuestion = () => goToIndex(currentIndex + 1);
  const handlePrevQuestion = () => goToIndex(currentIndex - 1);

  const handleResetQuiz = () => {
    setUserAnswers({});
    setMarked({});
    setVisited({});
    setCurrentIndex(0);
    setTimeRemaining(timerTotal);
    setTimeTakenSeconds(0);
    setIsTimerPaused(false);
    setIsAnalysisOpen(false);
    autoSubmitRef.current = false;
    if (bank) clearPersistedProgress(bank.id);
  };

  const handleRetakeQuiz = () => {
    handleResetQuiz();
  };

  const handleRetakeIncorrect = () => {
    const nextAnswers = { ...userAnswers };
    let firstIncorrectIdx = -1;
    activeQuestions.forEach((q, idx) => {
      if (nextAnswers[q.id] !== q.correctAnswer) {
        delete nextAnswers[q.id];
        if (firstIncorrectIdx === -1) firstIncorrectIdx = idx;
      }
    });
    setUserAnswers(nextAnswers);
    if (firstIncorrectIdx !== -1) setCurrentIndex(firstIncorrectIdx);
    setIsAnalysisOpen(false);
    setIsTimerPaused(false);
    autoSubmitRef.current = false;
  };

  /* -------- Analysis analytics (Cloud parity) -------- */
  const analytics = useMemo(() => {
    let correctCount = 0;
    let incorrectCount = 0;
    let skippedCount = 0;
    const topicStats = {};

    activeQuestions.forEach((q) => {
      const selected = userAnswers[q.id];
      const isSkipped = !selected;
      const isCorrect = selected === q.correctAnswer;
      if (isSkipped) skippedCount += 1;
      else if (isCorrect) correctCount += 1;
      else incorrectCount += 1;

      if (!topicStats[q.topicLabel]) {
        topicStats[q.topicLabel] = { total: 0, correct: 0 };
      }
      topicStats[q.topicLabel].total += 1;
      if (isCorrect) topicStats[q.topicLabel].correct += 1;
    });

    const percentage =
      total > 0 ? Math.round((correctCount / total) * 100) : 0;

    let grade = {
      title: 'Foundational Revision Needed',
      badge: 'Needs Work',
      color: '#ef4444'
    };
    if (percentage >= 90) {
      grade = {
        title: 'Accenture PYQ Specialist Ready',
        badge: 'Excellent (Top 5%)',
        color: '#10b981'
      };
    } else if (percentage >= 75) {
      grade = {
        title: 'High Potential — Assessment Ready',
        badge: 'Proficient',
        color: '#3b82f6'
      };
    } else if (percentage >= 55) {
      grade = {
        title: 'Moderate — Revise Weak Subtopics',
        badge: 'Average',
        color: '#f59e0b'
      };
    }

    const weakTopics = Object.entries(topicStats)
      .map(([topic, data]) => ({
        topic,
        accuracy: Math.round((data.correct / data.total) * 100)
      }))
      .filter((t) => t.accuracy < 70)
      .sort((a, b) => a.accuracy - b.accuracy);

    return {
      totalQuestions: total,
      correctCount,
      incorrectCount,
      skippedCount,
      percentage,
      grade,
      weakTopics
    };
  }, [activeQuestions, userAnswers, total]);

  const groups = useMemo(
    () => (bank ? buildPyqGroups(allQuestions) : []),
    [bank, allQuestions]
  );
  const topicOptions = useMemo(
    () => (bank ? buildPyqTopicOptions(allQuestions) : []),
    [bank, allQuestions]
  );

  /* -------- Unknown bank fallback -------- */
  if (!bank) {
    return (
      <div className="cloud-assessment-page" data-theme={theme}>
        <SEO title="PYQ Paper Not Found | Accenture Ready" />
        <div className="cloud-page-container">
          <div className="cloud-empty-state">
            <h3>PYQ paper not found</h3>
            <p>
              The question paper you are looking for is not available yet.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              {PYQ_BANKS.map((b) => (
                <Link
                  key={b.id}
                  to={`/pyq/${b.id}`}
                  className="cloud-btn cloud-btn-primary"
                >
                  <FileText size={15} /> {b.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const progressPercent =
    total > 0 ? Math.round((answeredCount / total) * 100) : 0;

  return (
    <div className="cloud-assessment-page" data-theme={theme}>
      <SEO title={`${bank.title} | Accenture Ready`} description={bank.description} />

      <div className="cloud-page-container">
        {/* ================= Quiz Header (Cloud parity) ================= */}
        <header className="cloud-quiz-header">
          <div className="cloud-header-top">
            <div className="cloud-brand">
              <div className="cloud-brand-icon">
                <FileSpreadsheet size={24} />
              </div>
              <div>
                <div className="cloud-tag-row">
                  <span className="cloud-badge cloud-badge-primary">
                    PYQ Paper
                  </span>
                  <span className="cloud-badge cloud-badge-secondary">
                    {totalCount} High-Yield Questions
                  </span>
                  <span
                    className="cloud-badge"
                    style={{
                      background: 'rgba(56, 189, 248, 0.15)',
                      color: '#38bdf8',
                      borderColor: 'rgba(56, 189, 248, 0.3)'
                    }}
                  >
                    ⏱️ {bank?.durationMinutes || totalCount} Mins (1 min / Q)
                  </span>
                  <span
                    className="cloud-badge"
                    style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#34d399',
                      borderColor: 'rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    Previous Year
                  </span>
                </div>
                <h1 className="cloud-title">{bank.title}</h1>
              </div>
            </div>

            <div className="cloud-header-actions">
              <button
                type="button"
                onClick={handleResetQuiz}
                className="cloud-btn cloud-btn-ghost"
                title="Reset answers for current set"
              >
                <RotateCcw size={16} />
                <span>Reset</span>
              </button>

              {/* Exam / Practice mode toggle */}
              <div className="cloud-mode-toggle" role="group" aria-label="Assessment Mode">
                <button
                  type="button"
                  className={`cloud-mode-btn ${mode === 'exam' ? 'active' : ''}`}
                  onClick={() => setMode('exam')}
                  title="Timed exam with final analysis report"
                >
                  <Award size={15} />
                  <span>Exam Mode</span>
                </button>
                <button
                  type="button"
                  className={`cloud-mode-btn ${mode === 'practice' ? 'active' : ''}`}
                  onClick={() => setMode('practice')}
                  title="Instant answers & per-option explanations"
                >
                  <Sparkles size={15} />
                  <span>Practice Mode</span>
                </button>
              </div>
            </div>
          </div>

          {/* Topic tabs (Cloud tier-tab parity) */}
          <div className="cloud-tier-nav">
            <div className="cloud-tier-tabs">
              {groups.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  className={`cloud-tier-tab ${activeGroup === group.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveGroup(group.id);
                    setActiveTopic(group.id);
                  }}
                >
                  <Layers size={14} />
                  <span>{group.title}</span>
                  <span className="cloud-tier-badge">{group.badge}</span>
                </button>
              ))}
            </div>

            <div className="cloud-topic-selector">
              <label htmlFor="pyq-topic-select" className="cloud-topic-label">
                Topic:
              </label>
              <select
                id="pyq-topic-select"
                className="cloud-topic-dropdown"
                value={activeTopic}
                onChange={(e) => {
                  setActiveTopic(e.target.value);
                  setActiveGroup(e.target.value);
                }}
              >
                {topicOptions.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Progress + timer + bookmarks status bar */}
          <div className="cloud-status-bar">
            <div className="cloud-progress-group">
              <span className="cloud-progress-label">
                Completed: <strong>{answeredCount}</strong> / {total} ({progressPercent}%)
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
              <div
                className={`cloud-timer-pill ${
                  mode === 'exam' && timeRemaining < 300 ? 'timer-warning' : ''
                }`}
                title={`1 minute per question — ${total} questions (${total} min)`}
              >
                <Clock size={16} />
                <span className="cloud-timer-digits">
                  {formatClock(timeRemaining)}
                </span>
                {mode === 'exam' && (
                  <button
                    type="button"
                    onClick={() => setIsTimerPaused((v) => !v)}
                    className="cloud-timer-pause-btn"
                    title={isTimerPaused ? 'Resume Timer' : 'Pause Timer'}
                  >
                    {isTimerPaused ? '▶' : '⏸'}
                  </button>
                )}
              </div>

              <div className="cloud-bookmark-pill">
                <Bookmark size={15} />
                <span>{bookmarks.length} Bookmarked</span>
              </div>
            </div>
          </div>
        </header>

        {/* ================= Workspace ================= */}
        <div className="cloud-workspace-layout">
          {/* ---------- Left: Question Card ---------- */}
          <main className="cloud-question-column">
            {total === 0 ? (
              <div className="cloud-empty-state">
                <h3>No questions found matching your filter.</h3>
                <p>Try selecting "All Topics" above.</p>
                <button
                  type="button"
                  className="cloud-btn cloud-btn-primary"
                  onClick={() => {
                    setActiveGroup('all');
                    setActiveTopic('all');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              currentQuestion && (
                <article className="cloud-card">
                  {/* Meta row */}
                  <div className="cloud-card-meta">
                    <div className="cloud-meta-left">
                      <span className="cloud-qnumber">
                        Question <strong>{currentIndex + 1}</strong> of {total}
                      </span>
                      <span className="cloud-badge cloud-badge-tier">
                        {currentQuestion.topicLabel}
                      </span>
                      {mode === 'practice' && selectedAnswer && (
                        selectedAnswer === currentQuestion.correctAnswer ? (
                          <span className="cloud-badge cloud-diff-easy">
                            Correct
                          </span>
                        ) : (
                          <span className="cloud-badge cloud-diff-hard">
                            Incorrect
                          </span>
                        )
                      )}
                      {isCurrentMarked && (
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
                      onClick={handleToggleBookmark}
                      className={`cloud-bookmark-btn ${isCurrentBookmarked ? 'active' : ''}`}
                      title={isCurrentBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
                    >
                      <Bookmark size={17} fill={isCurrentBookmarked ? 'currentColor' : 'none'} />
                      <span>{isCurrentBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                    </button>
                  </div>

                  {/* Question prompt */}
                  <h2 className="cloud-question-text">{currentQuestion.question}</h2>

                  {/* Options */}
                  <div className="cloud-options-grid" role="radiogroup" aria-label="Answer Options">
                    {currentQuestion.options.map((option) => {
                      const isSelected = selectedAnswer === option.id;
                      const isCorrectOpt = option.id === currentQuestion.correctAnswer;
                      const reveal = mode === 'practice' && Boolean(selectedAnswer);

                      let optionStyle = 'cloud-option-item';
                      if (reveal) {
                        if (isCorrectOpt) optionStyle += ' cloud-option-correct';
                        else if (isSelected) optionStyle += ' cloud-option-incorrect';
                        // Neutral distractors keep FULL opacity so their
                        // explanations stay readable (no blur/dimming)
                        else optionStyle += ' cloud-option-neutral';
                      } else if (isSelected) {
                        optionStyle += ' cloud-option-selected';
                      }

                      return (
                        <button
                          key={option.id}
                          type="button"
                          className={optionStyle}
                          onClick={() => handleSelectOption(option.id)}
                          aria-checked={isSelected}
                          role="radio"
                        >
                          <div className="cloud-option-letter-badge">{option.id}</div>
                          <div className="cloud-option-text-wrap">
                            <span className="cloud-option-text">{option.text}</span>
                            {/* Practice mode: per-option explanation under the text */}
                            {reveal && (
                              <span
                                className="cloud-option-expl"
                                style={{
                                  color: isCorrectOpt
                                    ? '#34d399'
                                    : isSelected
                                      ? '#f87171'
                                      : 'var(--text-secondary)'
                                }}
                              >
                                {isCorrectOpt && (
                                  <strong className="cloud-option-expl-label">
                                    <CheckCircle2 size={13} /> Correct:
                                  </strong>
                                )}
                                {!isCorrectOpt && isSelected && (
                                  <strong className="cloud-option-expl-label">
                                    <XCircle size={13} /> Your pick — incorrect:
                                  </strong>
                                )}
                                {!isCorrectOpt && !isSelected && (
                                  <strong className="cloud-option-expl-label cloud-option-expl-label-neutral">
                                    <XCircle size={13} /> Why it's wrong:
                                  </strong>
                                )}
                                {currentQuestion.optionExplanations[option.id]}
                              </span>
                            )}
                          </div>
                          <div className="cloud-option-status-icon">
                            {reveal && isCorrectOpt && (
                              <CheckCircle2 size={20} className="cloud-icon-correct" />
                            )}
                            {reveal && isSelected && !isCorrectOpt && (
                              <XCircle size={20} className="cloud-icon-wrong" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* In-card action bar: all four original controls */}
                  <div className="cloud-card-actions">
                    <div className="cloud-actions-left">
                      {selectedAnswer && (
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
                        className={`cloud-btn-hint ${isCurrentMarked ? 'cloud-marked-active' : ''}`}
                        title={isCurrentMarked ? 'Remove review mark' : 'Mark for Review'}
                        style={
                          isCurrentMarked
                            ? {
                                background: '#f59e0b',
                                color: '#1f2937',
                                borderColor: '#f59e0b'
                              }
                            : undefined
                        }
                      >
                        <Flag size={14} />
                        {isCurrentMarked ? 'Marked for Review' : 'Mark for Review'}
                      </button>
                    </div>

                    <div className="cloud-nav-buttons">
                      <button
                        type="button"
                        className="cloud-btn cloud-btn-secondary"
                        onClick={handlePrevQuestion}
                        disabled={currentIndex === 0}
                      >
                        <ChevronLeft size={16} />
                        <span>Previous</span>
                      </button>
                      <button
                        type="button"
                        className="cloud-btn cloud-btn-primary"
                        onClick={handleNextQuestion}
                        disabled={currentIndex === total - 1}
                      >
                        <span>Next</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Exam mode: after submit show takeaway under the card */}
                  {mode === 'exam' && isAnalysisOpen && (
                    <div className="cloud-explanation-box">
                      <div className="cloud-explanation-header">
                        <div className="cloud-expl-badge">
                          <CheckCircle2 size={18} />
                          <span>Correct Answer: Option {currentQuestion.correctAnswer}</span>
                        </div>
                      </div>
                      <div className="cloud-explanation-body">
                        <p className="cloud-expl-text">{currentQuestion.explanation}</p>
                      </div>
                    </div>
                  )}
                </article>
              )
            )}
          </main>

          {/* ---------- Right: Question Navigator ---------- */}
          {total > 0 && (
            <div className="cloud-palette-column">
              <aside className="cloud-palette-card">
                <div className="cloud-palette-header">
                  <div className="cloud-palette-title">
                    <Grid size={18} />
                    <span>Question Navigator</span>
                  </div>
                  <span className="cloud-palette-summary">
                    {answeredCount}/{total}
                  </span>
                </div>

                {/* Legend (Cloud order: Current / Answered / Marked / Unanswered) */}
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
                  {activeQuestions.map((q, idx) => {
                    const isAnswered = Boolean(userAnswers[q.id]);
                    const isMarked = Boolean(marked[q.id]);
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
                        onClick={() => goToIndex(idx)}
                        title={`Question ${idx + 1}`}
                      >
                        <span>{idx + 1}</span>
                        {isMarked && <span className="cloud-palette-marker" />}
                      </button>
                    );
                  })}
                </div>

                {/* Submit / scorecard button */}
                <div className="cloud-palette-footer">
                  <button
                    type="button"
                    className="cloud-submit-btn"
                    onClick={() => {
                      if (mode === 'exam') {
                        if (answeredCount < total) {
                          setShowSubmitConfirm(true);
                        } else {
                          submitAssessment();
                        }
                      } else {
                        submitAssessment();
                      }
                    }}
                  >
                    {mode === 'exam' ? (
                      <>
                        <Award size={16} />
                        <span>Submit & View Analysis</span>
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} />
                        <span>Complete & View Scorecard</span>
                      </>
                    )}
                  </button>
                </div>
              </aside>
            </div>
          )}
        </div>
      </div>

      {/* ================= Submit confirmation ================= */}
      {showSubmitConfirm && (
        <div
          className="cloud-modal-overlay"
          onClick={() => setShowSubmitConfirm(false)}
        >
          <div
            className="cloud-analysis-modal"
            style={{ maxWidth: 460 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cloud-analysis-header">
              <div className="cloud-analysis-title-group">
                <div
                  className="cloud-trophy-badge"
                  style={{ backgroundColor: 'rgba(245,158,11,0.15)', color: '#fbbf24' }}
                >
                  <AlertTriangle size={26} />
                </div>
                <div>
                  <h2 className="cloud-analysis-title" style={{ fontSize: '1.15rem' }}>
                    Submit the paper?
                  </h2>
                </div>
              </div>
            </div>
            <div className="cloud-analysis-body">
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                You have answered <strong>{answeredCount}</strong> of{' '}
                <strong>{total}</strong> questions
                {Object.keys(marked).length > 0
                  ? ` and ${Object.keys(marked).length} are marked for review`
                  : ''}
                . Unanswered questions will be marked as skipped in the analysis.
              </p>
            </div>
            <div className="cloud-analysis-footer">
              <button
                type="button"
                className="cloud-btn cloud-btn-secondary"
                onClick={() => setShowSubmitConfirm(false)}
              >
                Keep Working
              </button>
              <button
                type="button"
                className="cloud-btn cloud-btn-primary"
                onClick={submitAssessment}
              >
                <Award size={15} /> Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= Analysis Modal ================= */}
      {isAnalysisOpen && (
        <div
          className="cloud-modal-overlay"
          onClick={() => setIsAnalysisOpen(false)}
        >
          <div
            className="cloud-analysis-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="cloud-analysis-header">
              <div className="cloud-analysis-title-group">
                <div
                  className="cloud-trophy-badge"
                  style={{ backgroundColor: `${analytics.grade.color}20`, color: analytics.grade.color }}
                >
                  <Award size={28} />
                </div>
                <div>
                  <span
                    className="cloud-badge"
                    style={{
                      backgroundColor: `${analytics.grade.color}20`,
                      color: analytics.grade.color,
                      borderColor: analytics.grade.color
                    }}
                  >
                    {analytics.grade.badge}
                  </span>
                  <h2 className="cloud-analysis-title">{analytics.grade.title}</h2>
                </div>
              </div>
              <button
                type="button"
                className="cloud-modal-close"
                onClick={() => setIsAnalysisOpen(false)}
                aria-label="Close Analysis"
              >
                <X size={20} />
              </button>
            </div>

            <div className="cloud-analysis-body">
              {/* Metric cards */}
              <div className="cloud-metrics-grid">
                <div className="cloud-metric-card score">
                  <span className="cloud-metric-label">Overall Score</span>
                  <div className="cloud-metric-value">
                    {analytics.correctCount}{' '}
                    <span className="cloud-metric-sub">/ {analytics.totalQuestions}</span>
                  </div>
                  <span className="cloud-metric-footer">
                    {analytics.percentage}% Accuracy
                  </span>
                </div>
                <div className="cloud-metric-card correct">
                  <span className="cloud-metric-label">Correct Answers</span>
                  <div className="cloud-metric-value text-green">
                    <CheckCircle2 size={24} />
                    <span>{analytics.correctCount}</span>
                  </div>
                  <span className="cloud-metric-footer">Well done</span>
                </div>
                <div className="cloud-metric-card wrong">
                  <span className="cloud-metric-label">Incorrect Answers</span>
                  <div className="cloud-metric-value text-red">
                    <XCircle size={24} />
                    <span>{analytics.incorrectCount}</span>
                  </div>
                  <span className="cloud-metric-footer">Review recommended</span>
                </div>
                <div className="cloud-metric-card time">
                  <span className="cloud-metric-label">Skipped</span>
                  <div className="cloud-metric-value text-blue">
                    <Clock size={24} />
                    <span>{analytics.skippedCount}</span>
                  </div>
                  <span className="cloud-metric-footer">
                    Time used: {formatTaken(timeTakenSeconds)}
                  </span>
                </div>
              </div>

              {/* Weak topics banner */}
              {analytics.weakTopics.length > 0 && (
                <div className="cloud-recommendations-banner">
                  <div className="cloud-rec-icon">
                    <AlertTriangle size={20} />
                  </div>
                  <div className="cloud-rec-content">
                    <h4 className="cloud-rec-title">Priority Revision Topics</h4>
                    <p className="cloud-rec-desc">Based on your performance, focus revision on:</p>
                    <div className="cloud-rec-tags">
                      {analytics.weakTopics.map((item) => (
                        <span key={item.topic} className="cloud-rec-tag">
                          {item.topic} ({item.accuracy}% accurate)
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Per-question review with per-option explanations */}
              <div className="cloud-analysis-section">
                <h3 className="cloud-section-heading">
                  <Check size={18} />
                  <span>Detailed Question Review & Solutions ({total})</span>
                </h3>

                <div className="cloud-review-list">
                  {activeQuestions.map((q, idx) => {
                    const userChoice = userAnswers[q.id];
                    const isCorrect = userChoice === q.correctAnswer;
                    const isSkipped = !userChoice;

                    return (
                      <div
                        key={q.id}
                        className={`cloud-review-item ${
                          isCorrect ? 'item-correct' : isSkipped ? 'item-skipped' : 'item-incorrect'
                        }`}
                      >
                        <div className="cloud-review-item-header" style={{ cursor: 'default' }}>
                          <div className="cloud-review-header-left">
                            <span className="cloud-review-qnum">#{idx + 1}</span>
                            <div className="cloud-review-status-icon">
                              {isCorrect && <CheckCircle2 size={18} className="text-green" />}
                              {!isCorrect && !isSkipped && <XCircle size={18} className="text-red" />}
                              {isSkipped && <span className="cloud-skipped-indicator">Skipped</span>}
                            </div>
                            <span className="cloud-review-item-title">{q.question}</span>
                          </div>
                        </div>

                        <div className="cloud-review-item-content">
                          <div className="cloud-review-options-summary">
                            <div className="cloud-review-choice">
                              <span className="choice-label">Your Answer:</span>
                              <span className={`choice-val ${isCorrect ? 'text-green' : 'text-red'}`}>
                                {userChoice ? `Option ${userChoice}` : 'None (Skipped)'}
                              </span>
                            </div>
                            <div className="cloud-review-choice">
                              <span className="choice-label">Correct Answer:</span>
                              <span className="choice-val text-green">Option {q.correctAnswer}</span>
                            </div>
                          </div>

                          {/* All-option breakdown cards */}
                          <div className="cloud-breakdown-cards" style={{ marginTop: '0.75rem' }}>
                            {q.options.map((opt) => {
                              const isThisCorrect = opt.id === q.correctAnswer;
                              const isUserSelected = opt.id === userChoice;
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
                                          <X size={13} /> Your Choice
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <div className="breakdown-card-desc">
                                    <p className="breakdown-text">
                                      {q.optionExplanations[opt.id] ||
                                        (isThisCorrect ? q.explanation : 'Incorrect option.')}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          <div className="cloud-review-explanation-text" style={{ marginTop: '0.6rem' }}>
                            <strong>Summary Takeaway: </strong>
                            {q.explanation}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer actions */}
            <div className="cloud-analysis-footer">
              <button
                type="button"
                className="cloud-btn cloud-btn-secondary"
                onClick={handleRetakeIncorrect}
              >
                <RotateCcw size={16} />
                <span>Retake Missed</span>
              </button>
              <button
                type="button"
                className="cloud-btn cloud-btn-primary"
                onClick={handleRetakeQuiz}
              >
                <RotateCcw size={16} />
                <span>Retake Assessment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}