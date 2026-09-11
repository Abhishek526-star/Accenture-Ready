// src/pages/Dashboard.jsx
// Complete personal preparation dashboard for Accenture recruitment preparation
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Flame,
  Zap,
  Target,
  Clock,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Code2,
  Database,
  Coffee,
  Brain,
  Sparkles,
  Bookmark,
  Calendar,
  Layers,
  ShieldAlert,
  Mic
} from 'lucide-react';
import { calculateReadinessScore, getTopicAnalytics } from '../services/readinessEngine.js';
import { gamificationService } from '../services/gamificationService.js';
import { getWeakAreas, getSmartRecommendations } from '../services/recommendationEngine.js';
import { javaTopics } from '../data/javaTopics.js';
import { javaStorage } from '../utils/javaStorage.js';
import { storage } from '../utils/storage.js';
import { sqlStorage } from '../utils/sqlStorage.js';

export default function Dashboard({ theme = 'dark' }) {
  const [readinessData, setReadinessData] = useState(() => calculateReadinessScore());
  const [weakAreas, setWeakAreas] = useState(() => getWeakAreas());
  const [recommendations, setRecommendations] = useState(() => getSmartRecommendations());
  const [gamify, setGamify] = useState(() => gamificationService.getState());
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    gamificationService.checkAchievements();
    setReadinessData(calculateReadinessScore());
    setWeakAreas(getWeakAreas());
    setRecommendations(getSmartRecommendations());
    setGamify(gamificationService.getState());
  }, [refreshKey]);

  const { overallScore, breakdown, rawCounts } = readinessData;

  // Continue Learning derivation
  const completedJava = javaStorage.getCompletedTopics();
  const nextJavaTopic = javaTopics.find(t => !completedJava.includes(t.id)) || javaTopics[0];
  const javaProgress = Math.round((completedJava.length / javaTopics.length) * 100);

  const handleResetAll = () => {
    if (window.confirm('Are you sure you want to reset your practice progress? This cannot be undone.')) {
      storage.set('completed-questions', []);
      sqlStorage.set('completed-questions', []);
      javaStorage.resetAllProgress(javaTopics);
      setRefreshKey(k => k + 1);
    }
  };

  return (
    <div className="dashboard-page-container" key={refreshKey}>
      {/* 1. Welcome Back Header Bar */}
      <div className="dashboard-hero-card">
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            <Sparkles size={14} /> CENTRAL PREPARATION COMMAND
          </div>
          <h1 className="dashboard-hero-title">
            Welcome back, Abhishek 👋
          </h1>
          <p className="dashboard-hero-subtitle">
            Continue your preparation. Your Accenture readiness score updates automatically with each problem solved, lesson completed, and mock test attempted.
          </p>
        </div>

        <div className="dashboard-hero-actions">
          <Link
            to="/daily-challenge"
            className="btn btn-primary dashboard-action-btn"
            style={{
              background: 'linear-gradient(135deg, #f97316, #ea580c)',
              boxShadow: '0 4px 16px rgba(249, 115, 22, 0.35)'
            }}
          >
            <Flame size={16} />
            <span>Daily Challenge (+50 XP)</span>
          </Link>
          <Link
            to="/mock-test"
            className="btn btn-outline dashboard-action-btn"
            style={{
              background: '#0f172a',
              color: '#38bdf8',
              border: '1px solid #38bdf8'
            }}
          >
            <Target size={16} />
            <span>Start Full Mock Test</span>
          </Link>
        </div>
      </div>

      {/* 2. Core Readiness Card (0 - 100 Gauge) */}
      <div className="dashboard-readiness-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
              Overall Readiness
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginTop: '0.35rem' }}>
              <span style={{ fontSize: '3.5rem', fontWeight: 900, color: '#f8fafc', lineHeight: 1, fontFamily: 'JetBrains Mono' }}>
                {overallScore}
              </span>
              <span style={{ fontSize: '1.25rem', color: '#94a3b8', fontWeight: 600 }}>/ 100</span>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: '12px',
                background: overallScore >= 75 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(234, 179, 8, 0.2)',
                color: overallScore >= 75 ? '#4ade80' : '#facc15'
              }}>
                {overallScore >= 75 ? 'Placement Ready' : 'In Progress'}
              </span>
            </div>
          </div>

          <Link
            to="/analytics"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#38bdf8',
              fontSize: '0.9rem',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            <span>Deep Diagnostic & Telemetry</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Dynamic Progress Bar */}
        <div style={{ height: '14px', background: '#090d16', borderRadius: '7px', overflow: 'hidden', marginBottom: '2rem', border: '1px solid #334155' }}>
          <div style={{
            height: '100%',
            width: `${overallScore}%`,
            background: 'linear-gradient(90deg, #38bdf8, #818cf8, #4ade80)',
            borderRadius: '7px',
            transition: 'width 0.6s ease'
          }} />
        </div>

        {/* 4 Area Breakdown Row */}
        <div className="dashboard-breakdown-row">
          <div>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', marginBottom: '0.2rem' }}>Coding (25%)</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'JetBrains Mono' }}>
              {breakdown.coding}%
            </span>
          </div>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', marginBottom: '0.2rem' }}>SQL (20%)</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f97316', fontFamily: 'JetBrains Mono' }}>
              {breakdown.sql}%
            </span>
          </div>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', marginBottom: '0.2rem' }}>Java (15%)</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#eab308', fontFamily: 'JetBrains Mono' }}>
              {breakdown.java}%
            </span>
          </div>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', marginBottom: '0.2rem' }}>Cognitive (15%)</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981', fontFamily: 'JetBrains Mono' }}>
              {breakdown.cognitive}%
            </span>
          </div>
        </div>
      </div>

      {/* 3. Gamification Badges Row */}
      <div className="dashboard-gamify-grid">
        {/* Streak */}
        <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem'
        }}>
          <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(249, 115, 22, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316' }}>
            <Flame size={28} />
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Practice Streak</span>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'JetBrains Mono' }}>
              {gamify.streak} Days
            </div>
            <span style={{ fontSize: '0.75rem', color: '#f97316' }}>Best: {gamify.bestStreak || gamify.streak} Days</span>
          </div>
        </div>

        {/* XP */}
        <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem'
        }}>
          <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(234, 179, 8, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#facc15' }}>
            <Zap size={28} />
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Candidate XP</span>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'JetBrains Mono' }}>
              {gamify.xp.toLocaleString()} XP
            </div>
            <span style={{ fontSize: '0.75rem', color: '#4ade80' }}>Earned from solved tasks</span>
          </div>
        </div>

        {/* Level */}
        <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem'
        }}>
          <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c084fc' }}>
            <Award size={28} />
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Candidate Tier</span>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'JetBrains Mono' }}>
              Level {gamificationService.getLevel(gamify.xp)}
            </div>
            <Link to="/achievements" style={{ fontSize: '0.75rem', color: '#c084fc', textDecoration: 'none' }}>
              View Achievements ↗
            </Link>
          </div>
        </div>
      </div>

      {/* 4. Continue Learning & 5. Weak Areas Side-by-Side */}
      <div className="dashboard-learning-weak-grid">
        {/* Continue Learning Card */}
        <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Coffee size={20} className="text-amber-500" />
                <span>Continue Learning</span>
              </h3>
              <span style={{ fontSize: '0.8rem', color: '#eab308', fontWeight: 700 }}>
                {javaProgress}% Track Done
              </span>
            </div>

            <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '12px', padding: '1.25rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Up Next</span>
              <h4 style={{ fontSize: '1.15rem', color: '#f8fafc', margin: '0.25rem 0 0.5rem 0' }}>
                Java → {nextJavaTopic.title}
              </h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>
                {nextJavaTopic.category} • {nextJavaTopic.duration}
              </p>
            </div>
          </div>

          <div>
            <div style={{ height: '6px', background: '#090d16', borderRadius: '3px', overflow: 'hidden', marginBottom: '1.25rem' }}>
              <div style={{ height: '100%', width: `${javaProgress}%`, background: '#eab308', borderRadius: '3px' }} />
            </div>

            <Link
              to={`/java-learning?topic=${nextJavaTopic.id}`}
              className="btn btn-primary"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #eab308, #ca8a04)',
                border: 'none',
                color: '#0f172a',
                fontWeight: 700,
                padding: '10px 16px',
                borderRadius: '8px',
                textDecoration: 'none'
              }}
            >
              <span>Continue Lesson</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Weak Areas Card */}
        <div style={{
          background: '#1e293b',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '16px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#ef4444', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertTriangle size={20} />
                <span>⚠ Weak Areas Diagnosed</span>
              </h3>
              <Link to="/mistakes" style={{ fontSize: '0.8rem', color: '#ef4444', textDecoration: 'none', fontWeight: 600 }}>
                Retry Mistakes ↗
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {weakAreas.map((w, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: '#0f172a',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    padding: '10px 14px'
                  }}
                >
                  <span style={{ color: '#f8fafc', fontSize: '0.9rem', fontWeight: 600 }}>{w.name}</span>
                  <span style={{ color: '#ef4444', fontWeight: 700, fontFamily: 'JetBrains Mono', fontSize: '0.9rem' }}>
                    {w.accuracy}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/analytics"
            className="btn btn-primary"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              background: '#ef4444',
              border: 'none',
              color: '#ffffff',
              fontWeight: 700,
              padding: '10px 16px',
              borderRadius: '8px',
              textDecoration: 'none'
            }}
          >
            <span>Practice Weak Areas</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* 6. Smart Recommendations Banner (Adaptive Learning Loop) */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
        border: '1px solid #334155',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', fontWeight: 700, marginBottom: '0.5rem' }}>
          <Target size={20} />
          <span>🎯 RECOMMENDED FOR YOU (ADAPTIVE SYSTEM)</span>
        </div>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: '0 0 1.5rem 0' }}>
          Targeted study loops constructed in real-time from your performance trends:
        </p>

        <div className="dashboard-recommendations-grid">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              style={{
                background: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '6px',
                  background: `${rec.badgeColor}20`,
                  color: rec.badgeColor,
                  border: `1px solid ${rec.badgeColor}40`
                }}>
                  {rec.badge}
                </span>

                <h4 style={{ fontSize: '1.1rem', color: '#f8fafc', margin: '0.5rem 0 0.4rem 0', fontWeight: 700 }}>
                  {rec.title}
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5, margin: '0 0 1rem 0' }}>
                  {rec.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.25rem' }}>
                  {rec.steps.map((step, sIdx) => (
                    <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.8rem' }}>
                      <span>{step.icon}</span>
                      <span>{step.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={rec.actionRoute}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  padding: '8px 14px',
                  background: '#1e293b',
                  border: '1px solid #38bdf8',
                  color: '#38bdf8',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <span>{rec.actionLabel}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Quick Navigation to All Features Grid */}
      <div style={{
        background: '#1e293b',
        border: '1px solid #334155',
        borderRadius: '16px',
        padding: '2rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', margin: 0 }}>
            Platform Modules Quick Access
          </h3>
          <button
            onClick={handleResetAll}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '6px 12px',
              background: '#0f172a',
              color: '#ef4444',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <RotateCcw size={12} />
            <span>Reset All Progress</span>
          </button>
        </div>

        <div className="dashboard-modules-grid">
          <Link to="/recent-questions" style={{ padding: '12px', background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.14), rgba(99, 102, 241, 0.14))', borderRadius: '10px', border: '1px solid rgba(56, 189, 248, 0.4)', textDecoration: 'none', color: '#f8fafc' }}>
            <Sparkles size={20} className="text-sky-400" />
            <div style={{ fontWeight: 700, marginTop: '8px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>Recent Coding PYQs</span>
              <span style={{ fontSize: '9px', padding: '1px 5px', borderRadius: '4px', background: '#0284c7', color: '#fff', fontWeight: 800 }}>NEW</span>
            </div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>8th Sept Shift 1 & 2 (DSA • SQL • Frontend)</span>
          </Link>
          <Link to="/practice" style={{ padding: '12px', background: '#0f172a', borderRadius: '10px', border: '1px solid #334155', textDecoration: 'none', color: '#f8fafc' }}>
            <Code2 size={20} className="text-sky-400" />
            <div style={{ fontWeight: 700, marginTop: '8px', fontSize: '0.95rem' }}>Frontend Coding</div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>20 Assessment problems</span>
          </Link>
          <Link to="/sql-assessment" style={{ padding: '12px', background: '#0f172a', borderRadius: '10px', border: '1px solid #334155', textDecoration: 'none', color: '#f8fafc' }}>
            <Database size={20} className="text-orange-400" />
            <div style={{ fontWeight: 700, marginTop: '8px', fontSize: '0.95rem' }}>SQL Sandbox</div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>SQLite in-browser engine</span>
          </Link>
          <Link to="/java-learning" style={{ padding: '12px', background: '#0f172a', borderRadius: '10px', border: '1px solid #334155', textDecoration: 'none', color: '#f8fafc' }}>
            <Coffee size={20} className="text-amber-400" />
            <div style={{ fontWeight: 700, marginTop: '8px', fontSize: '0.95rem' }}>Java Prep</div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Syntax, OOPs & Collections</span>
          </Link>
          <Link to="/pseudocode" style={{ padding: '12px', background: '#0f172a', borderRadius: '10px', border: '1px solid #334155', textDecoration: 'none', color: '#f8fafc' }}>
            <Zap size={20} className="text-amber-400" />
            <div style={{ fontWeight: 700, marginTop: '8px', fontSize: '0.95rem' }}>Pseudocode Round</div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Bitwise & Recursive Tracing</span>
          </Link>
          <Link to="/learn/dsa" style={{ padding: '12px', background: '#0f172a', borderRadius: '10px', border: '1px solid #334155', textDecoration: 'none', color: '#f8fafc' }}>
            <Zap size={20} className="text-sky-400" />
            <div style={{ fontWeight: 700, marginTop: '8px', fontSize: '0.95rem' }}>DSA Patterns</div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>11 Core Templates</span>
          </Link>
          <Link to="/learn/cheat-sheets" style={{ padding: '12px', background: '#0f172a', borderRadius: '10px', border: '1px solid #334155', textDecoration: 'none', color: '#f8fafc' }}>
            <BookOpen size={20} className="text-purple-400" />
            <div style={{ fontWeight: 700, marginTop: '8px', fontSize: '0.95rem' }}>Cheat Sheets</div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Revision summaries</span>
          </Link>
          <Link to="/roadmap" style={{ padding: '12px', background: '#0f172a', borderRadius: '10px', border: '1px solid #334155', textDecoration: 'none', color: '#f8fafc' }}>
            <Calendar size={20} className="text-emerald-400" />
            <div style={{ fontWeight: 700, marginTop: '8px', fontSize: '0.95rem' }}>7-Day Roadmap</div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Calibrated daily plan</span>
          </Link>
          <Link to="/interview" style={{ padding: '12px', background: '#0f172a', borderRadius: '10px', border: '1px solid #334155', textDecoration: 'none', color: '#f8fafc' }}>
            <Mic size={20} className="text-pink-400" />
            <div style={{ fontWeight: 700, marginTop: '8px', fontSize: '0.95rem' }}>Interview Prep</div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>STAR & Technical Qs</span>
          </Link>
          <Link to="/cognitive" style={{ padding: '12px', background: '#0f172a', borderRadius: '10px', border: '1px solid #334155', textDecoration: 'none', color: '#f8fafc' }}>
            <Brain size={20} className="text-indigo-400" />
            <div style={{ fontWeight: 700, marginTop: '8px', fontSize: '0.95rem' }}>Cognitive Games</div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Math Bubble & Maze</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
