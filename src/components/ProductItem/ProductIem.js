import React from 'react';
import './ProductItem.css';

const ProductItem = ({ image, title, price }) => {
    return (
        <div className="product-item">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{price}</p>
            <button className="btn btn-primary">Comprar</button>
        </div>
    );
}

export default ProductItem;
