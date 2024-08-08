import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ dog }) => {
    return (
        <div>
            <img src={dog.image} alt={dog.name} />
            <div>
                <h2>{dog.name}</h2>
                <p>{dog.temperaments ? dog.temperaments.join(', ') : 'N/A'}</p>
            </div>
        </div>
    )
};

export default Cards;  // Comentario para no perder el commit