import NavBar from "../components/navbar";
import { Modal, Box } from "@mui/material";
import "./css/portfolio.css";
import { viridisApi } from "../api/axiosConfig";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import Model from "../components/3DModel";
import { useState, useEffect } from "react";
import treeIcon from "../assets/picture/cuteTreeIcon.png";
function Portfolio() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const [size, setsize] = useState(window.innerWidth);

  //choose the screen size
  const handleResize = () => {
    setsize(window.innerWidth);
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
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
  const handleClick = async (pageNum) => {
    const transRes = await viridisApi.get("/user/transaction", {
      params: {
        page: pageNum,
      },
    });
    setTrans(transRes.data.transactions);
    setTransInfo({
      currentPage: transRes.data.currentPage,
      totalPages: transRes.data.totalPages,
    });
  };
  const renderButtons = () => {
    const currentPage = transInfo.currentPage;
    const totalPages = transInfo.totalPages;
    const buttons = [];
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;

    if (prevPage > 0) {
      buttons.push(
        <a key={prevPage} href="#" onClick={() => handleClick(prevPage)}>
          {prevPage}
        </a>
      );
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

    if (nextPage <= totalPages) {
      buttons.push(
        <a key={nextPage} href="#" onClick={() => handleClick(nextPage)}>
          {nextPage}
        </a>
      );
    }

    return buttons;
  };

  const [modalPage, setModalPage] = useState("0");
  const [certInfo, setCertInfo] = useState({});
  const handleCertInfo = async (tran, localeDate) => {
    setCertInfo({
      ...tran,
      localeDate
    })
    setModalPage("1");
  };
  return (
    <>
      <NavBar></NavBar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: "clamp(200px, 90vw, 400px)",
            fontFamily: "Kanit",
          }}
        >
          {modalPage === "0" && (
            <>
              <div className="modal-header">
                <h2 id="child-modal-title">ขอ certificate</h2>
                <i className="bi bi-x" onClick={handleClose}></i>
              </div>
              <div className="cert-history-container">
                {trans.map((trans, index) => {
                  const date = new Date(trans.purchaseDate);
                  const localeDate = date.toLocaleString("th-TH");
                  return (
                    <div
                      key={index}
                      className="cert-history-list"
                      onClick={() => handleCertInfo(trans, localeDate)}
                    >
                      <div>
                        <p>{trans.amtToken} CC</p>
                        <p>{localeDate}</p>
                      </div>
                      <i className="bi bi-chevron-right"></i>
                    </div>
                  );
                })}
              </div>
            </>
          )}
          {modalPage === "1" && (
            <>
            <i className="bi bi-chevron-left" onClick={() => setModalPage("0")}></i>
            <div className="cert-wrapper">
              <div className="cert-info-container">
                <p style={{color: 'gray'}}>{certInfo.localeDate}</p>
                <div className="cert-info">
                  <p>จำนวน CC</p>
                  <p>{certInfo.amtToken} kgCO2</p>
                </div>
                <div className="cert-info">
                  <p>ราคา CC</p>
                  <p>{certInfo.tokenPrice} บาท/kgCO2</p>
                </div>
                <div className="cert-info">
                  <p>ราคารวม</p>
                  <p>{certInfo.totalPrice} บาท</p>
                </div>
              </div>
              <button onClick={() => {
                viridisApi.post('/user/generate-cert', {
                  transactionId: certInfo._id
                }, {
                  responseType: 'blob'
                }).then((res) => {
                  window.open(URL.createObjectURL(res.data))
                })
              }}>Generate Certificate</button>
            </div>
            </>

          )

          }
        </Box>
      </Modal>
      <div className="portfolio">
        <div className="Leftzone-portfolio">
          <Canvas style={{ width: "100vw" }}>
            <OrthographicCamera
              makeDefault
              position={[6, 1, 6]}
              zoom={size / 40 + 10}
            ></OrthographicCamera>
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
              = {Math.floor((wallet.totalTokens * 50) / 12)} ต้น{" "}
              <img src={treeIcon}></img>
            </p1>
            <p1 className="port-text">
              Green points : {wallet.totalPoints} points{" "}
            </p1>
          </div>
          <div class="history-bar">
            <div className="historyhead">
              <h1 id="History">History</h1>
              <button onClick={handleOpen} id="Cert-button">
                Certificate
              </button>
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
