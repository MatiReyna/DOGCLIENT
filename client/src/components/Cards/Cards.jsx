import React from 'react';
import { HoverEffect, Card, CardTitle, CardDescription } from './HoverEffect';

const Cards = ({ dogs }) => {

    const items = dogs.map(dog => ({
        id: dog.id,
        title: dog.name,
        description: dog.temperaments ? dog.temperaments.join(', ') : 'N/A',
        image: dog.image
    }));

    return (
        <HoverEffect items={items} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                items.length > 0 ? (
                    items.map(item => (
                        <Card key={item.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </Card>
                    ))
                ) : (<p>No dogs available.</p>)
            }
        </HoverEffect>
    )
};

export default Cards;