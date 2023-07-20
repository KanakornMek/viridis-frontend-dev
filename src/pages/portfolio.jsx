import NavBar from "../components/navbar";
import './css/portfolio.css'


function Portfolio(){
    return(
        <>
        <NavBar></NavBar>
        <div className="Portfolio">
            <div className="Leftzone-portfolio">
                    <div className="user-port">
                        <img id="user-housePort" className="User-pro" src="https://images.unsplash.com/photo-1633633292416-1bb8e7b2832b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt=""/>
                    </div>
            </div>
            <div className="Rightzone-portfolio">
                <h1 className="port-text" id="CO2-num">50</h1>
                <div className="port-text1">
                    <p1 className="port-text">tCO2eqv ถูกกำจัด</p1>
                    <p1 className="port-text">= 40 ต้น </p1>
                    <p1 className="port-text">Green points : 2,000 points </p1>
                </div>
                <nav class="history-bar">
                    <div className="historyhead">
                        <h1 id="History">History</h1>
                        <button id="Cert-button">Certificate</button>
                    </div>
                    <div className="historybox">
                        <div className="historybox-inner">
                            <p className="historylist-1">54CC</p>
                            <p className="historylist-2">14.14น. 30/7/2566</p>
                        </div>
                        <div className="historybox-inner">
                            <p className="historylist-1">54CC</p>
                            <p className="historylist-2">14.14น. 30/7/2566</p>
                        </div>
                        <div className="historybox-inner">
                            <p className="historylist-1">54CC</p>
                            <p className="historylist-2">14.14น. 30/7/2566</p>
                        </div>
                        <div className="historybox-inner">
                            <p className="historylist-1">54CC</p>
                            <p className="historylist-2">14.14น. 30/7/2566</p>
                        </div>
                        <div className="historybox-inner">
                            <p className="historylist-1">54CC</p>
                            <p className="historylist-2">14.14น. 30/7/2566</p>
                        </div>
                        <div className="historybox-inner">
                            <p className="historylist-1">54CC</p>
                            <p className="historylist-2">14.14น. 30/7/2566</p>
                        </div>
                        <div className="historybox-inner">
                            <p className="historylist-1">54CC</p>
                            <p className="historylist-2">14.14น. 30/7/2566</p>
                        </div>
                        <div className="historybox-inner">
                            <p className="historylist-1">54CC</p>
                            <p className="historylist-2">14.14น. 30/7/2566</p>
                        </div>
                        <div className="historybox-inner">
                            <p className="historylist-1">54CC</p>
                            <p className="historylist-2">14.14น. 30/7/2566</p>
                        </div>
                        <div className="historybox-inner">
                            <p className="historylist-1">54CC</p>
                            <p className="historylist-2">14.14น. 30/7/2566</p>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        </>
    )
}


export default Portfolio;