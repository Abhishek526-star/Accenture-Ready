// src/pages/CognitiveDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Sparkles,
  Play,
  Flame,
  Trophy,
  History,
  Grid,
  Zap,
  ArrowRight,
  ShieldAlert,
  Award,
  Lock,
  Code
} from 'lucide-react';
import DailyChallengeCard from '../components/cognitive/DailyChallengeCard';
import { getCognitiveStats } from '../utils/cognitiveStorage';
import { ACHIEVEMENTS_LIST, getUnlockedAchievements } from '../utils/achievements';
import '../components/cognitive/cognitive.css';

export default function CognitiveDashboard() {
  const [stats, setStats] = useState(() => getCognitiveStats());
  const [unlockedMap, setUnlockedMap] = useState({});

  useEffect(() => {
    const currentStats = getCognitiveStats();
    setStats(currentStats);
    setUnlockedMap(getUnlockedAchievements());
  }, []);

  return (
    <div className="cognitive-dashboard-container">
      {/* Hero Section */}
      <div className="cognitive-hero-card">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '20px', width: 'fit-content' }}>
          <Brain size={16} className="text-sky-400" />
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Accenture-Style Cognitive Round
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ maxWidth: '620px' }}>
            <h1 style={{ margin: 0, fontSize: '2.2rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1.2 }}>
              Gamified Cognitive Assessment
            </h1>
            <p style={{ margin: '0.75rem 0 0 0', color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.5 }}>
              Train your mental agility, rapid sequential arithmetic, and spatial navigation with realistic
              cognitive game simulations.
            </p>
          </div>

          <Link
            to="/cognitive/full-mock"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '1rem 1.8rem',
              background: 'linear-gradient(135deg, #ea580c, #f97316)',
              color: '#fff',
              fontSize: '1.05rem',
              fontWeight: 700,
              borderRadius: '14px',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(234, 88, 12, 0.4)',
              transition: 'all 0.2s ease'
            }}
          >
            <Play size={20} fill="#fff" />
            <span>Launch Full Cognitive Mock</span>
          </Link>
        </div>

        {/* Global summary chips */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1rem',
          marginTop: '1rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid #1e293b'
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Total Cognitive XP</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'JetBrains Mono' }}>
              {stats.totalXP}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Memory Maze Best</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fb923c', fontFamily: 'JetBrains Mono' }}>
              {stats.bestScores.memory_maze || 0}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Quick-Fire Math Best</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'JetBrains Mono' }}>
              {stats.bestScores.math_bubble}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Practice Streak</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fb923c', display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'JetBrains Mono' }}>
              <Flame size={20} className="fill-orange-400" />
              {stats.streak} Days
            </div>
          </div>
        </div>
      </div>

      {/* Three Practice Modules Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {/* Game 1: Memory Maze Card */}
        <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '18px',
          padding: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '1.25rem'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(249, 115, 22, 0.15)',
                border: '1px solid rgba(249, 115, 22, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fb923c'
              }}>
                <Brain size={22} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.6rem', background: '#0f172a', borderRadius: '12px', color: '#fb923c' }}>
                4 VARIANTS
              </span>
            </div>

            <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#f8fafc' }}>Memory Maze</h3>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.5 }}>
              Memorize the maze walls in 5s. Navigate the hidden grid to collect the golden key(s) and reach the door without hitting invisible walls.
            </p>

            <div style={{ marginTop: '1rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.4rem', fontWeight: 600 }}>
                Select Variant:
              </div>
              <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                {[
                  { id: 'find-the-key', label: 'Find the Key' },
                  { id: 'practice-2', label: 'Practice 2' },
                  { id: '4x4-grid', label: '4×4 Grid' },
                  { id: '4x4-two-keys', label: '4×4 Two Keys' }
                ].map((v) => (
                  <Link
                    key={v.id}
                    to={`/cognitive/memory-maze?variant=${v.id}`}
                    style={{
                      padding: '0.35rem 0.6rem',
                      background: 'rgba(249, 115, 22, 0.12)',
                      border: '1px solid rgba(249, 115, 22, 0.3)',
                      color: '#fb923c',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {v.label}
                  </Link>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.85rem', fontSize: '0.78rem', color: '#cbd5e1', flexWrap: 'wrap' }}>
              <div>• 5s Memorize Timer</div>
              <div>• On-Tile Arrow Controls</div>
              <div>• Key & Door Exit</div>
            </div>
          </div>

          <Link
            to="/cognitive/memory-maze?variant=find-the-key"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.85rem',
              background: '#ea580c',
              color: '#fff',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none'
            }}
          >
            <span>Play Memory Maze (Find Key)</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Game 2: Quick-Fire Math Card */}
        <div style={{
          background: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '18px',
          padding: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '1.25rem'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38bdf8'
              }}>
                <Zap size={22} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.6rem', background: '#0f172a', borderRadius: '12px', color: '#38bdf8' }}>
                5 SETS (15 Qs EACH)
              </span>
            </div>

            <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#f8fafc' }}>Quick-Fire Math</h3>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.5 }}>
              Rapidly evaluate arithmetic expressions with 2 operands and 1 operator (+, -, *, /), including decimals and fractions. Select 3 bubbles in any order with final results calculated after completing each 15-question set.
            </p>

            <div style={{ marginTop: '1rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.4rem', fontWeight: 600 }}>
                Select Practice Set (15 Questions Each):
              </div>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Link
                    key={s}
                    to={`/cognitive/quick-fire-math?set=${s}`}
                    style={{
                      padding: '0.35rem 0.65rem',
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      color: '#38bdf8',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    Set {s}
                  </Link>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.85rem', fontSize: '0.78rem', color: '#cbd5e1', flexWrap: 'wrap' }}>
              <div>• Exactly 3 Bubbles</div>
              <div>• Decimals & Fractions</div>
              <div>• Free Order Selection</div>
            </div>
          </div>

          <Link
            to="/cognitive/quick-fire-math?set=1"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.85rem',
              background: '#0284c7',
              color: '#fff',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none'
            }}
          >
            <span>Launch Quick-Fire Math (Set 1)</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>

      {/* Daily Challenge Row */}
      <div style={{ marginBottom: '2rem' }}>
        <DailyChallengeCard />
      </div>

      {/* Achievements Section */}
      <div style={{
        background: '#1e293b',
        border: '1px solid #334155',
        borderRadius: '18px',
        padding: '1.75rem',
        marginBottom: '2rem'
      }}>
        <h3 style={{ margin: '0 0 1.25rem 0', fontSize: '1.25rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Trophy size={20} className="text-amber-400" />
          Candidate Achievements & Badges
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem'
        }}>
          {ACHIEVEMENTS_LIST.map(ach => {
            const isUnlocked = Boolean(unlockedMap[ach.id]);
            return (
              <div
                key={ach.id}
                style={{
                  background: isUnlocked ? 'rgba(56, 189, 248, 0.08)' : '#0f172a',
                  border: isUnlocked ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid #1e293b',
                  borderRadius: '12px',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  opacity: isUnlocked ? 1 : 0.6
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Award size={20} className={isUnlocked ? 'text-amber-400' : 'text-slate-500'} />
                  {isUnlocked ? (
                    <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 700 }}>UNLOCKED</span>
                  ) : (
                    <Lock size={14} className="text-slate-500" />
                  )}
                </div>
                <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '0.95rem' }}>{ach.title}</div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.3 }}>{ach.description}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Switch to Frontend Coding Assessment Round */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, #1e293b 100%)',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        borderRadius: '18px',
        padding: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#10b981'
          }}>
            <Code size={24} />
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#f8fafc' }}>
              Frontend Coding Assessment Round
            </h4>
            <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#94a3b8' }}>
              Practice 10 real-world DOM manipulation, styling, and interactive UI coding challenges.
            </p>
          </div>
        </div>

        <Link
          to="/practice"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.25rem',
            background: '#10b981',
            color: '#022c22',
            fontWeight: 700,
            borderRadius: '10px',
            textDecoration: 'none',
            fontSize: '0.9rem'
          }}
        >
          <span>Open Coding Practice</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
