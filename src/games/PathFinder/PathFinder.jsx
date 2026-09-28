// src/games/PathFinder/PathFinder.jsx
// UI layer — React port of docs/Path Finder/04-app-js.md (app.js).
// Exact game flow: instructions (9 slides) -> practice board -> success modal ->
// game stage (Section 2) -> advance per puzzle -> results.

import React, { useState, useRef, useEffect, useCallback } from 'react';
import * as PF from './logic.js';
import PF_DATA from './data.js';
import { UiIcon, ArrowSvg, StartIcon, EndIcon } from './icons.jsx';
import './PathFinder.css';

const INSTR_SLIDES = [
  'This practice exercise will provide you with instructions and practice items for a task designed to measure Image rotation ability.\n\nPlease take the time to read the instructions carefully and use the practice items to familiarize yourself with the task.',
  'Your goal is to create a path from the icon on the left to the icon on the right by rotating the tiles and changing the arrow directions. You should try to generate a path in the least number of moves.',
  'Tap/click on a tile to select it.',
  'Tap/click \uD83D\uDDD8 to rotate the tile clockwise.',
  'Tap/click \u21C6 to change the direction of route.',
  'Arrow directions can point left, right, up, down, and around any angles of the tile path.',
  'Once the route is complete, select \u2713. If you have successfully created a path, the task is complete. If you have not successfully created a path, you will be able to try again.',
  'Your goal is to create a valid path in the least number of moves. You do not need to rush. However, if you have been unable to find a valid path within the time limit, you will progress automatically to the next question.\n\nA timer is located at the bottom of the screen to indicate time remaining.',
  'The practice exercise will have 2 grids to solve.\n\nThe first grid will be one that you can replay, so you should take this opportunity to practice how to rotate and change arrow directions for all types of tile patterns.'
];

const CELL_SIZE_BY_BLOCKS = { 3: 42, 4: 28, 5: 20 };

function newBoard(puzzle) {
  return {
    puzzle: puzzle,
    blocks: PF.cloneBlocks(puzzle.blocks),
    selected: null,
    moves: 0,
    seconds: puzzle.timeLimit,
    highlight: [],
    shake: false,
    animating: false,
    done: false
  };
}

function fmtTime(s) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return m + ':' + (r < 10 ? '0' : '') + r;
}

function renderCells(puzzle, blocks, opts, cellSize) {
  const sel = opts.selected;
  const hl = opts.highlight || [];
  const interactive = !!opts.onSelect;
  const cells = [];
  for (let r = 0; r < puzzle.gridSize; r++) {
    for (let c = 0; c < puzzle.gridSize; c++) {
      const br = Math.floor(r / 3);
      const bc = Math.floor(c / 3);
      const block = blocks.find((bl) => bl.blockRow === br && bl.blockCol === bc);
      const cell = block ? block.cells[(r % 3) * 3 + (c % 3)] : null;
      const isDark = !!(cell && cell.isDark);
      const key = r + ',' + c;
      const bKey = 'block_' + br + '_' + bc;
      const cls = ['pf-cell'];
      if (isDark) cls.push('dark');
      if (hl.indexOf(key) !== -1) cls.push('hl');
      if (sel === bKey) cls.push('sel');
      if ((c + 1) % 3 === 0 && c !== puzzle.gridSize - 1) cls.push('sepr');
      if ((r + 1) % 3 === 0 && r !== puzzle.gridSize - 1) cls.push('sepb');
      cells.push(
        <button
          key={key}
          className={cls.join(' ')}
          data-b={bKey}
          disabled={!interactive || !isDark}
          onClick={interactive && isDark ? opts.onSelect : undefined}
          style={{ width: cellSize + 'px', height: cellSize + 'px' }}
        >
          {isDark && cell.arrow ? <ArrowSvg dir={cell.arrow} /> : null}
        </button>
      );
    }
  }
  return cells;
}

