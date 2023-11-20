import '../styles/Header.css';
import PropTypes from 'prop-types';

const Header = ({ currentScore, highScore }) => {
  return (
    <div className="page-heading">
      <div className="scores glow-blue">
        <h2>
          Score: <span>{currentScore}</span>
        </h2>
        <h2>
          High Score: <span>{highScore}</span>
        </h2>
      </div>
    </div>
  );
};

Header.propTypes = {
  currentScore: PropTypes.number,
  highScore: PropTypes.number,
};

export default Header;
