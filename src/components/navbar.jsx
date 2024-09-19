import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css'; 

function Navbaar() {
  return (
    <Navbar bg="dark" variant="dark" className="custom-navbar">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#features">Proyectos</Nav.Link>
        </Nav>
        <Navbar.Brand href="#home" className="mx-auto">Home</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navbaar;