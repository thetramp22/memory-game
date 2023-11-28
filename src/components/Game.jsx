import '../styles/Game.css';
import Card from './Card';
import cardInfo from '../assets/data/cardInfo';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Game = ({ endGame, addScore, resetGame, difficulty }) => {
  let cards = [];
  if (difficulty === 'easy') {
    cards = cardInfo.slice(0, 5);
  } else if (difficulty === 'medium') {
    cards = cardInfo.slice(0, 10);
  } else if (difficulty === 'hard') {
    cards = cardInfo.slice(0, 15);
  }

  const [positions, setPositions] = useState(
    cards.map((value, index) => index)
  );

  const shuffleArray = (array) => {
    let shuffledArray = array.slice(0);
    for (let i = 0; i < shuffledArray.length; i++) {
      const j = Math.floor(Math.random() * shuffledArray.length);
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const randomizeCards = () => {
    setPositions(shuffleArray(positions));
  };

  return (
    <>
      <div className="main">
        <div className="card-grid">
          {positions.map((position) => {
            return (
              <Card
                key={cardInfo[position].name}
                name={cardInfo[position].name}
                image={cardInfo[position].image}
                randomizeCards={randomizeCards}
                endGame={endGame}
                addScore={addScore}
                resetGames={resetGame}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

Game.propTypes = {
  endGame: PropTypes.func,
  addScore: PropTypes.func,
  resetGame: PropTypes.bool,
  difficulty: PropTypes.string,
};

export default Game;
