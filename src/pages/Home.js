import React from 'react';
import '../Styles/Home.css';
import FeaturedGames from '../components/FeaturedGames/FeaturedGames';

const Home = () => {
  return (
    <div className="home-container">
      <section className="featured-games-section">
        <FeaturedGames />
      </section>
    </div>
  );
};

export default Home;
