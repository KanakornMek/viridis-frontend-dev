import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import './css/loginpage.css';
import { AuthContext } from '../contexts/AuthContext';

function Loginpage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    return(
        <div className="login-page">
            <div className="left-side-login">
                <div className="viridis-logo">viridis.</div>
                <form 
                    onSubmit={async (e) => {
                        e.preventDefault();
                        await login(email, password)

                        window.location = '/'
                    }}
                    className="login-form-container"
                >
                    <h1>Login</h1>
                    <p>or <Link to={`/register`} className='register-link'>Register</Link></p>
                    <input onChange={(e) => setEmail(e.target.value)} type='text' className="login-form" placeholder='Email'></input>
                    <input onChange={(e) => setPassword(e.target.value)} type='password' className="login-form" placeholder='Password'></input>
                    <button type="submit" className='login-button'>Login</button>
                </form>
            </div>
            <div className="right-side-login">
                <img src="/src/assets/picture/image.png"></img>
            </div>
        </div>
    )
}



export default Loginpage;