import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const GameDetails = ({ cartItems, setCartItems }) => {
    const { id } = useParams(); // Obtener el ID del juego desde la URL
    const [game, setGame] = useState(null); // Estado para almacenar los detalles del juego

    useEffect(() => {
        // Función para obtener el juego desde db.json
        const fetchGameDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3001/games/${id}`);
                const data = await response.json();
                setGame(data);
            } catch (error) {
                console.error("Error fetching game details:", error);
            }
        };

        fetchGameDetails();
    }, [id]);

    if (!game) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="game-details-page">
            <Header cartItemCount={cartItems.length} />

            {/* Sección del banner */}
            <div className="game-banner">
                <img src={game.banner} alt={game.title} className="game-banner-image" />
                <div className="game-banner-overlay">
                    <h1>{game.title}</h1>
                    <p>{game.description}</p>
                    <button className="buy-now-button">Comprar ahora</button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default GameDetails;
