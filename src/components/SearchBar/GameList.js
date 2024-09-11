import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const GameList = () => {
    const [filteredGames, setFilteredGames] = useState([]);

    useEffect(() => {
        // Cargar los juegos inicialmente
        const fetchGames = async () => {
            try {
                const response = await fetch('http://localhost:3001/games');
                const data = await response.json();
                setFilteredGames(data); // Inicialmente mostrar todos los juegos
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        };
        fetchGames();
    }, []);

    const handleSearch = (searchResults) => {
        setFilteredGames(searchResults);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <div className="game-list">
                {filteredGames.length > 0 ? (
                    filteredGames.map((game) => (
                        <div key={game.id} className="game-item">
                            <img src={game.banner} alt={game.title} />
                            <h2>{game.title}</h2>
                            <p>{game.description}</p>
                            <p><strong>Categoría:</strong> {game.category}</p>
                            <p><strong>Precio:</strong> {game.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron juegos</p>
                )}
            </div>
        </div>
    );
};

export default GameList;
