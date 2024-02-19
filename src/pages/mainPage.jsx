import React, {useState, useEffect} from 'react';
import image from '../assets/portada.png';
import './particulaStyles/mainPage.css';
import Tecnologias from './components/Tecnologias';
import yo from '../assets/yo.jpeg';
import Experiencia from './components/Experidncia';
import Experiencia2 from './components/experiencia2';
import './particulaStyles/tecnologias.css';
import linke from '../assets/linke.png'
import github from '../assets/github.png';
import gmail  from '../assets/gmail.png';
import wts  from '../assets/wts.jpg';
import uabc from '../assets/uabc.png';

const MainPage = () =>{
    const contactStyle = {width:'200px', height:'80px'};
    useEffect(()=>{
        
    },[]);
    
    return(
        <div className=' bg-dark m-0 p-2 overflow' style={{width:'100%', height:"100vh"}}>
            <div className='col-lg-12 m-0 p-0 round-top-m shadow overflow-hide' >
                <div className='row justify-content-center m-0 p-0'>
                    <div className='main-image-container m-0 p-0 relative contenedor'>
                        <img src={yo} className='p-0 m-0 circular-shape profile-image absolute top-left m-4 '/>
                        <div className='p-0 m-0 circular-shape profile-image absolute top-left m-4 gradient-radial '></div>
                        <img src={image} className='main-image1 p-0 m-0'/>
                        <div className='main-image-container m-0 p-0 absolute top-left gradient'></div>
                        <div className='fade-center-to-left dosis text-300 pt-1 pb-1 ps-4 pe-4 round-top-left-l m-0 bg-black3 text-white2 shadow-l h1 relative absolute'>
                            Ensenada B.C. México
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-evenly text-white m-0 p-0 overflow-hide' >
                
                <div className='justify raleway p-3  mt-0  mt-5 shadow round-s scale-025 bg-black5 about-container'>   
                    <div className='col-lg-12 text-start raleway h3 ps-0'>Sobre Mí</div>
                        ¡Hola! Soy Roberto Gamaliel, apasionado de la programación. Actualmente, trabajo en desarrollo web y también creo aplicaciones móviles para Android utilizando Flutter. Mi objetivo es fusionar mi habilidad técnica con mi creatividad para desarrollar aplicaciones y sitios web que no solo sean funcionales, sino también impactantes, fáciles de usar y altamente útiles para el usuario final.
                    <div className='col-lg-12 justify raleway  ps-0 mt-4'>
                        Soy organizado, me comprometo seriamente con mi trabajo, ya sea en proyectos de freelancer así como cuando trabajó para empresas.
                    </div>
                    <div className='col-lg-12 justify raleway ps-0 mt-4'>
                        Egresado de la <span className='text-bold'>licenciatura en Ciencias Computacionales</span> (2019-2023) de la Facultad de Ciencias de la Universidad Autónoma de Baja California (<span className='text-bold'>UABC</span>).
                    </div>

                    <div className='col-lg-12 text-center'>
                    <img src={uabc} style={{height:'80px'}} />
                    </div>
                </div>
                <div className='justify raleway about-container p-3 mt-5 shadow scale-025 bg-black5'>
                    <div className='col-lg-12 text-end h3 pe-3'>Mis habilidades</div>
                    <ul className=''>
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
                <Experiencia />
                <Experiencia2 />
                <div className='col-lg-12 mt-5 dosis text-center h1 text-bold'>Contacto</div>
                <div className='col-lg-12 m-0 p-0 text-center'>
                    <div className='row justify-content-evenly m-0 p-0'>
                        
                        <div className={`p-0 m-0 bg-white round-m relative scale m-2 child overflow-hide  pointer scale-05`} style={contactStyle}
                        onClick={()=>{window.open("https://www.linkedin.com/in/roberto-gamaliel-s%C3%A1nchez-moreno-aa0b84223/", "_blank");}}>
                            <img src={linke} className='cont-img round-m img-scale-scroll' style={contactStyle}/>
                        </div>
                        
                        <div className={`p-0 m-0 bg-white round-m relative scale m-2 child overflow-hide  pointer scale-05`} style={contactStyle}
                        onClick={()=>{window.open("https://github.com/RobertoGamaliel", "_blank");}}>
                            <img src={github} className='cont-img round-m img-scale-scroll' style={contactStyle}/>
                        </div>
                       

                        <div className='col-auto p-2 bg-white round-m m-2 ' style={{width:'300px', height:'80px'}}>
                            <div className='row justify-content-center' >
                                <img src={gmail} style={{width:'80px'}} />
                                <div className='col-lg-12 text-dark text-bold text-center'>Gsanchez94@uabc.edu.mx</div>
                            </div>
                        </div>

                        <div className='col-auto p-2 bg-white round-m m-2' style={{width:'300px', height:'80px'}}>
                            <div className='row justify-content-center'>
                                <img src={wts} style={{width:'70px'}} />
                                <div className='col-lg-12 text-dark text-bold text-center'>+52 646 107 9698</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-12 mb-5'></div>
            </div>
        </div>
    )
}
    
export default MainPage;