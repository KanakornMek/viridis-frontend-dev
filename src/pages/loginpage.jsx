import { useState } from 'react';
import { Link } from 'react-router-dom'

import Login from '../components/login';
import Register from '../components/register';
import NavBar from '../components/navbar';
import './css/LoginRe.css';


function Loginpage(){
    const [currForm, setCurrForm] = useState('login');
    return(
        <>
            <div className='back'>
                &laquo;
            </div>
        
            <div>
                {currForm === "login" ? <Login setForm={setCurrForm} /> : <Register setForm={setCurrForm} /> }
            </div>
        </>
    )
}



export default Loginpage;