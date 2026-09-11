// src/pages/AchievementsPage.jsx
import React, { useState, useEffect } from 'react';
import {
  Award,
  Sparkles,
  Flame,
  CheckCircle2,
  Lock,
  Zap,
  Coffee,
  Database,
  Code2,
  Brain
} from 'lucide-react';
import { gamificationService, ACHIEVEMENTS_CATALOG } from '../services/gamificationService.js';

export default function AchievementsPage({ theme = 'dark' }) {
  const [unlockedIds, setUnlockedIds] = useState(() => gamificationService.getUnlockedAchievements());
  const [gamify, setGamify] = useState(() => gamificationService.getState());

  useEffect(() => {
    gamificationService.checkAchievements();
    setUnlockedIds(gamificationService.getUnlockedAchievements());
    setGamify(gamificationService.getState());
  }, []);

  const unlockedCount = unlockedIds.length;
  const totalCount = ACHIEVEMENTS_CATALOG.length;
  const percent = Math.round((unlockedCount / totalCount) * 100);

  return (
    <div className="achievements-page-container">
      {/* Banner */}
      <div className="achievements-hero-card">
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(234, 179, 8, 0.15)', color: '#facc15', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            <Award size={14} /> CANDIDATE BADGES & RECOGNITION
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
            Accenture Preparation Achievements
          </h1>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '1rem', maxWidth: '650px' }}>
            Unlock achievements automatically across coding, SQL queries, streaks, cognitive precision, and mock tests. Each achievement grants bonus candidate XP.
          </p>
        </div>

        <div style={{
          background: '#0f172a',
          border: '1px solid #334155',
          borderRadius: '14px',
          padding: '1.25rem 1.75rem',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Total Unlocked</span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#facc15', fontFamily: 'JetBrains Mono' }}>
            {unlockedCount} <span style={{ fontSize: '1rem', color: '#64748b' }}>/ {totalCount}</span>
          </div>
          <span style={{ fontSize: '0.8rem', color: '#4ade80' }}>{percent}% Badge Completion</span>
        </div>
      </div>

      {/* Grid of Achievements */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem'
      }}>
        {ACHIEVEMENTS_CATALOG.map((ach) => {
          const isUnlocked = unlockedIds.includes(ach.id);
          return (
            <div
              key={ach.id}
              style={{
                background: isUnlocked ? '#1e293b' : 'rgba(30, 41, 59, 0.5)',
                border: isUnlocked ? '1px solid rgba(234, 179, 8, 0.4)' : '1px solid #334155',
                borderRadius: '16px',
                padding: '1.75rem',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
                opacity: isUnlocked ? 1 : 0.65,
                boxShadow: isUnlocked ? '0 4px 20px rgba(0,0,0,0.25)' : 'none'
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: isUnlocked ? 'rgba(234, 179, 8, 0.15)' : '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                flexShrink: 0
              }}>
                {isUnlocked ? ach.icon : <Lock size={22} style={{ color: '#64748b' }} />}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: isUnlocked ? '#f8fafc' : '#94a3b8', margin: 0 }}>
                    {ach.title}
                  </h3>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: isUnlocked ? '#facc15' : '#64748b',
                    background: '#0f172a',
                    padding: '2px 8px',
                    borderRadius: '8px'
                  }}>
                    +{ach.xpReward} XP
                  </span>
                </div>

                <p style={{ margin: '0 0 0.75rem 0', color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.5 }}>
                  {ach.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 600, color: isUnlocked ? '#4ade80' : '#64748b' }}>
                  {isUnlocked ? (
                    <>
                      <CheckCircle2 size={14} />
                      <span>Unlocked & Credited</span>
                    </>
                  ) : (
                    <>
                      <Lock size={12} />
                      <span>Locked — Keep Practicing</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
