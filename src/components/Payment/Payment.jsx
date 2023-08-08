import { useState } from "react";
import "./Payment.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CreditCardForm from "./components/CreditCardForm";
import BankingOptions from "./components/BankingOptions";
import PromptPay from "./components/PromptPay";


function Card({ type, typeclass, selected, setSelected, index }) {
    return (
        <div
            className={`card ${selected ? "selected" : ""}`}
            onClick={() => setSelected(index)}
        >
            <i className={"bi " + typeclass} />
            <p>{type}</p>
        </div>
    );
}

function ChoosePayment(props) {
    return (
        <>
            <h3>เลือกช่องทางการชำระเงิน</h3>
            <div className="slider">
                {props.payment_methods.map((card, index) => (
                    <Card
                        key={index}
                        type={card.type}
                        typeclass={card.typeclass}
                        selected={props.selected === index ? true : false}
                        setSelected={props.setSelected}
                        index={index}
                    />
                ))}
            </div>
            <div className="payment-divider" />
            <div className="payment-method-options">
                {props.payment_method_options()}
            </div>
        </>
    );
}

function Payment({ quantity, price, isQr, qrPhone }) {
    const [selected, setSelected] = useState(null);

    const payment_methods = [
        { type: "โมบายแบงก์กิ้ง", typeclass: "bi-bank2" },
        { type: "พร้อมเพย์", typeclass: "bi-qr-code" },
    ];
    const payment_method_options = () => {
        switch (selected) {
            case 0:
                return <BankingOptions qrPhone={qrPhone} isQr={isQr} price={price} quantity={quantity} />;
            case 1:
                return <PromptPay qrPhone={qrPhone} isQr={isQr} price={price} quantity={quantity} />;
            default:
                return null;
        }
    };
    return (
        <div className="payment-container">
            <h1>viridis.</h1>
            <div className="payment-overview">
                <p>{quantity} x viridis token</p>
                <b>{price} Baht</b>
            </div>
            <div className="payment-divider" />

            <div className="payment-options">
                <ChoosePayment
                    selected={selected}
                    setSelected={setSelected}
                    payment_methods={payment_methods}
                    payment_method_options={payment_method_options}
                />
            </div>
        </div>
    );
}

export default Payment;