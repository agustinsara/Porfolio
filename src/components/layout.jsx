import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Proyects from './proyects';
import Navbaar from '../components/navbar.jsx';
import '../styles/styles.css'; // Asegúrate de que el archivo CSS esté importado
import ContactForm from './ContactForm.jsx';

function Layout() {
  return (
    <div className="layout-container">
     
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
          <h1 className="text-title">Quien Soy :</h1>
          <p style={{ fontSize: "30px" }}>
            Soy una persona autodidacta que se especializa en tener soluciones para cada necesidad.
            Me encanta aprender con desafíos que puedan ampliar mi conocimiento y mejorar tanto de forma
            individual como en trabajo en equipo.
          </p>
        </div>
      </div>

      
      <Proyects />
      <ContactForm/>
    </div>
  );
}

export default Layout;
