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
                    <div data-aos="fade-up"  className='container'>
                        <div className='containerTitulo-Contacto'>
                            <span>¿PREGUNTAS Y/O COMENTARIOS?</span>
                            <h1 className='display-1 fw-bold'>Contacto</h1>
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
                        <div data-aos="fade-up"  className='row'>
                            <div className='col-12 col-md-12 col-lg-6'>
                                <div>
                                    <h3 className='display-6 fw-bold'>Contactanos</h3>
                                    <form className='form-contacto'>
                                        <input type="text" className='form-control' placeholder='Nombre' />
                                        <input type="text" className='form-control' placeholder='Nombre' />
                                        <input type="text" className='form-control' placeholder='Nombre' />
                                        <textarea name="" id="" cols="30" rows="10" className='mt-3 form-control'></textarea>
                                        <button>Enviar</button>
                                    </form>
                                </div>
                            </div>
                            <div className='col-12 col-md-12 col-lg-6'>
                                <div className='container-mapa'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div className='subPortada-contacto'>
                    <div data-aos="fade-up"  className='container pt-5'>
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