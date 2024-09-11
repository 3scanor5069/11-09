import React from 'react';
import { Link } from 'react-router-dom';
import './NewsItem.css';

const NewsItem = ({ image, title, description, id }) => {
    return (
        <div className="news-item">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={`/NewsDescription/${id}`}>
                <button className="btn btn-primary">Leer Más</button>
            </Link>
        </div>
    );
}

export default NewsItem;
