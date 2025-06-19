import React from 'react';

// Beispiel-Daten
const liveryItems = [
    { id: 1, name: 'Racing Stripe', price: 100, image: '/images/livery1.png' },
    { id: 2, name: 'Flames', price: 150, image: '/images/livery2.png' },
    // ...weitere Artikel...
];

const LiveryShop = () => (
    <div>
        <h1>Livery Shop</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {liveryItems.map(item => (
                <div key={item.id} style={{ border: '1px solid #ccc', padding: 16 }}>
                    <img src={item.image} alt={item.name} width={120} />
                    <h2>{item.name}</h2>
                    <p>Preis: {item.price} €</p>
                    <button>Kaufen</button>
                </div>
            ))}
        </div>
    </div>
);

export default LiveryShop;
