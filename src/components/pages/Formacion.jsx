import React from 'react';
import "../../assets/style/Formacion.css"

const Formacion = () => {
    return (
        <section>
            <div className='portada-formacion'>
                <div className='container pt-5'>
                    <div className='containerTitulo-formacion'>
                        <span> MÁS EN FORMA, MÁS RÁPIDO, MÁS FUERTE.</span>
                        <h1 className='display-4 fw-bold'>Adiestramiento</h1>
                        <p>Descubre un amplio abanico de posibilidades en Gym053.
                            Ya sea que estés buscando mejorar tu técnica o un entrenamiento
                            intensivo con saco de boxeo, tenemos algo para ti. Echa un
                            vistazo a nuestras amplias opciones de formación a continuación
                            y regístrate hoy mismo para recibir una clase de prueba
                            gratuita.
                        </p>
                        <button>RESERVA UNA CLASE GRATUITA</button>
                    </div>
                </div>
            </div>
            <article>
                <div className='cursoFormacion'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-6 mt-5'>
                                <div>
                                    <img src="https://gym053.nl/wp-content/uploads/2023/02/JDN04293-1-768x512.jpg.webp" alt="alumno" className='w-100' />
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-6 mt-5'>
                                <div>
                                    <h3 className='display-5 fw-bold'>Clases de Boxeo</h3>
                                    <p>
                                        El entrenamiento con saco de boxeo con nosotros tiene como objetivo mejorar su
                                        estado físico general. El entrenamiento comienza con un calentamiento y luego
                                        se practican combinaciones técnicas de puñetazo, patada y rodilla. La fuerza
                                        y la resistencia son claves. Además de los beneficios físicos, este entrenamiento
                                        también proporciona una salida para el estrés diario. Aprendes a continuar donde otros
                                        se detienen, lo cual es una mentalidad que también puede ayudarte en la vida cotidiana.
                                        El entrenamiento con saco de boxeo es accesible para todos, desde principiantes hasta avanzados.
                                        Te motivamos a sacar lo mejor de ti mismo, pero el ritmo depende de ti.
                                    </p>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-6 mt-5'>
                                <div>
                                    <img src="https://gym053.nl/wp-content/uploads/2023/02/JDN04365-1-768x512.jpg.webp" alt="alumno" className='w-100' />
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-6 mt-5'>
                                <div>
                                    <h3 className='display-5 fw-bold'>Entrenamiento técnico</h3>
                                    <p>
                                        Gym053 ofrece entrenamiento técnico donde aprender las técnicas correctas es primordial.
                                        Los ejercicios se realizan en parejas para dinamizar en clase y motivarse mutuamente.
                                        Además de mejorar las habilidades físicas y la visión técnica, el entrenamiento también
                                        promueve la confianza en uno mismo y la perseverancia.
                                        En Gym053 hay atención para todos los niveles, para que puedas entrenar a tu ritmo y con
                                        un grupo que se adapte a ti. La orientación de profesionales te ayudará a determinar
                                        tus objetivos y límites.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </section>
    );
};

export default Formacion;