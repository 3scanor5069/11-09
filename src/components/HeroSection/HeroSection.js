import React from 'react';
import './HeroSection.css';


const HeroSection = () => {
  return (
    
    <div className="hero-section" style={{ backgroundImage: `url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.digitaltrends.com%2Fvideojuego%2Flos-mejores-juegos-de-steam%2F&psig=AOvVaw1plcBeex20izqMy_T3Pj_b&ust=1724905548900000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODisZDslogDFQAAAAAdAAAAABAE')` }}>
      <div className="hero-content">
        <h1>Discover Your Next Favorite Game</h1>
        <p>Explore our collection and start playing now.</p>
        <button className="cta-button">Shop Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
