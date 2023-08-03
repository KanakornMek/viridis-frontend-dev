import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/registerpage.css";
import { viridisAuth } from "../api/axiosConfig";

function Registerpage() {
  const [name, setName] = useState("");
  const [customerType, setcustomerType] = useState("individual");
  const [pageStage, setpageStage] = useState(0);
  const [namePlaceholderHandle, setnamePlaceholderHandle] = useState("Name");
  const [idPlaceholderHandle, setidPlaceholderHandle] = useState("ID");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedTelNumber, setFormattedTelNumber] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [formattedIdNumber, setFormattedIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [formattedEmail, setFormattedEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const formatTelNumber = (input) => {
    // Use regex to extract only digits from the input
    const digits = input.replace(/\D/g, "");
    setPhoneNumber(digits);
    // Apply the pattern: XXX-XXX-XXXX
    let formattedNumber = "";
    for (let i = 0; i < digits.length; i++) {
      if (i === 3 || i === 6) {
        formattedNumber += "-";
      }
      formattedNumber += digits[i];
    }

    return formattedNumber;
  };

  const formatIDNumber = (input) => {
    // Use regex to extract only digits from the input
    const digits = input.replace(/\D/g, "");
    setIdNumber(digits);
    // Apply the pattern: X-XXXX-XXXXX-XX-X
    let formattedNumber = "";
    for (let i = 0; i < digits.length; i++) {
      if (i === 1 || i === 5 || i === 10 || i === 12) {
        formattedNumber += "-";
      }
      formattedNumber += digits[i];
    }

    return formattedNumber;
  };

  const formatEmail = (input) => {
    return input.toLowerCase();
  };
  const handleName = (event) => {
    setName(event.target.value);
    if (customerType === "individual") {
      const nameParts = event.target.value.split(" ");
      setFirstname(nameParts[0]);
      setLastname(nameParts[1]);
    }
  };
  const handleTelChange = (event) => {
    const rawValue = event.target.value;
    const formattedValue = formatTelNumber(rawValue);
    setFormattedTelNumber(formattedValue);
  };

  const handleIdChange = (event) => {
    const rawValue = event.target.value;
    const formattedValue = formatIDNumber(rawValue);
    setFormattedIdNumber(formattedValue);
  };

  const handleEmailChange = (event) => {
    const rawValue = event.target.value;
    const formattedValue = formatEmail(rawValue);
    setFormattedEmail(formattedValue);
    setEmail(rawValue);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = {
      idNumber,
      email,
      password,
      phoneNumber,
      type: customerType,
    };
    if (customerType === "individual") {
        requestBody.firstname = firstname;
        requestBody.lastname = lastname;
      
    } else {
        requestBody.businessName = businessName;
    }

    viridisAuth
      .post("/signup", requestBody)
      .then((res) => {
        console.log(res.data);
        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (customerType === "SME") {
      setnamePlaceholderHandle("Business Name");
      setidPlaceholderHandle("Tax Payer ID");
    } else if (customerType === "NGO") {
      setnamePlaceholderHandle("Organization ID");
      setidPlaceholderHandle("Organization ID");
    } else {
      setnamePlaceholderHandle("Name");
      setidPlaceholderHandle("ID");
    }
  }, [customerType]);

  useEffect(() => {
    if (pageStage === 1) {
      document.getElementById("hiddenRegisterFormContainer").className =
        "hidden-register-form-container-on";
      document.getElementById("nextButtonRegister").className =
        "next-button-register-off";
      document.getElementById("registerButtonRegister").className =
        "register-button-register";
    } else if (pageStage === 0 || pageStage != 1) {
      setpageStage(0);
      document.getElementById("hiddenRegisterFormContainer").className =
        "hidden-register-form-container";
      document.getElementById("nextButtonRegister").className =
        "next-button-register";
      document.getElementById("registerButtonRegister").className =
        "register-button-register-off";
    }
  });

  return (
    <div className="register-page">
      <div className="left-side-register"></div>
      <div className="right-side-register">
        <div className="viridis-logo">viridis.</div>
        <form onSubmit={handleSubmit} className="register-form-container">
          <h1>Register</h1>
          <p>
            or{" "}
            <Link to={`/login`} className="login-link">
              Login
            </Link>
          </p>
          <input
            type="text"
            className="register-form"
            placeholder={namePlaceholderHandle}
            onChange={handleName}
            value={name}
          ></input>

          <div
            className="hidden-register-form-container"
            id="hiddenRegisterFormContainer"
          >
            <input
              type="email"
              className="register-form"
              placeholder="Email"
              onChange={handleEmailChange}
              value={formattedEmail}
            ></input>
            <input
              type="password"
              className="register-form"
              placeholder="Password"
              onChange={handlePasswordChange}
              value={password}
            ></input>
            <input
              type="password"
              className="register-form"
              placeholder="Confirm Password"
              onChange={handlePassword2Change}
              value={password2}
            ></input>
            <input
              type="text"
              className="register-form"
              placeholder="Mobile No."
              maxLength={12}
              onChange={handleTelChange}
              value={formattedTelNumber}
            ></input>
            <input
              type="text"
              className="register-form"
              placeholder={idPlaceholderHandle}
              maxLength={17}
              onChange={handleIdChange}
              value={formattedIdNumber}
            ></input>
            <div className="account-type-dropdown">
              <button className="account-type-button">{customerType}</button>
              <div className="account-type-dropdown-content">
                <a onClick={() => setcustomerType("individual")}>Individual</a>
                <a onClick={() => setcustomerType("SME")}>SME</a>
                <a onClick={() => setcustomerType("NGO")}>NGO</a>
              </div>
            </div>
          </div>
          <button
            className="next-button-register"
            onClick={() => setpageStage(1)}
            id="nextButtonRegister"
          >
            Next
          </button>
          <button
            className="register-button-register"
            onClick={() => {}}
            id="registerButtonRegister"
          >
            Register
          </button>
        </form>
      </div>
      <div className="left-side-green-banner"></div>
    </div>
  );
}

export default Registerpage;
