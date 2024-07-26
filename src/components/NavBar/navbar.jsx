import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setMenu("home");
        } else if (location.pathname === '/mapa') {
            setMenu("map");
        }
    }, [location]);

    const handleMenuClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='navbar'>
            <Link to="/" onClick={() => { setMenu("home") }}>
                <img src={assets.logoBaravia} className='logo' alt="Logo" />
            </Link>
            <ul className={`sidebar-menu ${isSidebarOpen ? 'open' : ''}`}>
                <li onClick={handleMenuClick} className='hamburger'>
                    <FontAwesomeIcon icon={isSidebarOpen ? faXmark : faBars} className='menu-icon' />
                </li>
                <Link to="/" onClick={() => { setMenu("home"); setIsSidebarOpen(false); }}>
                    <li className={menu === "home" ? "active" : ""}>Inicio</li>
                </Link>
                <Link to="/mapa" onClick={() => { setMenu("map"); setIsSidebarOpen(false); }}>
                    <li className={menu === "map" ? "active" : ""}>Mapa</li>
                </Link>
            </ul>
            <ul className="navbar-menu">
                <Link to="/" onClick={() => { setMenu("home") }}>
                    <li className={menu === "home" ? "active" : ""} id='home-li'>Inicio</li>
                </Link>
                <Link to="/mapa" onClick={() => { setMenu("map") }}>
                    <li className={menu === "map" ? "active" : ""} id='mapa-li'>Mapa</li>
                </Link>
                <li onClick={handleMenuClick} className='hamburger'>
                    <FontAwesomeIcon icon={isSidebarOpen ? faXmark : faBars} className='menu-icon' />
                </li>
            </ul>
        </div>
    );
}

export default Navbar;