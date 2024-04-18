import React from 'react';
import '../../assets/style/Horarios.css'
import boxing from "../../assets/img/box-image.webp" 
const Horarios = () => {
    return (
        <section>
            <div className='portada-Horarios'>
                <img src={boxing} alt="" />
                <div className='capa-Horarios'>
                    <div className='container pt-5'>
                        <div className='containerTitulo-Horarios'>
                            <span> MÁS EN FORMA, MÁS RÁPIDO, MÁS FUERTE.</span>
                            <h1 className='display-1 fw-bold'>Horarios de clases</h1>
                            <p>¡Bienvenido al gimnasio donde el poder y la técnica se fusionan! En nuestro centro,
                                te ofrecemos la experiencia definitiva en entrenamiento de combate. Desde clases
                                de boxeo que te enseñarán a golpear con precisión y potencia, hasta sesiones de
                                kickboxing que te desafiarán a alcanzar tus límites físicos y mentales,  ¡Únete a nosotros hoy y
                                descubre tu potencial en el ring!
                            </p>
                            <button>RESERVA UNA CLASE GRATUITA</button>
                        </div>
                    </div>
                </div>
            </div>
            <article>
                <div className='container-horarios container my-5'>
                    <div className='horarios-items container my-4'>
                        <p>CLASES DE BOXEO</p>
                        <p>LUNES, MIERCOLES , VIERNES 18hs </p>
                        <p>PROFESOR: JUAN DOMINGUEZ</p>
                    </div>
                    <div className='horarios-items container my-4'>
                        <p>CLASES DE BOXEO</p>
                        <p>MARTES, JUEVES , SABADOS 18hs </p>
                        <p>PROFESOR: CARLOS LOPEZ</p>
                    </div>
                    <div className='horarios-items container my-4'>
                        <p>CLASES DE KICKBOXING</p>
                        <p>LUNES, MIERCOLES , VIERNES 18hs </p>
                        <p>PROFESOR: RICARDO PEREZ</p>
                    </div>
                    <div className='horarios-items container my-4'>
                        <p>CLASES DE KICKBOXING</p>
                        <p>MARTES, JUEVES , SABADOS 18hs </p>
                        <p>PROFESOR: FEDERICO RODRIGUEZ</p>
                    </div>

                </div>
            </article>
        </section>
    );
};

export default Horarios;