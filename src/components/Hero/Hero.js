import React from 'react';
import './Hero.css';

const Hero = ({ title, description }) => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </section>
    );
}

export default Hero;