function BoardView({ puzzle, blocks, selected, highlight, onSelect, shaking, cellSize, iconSize }) {
  return (
    <div className="pf-boardbox" style={{ display: 'flex', justifyContent: 'center' }}>
      <div className={'pf-boardrow' + (shaking ? ' shake' : '')}>
        <div
          className="pf-side"
          style={{
            width: iconSize + 4 + 'px',
            height: puzzle.gridSize * cellSize + 'px',
            paddingTop: puzzle.startCell.row * cellSize + (cellSize - iconSize) / 2 + 'px',
            color: '#000'
          }}
        >
          <StartIcon size={iconSize} />
        </div>
        <div className="pf-grid" style={{ borderRadius: '10px', padding: '2px' }}>
          <div
            className="pf-gridin"
            style={{
              gridTemplateColumns: 'repeat(' + puzzle.gridSize + ', ' + cellSize + 'px)',
              gridTemplateRows: 'repeat(' + puzzle.gridSize + ', ' + cellSize + 'px)'
            }}
          >
            {renderCells(puzzle, blocks, { selected, highlight, onSelect }, cellSize)}
          </div>
        </div>
        <div
          className="pf-side"
          style={{
            width: iconSize + 4 + 'px',
            height: puzzle.gridSize * cellSize + 'px',
            paddingTop: puzzle.endCell.row * cellSize + (cellSize - iconSize) / 2 + 'px',
            color: '#000'
          }}
        >
          <EndIcon size={iconSize} />
        </div>
      </div>
    </div>
  );
}

function TimerView({ seconds, totalTime }) {
  const total = totalTime || 240;
  const frac = Math.max(0, seconds) / total;
  const C = 2 * Math.PI * 22;
  const low = seconds <= 60;
  return (
    <div className="pf-timer" title={fmtTime(seconds)}>
      <svg className="ring" width="56" height="56" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="22" fill="none" stroke="#e5e7eb" strokeWidth="4" />
        <circle
          cx="28"
          cy="28"
          r="22"
          fill="none"
          stroke={low ? '#dc2626' : '#333333'}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - frac)}
          transform="rotate(-90 28 28)"
        />
      </svg>
      <div className={'pf-timetext' + (low ? ' low' : '')}>{fmtTime(seconds)}</div>
    </div>
  );
}

