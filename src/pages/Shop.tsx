import React from 'react';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* ...existing code... */}
            <img
                src="images/liverys_kategorie.jpg"
                alt="Livery Kategorie"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/liveryliste')}
            />
            {/* ...existing code... */}
        </div>
    );
};

export default Shop;