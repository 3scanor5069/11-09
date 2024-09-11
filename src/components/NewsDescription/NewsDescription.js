import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './NewsDescription.css';

const NewsDescription = () => {
    const [news, setNews] = useState(null); // Estado para los datos
    const [loading, setLoading] = useState(true); // Indicador de carga
    const [error, setError] = useState(null); // Estado para manejar errores
    const { id } = useParams(); // Obtiene el ID de la noticia desde la URL

    useEffect(() => {
        fetch(`http://localhost:3001/games/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); // Intenta parsear el JSON
            })
            .then(data => {
                setNews(data); // Almacena los datos
                setLoading(false); // Indica que la carga ha terminado
            })
            .catch(error => {
                console.error('Error fetching news:', error);
                setError('Failed to fetch news data');
                setLoading(false); // Indica que la carga ha terminado aunque hubo un error
            });
    }, [id]);

    // Muestra el indicador de carga si los datos están cargando
    if (loading) {
        return (
            <div>
                <Header />
                <div className="news-description">
                    <p>Cargando...</p>
                </div>
                <Footer />
            </div>
        );
    }

    // Muestra un mensaje de error si algo falla
    if (error) {
        return (
            <div>
                <Header />
                <div className="news-description">
                    <p>Error: {error}</p>
                </div>
                <Footer />
            </div>
        );
    }

    // Asegúrate de que `news` existe antes de tratar de acceder a sus propiedades
    if (!news) {
        return (
            <div>
                <Header />
                <div className="news-description">
                    <p>No se encontraron datos para esta noticia.</p>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div className="news-description">
                <img 
                    src={news.banner} 
                    alt={news.title} 
                    className="news-description-img"
                />
                <h1>{news.title}</h1>
                <p>{news.description}</p>

                <section>
                    <h2>Características:</h2>
                    <ul>
                        {news.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default NewsDescription;
