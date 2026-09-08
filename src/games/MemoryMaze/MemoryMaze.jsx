// src/games/MemoryMaze/MemoryMaze.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { generateMemoryMaze, MEMORY_MAZE_VARIANTS } from './mazeGenerator';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Trophy, HelpCircle, AlertCircle } from 'lucide-react';
import './MemoryMaze.css';

export default function MemoryMaze({
  variantKey = 'find-the-key',
  onVariantChange,
  onComplete,
  isMock = false
}) {
  const [activeVariant, setActiveVariant] = useState(variantKey);
  const [mazeData, setMazeData] = useState(() => generateMemoryMaze(variantKey));

  // Phase: 'INSTRUCTIONS' | 'PLAYING' | 'COMPLETED' | 'TIMEOUT'
  const [phase, setPhase] = useState('INSTRUCTIONS');
  const [timeLeft, setTimeLeft] = useState(mazeData.variant.timeLimit || 233);

  // Position & Items
  const [playerPos, setPlayerPos] = useState(mazeData.start);
  const [collectedKeys, setCollectedKeys] = useState([]);
  const [attempts, setAttempts] = useState(0);

  // Toast / feedback message
  const [feedback, setFeedback] = useState(null);
  const [isShaking, setIsShaking] = useState(false);

  const timerRef = useRef(null);
  const feedbackTimeoutRef = useRef(null);

  // Load / switch maze variant
  const loadMaze = useCallback((vKey) => {
    const next = generateMemoryMaze(vKey);
    setMazeData(next);
    setActiveVariant(vKey);
    setPlayerPos(next.start);
    setCollectedKeys([]);
    setAttempts(0);
    setPhase('INSTRUCTIONS');
    setTimeLeft(next.variant.timeLimit || 233);
    setFeedback(null);
  }, []);

  // Sync prop changes
  useEffect(() => {
    if (variantKey !== activeVariant) {
      loadMaze(variantKey);
    }
  }, [variantKey, loadMaze]);

  // Timer Countdown during PLAYING phase
  useEffect(() => {
    if (phase !== 'PLAYING') return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setPhase('TIMEOUT');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [phase]);

  // Show temporary toast feedback
  const showFeedback = (msg, type = 'wall') => {
    if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    setFeedback({ msg, type });
    feedbackTimeoutRef.current = setTimeout(() => {
      setFeedback(null);
    }, 2000);
  };

  // Handle Player Movement
  const movePlayer = useCallback((dr, dc, directionName) => {
    if (phase !== 'PLAYING') return;

    const r = playerPos.r;
    const c = playerPos.c;
    const size = mazeData.size;
    const currentCell = mazeData.cells[r][c];

    let hasWall = false;

    // Check bounds & internal walls for the attempted direction
    if (dr === -1 && dc === 0) {
      // UP
      if (r <= 0 || currentCell.walls.top) hasWall = true;
    } else if (dr === 1 && dc === 0) {
      // DOWN
      if (r >= size - 1 || currentCell.walls.bottom) hasWall = true;
    } else if (dr === 0 && dc === -1) {
      // LEFT
      if (c <= 0 || currentCell.walls.left) hasWall = true;
    } else if (dr === 0 && dc === 1) {
      // RIGHT
      if (c >= size - 1 || currentCell.walls.right) hasWall = true;
    }

    if (hasWall) {
      // HIT INVISIBLE WALL!
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 400);

      // Increment attempts
      setAttempts((prev) => prev + 1);

      // Reset player to START
      setPlayerPos(mazeData.start);

      // Reset collected keys for this attempt
      setCollectedKeys([]);

      // Subtle feedback message
      showFeedback('Wall hit! Try to remember its location.', 'wall');
      return;
    }

    // Valid move!
    const nextPos = { r: r + dr, c: c + dc };

    // Check if stepping into door
    const isDoor = nextPos.r === mazeData.door.r && nextPos.c === mazeData.door.c;
    const allKeysCollected = collectedKeys.length === mazeData.keys.length;

    // Check if stepping on a key
    const foundKey = mazeData.keys.find(
      (k) => k.r === nextPos.r && k.c === nextPos.c && !collectedKeys.includes(k.id)
    );

    let nextCollected = collectedKeys;
    if (foundKey) {
      nextCollected = [...collectedKeys, foundKey.id];
      setCollectedKeys(nextCollected);
      showFeedback(`Key collected! (${nextCollected.length}/${mazeData.keys.length})`, 'key');
    }

    // If stepped on door
    if (isDoor) {
      const willHaveAllKeys = nextCollected.length === mazeData.keys.length;
      if (willHaveAllKeys) {
        // VICTORY!
        if (timerRef.current) clearInterval(timerRef.current);
        setPlayerPos(nextPos);
        setPhase('COMPLETED');

        const timeTaken = (mazeData.variant.timeLimit || 233) - timeLeft;
        // Primary metric: fewest attempts (base 1000 - attempts * 50)
        const finalScore = Math.max(100, 1000 - attempts * 75 + Math.min(200, Math.floor(timeLeft / 2)));

        if (onComplete) {
          onComplete({
            gameType: 'memory-maze',
            variant: activeVariant,
            score: finalScore,
            attempts,
            timeTaken,
            completed: true
          });
        }
        return;
      } else {
        // Door is locked!
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 300);
        showFeedback('Door locked. Collect the key first.', 'door');
        return;
      }
    }

    // Move to next cell
    setPlayerPos(nextPos);
  }, [phase, playerPos, mazeData, collectedKeys, attempts, timeLeft, activeVariant, onComplete]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (phase !== 'PLAYING') return;

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          e.preventDefault();
          movePlayer(-1, 0, 'up');
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          e.preventDefault();
          movePlayer(1, 0, 'down');
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault();
          movePlayer(0, -1, 'left');
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault();
          movePlayer(0, 1, 'right');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [phase, movePlayer]);

  // Format MM:SS for timer
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const neededKeys = mazeData.keys.length;
  const allKeysCollected = collectedKeys.length === neededKeys;

  return (
    <div className="memory-maze-container">
      {/* Top 4 Variant Selector Pills */}
      {!isMock && (
        <div className="mm-variant-nav">
          {Object.entries(MEMORY_MAZE_VARIANTS).map(([key, v]) => (
            <button
              key={key}
              type="button"
              className={`mm-variant-pill ${activeVariant === key ? 'active' : ''}`}
              onClick={() => {
                if (onVariantChange) onVariantChange(key);
                loadMaze(key);
              }}
            >
              {v.name}
            </button>
          ))}
        </div>
      )}

      {/* Subtle Toast Feedback */}
      {feedback && (
        <div className={`mm-toast ${feedback.type}`}>
          {feedback.type === 'wall' && <AlertCircle size={16} />}
          <span>{feedback.msg}</span>
        </div>
      )}

      {/* Instructions Overlay Modal */}
      {phase === 'INSTRUCTIONS' && (
        <div className="mm-instructions-overlay">
          <div className="mm-instructions-card">
            <h2 className="mm-inst-title">MEMORY MAZE</h2>
            <div className="mm-inst-body">
              <p>Move through the grid using up, down, left and right.</p>
              <p><strong>The walls are invisible.</strong></p>
              <p>If you hit a wall, you will return to the beginning.</p>
              <p>Remember where the walls are.</p>
              <p>Collect the <strong>KEY</strong> before entering the <strong>DOOR</strong>.</p>
              <p>Try to complete the maze in the <strong>fewest attempts</strong>.</p>
              <p className="mm-inst-sub">You do not need to rush.</p>
            </div>
            <button
              type="button"
              className="mm-start-btn"
              onClick={() => setPhase('PLAYING')}
            >
              START
            </button>
          </div>
        </div>
      )}

      {/* Main Maze Arena Card (Screenshot 1 Visual Architecture) */}
      <div className="mm-arena-card">
        <div
          className={`mm-grid-board ${isShaking ? 'blocked-shake' : ''}`}
          style={{
            gridTemplateColumns: `repeat(${mazeData.size}, 1fr)`,
            gridTemplateRows: `repeat(${mazeData.size}, 1fr)`
          }}
        >
          {Array.from({ length: mazeData.size }).map((_, r) =>
            Array.from({ length: mazeData.size }).map((_, c) => {
              const isPlayer = playerPos.r === r && playerPos.c === c;
              const isDoor = mazeData.door.r === r && mazeData.door.c === c;
              const keyObj = mazeData.keys.find((k) => k.r === r && k.c === c);
              const isKeyHere = keyObj && !collectedKeys.includes(keyObj.id);

              return (
                <div
                  key={`${r}-${c}`}
                  className={`mm-cell ${isPlayer ? 'player-cell' : ''} ${isDoor ? 'door-cell' : ''}`}
                >
                  {/* Key Icon (Visible on grid) */}
                  {isKeyHere && (
                    <span className="mm-key-icon" role="img" aria-label="Key">
                      🔑
                    </span>
                  )}

                  {/* Door Icon */}
                  {isDoor && (
                    <span
                      className={`mm-door-icon ${allKeysCollected ? 'unlocked' : ''}`}
                      role="img"
                      aria-label="Door"
                    >
                      🚪
                    </span>
                  )}

                  {/* Player Avatar */}
                  {isPlayer && (
                    <span className="mm-avatar" role="img" aria-label="Player">
                      🚶
                    </span>
                  )}

                  {/* On-Cell Directional Navigation Buttons (Screenshot 1) */}
                  {isPlayer && phase === 'PLAYING' && (
                    <>
                      <button
                        type="button"
                        className="mm-arrow-btn up"
                        onClick={() => movePlayer(-1, 0, 'up')}
                        aria-label="Move up"
                      >
                        <ChevronUp size={16} />
                      </button>
                      <button
                        type="button"
                        className="mm-arrow-btn down"
                        onClick={() => movePlayer(1, 0, 'down')}
                        aria-label="Move down"
                      >
                        <ChevronDown size={16} />
                      </button>
                      <button
                        type="button"
                        className="mm-arrow-btn left"
                        onClick={() => movePlayer(0, -1, 'left')}
                        aria-label="Move left"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        type="button"
                        className="mm-arrow-btn right"
                        onClick={() => movePlayer(0, 1, 'right')}
                        aria-label="Move right"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Bar: Timer, Objective, and Attempts (Screenshot 1) */}
        <div className="mm-bottom-bar">
          <div className="mm-timer-circle">
            {formatTime(timeLeft)}
          </div>

          <div className="mm-objective-text">
            <span>
              Collect <strong>{neededKeys === 1 ? '1 KEY' : `${neededKeys} KEYS`}</strong> then get to the <strong>DOOR</strong>
            </span>
            <span className="mm-attempts-counter">Attempts: {attempts}</span>
          </div>
        </div>

        {/* Completion Modal */}
        {phase === 'COMPLETED' && (
          <div className="mm-result-overlay">
            <div className="mm-result-box">
              <Trophy size={42} color="#f59e0b" style={{ margin: '0 auto 8px auto' }} />
              <h3 className="mm-result-title">Maze Solved!</h3>
              <p style={{ fontSize: '14px', color: '#cbd5e1', margin: '0 0 16px 0' }}>
                You learned the invisible walls and unlocked the door.
              </p>

              <div className="mm-stats-grid">
                <div className="mm-stat-card">
                  <div className="mm-stat-val" style={{ color: '#fb923c' }}>{attempts}</div>
                  <div className="mm-stat-lbl">Attempts</div>
                </div>
                <div className="mm-stat-card">
                  <div className="mm-stat-val">
                    {(mazeData.variant.timeLimit || 233) - timeLeft}s
                  </div>
                  <div className="mm-stat-lbl">Time Taken</div>
                </div>
                <div className="mm-stat-card">
                  <div className="mm-stat-val" style={{ color: '#38bdf8' }}>
                    {Math.max(100, 1000 - attempts * 75 + Math.min(200, Math.floor(timeLeft / 2)))}
                  </div>
                  <div className="mm-stat-lbl">Score</div>
                </div>
              </div>

              <button
                type="button"
                className="mm-action-btn"
                onClick={() => loadMaze(activeVariant)}
              >
                Play Again
              </button>
            </div>
          </div>
        )}

        {/* Timeout Modal */}
        {phase === 'TIMEOUT' && (
          <div className="mm-result-overlay">
            <div className="mm-result-box">
              <h3 className="mm-result-title" style={{ color: '#ef4444' }}>Time Expired</h3>
              <p style={{ fontSize: '14px', color: '#cbd5e1', margin: '0 0 16px 0' }}>
                The maximum time limit was reached for this maze.
              </p>
              <button
                type="button"
                className="mm-action-btn"
                onClick={() => loadMaze(activeVariant)}
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
