import React from 'react'
import styles from "../styles/styles.css";
import  {  TypeAnimation  }  from  'react-type-animation' ;
import Proyects from './proyects';
import Navbaar from '../components/navbar.jsx';


function Layout() {
  return (

    <div className='content'>

    <div className="content-body">
      <div className='boxOne'>
         <TypeAnimation
         sequence={[
          "Said Agustin Sara Web" ,1000,
          "Said Agustin Sara ",1000,
          ]}
          wrapper="h1"
          speed={90}
          repeat={Infinity}
          />
          <h1 className='text-title'>Quien Soy :</h1>
              <p style={{ fontSize: "30px" }}>
                Soy una persona autodidacta que se especializa en tener soluciones para necesidad 
                de cada persona,me encanta apreder con desafios que puedan apliar mi conocimiento 
                y poder tener un mejor desarrollo tanto como individualmente como trabajo en equipo.
              </p>
        
      </div> 
    </div> 
     <Proyects></Proyects>
     </div>
  
  )
}

export default Layout