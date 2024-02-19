import React, {useState, useEffect, useRef} from 'react';

const Experiencia2 = () =>{
    const elementoRef = useRef();
    const [entradaSalida, setentradaSalida] = useState('');
    
    useEffect(()=>{
        const observer = new IntersectionObserver(
            (entries) => {
              // entries es un array de objetos que describe la intersección
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log(`Entró el objeto`);
                    setentradaSalida('entrar-desde-derecha');
                } else {
                    setentradaSalida('salir-desde-derecha');
                    console.log(`salió el objeto`);
                }
              });
            },
            {
              threshold: .01, 
              rootMargin:'10px' // Porcentaje de visibilidad necesario para disparar la callback
            }
          );
          observer.observe(elementoRef.current);

        // Limpia el observer cuando el componente se desmonta
        return () => observer.disconnect();
    },[]);
    
    return(
        <div className={'col-lg-12 m-0 raleway relative p-3 '+entradaSalida} ref={elementoRef} >
            <div className={'row justify-content-center m-0'} >
                <div className={'col-lg-10 p-2'} >
                    <div className='row justify-content-center bg-white2 shadow round-s'>
                        <div className='col-lg-12 dosis h3 text-red3 mt-2 mb-0 text-center'>Desarrollo de proyectos personales</div>
                        <div className='col-lg-12 dosis text-m text-black2 text-bold mt-0 mb-2 text-center'>Junio 2020 - Febrero 2023 </div>
                        <div className='col-lg-12 p-1 dosis text-l text-bold text-black mt-0 mb-2 text-start'>
                            <span className='ms-3'>Puesto:</span> <span className='text-500'>Freelancer</span>
                            <div className='col-lg-12 text-start ms-3 mt-3'>Actividades:</div>
                            <p className='ms-3 text-m text-600'>Durante mis estudios desarrollé varios proyectos personales para automatizar procesos de un emmprendimiento que hice de venta e reposteria en linea.</p>
                            <ul className='text-m text-500 '>
                            <li className='mb-3'>
  Aplicación móvil para dispositivos Android que permite a los clientes realizar pedidos, apartar fechas y explorar el catálogo de diseños disponibles.
  <br/>
  <a href="https://play.google.com/store/apps/details?id=com.GammaSoft.pedidos&pli=1" target="_blank" rel="noopener noreferrer">
    <button className='btn btn-sm btn-dark shadow'>Ver aplicación en Google Play</button>
  </a>
</li>

<li className='mb-3'>
  Aplicación móvil para dispositivos Android que facilita el cálculo de precios en una repostería, utilizando costos fijos y variables, generando listas de compras y productos, gestionando pedidos y transfiriendo datos mediante documentos de texto. La diseñé para automatizar procesos de compras y pedidos en mi emprendimiento.
  <br/>
  <a href="https://play.google.com/store/apps/details?id=com.GammaSoft.pymmecalc" target="_blank" rel="noopener noreferrer">
    <button className='btn btn-sm btn-dark shadow'>Ver aplicación en Google Play</button>
  </a>
</li>

<li className='mb-3'>
  Página para capturar pedidos. Debido a mi limitado presupuesto cuando era estudiante, preparé una página estática que contiene un módulo fácilmente sustituible en un despliegue para ajustar precios. Esta página permite armar un pedido de pastel utilizando los diferentes componentes que lo conforman de una forma sencilla. Dado que no cuenta con un backend, la diseñé para generar un código que se introduce en la aplicación mencionada anteriormente y genera el pedido en un solo clic. De esta manera, podía capturar pedidos fácilmente sin generar costos de hosting.
  <br/>
  <div className='col-lg-12 text-s'>
    La página está alojada en Heroku, en el plan gratuito. En ocasiones, la primera vez que se abre tarda en cargar mientras se activa el contenedor del host.
  </div>
  <div className='col-lg-12'></div>
  <a href="https://pastelesypostregamma.herokuapp.com/" target="_blank" rel="noopener noreferrer">
    <button className='btn btn-sm btn-dark shadow'>Visitar página</button>
  </a>
</li>

<li>Actualmente, sigo trabajando en algunos proyectos personales que próximamente publicaré aquí.</li>

                                
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default Experiencia2;