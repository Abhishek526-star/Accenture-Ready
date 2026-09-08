// src/pages/CognitiveResults.jsx
import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Trophy, Award, CheckCircle2, ArrowRight, RotateCcw, Brain, Zap, Code, ShieldCheck, Sparkles } from 'lucide-react';
import { getCognitiveStats } from '../utils/cognitiveStorage';
import { checkAchievements } from '../utils/achievements';
import '../components/cognitive/cognitive.css';

export default function CognitiveResults() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve session passed in router state, or fallback to latest in storage
  const stats = getCognitiveStats();
  const session = location.state?.session || stats.recentSessions[0] || null;

  const totalScore = session?.score || 0;
  const accuracy = session?.accuracy || 0;
  const round1 = session?.round1 || null;
  const round2 = session?.round2 || null;

  // Grade calculation
  let grade = 'Proficient';
  let gradeColor = '#38bdf8';
  if (totalScore >= 1200) {
    grade = 'Exceptional';
    gradeColor = '#10b981';
  } else if (totalScore >= 800) {
    grade = 'Advanced';
    gradeColor = '#a855f7';
  } else if (totalScore < 400) {
    grade = 'Developing';
    gradeColor = '#f59e0b';
  }

  // Competency Ratings (0-100%)
  const arithmeticSpeed = round1 ? Math.min(100, Math.round(100 - (parseFloat(round1.avgTime) || 8) * 5)) : 75;
  const workingMemory = round1 ? round1.accuracy : accuracy;
  const spatialOrientation = round2 ? Math.round((round2.solvedCount / (round2.totalPuzzles || 1)) * 100) : 80;
  const rotationEfficiency = round2 ? round2.avgEfficiency : 70;
  const cognitiveStamina = Math.round((accuracy + (round2?.avgEfficiency || accuracy)) / 2);

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem 3.5rem 1rem' }}>
      {/* Top Banner */}
      <div style={{
        background: 'radial-gradient(circle at top, #1e293b 0%, #0f172a 100%)',
        border: '1px solid #334155',
        borderRadius: '20px',
        padding: '2.5rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '72px',
          height: '72px',
          borderRadius: '24px',
          background: 'rgba(56, 189, 248, 0.1)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          marginBottom: '1rem'
        }}>
          <Trophy size={40} className="text-amber-400" />
        </div>

        <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 800, color: '#f8fafc' }}>
          Assessment Report
        </h1>
        <p style={{ margin: '0.5rem 0 1.5rem 0', color: '#94a3b8', fontSize: '1rem' }}>
          Cognitive evaluation based on mental arithmetic, working memory, and spatial orientation
        </p>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.6rem 1.5rem', background: '#090d16', border: '1px solid #1e293b', borderRadius: '30px' }}>
          <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Performance Band:</span>
          <span style={{ color: gradeColor, fontWeight: 800, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {grade}
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          <div style={{ background: '#131d2e', padding: '1.25rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Total Score</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f8fafc', fontFamily: 'JetBrains Mono' }}>
              {totalScore}
            </div>
          </div>

          <div style={{ background: '#131d2e', padding: '1.25rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Overall Accuracy</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#10b981', fontFamily: 'JetBrains Mono' }}>
              {accuracy}%
            </div>
          </div>

          <div style={{ background: '#131d2e', padding: '1.25rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Round 1 Score (Math)</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'JetBrains Mono' }}>
              {round1?.totalScore || 0}
            </div>
          </div>

          <div style={{ background: '#131d2e', padding: '1.25rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Round 2 Score (Path)</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#a855f7', fontFamily: 'JetBrains Mono' }}>
              {round2?.totalScore || 0}
            </div>
          </div>
        </div>
      </div>

      {/* Competencies Breakdown */}
      <div style={{
        marginTop: '2rem',
        background: '#1e293b',
        border: '1px solid #334155',
        borderRadius: '16px',
        padding: '1.75rem'
      }}>
        <h2 style={{ margin: '0 0 1.25rem 0', fontSize: '1.25rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Brain size={22} className="text-sky-400" />
          Cognitive Competency Profile
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[
            { label: 'Mental Arithmetic Speed', value: arithmeticSpeed, desc: 'Rapid calculation & ascending sequence evaluation under pressure' },
            { label: 'Working Memory & Attention', value: workingMemory, desc: 'Maintaining temporary numerical values across simultaneous bubbles' },
            { label: 'Spatial Orientation', value: spatialOrientation, desc: 'Visualizing rotated conduits and continuous endpoints' },
            { label: 'Rotation & Move Efficiency', value: rotationEfficiency, desc: 'Planning minimal rotations rather than random trials' },
            { label: 'Cognitive Stamina & Focus', value: cognitiveStamina, desc: 'Sustaining high accuracy across both consecutive games' }
          ].map((item, idx) => (
            <div key={idx}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <span style={{ fontWeight: 600, color: '#f1f5f9', fontSize: '0.9rem' }}>{item.label}</span>
                <span style={{ fontWeight: 700, color: '#38bdf8', fontFamily: 'JetBrains Mono' }}>{item.value}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: '#0f172a', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{
                  width: `${item.value}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #0284c7, #38bdf8)',
                  borderRadius: '4px',
                  transition: 'width 1s ease-out'
                }} />
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.3rem' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        marginTop: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1rem'
      }}>
        {/* Call to Action: Take Frontend Coding Round */}
        <Link
          to="/practice"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            padding: '1rem',
            background: 'linear-gradient(135deg, #059669, #10b981)',
            color: '#fff',
            borderRadius: '12px',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)'
          }}
        >
          <Code size={18} />
          <span>Launch Coding Round</span>
          <ArrowRight size={18} />
        </Link>

        <Link
          to="/cognitive/assessment"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            padding: '1rem',
            background: '#334155',
            color: '#f1f5f9',
            borderRadius: '12px',
            fontWeight: 600,
            textDecoration: 'none',
            border: '1px solid #475569'
          }}
        >
          <RotateCcw size={18} />
          <span>Retake Assessment</span>
        </Link>

        <Link
          to="/cognitive"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            padding: '1rem',
            background: '#1e293b',
            color: '#38bdf8',
            borderRadius: '12px',
            fontWeight: 600,
            textDecoration: 'none',
            border: '1px solid #334155'
          }}
        >
          <span>Cognitive Hub</span>
        </Link>
      </div>
    </div>
  );
}
