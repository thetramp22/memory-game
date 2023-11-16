import { useEffect, useState } from 'react';
import '../styles/Card.css';
import PropTypes from 'prop-types';

const Card = ({
  name,
  image,
  randomizeCards,
  endGame,
  addScore,
  resetGame,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      endGame();
    } else {
      addScore();
      setIsClicked(true);
    }
    randomizeCards();
  };

  useEffect(() => {
    if (resetGame) {
      setIsClicked(false);
    }
  }, [resetGame]);

  return (
    <div className="card" onClick={handleClick}>
      <img className="card-img" src={image} alt={name} />
      <h2 className="card-title">{name}</h2>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  randomizeCards: PropTypes.func,
  endGame: PropTypes.func,
  addScore: PropTypes.func,
  resetGame: PropTypes.bool,
};

export default Card;
