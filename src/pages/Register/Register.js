import React from 'react';
import '../../Styles/Auth.css';

const Register = () => {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Register</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit" className="auth-button">Register</button>
                </form>
                <p className="auth-switch">Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default Register;
