import PropTypes from 'prop-types';
import triforce from '../assets/Triforce.svg';

const EndModal = ({ score, maxScore, handleRetry, handleRestart }) => {
  const gameOver = (
    <>
      <div className="page-title">
        <img className="triforce-icon" src={triforce} alt="Triforce icon" />
        <h1>Game Over</h1>
        <img className="triforce-icon" src={triforce} alt="Triforce icon" />
      </div>
      <button className="btn text-modal glow-blue">Try Again?</button>
    </>
  );

  const restart = (
    <>
      <div className="page-title">
        <img className="triforce-icon" src={triforce} alt="Triforce icon" />
        <h1>You Win!</h1>
        <img className="triforce-icon" src={triforce} alt="Triforce icon" />
      </div>
    </>
  );

  return (
    <div className="modal-container">
      <div className="modal">
        {score === maxScore ? restart : gameOver}
        <button className="btn text-modal glow-blue">Start Over</button>
      </div>
    </div>
  );
};

EndModal.propTypes = {
  score: PropTypes.number,
  maxScore: PropTypes.number,
  handleRetry: PropTypes.func,
  handleRestart: PropTypes.func,
};

export default EndModal;
