import React, {useState, useEffect} from 'react';
import '../particulaStyles/tecnologias.css';
import laravel from '../../assets/laravel.jpg';
import php from '../../assets/php.jpg';
import flutter from '../../assets/flutter.png';
import dart from '../../assets/dart.jpg';
import react from '../../assets/react.png';
import Angular from '../../assets/angular.png';
import boostrap from '../../assets/bootstrap.png';
import html5 from '../../assets/html.png';
import javascript from '../../assets/javascript.png';
import css from '../../assets/css.png';
import mysql from '../../assets/mysql.png';
import sqlite from '../../assets/sqlite.png';
import firestore from '../../assets/firestore.png';
import maps from '../../assets/maps.png';
import msj from '../../assets/msj.png';
import auth from '../../assets/auth.jpg';
import node from '../../assets/node.jpg';
import express from '../../assets/express.png';
import typescript from '../../assets/typescript.jpg';

const Tecnologias = () =>{
    const [data, setdata] = useState([{image:laravel, estatus: '8/10'},{image:php, estatus: '8.5/10'},{image:flutter, estatus: '8.5/10'},{image:dart, estatus: '8/10'}
    ,{image:react, estatus: '8/10'},{image:Angular, estatus: '7/10'},{image:boostrap, estatus: '8/10'},{image:html5, estatus: '8.5/10'},
    {image:javascript, estatus: '8.5/10'},{image:css, estatus: '7.5/10'},{image:mysql, estatus: '7/10'},{image:sqlite, estatus: '8/10'},
    {image:firestore, estatus: '6.5/10'},{image:maps, estatus: '5/10'},{image:msj, estatus: '5/10'},{image:auth, estatus: '6/10'},
    {image:node, estatus: '8/10'},{image:express, estatus: '8.5/10'},{image:typescript, estatus: '6.5/10'}]);

    useEffect(()=>{},[]);

    const opacar = (image) =>{
        let dt = [...data];
        for (let i = 0; i < dt.length; i++) {
            if(dt[i].image !== image) dt[i].opacity = 'opacitylow';
        }
        setdata(dt);
    }

    const limpiar = () =>{
        let dt = [...data];
        for (let i = 0; i < dt.length; i++) {
            dt[i].opacity = '';
        }
        setdata(dt);
    }
    
    
    return(
        <div className={'col-lg-12 m-0 raleway '}>
            <div className='col-lg-12 text-center dosis h2' style={{marginTop:'100px'}}>Tecnologías que utilizo</div>
            <div className='row justify-content-evenly m-0 p-0'>
                
                {
                    data.map((dt,i) => {
                        return(
                            <div key={'tecno '+i} className={`tecnoContainer p-0 m-0 bg-white round-m relative scale m-2 child`} style={{overflow:'hidden'}} 
                                onMouseEnter={()=>{opacar(dt.image)}} onMouseLeave={limpiar}>
                                <img src={dt.image} className='cont-img round-m img-scale-scroll' />
                                <div className='col-lg-12 tecnoContainer round-m absolute top-left text-blue3 text-bold text-center show-text'>
                                    <div className='col-lg-12 p-1 text-center bg-white2'>Nivel {dt.estatus}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
    
export default Tecnologias;