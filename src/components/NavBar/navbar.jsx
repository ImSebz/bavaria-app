import React, { useState } from 'react'
import './navbar.css';
import { assets } from '../../assets/assets';

const navbar = () => {

    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <img src={assets.logoBaravia} className='logo' alt="Logo" />
            <ul className="navbar-menu">
                <li onClick={()=> setMenu("home")} className={menu === "home"?"active":""}>Inicio</li>
                <li onClick={()=> setMenu("map")} className={menu === "map"?"active":""}>Mapa</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search Icon" />
                <div className="nav-search-icon">
                    <img src={assets.basket_icon} alt="" />
                </div>
                <button>
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default navbar;