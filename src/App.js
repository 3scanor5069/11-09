import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturedGames from './components/FeaturedGames/FeaturedGames';
import Store from './pages/Store/Store';
import News from './pages/News/News';

function App() {
    return (
        <Router>
            <Header />
            <HeroSection />
            <FeaturedGames />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/HeroSection" element={<HeroSection />} />
                <Route path="/FeaturedGames" element={<FeaturedGames />} />
                <Route path="/register" element={<Register />} />
                <Route path="/News" element={<News />} />
                <Route path="/Store" element={<Store />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
