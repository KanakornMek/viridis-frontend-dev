import { Link } from 'react-router-dom'
import './css/buying.css'

function Buyingpage(){
    return(
        <div className='buy-page'>
            <div className="left-side-buy"></div>
            <div className="right-side-buy">
                <div className="slip-buying">
                    <h1>viridis.</h1>
                    <h2>carbon offset service</h2>
                    <p>**********************************************</p>
                    <h3>How many</h3>
                    <p>**********************************************</p>
                    <div className="value-box">
                        <input placeholder='200' type= 'text' className='value-holder'></input>
                        <div className="value-right">
                            <div className="divider"></div>
                            <p>THB</p>
                        </div>
                    </div>
                    <p>**********************************************</p>
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
    )
}

export default Buyingpage;