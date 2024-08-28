import React from 'react';
import '../../Styles/Auth.css';

const Login = () => {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit" className="auth-button">Login</button>
                </form>
                <p className="auth-switch">Don't have an account? <a href="/register">Sign up</a></p>
            </div>
        </div>
    );
};

export default Login;
