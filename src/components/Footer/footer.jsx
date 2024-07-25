import React from 'react';
import './footer.css';
import { assets } from '../../assets/assets';


function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img className='footer-logo-img' src={assets.logoBaravia} alt="Logo Bavaria" />
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>Avisos</h2>
                    <ul>
                        <li>Aviso de privacidad</li>
                        <li>Vive Responsable</li>
                        <li>Términos y condiciones</li>
                        <li>Politica de protección de datos personales</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>Menú</h2>
                    <ul>
                        <li>Inicio</li>
                        <li>Mapa</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Prohíbase el expendio de bebidas embriagantes a menores de edad. El exceso de alcohol es perjudicial para la salud.</p>
            <p className="footer-copyright">Anheuser-Busch InBev © Todos los derechos Reservados 2024</p>
        </div>
    );
}

export default Footer;