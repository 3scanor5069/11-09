import React from 'react';
import GameItem from '../GameItem/GameItem';
import './GameList.css';

const GameList = ({ games, addToCart }) => {
  return (
    <div className="game-list">
      {games.map((game) => (
        <GameItem key={game.id} game={game} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default GameList;
