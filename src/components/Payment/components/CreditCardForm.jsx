import React, { useState } from "react";
import "./CreditCardForm.css";

const CreditCardForm = () => {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleCardNumberChange = (event) => {
    const formattedCardNumber = event.target.value
      .replace(/\D/g, "")
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();

    setCardNumber(formattedCardNumber);
  };

  const handleExpiryDateChange = (event) => {
    const formattedExpiryDate = event.target.value
      .replace(/\s/g, "")
      .replace(/(\d{2})(\d{2})/, "$1/$2")
      .trim();
    setExpiryDate(formattedExpiryDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission here
    console.log("Cardholder Name:", cardholderName);
    console.log("Card Number:", cardNumber);
    console.log("CVV:", cvv);
    console.log("Expiry Date:", expiryDate);
  };

  return (
    <form className="credit-card-form" onSubmit={handleSubmit}>
      <div>
        <label>Cardholder Name</label>
        <input
          type="text"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength="19"
          required
        />
      </div>
      <div className="cvv-expiry-wrapper">
        <div>
          <label>CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength="3"
            required
          />
        </div>
        <div>
          <label>Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            maxLength="5"
            required
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreditCardForm;
