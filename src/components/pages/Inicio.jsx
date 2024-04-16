import React from 'react';
import "../../assets/style/Inicio.css"
import boxingLlave from "../../assets/img/boxing-llave.jpeg"
const Inicio = () => {
    return (
        <section>
            <div className='PortadaInicio'>

            </div>
            <article className='infoClases mt-4'>
                <div className='text-center pt-5'>
                    <h2 className='display-4'>Entrenamiento ilimitado por <br /> solo 27,50 € por mes</h2>
                </div>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className='cardInfo-clases my-3'>

                            </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className='cardInfo-clases my-3'>

                            </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className='cardInfo-clases my-3'>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center pt-5'>
                    <a href='/Formacion' className='btn-red'>mas informacion</a>
                </div>
            </article>
            <article>
                <div className='section-nosotros mt-5'>
                    <div className='portadaNosotros'>
                       <img src={boxingLlave} alt="" />
                    </div>
                    <div className='contenidoNosotros'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 col-md-8 col-lg-8'>
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
                                <div className='col-12 col-md-6 col-lg-4'>
                                    <div className='containerImg-nosotros'>
                                        <img src="https://gym053.nl/wp-content/uploads/2023/02/HENRY-763x1024.jpg.webp" alt="" />
                                        <p className='pt-3'>HENRY HEINHUIS, PROPIETARIO DEL GIMNASIO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className='pt-5'>
                <div className='section-cursos container mt-5'>
                    <div className='containerTitulo-curso'>
                        <h3 className='display-4 fw-bold'>GIMNASIO ONTDEK053</h3>
                        <button className='mt-3'> ver cursos de formacion</button>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className='my-3'>
                                <img src="https://gym053.nl/wp-content/uploads/2023/02/JDN04730-1-683x1024.jpg.webp" alt="foto de alumnos" className='w-100' />
                            </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className='my-3'>
                                <img src="https://gym053.nl/wp-content/uploads/2023/02/JDN04730-1-683x1024.jpg.webp" alt="foto de alumnos" className='w-100' />
                            </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className='my-3'>
                                <img src="https://gym053.nl/wp-content/uploads/2023/02/JDN04730-1-683x1024.jpg.webp" alt="foto de alumnos" className='w-100' />
                            </div>
                        </div>
                    </div>

                </div>
            </article>
            <article className='py-5 section-inscribete'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-6'>
                            <div className='mt-4'>
                                <img src="https://gym053.nl/wp-content/uploads/2023/02/JDN04377-768x512.jpg.webp"
                                    alt=""
                                    className='w-100'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-6'>
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