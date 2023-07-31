import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './css/genqrpage.css'
import { viridisApi } from '../api/axiosConfig';

function GenQrPage(){
    const navigate = useNavigate();
    useEffect(() => {
        viridisApi.get('/service')
            .then((res) => {
                if(res.data.service) {
                    navigate('/qr-profile')
                }
            }).catch(err => {
                console.log(err);
            })
    },[]);


    const [businessName, setBusinessName] = useState('');
    const [businessType, setBusinessType] = useState('');
    const [bizTypeSelector,setbizTypeSelector] = useState(0);
    useEffect(() => {
        setBusinessType(bizType[bizTypeSelector].type);
    },[bizTypeSelector])
    const bizType = [
        {
            type: 'Retaurant',
            icon: '🍛',
        },
        {
            type: 'Convinent Store',
            icon: '🛍️',
        },
        {
            type: 'Manufacturer',
            icon: '⚙️',
        }
    ]
    return(
        <div className='gen-qr-screen'>
            <div className="leftside-banner"></div>
            <div className="rightside-form">
                <div className="rightside-container">
                    <h1>Generate Qr</h1>
                    <h2>Let your customer offset carbon footprint with ease via qrcode</h2>
                    <label>Business name</label>
                    <input onChange={(e) => setBusinessName(e.target.value)} className='biz-name-input'></input>
                    <label>Business type</label>
                    <div className='biz-type-dropdown'>
                        <button className='biz-type-dropdown-btn'>{bizType[bizTypeSelector].icon}     {bizType[bizTypeSelector].type}</button>
                        <div className="biz-type-dropdown-content">
                            <a onClick={()=>setbizTypeSelector(0)}>{bizType[0].icon}   Restaurant</a>
                            <a onClick={()=>setbizTypeSelector(1)}>{bizType[1].icon}   Convenient Store</a>
                            <a onClick={()=>setbizTypeSelector(2)}>{bizType[2].icon}   Manufacturer</a>
                        </div>
                    </div>
                    <button 
                        className='genqr-btn'
                        onClick={() => {
                            viridisApi.post('/service/business-register', {
                                businessName,
                                businessType
                            }).then(() => {
                                navigate('/qr-profile')
                            })
                        }}
                    >Create Qr</button>
                </div>
            </div>
            <div className="greenbanner"></div>
        </div>
    )
}

export default GenQrPage;