import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './css/buying.css'
import { clear } from 'localforage';
import { viridisApi } from '../api/axiosConfig';
import Payment from '../components/Payment/Payment';

function Buyingpage(){
    const [swiperCounter, setswiperCounter] = useState(0);
    const [page, setPage] = useState('1');

    const activity = [{
        name: 'Commute',
        unit: 'kilometers',
        icon: '🚗',
        exampleamount: 100,
        ratioprice: 0.4,
        ratiocarbon: 0.2,
        image: '/src/assets/picture/car.png',
    },{
        name: 'Meal',
        unit: 'servings',
        icon: '🍔',
        exampleamount: 2,
        ratioprice: 20,
        ratiocarbon: 10,
        image: '/src/assets/picture/hamburger.png',
    },{
        name: 'Plastic Bag',
        unit: 'bags',
        icon: '🛍️',
        exampleamount: 8,
        ratioprice: 4,
        ratiocarbon: 2,
        image: '/src/assets/picture/shoppingBag.png',
    }]
    const [activityCounter, setactivityCounter] =useState(0);
    const [activityCalcStage, setactivityCalcStage] = useState(0);
    const [amountToBuy, setamountToBuy] = useState(0);
    const [price, setprice] = useState(0);


    function activityCalcStageHandle(){
        if(activityCalcStage < 2 && activityCalcStage >= 0){
            setactivityCalcStage(activityCalcStage + 1);
        }else{
            setactivityCalcStage(0);
        }
        // setprice(amountToBuy * activity[activityCounter].price);
        console.log(price);
        console.log(amountToBuy);
        console.log(activity[activityCounter].ratioprice);
        console.log(amountToBuy * activity[activityCounter].ratioprice);
    }
    function amountSetting(){
        var temp = amountToBuy * activity[activityCounter].ratioprice;
        setprice(Math.round(temp * 10) / 10);
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
        },4000);

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
                    <h1>Equal to</h1>
                    <img src={activity[activityCounter].image}></img>
                    <h1>{activity[activityCounter].name}</h1>
                    <h1><span>{amountToBuy}</span> {activity[activityCounter].unit}</h1>
                </div>
                <div className="left-side-container"id='swiper2'>
                    <h1>Equivalent to</h1>
                    <img src='/src/assets/picture/Trees.png'></img>
                    <h1>planting</h1>
                    <h1><span>{Math.round(((price/activity[activityCounter].ratioprice) * activity[activityCounter].ratiocarbon) * 0.04) * 10 / 10}</span> Trees</h1>
                </div>
                <div className="left-side-container"id='swiper3'>
                    <h1>Equivalent to</h1>
                    <img src='/src/assets/picture/solarPanel.png'></img>
                    <h1>Install</h1>
                    <h1><span>{Math.round(((price/activity[activityCounter].ratioprice) * activity[activityCounter].ratiocarbon/650) * 10) / 10}</span> Solar Panel</h1>
                </div>
            </div>
            <div className="right-side-buy">
                <div className="slip-buying">
                    {page === '1' && (
                        <>
                        <h1>viridis.</h1>
                        <h2>carbon offset service</h2>
                        <p>***************************************************</p>
                        <h3>How many</h3>
                        <p>***************************************************</p>
                        <div className="value-box">
                            <input placeholder='-- --' type= 'number' className='value-holder' id='valueHolder' onChange={(e)=>{setprice(e.target.value);}} value={price}></input>
                            <div className="value-right">
                                <div className="divider"></div>
                                <p>THB</p>
                            </div>
                        </div>
                        <p>***************************************************</p>
                        <div className="purchase-detail-section">
                            <div className="detail-line">
                                <p>Carbon offset</p>
                                <p>{(price/activity[activityCounter].ratioprice) * activity[activityCounter].ratiocarbon} kgCO2e</p>
                            </div>
                            <div className="detail-line">
                                <p>Points get</p>
                                <p>{(price/activity[activityCounter].ratioprice) * activity[activityCounter].ratiocarbon} points</p>
                            </div>
                            <div className="detail-line">
                                <p>Price</p>
                                <p>{price} baht</p>
                            </div>
                        </div>
                        <button className='purchase-button' onClick={() => setPage('2')}>Buy</button>
                        </>
                    )}
                    {page === '2' && (
                        <Payment price={price} quantity={amountToBuy} isQr={false} />
                    )}
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
                            <input type='number' placeholder={activity[activityCounter].exampleamount} className='amount-activity-holder' id='activityAmount' onChange={() => setamountToBuy(document.getElementById('activityAmount').value)}></input>
                            <div className="activity-unit">
                                <p>{activity[activityCounter].unit}</p>
                            </div>
                        </div>
                    </div>
                    

                    <button className='Next-btn' onClick={()=>{activityCalcStageHandle(); amountSetting();}}>Next</button>
                </div>
        </div>
    </>
    )
}

export default Buyingpage;