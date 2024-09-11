import React, { useState } from 'react';
import find from '../../assets/icons/find.png';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = async () => {
        if (searchTerm) {
            try {
                // Realizamos la petición a la API para obtener los juegos
                const response = await fetch('http://localhost:3001/games');
                const games = await response.json();

                // Filtramos los juegos en función del término de búsqueda
                const filteredGames = games.filter(game =>
                    game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    game.category.toLowerCase().includes(searchTerm.toLowerCase())
                );

                // Llamamos a la función onSearch pasando los juegos filtrados
                onSearch(filteredGames);
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        } else {
            // Si no hay término de búsqueda, devolvemos todos los juegos
            try {
                const response = await fetch('http://localhost:3001/games');
                const games = await response.json();
                onSearch(games);
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-bar">
            <button onClick={handleSearch} className="search-button">
                <img src={find} alt="find" className="find" />
            </button>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Buscar en la tienda"
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;
