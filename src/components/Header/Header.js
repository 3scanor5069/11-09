import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Layout.css';

const Header = () => {
    return (
        <header className="header">
            <div className="navbar">
                <div className="navbar-logo">
                    <h1>GameZone</h1>
                </div>
                <div className="navbar-links">
                    <Link to="/Store" className="navbar-link">Tienda</Link>
                    <Link to="/News" className="navbar-link">Noticias</Link>
                    <Link to="/login" className="navbar-link">Login</Link>
                    <Link to="/register" className="navbar-link">Register</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
