import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setMenu("home");
        } else if (location.pathname === '/mapa') {
            setMenu("map");
        }
    }, [location]);

    return (
        <div className='navbar'>
            <Link to="/" onClick={() => { setMenu("home") }}>
                <img src={assets.logoBaravia} className='logo' alt="Logo" />
            </Link>
            <ul className="navbar-menu">
                <Link to="/" onClick={() => { setMenu("home") }}>
                    <li className={menu === "home" ? "active" : ""}>Inicio</li>
                </Link>
                <Link to="/mapa" onClick={() => { setMenu("map") }}>
                    <li className={menu === "map" ? "active" : ""}>Mapa</li>
                </Link>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search Icon" />
                <div className="nav-search-icon">
                    <img src={assets.basket_icon} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;