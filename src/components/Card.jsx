import '../styles/Card.css';
import PropTypes from 'prop-types';

const Card = ({ name, image }) => {
  return (
    <div className="card">
      <img className="card-img" src={image} alt={name} />
      <h2 className="card-title">{name}</h2>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
