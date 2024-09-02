import React from 'react';
import photoReact from '../assets/React.png';
import photoJavascript from '../assets/javaScript.png';
import styles from "../styles/styles.css";
import Cards from './Cards';
import ExtraccionData from "../Hook/extraccionData.js"
function Proyects() {
  return (
    <div className='proyects-content'>
         <div className="title"><h1>Proyectos</h1></div>
       <div className="photos">
            <img src={photoJavascript} width={200}></img>
            <img src={photoReact} width={250}/>
          
        </div>
        <ExtraccionData></ExtraccionData>
    </div>
  )
}

export default Proyects