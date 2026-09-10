// src/components/pseudocode/PseudocodeTracer.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Eye,
  Zap,
  Info
} from 'lucide-react';

export default function PseudocodeTracer({ pseudocode, stepTrace = [] }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playIntervalRef = useRef(null);

  const totalSteps = stepTrace.length;
  const currentStep = stepTrace[currentStepIndex] || stepTrace[0];

  // Auto play effect
  useEffect(() => {
    if (isPlaying) {
      playIntervalRef.current = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev >= totalSteps - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1500);
    } else {
      if (playIntervalRef.current) clearInterval(playIntervalRef.current);
    }
    return () => {
      if (playIntervalRef.current) clearInterval(playIntervalRef.current);
    };
  }, [isPlaying, totalSteps]);

  // Reset when pseudocode changes
  useEffect(() => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
  }, [pseudocode]);

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  // Format code lines and highlight current executing line
  const lines = pseudocode.split('\n');

  return (
    <div style={{
      background: '#090d16',
      border: '1px solid #1e293b',
      borderRadius: '14px',
      overflow: 'hidden',
      marginBottom: '1.5rem'
    }}>
      {/* Top Tracer Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 16px',
        background: '#0f172a',
        borderBottom: '1px solid #1e293b',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Zap size={16} className="text-amber-400" />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>
            Interactive Variable Watch & Tracer
          </span>
          <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '10px', background: '#1e293b', color: '#94a3b8' }}>
            Step {currentStepIndex + 1} of {totalSteps}
          </span>
        </div>

        {/* Tracer Controls */}
        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
          <button
            onClick={handleReset}
            style={{ padding: '5px 10px', background: '#1e293b', border: '1px solid #334155', borderRadius: '6px', color: '#cbd5e1', cursor: 'pointer', fontSize: '0.75rem' }}
            title="Reset to initial state"
          >
            <RotateCcw size={12} />
          </button>
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            style={{ padding: '5px 10px', background: '#1e293b', border: '1px solid #334155', borderRadius: '6px', color: currentStepIndex === 0 ? '#475569' : '#cbd5e1', cursor: currentStepIndex === 0 ? 'not-allowed' : 'pointer', fontSize: '0.75rem' }}
            title="Previous step"
          >
            <ChevronLeft size={12} />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              padding: '5px 12px',
              background: isPlaying ? '#ea580c' : '#0284c7',
              border: 'none',
              borderRadius: '6px',
              color: '#ffffff',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
            <span>{isPlaying ? 'Pause' : 'Auto'}</span>
          </button>
          <button
            onClick={handleNext}
            disabled={currentStepIndex === totalSteps - 1}
            style={{ padding: '5px 10px', background: '#1e293b', border: '1px solid #334155', borderRadius: '6px', color: currentStepIndex === totalSteps - 1 ? '#475569' : '#cbd5e1', cursor: currentStepIndex === totalSteps - 1 ? 'not-allowed' : 'pointer', fontSize: '0.75rem' }}
            title="Next step"
          >
            <ChevronRight size={12} />
          </button>
        </div>
      </div>

      {/* Code & Line Highlighting */}
      <div style={{ padding: '1rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', lineHeight: 1.6 }}>
        {lines.map((lineText, idx) => {
          const lineNumber = idx + 1;
          const isCurrentLine = currentStep && currentStep.line === lineNumber;
          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                background: isCurrentLine ? 'rgba(56, 189, 248, 0.18)' : 'transparent',
                borderLeft: isCurrentLine ? '3px solid #38bdf8' : '3px solid transparent',
                padding: '2px 8px',
                borderRadius: '4px',
                color: isCurrentLine ? '#f8fafc' : '#94a3b8'
              }}
            >
              <span style={{ width: '28px', color: '#475569', userSelect: 'none' }}>{lineNumber}</span>
              <span style={{ flex: 1 }}>{lineText}</span>
            </div>
          );
        })}
      </div>

      {/* Variable Watch Table */}
      {currentStep && currentStep.variables && (
        <div style={{
          background: '#0f172a',
          borderTop: '1px solid #1e293b',
          padding: '12px 16px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
              Live Variable Watch Table
            </span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '10px' }}>
            {Object.entries(currentStep.variables).map(([varName, val]) => (
              <div
                key={varName}
                style={{
                  background: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  padding: '6px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 700 }}>{varName}:</span>
                <span style={{ fontSize: '0.9rem', color: '#4ade80', fontWeight: 800, fontFamily: 'JetBrains Mono' }}>
                  {String(val)}
                </span>
              </div>
            ))}
          </div>

          {/* Current Execution Note */}
          {currentStep.note && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem',
              color: '#bae6fd',
              background: 'rgba(56, 189, 248, 0.08)',
              padding: '6px 10px',
              borderRadius: '6px',
              border: '1px solid rgba(56, 189, 248, 0.2)'
            }}>
              <Info size={14} className="text-sky-400" />
              <span>{currentStep.note}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
