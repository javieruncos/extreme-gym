import React from 'react';
import '../../assets/style/Planes.css'

const Planes = () => {
    return (
        <section>
            <div className='portada-Planes'>
                <div className='container pt-5'>
                    <div className='containerTitulo-Planes'>
                        <span> DESCUBRE NUESTRAS TARIFAS</span>
                        <h1 className='display-4 fw-bold'>Nuestros Planes</h1>
                        <p>
                            Vea las opciones para contratar una suscripción aquí o reserve su
                            lección de prueba gratuita directamente a través del botón a continuación.
                        </p>
                        <button>RESERVA UNA CLASE GRATUITA</button>
                    </div>
                </div>
            </div>
            <article>
                <div className='container-fluid mt-5 pt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-3 col-lg-3 my-3'>
                            <div className='precio-planes'>
                                <div className='header-planes'>
                                    <div className='container pt-4'>
                                        <h5 className='fs-4 fw-bold'>Ilimitado</h5>
                                        <p>Sigue todos los cursos de forma Ilimitada</p>
                                    </div>
                                </div>
                                <div className='body-planes container'>
                                    <div>
                                        <span className='display-1 fw-bold'>$27</span>
                                        <span>por mes</span>
                                    </div>
                                    <div className='container item-planes mt-3'>
                                        <span>Realice cursos de formación ilimitados</span>
                                    </div>
                                    <div className='container item-planes mt-3'>
                                        <span>Acceso a todos los cursos de formación.</span>
                                    </div>
                                    <div className='container item-planes mt-3'>
                                        <span>Lección de prueba gratuita</span>
                                    </div>
                                    <div className='d-flex justify-content-center py-5'>
                                        <button className='btn-inscripcion'>inscribite</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3 col-lg-3 my-3'>
                            <div className='precio-planes'>
                                <div className='header-planes'>
                                    <div>
                                        <h5 className='fs-4 fw-bold'>1 vez por semana</h5>
                                        <p>Entrena una vez por semana</p>
                                    </div>
                                </div>
                                <div className='body-planes container'>
                                    <div>
                                        <span className='display-1 fw-bold'>$22</span>
                                        <span>por mes</span>
                                    </div>
                                    <div className='container item-planes mt-3'>
                                        <span>Entrena una vez por semana</span>
                                    </div>
                                    <div className='container item-planes mt-3'>
                                        <span>Libre eleccion de formacion</span>
                                    </div>
                                    <div className='container item-planes mt-3'>
                                        <span>Lección de prueba gratuita</span>
                                    </div>
                                    <div className='d-flex justify-content-center py-5'>
                                        <button className='btn-inscripcion'>inscribite</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3 col-lg-3 my-3'>
                            <div className='precio-planes'>
                                <div className='header-planes'>
                                    <div>
                                        <h5 className='fs-4 fw-bold'>Niños</h5>
                                        <p>Edad de 6 a 15 años</p>
                                    </div>
                                </div>
                                <div className='body-planes container'>
                                    <div>
                                        <span className='display-1 fw-bold'>$17</span>
                                        <span>por mes</span>
                                    </div>
                                    <div className='container item-planes mt-3'>
                                        <span> Entrenamiento personalizado para niños.</span>
                                    </div>
                                    <div className='container item-planes mt-3'>
                                        <span>Tanto el miércoles como el viernes</span>
                                    </div>
                                    <div className='container item-planes mt-3'>
                                        <span>Lección de prueba gratuita</span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center py-5'>
                                    <button className='btn-inscripcion'>inscribite</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3 col-lg-3 my-3'>
                            <div className='precio-planes'>
                                <div className='header-planes'>
                                    <div>
                                        <h5 className='fs-4 fw-bold'>tarjeta de tira</h5>
                                        <p>Paga por 10 lecciones</p>
                                    </div>
                                </div>
                                <div className='body-planes container'>
                                    <div>
                                        <span className='display-1 fw-bold'>$7</span>
                                        <span>por mes</span>
                                    </div>
                                    <div className='container item-planes mt-3'>
                                        <span>No apegado a nada</span>
                                    </div>
                                    <div className='container item-planes mt-3'>
                                        <span>Paga las veces que vengas.</span>
                                    </div>
                                    <div className='container item-planes mt-3'>
                                        <span>Lección de prueba gratuita</span>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center py-5'>
                                    <button className='btn-inscripcion'>inscribite</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </article>
        </section>
    );
};

export default Planes;