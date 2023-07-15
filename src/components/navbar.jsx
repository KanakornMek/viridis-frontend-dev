import './navbar.css'
import { Link, useNavigate, redirect } from 'react-router-dom'
import { useEffect, useState } from 'react';
import  useScreenSize from './screenSizeHook'


function NavBar(){
    const [isGoingToLogin,setisGoingToLogin] = useState(false);
    const navigate = useNavigate();
    const [isNavOn, setisNavOn] = useState(false);

    useEffect(() =>{
        console.log(isGoingToLogin)
        if(isGoingToLogin){
            navigate('/login');
        }

    },)

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
        }else{
            document.getElementById('hammy').classList.remove("change");
            document.getElementById('nav-on-screen').className = 'nav-on-screen'
            document.getElementById('blackdrop').className = 'blackdrop'
        }
    }, [isNavOn])


    return(
        <div className='navBar' id='navBar'>
            <div className='leftSideNav'>
                <a>viridis.</a>
            </div>
            <div className="blackdrop" id='blackdrop'></div>
            <div className='rightSideNav'>
                <ul className='innerRightSideNav'>
                    <li><Link to={`/`} className='home'>Home</Link></li>
                    <li><Link to={`/portfolio`} className='portfolio'>Portfolio</Link></li>
                    <li><Link to={`/services`} className='services'>Services</Link></li>
                </ul>
                <div className='changableNavComponent'>
                    <button onClick={() => setisGoingToLogin(true)}>Login</button>
                </div>
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
                    <button onClick={() => setisGoingToLogin(true)}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;