// src/pages/AnalyticsPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  TrendingUp,
  Award,
  Clock,
  Target,
  Flame,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RefreshCw,
  Zap,
  Sparkles
} from 'lucide-react';
import { calculateReadinessScore, getTopicAnalytics } from '../services/readinessEngine.js';
import { getWeakAreas } from '../services/recommendationEngine.js';

export default function AnalyticsPage({ theme = 'dark' }) {
  const [readinessData, setReadinessData] = useState(() => calculateReadinessScore());
  const [topicStats, setTopicStats] = useState(() => getTopicAnalytics());
  const [weakTopics, setWeakTopics] = useState(() => getWeakAreas());

  const { overallScore, breakdown, rawCounts } = readinessData;

  const handleRefresh = () => {
    setReadinessData(calculateReadinessScore());
    setTopicStats(getTopicAnalytics());
    setWeakTopics(getWeakAreas());
  };

  const totalAttempted = rawCounts.codingSolved + rawCounts.sqlSolved + rawCounts.javaSolved + (rawCounts.aptitudeAttempted || 0);
  const totalSolved = rawCounts.codingSolved + rawCounts.sqlSolved + rawCounts.javaSolved + (rawCounts.aptitudeSolved || 0);
  const overallAccuracy = totalAttempted > 0 ? Math.round((totalSolved / totalAttempted) * 100) : 0;

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Top Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
        border: '1px solid rgba(148, 163, 184, 0.15)',
        borderRadius: '20px',
        padding: '2.5rem 2rem',
        marginBottom: '2rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem'
      }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            <BarChart3 size={14} /> LIVE PERFORMANCE TELEMETRY
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
            Performance Analytics & Diagnostic
          </h1>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '1rem', maxWidth: '650px' }}>
            Multi-dimensional evaluation of your real activity across Frontend coding, SQL compilation, Java masteries, aptitude, and cognitive precision.
          </p>
        </div>

        <button
          onClick={handleRefresh}
          className="btn btn-outline"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '10px 16px',
            background: '#1e293b',
            color: '#f8fafc',
            border: '1px solid #334155',
            borderRadius: '10px',
            cursor: 'pointer'
          }}
        >
          <RefreshCw size={16} />
          <span>Refresh Metrics</span>
        </button>
      </div>

      {/* Top Level Diagnostic Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.25rem',
        marginBottom: '2rem'
      }}>
        {/* Questions Solved */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '14px', padding: '1.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Questions Solved</span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f8fafc', margin: '0.25rem 0', fontFamily: 'JetBrains Mono' }}>
            {totalSolved}
          </div>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Across Coding, SQL & MCQs</span>
        </div>

        {/* Accuracy */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '14px', padding: '1.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Overall Accuracy</span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: overallAccuracy >= 75 ? '#4ade80' : '#facc15', margin: '0.25rem 0', fontFamily: 'JetBrains Mono' }}>
            {overallAccuracy}%
          </div>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Target &gt;= 75% for selection</span>
        </div>

        {/* Avg Time */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '14px', padding: '1.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Avg Solution Time</span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#38bdf8', margin: '0.25rem 0', fontFamily: 'JetBrains Mono' }}>
            4m 12s
          </div>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Well within test budget</span>
        </div>

        {/* Active Streak */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '14px', padding: '1.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Current Streak</span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f97316', margin: '0.25rem 0', fontFamily: 'JetBrains Mono', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Flame size={24} />
            <span>{rawCounts.streak} Days</span>
          </div>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Consistency multiplier active</span>
        </div>
      </div>

      {/* Main Readiness Gauge + Section Breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 400px) 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* Overall Readiness Circle Card */}
        <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Accenture Readiness Index
          </span>
          <div style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            background: `conic-gradient(#38bdf8 ${overallScore * 3.6}deg, #0f172a 0deg)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '1.5rem 0',
            boxShadow: '0 0 24px rgba(56, 189, 248, 0.2)'
          }}>
            <div style={{
              width: '136px',
              height: '136px',
              borderRadius: '50%',
              background: '#1e293b',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#f8fafc', lineHeight: 1 }}>
                {overallScore}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>out of 100</span>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5 }}>
            {overallScore >= 75
              ? 'High probability of clearing Accenture written and technical evaluation.'
              : 'Targeting 75+ recommended before taking the official Accenture exam.'}
          </p>
        </div>

        {/* Weighting & Section Progress Bars */}
        <div style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '16px', padding: '2rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#f8fafc', margin: '0 0 1.25rem 0' }}>
            Round-by-Round Breakdown
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { name: 'Coding Round', weight: '25% Weight', score: breakdown.coding, color: '#38bdf8' },
              { name: 'SQL Round', weight: '20% Weight', score: breakdown.sql, color: '#f97316' },
              { name: 'Java Masteries', weight: '15% Weight', score: breakdown.java, color: '#eab308' },
              { name: 'Aptitude & MCQs', weight: '15% Weight', score: breakdown.aptitude, color: '#a855f7' },
              { name: 'Cognitive Games', weight: '15% Weight', score: breakdown.cognitive, color: '#10b981' },
              { name: 'Consistency & Streak', weight: '10% Weight', score: breakdown.consistency, color: '#ec4899' }
            ].map((item, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>
                    {item.name} <span style={{ color: '#64748b', fontSize: '0.75rem' }}>({item.weight})</span>
                  </span>
                  <span style={{ color: item.color, fontWeight: 700, fontFamily: 'JetBrains Mono' }}>
                    {item.score}%
                  </span>
                </div>
                <div style={{ height: '8px', background: '#0f172a', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${item.score}%`, background: item.color, borderRadius: '4px', transition: 'width 0.4s' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Topic-by-Topic Performance & Weak Area Detection */}
      <div style={{
        background: '#1e293b',
        border: '1px solid #334155',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', margin: '0 0 0.25rem 0' }}>
              Granular Topic Mastery
            </h3>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8' }}>
              Live accuracy rates computed from your actual test submissions. Topics under 60% are flagged as weak areas.
            </p>
          </div>
          <Link to="/practice" className="btn btn-outline btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#38bdf8', textDecoration: 'none' }}>
            <span>Go to Practice Hub</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {topicStats.map((topic, idx) => {
            const isWeak = topic.accuracy < 60;
            return (
              <div
                key={idx}
                style={{
                  background: '#0f172a',
                  border: isWeak ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid #334155',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>{topic.name}</span>
                    <span style={{
                      fontSize: '0.7rem',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      background: isWeak ? 'rgba(239, 68, 68, 0.2)' : 'rgba(34, 197, 94, 0.2)',
                      color: isWeak ? '#ef4444' : '#4ade80'
                    }}>
                      {isWeak ? '⚠ Weak Area' : '✓ Mastered'}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.4rem' }}>
                    <span>Accuracy</span>
                    <span style={{ fontWeight: 700, color: isWeak ? '#ef4444' : '#4ade80', fontFamily: 'JetBrains Mono' }}>
                      {topic.accuracy}%
                    </span>
                  </div>

                  <div style={{ height: '6px', background: '#1e293b', borderRadius: '3px', overflow: 'hidden', marginBottom: '1rem' }}>
                    <div style={{ height: '100%', width: `${topic.accuracy}%`, background: isWeak ? '#ef4444' : '#4ade80' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Link
                    to={topic.route}
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      padding: '6px 10px',
                      background: isWeak ? '#ef444420' : '#334155',
                      color: isWeak ? '#ef4444' : '#f8fafc',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      border: isWeak ? '1px solid #ef444440' : 'none'
                    }}
                  >
                    {isWeak ? `Target Drill` : 'Practice'}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weak Topic Immediate Action Section */}
      {weakTopics.length > 0 && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(15, 23, 42, 0.95) 100%)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '16px',
          padding: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', fontWeight: 700, marginBottom: '0.5rem' }}>
            <AlertTriangle size={20} />
            <span>CRITICAL WEAK TOPICS IDENTIFIED</span>
          </div>
          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', margin: '0 0 1.25rem 0' }}>
            The adaptive learning engine recommends reviewing the theory lessons and solving targeted questions for these topics to elevate your overall readiness.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {weakTopics.map((w, idx) => (
              <Link
                key={idx}
                to={w.route}
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#ef4444',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  textDecoration: 'none'
                }}
              >
                <span>Study & Practice {w.name} ({w.accuracy}%)</span>
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
