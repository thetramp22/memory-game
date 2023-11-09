import React from 'react';
import cardImg from '../assets/testImg.png';
import '../styles/Card.css';

const Card = () => {
  return (
    <div className="card">
      <img className="card-img" src={cardImg} alt="Image name" />
      <h2 className="card-title">Test Card</h2>
    </div>
  );
};

export default Card;
