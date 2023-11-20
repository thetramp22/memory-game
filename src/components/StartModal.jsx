import PropTypes from 'prop-types';
import triforce from '../assets/Triforce.svg';
import '../styles/StartModal.css';

const StartModal = ({ handleClick }) => {
  return (
    <div className="start-modal-container">
      <div className="start-modal">
        <div className="page-title">
          <img className="triforce-icon" src={triforce} alt="Triforce icon" />
          <h1>Memory Game</h1>
          <img className="triforce-icon" src={triforce} alt="Triforce icon" />
        </div>
        <h2 className="text-modal instruction-title glow-blue">How to Play</h2>
        <p className="text-modal instruction glow-blue">
          Try to click on each card once. The cards with shuffle with each
          click. The game ends if you click on any card a second time, or you
          have successfully clicked on every card.
        </p>
        <button className="btn text-modal glow-blue" onClick={handleClick}>
          Start Game
        </button>
      </div>
    </div>
  );
};

StartModal.propTypes = {
  handleClick: PropTypes.func,
};

export default StartModal;
