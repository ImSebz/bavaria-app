import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import './locationItem.css';
import LocationPopup from '../LocationPopup/locationPopup';

const LocationItem = ({ id, name, description, image, url_reserva, carta, marca, marca_logo }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleItemClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

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
                location={{ id, name, description, image, url_reserva, carta, marca, marca_logo }}
            />
        </div>
    );
};

LocationItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url_reserva: PropTypes.string,
    carta: PropTypes.string,
    marca: PropTypes.string,
    marca_logo: PropTypes.string,
};

export default memo(LocationItem);