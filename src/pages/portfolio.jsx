import NavBar from "../components/navbar";
import "./css/portfolio.css";
import { viridisApi } from "../api/axiosConfig";
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import Model from '../components/3DModel';
import { useState, useEffect } from "react";

function Portfolio() {
  const [size, setsize] = useState(window.innerWidth)
    
  //choose the screen size 
  const handleResize = () => {
      setsize(window.innerWidth);
  }

  // create an event listener
  useEffect(() => {
  window.addEventListener("resize", handleResize)
  })
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
          <Canvas style={{ width: '100vw'}}>
            <OrthographicCamera makeDefault position={[6, 1, 6]} zoom={(size/40) + 10}></OrthographicCamera>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Model />
          </Canvas>
        </div>
        <div className="Rightzone-portfolio">
          <h1 className="port-text" id="CO2-num">
            {wallet.totalTokens}
          </h1>
          <div className="port-text1">
            <p1 className="port-text">kgCO2eqv ถูกชดเชย</p1>
            <p1 className="port-text">
              = {Math.floor(wallet.totalTokens * 50/12)} ต้น <img src="/src/assets/picture/cuteTreeIcon.png"></img>
            </p1>
            <p1 className="port-text">Green points : {wallet.totalPoints} points </p1>
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
