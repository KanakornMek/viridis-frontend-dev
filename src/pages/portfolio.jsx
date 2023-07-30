import NavBar from "../components/navbar";
import "./css/portfolio.css";
import housePort from "../assets/picture/image.png"

function Portfolio() {
  return (
    <>
      <NavBar></NavBar>
      <div className="portfolio">
        <div className="Leftzone-portfolio">
            <img
              id="user-housePort"
              className="User-pro"
              src={housePort}
              alt=""
            />
        </div>
        <div className="Rightzone-portfolio">
          <h1 className="port-text" id="CO2-num">
            50
          </h1>
          <div className="port-text1">
            <p1 className="port-text">tCO2eqv ถูกชดเชย</p1>
            <p1 className="port-text">= 40 ต้น <img src="/src/assets/picture/cuteTreeIcon.png"></img></p1>
            <p1 className="port-text">Green points : 2,000 points </p1>
          </div>
          <div class="history-bar">
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
            </div>
            <div class="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a class="active" href="#">2</a>
                <a href="#">3</a>
                <a href="#">&raquo;</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
