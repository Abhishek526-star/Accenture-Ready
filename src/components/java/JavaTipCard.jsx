// src/components/java/JavaTipCard.jsx
import React from 'react';
import { Zap, AlertTriangle, Lightbulb } from 'lucide-react';

export default function JavaTipCard({ tips = [] }) {
  if (!tips || tips.length === 0) return null;

  return (
    <div className="java-tips-card">
      <div className="tips-card-header">
        <div className="tips-badge">
          <Zap size={15} />
          <span>Assessment & Interview Edge Cases</span>
        </div>
        <span className="tips-subtext">Avoid common Time Limit Exceeded (TLE) & Runtime Errors</span>
      </div>

      <ul className="tips-list">
        {tips.map((tip, idx) => (
          <li key={idx} className="tip-item">
            <div className="tip-icon-bullet">
              <Lightbulb size={14} />
            </div>
            <div className="tip-content">
              <span>{tip}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
