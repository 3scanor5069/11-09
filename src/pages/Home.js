import React from 'react';
import '../Styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="hero-section">
                <div className="hero-content">
                    <h2>Welcome to GameZone</h2>
                    <p>Your ultimate gaming platform</p>
                    <div className="hero-buttons">
                        <a href="/register" className="hero-button">Get Started</a>
                        <a href="/login" className="hero-button">Sign In</a>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Home;
