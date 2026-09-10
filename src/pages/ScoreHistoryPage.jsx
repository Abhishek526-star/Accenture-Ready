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
    const raw = mockTestService.getHistory();
    if (raw && raw.length > 0) return raw;
    // Default demonstration historical assessments if none taken yet
    return [
      { id: 'mock-1', completedAt: '2026-09-02T10:00:00Z', score: 61, codingScore: 50, sqlScore: 60, mcqScore: 65, accuracy: 64, timeUsedFormatted: '82:15' },
      { id: 'mock-2', completedAt: '2026-09-05T14:30:00Z', score: 67, codingScore: 65, sqlScore: 66, mcqScore: 70, accuracy: 71, timeUsedFormatted: '76:40' },
      { id: 'mock-3', completedAt: '2026-09-08T16:00:00Z', score: 72, codingScore: 75, sqlScore: 70, mcqScore: 72, accuracy: 78, timeUsedFormatted: '71:10' },
      { id: 'mock-4', completedAt: '2026-09-10T11:20:00Z', score: 78, codingScore: 85, sqlScore: 72, mcqScore: 80, accuracy: 82, timeUsedFormatted: '67:32' }
    ];
  });

  const latest = history[history.length - 1] || history[0];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
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
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#4ade80', margin: '0.25rem 0', fontFamily: 'JetBrains Mono' }}>
            {latest?.accuracy || 82}%
          </div>
          <span style={{ fontSize: '0.8rem', color: '#4ade80', fontWeight: 600 }}>🎯 Status: Good & Candidate Ready</span>
        </div>

        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '1.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Average Time per Section</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#38bdf8', margin: '0.25rem 0', fontFamily: 'JetBrains Mono' }}>
            {latest?.timeUsedFormatted || '67:32'}
          </div>
          <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>⚡ Speed: Optimal (23m buffer remaining)</span>
        </div>

        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '1.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Mock Attempts</span>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#facc15', margin: '0.25rem 0', fontFamily: 'JetBrains Mono' }}>
            {history.length} Finished
          </div>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Consistent +17% net gain</span>
        </div>
      </div>

      {/* Visual Progression Timeline */}
      <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '2rem', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', margin: '0 0 1.5rem 0' }}>
          Mock Assessment Trend Line
        </h3>

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
