import React from 'react';
import './GameItem.css';

const GameItem = ({ game, addToCart }) => {
  return (
    <div className="game-item">
      <div className="game-image" style={{ backgroundImage: `url(${game.image})` }}></div>
      <div className="game-details">
        <h3>{game.title}</h3>
        <p>{game.price} USD</p>
        <button onClick={() => addToCart(game)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default GameItem;
