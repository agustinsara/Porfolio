import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Proyects from './proyects';
import Navbaar from '../components/navbar.jsx';
import '../styles/styles.css';
import Contacto from './Contacto.jsx';


function Layout() {
  return (
    <div className="layout-container" id='Home'>

      <Navbaar />


      <div className="content-body">
        <div className="boxOne">
          <TypeAnimation
            sequence={[
              "Said Agustin Sara Web", 1000,
              "S", 1000,
            ]}
            wrapper="h1"
            speed={5}
            repeat={Infinity}
          />
          <div className='content-text'>
            <h1 className="text-title">Quien Soy :</h1>
            <h2 style={{ fontSize: "30px", textAlign:'left'}}>
              Soy una persona autodidacta que se especializa en tener soluciones para cada necesidad.
              Me encanta aprender con desafíos que puedan ampliar mi conocimiento y mejorar tanto de forma
              individual como en trabajo en equipo.
            </h2>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '90px' }}>
        <Proyects />
      </div>
      <div style={{ marginTop: '100px' }}>
        <Contacto></Contacto>
      </div>
    </div>
  );
}

export default Layout;
