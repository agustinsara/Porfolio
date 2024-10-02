import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Proyects from './proyects';
import Navbaar from '../components/navbar.jsx';
import '../styles/styles.css';
import Contacto from './Contacto.jsx';
import css from '../assets/css-icon.png';
import javaScript from '../assets/js-icon.png';
import react from '../assets/react-icon.png';
import html from '../assets/html.icon.png';
import bootstrap from "../assets/bootstrap-icon.png";


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
          <div className="content-and-skills">
            <div className='content-text'>
              <div className="title-text">
                <h1>Sobre mi :</h1>
                <div className="text">
                  <p>
                    Soy una persona autodidacta que se especializa en dar soluciones a cada necesidad para su software web
                    Me encanta aprender de los desafíos que puedan ampliar mi conocimiento y me hagan mejorar de forma
                    individual como en equipo.
                  </p>
                </div>
              </div>
            </div>
            <div className="skills">
              <div className="title-skills">
                <h1>Mis Habilidades </h1>

                <img src={css} alt="css" className="skill-icon" />
                <img src={javaScript} alt="javaScript" className="skill-icon" />
                <img src={html} alt='html' className="skill-icon" ></img>
                <img src={react} alt="react" className="skill-icon" />
                <img src={bootstrap} alt="react" className="skill-icon" />
              </div>
            </div>
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
