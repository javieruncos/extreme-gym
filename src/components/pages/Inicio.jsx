import React from 'react';
import "../../assets/style/Inicio.css"
import boxingLlave from "../../assets/img/boxing-llave.jpeg"
import boxeo from "../../assets/img/boxeo2.webp"
import coach from "../../assets/img/coach.webp"
import alumna from "../../assets/img/alumna-boxing.webp"
import practicaBox from "../../assets/img/practica-boxeo.webp"
import practicaBox2 from "../../assets/img/boxeo-practica.webp"
import boxing from "../../assets/img/boxing.webp"
const Inicio = () => {
    return (
        <section>
            <div className='PortadaInicio'>
                <img src={boxeo} alt="" />
                <div className='capa-inicio'>
                    <div className='container pt-5'>
                        <div data-aos="fade-up" className='containerTitulo-Inicio'>
                            <span> MÁS EN FORMA, MÁS RÁPIDO, MÁS FUERTE.</span>
                            <h1 className='display-2 fw-bold'>Bienvenidos a EXTREME GYM</h1>
                            <p>
                                Impulsa tus objetivos deportivos con Gym053. En el corazón de Enschede ofrecemos un ambiente
                                acogedor y motivador para practicar kickboxing y entrenamiento físico. Regístrese hoy para
                                una lección de prueba gratuita.
                            </p>
                            <a href='/Contacto' className='btnLink'>RESERVA UNA CLASE GRATUITA</a>
                        </div>
                    </div>
                </div>
            </div>
            <article className='infoClases mt-4'>
                <div data-aos="fade-up" className='text-center pt-5'>
                    <h2 className='display-4 fw-bold'>Entrenamiento ilimitado por <br /> solo 27,50 € por mes</h2>
                </div>
                <div className='container pt-5'>
                    <div data-aos="fade-up" className='row'>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <div className='cardInfo-clases my-3 container py-4'>
                                <h5 className='fs-3'>Entrenamiento con saco de boxeo</h5>
                                <p>El entrenamiento con saco de boxeo es ideal para mejorar la
                                    condición física general y reducir el estrés.
                                </p>
                                <p> Aprenderás combinaciones técnicas y desarrollarás la perseverancia,
                                    donde tú marcas tu propio ritmo y todos, principiantes o luchadores
                                    competitivos, son bienvenidos.
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <div className='cardInfo-clases my-3 container py-4'>
                                <h5 className='fs-3'>Formación tecnológica</h5>
                                <p>En Gym053 aprendes las técnicas adecuadas practicándolas en parejas
                                    para conseguir mayor dinámica y motivación.
                                </p>
                                <p>
                                    Además de tu físico y tu técnica, también se estimula tu confianza
                                    en ti mismo y tu perseverancia. Puedes entrenar con nosotros a tu
                                    propio nivel y ritmo
                                </p>

                            </div>
                        </div>
                        <div className='col-12 col-md-12 col-lg-4'>
                            <div className='cardInfo-clases my-3 container py-4'>
                                <h5 className='fs-3'>kickboxing para niños</h5>
                                <p>
                                    Nuestras lecciones de kickboxing para niños a partir de
                                    6 años se centran en fortalecer la resiliencia, la confianza
                                    en sí mismos, la diversión y el ejercicio saludable.
                                </p>
                                <p>
                                    Naturalmente, esto se lleva a cabo en un ambiente seguro y
                                    agradable con actividades lúdicas y técnicas fáciles de aprender.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center pt-5'>
                    <a href='/Formacion' className='btn-info'>mas informacion</a>
                </div>
            </article>
            <article>
                <div className='section-nosotros mt-5'>
                    <div className='portadaNosotros'>
                        <img src={boxingLlave} alt="" />
                    </div>
                    <div className='contenidoNosotros'>
                        <div className='container'>
                            <div data-aos="fade-up" className='row'>
                                <div className='col-12 col-md-12 col-lg-8'>
                                    <div className='containerTexto-nosotros pt-5 container'>
                                        <h3 className='display-5 fw-bold'>nombre del entrenador</h3>
                                        <div>
                                            <p>Gym053 nació de la pasión por las artes marciales. Empecé a practicar judo cuando era niño.
                                                Cuando tenía 15 años me pasé al kickboxing con Joop Zweers.
                                            </p>
                                            <p>
                                                Después de muchos años de formación, me pidieron que me convirtiera en formador; Un reto que
                                                aproveché con las dos manos. Tenía una amplia experiencia en el trabajo con jóvenes a través
                                                de mi trabajo como trabajadora social en el centro juvenil De Rots y como supervisora residencial
                                                en Avelijn. Encontré muchas similitudes dentro de mi experiencia como trabajadora social y
                                                dando entrenamiento de kickboxing.
                                            </p>
                                            <p>Hace unos años, obtuve mi diploma en Resiliencia y Agresión en el NIVM. Como entrenadora,
                                                formadora y trabajadora
                                                social, ayudo a mis alumnos a alcanzar sus objetivos.
                                            </p>
                                            <span>¿Te veré en el gimnasio?</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-12 col-lg-4'>
                                    <div className='containerImg-nosotros'>
                                        <img src={coach} alt="" />
                                        <p className='pt-3'>HENRY HEINHUIS, PROPIETARIO DEL GIMNASIO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className='pt-5'>
                <div data-aos="fade-up" className='section-cursos container mt-5'>
                    <div className='containerTitulo-curso'>
                        <h3 className='display-4 fw-bold'>GIMNASIO ONTDEK053</h3>
                        <button className='mt-3'> ver cursos de formacion</button>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className='my-3'>
                                <img src={alumna} alt="foto de alumnos" className='w-100' />
                            </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className='my-3'>
                                <img src={practicaBox} alt="foto de alumnos" className='w-100' />
                            </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className='my-3'>
                                <img src={practicaBox2} alt="foto de alumnos" className='w-100' />
                            </div>
                        </div>
                    </div>

                </div>
            </article>
            <article className='py-5 section-inscribete'>
                <div className='container mt-5'>
                    <div data-aos="fade-up" className='row'>
                        <div className='col-12 col-md-12 col-lg-6'>
                            <div className='mt-4'>
                                <img src={boxing}
                                    alt=""
                                    className='w-100'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-12 col-lg-6'>
                            <div className='inscribite-container'>
                                <h3 className='display-5 fw-bold mt-4'>¿LISTO PARA EMPEZAR?</h3>
                                <p className='fs-4'>Saca lo mejor de ti mismo con Gym053. Inscríbete hoy mismo
                                    en una clase de prueba gratuita y descubre cómo podemos
                                    ayudarte a alcanzar tus objetivos deportivos.
                                </p>
                                <div>
                                    <button className='btn-red mt-4'>Inscribete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Inicio;