export default function PathFinder({ onComplete }) {
  const initialVariantId = (() => {
    const q = new URLSearchParams(window.location.search).get('variant');
    return PF_DATA.VARIANTS.some((v) => v.id === q) ? q : '3x3';
  })();
  const [variantId, setVariantId] = useState(initialVariantId);
  const [stage, setStage] = useState('instructions'); // instructions | practice | game | results
  const [slide, setSlide] = useState(0);
  const [gameIndex, setGameIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [totalMoves, setTotalMoves] = useState(0);
  const [modal, setModal] = useState(null); // { moves }
  const [solutionModal, setSolutionModal] = useState(null); // { blocks, path, puzzle }
  const [showTimeUp, setShowTimeUp] = useState(false);
  const [, setTick] = useState(0);

  const B = useRef(null);
  const timerHandle = useRef(null);

  const variant = PF_DATA.VARIANTS.find((v) => v.id === variantId) || PF_DATA.VARIANTS[0];

  const render = useCallback(() => setTick((t) => t + 1), []);

  const loadBoard = useCallback(
    (puzzle) => {
      B.current = newBoard(puzzle);
      render();
    },
    [render]
  );

  function stopTimer() {
    if (timerHandle.current) clearInterval(timerHandle.current);
    timerHandle.current = null;
  }

  // ---- timer ----------------------------------------------------------------
  useEffect(() => {
    if (stage !== 'practice' && stage !== 'game') return undefined;
    const id = setInterval(() => {
      const b = B.current;
      if (!b || b.done || b.animating || modal || solutionModal) return;
      b.seconds -= 1;
      if (b.seconds <= 0) {
        b.seconds = 0;
        b.done = true;
        clearInterval(id);
        onTimeUp();
      }
      render();
    }, 1000);
    timerHandle.current = id;
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, gameIndex, variantId, modal, solutionModal]);

  // ---- actions ----------------------------------------------------------------
  function selectCell(e) {
    const b = B.current;
    if (!b || b.animating || b.done) return;
    b.selected = e.currentTarget.getAttribute('data-b');
    render();
  }

  function withSelected(fn) {
    const b = B.current;
    if (!b || !b.selected || b.animating || b.done) return;
    const block = b.blocks.find((bl) => bl.id === b.selected);
    if (!block) return;
    fn(block);
    b.moves += 1;
    render();
  }

  const doRotate = () => withSelected((bl) => PF.rotateBlock(bl));
  const doFlip = () => withSelected((bl) => PF.flipBlock(bl));

  function shakeBoard() {
    const b = B.current;
    b.shake = true;
    render();
    setTimeout(() => {
      b.shake = false;
      render();
    }, 450);
  }

  function submit() {
    const b = B.current;
    if (!b || b.animating || b.done) return;
    const res = PF.validate(b.puzzle, b.blocks);
    if (!res.valid) {
      shakeBoard();
      return;
    }
    b.animating = true;
    b.selected = null;
    render();
    animatePath(res.path, () => {
      b.done = true;
      stopTimer();
      setModal({ moves: b.moves });
    });
  }

  function animatePath(path, cb) {
    const b = B.current;
    let i = 0;
    function step() {
      if (i < path.length) {
        b.highlight.push(path[i]);
        i += 1;
        render();
        setTimeout(step, 280);
      } else {
        setTimeout(cb, 400);
      }
    }
    step();
  }

  function showSolution() {
    const b = B.current;
    if (!b || b.animating || b.done) return;
    const sol = PF.solve(b.puzzle, b.blocks);
    if (!sol) {
      shakeBoard();
      return;
    }
    setSolutionModal({ blocks: sol.blocks, path: sol.path, puzzle: b.puzzle });
  }

  function onModalContinue(moves) {
    setModal(null);
    if (stage === 'practice') {
      setTotalScore(0);
      setTotalMoves(0);
      setStage('game');
      loadBoard(variant.data.games[0]);
    } else {
      advanceGame(moves);
    }
  }

  function advanceGame(moves) {
    const gained = Math.max(0, 100 - 2 * moves);
    const score = totalScore + gained;
    const mv = totalMoves + moves;
    setTotalScore(score);
    setTotalMoves(mv);
    if (onComplete) {
      onComplete({
        gameType: 'path_finder',
        variant: variantId,
        score: gained,
        moves,
        puzzlesCompleted: 1
      });
    }
    if (gameIndex + 1 >= variant.data.games.length) {
      stopTimer();
      setStage('results');
    } else {
      setGameIndex(gameIndex + 1);
      loadBoard(variant.data.games[gameIndex + 1]);
    }
  }

  function onTimeUp() {
    setShowTimeUp(true);
    setTimeout(() => {
      setShowTimeUp(false);
      if (stage === 'practice') {
        setTotalScore(0);
        setTotalMoves(0);
        setStage('game');
        loadBoard(variant.data.games[0]);
      } else {
        advanceGame(0);
      }
    }, 1500);
  }

  function switchVariant(id) {
    setVariantId(id);
    setSlide(0);
    setGameIndex(0);
    setTotalScore(0);
    setTotalMoves(0);
    setStage('instructions');
    B.current = null;
    setModal(null);
    setSolutionModal(null);
  }

  function startPractice() {
    setStage('practice');
    loadBoard(variant.data.practice);
  }

  function practiceAgain() {
    setStage('instructions');
    setSlide(0);
    setGameIndex(0);
    setTotalScore(0);
    setTotalMoves(0);
    B.current = null;
  }

  // ---- render helpers ----------------------------------------------------------
  const nb = variant.data.practice.blocksCount;
  const cellSize = CELL_SIZE_BY_BLOCKS[nb] || 28;
  const iconSize = Math.max(28, Math.min(40, cellSize - 2));
  const b = B.current;

  function ControlsView({ board }) {
    const isPractice = stage === 'practice';
    const sections = isPractice ? 1 : variant.data.games.length;
    return (
      <div>
        <div className="pf-controls">
          <TimerView seconds={board.seconds} totalTime={variant.data.practice.timeLimit} />
          <button className="pf-ctl" title="Rotate" disabled={!board.selected} onClick={doRotate}>
            <UiIcon name="rotate" size={18} />
          </button>
          <button className="pf-ctl" title="Change route direction" disabled={!board.selected} onClick={doFlip}>
            <UiIcon name="flip" size={18} />
          </button>
          <button className="pf-ctl" title="Submit" onClick={submit}>
            <UiIcon name="check" size={18} />
          </button>
          <button className="pf-ctl pf-solution" title="Show solution" onClick={showSolution}>
            <UiIcon name="bulb" size={18} />
          </button>
        </div>
        <div className="pf-moves">Moves: {board.moves}</div>
        {!isPractice && (
          <div className="pf-section">
            Section {gameIndex + 1} of {sections}
            {sections > 1 && (
              <span className="pf-sectiondots">
                {' '}({variant.data.games.map((_, i) => (i <= gameIndex ? '\u25CF' : '\u25CB')).join(' ')})
              </span>
            )}
          </div>
        )}
      </div>
    );
  }

  // ---- stages -------------------------------------------------------------------
  function InstructionsStage() {
    const isLast = slide === INSTR_SLIDES.length - 1;
    return (
      <div className="pf-instr-wrap">
        <div className="pf-instr-card">
          {slide > 0 && (
            <button className="pf-instr-nav prev" onClick={() => setSlide(slide - 1)} aria-label="Previous">
              <UiIcon name="chevL" size={22} />
            </button>
          )}
          {!isLast && (
            <button className="pf-instr-nav next" onClick={() => setSlide(slide + 1)} aria-label="Next">
              <UiIcon name="chevR" size={22} />
            </button>
          )}
          <div className="pf-instr-text">{INSTR_SLIDES[slide]}</div>
          <div className="pf-dots">
            {INSTR_SLIDES.map((_, i) => (
              <span key={i} className={'pf-dot' + (i === slide ? ' on' : '')} />
            ))}
          </div>
          <button className="pf-dark-btn" onClick={isLast ? startPractice : () => setSlide(slide + 1)}>
            {isLast ? 'Start Practice' : 'Next'}
          </button>
        </div>
      </div>
    );
  }

  function ResultsStage() {
    const puzzles = variant.data.games.length;
    const efficiency = Math.min(100, Math.round((totalScore / (puzzles * 100)) * 100));
    return (
      <div className="pf-results">
        <h2>Practice complete</h2>
        <p>
          You solved {puzzles} grid{puzzles > 1 ? 's' : ''} from the {variant.label} set.
        </p>
        <div className="pf-stats">
          <div className="pf-stat">
            <p className="pf-stat-label">Total score</p>
            <p className="pf-stat-value">{totalScore}</p>
          </div>
          <div className="pf-stat">
            <p className="pf-stat-label">Total moves</p>
            <p className="pf-stat-value">{totalMoves}</p>
          </div>
          <div className="pf-stat">
            <p className="pf-stat-label">Efficiency</p>
            <p className="pf-stat-value">{efficiency}%</p>
          </div>
          <div className="pf-stat">
            <p className="pf-stat-label">Time remaining</p>
            <p className="pf-stat-value">{b ? fmtTime(b.seconds) : '0:00'}</p>
          </div>
        </div>
        <button className="pf-dark-btn" onClick={practiceAgain} style={{ marginTop: '32px' }}>
          Practice Again
        </button>
      </div>
    );
  }

  return (
    <div className="pf-root">
      <div id="pfTabs" role="tablist" aria-label="Path Finder grids">
        {PF_DATA.VARIANTS.map((v) => (
          <button
            key={v.id}
            role="tab"
            aria-selected={v.id === variantId}
            className={'pf-tab' + (v.id === variantId ? ' on' : '')}
            onClick={() => switchVariant(v.id)}
          >
            {v.label}
          </button>
        ))}
      </div>

      <div id="pfCard" style={{ position: 'relative' }}>
        <div id="pfStage">
          {stage === 'instructions' && <InstructionsStage />}
          {(stage === 'practice' || stage === 'game') && b && (
            <div className="pf-game-wrap">
              <BoardView
                puzzle={b.puzzle}
                blocks={b.blocks}
                selected={b.selected}
                highlight={b.highlight}
                onSelect={selectCell}
                shaking={b.shake}
                cellSize={cellSize}
                iconSize={iconSize}
              />
              <ControlsView board={b} />
            </div>
          )}
          {stage === 'results' && <ResultsStage />}
        </div>
        {showTimeUp && (
          <div className="pf-timeup-overlay">
            <div className="pf-timeup-banner">⏰ Time&apos;s Up!</div>
          </div>
        )}
      </div>

      {modal && (
        <div className="pf-modal">
          <div className="pf-modal-card">
            <div className="pf-modal-ic">
              <UiIcon name="check" size={28} />
            </div>
            <h3 style={{ margin: '0 0 4px', fontSize: '18px', color: '#171717' }}>Path complete!</h3>
            <p style={{ margin: 0, color: '#737373', fontSize: '14px' }}>
              You solved this board in {modal.moves} moves.
            </p>
            <button className="pf-continue" onClick={() => onModalContinue(modal.moves)}>
              {stage === 'practice' ? 'Start Section 2' : 'Continue'}
            </button>
          </div>
        </div>
      )}

      {solutionModal && (
        <div className="pf-modal">
          <div className="pf-modal-card pf-sol-card">
            <h3 style={{ margin: '0 0 4px', fontSize: '18px', color: '#171717' }}>One valid solution</h3>
            <p style={{ margin: '0 0 12px', color: '#737373', fontSize: '14px' }}>
              Path length: {solutionModal.path.length} cells
            </p>
            <div className="pf-sol-board">
              <BoardView
                puzzle={solutionModal.puzzle}
                blocks={solutionModal.blocks}
                highlight={solutionModal.path}
                cellSize={cellSize}
                iconSize={iconSize}
              />
            </div>
            <button className="pf-continue" onClick={() => setSolutionModal(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
