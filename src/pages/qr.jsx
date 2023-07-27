import { useState } from "react";
import { useParams } from "react-router-dom";
import "./css/CarbonCustomization.css";
import "./css/PhoneNumberInput.css";
import "./css/qr.css";

const CarbonCustomization = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: "1 Meal", value: 1 },
    { label: "2 Meals", value: 2 },
    { label: "3 Meals", value: 3 },
    { label: "Custom Amount", value: "custom" },
  ];

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <>
      <h3>Customize Your Offset:</h3>
      <div className="options-grid">
        {options.map((option) => (
          <button
            key={option.value}
            className={`option-button ${
              selectedOption === option.value ? "selected" : ""
            }`}
            onClick={() => handleOptionChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
      {selectedOption === "custom" && (
        <div className="custom-amount-input">
          <label htmlFor="customAmount">Custom Amount:</label>
          <input
            type="number"
            id="customAmount"
            name="customAmount"
            min="0"
            step="1"
            placeholder="Enter amount"
            disabled={selectedOption !== "custom"}
          />
        </div>
      )}
      <button type="button">Offset Now</button>
    </>
  );
};

const PhoneNumberInput = ({ onSubmitPhoneNumber }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitPhoneNumber(phoneNumber);
  };

  return (
    <main className="phone-input-section">
      <h3>Enter Your Phone Number</h3>
      <form className="phoneForm" onSubmit={handleSubmit}>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Your Phone Number"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

function QRPage() {
  let { serviceId } = useParams();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(true);

  const handleSubmitPhoneNumber = (number) => {
    setPhoneNumber(number);
    setShowPhoneNumberInput(false);
  };
  return (
    <div className="qr">
        <header>
            <h1>viridis.</h1>
            <div className="v-divider"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png" height="50rem" />
        </header>
      <main>
        {showPhoneNumberInput ? (
          <PhoneNumberInput onSubmitPhoneNumber={handleSubmitPhoneNumber} />
        ) : (
          <CarbonCustomization phoneNumber={phoneNumber} />
        )}
      </main>
    </div>
  );
}
export default QRPage;
