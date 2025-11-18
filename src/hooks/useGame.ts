import { useState, useCallback } from 'react';
import type { GameState, GameMode, CultureItem, PlacedItem } from '../types';
import { getRandomItems, getDailyItems, getItemsByThematicSet } from '../data/polishCulture';
import { calculateYearPoints } from '../utils/scoring';

const INITIAL_STATE: GameState = {
  mode: 'year',
  currentItem: null,
  score: 0,
  round: 0,
  totalRounds: 10,
  items: [],
  placedItems: [],
  isGameOver: false,
  showResult: false,
};

export const useGame = () => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);

  const startGame = useCallback((mode: GameMode, thematicSetId?: string) => {
    let items: CultureItem[];
    let totalRounds = 10;

    switch (mode) {
      case 'daily':
        items = getDailyItems();
        totalRounds = 5;
        break;
      case 'thematic':
        if (thematicSetId) {
          items = getItemsByThematicSet(thematicSetId);
          totalRounds = Math.min(items.length, 10);
        } else {
          items = getRandomItems(10);
        }
        break;
      case 'interval':
      case 'year':
      default:
        items = getRandomItems(10);
        break;
    }

    setGameState({
      mode,
      currentItem: items[0],
      score: 0,
      round: 1,
      totalRounds,
      items,
      placedItems: [],
      isGameOver: false,
      showResult: false,
    });
  }, []);

  const submitGuess = useCallback((guessedYear: number) => {
    if (!gameState.currentItem || gameState.showResult) return;

    const actualYear = gameState.currentItem.year;
    const yearDifference = Math.abs(actualYear - guessedYear);
    const points = calculateYearPoints(actualYear, guessedYear);

    const placedItem: PlacedItem = {
      item: gameState.currentItem,
      guessedYear,
      points,
      yearDifference,
    };

    const newPlacedItems = [...gameState.placedItems, placedItem];
    const newScore = gameState.score + points;

    setGameState(prev => ({
      ...prev,
      score: newScore,
      placedItems: newPlacedItems,
      showResult: true,
    }));

    // Auto-advance after showing result
    setTimeout(() => {
      if (gameState.round >= gameState.totalRounds) {
        setGameState(prev => ({
          ...prev,
          isGameOver: true,
          showResult: false,
        }));
      } else {
        const nextRound = gameState.round + 1;
        setGameState(prev => ({
          ...prev,
          currentItem: prev.items[nextRound - 1],
          round: nextRound,
          showResult: false,
        }));
      }
    }, 2500);
  }, [gameState]);

  const resetGame = useCallback(() => {
    setGameState(INITIAL_STATE);
  }, []);

  const playAgain = useCallback(() => {
    if (gameState.mode) {
      startGame(gameState.mode);
    } else {
      resetGame();
    }
  }, [gameState.mode, startGame, resetGame]);

  return {
    gameState,
    startGame,
    submitGuess,
    resetGame,
    playAgain,
  };
};
