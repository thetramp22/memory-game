import '../styles/Game.css';
import Card from './Card';

const Game = () => {
  return (
    <>
      <div className="main">
        <div className="card-grid">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Game;
