import { useState } from 'react';
import { Link } from 'react-router-dom'

import Login from '../components/login';
import Register from '../components/register';

function Loginpage(){
    const [currForm, setCurrForm] = useState('login');
    return(
        <div>
            <NavBar/>
            {currForm === "login" ? <Login setForm={setCurrForm} /> : <Register setForm={setCurrForm} /> }
        </div>
        
    )
}



export default Loginpage;