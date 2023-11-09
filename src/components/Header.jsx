import React from 'react';
import triforce from '../assets/Triforce.svg';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="page-heading">
      <img className="triforce-icon" src={triforce} alt="Triforce icon" />
      <h1 className="page-title">Memory Game</h1>
      <img className="triforce-icon" src={triforce} alt="Triforce icon" />
    </div>
  );
};

export default Header;
