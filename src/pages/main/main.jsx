import React from 'react';
import './main.css';

const main = () => {
    return (
        <>
            <div className='inicio-container'>
                <h1>¡Bienvenido a la Ruta de la Cerveza!</h1>
                <h2>Elige tu ciudad y prepárate para descubrir las mejores experiencias cerca de ti.</h2>
                <div className='inicio-btns'>
                    <button className='btn-ciudad'>Cali</button>
                    <button className='btn-ciudad'>Cartagena</button>
                </div>
            </div>
        </>
    )
}

export default main