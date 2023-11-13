import '../styles/Game.css';
import Card from './Card';
import cardInfo from '../assets/data/cardInfo';

const Game = () => {
  return (
    <>
      <div className="main">
        <div className="card-grid">
          {cardInfo.map((card) => {
            return <Card key={card.name} name={card.name} image={card.image} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Game;
