import React from 'react';
import './NewsItem.css';

const NewsItem = ({ image, title, description }) => {
    return (
        <div className="news-item">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="btn btn-primary">Leer Más</button>
        </div>
    );
}

export default NewsItem;
