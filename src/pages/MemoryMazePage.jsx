// src/pages/MemoryMazePage.jsx
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import GameHeader from '../components/cognitive/GameHeader';
import GameInstructions from '../components/cognitive/GameInstructions';
import MemoryMaze from '../games/MemoryMaze/MemoryMaze';
import SEO from '../components/SEO.jsx';
import { seoConfig } from '../config/seo.js';
import '../components/cognitive/cognitive.css';

export default function MemoryMazePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialVariant = searchParams.get('variant') || 'find-the-key';

  const [activeVariant, setActiveVariant] = useState(initialVariant);
  const [score, setScore] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleVariantChange = (newVariant) => {
    setActiveVariant(newVariant);
    setSearchParams({ variant: newVariant });
  };

  const handleComplete = (result) => {
    setScore((prev) => prev + result.score);
    saveSessionResult({
      gameType: 'memory_maze',
      variant: result.variant,
      score: result.score,
      timeTaken: result.timeTaken,
      attempts: result.attempts
    });
  };

  return (
    <div style={{ maxWidth: '920px', margin: '1.5rem auto', padding: '0 1rem 3.5rem 1rem' }}>
      <SEO {...seoConfig.memoryMaze} />
      <GameHeader
        title="Memory Assessment Game – Cognitive Practice"
        subtitle="Accenture-Style Cognitive Round • Memory Maze Game"
        score={score}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
        backUrl="/cognitive"
      />

      <GameInstructions
        gameType="memory_maze"
        isOpen={showInstructions}
        onStart={() => setShowInstructions(false)}
      />

      {/* Main Memory Maze Component */}
      <MemoryMaze
        variantKey={activeVariant}
        onVariantChange={handleVariantChange}
        onComplete={handleComplete}
      />
    </div>
  );
}
