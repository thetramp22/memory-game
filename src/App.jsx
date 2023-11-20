import { useState } from 'react';
import Game from './components/Game';
import Header from './components/Header';
import './styles/App.css';
import StartModal from './components/StartModal';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [resetGame, setResetGame] = useState(true);
  const [gameState, setGameState] = useState('start');

  const endGame = () => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
    setCurrentScore(0);
    setResetGame(true);
  };

  const addScore = () => {
    setCurrentScore(currentScore + 1);
    setResetGame(false);
  };

  const handleClick = () => {
    setGameState('game');
  };

  return (
    <>
      <div className="app-container">
        <Header currentScore={currentScore} highScore={highScore} />
        {gameState === 'start' ? (
          <StartModal handleClick={handleClick} />
        ) : gameState === 'game' ? (
          <Game endGame={endGame} addScore={addScore} resetGame={resetGame} />
        ) : null}
      </div>
    </>
  );
}

export default App;
