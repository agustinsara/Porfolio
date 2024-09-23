import React from 'react';
import Form from 'react-bootstrap/Form';
import contact from "../styles/contact.css"


function Contacto() {
  return (
      
    <div className="form-container">
    <div className="content-wrapper">
      <h1 className="form-title">Contactame</h1>
      <Form className="form-content">
        <Form.Group className="mb-2 custom-form-group" controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" size="sm" className="custom-control" />
        </Form.Group>

        <Form.Group className="mb-2 custom-form-group" controlId="formEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" size="sm" className="custom-control" />
        </Form.Group>

        <Form.Group className="mb-2 custom-form-group" controlId="formPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" placeholder="Número de teléfono" size="sm" className="custom-control" />
        </Form.Group>

        <Form.Group className="mb-2 custom-form-group" controlId="formQuery">
          <Form.Label>Consulta</Form.Label>
          <Form.Control as="textarea" placeholder="Escribí tu consulta" rows={3} size="sm" className="custom-control" />
        </Form.Group>
      </Form>
    </div>
  </div>
        
   
  )
}

export default Contacto