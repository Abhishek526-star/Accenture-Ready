// src/components/cloud/CloudQuestionPalette.jsx
import React, { useState } from 'react';
import {
  Grid,
  CheckCircle2,
  Bookmark,
  Circle,
  Send,
  Sparkles,
  Award
} from 'lucide-react';

export default function CloudQuestionPalette({
  questions,
  currentIndex,
  onSelectIndex,
  userAnswers,
  bookmarks,
  onSubmitQuiz,
  mode
}) {
  const [filter, setFilter] = useState('all'); // 'all' | 'answered' | 'unanswered' | 'marked'

  const answeredCount = Object.keys(userAnswers).filter((k) => userAnswers[k]).length;
  const markedCount = bookmarks.length;
  const totalCount = questions.length;
  const unansweredCount = totalCount - answeredCount;

  const filteredQuestions = questions.map((q, idx) => {
    const isAnswered = Boolean(userAnswers[q.id]);
    const isMarked = bookmarks.includes(q.id);
    let match = true;

    if (filter === 'answered') match = isAnswered;
    else if (filter === 'unanswered') match = !isAnswered;
    else if (filter === 'marked') match = isMarked;

    return { ...q, originalIndex: idx, isAnswered, isMarked, matchesFilter: match };
  });

  return (
    <aside className="cloud-palette-card">
      <div className="cloud-palette-header">
        <div className="cloud-palette-title">
          <Grid size={18} />
          <span>Question Navigator</span>
        </div>
        <span className="cloud-palette-summary">
          {answeredCount}/{totalCount}
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="cloud-palette-filters" role="tablist">
        <button
          type="button"
          className={`cloud-filter-pill ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({totalCount})
        </button>
        <button
          type="button"
          className={`cloud-filter-pill ${filter === 'answered' ? 'active' : ''}`}
          onClick={() => setFilter('answered')}
        >
          Done ({answeredCount})
        </button>
        <button
          type="button"
          className={`cloud-filter-pill ${filter === 'unanswered' ? 'active' : ''}`}
          onClick={() => setFilter('unanswered')}
        >
          Left ({unansweredCount})
        </button>
        <button
          type="button"
          className={`cloud-filter-pill ${filter === 'marked' ? 'active' : ''}`}
          onClick={() => setFilter('marked')}
        >
          Marked ({markedCount})
        </button>
      </div>

      {/* Grid of question number buttons */}
      <div className="cloud-palette-grid">
        {filteredQuestions.map((item) => {
          const isCurrent = currentIndex === item.originalIndex;
          let btnClass = 'cloud-palette-btn';

          if (isCurrent) btnClass += ' current';
          if (item.isAnswered) btnClass += ' answered';
          if (item.isMarked) btnClass += ' marked';
          if (!item.matchesFilter) btnClass += ' dimmed';

          return (
            <button
              key={item.id}
              type="button"
              className={btnClass}
              onClick={() => onSelectIndex(item.originalIndex)}
              title={`Question ${item.originalIndex + 1}: ${item.topic} - ${
                item.isAnswered ? 'Answered (' + userAnswers[item.id] + ')' : 'Unanswered'
              }`}
            >
              <span>{item.originalIndex + 1}</span>
              {item.isMarked && <span className="cloud-palette-marker" />}
            </button>
          );
        })}
      </div>

      {/* Palette Legend */}
      <div className="cloud-palette-legend">
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

      {/* Submit Button */}
      <div className="cloud-palette-footer">
        <button
          type="button"
          className="cloud-submit-btn"
          onClick={onSubmitQuiz}
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
  );
}
