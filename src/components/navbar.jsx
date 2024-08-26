import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbaar() {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#features">Proyectos</Nav.Link>
        <Nav.Link href="#pricing">Contacto</Nav.Link>
      </Nav>
    </Container>  
  </Navbar>
  </div>
  )
}

export default Navbaar; 