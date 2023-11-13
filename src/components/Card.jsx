import cardImg from '../assets/testImg.png';
import '../styles/Card.css';

const Card = ({ name, image }) => {
  return (
    <div className="card">
      <img className="card-img" src={image} alt={name} />
      <h2 className="card-title">{name}</h2>
    </div>
  );
};

export default Card;
