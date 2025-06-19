import React from 'react';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* ...existing code... */}
            <img
                src="path/to/livery-image.jpg"
                alt="Livery"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/shop/livery')}
            />
            {/* ...existing code... */}
        </div>
    );
};

export default Shop;