// src/components/cloud/CloudQuizHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Cloud,
  ShieldCheck,
  Network,
  Clock,
  BookOpen,
  Award,
  Pause,
  Play,
  Bookmark,
  RotateCcw,
  Sparkles,
  Layers,
  HelpCircle
} from 'lucide-react';
import { CLOUD_TIERS, CLOUD_TOPICS } from '../../data/cloudQuestions.js';

export default function CloudQuizHeader({
  activeTier,
  onSelectTier,
  activeTopic,
  onSelectTopic,
  mode, // 'exam' | 'practice'
  onChangeMode,
  timeRemaining,
  isTimerPaused,
  onToggleTimer,
  totalQuestions,
  answeredCount,
  bookmarkedCount,
  onOpenStudyNotes,
  onResetQuiz,
  title = 'Cloud Computing Assessment & PYQ Quiz',
  trackBadge = 'Cloud Computing Track',
  countBadge = '85 High-Yield Questions',
  icon: HeaderIcon = Cloud,
  tiers = CLOUD_TIERS,
  topics = CLOUD_TOPICS,
  notesButtonText = 'Study Notes',
  switchLinks
}) {
  // Format seconds into MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  return (
    <header className="cloud-quiz-header">
      {/* Top Banner & Title */}
      <div className="cloud-header-top">
        <div className="cloud-brand">
          <div className="cloud-brand-icon">
            <HeaderIcon size={24} />
          </div>
          <div>
            <div className="cloud-tag-row">
              <span className="cloud-badge cloud-badge-primary">{trackBadge}</span>
              <span className="cloud-badge cloud-badge-secondary">{countBadge}</span>
              {switchLinks ? (
                switchLinks
              ) : (
                <>
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
                    <ShieldCheck size={13} /> Cloud Security (45) &rarr;
                  </Link>
                  <Link
                    to="/network-assessment"
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
                    <Network size={13} /> Networking (90) &rarr;
                  </Link>
                </>
              )}
            </div>
            <h1 className="cloud-title">{title}</h1>
          </div>
        </div>

        {/* Action Controls: Mode Switcher, Notes, Reset */}
        <div className="cloud-header-actions">
          <button
            type="button"
            onClick={onOpenStudyNotes}
            className="cloud-btn cloud-btn-secondary"
            title="Open PDF Study Guides & Revision Sheets"
          >
            <BookOpen size={16} />
            <span>{notesButtonText}</span>
          </button>

          <button
            type="button"
            onClick={onResetQuiz}
            className="cloud-btn cloud-btn-ghost"
            title="Reset answers for current set"
          >
            <RotateCcw size={16} />
            <span>Reset</span>
          </button>

          {/* Mode Switcher */}
          <div className="cloud-mode-toggle" role="group" aria-label="Assessment Mode">
            <button
              type="button"
              className={`cloud-mode-btn ${mode === 'exam' ? 'active' : ''}`}
              onClick={() => onChangeMode('exam')}
              title="Timed exam with final analysis report"
            >
              <Award size={15} />
              <span>Exam Mode</span>
            </button>
            <button
              type="button"
              className={`cloud-mode-btn ${mode === 'practice' ? 'active' : ''}`}
              onClick={() => onChangeMode('practice')}
              title="Immediate answers & memory tips after every question"
            >
              <Sparkles size={15} />
              <span>Practice Mode</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tier Switcher Bar */}
      <div className="cloud-tier-nav">
        <div className="cloud-tier-tabs">
          {tiers.map((tier) => {
            const isActive = activeTier === tier.id;
            return (
              <button
                key={tier.id}
                type="button"
                className={`cloud-tier-tab ${isActive ? 'active' : ''}`}
                onClick={() => onSelectTier(tier.id)}
              >
                <Layers size={14} />
                <span className="cloud-tier-title">{tier.title}</span>
                <span className="cloud-tier-badge">{tier.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Topic Filter Dropdown */}
        <div className="cloud-topic-selector">
          <label htmlFor="cloud-topic-select" className="cloud-topic-label">
            Topic:
          </label>
          <select
            id="cloud-topic-select"
            className="cloud-topic-dropdown"
            value={activeTopic}
            onChange={(e) => onSelectTopic(e.target.value)}
          >
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Progress & Countdown Status Bar */}
      <div className="cloud-status-bar">
        <div className="cloud-progress-group">
          <span className="cloud-progress-label">
            Completed: <strong>{answeredCount}</strong> / {totalQuestions} ({progressPercent}%)
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
          {/* Countdown Clock (Exam Mode) */}
          {mode === 'exam' && (
            <div className={`cloud-timer-pill ${timeRemaining < 300 ? 'timer-warning' : ''}`}>
              <Clock size={16} />
              <span className="cloud-timer-digits">{formatTime(timeRemaining)}</span>
              <button
                type="button"
                onClick={onToggleTimer}
                className="cloud-timer-pause-btn"
                title={isTimerPaused ? 'Resume Timer' : 'Pause Timer'}
                aria-label={isTimerPaused ? 'Resume Timer' : 'Pause Timer'}
              >
                {isTimerPaused ? <Play size={14} /> : <Pause size={14} />}
              </button>
            </div>
          )}

          {/* Bookmarks Counter */}
          <div className="cloud-bookmark-pill">
            <Bookmark size={15} />
            <span>{bookmarkedCount} Bookmarked</span>
          </div>
        </div>
      </div>
    </header>
  );
}
