import React from 'react';
import photoReact from '../assets/React.png';
import photoJavascript from '../assets/javaScript.png';
import ExtraccionData from "../Hook/extraccionData.js";

function Proyects() {
  return (
    <div className="proyects-content">
      <div className="title">
        <h1>Proyectos</h1>
      </div>
      <div className="photos">
        <img src={photoJavascript} width={200} alt="JavaScript Logo" />
        <img src={photoReact} width={250} alt="React Logo" />
      </div>
      <ExtraccionData />
    </div>
  );
}

export default Proyects;
