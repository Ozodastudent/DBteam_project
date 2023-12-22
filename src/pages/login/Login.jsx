import React from 'react';
import "./login.css"
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className="form-container">
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <div>

                <Link to="/register">Register?</Link>
                </div>
                <button className='btn'>Login</button>
            </form>
        </div>
    );
}

function Register() {
    return (
        <div className="form-container">
            <h2>Register</h2>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Contact Details" />
                <input type="date" placeholder="Registration Date" />
                <button className='btn'>Register</button>
            </form>
        </div>
    );
}

export { Login, Register };
