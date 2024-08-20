import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './couponView.css';

const CouponView = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!location.state) {
            navigate('/');
        }
    }, [location, navigate]);

    if (!location.state) {
        return null;
    }

    const { marca_logo, name, marker } = location.state;

    return (
        <div className="coupon-view">
            <img src={marker} alt="Marcador Logo" className='marker-cupon' />
            <h1 className='coupon-name'>{name}</h1>
            <h2 className='coupon-text'>Reclama tu primera cerveza gratis mostrando este cupón</h2>
            <img src={marca_logo} alt="Marca Logo" className="coupon-logo" />
            <p className='coupon-event'>LPC Cartagena 2024</p>
        </div>
    );
};

export default CouponView;