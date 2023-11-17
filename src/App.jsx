import { useState } from 'react';
import Game from './components/Game';
import Header from './components/Header';
import './styles/App.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [resetGame, setResetGame] = useState(true);

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

  return (
    <>
      <div className="app-container">
        <Header currentScore={currentScore} highScore={highScore} />
        <Game endGame={endGame} addScore={addScore} resetGame={resetGame} />
      </div>
    </>
  );
}

export default App;
