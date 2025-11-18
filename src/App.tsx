import { useGame } from './hooks/useGame';
import { GameModeSelector } from './components/GameModeSelector';
import { GameScreen } from './components/GameScreen';
import { ResultScreen } from './components/ResultScreen';

function App() {
  const { gameState, startGame, submitGuess, resetGame, playAgain } = useGame();

  // Show mode selector if no game is active
  if (!gameState.currentItem && !gameState.isGameOver) {
    return <GameModeSelector onSelectMode={startGame} />;
  }

  // Show results screen if game is over
  if (gameState.isGameOver) {
    const maxScore = gameState.totalRounds * 100;
    return (
      <ResultScreen
        placedItems={gameState.placedItems}
        totalScore={gameState.score}
        maxScore={maxScore}
        onPlayAgain={playAgain}
        onBackToMenu={resetGame}
      />
    );
  }

  // Show game screen
  return <GameScreen gameState={gameState} onSubmitGuess={submitGuess} />;
}

export default App;
