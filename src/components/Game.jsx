import '../styles/Game.css';
import Card from './Card';
import cardInfo from '../assets/data/cardInfo';
import { useState } from 'react';

const Game = () => {
  const [positions, setPositions] = useState(
    cardInfo.map((value, index) => index)
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
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Game;
