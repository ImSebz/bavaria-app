import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import { assets } from '../../assets/assets';

const navbar = () => {

    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <Link to="/" onClick={() => { setMenu("home") }}><img src={assets.logoBaravia} className='logo' alt="Logo" /></Link>
            <ul className="navbar-menu">
                <Link to="/" onClick={() => { setMenu("home") }} ><li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Inicio</li></Link>
                <Link to="/mapa" onClick={() => { setMenu("map") }}><li onClick={() => setMenu("map")} className={menu === "map" ? "active" : ""}>Mapa</li></Link>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search Icon" />
                <div className="nav-search-icon">
                    <img src={assets.basket_icon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default navbar;