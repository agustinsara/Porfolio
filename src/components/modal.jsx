import React, { useState } from 'react';
import { collection, setDoc, doc } from "firebase/firestore"; 
import { db, uuidv4, storage, ref, uploadBytes, getDownloadURL } from "../config-firebase.js";
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

  const handleSelectTechnology = (e) => {
    const selectoption= e.target.value;
    setProjectData((prevState) => ({
      ...prevState,
      technology: [...prevState.technology, selectoption]
    }));
    console.log("Tecnología seleccionada:", selectoption);
  };

  
  const handleImageChange = async (e) => {
    e.preventDefault();
    const newImage = e.target.files[0];
    if (newImage) {
      const storageRef = ref(storage, uuidv4());
      await uploadBytes(storageRef, newImage);
      const imageUrl = await getDownloadURL(storageRef);
      setProjectData({
        ...projectData,
        image: [...projectData.image, imageUrl]
      });
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, descripcion, link, image, technology } = projectData;
    const coleccionRef = collection(db, "projects");
    await setDoc(doc(coleccionRef), { title, descripcion, link, image, technology });
    alert("Proyecto publicado");
    setProjectData({
      title: '',
      descripcion: '',
      link: '',
      image: [],
      technology: [] 
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
            <Form.Select aria-label="Default select example" onChange={handleSelectTechnology}>
              <option>Elija una tecnología</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
            </Form.Select>
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
          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <div className="d-flex">
              <Form.Control type="file" style={{ display: 'none' }} id="upload" onChange={handleImageChange} />
              <Button as="label" htmlFor="upload" variant="dark">
                Cargar Imagen
              </Button>
            </div>
            {projectData.image.length > 0 && (
              <img src={projectData.image[projectData.image.length - 1]} alt="preview" style={{ width: '100px', marginTop: '10px' }} />
            )}
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
