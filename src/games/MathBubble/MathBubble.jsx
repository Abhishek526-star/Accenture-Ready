// src/games/MathBubble/MathBubble.jsx
import React, { useState, useEffect, useRef } from 'react';
import { sound } from '../../utils/audio.js';
import { calculateMathScore } from './scoring.js';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import './MathBubble.css';

export default function MathBubble({
  question,
  setNumber = 1,
  questionNumber = 1,
  totalQuestions = 15,
  soundEnabled = true,
  onComplete
}) {
  // selectedSequence stores the bubble objects clicked in the user's chosen sequence: [1st, 2nd, 3rd]
  const [selectedSequence, setSelectedSequence] = useState([]);
  const [secondsRemaining, setSecondsRemaining] = useState(question?.timeLimit || 15);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questionStartTimeRef = useRef(Date.now());
  const timerRef = useRef(null);

  // Reset state when question changes
  useEffect(() => {
    setSelectedSequence([]);
    setSecondsRemaining(question?.timeLimit || 15);
    setIsSubmitting(false);
    questionStartTimeRef.current = Date.now();

    timerRef.current = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [question.id]);

  // Handle Timeout
  const handleTimeout = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const timeTaken = question.timeLimit || 15;
    const isCorrect = false;

    if (onComplete) {
      setTimeout(() => {
        onComplete({
          question,
          isCorrect,
          timedOut: true,
          selectedOrder: selectedSequence.map((b) => b.expression),
          selectedValues: selectedSequence.map((b) => b.value),
          expectedOrder: question.bubbles
            .slice()
            .sort((a, b) => a.value - b.value)
            .map((b) => b.expression),
          expectedValues: question.sortedAnswers,
          timeTaken,
          scoreData: { totalScore: 0, isCorrect: false }
        });
      }, 300);
    }
  };

  // Handle Bubble Click (Sequential selection in any order, NO premature error toast!)
  const handleBubbleClick = (bubble) => {
    if (isSubmitting || secondsRemaining <= 0) return;

    const existingIndex = selectedSequence.findIndex((b) => b.id === bubble.id);

    if (existingIndex !== -1) {
      // Allow candidate to undo selection if clicked again before all 3 are finalized
      if (selectedSequence.length < 3) {
        const next = selectedSequence.filter((b) => b.id !== bubble.id);
        setSelectedSequence(next);
      }
      return;
    }

    if (selectedSequence.length >= 3) return;

    const nextSeq = [...selectedSequence, bubble];
    setSelectedSequence(nextSeq);

    if (soundEnabled) {
      sound.playBubblePop(nextSeq.length);
    }

    // When all 3 bubbles are selected, record sequence and advance silently!
    if (nextSeq.length === 3) {
      setIsSubmitting(true);
      clearInterval(timerRef.current);

      const timeTaken = Math.max(1, Math.round((Date.now() - questionStartTimeRef.current) / 1000));
      const val1 = nextSeq[0].value;
      const val2 = nextSeq[1].value;
      const val3 = nextSeq[2].value;

      // Ascending validation check: val1 < val2 < val3
      const isCorrect = val1 < val2 && val2 < val3;

      const scoreData = calculateMathScore({
        isCorrect,
        isQuestionComplete: true,
        timeRemaining: secondsRemaining,
        maxTime: question.timeLimit || 15,
        currentStreak: isCorrect ? 1 : 0
      });

      if (onComplete) {
        setTimeout(() => {
          onComplete({
            question,
            isCorrect,
            timedOut: false,
            selectedOrder: nextSeq.map((b) => b.expression),
            selectedValues: [val1, val2, val3],
            expectedOrder: question.bubbles
              .slice()
              .sort((a, b) => a.value - b.value)
              .map((b) => b.expression),
            expectedValues: question.sortedAnswers,
            timeTaken,
            scoreData
          });
        }, 400);
      }
    }
  };

  const getStepHint = () => {
    switch (selectedSequence.length) {
      case 0:
        return 'Select 1st bubble (Lowest value)';
      case 1:
        return 'Select 2nd bubble (Middle value)';
      case 2:
        return 'Select 3rd bubble (Highest value)';
      default:
        return 'Sequence Recorded ✓';
    }
  };

  return (
    <div className="math-bubble-container" role="region" aria-label="Math Bubble Game">
      {/* Header */}
      <div className="mb-header">
        <div className="mb-header-left">
          <span className="mb-title">
            <Sparkles size={16} />
            Math Bubble • Set {setNumber} of 5
          </span>
          <span className="mb-q-count">
            Question {questionNumber} / {totalQuestions}
          </span>
        </div>

        <div className="mb-header-right">
          <div className="mb-timer-box" title="Time remaining for this question">
            ⏱️ {secondsRemaining}s
          </div>
        </div>
      </div>

      {/* Instruction & Progress Banner */}
      <div className="mb-instruction-banner">
        <div className="mb-instruction-text">
          <span>Objective:</span>
          <span className="mb-instruction-highlight">{getStepHint()}</span>
        </div>

        <div className="mb-steps-indicator" aria-label="Selected count">
          <div className={`mb-step-dot ${selectedSequence.length >= 1 ? 'completed' : 'active'}`} />
          <div className={`mb-step-dot ${selectedSequence.length >= 2 ? 'completed' : selectedSequence.length === 1 ? 'active' : ''}`} />
          <div className={`mb-step-dot ${selectedSequence.length >= 3 ? 'completed' : selectedSequence.length === 2 ? 'active' : ''}`} />
        </div>
      </div>

      {/* Floating Arena with EXACTLY 3 BUBBLES */}
      <div className="mb-arena">
        {question.bubbles.map((bubble, idx) => {
          const selectionIndex = selectedSequence.findIndex((b) => b.id === bubble.id);
          const isSelected = selectionIndex !== -1;
          const orderNumber = selectionIndex + 1; // 1, 2, or 3

          return (
            <button
              key={bubble.id}
              className={`math-bubble ${isSelected ? 'selected' : ''}`}
              style={{
                left: bubble.position.left,
                top: bubble.position.top,
                transform: bubble.position.transform
              }}
              onClick={() => handleBubbleClick(bubble)}
              disabled={isSubmitting || secondsRemaining <= 0}
              aria-label={`Expression: ${bubble.aria}${isSelected ? `, selected as number ${orderNumber}` : ''}`}
              title={isSelected ? `Click to unselect #${orderNumber}` : bubble.aria}
              tabIndex={0}
            >
              {isSelected && (
                <div className="mb-order-pill" aria-hidden="true">
                  {orderNumber}
                </div>
              )}

              <span className="mb-expression">
                {bubble.expression}
              </span>

              <span className="mb-order-label">
                {isSelected ? `Selection #${orderNumber}` : `Option ${idx + 1}`}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
