import { useState } from 'react';
import { Link } from 'react-router-dom'
import './css/loginpage.css';


function Loginpage(){
    return(
        <div className="login-page">
            <div className="left-side-login">
                <div className="viridis-logo">viridis.</div>
                <div className="login-form-container">
                    <h1>Login</h1>
                    <p>or <Link to={`/register`} className='register-link'>Register</Link></p>
                    <input type='text' className="login-form" placeholder='Email'></input>
                    <input type='password' className="login-form" placeholder='Password'></input>
                    <button className='login-button'>Login</button>
                </div>
            </div>
            <div className="right-side-login">
                <img src="/src/assets/picture/image.png"></img>
            </div>
        </div>
    )
}



export default Loginpage;