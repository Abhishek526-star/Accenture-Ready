// src/components/interview/InterviewQuestionPalette.jsx
import React from 'react';
import {
  Grid,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Shuffle
} from 'lucide-react';

export default function InterviewQuestionPalette({
  questions = [],
  currentIndex = 0,
  onSelectIndex,
  revealedQuestionIds = {},
  reviewedQuestionIds = {},
  onToggleReviewed,
  onResetReviewed
}) {
  const total = questions.length;
  if (total === 0) return null;

  const reviewedCount = questions.filter(
    (q) => reviewedQuestionIds[q.id] || revealedQuestionIds[q.id]
  ).length;

  const currentQ = questions[currentIndex];
  const isCurrentReviewed = currentQ && (reviewedQuestionIds[currentQ.id] || revealedQuestionIds[currentQ.id]);

  const handleRandomQuestion = () => {
    if (total <= 1) return;
    let nextIdx = Math.floor(Math.random() * total);
    if (nextIdx === currentIndex) {
      nextIdx = (nextIdx + 1) % total;
    }
    onSelectIndex(nextIdx);
  };

  return (
    <aside className="interview-palette-card">
      {/* Palette Header */}
      <div className="interview-palette-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div className="interview-palette-icon-box">
            <Grid size={17} className="text-purple-400" />
          </div>
          <div>
            <span className="interview-palette-title">Question Palette</span>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
              Jump to any interview question
            </div>
          </div>
        </div>

        <span
          className="interview-palette-badge"
          style={{
            background: reviewedCount === total ? 'rgba(34, 197, 94, 0.18)' : 'rgba(168, 85, 247, 0.15)',
            color: reviewedCount === total ? '#4ade80' : '#c084fc',
            border: reviewedCount === total ? '1px solid rgba(34, 197, 94, 0.35)' : '1px solid rgba(168, 85, 247, 0.3)'
          }}
        >
          {reviewedCount}/{total} Done
        </span>
      </div>

      {/* Progress Bar inside Palette */}
      <div className="interview-palette-progress-wrap">
        <div
          className="interview-palette-progress-fill"
          style={{ width: `${Math.round((reviewedCount / total) * 100)}%` }}
        />
      </div>

      {/* Legend */}
      <div className="interview-palette-legend">
        <div className="palette-legend-item">
          <span className="palette-legend-dot legend-current" />
          <span>Current</span>
        </div>
        <div className="palette-legend-item">
          <span className="palette-legend-dot legend-reviewed" />
          <span>Reviewed</span>
        </div>
        <div className="palette-legend-item">
          <span className="palette-legend-dot legend-trap" />
          <span>Trap Alert</span>
        </div>
        <div className="palette-legend-item">
          <span className="palette-legend-dot legend-unvisited" />
          <span>Pending</span>
        </div>
      </div>

      {/* Number Grid */}
      <div className="interview-palette-grid">
        {questions.map((q, idx) => {
          const isCurrent = idx === currentIndex;
          const isReviewed = Boolean(reviewedQuestionIds[q.id] || revealedQuestionIds[q.id]);
          const hasTrap = Boolean(q.trap);

          let btnClass = 'interview-palette-btn';
          if (isCurrent) btnClass += ' current';
          if (isReviewed) btnClass += ' reviewed';
          if (hasTrap) btnClass += ' has-trap';

          return (
            <button
              key={q.id || idx}
              type="button"
              className={btnClass}
              onClick={() => onSelectIndex(idx)}
              title={`Q${idx + 1}: ${q.question}`}
              aria-label={`Jump to question ${idx + 1}`}
            >
              <span>{idx + 1}</span>
              {hasTrap && <span className="interview-trap-marker" title="Contains Interviewer Trap" />}
              {isReviewed && !isCurrent && (
                <span className="interview-reviewed-check">✓</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Palette Footer Actions */}
      <div className="interview-palette-footer">
        <div style={{ display: 'flex', gap: '0.4rem', width: '100%', marginBottom: '0.6rem' }}>
          <button
            type="button"
            className="interview-palette-action-btn"
            onClick={() => onSelectIndex(0)}
            disabled={currentIndex === 0}
            title="First question"
          >
            <ChevronLeft size={13} />
            <span>First</span>
          </button>
          <button
            type="button"
            className="interview-palette-action-btn"
            onClick={handleRandomQuestion}
            title="Pick a random question to test yourself"
          >
            <Shuffle size={13} />
            <span>Random</span>
          </button>
          <button
            type="button"
            className="interview-palette-action-btn"
            onClick={() => onSelectIndex(total - 1)}
            disabled={currentIndex === total - 1}
            title="Last question"
          >
            <span>Last</span>
            <ChevronRight size={13} />
          </button>
        </div>

        {currentQ && onToggleReviewed && (
          <button
            type="button"
            onClick={() => onToggleReviewed(currentQ.id)}
            className="interview-palette-review-toggle"
            style={{
              background: isCurrentReviewed ? 'rgba(34, 197, 94, 0.15)' : '#0f172a',
              color: isCurrentReviewed ? '#4ade80' : '#cbd5e1',
              border: isCurrentReviewed ? '1px solid rgba(34, 197, 94, 0.35)' : '1px solid #334155'
            }}
          >
            <CheckCircle2 size={14} className={isCurrentReviewed ? 'text-emerald-400' : 'text-slate-400'} />
            <span>{isCurrentReviewed ? 'Q Marked Reviewed' : 'Mark Q as Reviewed'}</span>
          </button>
        )}

        {reviewedCount > 0 && onResetReviewed && (
          <button
            type="button"
            onClick={onResetReviewed}
            className="interview-palette-reset-btn"
            title="Reset practice checklist for this view"
          >
            <RotateCcw size={12} />
            <span>Reset Progress</span>
          </button>
        )}
      </div>
    </aside>
  );
}
