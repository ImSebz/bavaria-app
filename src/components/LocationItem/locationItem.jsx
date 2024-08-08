import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import './locationItem.css';
import LocationPopup from '../LocationPopup/locationPopup';

const LocationItem = ({ id, name, description, image, image_carousel, subtitle, url_reserva, promo, carta, marca, marca_logo }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleItemClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    console.log('LocationItem props:', {image_carousel});

    return (
        <div>
            <div className='location-item' onClick={handleItemClick}>
                <div className='location-item-img-container'>
                    <img className='location-item-image' src={image} alt={name} />
                </div>
                <div className='location-item-info'>
                    <div className="location-item-name">
                        <p>{name}</p>
                    </div>
                    <p className="location-item-desc">
                        {description}
                    </p>
                </div>
            </div>
            <LocationPopup
                isOpen={isPopupOpen}
                onRequestClose={handleClosePopup}
                location={{ id, name, description, image, image_carousel, subtitle, url_reserva, promo, carta, marca, marca_logo }}
            />
        </div>
    );
};

LocationItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    image_carousel: PropTypes.array,
    subtitle: PropTypes.string,
    url_reserva: PropTypes.string,
    promo: PropTypes.string,
    carta: PropTypes.string,
    marca: PropTypes.string,
    marca_logo: PropTypes.string,
};

export default memo(LocationItem);