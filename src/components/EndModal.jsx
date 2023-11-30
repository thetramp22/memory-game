import PropTypes from 'prop-types';
import triforce from '../assets/Triforce.svg';

const EndModal = ({ didWin, handleRetry, handleRestart }) => {
  const gameOver = (
    <>
      <div className="page-title">
        <img className="triforce-icon" src={triforce} alt="Triforce icon" />
        <h1>Game Over</h1>
        <img className="triforce-icon" src={triforce} alt="Triforce icon" />
      </div>
      <button className="btn text-modal glow-blue" onClick={handleRetry}>
        Try Again?
      </button>
    </>
  );

  const youWin = (
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
        {didWin ? youWin : gameOver}
        <button className="btn text-modal glow-blue" onClick={handleRestart}>
          Start Over
        </button>
      </div>
    </div>
  );
};

EndModal.propTypes = {
  didWin: PropTypes.bool,
  handleRetry: PropTypes.func,
  handleRestart: PropTypes.func,
};

export default EndModal;
