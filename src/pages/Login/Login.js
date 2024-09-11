import React, { useState } from 'react';
import { useAuth } from '../../context/RoleContext'
import { useNavigate } from 'react-router-dom';
import '../../Styles/Auth.css';

const Login = () => {
    const { setUser } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
      if (username && password) {
        try {
          const roles = ['admin', 'employee', 'client'];
          let userFound = null;
          let userExists = false;
    
          for (const role of roles) {
            // Obtiene todos los usuarios del rol
            const response = await fetch(`http://localhost:3001/${role}`);
            const data = await response.json();

            const user = data.find(user => user.usuario === username);
         if (user) { 
            userExists = true;
           if (user.password === password) {
            userFound = {
              role,
              username: user.usuario,
              tipoCuerpo: user.tipoCuerpo || null, // Evita error si no tiene tipoCuerpo
              id: user.id
            };
             break;
            }
           }
          }
    
          if (userFound) {
            setUser({
              role: userFound.role,
              username: userFound.username,
              id: userFound.id
            });
            if (userFound.role === 'client') {
              navigate('/ClienteIndex');
            } else if (userFound.role === 'admin' || userFound.role === 'employee') {
              navigate('/adminEmpleadoIndex');
            }
          } else if (userExists) {
            setLoginError('Contraseña incorrecta.');
          } else {
            setLoginError('Usuario incorrecto.');
          }
        } catch (error) {
          console.error('Error:', error);
          setLoginError('Hubo un problema al autenticarte.');
        }
      } else {
        setLoginError('Por favor, completa todos los campos correctamente.');
      }
    };
    
    
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Login</h2>
                <form onSubmit={(e) =>{e.preventDefault(); handleLogin();}}>
                    <div className="input-group">
                        <label htmlFor="username">username</label>
                        <input 
                        type="text" 
                        id="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    </div>
                    <button type="submit" className="auth-button">Login</button>
                    {loginError && <p className="error-message">{loginError} </p>}
                </form>
                <p className="auth-switch">Don't have an account? <a href="/register">Sign up</a></p>
    </div>
  </div>
    );
};

export default Login;
