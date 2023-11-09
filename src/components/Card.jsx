import React from 'react';
import cardImg from '../assets/testImg.png';

const Card = () => {
  return (
    <div className="card">
      <img src={cardImg} alt="Image name" />
      <h2>Test Card</h2>
    </div>
  );
};

export default Card;
