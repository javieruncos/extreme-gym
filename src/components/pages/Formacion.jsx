import React from 'react';
import "../../assets/style/Formacion.css"
import entrenamiento from "../../assets/img/entrenamiento.jpeg"
import boxeoPractica2 from "../../assets/img/boxeo-practica2.webp"
import boxing from "../../assets/img/boxing.webp"
import alumna from "../../assets/img/alumna2.webp"
import kickboxing from "../../assets/img/kickboxing.jpeg"
import boxSenior from "../../assets/img/adultoBox.webp"

const Formacion = () => {
    return (
        <section>
            <div className='portada-formacion'>
                <img src={kickboxing} alt="" />
                <div className='capa-formacion'>
                    <div  data-aos="fade-up"  className='container pt-5'>
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
            </div>
            <article>
                <div className='cursoFormacion'>
                    <div className='container'>
                        <div  className='row'>
                            <div data-aos="fade-up"  className='col-12 col-md-12 col-lg-6 mt-5'>
                                <div>
                                    <img src={boxeoPractica2} alt="alumno" className='w-100' />
                                </div>
                            </div>
                            <div className='col-12 col-md-12 col-lg-6 mt-5'>
                                <div data-aos="fade-up" >
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
                            <div className='col-12 col-md-12 col-lg-6 mt-5'>
                                <div data-aos="fade-up" >
                                    <img src={boxing} alt="alumno" className='w-100' />
                                </div>
                            </div>
                            <div className='col-12 col-md-12 col-lg-6 mt-5'>
                                <div data-aos="fade-up" >
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
            <article>
                <div className='subPortada-formacion'>
                    <img src={entrenamiento} alt="" />
                </div>
                <div className='entrenamiento-niños'>
                    <div className='container pt-5'>
                        <div data-aos="fade-up"  className='row pt-5'>
                            <div className='col-12 col-md-12 col-lg-6'>
                                <div className='mt-4'>
                                    <img src={alumna} alt="" className='w-100' />
                                </div>
                            </div>
                            <div className='col-12 col-md-12 col-lg-6'>
                                <div className='mt-4'>
                                    <h4 className='display-5 fw-bold'>Kickboxing para niños</h4>
                                    <p>¡Dale a tu hijo o hija la oportunidad de aprender kickboxing de una manera
                                        divertida! Nuestras clases de kickboxing están destinadas a niños a partir
                                        de los 6 años y tienen como objetivo fortalecer cualidades importantes, como
                                        la resiliencia, la confianza en sí mismo, la diversión, el movimiento saludable,
                                        la perseverancia y, por supuesto, las cualidades de kickboxing.
                                    </p>
                                    <p>Con nosotros, el ambiente es acogedor y seguro, con diversas actividades lúdicas y
                                        técnicas fáciles de aprender.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div className='circuito my-5'>
                    <div className='container'>
                        <div data-aos="fade-up"  className='row pt-5'>
                            <div className='col-12 col-md-12 col-lg-6'>
                                <div>
                                    <img src={boxSenior} alt="alunmo entrenando" className='w-100' />
                                </div>
                            </div>
                            <div className='col-12 col-md-12 col-lg-6'>
                                <div>
                                    <h4 className='display-5 fw-bold'>Entrenamiento en circuito</h4>
                                    <p>¡Conoce nuestro entrenamiento intensivo en circuito! Nuestro circuito
                                        consta de ejercicios de fuerza y cardio que consisten en una combinación
                                        de kickboxing y crossfit. Durante el entrenamiento, los ejercicios se
                                        realizan uno tras otro sin mucho descanso, lo que lo convierte en un entrenamiento
                                        intensivo.
                                    </p>
                                    <p>
                                        Nuestros circuitos son accesibles para todos. Tanto si eres un atleta principiante como
                                        avanzado, ¡este entrenamiento ofrece un reto para todos!
                                    </p>
                                    <p>
                                        Nuestro entrenamiento en circuito no solo mejora tu movilidad, fuerza y resistencia,
                                        sino que también es adecuado como complemento a otros deportes. En resumen, ¡el entrenamiento
                                        en circuito es la manera perfecta de ponerse en forma y fortalecerse!
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