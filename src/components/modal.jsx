import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';

function Moodal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" size="lg" onClick={handleShow}>
        Cargar Archivo
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Carga de Proyectos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3 d-flex justify-content-between align-items-center">
            <h4 className="mb-0">Elija Tipo de Tecnología</h4>
            <div>
              <Button variant="outline-secondary" className="me-2">React</Button>
              <Button variant="outline-secondary">JavaScript</Button>
            </div>
          </InputGroup>
          <Form.Label>Nombre del Proyecto</Form.Label>
          <Form.Control />
          <Form.Label>Descripción del Proyecto</Form.Label>
          <Form.Control />
          <Form.Label>Link del Repositorio</Form.Label>
          <Form.Control />
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label></Form.Label>
            <div className="d-flex">
              <Form.Control type="file" style={{ display: 'none' }} id="upload" />
              <Button as="label" htmlFor="upload" variant="dark">
                Cargar Imagen
              </Button>
            </div>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="blue" onClick={handleClose}>
            Cerrar 
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Publicar Proyecto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Moodal;
