// src/components/cognitive/GameInstructions.jsx
import React from 'react';
import { Play, Sparkles, AlertCircle, ArrowUpRight, HelpCircle } from 'lucide-react';

export default function GameInstructions({
  gameType = 'math_bubble', // 'math_bubble' | 'full_assessment'
  onStart,
  isOpen = true
}) {
  if (!isOpen) return null;

  return (
    <div className="cognitive-modal-overlay">
      <div className="cognitive-modal-card">
        <div className="cmc-header">
          <div className="cmc-icon-badge">
            <Sparkles size={24} className="text-sky-400" />
          </div>
          <h2 className="cmc-title">
            {gameType === 'math_bubble' && 'Math Bubble — Instructions'}
            {gameType === 'full_assessment' && 'Gamified Cognitive Assessment'}
          </h2>
          <p className="cmc-subtitle">
            {gameType === 'math_bubble' && 'Mental arithmetic & sequential decision-making'}
            {gameType === 'full_assessment' && 'Quick-Fire Math — 15 Questions'}
          </p>
        </div>

        <div className="cmc-body">
          {gameType === 'math_bubble' && (
            <div className="cmc-rules-list">
              <div className="cmc-rule-item">
                <div className="cmc-rule-num">1</div>
                <div>
                  <strong>Exactly 3 Bubbles:</strong> Each question displays 3 floating bubbles with arithmetic expressions using +, -, ×, ÷ with integers, decimals, and fractions.
                </div>
              </div>
              <div className="cmc-rule-item">
                <div className="cmc-rule-num">2</div>
                <div>
                  <strong>Sequential Selection:</strong> Click bubbles one by one in your intended ascending order (<em>LOWEST → MIDDLE → HIGHEST</em>). Numbered badges (#1, #2, #3) appear on selection.
                </div>
              </div>
              <div className="cmc-rule-item">
                <div className="cmc-rule-num">3</div>
                <div>
                  <strong>No Mid-Round Errors:</strong> The game records your sequence silently without buzzers or error interruptions during the set.
                </div>
              </div>
              <div className="cmc-rule-item">
                <div className="cmc-rule-num">4</div>
                <div>
                  <strong>Set Final Results:</strong> Complete the set of 15 questions to unlock your final score, accuracy, and detailed question-by-question review across all 5 practice sets.
                </div>
              </div>
            </div>
          )}

          {gameType === 'full_assessment' && (
            <div className="cmc-rules-list">
              <div className="cmc-rule-item">
                <div className="cmc-rule-num">1</div>
                <div>
                  <strong>Quick-Fire Math:</strong> 15 questions of arithmetic bubbles under timed conditions. Order 3 expressions from lowest to highest.
                </div>
              </div>
              <div className="cmc-rule-item">
                <div className="cmc-rule-num">2</div>
                <div>
                  <strong>Progressive Difficulty:</strong> Questions ramp up — decimals and fractions appear in the later questions.
                </div>
              </div>
              <div className="cmc-rule-item">
                <div className="cmc-rule-num">3</div>
                <div>
                  <strong>Cognitive Scoring:</strong> Evaluates mental speed, working memory, and decision accuracy.
                </div>
              </div>
              <div className="cmc-rule-item">
                <div className="cmc-rule-num">4</div>
                <div>
                  <strong>Strict Assessment Mode:</strong> Hints and resets are disabled during the official assessment round.
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="cmc-footer">
          <button className="cmc-start-btn" onClick={onStart}>
            <Play size={18} />
            <span>I'm Ready — Start Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
