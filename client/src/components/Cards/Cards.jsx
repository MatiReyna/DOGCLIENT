import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ dogs }) => {
    return (
        <div>
             {dogs.length > 0 ? (
                dogs.map((dog, index) => (
                    <div key={index}>
                        <img src={dog.image} alt={dog.name} width='400px' height='300px' />
                        <div>
                            <h2>{dog.name}</h2>
                            <p>{dog.temperaments ? dog.temperaments.join(', ') : 'N/A'}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No dogs available.</p>
            )}
        </div>
    )
};

export default Cards;  // Comentario para no perder el commit