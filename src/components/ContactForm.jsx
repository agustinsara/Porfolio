import React, { useState } from 'react';
import { Form, Button, Alert, ProgressBar, Spinner } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    consulta: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setShowAlert(false);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          sendEmail();
          return 100;
        }
        return prevProgress + 10;
      });
    }, 300);
  };

  const sendEmail = () => {
    emailjs.send(
      'service_krusnqd', 
      'template_iwxvqsi', 
      {
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        telefono: formData.telefono,
        consulta: formData.consulta,
      },
      'S3zaw1CNe2lVr2tGk'
    ).then((response) => {
      console.log('Correo enviado con éxito', response.status, response.text);
      setLoading(false);
      setShowAlert(true);
    }).catch((err) => {
      console.error('Error al enviar el correo:', err);
      setLoading(false);
    });
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="w-50">
        <h2 className="text-white text-center mb-4">Formulario de Contacto</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label className="text-white" style={{ fontSize: '2rem' }}>Nombre</Form.Label>
            <Form.Control 
              type="text" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              placeholder="Ingresa tu nombre" 
              required 
              style={{ fontSize: '1.2rem' }}
            />
          </Form.Group>

          <Form.Group controlId="formApellido" className="mt-3">
            <Form.Label className="text-white" style={{ fontSize: '2rem' }}>Apellido</Form.Label>
            <Form.Control 
              type="text" 
              name="apellido" 
              value={formData.apellido} 
              onChange={handleChange} 
              placeholder="Ingresa tu apellido" 
              required 
              style={{ fontSize: '1.2rem' }}
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label className="text-white" style={{ fontSize: '2rem' }}>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Ingresa tu email" 
              required 
              style={{ fontSize: '1.2rem' }}
            />
          </Form.Group>

          <Form.Group controlId="formTelefono" className="mt-3">
            <Form.Label className="text-white" style={{ fontSize: '2rem' }}>Teléfono</Form.Label>
            <Form.Control 
              type="text" 
              name="telefono" 
              value={formData.telefono} 
              onChange={handleChange} 
              placeholder="Ingresa tu teléfono" 
              required 
              style={{ fontSize: '1.2rem' }}
            />
          </Form.Group>

          <Form.Group controlId="formConsulta" className="mt-3">
            <Form.Label className="text-white" style={{ fontSize: '2rem' }}>Consulta</Form.Label>
            <Form.Control 
              as="textarea" 
              name="consulta" 
              value={formData.consulta} 
              onChange={handleChange} 
              placeholder="Escribe tu consulta" 
              rows={4} 
              required 
              style={{ fontSize: '1.2rem' }}
            />
          </Form.Group>

          <Button 
            variant="primary" 
            type="submit" 
            className="mt-3 w-100"
            disabled={loading}
            style={{ fontSize: '1.2rem' }}
          >
            {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="visually-hidden"> Enviando...</span>
              </>
            ) : (
              'Enviar'
            )}
            {loading && (
              <ProgressBar 
                now={progress} 
                animated 
                striped 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: '100%',
                  zIndex: 1,
                  backgroundColor: 'rgba(0, 123, 255, 0.2)'
                }}
              />
            )}
          </Button>
        </Form>

        {showAlert && (
          <Alert variant="success" className="mt-3">
            Se envió con éxito tu consulta
          </Alert>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
