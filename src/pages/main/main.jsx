import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './main.css';


const main = () => {
    return (
        <>
            <div className='inicio-container'>
                <h1>¡Bienvenido a la Ruta de la Cerveza!</h1>
                <h2>Elige tu ciudad y prepárate para descubrir las mejores experiencias cerca de ti.</h2>
                <div className='inicio-btns'>
                    <Link to="/barranquilla">
                        <button className='btn-ciudad'>Barranquilla</button>
                    </Link>
                    <Link to="/cali">
                        <button className='btn-ciudad'>Cali</button>
                    </Link>
                    <Link to="/cartagena">
                        <button className='btn-ciudad'>Cartagena</button>
                    </Link>

                </div>
                <div className='inicio-photo-container'>
                    <img src={assets.high_end_mobile} alt="" />
                </div>
            </div>
        </>
    )
}

export default main