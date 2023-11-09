import React from 'react';
import '../styles/Game.css';
import Card from './Card';

const Game = () => {
  return (
    <>
      <div className="main">
        <div className="card-grid">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Game;
