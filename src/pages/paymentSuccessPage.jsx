import React, { useEffect, useState } from "react";
import { viridisApi } from "../api/axiosConfig";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./css/paymentSuccessPage.css";

const PaymentSuccessfulPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [imageUrl, setImageUrl] = useState("");

  const handleGenerateSlip = async () => {
    try {
      const response = await viridisApi.get("/slip", {
        responseType: "arraybuffer",
        params: {
          slipId: searchParams.get("slipId"),
        },
      });
      const blob = new Blob([response.data], { type: "image/png" });
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } catch (error) {
      console.error("Error fetching receipt slip:", error);
    }
  };
  const handleDownloadSlip = () => {
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = "receipt_slip.png";
    a.click();
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  useEffect(() => {
    handleGenerateSlip();
  }, []);

  return (
    <div className="payment-success">
      {imageUrl && <img src={imageUrl} alt="Receipt Slip" />}
      {imageUrl && <button onClick={handleNavigateHome}>Home</button>}
      {imageUrl && <button onClick={handleDownloadSlip}>Download Slip</button>}
    </div>
  );
};

export default PaymentSuccessfulPage;
