import React, { useState } from 'react';
import photoReact from '../assets/React.png';
import photoJavascript from '../assets/javaScript.png';
import ExtraccionData from "../Hook/extraccionData.js";

function Proyects() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState(null);

  const handleImageClick = (tech) => {
    setFilter(tech);
    setOpen(!open); 
  };

  return (
    <div className="proyects-content" id='proyectos'>
      <div className="title">
        <h1>Proyectos</h1>
      </div>

      <div className="photos">
        <img 
          onClick={() => handleImageClick('JavaScript')} 
          src={photoJavascript} 
          width={200} 
          alt="JavaScript Logo" 
          style={{ cursor: 'pointer' }} 
        />
        <img 
          onClick={() => handleImageClick('React')} 
          src={photoReact} 
          width={250} 
          alt="React Logo" 
          style={{ cursor: 'pointer' }} 
        />
      </div>

      {open && (
        <div>
          <ExtraccionData filter={filter} />
        </div> 
      )}
    </div>
  );
}

export default Proyects;
