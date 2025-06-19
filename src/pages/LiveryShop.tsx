import React from 'react';

const liveryItems = [
    {
        id: 1,
        name: 'Racing Stripe',
        description: 'Ein klassischer Rennstreifen für sportlichen Look.',
        price: 100,
        image: '/images/livery1.png'
    },
    {
        id: 2,
        name: 'Flames',
        description: 'Flammen-Design für einen feurigen Auftritt.',
        price: 150,
        image: '/images/livery2.png'
    },
    // ...weitere Artikel...
];

const LiveryShop = () => (
    <div>
        <h1>Livery Shop</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            {liveryItems.map(item => (
                <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, width: 220 }}>
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: 120, objectFit: 'cover' }} />
                    <h2 style={{ fontSize: 18 }}>{item.name}</h2>
                    <p style={{ fontSize: 14 }}>{item.description}</p>
                    <p style={{ fontWeight: 'bold' }}>{item.price} €</p>
                    <button>Kaufen</button>
                </div>
            ))}
        </div>
    </div>
);

export default LiveryShop;
