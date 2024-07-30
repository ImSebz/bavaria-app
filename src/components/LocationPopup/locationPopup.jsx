import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './locationPopup.css';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    const handleReservaClick = () => {
        if (location.url_reserva === "") return alert('No hay reservas disponibles, intente de nuevo más tarde');
        window.open(location.url_reserva, '_blank');
    };

    const handleCartaClick = () => {
        if (location.carta === "") return alert('No hay carta disponible, intente de nuevo más tarde');
        window.open(location.carta, '_blank');
    };

    const handlePromoClick = () => {
        if (location.promo === "") return alert('No hay promos activas actualmente, intente de nuevo más tarde');
        window.open(location.promo, '_blank');
    };

    const handleMapaClick = () => {
        navigate(`/mapa`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Location Details"
            style={customStyles}
        >
            <button className='modal-location-close' onClick={onRequestClose}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <h2 className='modal-location-name'>{location.name}</h2>
            <img src={location.image} alt={location.name} className='modal-location-img' />
            <div className='modal-location-desc'>
                <div className='modal-location-desc-right'>
                    <p>{location.subtitle}</p>
                </div>
                <div className="modal-location-desc-left">
                    <img src={location.marca_logo} alt="Imagen logo" />
                </div>
            </div>
            <hr className='hr-modal' />
            <div className='modal-location-btn-container'>
                <button className='modal-location-btn' onClick={handleCartaClick}>
                    <img src={assets.cartaIcon} alt="Carta Icon" />
                    <p>Carta</p>
                </button>
                <button className='modal-location-btn' onClick={handlePromoClick}>
                    <img src={assets.promoActivas} alt="Promo Activa Icon" />
                    <p>Promos</p>
                </button>
                <button className='modal-location-btn' onClick={handleReservaClick}>
                    <img src={assets.reservaIcon} alt="Reserva Icon" />
                    <p>Reserva</p>
                </button>
                <button className='modal-location-btn' onClick={handleMapaClick}>
                    <img src={assets.mapaIcon} alt="Mapa Icon" />
                    <p>Mapa</p>
                </button>
            </div>
        </Modal>
    );
};

export default LocationPopup;