// src/components/interview/RecentSetFollowupChain.jsx
import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Eye,
  ChevronRight
} from 'lucide-react';
import { RECENT_FOLLOWUP_CHAIN } from '../../data/interviewQuestions.js';

export default function RecentSetFollowupChain({ onSelectQuestion }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = RECENT_FOLLOWUP_CHAIN[activeStepIndex];

  return (
    <div className="recent-chain-module">
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.25rem',
        borderBottom: '1px solid rgba(168, 85, 247, 0.25)',
        paddingBottom: '1rem'
      }}>
        <div style={{ maxWidth: '720px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(56, 189, 248, 0.15)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            color: '#38bdf8',
            padding: '3px 10px',
            borderRadius: '8px',
            fontSize: '0.75rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            letterSpacing: '0.5px'
          }}>
            <Compass size={13} /> ACCENTURE REAL INTERVIEW CONVERSATION FLOW (30-MIN BLUEPRINT)
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 0.35rem 0' }}>
            Interactive Interview Follow-Up Chain (Set 1)
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0, lineHeight: 1.55 }}>
            Accenture interviews don't ask random, disjointed questions. Notice how interviewers chain each answer into the next technical or behavioral challenge. Select any stage to inspect the interviewer's hidden motive and exact counter-strategy.
          </p>
        </div>

        <div style={{
          background: 'rgba(168, 85, 247, 0.15)',
          border: '1px solid rgba(168, 85, 247, 0.35)',
          borderRadius: '10px',
          padding: '8px 14px',
          color: '#c084fc',
          fontSize: '0.8rem',
          fontWeight: 700
        }}>
          Stage {activeStepIndex + 1} of {RECENT_FOLLOWUP_CHAIN.length}
        </div>
      </div>

      {/* Step Pills Timeline / Carousel Buttons */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        overflowX: 'auto',
        paddingBottom: '0.75rem',
        marginBottom: '1.25rem',
        scrollbarWidth: 'thin'
      }}>
        {RECENT_FOLLOWUP_CHAIN.map((step, idx) => {
          const isActive = activeStepIndex === idx;
          return (
            <button
              key={step.step}
              onClick={() => setActiveStepIndex(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 12px',
                background: isActive ? 'linear-gradient(135deg, #a855f7, #7c3aed)' : '#0f172a',
                border: isActive ? '1px solid #c084fc' : '1px solid #334155',
                borderRadius: '10px',
                color: isActive ? '#ffffff' : '#94a3b8',
                fontWeight: isActive ? 700 : 500,
                fontSize: '0.78rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
                flexShrink: 0
              }}
            >
              <span style={{
                background: isActive ? 'rgba(0,0,0,0.3)' : 'rgba(168,85,247,0.15)',
                color: isActive ? '#ffffff' : '#c084fc',
                padding: '1px 5px',
                borderRadius: '4px',
                fontWeight: 800,
                fontSize: '0.72rem'
              }}>
                {step.step}
              </span>
              <span>{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Step Deep Dive Card */}
      {activeStep && (
        <div style={{
          background: '#090d16',
          border: '1px solid rgba(168, 85, 247, 0.4)',
          borderRadius: '14px',
          padding: '1.5rem',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
        }}>
          {/* Top Metadata */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                background: 'rgba(168, 85, 247, 0.2)',
                color: '#c084fc',
                fontWeight: 800,
                fontSize: '0.75rem',
                padding: '2px 8px',
                borderRadius: '6px'
              }}>
                Stage {activeStep.step}
              </span>
              <span style={{ fontSize: '0.78rem', color: '#38bdf8', fontFamily: 'JetBrains Mono', background: 'rgba(56, 189, 248, 0.1)', padding: '2px 8px', borderRadius: '6px' }}>
                Timeline: {activeStep.timeSlot}
              </span>
            </div>

            {activeStep.linkedQuestionId && onSelectQuestion && (
              <button
                onClick={() => onSelectQuestion(activeStep.linkedQuestionId)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '5px 12px',
                  background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <span>Jump to Question #{activeStep.linkedQuestionId.replace('recent-q', '')}</span>
                <ChevronRight size={13} />
              </button>
            )}
          </div>

          {/* Question / Inquiry */}
          <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 1rem 0', lineHeight: 1.35 }}>
            "{activeStep.inquiry}"
          </h4>

          {/* 3 Pillars: Intent, Transition, Strategy */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '0.85rem',
            marginBottom: '1rem'
          }}>
            {/* Why Interviewers Ask */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '10px',
              padding: '0.9rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#38bdf8', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                <HelpCircle size={14} /> Interviewer Intent:
              </div>
              <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.5 }}>
                {activeStep.interviewerIntent}
              </p>
            </div>

            {/* Logical Transition Link */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              borderRadius: '10px',
              padding: '0.9rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#c084fc', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                <ArrowRight size={14} /> Flow Transition:
              </div>
              <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.5 }}>
                {activeStep.transition}
              </p>
            </div>

            {/* Candidate Strategy */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid rgba(34, 197, 94, 0.25)',
              borderRadius: '10px',
              padding: '0.9rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#86efac', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                <Sparkles size={14} /> Recommended Response Strategy:
              </div>
              <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.5 }}>
                {activeStep.candidateStrategy}
              </p>
            </div>
          </div>

          {/* Action to Jump to Full Question */}
          {activeStep.linkedQuestionId && onSelectQuestion && (
            <div style={{ marginTop: '0.85rem', display: 'flex', justifyContent: 'flex-start' }}>
              <button
                onClick={() => onSelectQuestion(activeStep.linkedQuestionId)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.25), rgba(56, 189, 248, 0.2))',
                  border: '1px solid rgba(168, 85, 247, 0.45)',
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <Eye size={14} className="text-purple-400" />
                <span>Open Complete Model Response & Trap for Question {activeStep.step}</span>
              </button>
            </div>
          )}

          {/* Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid #1e293b' }}>
            <button
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
              style={{
                padding: '5px 12px',
                background: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '6px',
                color: activeStepIndex === 0 ? '#475569' : '#cbd5e1',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: activeStepIndex === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              ← Previous Stage
            </button>

            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              Use arrow keys or click pills above
            </span>

            <button
              disabled={activeStepIndex === RECENT_FOLLOWUP_CHAIN.length - 1}
              onClick={() => setActiveStepIndex(prev => Math.min(RECENT_FOLLOWUP_CHAIN.length - 1, prev + 1))}
              style={{
                padding: '5px 12px',
                background: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '6px',
                color: activeStepIndex === RECENT_FOLLOWUP_CHAIN.length - 1 ? '#475569' : '#cbd5e1',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: activeStepIndex === RECENT_FOLLOWUP_CHAIN.length - 1 ? 'not-allowed' : 'pointer'
              }}
            >
              Next Stage →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
