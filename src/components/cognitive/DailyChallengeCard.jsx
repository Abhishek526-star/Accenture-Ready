// src/components/cognitive/DailyChallengeCard.jsx
import React from 'react';
import { Flame, Calendar, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getDailyChallenge } from '../../utils/cognitiveStorage';

export default function DailyChallengeCard() {
  const challenge = getDailyChallenge();
  const isCompleted = challenge.completed;

  return (
    <div className={`daily-challenge-card ${isCompleted ? 'completed' : ''}`}>
      <div className="dcc-header">
        <div className="dcc-badge">
          <Calendar size={14} />
          <span>Daily Cognitive Sprint</span>
        </div>
        <div className="dcc-streak">
          <Flame size={16} className="text-orange-400 fill-orange-400" />
          <span>{challenge.streak || 0} Day Streak</span>
        </div>
      </div>

      <div className="dcc-content">
        <h3 className="dcc-title">
          {challenge.game === 'math_bubble' ? '🔢 Math Bubble Sprint' : '⚡ Path Finder Challenge'}
        </h3>
        <p className="dcc-desc">
          {challenge.game === 'math_bubble'
            ? 'Solve 5 quick arithmetic bubble questions with 100% accuracy.'
            : 'Complete a 4×4 spatial conduit maze in under 90 seconds.'}
        </p>
      </div>

      <div className="dcc-footer">
        {isCompleted ? (
          <div className="dcc-completed-badge">
            <CheckCircle2 size={18} className="text-emerald-400" />
            <span>Completed for Today! (+50 XP)</span>
          </div>
        ) : (
          <Link
            to={'/cognitive/math-bubble?mode=daily'}
            className="dcc-play-btn"
          >
            <span>Launch Daily Sprint</span>
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
