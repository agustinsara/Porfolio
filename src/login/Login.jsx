import React from 'react';
import Form from 'react-bootstrap/Form';
import '../styles/login.css'; // Asegúrate de que esta ruta sea correcta
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const email = "agustindev@gmail.com";
        const password = "QuelafuerzaTeAcompañe123";

        const emailValue = e.target.elements.email.value; 
        const passValue = e.target.elements.password.value;
       
        if (emailValue === email && passValue === password) {
            setIsAuthenticated(true); 
            navigate('/abm');
        } else {
            alert("Email o contraseña incorrectos"); 
        }
    }

    return (
        <div className='login-container'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" name="password" />
                </Form.Group>
                <div className="holocron-button-container">
                    <button type="submit" className="holocron-login-button">
                        <span className="button-text">Login</span>
                    </button>
                </div>
            </Form>
        </div>
    );
}

export default Login;
