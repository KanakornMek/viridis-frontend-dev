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
    }]

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
        <div className="activitycalc">
                <div className="activitycalc-container">
                    <h1>What activity you want to offset</h1>
                    <button className='dropdown-btn'><span className='activity-icon'>{activity[0].icon}</span>{activity[0].name}</button>
                    <h1>How many {activity[0].unit}</h1>
                    <div className="activity-holder">
                        <input placeholder='200' className='amount-activity-holder' ></input>
                        <div className="activity-unit">
                            <p>{activity[0].unit}</p>
                        </div>
                    </div>

                    <button className='Next-btn'>Next</button>
                </div>
        </div>
    </>
    )
}

export default Buyingpage;