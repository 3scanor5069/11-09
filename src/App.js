import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RoleProvider } from "./context/RoleContext";
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturedGames from './components/FeaturedGames/FeaturedGames';
import Store from './pages/Store/Store';
import News from './pages/News/News';
import Cart from './components/Cart/Cart';
import CartPage from './pages/CartPage/CartPage';
import NewsItem from './components/NewsItem/NewsItem';
import NewsDescription from './components/NewsDescription/NewsDescription';
import GameItem from './components/GameItem/GameItem';
import GameDetails from './components/GameDescription/GameDetails';
import ProductItem from './components/ProductItem/ProductIem';
import GameList from './components/GameList/GameList';
import Hero from './components/Hero/Hero';
import Checkout from './components/Checkout/Checkout';


function App() {
    return (
        <RoleProvider>
            <Router>
            <div className="app-container">
            <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Header />
                      <Home />
                       <Footer className="footer"/>
                      </>
                    }
                  />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/HeroSection" element={<HeroSection />} />
                <Route path="/FeaturedGames" element={<FeaturedGames />} />
                <Route path="/register" element={<Register />} />
                <Route path="/News" element={<News />} />
                <Route path="/Store" element={<Store />} />
                <Route path="/CartPage" element={<CartPage />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/GameItem" element={<GameItem />} />
                <Route path="/game/:id" element={<GameDetails />} />
                <Route path="/ProductItem" element={<ProductItem />} />
                <Route path="/NewsItem" element={<NewsItem />} />
                <Route path="/NewsDescription" element={<NewsDescription />} />
                <Route path="/GameList" element={<GameList />} />
                <Route path="/Hero" element={<Hero />} />
                <Route path="/Checkout" element={< Checkout/>} />

                
             </Routes>
        </div>
        </Router>
        </RoleProvider>
    );
}

export default App;
