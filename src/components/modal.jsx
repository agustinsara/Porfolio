import React, { useState } from 'react';
import { collection, setDoc, doc } from "firebase/firestore"; 
import { db } from "../config-firebase.js";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';

function Moodal() {
  const [show, setShow] = useState(false);
  const [projectData, setProjectData] = useState({
    title: '',
    descripcion: '',
    link: '',
    image: [],
    technology: []
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, descripcion, link } = projectData;
    const coleccionRef = collection(db, "proyects");
    await setDoc(doc(coleccionRef), { title , descripcion, link });
    alert("Proyecto publicado");
    setProjectData({
      title: '',
      descripcion: '',
      link: '',
    });
  };

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
          <Form.Control
            value={projectData.title}
            onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}
          />
          <Form.Label>Descripción del Proyecto</Form.Label>
          <Form.Control
            value={projectData.descripcion}
            onChange={(e) => setProjectData({ ...projectData, descripcion: e.target.value })}
          />
          <Form.Label>Link del Repositorio</Form.Label>
          <Form.Control
            value={projectData.link}
            onChange={(e) => setProjectData({ ...projectData, link: e.target.value })}
          />
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
          <Button variant="dark" onClick={handleSubmit}>
            Publicar Proyecto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Moodal;
