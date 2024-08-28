import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import NewsItem from '../../components/NewsItem/NewsItem';
import './News.css';

const News = () => {
    const news = [
        { id: 1, image: 'https://via.placeholder.com/300x200', title: 'Nueva Actualización del Juego 1', description: 'Detalles sobre la última actualización que trae nuevas características y mejoras.' },
        { id: 2, image: 'https://via.placeholder.com/300x200', title: 'Evento Especial en Juego 2', description: 'Únete al evento especial de este fin de semana y gana recompensas exclusivas.' },
        { id: 3, image: 'https://via.placeholder.com/300x200', title: 'Lanzamiento del Nuevo Juego 3', description: 'Descubre el nuevo juego que está revolucionando el mercado.' },
    ];

    return (
        <>
            <Header />
            <Hero title="Últimas Noticias en Juegos y Entretenimiento" description="Mantente informado con las últimas novedades de la industria." />
            <section className="news">
                {news.map(item => (
                    <NewsItem key={item.id} image={item.image} title={item.title} description={item.description} />
                ))}
            </section>
        </>
    );
}

export default News;
