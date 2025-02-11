import React from 'react';
import { Link } from 'react-router-dom';
import './citys.css';

const Citys = () => {
    return (
        <>
            <div className='main-city-container'>
                <h1>Selecciona tu ciudad</h1>
                <div className='city-button-container'>
                    <Link to="/barranquilla">
                        <button className='btn-city'>Barranquilla</button>
                    </Link>
                    <Link to="/cali">
                        <button className='btn-city'>Cali</button>
                    </Link>
                    <Link to="/cartagena">
                        <button className='btn-city'>Cartagena</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Citys;