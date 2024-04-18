import React from 'react';
import "../../assets/style/Footer.css"

const FooterMenu = () => {
    return (
        <div className='footer'>
            <h2 className='display-1'>EXTREME GYM</h2>
            <div className='container'>
                <ul>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Horarios</a></li>
                    <li><a href="#">Planes</a></li>
                    <li><a href="#">Formacion</a></li>
                </ul>
            </div>
            <div className='container-redes'>
               <a href=""><i className="bi bi-facebook display-6"></i></a>
               <a href=""><i class="bi bi-instagram display-6"></i></a>
            </div>
        </div>
    );
};

export default FooterMenu;