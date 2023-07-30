import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './css/registerpage.css'

function Registerpage(){
    const[customerType,setcustomerType] = useState('Personal');
    const [pageStage,setpageStage] = useState(0);
    const [registeringName,setregisteringName] = useState();
    const [namePlaceholderHandle,setnamePlaceholderHandle] = useState('Name');
    const [idPlaceholderHandle,setidPlaceholderHandle] = useState('ID');


    useEffect(() =>{
        if(customerType === 'SME'){
            setnamePlaceholderHandle('Business Name');
            setidPlaceholderHandle('Tax Payer ID');
        }else if(customerType === 'NGO'){
            setnamePlaceholderHandle('Organization ID');
            setidPlaceholderHandle('Organization ID');
        }else{
            setnamePlaceholderHandle('Name');
            setidPlaceholderHandle('ID');
        }
    })

    useEffect(() =>{
        if(pageStage === 1){
            document.getElementById('hiddenRegisterFormContainer').className = 'hidden-register-form-container-on';
            document.getElementById('nextButtonRegister').className = 'next-button-register-off';
            document.getElementById('registerButtonRegister').className = 'register-button-register';
        }else if(pageStage === 0 || pageStage != 1){
            setpageStage(0)
            document.getElementById('hiddenRegisterFormContainer').className = 'hidden-register-form-container';
            document.getElementById('nextButtonRegister').className = 'next-button-register'
            document.getElementById('registerButtonRegister').className = 'register-button-register-off';
        }
    })

    return(
        <div className="register-page">
            <div className="left-side-register"></div>
            <div className="right-side-register">
                <div className="viridis-logo">viridis.</div>
                <div className="register-form-container">
                    <h1>Register</h1>
                    <p>or <Link to={`/login`} className='login-link'>Login</Link></p>
                    <input type='text' className="register-form" placeholder={namePlaceholderHandle} onChange={(e)=>{setregisteringName(e.target.value);}} value={registeringName}></input>
                    <div className="hidden-register-form-container" id="hiddenRegisterFormContainer">
                        <input type='text' className="register-form" placeholder='Email'></input>
                        <input type='text' className="register-form" placeholder='Password'></input>
                        <input type='password' className="register-form" placeholder='Confirm Password'></input>
                        <input type='number' className="register-form" placeholder='Mobile No.'></input>
                        <input type='number' className="register-form" placeholder={idPlaceholderHandle}></input>
                        <div className="account-type-dropdown">
                            <button className="account-type-button">{customerType}</button>
                            <div className="account-type-dropdown-content">
                                <a onClick={()=>setcustomerType('Personal')}>Personal</a>
                                <a onClick={()=>setcustomerType('SME')}>SME</a>
                                <a onClick={()=>setcustomerType('NGO')}>NGO</a>
                            </div>
                        </div>
                    </div>
                    <button className="next-button-register" onClick={()=>setpageStage(1)} id="nextButtonRegister">Next</button>
                    <button className="register-button-register" onClick={()=>{}} id="registerButtonRegister">Register</button>
                </div>
            </div>
            <div className="left-side-green-banner"></div>
        </div>
    )
}

export default Registerpage