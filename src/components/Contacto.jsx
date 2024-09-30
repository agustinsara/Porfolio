import { useEffect, useState,useRef  } from 'react';
import Form from 'react-bootstrap/Form';
import contact from "../styles/contact.css";
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

function Contacto() {
    const [isLoading, setLoading] = useState(false);
    const form = useRef();
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
    useEffect(() => {
      function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
      }
  
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
          Swal.fire({
            width:600,
            height:350,
            position: "top-end",
            icon: "success",
            title: "Se envio correctamente tu consulta",
            showConfirmButton: false,
            timer: 3500
          });
          reset()
        });
      }
    }, [isLoading]);

    const onSubmit=(data)=>{
      console.log("esto es lo que se esta mandando" , data)
     

    emailjs
      .sendForm('service_krusnqd', 'template_iwxvqsi', form.current, {
        publicKey: 'S3zaw1CNe2lVr2tGk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setLoading(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
  
  return (
      
    <div className="form-container">
    <div className="content-wrapper">
      <h1 className="form-title">Contactame</h1>
      <Form ref= {form} onSubmit={handleSubmit(onSubmit)} className="form-content">
        <Form.Group className="mb-2 custom-form-group" controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
          {...register('user_name' , {required:true })} 
           name="user_name"
          type="text"
           placeholder="Nombre" 
           size="sm" 
           className="custom-control"/>
          {errors.user_name && <p>Ingrese un Nombre </p>}
        </Form.Group>

        <Form.Group className="mb-2 custom-form-group" controlId="formEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control 
          {...register('user_email',{required:true})} 
          type="email" 
          name="user_email"
          placeholder="name@example.com" 
          size="sm" 
          className="custom-control" />
          {errors.user_email?.type === "required" && <p>Ingrese un correo</p> }
        </Form.Group>

        <Form.Group className="mb-2 custom-form-group" controlId="formPhone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control 
          {...register('user_phone',{required:true, maxLength:15})}
          type="text" 
          placeholder="Número de teléfono" 
          name="user_phone"
          size="sm" 
          className="custom-control" />
          {errors.user_phone && <p>Ingrese un Numero de Telefono</p>}
        </Form.Group>

        <Form.Group className="mb-2 custom-form-group" controlId="formQuery">
          <Form.Label>Consulta</Form.Label>
          <Form.Control 
          name="user_message"
          {...register('message', {require:true, minLength:3})}
          as="textarea" 
          placeholder="Escribí tu consulta" 
          rows={3} 
          size="sm" 
          className="custom-control" />
          {errors.message && <p>Ingrese un Correo</p>}
        </Form.Group>

          <Button
            variant="secondary" size="lg"
            disabled={isLoading}
            type='submit'
            >
            {isLoading ? 'Enviando....' : 'Enviar'}
        
         </Button>
      </Form>
    </div>
  </div>
        
   
  )
}

export default Contacto