import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
import "./css/CarbonCustomization.css";
import "./css/PhoneNumberInput.css";
import "./css/qr.css";
import { viridisApi } from "../api/axiosConfig";
import Payment from "../components/Payment/Payment";

const CarbonCustomization = ({ setInfo, setPage }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [customAmount, setCustomAmount] = useState(0);
  const [carbonCreditTotal, setCarbonCreditTotal] = useState(0);

  const options = [
    { label: "1 Meal", value: 1 },
    { label: "2 Meals", value: 2 },
    { label: "3 Meals", value: 3 },
    { label: "Custom Amount", value: "custom" },
  ];

  useEffect(() => {
    calculateCarbonCreditTotal();
  }, [selectedOption, customAmount]);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleCustomAmountChange = (event) => {
    setCustomAmount(event.target.value);
  };

  const calculateCarbonCreditTotal = () => {
    if (selectedOption === "custom") {
      setCarbonCreditTotal(customAmount * 30);
    } else {
      setCarbonCreditTotal(selectedOption * 30);
    }
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
          <label htmlFor="customAmount">Amount of Meal:</label>
          <input
            type="number"
            id="customAmount"
            name="customAmount"
            min="1"
            step="1"
            placeholder="Enter amount"
            disabled={selectedOption !== "custom"}
            value={customAmount}
            onChange={handleCustomAmountChange}
          />
        </div>
      )}
      <div className="carbon-credit-summary">
        <h4>Carbon Credit Summary:</h4>
        <p>
          Selected Option:{" "}
          {selectedOption === "custom"
            ? `${customAmount} Meals`
            : `${selectedOption} Meals`}
        </p>
        <p>Total Carbon Credit: {carbonCreditTotal} kg CO2e</p>
      </div>
      <button
        onClick={() => {
          setInfo({
            quantity: carbonCreditTotal,
          });
          setPage("purchase");
        }}
        type="button"
      >
        Offset Now
      </button>
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
  const [searchParams, setSearchParams] = useSearchParams();
  const serviceId = searchParams.get("serviceId");
  const [serviceName, setServiceName] = useState("");
  const [loading, setLoading] = useState(true);
  const [serviceFound, setServiceFound] = useState(false);
  const fetchInfo = async (serviceId) => {
    console.log(serviceId);
    try {
      const response = await viridisApi.get("/service/info", {
        params: {
          serviceId: serviceId,
        },
      });

      setServiceName(response.data.name);
      setServiceFound(true);
      setLoading(false);
    } catch (error) {
      setServiceFound(false);
    }
  };
  useEffect(() => {
    fetchInfo(serviceId);
  }, [serviceId]);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [page, setPage] = useState("phoneInput");
  const [purchaseInfo, setPurchaseInfo] = useState(null);

  const handleSubmitPhoneNumber = (number) => {
    setPhoneNumber(number);
    setPage("carbonCustom");
  };
  return (
    <div className="qr-purchase">
      <header>
        <h1>viridis.</h1>
        <div className="v-divider" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png"
          height="50rem"
        />
      </header>

      {!loading && serviceFound && (
        <main>
          <h2>{serviceName}</h2>
          {(() => {
            if (page === "phoneInput") {
              return (
                <PhoneNumberInput
                  onSubmitPhoneNumber={handleSubmitPhoneNumber}
                />
              );
            } else if (page === "carbonCustom") {
              return (
                <CarbonCustomization
                  setInfo={setPurchaseInfo}
                  setPage={setPage}
                  phoneNumber={phoneNumber}
                />
              );
            } else if (page === "purchase") {
              return (
                <div style={{ padding: '10px', height: '70%', width: 'clamp(200px, 100%, 600px)'}}>
                  <Payment
                    quantity={purchaseInfo.quantity}
                    price={purchaseInfo.quantity * 2}
                    isQr={true}
                    qrPhone={phoneNumber}
                  />
                </div>     
              );
            }
          })()}
        </main>
      )}
    </div>
  );
}
export default QRPage;
