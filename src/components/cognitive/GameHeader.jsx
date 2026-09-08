// src/components/cognitive/GameHeader.jsx
import React from 'react';
import { Volume2, VolumeX, Flame, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GameHeader({
  title,
  subtitle,
  currentRound = 1,
  totalRounds = 1,
  score = 0,
  streak = 0,
  soundEnabled = true,
  onToggleSound,
  onQuit,
  backUrl = '/cognitive'
}) {
  return (
    <header className="cognitive-game-header">
      <div className="cgh-left">
        {onQuit ? (
          <button onClick={onQuit} className="cgh-back-btn" title="Leave Game">
            <ArrowLeft size={18} />
            <span>Quit</span>
          </button>
        ) : (
          <Link to={backUrl} className="cgh-back-btn" title="Return to Dashboard">
            <ArrowLeft size={18} />
            <span>Back</span>
          </Link>
        )}

        <div className="cgh-title-group">
          <h1 className="cgh-title">{title}</h1>
          {subtitle && <span className="cgh-subtitle">{subtitle}</span>}
        </div>
      </div>

      <div className="cgh-right">
        {totalRounds > 1 && (
          <div className="cgh-badge cgh-round-badge">
            Round {currentRound} of {totalRounds}
          </div>
        )}

        {streak > 1 && (
          <div className="cgh-badge cgh-streak-badge">
            <Flame size={16} className="text-orange-400 fill-orange-400" />
            <span>{streak} Streak!</span>
          </div>
        )}

        <div className="cgh-badge cgh-score-badge">
          <Zap size={16} className="text-amber-400" />
          <span>Score:</span>
          <strong>{score}</strong>
        </div>

        {onToggleSound && (
          <button
            onClick={onToggleSound}
            className="cgh-sound-btn"
            title={soundEnabled ? 'Mute Sound' : 'Enable Sound'}
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
        )}
      </div>
    </header>
  );
}
