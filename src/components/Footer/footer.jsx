import React from 'react';
import './footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';


function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <div className='footer-logo-cont'>
                        <img className='footer-logo-img' src={assets.logoHighEnd} alt="Logo Bavaria" />
                    </div>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.x_icon} alt="" />
                        <img src={assets.instagram_icon} alt="" />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>Avisos</h2>
                    <ul>
                        <a href="https://www.bavaria.co/sites/g/files/seuoyk1666/files/2024-02/Aviso%20de%20Privacidad%20%28V.5%29.pdf" target='_blank'>
                            <li>Aviso de privacidad</li>
                        </a>
                        <a href="https://www.bavaria.co/viveresponsable" target='_blank'>
                            <li>Vive Responsable</li>
                        </a>
                        <a href="https://www.bavaria.co/t%C3%A9rminos-y-condiciones" target='_blank'>
                            <li>Términos y condiciones</li>
                        </a>
                        <a href="https://www.bavaria.co/abilegal/politica-deproteccion-de-datos-personales" target='_blank'>
                            <li>Politica de protección de datos personales</li>
                        </a>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>Menú</h2>
                    <ul>
                        <Link to="/" onClick={scrollToTop}><li>Inicio</li></Link>
                        <Link to="/Mapa" onClick={scrollToTop} ><li>Mapa</li></Link>
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