// src/pages/PathFinderPage.jsx
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import GameHeader from '../components/cognitive/GameHeader';
import PathFinder from '../games/PathFinder/PathFinder';
import { saveSessionResult, updateDailyChallenge, cognitiveStorage } from '../utils/cognitiveStorage';
import { checkAchievements } from '../utils/achievements';
import SEO from '../components/SEO.jsx';
import { seoConfig } from '../config/seo.js';
import '../components/cognitive/cognitive.css';

export default function PathFinderPage() {
  const navigate = useNavigate();

  const handleGameComplete = useCallback(
    (result) => {
      try {
        saveSessionResult({
          gameType: 'path_finder',
          score: result.score || 0,
          accuracy: 100,
          correctCount: 1,
          totalQuestions: 1,
          avgTime: 0,
          moves: result.moves,
          variant: result.variant,
          isDaily: new URLSearchParams(window.location.search).get('mode') === 'daily'
        });

        updateDailyChallenge('path_finder');

        const unlocked = checkAchievements();
        if (unlocked && unlocked.length > 0) {
          cognitiveStorage.saveAchievements(unlocked);
        }
      } catch {
        // storage errors are non-fatal
      }
    },
    []
  );

  return (
    <div className="min-h-screen bg-slate-950">
      <SEO {...seoConfig.pathFinder} />
      <GameHeader
        title="Path Finder"
        subtitle="Rotate tiles and redirect arrows to build a path from start to goal."
        onBack={() => navigate('/cognitive')}
      />
      <PathFinder onComplete={handleGameComplete} />
    </div>
  );
}
