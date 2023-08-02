import { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import './css/qrpage.css'
import { viridisApi } from "../api/axiosConfig";


function QrProfile(){
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [qr, setQR] = useState(null);
    const [isqrorlist, setisqrorlist] = useState('qr');

    function isqrorlisthandle(){
        if(isqrorlist === 'qr'){
            setisqrorlist('list')
        }else if(isqrorlist === 'list'){
            setisqrorlist('qr');
        }else{
            setisqrorlist('qr');
        }
    }
    useEffect(() => {
        viridisApi.get("/service/account")
            .then((res) => {
                setName(res.data.name);
                setType(res.data.type)
            }).catch((err) => {
                console.log(err);
            })
        viridisApi.post('/service/generateQR')
            .then((res) => {
                setQR(res.data.qrData);
            }).catch((err) => {
                console.log(err);
            })
    },[])

    useEffect(()=>{
        if(isqrorlist === 'qr'){
            document.getElementById('qrButt').className = "qr-butt-on";
            document.getElementById('listButt').className = "list-butt";

            document.getElementById('qrSectionHideHandle').className = "qr-section-hide-handle-on";
            document.getElementById('customerOffsetListSection').className = "customer-offset-list-section";
        }else if(isqrorlist === 'list'){
            document.getElementById('qrButt').className = "qr-butt";
            document.getElementById('listButt').className = "list-butt-on";

            document.getElementById('qrSectionHideHandle').className = "qr-section-hide-handle";
            document.getElementById('customerOffsetListSection').className = "customer-offset-list-section-on";
        }
    })
    return(
        <div className="qrPage">
            <NavBar></NavBar>
            <div className="qrPage-container">
                <div className="left-side-qr-profile-information">
                    <div className="business-name-section">
                        <p>Name</p>
                        {/* <h1>{name}</h1> */}
                        <h1>Abraham licoln</h1>
                    </div>
                    <div className="business-type-section">
                        <p>Type</p>
                        {/* <h1>{type}</h1> */}
                        <h1>Governing</h1>
                    </div>
                    <div className="business-activity-carbonemission">
                        <p>Average CO2 emission</p>
                        <h1>30kg CO2 eqv</h1>
                    </div>
                </div>
                <div className="right-side-qr-profile-qrcode">
                    <button className="toggle-qr-offset" onClick={isqrorlisthandle}>
                        <div className="qr-butt" id="qrButt">QR</div>
                        <div className="list-butt" id="listButt">offset</div>
                    </button>
                    <div className="qr-section-hide-handle-" id="qrSectionHideHandle">
                        <div className="qr-section">
                            <img src={qr} className="qr"></img>
                        </div>
                        <button className="download-qr-button">Download QR</button>
                    </div>
                    
                    <div className="customer-offset-list-section" id="customerOffsetListSection">
                        <div className="total-customer-offset-container">
                            <h1>50</h1>
                            <p>tCO2eqv have been offset by customer</p>
                        </div>
                        <div className="customer-offset-list-container" >
                            <h1>Offset by customer</h1>
                            <div className="customer-offset-list-box">
                                <div className="customer-offset-list-head">
                                    <h2>Transaction Id.</h2>
                                    <h2>Amount CC</h2>
                                </div>
                                <div className="customer-offset-box">
                                    <h2>029384092384093284</h2>
                                    <h2>80 tCO2eqv</h2>
                                </div>
                                <div className="customer-offset-box">
                                    <h2>029384092384093284</h2>
                                    <h2>80 tCO2eqv</h2>
                                </div>
                                <div className="customer-offset-box">
                                    <h2>029384092384093284</h2>
                                    <h2>80 tCO2eqv</h2>
                                </div>
                                <div className="customer-offset-box">
                                    <h2>029384092384093284</h2>
                                    <h2>80 tCO2eqv</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QrProfile;