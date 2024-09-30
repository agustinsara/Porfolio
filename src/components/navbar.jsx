import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css';

function Navbaar() {
  
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar bg="dark" variant="dark" className="custom-navbar fixed-top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link className="nav-link-smooth" onClick={() => scrollTo("proyectos")}>Proyectos</Nav.Link>
        </Nav>
        <Nav.Link className="mx-auto nav-link-smooth" onClick={() => scrollTo("Home")}>Home</Nav.Link>
        <Nav className="ms-auto">
          <Nav.Link className="nav-link-smooth" onClick={() => scrollTo("contacto")}>Contacto</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbaar;
