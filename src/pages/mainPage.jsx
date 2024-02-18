import React, {useState, useEffect} from 'react';
import image from '../assets/portada.png';
import './particulaStyles/mainPage.css';
import proyectos from '../assets/proyectos.png';
import Tecnologias from './components/Tecnologias';

const MainPage = () =>{

    useEffect(()=>{
        
    },[]);
    
    return(
        <div className='vw-100 vh-100 m-0 p-0 bg-ldark overflow pb-5'>
            <div className='row justify-content-center m-0 p-0'>
                <div className='main-image-container m-0 p-0 relative contenedor'>
                    <img src={image} className='main-image1 p-0 m-0'/>
                    <div className='main-image-container m-0 p-0 absolute top-left gradient'></div>
                    <div className='pointer fade-center-to-left dosis text-300 pt-1 pb-1 ps-4 pe-4 round-top-left-l m-0 bg-black3 text-white2 shadow-l h1 relative absolute'>
                        Ensenada B.C. México
                    </div>
                </div>
            </div>
            <div className='row justify-content-evenly p-4 text-white'>
                
                <div className='justify raleway text-m p-3  mt-0  mt-5 shadow round-s scale-025 bg-black5' style={{maxWidth:'600px'}}>   
                <div className='col-lg-12 text-start raleway h3 ps-0'>Sobre Mí</div>
                    ¡Hola! Soy Roberto Gamaliel, apasionado de la programación. Actualmente, trabajo en desarrollo web y también creo aplicaciones móviles para Android utilizando Flutter. Mi objetivo es fusionar mi habilidad técnica con mi creatividad para desarrollar aplicaciones y sitios web que no solo sean funcionales, sino también impactantes, fáciles de usar y altamente útiles para el usuario final.
                    <div className='col-lg-12 justify raleway text-m ps-0 mt-4'>
                        Soy organizado, me comprometo seriamente con mi trabajo, ya sea en proyectos de freelancer así como cuando trabajó para empresas.
                    </div>
                </div>
                <div className='justify raleway text-m p-3 mt-5 shadow scale-025 bg-black5' style={{maxWidth:'600px'}}>
                    <div className='col-lg-12 text-end h3 pe-3'>Habilidades</div>
                    <ul className='text-s'>
                        <li>Habilidad de análisis y trato con el cliente, para adaptar soluciones computacionales a medida de sus necesidades.</li>
                        <li>Diseño de interfaces de usuario.</li>
                        <li>Diseño de bases de datos, desde la conceptualización hasta la implementación en su sistema.</li>
                        <li>Habilidad para crear y optimizar consultas SQL, tanto estáticas como dinámicas.</li>
                        <li>Conocimiento en tecnología API Rest.</li>
                        <li>Desarrollo de backend.</li>
                        <li>Desarrollo de aplicaciones móviles utilizando Flutter y Dart.</li>
                        <li>Uso de herramientas de geolocalización, Google Maps, Firebase Firestore, Firebase Auth en la plataforma Flutter.</li>
                        <li>Desarrollo WEB responsivo.</li>
                    </ul>
                    </div>
                <Tecnologias />
                
                
            </div>
                
                
                  

            
        </div>
    )
}
    
export default MainPage;