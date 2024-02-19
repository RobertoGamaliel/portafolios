import React, {useState, useEffect, useRef} from 'react';

const Experiencia = () =>{
    const elementoRef = useRef();
    const [entradaSalida, setentradaSalida] = useState('');
    
    useEffect(()=>{
        const observer = new IntersectionObserver(
            (entries) => {
              // entries es un array de objetos que describe la intersección
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log(`Entró el objeto`);
                    setentradaSalida('entrar-desde-izquierda');
                } else {
                    setentradaSalida('salir-desde-izquierda');
                    console.log(`salió el objeto`);
                }
              });
            },
            {
              threshold: .03, // Porcentaje de visibilidad necesario para disparar la callback
            }
          );
          observer.observe(elementoRef.current);

        // Limpia el observer cuando el componente se desmonta
        return () => observer.disconnect();
    },[]);
    
    return(
        <div className='col-lg-12 m-0 raleway relative p-3 m-0 overflow-hide'>
            <div className={'col-lg-12 text-center dosis h2 '} style={{marginTop:'100px'}}>Formación y experiencia</div>
            <div className={'row justify-content-center m-0'} >
                <div className={'col-lg-10 p-2  '+entradaSalida} ref={elementoRef}>
                    <div className='row justify-content-center bg-white2 shadow round-s'>
                        <div className='col-lg-12 dosis h3 text-blue3 mt-2 mb-0 text-center'>Integranet soluciones</div>
                        <div className='col-lg-12 dosis text-m text-black2 text-bold mt-0 mb-2 text-center'>Feb. 2023 - Actualidad, <span className='text-500'>Ensenada BC. presencial</span> </div>
                        <div className='col-lg-12 p-1 dosis text-l text-bold text-black mt-0 mb-2 text-start'>
                            <span className='ms-3'>Puesto:</span> <span className='text-500'>Desarrollador web</span>
                            <div className='col-lg-12 text-start ms-3 mt-3'>Actividades:</div>
                            <ul className='text-m text-500'>
                                <li>Creación de proyectos web desde cero.</li>
                                <li>Documentación.</li>
                                <li>Diseño de frontend, backend y fullstack.</li>
                                <li>Mejora de proyectos existentes.</li>
                                <li>Implementación de diseños responsivos en proyectos que no los tenían.</li>
                                <li>Migración de plataformas (de Express a Laravel).</li>
                                <li>Levantamiento de requerimientos directo con el cliente.</li>
                                <li>Soporte y consultoría.</li>
                                <li>Participación y desarrollo en plataformas con funciones ERP, Análisis de ventas, Software para gestionar membresías, automatización de procesos empresariales y software para la gestión de almacenes.</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default Experiencia;