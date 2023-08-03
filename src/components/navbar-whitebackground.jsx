import '../components/navbar-whitebackground.css'
import { Link, useNavigate, redirect } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import  useScreenSize from './screenSizeHook'
import { AuthContext } from '../contexts/AuthContext';
import profilePic from '../assets/picture/profilePic.png'

function NavBarwhitebackground(){
    const {auth, isAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate();
    const [isNavOn, setisNavOn] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);


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
        <div className='navBar' id='navBar'>
            <div className='leftSideNav1'>
                <a>viridis.</a>
            </div>
            <div className="blackdrop" id='blackdrop'></div>
            <div className='rightSideNav'>
                <ul className='innerRightSideNav'>
                    <li><Link to={`/`} className='home1'>Home</Link></li>
                    <li><Link to={`/portfolio`} className='portfolio1'>Portfolio</Link></li>
                    <li><Link to={`/services`} className='services1'>Services</Link></li>
                    {auth && <li><Link to={`/profile`} className='profile'><img src={profilePic}></img></Link></li>}
                </ul>
                {!auth && <div className='changableNavComponent'>
                    <button onClick={() => navigate('/login')}>Login</button>
                </div>}
            </div>
            <div class="hammy" id='hammy' onClick={() => setisNavOn(!isNavOn)}>
                <div class="bar01"></div>
                <div class="bar02"></div>
                <div class="bar03"></div>
            </div>
            <div className="nav-on-screen" id='nav-on-screen'>
                <ul className='navTextOnScreen'>
                    <li><Link to={`/`} className='home'>Home</Link></li>
                    <li><Link to={`/portfolio`} className='portfolio'>Portfolio</Link></li>
                    <li><Link to={`/services`} className='services'>Services</Link></li>
                    {auth && <li><Link to={`/profile`} className='portfolio'>Profile</Link></li>}
                    {!auth && 
                    <li className='buttonOnScreen'>
                        <button 
                            onClick={() => navigate("/login")}
                        >Login</button>
                    </li>
                    }
                </ul>
                
                
            </div>
        </div>
    )
}

export default NavBarwhitebackground;