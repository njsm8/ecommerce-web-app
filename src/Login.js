import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
            <img src='https:/upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='amazon-logo' />
            </Link>

            <div className="login__container">
            <h1>Sign-in</h1>
        </div>          
    </div>

        
    )
}

export default Login
