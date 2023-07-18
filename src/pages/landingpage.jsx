import NavBar from "../components/navbar";
import './css/landingpage.css'




function HomePage(){
    return(
        <div>
            <NavBar></NavBar>
            <div className="hero-section">
                <div className="hero-box">
                    <p>"Embrace a Greener Future” Offset Your Carbon Footprint Today.</p>
                    <button>Buy now</button>
                </div>
            </div>
            <div className="knowMore-section">
                <div className="knowMore-head">Know more about carbon.</div>
                <div className="cardComponent">
                    <div className="leftCard"  onClick={() => alert('Going to Carbon footprint')}>
                        <div className="leftCard-img"></div>
                        <div className="Card-content">
                            <h3>Carbon Footprint</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="rightCard"onClick={() => alert('Going to Carbon credit')}>
                        <div className="rightCard-img"></div>
                        <div className="Card-content">
                            <h3>Carbon credit</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whatWeDo-section">
                <div className="whatWeDo-box">
                    <h3>What are we do?</h3>
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                </div>
            </div>
            {/* <div className="ourMission-section">

            </div>
            <div className="ourTeam-section">

            </div>
            <div className="footer">

            </div> */}
        </div>
    )
}

export default HomePage;