import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedGames.css";
import game1 from '../../assets/images/game1.jpg';
import game2 from '../../assets/images/game2.jpg';
import game3 from '../../assets/images/game3.jpg';
import game4 from '../../assets/images/game4.jpg';
import game5 from '../../assets/images/game5.jpg';

const FeaturedGames = () => {
  const settings = {
    dots: false, // No mostrar puntos de navegación
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostrar una sola imagen a la vez
    slidesToScroll: 1,
    arrows: true, // Mostrar flechas para navegación
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Hacer la transición con un efecto de desvanecimiento
    adaptiveHeight: true,
  };

  const games = [
    { title: "Game 1", image: game1 },
    { title: "Game 2", image: game2 },
    { title: "Game 3", image: game3 },
    { title: "Game 4", image: game4 },
    { title: "Game 5", image: game5 },
  ];

  return (
    <div className="featured-games-carousel">
      <Slider {...settings}>
        {games.map((game, index) => (
          <div key={index} className="carousel-slide">
            <img src={game.image} alt={game.title} className="carousel-image" />
            <div className="carousel-caption">
              <h3>{game.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedGames;
