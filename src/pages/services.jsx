import { useEffect, useState } from "react";
import NavBarwhitebackground from "../components/navbar-whitebackground";
import './css/services.css'
import { useNavigate } from "react-router-dom";

function Services(){
    const [isGoingToGenQR, setisGoingToGenQR] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        if(isGoingToGenQR){
            navigate('/generate-qr');
        }
    })
    return(
        <div>
            <NavBarwhitebackground></NavBarwhitebackground>
            <div className="service-container">
                <div className="leftside-service">
                    <div className="text-container">
                        <h1>Let your customer easily offset the carbon footprint</h1>
                    </div>
                    <button className="actnow-button" onClick={()=> setisGoingToGenQR(true)}><span>ACT NOW</span></button>
                </div>
                <div className="rightside-service"></div>
            </div>

        </div>
    )
}

export default Services;