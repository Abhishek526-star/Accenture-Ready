// src/components/cloud/CloudAnalysisModal.jsx
import React, { useState, useMemo } from 'react';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  BookOpen,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Zap,
  Bookmark,
  Target,
  BarChart3,
  X,
  Filter,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { getOptionBreakdown } from '../../data/cloudQuestions.js';

export default function CloudAnalysisModal({
  isOpen,
  onClose,
  questions,
  userAnswers,
  bookmarks,
  timeTakenSeconds,
  onRetakeQuiz,
  onRetakeIncorrect,
  getOptionBreakdownCustom
}) {
  const [reviewFilter, setReviewFilter] = useState('all'); // 'all' | 'incorrect' | 'correct' | 'skipped' | 'bookmarked'
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);

  // Compute analytics
  const analytics = useMemo(() => {
    let correctCount = 0;
    let incorrectCount = 0;
    let skippedCount = 0;

    const topicStats = {};
    const tierStats = {};

    questions.forEach((q) => {
      const selected = userAnswers[q.id];
      const isCorrect = selected === q.correctAnswer;
      const isSkipped = !selected;

      if (isSkipped) {
        skippedCount++;
      } else if (isCorrect) {
        correctCount++;
      } else {
        incorrectCount++;
      }

      // Aggregate by topic
      if (!topicStats[q.topic]) {
        topicStats[q.topic] = { total: 0, correct: 0, incorrect: 0, skipped: 0 };
      }
      topicStats[q.topic].total++;
      if (isCorrect) topicStats[q.topic].correct++;
      else if (isSkipped) topicStats[q.topic].skipped++;
      else topicStats[q.topic].incorrect++;

      // Aggregate by tier
      const tierKey = `Tier ${q.tier}`;
      if (!tierStats[tierKey]) {
        tierStats[tierKey] = { total: 0, correct: 0, incorrect: 0, skipped: 0 };
      }
      tierStats[tierKey].total++;
      if (isCorrect) tierStats[tierKey].correct++;
      else if (isSkipped) tierStats[tierKey].skipped++;
      else tierStats[tierKey].incorrect++;
    });

    const totalQuestions = questions.length;
    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    // Determine performance grade and recommendation
    let grade = { title: 'Foundational Revision Needed', badge: 'Needs Work', color: '#ef4444' };
    if (percentage >= 90) {
      grade = { title: 'Accenture Cloud Specialist Ready', badge: 'Excellent (Top 5%)', color: '#10b981' };
    } else if (percentage >= 75) {
      grade = { title: 'High Potential — Assessment Ready', badge: 'Proficient', color: '#3b82f6' };
    } else if (percentage >= 55) {
      grade = { title: 'Moderate — Revise Weak Subtopics', badge: 'Average', color: '#f59e0b' };
    }

    // Weak topics (accuracy < 70%)
    const weakTopics = Object.entries(topicStats)
      .map(([topic, data]) => ({
        topic,
        accuracy: Math.round((data.correct / data.total) * 100),
        ...data
      }))
      .filter((t) => t.accuracy < 70 && t.total >= 1)
      .sort((a, b) => a.accuracy - b.accuracy);

    return {
      totalQuestions,
      correctCount,
      incorrectCount,
      skippedCount,
      percentage,
      grade,
      topicStats,
      tierStats,
      weakTopics
    };
  }, [questions, userAnswers]);

  if (!isOpen) return null;

  // Format time taken
  const formatTime = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    if (mins === 0) return `${secs}s`;
    return `${mins}m ${secs}s`;
  };

  // Filter questions for detailed review
  const reviewQuestions = questions.filter((q) => {
    const selected = userAnswers[q.id];
    const isCorrect = selected === q.correctAnswer;
    const isSkipped = !selected;
    const isBookmarked = bookmarks.includes(q.id);

    if (reviewFilter === 'incorrect') return !isCorrect && !isSkipped;
    if (reviewFilter === 'correct') return isCorrect;
    if (reviewFilter === 'skipped') return isSkipped;
    if (reviewFilter === 'bookmarked') return isBookmarked;
    return true;
  });

  const toggleQuestionExpanded = (id) => {
    setExpandedQuestionId(expandedQuestionId === id ? null : id);
  };

  return (
    <div className="cloud-modal-overlay" onClick={onClose}>
      <div className="cloud-analysis-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="cloud-analysis-header">
          <div className="cloud-analysis-title-group">
            <div className="cloud-trophy-badge" style={{ backgroundColor: `${analytics.grade.color}20`, color: analytics.grade.color }}>
              <Trophy size={28} />
            </div>
            <div>
              <span className="cloud-badge" style={{ backgroundColor: `${analytics.grade.color}20`, color: analytics.grade.color, borderColor: analytics.grade.color }}>
                {analytics.grade.badge}
              </span>
              <h2 className="cloud-analysis-title">{analytics.grade.title}</h2>
            </div>
          </div>
          <button
            type="button"
            className="cloud-modal-close"
            onClick={onClose}
            aria-label="Close Analysis"
          >
            <X size={20} />
          </button>
        </div>

        <div className="cloud-analysis-body">
          {/* Main Key Metrics Cards */}
          <div className="cloud-metrics-grid">
            <div className="cloud-metric-card score">
              <span className="cloud-metric-label">Overall Score</span>
              <div className="cloud-metric-value">
                {analytics.correctCount} <span className="cloud-metric-sub">/ {analytics.totalQuestions}</span>
              </div>
              <span className="cloud-metric-footer">{analytics.percentage}% Accuracy</span>
            </div>

            <div className="cloud-metric-card correct">
              <span className="cloud-metric-label">Correct Answers</span>
              <div className="cloud-metric-value text-green">
                <CheckCircle2 size={24} />
                <span>{analytics.correctCount}</span>
              </div>
              <span className="cloud-metric-footer">+{analytics.correctCount} points</span>
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
              <span className="cloud-metric-label">Time Taken</span>
              <div className="cloud-metric-value text-blue">
                <Clock size={24} />
                <span>{formatTime(timeTakenSeconds)}</span>
              </div>
              <span className="cloud-metric-footer">
                ~{analytics.totalQuestions > 0 ? Math.round(timeTakenSeconds / analytics.totalQuestions) : 0}s per question
              </span>
            </div>
          </div>

          {/* Weak Areas & Recommendations (if any mistakes) */}
          {analytics.weakTopics.length > 0 && (
            <div className="cloud-recommendations-banner">
              <div className="cloud-rec-icon">
                <AlertTriangle size={20} />
              </div>
              <div className="cloud-rec-content">
                <h4 className="cloud-rec-title">Priority Revision Topics</h4>
                <p className="cloud-rec-desc">
                  Based on your performance, focus revision on:
                </p>
                <div className="cloud-rec-tags">
                  {analytics.weakTopics.map((item) => (
                    <span key={item.topic} className="cloud-rec-tag">
                      {item.topic} ({item.accuracy}% accurate)
                    </span>
                  ))}
                </div>
              </div>
              {analytics.incorrectCount > 0 && (
                <button
                  type="button"
                  className="cloud-btn-retake-missed"
                  onClick={onRetakeIncorrect}
                >
                  <RotateCcw size={15} />
                  <span>Retry Missed ({analytics.incorrectCount})</span>
                </button>
              )}
            </div>
          )}

          {/* Section 1: Topic Mastery Breakdown */}
          <div className="cloud-analysis-section">
            <h3 className="cloud-section-heading">
              <BarChart3 size={18} />
              <span>Topic-Wise Mastery Breakdown</span>
            </h3>

            <div className="cloud-topics-breakdown-list">
              {Object.entries(analytics.topicStats).map(([topicName, stats]) => {
                const accuracy = Math.round((stats.correct / stats.total) * 100);
                const progressColor =
                  accuracy >= 80 ? 'var(--success)' : accuracy >= 50 ? 'var(--warning)' : 'var(--danger)';

                return (
                  <div key={topicName} className="cloud-topic-bar-row">
                    <div className="cloud-topic-bar-header">
                      <span className="cloud-topic-name">{topicName}</span>
                      <span className="cloud-topic-stats-text">
                        <strong>{stats.correct}</strong> / {stats.total} ({accuracy}%)
                      </span>
                    </div>
                    <div className="cloud-topic-bar-track">
                      <div
                        className="cloud-topic-bar-fill"
                        style={{
                          width: `${accuracy}%`,
                          backgroundColor: progressColor
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Tier Comparison (if multiple tiers attempted) */}
          {Object.keys(analytics.tierStats).length > 1 && (
            <div className="cloud-analysis-section">
              <h3 className="cloud-section-heading">
                <Target size={18} />
                <span>Tier Performance Breakdown</span>
              </h3>
              <div className="cloud-tiers-comparison-grid">
                {Object.entries(analytics.tierStats).map(([tierName, stats]) => {
                  const acc = Math.round((stats.correct / stats.total) * 100);
                  return (
                    <div key={tierName} className="cloud-tier-card">
                      <span className="cloud-tier-card-title">{tierName}</span>
                      <div className="cloud-tier-card-metric">
                        <span>{acc}%</span>
                        <span className="cloud-tier-card-sub">({stats.correct}/{stats.total})</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Section 3: Question-by-Question Solution Review */}
          <div className="cloud-analysis-section">
            <div className="cloud-review-header">
              <h3 className="cloud-section-heading">
                <BookOpen size={18} />
                <span>Detailed Question Review & Solutions ({reviewQuestions.length})</span>
              </h3>

              {/* Review Filter Pills */}
              <div className="cloud-review-filter-pills" role="tablist">
                <button
                  type="button"
                  className={`cloud-filter-pill ${reviewFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('all')}
                >
                  All ({analytics.totalQuestions})
                </button>
                <button
                  type="button"
                  className={`cloud-filter-pill ${reviewFilter === 'incorrect' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('incorrect')}
                >
                  Incorrect ({analytics.incorrectCount})
                </button>
                <button
                  type="button"
                  className={`cloud-filter-pill ${reviewFilter === 'correct' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('correct')}
                >
                  Correct ({analytics.correctCount})
                </button>
                <button
                  type="button"
                  className={`cloud-filter-pill ${reviewFilter === 'skipped' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('skipped')}
                >
                  Skipped ({analytics.skippedCount})
                </button>
              </div>
            </div>

            {/* Questions Review List */}
            <div className="cloud-review-list">
              {reviewQuestions.map((q, idx) => {
                const userChoice = userAnswers[q.id];
                const isCorrect = userChoice === q.correctAnswer;
                const isSkipped = !userChoice;
                const isExpanded = expandedQuestionId === q.id;

                return (
                  <div
                    key={q.id}
                    className={`cloud-review-item ${
                      isCorrect ? 'item-correct' : isSkipped ? 'item-skipped' : 'item-incorrect'
                    }`}
                  >
                    <div
                      className="cloud-review-item-header"
                      onClick={() => toggleQuestionExpanded(q.id)}
                    >
                      <div className="cloud-review-header-left">
                        <span className="cloud-review-qnum">#{idx + 1}</span>
                        <div className="cloud-review-status-icon">
                          {isCorrect && <CheckCircle2 size={18} className="text-green" />}
                          {!isCorrect && !isSkipped && <XCircle size={18} className="text-red" />}
                          {isSkipped && <span className="cloud-skipped-indicator">Skipped</span>}
                        </div>
                        <span className="cloud-review-item-title">{q.question}</span>
                      </div>
                      <div className="cloud-review-header-right">
                        <span className="cloud-badge cloud-badge-topic">{q.topic}</span>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>

                    {/* Always visible quick summary or expanded details */}
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

                      {/* Expanded Options & Full 4-Option Analysis */}
                      <div className="cloud-review-expanded">
                        <div className="cloud-breakdown-cards mt-2">
                          {(() => {
                            const optBreakdown = (getOptionBreakdownCustom ? getOptionBreakdownCustom(q.id) : getOptionBreakdown(q.id)) || {};
                            return q.options.map((opt) => {
                              const isThisCorrect = opt.id === q.correctAnswer;
                              const isUserSelected = opt.id === userChoice;
                              const rawExpl = optBreakdown[opt.id];
                              let expl = '';
                              if (rawExpl) {
                                if (typeof rawExpl === 'object') {
                                  expl = rawExpl.why || rawExpl.text || '';
                                } else {
                                  expl = String(rawExpl);
                                }
                              } else {
                                expl = isThisCorrect ? q.explanation : 'Incorrect option.';
                              }

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
                                          <XCircle size={13} /> Your Choice
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <div className="breakdown-card-desc">
                                    <p className="breakdown-text">{expl}</p>
                                  </div>
                                </div>
                              );
                            });
                          })()}
                        </div>

                        <div className="cloud-review-explanation-text mt-3">
                          <strong>Summary Takeaway: </strong>
                          {q.explanation}
                          {(q.memoryTip || q.accentureTip) && (
                            <div style={{ marginTop: '0.4rem', color: '#38bdf8', fontSize: '0.8rem', fontWeight: 600 }}>
                              ⚡ Shortcut: {q.memoryTip || q.accentureTip}
                            </div>
                          )}
                        </div>

                        {q.memoryTip && (
                          <div className="cloud-memory-shortcut mt-2">
                            <Zap size={14} />
                            <span>Accenture Shortcut: {q.memoryTip}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="cloud-analysis-footer">
          <button
            type="button"
            className="cloud-btn cloud-btn-secondary"
            onClick={onClose}
          >
            Review In Dashboard
          </button>
          <button
            type="button"
            className="cloud-btn cloud-btn-primary"
            onClick={onRetakeQuiz}
          >
            <RotateCcw size={16} />
            <span>Retake Assessment</span>
          </button>
        </div>
      </div>
    </div>
  );
}
