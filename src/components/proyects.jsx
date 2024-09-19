import React, { useState } from 'react';
import photoReact from '../assets/React.png';
import photoJavascript from '../assets/javaScript.png';
import ExtraccionData from "../Hook/extraccionData.js";
import Carousel from 'react-bootstrap/Carousel';

function Proyects() {
  const [open, setOpen] = useState(false);

  const handleImageClick = () => {
    setOpen(!open); 
   
  };

  return (
    <div className="proyects-content">
      <div className="title">
        <h1>Proyectos</h1>
      </div>
      <div className="photos">
        <img 
          onClick={handleImageClick} 
          src={photoJavascript} 
          width={200} 
          alt="JavaScript Logo" 
          style={{ cursor: 'pointer' }} 
        />
        <img 
          src={photoReact} 
          width={250} 
          alt="React Logo" 
        />
      </div>
      {open && (
        <div>
          <ExtraccionData />
        </div> )}
    </div>
  );
}

export default Proyects;
