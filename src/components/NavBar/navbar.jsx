import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import { assets } from '../../assets/assets';
import { assetsCali } from '../../assetsCali/assetsCali';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const isCaliRoute = location.pathname === '/cali';
    const isMapaCaliRoute = location.pathname === '/mapa-cali';

    useEffect(() => {
        if (location.pathname === '/') {
            setMenu("home");
        } else if (location.pathname === '/mapa') {
            setMenu("map");
        } else if (location.pathname === '/ciudades') {
            setMenu("ciudades");
        }
    }, [location]);

    const handleMenuClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`navbar ${isCaliRoute || isMapaCaliRoute ? 'navbar-cali' : ''}`}>
            <Link to={isCaliRoute || isMapaCaliRoute ? "/cali" : "/"} onClick={() => { setMenu(isCaliRoute || isMapaCaliRoute ? "cali" : "home") }}>
                <img src={isCaliRoute || isMapaCaliRoute ? assetsCali.logoHighEndCali : assets.logoHighEnd} className='logo' alt="Logo" />
            </Link>
            <ul className={`sidebar-menu ${isSidebarOpen ? 'open' : ''}`}>
                <li onClick={handleMenuClick} className='hamburger'>
                    <FontAwesomeIcon icon={isSidebarOpen ? faXmark : faBars} className='menu-icon' />
                </li>
                <Link to={isCaliRoute || isMapaCaliRoute ? "/cali" : "/"} onClick={() => { setMenu("home"); setIsSidebarOpen(false); }}>
                    <li className={menu === "home" ? "active" : ""}>Inicio</li>
                </Link>
                <Link to={isCaliRoute || isMapaCaliRoute ? "/mapa-cali" : "/mapa"} onClick={() => { setMenu("map"); setIsSidebarOpen(false); }}>
                    <li className={menu === "map" ? "active" : ""}>Mapa</li>
                </Link>
                <Link to="/ciudades" onClick={() => { setMenu("ciudades"); setIsSidebarOpen(false); }}>
                    <li className={menu === "ciudades" ? "active" : ""}>Ciudades</li>
                </Link>
            </ul>

            <ul className="navbar-menu">
                <Link to={isCaliRoute || isMapaCaliRoute ? "/cali" : "/"} onClick={() => { setMenu("home") }}>
                    <li className={menu === "home" ? "active" : ""} id='home-li'>Inicio</li>
                </Link>
                <Link to={isCaliRoute || isMapaCaliRoute ? "/mapa-cali" : "/mapa"} onClick={() => { setMenu("map") }}>
                    <li className={menu === "map" ? "active" : ""} id='mapa-li'>Mapa</li>
                </Link>
                <Link to="/ciudades" onClick={() => { setMenu("ciudades") }}>
                    <li className={menu === "ciudades" ? "active" : ""} id='ciudades-li'>Ciudades</li>
                </Link>
                <li onClick={handleMenuClick} className='hamburger'>
                    <FontAwesomeIcon icon={isSidebarOpen ? faXmark : faBars} className='menu-icon' />
                </li>
            </ul>
        </div>
    );
}

export default Navbar;