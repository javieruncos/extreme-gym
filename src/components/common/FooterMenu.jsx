import React from 'react';
import "../../assets/style/Footer.css"

const FooterMenu = () => {
    return (
        <div className='footer'>
            <h2 className='display-1'>EXTREME GYM</h2>
            <div className='container'>
                <ul>
                    <li><a href="/Contacto">Contacto</a></li>
                    <li><a href="/Horarios">Horarios</a></li>
                    <li><a href="/Planes">Planes</a></li>
                    <li><a href="/Formacion">Formacion</a></li>
                </ul>
            </div>
            <div className='container-redes'>
               <a href=""><i className="bi bi-facebook display-6"></i></a>
               <a href=""><i className="bi bi-instagram display-6"></i></a>
            </div>
        </div>
    );
};

export default FooterMenu;