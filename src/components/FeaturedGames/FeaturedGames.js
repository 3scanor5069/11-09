import React from 'react';
import './FeaturedGames.css';
import game1 from '../../assets/images/game1.jpg';
import game2 from '../../assets/images/game2.jpg';
import game3 from '../../assets/images/game3.jpg';

const FeaturedGames = () => {
  const games = [
    
    { title: "Game 1", image: game1 },
    { title: "Game 2", image: game2 },
    { title: "Game 3", image: game3 },
  ];

  return (
    <div className="featured-games">
      <h2>Featured Games</h2>
      <div className="game-grid">
        {games.map((game, index) => (
          <div key={index} className="game-card">
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGames;
