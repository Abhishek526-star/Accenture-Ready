// src/components/Timer.jsx
import React, { useState, useEffect } from 'react';
import { Clock, Pause, Play, EyeOff, Eye } from 'lucide-react';
import { storage } from '../utils/storage.js';

export default function Timer() {
  const initialSettings = storage.getTimerSettings();
  const [enabled, setEnabled] = useState(initialSettings.enabled);
  const [seconds, setSeconds] = useState(initialSettings.remainingSeconds);
  const [isPaused, setIsPaused] = useState(initialSettings.isPaused);

  useEffect(() => {
    let interval = null;
    if (enabled && !isPaused && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          const next = prev - 1;
          storage.setTimerSettings({ enabled, remainingSeconds: next, isPaused });
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [enabled, isPaused, seconds]);

  const togglePause = () => {
    const nextPaused = !isPaused;
    setIsPaused(nextPaused);
    storage.setTimerSettings({ enabled, remainingSeconds: seconds, isPaused: nextPaused });
  };

  const toggleEnabled = () => {
    const nextEnabled = !enabled;
    setEnabled(nextEnabled);
    storage.setTimerSettings({ enabled: nextEnabled, remainingSeconds: seconds, isPaused });
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`assessment-timer ${!enabled ? 'disabled' : ''} ${seconds < 300 && enabled ? 'low-time' : ''}`}>
      <Clock size={16} className="timer-icon" />
      {enabled ? (
        <span className="timer-display" title="Time Remaining">
          {formatTime(seconds)}
        </span>
      ) : (
        <span className="timer-display disabled-text">Timer Off</span>
      )}

      <button
        onClick={togglePause}
        className="timer-action-btn"
        disabled={!enabled}
        title={isPaused ? 'Resume Timer' : 'Pause Timer'}
        aria-label="Pause/Resume Timer"
      >
        {isPaused ? <Play size={12} /> : <Pause size={12} />}
      </button>

      <button
        onClick={toggleEnabled}
        className="timer-action-btn"
        title={enabled ? 'Disable Timer (Practice Mode)' : 'Enable Timer'}
        aria-label="Toggle Timer"
      >
        {enabled ? <EyeOff size={12} /> : <Eye size={12} />}
      </button>
    </div>
  );
}
