import React from 'react';
import "../../assets/style/Contacto.css"
const Contacto = () => {
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
                <div className='container-form-contacto mt-5'>
                    <div className='container'>
                        <div className='row'>
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
                  <div className='container pt-5'>
                    <h3 className='display-6 fw-bold'>Visita nuestras instalaciones</h3>
                    <div className='row '>
                        <div className='col-12 col-md-4 col-lg-4'>
                           <div className='img-contacto my-3'>
                            <img src="https://arqa.com/wp-content/uploads/2016/08/the-burrow-6-530x462.jpg" alt="" className='w-100' />
                           </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                        <div className='img-contacto my-3'>
                            <img src="https://arqa.com/wp-content/uploads/2016/08/the-burrow-6-530x462.jpg" alt="" className='w-100' />
                           </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                        <div className='img-contacto my-3'>
                            <img src="https://arqa.com/wp-content/uploads/2016/08/the-burrow-6-530x462.jpg" alt="" className='w-100' />
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