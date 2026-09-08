// src/components/cognitive/GameTransition.jsx
import React from 'react';
import { CheckCircle, ArrowRight, Zap, Target, Clock, Trophy } from 'lucide-react';

export default function GameTransition({
  round1Stats = {},
  onContinue
}) {
  const {
    totalScore = 0,
    correctCount = 0,
    totalQuestions = 10,
    accuracy = 0,
    avgTime = 0
  } = round1Stats;

  return (
    <div className="cognitive-modal-overlay">
      <div className="cognitive-modal-card">
        <div className="cmc-header">
          <div className="cmc-icon-badge text-emerald-400">
            <CheckCircle size={32} />
          </div>
          <h2 className="cmc-title">Round 1 Completed!</h2>
          <p className="cmc-subtitle">Math Bubble Assessment Finished</p>
        </div>

        <div className="cmc-body">
          <div className="transition-stats-grid">
            <div className="transition-stat-card">
              <Trophy size={20} className="text-amber-400" />
              <div className="transition-stat-val">{totalScore}</div>
              <div className="transition-stat-label">Round 1 Score</div>
            </div>

            <div className="transition-stat-card">
              <Target size={20} className="text-emerald-400" />
              <div className="transition-stat-val">{correctCount} / {totalQuestions}</div>
              <div className="transition-stat-label">Questions Solved</div>
            </div>

            <div className="transition-stat-card">
              <Zap size={20} className="text-sky-400" />
              <div className="transition-stat-val">{accuracy}%</div>
              <div className="transition-stat-label">Accuracy Rate</div>
            </div>

            <div className="transition-stat-card">
              <Clock size={20} className="text-purple-400" />
              <div className="transition-stat-val">{avgTime}s</div>
              <div className="transition-stat-label">Avg Speed / Q</div>
            </div>
          </div>

          <div className="transition-next-preview">
            <h3>Next: Round 2 — Path Finder</h3>
            <p>
              You will now face 3 spatial connection puzzles (3×3, 4×4, 5×5). Rotate the conduit
              tiles to connect START to END with the fewest moves and fastest time.
            </p>
          </div>
        </div>

        <div className="cmc-footer">
          <button className="cmc-start-btn" onClick={onContinue}>
            <span>Start Round 2 (Path Finder)</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
