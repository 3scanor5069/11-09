import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import ProductItem from '../../components/ProductItem/ProductIem';
import './Store.css';

const Store = () => {
    const products = [
        { id: 1, image: 'https://via.placeholder.com/300x200', title: 'Juego 1', price: '$29.99' },
        { id: 2, image: 'https://via.placeholder.com/300x200', title: 'Juego 2', price: '$49.99' },
        { id: 3, image: 'https://via.placeholder.com/300x200', title: 'Juego 3', price: '$19.99' },
        { id: 4, image: 'https://via.placeholder.com/300x200', title: 'Juego 4', price: '$39.99' },
    ];

    return (
        <>
            <Header />
            <Hero title="Descubre los últimos lanzamientos" description="Compra los juegos más recientes y populares en nuestra tienda." />
            <section className="products">
                {products.map(product => (
                    <ProductItem key={product.id} image={product.image} title={product.title} price={product.price} />
                ))}
            </section>
        </>
    );
}

export default Store;
