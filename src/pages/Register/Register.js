import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../Styles/Auth.css';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            // Crea el nuevo usuario para agregarlo a db.json en la sección client
            const newUser = {
                nombre: formData.username,
                apellido: '',
                sexo: 'N/A',
                tipoCuerpo: 'N/A',
                peso: 'N/A',
                altura: 'N/A',
                usuario: formData.username,
                password: formData.password,
                
            };

            // Envía el nuevo usuario a la API local
            await axios.post('http://localhost:3001/client', newUser);

            // Redirige al formulario de inicio de sesión después del registro exitoso
            navigate('/login');
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">Register</button>
                </form>
                <p className="auth-switch">Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default Register;
