import React from 'react';
import './locationItem.css';

const locationItem = ({ id, name, description, image }) => {
    return (
        <div className='location-item'>
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
    )
}

export default locationItem