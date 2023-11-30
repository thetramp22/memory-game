import PropTypes from 'prop-types';
import triforce from '../assets/Triforce.svg';
import '../styles/StartModal.css';

const StartModal = ({
  handleClickStart,
  handleClickDifficulty,
  difficulty,
}) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="page-title">
          <img className="triforce-icon" src={triforce} alt="Triforce icon" />
          <h1>Memory Game</h1>
          <img className="triforce-icon" src={triforce} alt="Triforce icon" />
        </div>
        <h2 className="text-modal instruction-title glow-blue">How to Play</h2>
        <p className="text-modal instruction glow-blue">
          Try to click on each card once. The cards will shuffle with each
          click. The game ends if you click on any card a second time, or you
          have successfully clicked on every card.
        </p>
        <h2 className="text-modal instruction-title glow-blue">Difficulty</h2>
        <div className="choice-container">
          <button
            id="easy"
            className={
              'choice text-modal' +
              (difficulty == 'easy' ? ' active' : ' glow-blue')
            }
            onClick={handleClickDifficulty}
          >
            Easy
          </button>
          <button
            id="medium"
            className={
              'choice text-modal' +
              (difficulty == 'medium' ? ' active' : ' glow-blue')
            }
            onClick={handleClickDifficulty}
          >
            Medium
          </button>
          <button
            id="hard"
            className={
              'choice text-modal' +
              (difficulty == 'hard' ? ' active' : ' glow-blue')
            }
            onClick={handleClickDifficulty}
          >
            Hard
          </button>
        </div>
        <button className="btn text-modal glow-blue" onClick={handleClickStart}>
          Start Game
        </button>
      </div>
    </div>
  );
};

StartModal.propTypes = {
  handleClickStart: PropTypes.func,
  handleClickDifficulty: PropTypes.func,
  difficulty: PropTypes.string,
};

export default StartModal;
