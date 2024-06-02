import React from 'react';
import "../../assets/style/Contacto.css"
import sacosBoxeo from "../../assets/img/sacos-boxeo.jpg"
import ring from "../../assets/img/ring-box.jpg"
import salon from "../../assets/img/salonbox.jpg"
const Contacto = () => {
    return (
        <section>
            <div className='portada-Contacto'>
                <img src={sacosBoxeo} alt="" />
                <div className='capa-Contacto  pt-5'>
                    <div data-aos="fade-up" className='container'>
                        <div className='containerTitulo-Contacto'>
                            <span>¿PREGUNTAS Y/O COMENTARIOS?</span>
                            <h1 className='display-1 fw-bold'>Ponte en Contacto con Nosotros</h1>
                            <p>
                                Contáctenos usando el siguiente formulario o reserve su
                                lección de prueba gratuita directamente a través del botón a
                                continuación.
                            </p>
                            <button>RESERVA UNA CLASE GRATUITA</button>
                        </div>
                    </div>
                </div>
            </div>
            <article>
                <div className='container-form-contacto mt-5'>
                    <div className='container'>
                        <div data-aos="fade-up" className='row'>
                            <div className='col-12 col-md-12 col-lg-6'>
                                <div>
                                    <h3 className='display-3 fw-bold'>Contactanos</h3>
                                    <form className='form-contacto'>
                                        <input type="text" className='form-control' placeholder='Nombre' />
                                        <input type="text" className='form-control' placeholder='Nombre' />
                                        <input type="text" className='form-control' placeholder='Nombre' />
                                        <textarea name="" id="" cols="30" rows="10" className='mt-3 form-control'></textarea>
                                        <button>Enviar</button>
                                    </form>
                                </div>
                            </div>
                            <div className='col-12 col-md-12 col-lg-6 mt-4 pt-1'>
                                <div className='container-mapa '>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8468.519674483025!2d-65.20095347988516!3d-26.82169238651888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94223792d6c56903%3A0xf88d5b92b5c56527!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1713486658154!5m2!1ses-419!2sar"
                                        loading="lazy" >
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div className='subPortada-contacto'>
                    <div data-aos="fade-up" className='container pt-5'>
                        <h3 className='display-6 fw-bold'>Visita nuestras instalaciones</h3>
                        <div className='row '>
                            <div className='col-12 col-md-4 col-lg-4'>
                                <div className='img-contacto my-3'>
                                    <img src={ring} alt="" className='w-100' />
                                </div>
                            </div>
                            <div className='col-12 col-md-4 col-lg-4'>
                                <div className='img-contacto my-3'>
                                    <img src={sacosBoxeo} alt="" className='w-100' />
                                </div>
                            </div>
                            <div className='col-12 col-md-4 col-lg-4'>
                                <div className='img-contacto my-3'>
                                    <img src={salon} alt="" className='w-100' />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </article>
        </section>
    );
};

export default Contacto;