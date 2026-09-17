// src/pages/ScoreHistoryPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Clock,
  Target,
  Award,
  Calendar,
  Sparkles,
  ArrowRight,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { mockTestService } from '../services/mockTestService.js';

export default function ScoreHistoryPage({ theme = 'dark' }) {
  const [history, setHistory] = useState(() => {
    return mockTestService.getHistory() || [];
  });

  const hasHistory = history.length > 0;
  const latest = hasHistory ? history[0] : null;

  return (
    <div className="history-page-container">
      {/* Header */}
      <div className="history-hero-card">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          <TrendingUp size={14} /> PROGRESS TRAJECTORY
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
          Assessment Score History & Speed Metrics
        </h1>
        <p style={{ color: '#94a3b8', margin: 0, fontSize: '1rem', maxWidth: '650px' }}>
          Review your progression across full mock attempts, tracking efficiency gains, speed vs accuracy ratios, and round-by-round score improvements.
        </p>
      </div>

      {/* Speed vs Accuracy Quadrant */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.25rem',
        marginBottom: '2rem'
      }}>
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '1.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Accuracy Classification</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: hasHistory ? (latest.accuracy >= 75 ? '#4ade80' : '#facc15') : '#94a3b8', margin: '0.25rem 0', fontFamily: 'JetBrains Mono' }}>
            {hasHistory ? `${latest.accuracy}%` : '--'}
          </div>
          <span style={{ fontSize: '0.8rem', color: hasHistory ? '#4ade80' : '#64748b', fontWeight: 600 }}>
            {hasHistory ? '🎯 Status: Real Exam Recorded' : 'No mock assessments attempted yet'}
          </span>
        </div>

        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '1.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Latest Completion Time</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: hasHistory ? '#38bdf8' : '#94a3b8', margin: '0.25rem 0', fontFamily: 'JetBrains Mono' }}>
            {hasHistory ? latest.timeUsedFormatted : '--'}
          </div>
          <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
            {hasHistory ? '⚡ Total time across all sections' : '90 minute test budget'}
          </span>
        </div>

        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '1.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Mock Attempts</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#facc15', margin: '0.25rem 0', fontFamily: 'JetBrains Mono' }}>
            {history.length} Finished
          </div>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
            {history.length > 0 ? 'Full timed assessments' : 'Target at least 1 mock before exam'}
          </span>
        </div>
      </div>

      {/* Visual Progression Timeline */}
      <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '2rem', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', margin: '0 0 1.5rem 0' }}>
          Mock Assessment Trend Line
        </h3>

        {!hasHistory ? (
          <div style={{ padding: '2.5rem 1rem', textAlign: 'center', background: '#0f172a', borderRadius: '12px', border: '1px dashed #334155' }}>
            <p style={{ fontSize: '1.05rem', color: '#f8fafc', fontWeight: 700, margin: '0 0 0.5rem 0' }}>
              No full mock assessments completed yet
            </p>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: '0 auto 1.5rem auto', maxWidth: '480px' }}>
              Launch a timed 90-minute assessment to simulate the actual Accenture test experience across Coding, SQL, and Technical MCQs.
            </p>
            <Link
              to="/mock-test"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '10px 20px',
                background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                border: 'none',
                color: '#ffffff',
                fontWeight: 700,
                borderRadius: '8px',
                textDecoration: 'none'
              }}
            >
              <span>Launch First Mock Test</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {history.map((mock, idx) => (
            <div key={mock.id || idx} style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc' }}>
                    Mock Assessment #{idx + 1}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    {new Date(mock.completedAt).toLocaleDateString()}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                    Time: {mock.timeUsedFormatted || 'N/A'}
                  </span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 800, color: mock.score >= 75 ? '#4ade80' : '#facc15', fontFamily: 'JetBrains Mono' }}>
                    {mock.score}%
                  </span>
                </div>
              </div>

              {/* Visual Progress Bar */}
              <div style={{ height: '8px', background: '#1e293b', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${mock.score}%`, background: mock.score >= 75 ? '#4ade80' : '#38bdf8', borderRadius: '4px' }} />
              </div>
            </div>
          ))}
        </div>
        )}
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link
          to="/mock-test"
          className="btn btn-primary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #0284c7, #0369a1)',
            border: 'none',
            color: '#ffffff',
            fontWeight: 700,
            borderRadius: '10px',
            textDecoration: 'none'
          }}
        >
          <span>Take Another Mock Assessment</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
