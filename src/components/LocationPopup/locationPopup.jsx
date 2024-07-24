import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import './locationPopup.css';
import { assets } from '../../assets/assets';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    content: {
        width: '90%',
        maxWidth: '600px',
        height: 'auto',
        margin: 'auto',
        padding: '20px',
        borderRadius: '10px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
    },
};

const LocationPopup = ({ isOpen, onRequestClose, location }) => {

    const handleApartaClick = () => {
        if (location.url_reserva === "") return;
        window.open(location.url_reserva, '_blank');
    };

    const handleCartaClick = () => {
        if (location.carta === "") return;
        window.open(location.carta, '_blank');
    };

    

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Location Details"
            style={customStyles}
        >
            <button className='modal-location-close' onClick={onRequestClose}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className='modal-location-name'>{location.name}</h2>
            <img src={location.image} alt={location.name} className='modal-location-img' />
            <p className='modal-location-desc'>{location.description}</p>
            <div className='modal-location-btn-container'>
                <button className='modal-location-btn' onClick={handleApartaClick}>
                    <img src={assets.apartaIcon} alt="Aparta Icon" />
                    <p>Aparta</p>
                </button>
                <button className='modal-location-btn' onClick={handleCartaClick}>
                    <img src={assets.cartaIcon} alt="Carta Icon" />
                    <p>Carta</p>
                </button>
                <button className='modal-location-btn'>
                    <img src={assets.mapaIcon} alt="Mapa Icon" />
                    <p>Mapa</p>
                </button>
            </div>


        </Modal>
    );
};

export default LocationPopup;