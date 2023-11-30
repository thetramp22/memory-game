import { useEffect, useState } from 'react';
import Game from './components/Game';
import Header from './components/Header';
import './styles/App.css';
import StartModal from './components/StartModal';
import EndModal from './components/EndModal';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [resetGame, setResetGame] = useState(true);
  const [gameState, setGameState] = useState('start');
  const [difficulty, setDifficulty] = useState('easy');
  const [maxScore, setMaxScore] = useState(5);
  const [didWin, setDidWin] = useState(false);

  const endGame = () => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
    setCurrentScore(0);
    setResetGame(true);
    setGameState('end');
  };

  const addScore = () => {
    setCurrentScore(currentScore + 1);
    setResetGame(false);
    if (currentScore === maxScore) {
      setDidWin(true);
      endGame();
    }
  };

  useEffect(() => {
    if (currentScore === maxScore) {
      setDidWin(true);
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setCurrentScore(0);
      setResetGame(true);
      setGameState('end');
    }
  }, [currentScore, maxScore, highScore]);

  const handleClickStart = () => {
    setGameState('game');
  };

  const handleRestart = () => {
    setGameState('start');
    setDidWin(false);
  };

  const handleRetry = () => {
    setGameState('game');
    setDidWin(false);
  };

  const handleClickDifficulty = (e) => {
    if (e.target.id === 'easy') {
      setDifficulty('easy');
      setMaxScore(5);
    } else if (e.target.id === 'medium') {
      setDifficulty('medium');
      setMaxScore(10);
    } else if (e.target.id === 'hard') {
      setDifficulty('hard');
      setMaxScore(15);
    }
  };

  return (
    <>
      <div className="app-container">
        <Header currentScore={currentScore} highScore={highScore} />
        {gameState === 'start' ? (
          <StartModal
            handleClickStart={handleClickStart}
            handleClickDifficulty={handleClickDifficulty}
            difficulty={difficulty}
          />
        ) : gameState === 'game' ? (
          <Game
            endGame={endGame}
            addScore={addScore}
            resetGame={resetGame}
            difficulty={difficulty}
          />
        ) : gameState === 'end' ? (
          <EndModal
            didWin={didWin}
            handleRestart={handleRestart}
            handleRetry={handleRetry}
          />
        ) : null}
      </div>
    </>
  );
}

export default App;
