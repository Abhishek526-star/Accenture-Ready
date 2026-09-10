// src/components/cloud/CloudQuestionCard.jsx
import React, { useState } from 'react';
import {
  Bookmark,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  RotateCcw,
  Sparkles,
  Zap,
  Info,
  Check,
  X
} from 'lucide-react';
import { getOptionBreakdown } from '../../data/cloudQuestions.js';

export default function CloudQuestionCard({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onSelectOption,
  onClearOption,
  isBookmarked,
  onToggleBookmark,
  onNextQuestion,
  onPrevQuestion,
  mode, // 'exam' | 'practice'
  breakdown: customBreakdown
}) {
  const [showExplanationOverride, setShowExplanationOverride] = useState(false);

  if (!question) return null;

  const hasAnswered = Boolean(selectedAnswer);
  const isPracticeMode = mode === 'practice';
  // In practice mode, show explanation once answered or if requested
  const showExplanation = isPracticeMode && (hasAnswered || showExplanationOverride);

  // Retrieve option-by-option explanation (custom passed or from cloud questions)
  const breakdown = customBreakdown || getOptionBreakdown(question.id) || {};

  const getDifficultyClass = (diff) => {
    switch (diff?.toLowerCase()) {
      case 'easy':
        return 'cloud-diff-easy';
      case 'medium':
        return 'cloud-diff-medium';
      case 'hard':
        return 'cloud-diff-hard';
      default:
        return 'cloud-diff-easy';
    }
  };

  return (
    <article className="cloud-card">
      {/* Top Question Metadata */}
      <div className="cloud-card-meta">
        <div className="cloud-meta-left">
          <span className="cloud-qnumber">
            Question <strong>{questionIndex + 1}</strong> of {totalQuestions}
          </span>
          <span className="cloud-badge cloud-badge-tier">Tier {question.tier}</span>
          <span className="cloud-badge cloud-badge-topic">{question.topic}</span>
          <span className={`cloud-badge ${getDifficultyClass(question.difficulty)}`}>
            {question.difficulty}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onToggleBookmark(question.id)}
          className={`cloud-bookmark-btn ${isBookmarked ? 'active' : ''}`}
          title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
        >
          <Bookmark size={17} fill={isBookmarked ? 'currentColor' : 'none'} />
          <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
        </button>
      </div>

      {/* Question Prompt */}
      <h2 className="cloud-question-text">{question.question}</h2>

      {/* 4 Options Grid */}
      <div className="cloud-options-grid" role="radiogroup" aria-label="Answer Options">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.id;
          const isCorrect = option.id === question.correctAnswer;

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
              onClick={() => onSelectOption(option.id)}
              aria-checked={isSelected}
              role="radio"
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

      {/* In-Question Action Bar */}
      <div className="cloud-card-actions">
        <div className="cloud-actions-left">
          {hasAnswered && (
            <button
              type="button"
              onClick={onClearOption}
              className="cloud-btn-clear"
              title="Clear selected option"
            >
              <RotateCcw size={14} /> Clear Selection
            </button>
          )}

          {isPracticeMode && !hasAnswered && (
            <button
              type="button"
              onClick={() => setShowExplanationOverride(!showExplanationOverride)}
              className="cloud-btn-hint"
            >
              <Lightbulb size={14} />
              {showExplanationOverride ? 'Hide Solution' : 'Show Solution & Answer'}
            </button>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="cloud-nav-buttons">
          <button
            type="button"
            className="cloud-btn cloud-btn-secondary"
            onClick={onPrevQuestion}
            disabled={questionIndex === 0}
          >
            <ChevronLeft size={16} />
            <span>Previous</span>
          </button>
          <button
            type="button"
            className="cloud-btn cloud-btn-primary"
            onClick={onNextQuestion}
            disabled={questionIndex === totalQuestions - 1}
          >
            <span>Next</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* 4-Option Detailed Breakdown & Explanation Box */}
      {showExplanation && (
        <div className="cloud-explanation-box">
          <div className="cloud-explanation-header">
            <div className="cloud-expl-badge">
              <CheckCircle2 size={18} />
              <span>Correct Answer: Option {question.correctAnswer}</span>
            </div>
            {(question.memoryTip || question.accentureTip || breakdown?.memoryPill) && (
              <div className="cloud-memory-shortcut">
                <Zap size={14} />
                <span>Accenture Shortcut: {question.memoryTip || question.accentureTip || breakdown?.memoryPill}</span>
              </div>
            )}
          </div>

          {/* Detailed All 4 Options Breakdown */}
          <div className="cloud-options-breakdown-section">
            <h4 className="cloud-breakdown-heading">
              <Info size={15} /> All 4 Options Analysis:
            </h4>

            <div className="cloud-breakdown-cards">
              {question.options.map((opt) => {
                const isThisCorrect = opt.id === question.correctAnswer;
                const isUserSelected = selectedAnswer === opt.id;
                const rawExpl = breakdown ? breakdown[opt.id] : null;
                let optExpl = '';
                if (rawExpl) {
                  if (typeof rawExpl === 'object') {
                    optExpl = rawExpl.why || rawExpl.text || '';
                  } else {
                    optExpl = String(rawExpl);
                  }
                } else {
                  optExpl = isThisCorrect ? question.explanation : 'Incorrect alternative.';
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

                      {/* Status Badges */}
                      <div className="breakdown-status-badges">
                        {isThisCorrect && (
                          <span className="breakdown-pill pill-correct">
                            <Check size={13} /> Correct Answer
                          </span>
                        )}
                        {isUserSelected && !isThisCorrect && (
                          <span className="breakdown-pill pill-user-wrong">
                            <X size={13} /> Your Pick (Incorrect)
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
            <h4 className="cloud-expl-heading">
              <Sparkles size={14} /> Key Takeaway & Conceptual Summary:
            </h4>
            <p className="cloud-expl-text">{question.explanation}</p>
          </div>
        </div>
      )}
    </article>
  );
}

