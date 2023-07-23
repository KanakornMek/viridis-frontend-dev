import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './css/buying.css'
import { clear } from 'localforage';

function Buyingpage(){
    const [swiperCounter, setswiperCounter] = useState(0);
    const activity = [{
        name: 'Commute',
        unit: 'kilometers',
        icon: '🚗',
    },{
        name: 'Meal',
        unit: 'portions',
        icon: '🍔',
    },{
        name: 'Plastic Bag',
        unit: 'bags',
        icon: '🛍️',
    }]
    const [activityCounter, setactivityCounter] =useState(0);
    const [activityCalcStage, setactivityCalcStage] = useState(0);
    const [amountToBuy, setamountToBuy] = useState();

    function activityCalcStageHandle(){
        if(activityCalcStage < 2 && activityCalcStage >= 0){
            setactivityCalcStage(activityCalcStage + 1);
        }else{
            setactivityCalcStage(0);
        }
    }

    useEffect(() => {
        if(activityCalcStage === 0){
            document.getElementById('activityCalc').className = 'activity-calc-on';
            document.getElementById('nextComponent').className = 'next-component-off';
        }
        else if(activityCalcStage === 1){
            document.getElementById('activityCalc').className = 'activity-calc-on';
            document.getElementById('nextComponent').className = 'next-component-on';
        }else if(activityCalcStage === 2){
            document.getElementById('activityCalc').className = 'activity-calc-off';
            document.getElementById('nextComponent').className = 'next-component-off';
        }else{
            setactivityCalcStage(0);
        }
    })



    useEffect(() => {
        const interval = setInterval(() =>{

            if(swiperCounter >=2){
                setswiperCounter(0);
            }else{
                setswiperCounter(swiperCounter + 1);
            }
            console.log(swiperCounter);
        },2000);

        return () => {
            clearInterval(interval);
        }
    })

    useEffect(() => {
        if(swiperCounter === 0){
            document.getElementById('swiper1').className = 'left-side-container-in';
            document.getElementById('swiper2').className = 'left-side-container';
            document.getElementById('swiper3').className = 'left-side-container-out';
        }else if(swiperCounter === 1){
            document.getElementById('swiper1').className = 'left-side-container-out';
            document.getElementById('swiper2').className = 'left-side-container-in';
            document.getElementById('swiper3').className = 'left-side-container';
        }else if(swiperCounter === 2){
            document.getElementById('swiper1').className = 'left-side-container';
            document.getElementById('swiper2').className = 'left-side-container-out';
            document.getElementById('swiper3').className = 'left-side-container-in';
        }else{
            setswiperCounter(0);
        }
    })
    return(
    <>
        <div className='buy-page'>
            <div className="left-side-buy">
                <div className="left-side-container"id='swiper1'>
                    <h1>Equivalent to</h1>
                    <img src='/src/assets/picture/Trees.png'></img>
                    <h1>planting</h1>
                    <h1><span>10</span> Trees</h1>
                </div>
                <div className="left-side-container"id='swiper2'>
                    <h1>Equivalent to</h1>
                    <img src='/src/assets/picture/Trees.png'></img>
                    <h1>planting</h1>
                    <h1><span>20</span> Trees</h1>
                </div>
                <div className="left-side-container"id='swiper3'>
                    <h1>Equivalent to</h1>
                    <img src='/src/assets/picture/Trees.png'></img>
                    <h1>planting</h1>
                    <h1><span>30</span> Trees</h1>
                </div>
            </div>
            <div className="right-side-buy">
                <div className="slip-buying">
                    <h1>viridis.</h1>
                    <h2>carbon offset service</h2>
                    <p>********************************************************</p>
                    <h3>How many</h3>
                    <p>********************************************************</p>
                    <div className="value-box">
                        <input placeholder='200' type= 'text' className='value-holder'></input>
                        <div className="value-right">
                            <div className="divider"></div>
                            <p>THB</p>
                        </div>
                    </div>
                    <p>********************************************************</p>
                    <div className="purchase-detail-section">
                        <div className="detail-line">
                            <p>Carbon offset</p>
                            <p>2,000 kgCO2e</p>
                        </div>
                        <div className="detail-line">
                            <p>Points get</p>
                            <p>2,000 points</p>
                        </div>
                        <div className="detail-line">
                            <p>Price</p>
                            <p>80 baht</p>
                        </div>
                    </div>
                    <button className='purchase-button'>Buy</button>
                </div>
            </div>
        </div>
        <div className="activity-calc-on" id='activityCalc'>
                <div className="activitycalc-container">
                    <h1>What activity you want to offset</h1>
                    <div className="activity-dropdown">
                        <button className='dropdown-btn'><span className='activity-icon'>{activity[activityCounter].icon}</span>{activity[activityCounter].name}</button>
                        <div className="activity-dropdown-content">
                            <a onClick={() => {setactivityCounter(0)}}><span className='activity-icon'>{activity[0].icon}</span>{activity[0].name}</a>
                            <a onClick={() => {setactivityCounter(1)}}><span className='activity-icon'>{activity[1].icon}</span>{activity[1].name}</a>
                            <a onClick={() => {setactivityCounter(2)}}><span className='activity-icon'>{activity[2].icon}</span>{activity[2].name}</a>
                        </div>
                    </div>
                    <div className="next-component-on" id='nextComponent'>
                        <h1>How many {activity[activityCounter].unit}</h1>
                        <div className="activity-holder">
                            <input placeholder='200' className='amount-activity-holder' ></input>
                            <div className="activity-unit">
                                <p>{activity[activityCounter].unit}</p>
                            </div>
                        </div>
                    </div>
                    

                    <button className='Next-btn' onClick={activityCalcStageHandle}>Next</button>
                </div>
        </div>
    </>
    )
}

export default Buyingpage;