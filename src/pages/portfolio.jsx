import NavBar from "../components/navbar";
import "./css/portfolio.css";
import housePort from "../assets/picture/image.png";
import { useEffect, useState } from "react";
import { viridisApi } from "../api/axiosConfig";

function Portfolio() {
  const [wallet, setWallet] = useState({});
  const [trans, setTrans] = useState([]);
  const [transInfo, setTransInfo] = useState({});
  useEffect(() => {
    const getPortData = async () => {
      const walletRes = await viridisApi.get("/user/wallet");
      setWallet(walletRes.data);
      const transRes = await viridisApi.get("/user/transaction");
      setTrans(transRes.data.transactions);
      setTransInfo({
        currentPage: transRes.data.currentPage,
        totalPages: transRes.data.totalPages,
      });
    };

    getPortData();
  }, []);
  const handleClick = (pageNum) => {
    console.log("Clicked Page:", pageNum);
  };
  const renderButtons = () => {
    const currentPage = transInfo.currentPage;
    const totalPages = transInfo.totalPages;
    const buttons = [];
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;

    if(prevPage > 0) {
      buttons.push(
        <a
        key={prevPage}
        href="#"
        className="active"
        onClick={() => handleClick(prevPage)}
      >
        {prevPage}
      </a>
      )
    }

    buttons.push(
      <a
        key={currentPage}
        href="#"
        className="active"
        onClick={() => handleClick(currentPage)}
      >
        {currentPage}
      </a>
    );

    if(nextPage <= totalPages) {
      <a
        key={nextPage}
        href="#"
        className="active"
        onClick={() => handleClick(nextPage)}
      >
        {nextPage}
      </a>
    }

    return buttons;
  };
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
            {wallet.totalTokens}
          </h1>
          <div className="port-text1">
            <p1 className="port-text">tCO2eqv ถูกชดเชย</p1>
            <p1 className="port-text">
              = 40 ต้น <img src="/src/assets/picture/cuteTreeIcon.png"></img>
            </p1>
            <p1 className="port-text">Green points : points </p1>
          </div>
          <div class="history-bar">
            <div className="historyhead">
              <h1 id="History">History</h1>
              <button id="Cert-button">Certificate</button>
            </div>

            <div className="history-box">
              {trans.map((trans, index) => {
                const date = new Date(trans.purchaseDate);
                const localeDate = date.toLocaleString("th-TH");
                return (
                  <div key={index} className="historybox-inner">
                    <p className="historylist-1">{trans.amtToken} CC</p>
                    <p className="historylist-2">{localeDate}</p>
                  </div>
                );
              })}
              <div className="historybox-inner">
                <p className="historylist-1">54CC</p>
                <p className="historylist-2">14.14น. 30/7/2566</p>
              </div>
            </div>
            <div class="pagination">
              <a key="prev" href="#" onClick={() => handleClick(prevPage)}>
                &laquo;
              </a>
              {renderButtons()}
              <a key="next" href="#" onClick={() => handleClick(nextPage)}>
                &raquo;
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
