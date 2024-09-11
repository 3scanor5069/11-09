import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import Cart from '../../components/Cart/Cart';
import game1 from '../../assets/images/game1.jpg';
import game2 from '../../assets/images/game2.jpg';
import game3 from '../../assets/images/game3.jpg';
import './Store.css';

const Store = () => {
    const [cartItems, setCartItems] = useState([]); // Carrito
    const navigate = useNavigate();

    const handleSearch = (query) => {
        console.log('Buscando:', query);
    };

    const games = [
        {
            id: "fall-guys",
            title: "Fall Guys",
            image: game1,
            price: 0,
            description: "Descripción del juego 1."
        },
        {
            id: "otro-juego",
            title: "Otro Juego",
            image: game2,
            price: 19.99,
            description: "Descripción del juego 2."
        },
        {
            id: "nuevo-juego",
            title: "Nuevo Juego Increíble",
            image: game3,
            price: 29.99,
            description: "Descripción del juego 3."
        },
    ];

    const addToCart = (game) => {
        setCartItems([...cartItems, game]); // Agregar el juego al carrito
    };

    const goToGameDetails = (gameId) => {
        navigate(`/game/${gameId}`);
    };

    return (
        <div>
            {/* Pasar el número de items del carrito al Header */}
            <Header cartItemCount={cartItems.length} /> 

            <div className="store-container">
                <div className="store-header">
                    <h2>Explorar Juegos</h2>
                    <SearchBar onSearch={handleSearch} />
                </div>

                <div className="games-grid">
                    {games.map((game) => (
                        <div key={game.id} className="game-card" onClick={() => goToGameDetails(game.id)}>
                            <img src={game.image} alt={game.title} />
                            <div className="game-info">
                                <h3>{game.title}</h3>
                                <p>${game.price.toFixed(2)}</p>
                                <button onClick={() => addToCart(game)} className="add-to-cart-button">Añadir al Carrito</button>
                            </div>
                        </div>
                    ))}
                </div>

                <Cart cartItems={cartItems} onRemoveItem={() => {}} />
            </div>

            <Footer />
        </div>
    );
};

export default Store;
