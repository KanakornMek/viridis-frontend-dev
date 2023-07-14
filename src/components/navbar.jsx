import './navbar.css'
import { Link, useNavigate, redirect } from 'react-router-dom'
import { useEffect, useState } from 'react';


function NavBar(){
    const [isGoingToLogin,setisGoingToLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(() =>{
        console.log(isGoingToLogin)
        if(isGoingToLogin){
            navigate('/login');
        }
    },)

    return(
        <div className='navBar'>
            <div className='leftSideNav'>
                <a>viridis.</a>
            </div>
            <div className='rightSideNav'>
                <ul className='innerRightSideNav'>
                    <li><Link to={`/`} className='home'>Home</Link></li>
                    <li><Link to={`/portfolio`} className='portfolio'>Portfolio</Link></li>
                    <li><Link to={`/services`} className='services'>Services</Link></li>
                    <li><Link to={`/profile`} className='profile'><img src="https://www.the-sun.com/wp-content/uploads/sites/6/2022/08/OP-OMF-TELETUBBY-SUN.jpg?strip=all&quality=100&w=1620&h=1080&crop=1"></img></Link></li>
                </ul>
                <div className='changableNavComponent'>
                    <button onClick={() => setisGoingToLogin(true)}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;