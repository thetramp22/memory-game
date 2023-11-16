import { useState } from 'react';
import '../styles/Card.css';
import PropTypes from 'prop-types';

const Card = ({ name, image, randomizeCards }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      //endgame
    } else {
      //addscore
      setIsClicked(true);
    }
    randomizeCards();
  };

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
};

export default Card;
