import { useState } from "react";
import qs from "qs";
import { omise, viridisApi } from "../../../api/axiosConfig";
import './PromptPay.css'

function PromptPay({ price, quantity, isQr, qrPhone, serviceId }) {
  const [qr, setQR] = useState(null);
  return (
    <div className="promptpay-container">
      {!qr ? (
        <button
          onClick={() => {
            omise
              .post(
                "/sources",
                qs.stringify({
                  amount: price * 100,
                  currency: "THB",
                  type: "promptpay",
                })
              )
              .then((res) => {
                if(isQr){
                  viridisApi
                    .post(
                      "/service/purchase",
                      {
                        amtToken: quantity,
                        tokenPrice: 2,
                        totalPrice: price,
                        phoneNumber: qrPhone,
                        sourceId: res.data.id,
                        type: "promptpay",
                        serviceId
                      },
                    )
                    .then((res) => {
                      setQR(res.data.qr_code);
                    });   
                } else {
                  viridisApi
                    .post(
                      "/token/purchase",
                      {
                        amtToken: quantity,
                        tokenPrice: 20,
                        totalPrice: price,
                        sourceId: res.data.id,
                        type: "promptpay",
                      },
                    )
                    .then((res) => {
                      setQR(res.data.qr_code);
                    });   
                }
              });
          }}
        >
          ชำระเงิน
        </button>
      ) : (
        <div className="qr-container">
          <img src={qr} width="80%" />
        </div>
      )}
    </div>
  );
}

export default PromptPay;
