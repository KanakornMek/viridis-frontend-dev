import './navbar.css'
import { Link, useNavigate, redirect } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import profilePic from '../assets/picture/profilePic.png'

function NavBar({isHome}){
    const navigate = useNavigate();
    const [isNavOn, setisNavOn] = useState(false);
    const {auth, isAuthenticated } = useContext(AuthContext)


    window.addEventListener("resize", function() {
        if (window.matchMedia("(min-width: 800px)").matches) {
            document.getElementById('hammy').classList.remove("change");
            document.getElementById('nav-on-screen').className = 'nav-on-screen'
            document.getElementById('blackdrop').className = 'blackdrop'
            setisNavOn(false);
        }
      })

    useEffect(() => {
        if(isNavOn){
            document.getElementById('hammy').classList.add("change");
            document.getElementById('nav-on-screen').className += '-on'
            document.getElementById('blackdrop').className += '-on'
            document.getElementById('body').className += 'fixForHam'
        }else{
            document.getElementById('hammy').classList.remove("change");
            document.getElementById('nav-on-screen').className = 'nav-on-screen'
            document.getElementById('blackdrop').className = 'blackdrop'
            document.getElementById('body').className = ''
        }
    }, [isNavOn])


    return(
        <div className='navBar' style={{backgroundColor: isHome ? undefined : 'rgb(45, 45, 45)', width: (isHome ? undefined: 'calc(100vw - 50px)')}}>
            <div className='leftSideNav'>
                <a>viridis.</a>
            </div>
            <div className="blackdrop" id='blackdrop'></div>
            <div className='rightSideNav'>
                <ul className='innerRightSideNav'>
                    <li><Link to={`/`} className='home'>Home</Link></li>
                    <li><Link to={`/portfolio`} className='portfolio'>Portfolio</Link></li>
                    <li><Link to={`/services`} className='services'>Services</Link></li>
                    {auth && <li><Link to={`/profile`} className='profile'><img src={profilePic}></img></Link></li>}
                </ul>
                {!auth && <div className='changableNavComponent'>
                    <button onClick={() => navigate('/login')}>Login</button>
                </div>}
            </div>
            <div class="hammy" id='hammy' onClick={() => setisNavOn(!isNavOn)}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <div className="nav-on-screen" id='nav-on-screen'>
                <ul className='navTextOnScreen'>
                    <li><Link to={`/`} className='home'>Home</Link></li>
                    <li><Link to={`/portfolio`} className='portfolio'>Portfolio</Link></li>
                    <li><Link to={`/services`} className='services'>Services</Link></li>
                </ul>
                <div className='buttonOnScreen'>
                    <button onClick={() => navigate('/login')}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;