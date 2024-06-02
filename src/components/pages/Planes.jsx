import React from 'react';
import '../../assets/style/Planes.css'
import boxeo from '../../assets/img/clases-boxeo.jpg'
import boxSenior from '../../assets/img/adultoBox.webp'

const Planes = () => {
    return (
        <section>
            <div className='portada-Planes'>
                <img src={boxeo} alt="" className='w-100' />
                <div className='capa-Planes'>
                    <div data-aos="fade-up" className='container pt-5'>
                        <div className='containerTitulo-Planes'>
                            <span> DESCUBRE NUESTRAS TARIFAS</span>
                            <h1 className='display-1 fw-bold'>Nuestros Planes</h1>
                            <p>
                                Vea las opciones para contratar una suscripción aquí o reserve su
                                lección de prueba gratuita directamente a través del botón a continuación.
                            </p>
                            <button>RESERVA UNA CLASE GRATUITA</button>
                        </div>
                    </div>
                </div>
            </div>
            <article>
                <div className='container-fluid mt-5 '>
                    <div data-aos="fade-up" className='row'>
                        <div className='col-12 col-md-6 col-lg-3 my-3'>
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
                                        <a href='/Contacto' className='btn-inscripcion'>inscribite</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3 my-3'>
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
                                        <a href='/Contacto' className='btn-inscripcion'>inscribite</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3 my-3'>
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
                                    <a href='/Contacto' className='btn-inscripcion'>inscribite</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3 my-3'>
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
                                    <a href='/Contacto' className='btn-inscripcion'>inscribite</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div className='container-lecciones container my-5'>
                    <h4 className='fs-2 ps-2 fw-bold'>Otras lecciones y opciones</h4>
                    <div data-aos="fade-up" className='row mt-4'>
                        <div className='col-12 col-md-12 col-lg-4'>
                            <div className='card-opciones container px-3 mt-3'>
                                <h5>Clases privadas (bajo peticion)</h5>
                                <div className='d-flex flex-column gap-2'>
                                    <span>1 persona por hora $40 pp</span>
                                    <span>2 persona por hora $35 pp</span>
                                    <span>3 persona por hora $30 pp</span>
                                    <span>4 persona por hora $25 pp</span>
                                    <p className='text-muted'>total maximo 4 personas</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-12 col-lg-8'>
                            <div className='card-opciones-fondos px-4 py-4 mt-3 container'>
                                <h5>Fondos para la educacion</h5>
                                <p>¿A tu hijo le gusta hacer deporte pero no hay suficiente dinero en casa?
                                    ¡La Fundación del Fondo
                                    para la Educación y el Fondo para la Juventud y el Deporte de Enschede
                                    nos ayudan! Pagamos la cuota de afiliación y ropa deportiva para niños/jóvenes
                                    si es necesario.
                                </p>
                                <h6>como funciona?</h6>
                                <p>Regístrese como nuevo cliente a través de  este enlace .</p>
                                <h6>Ya eres cliente?</h6>
                                <p>Envíe un correo electrónico a
                                    <span className='text-decoration-underline text-danger ps-2'>
                                        redactie@gmail.com
                                    </span> o llame al 053-203 40 19 (opción 1 'clientes')
                                    y solicite el deporte.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='row mt-4'>
                        <div className='col-12 col-md-12 col-lg-8'>
                            <div className='card-grupos-negocios container px-4 mt-3'>
                                <h5>Grupos/negocios</h5>
                                <p>Ofrecemos una amplia gama de actividades y talleres para grupos de 8 a 30 personas.
                                    Tanto si buscas una actividad divertida de team building como un día deportivo con
                                    amigos, con nosotros encontrarás la solución perfecta.
                                </p>
                                <p>
                                    Creemos que una mente sana comienza en un cuerpo sano, por eso nuestras actividades se centran
                                    en la salud física y mental.
                                </p>

                                <button>Contacto</button>
                            </div>
                        </div>
                        <div className='col-12 col-md-12 col-lg-4'>
                            <div className='containerImg-fundacion'>
                                <img src={boxSenior} alt="alumno entrenando" className='w-100' />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Planes;