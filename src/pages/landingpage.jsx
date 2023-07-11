import NavBar from "../components/navbar";
import './css/landingpage.css'


function HomePage(){
    return(
        <div style={{width: '100vw'}}>
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
                    <div className="leftCard">
                        
                    </div>
                    <div className="rightCard">

                    </div>
                </div>
            </div>
            <div className="whatWeDo-section">
                <div className="whatWeDo-box">
                    <p>What are we do?</p>
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                </div>
            </div>
            <div className="ourMission-section">

            </div>
            <div className="ourTeam-section">

            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default HomePage;