import { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import './css/qrpage.css'
import { viridisApi } from "../api/axiosConfig";


function QrProfile(){
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        viridisApi.get("/service/account")
            .then((res) => {
                setName(res.data.name);
                setType(res.data.type)
            }).catch((err) => {
                console.log(err);
            })
    },[])
    return(
        <div className="qrPage">
            <NavBar></NavBar>
            <div className="qrPage-container">
                <div className="left-side-qr-profile-information">
                    <div className="business-name-section">
                        <p>Name</p>
                        <h1>{name}</h1>
                    </div>
                    <div className="business-type-section">
                        <p>Type</p>
                        <h1>{type}</h1>
                    </div>
                    <div className="business-activity-carbonemission">
                        <p>Average CO2 emission</p>
                        <h1>30kg CO2 eqv</h1>
                    </div>
                </div>
                <div className="right-side-qr-profile-qrcode">
                    <div className="qr-section">
                        <img src="/src/assets/picture/qrCodeMock.png" className="qr"></img>
                    </div>
                    <button className="download-qr-button">Download QR</button>
                </div>
            </div>
        </div>
    )
}

export default QrProfile;