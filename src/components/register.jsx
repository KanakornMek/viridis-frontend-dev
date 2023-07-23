import { useState } from "react";
import "./login.css";
import { viridisAuth } from "../api/axiosConfig";

function Register({ setForm }) {
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
    setPhoneNumber(digits)
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
  const handleFirstname = (event) => {
    setFirstname(event.target.value) 
  }
  const handleLastname = (event) => {
    setLastname(event.target.value) 
  }
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
    event.preventDefault()
    viridisAuth.post('/signup', {
        firstname,
        lastname,
        idNumber,
        email,
        password,
        phoneNumber
    }).then((res) => {
      console.log(res.data)
        window.location = 'http://localhost:5173/'
    }).catch((err) => {
      console.log(err)
    })
  }

  const [accountType, setAccountType] = useState("individual");
  return (
    <>
      <div className="left-container">
        <div className="form-container">
          <h1 className="form-control">ลงทะเบียน</h1>
          <p>หรือ </p>
          <p
            className="regis"
            style={{ cursor: "pointer" }}
            onClick={() => setForm("login")}
          >
            เข้าสู่ระบบ
          </p>
          <form id="form" class="form" onSubmit={handleSubmit}>
            {accountType === "individual" ? (
              <>
                <div className="form-control">
                  <label for="username">ชื่อ</label>
                  <input type="text" name="firstname" onChange={handleFirstname} required />
                </div>
                <div className="form-control">
                  <label for="username">นามสกุล</label>
                  <input type="text" name="lastname" onChange={handleLastname} required />
                </div>
              </>
            ) : (
              <div className="form-control">
                <label for="username">ชื่อบริษัท</label>
                <input type="text" name="companyname" required />
              </div>
            )}

            <div className="form-control">
              <label for="username">อีเมล</label>
              <input
                type="email"
                name="email"
                value={formattedEmail}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-control">
              <label for="password">รหัสผ่าน</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="form-control">
              <label for="password">ยืนยันรหัสผ่าน</label>
              <input
                type="password"
                name="password2"
                value={password2}
                onChange={handlePassword2Change}
                required
              />
            </div>
            <div className="form-control">
              <label for="Tel">เบอร์โทร</label>
              <input
                type="text"
                name="tel"
                pattern="^\d{3}-\d{3}-\d{4}$"
                value={formattedTelNumber}
                onChange={handleTelChange}
                required
              />
            </div>
            {accountType === "individual" && (
              <div className="form-control">
                <label for="id">เลขบัตรประจำตัวประชาชน</label>
                <input
                  type="text"
                  name="id"
                  pattern="^\d{1}-\d{4}-\d{5}-\d{2}-\d{1}$"
                  value={formattedIdNumber}
                  onChange={handleIdChange}
                  required
                />
              </div>
            )}
            <div className="form-control" id="user-type">
              <label for="Type">ประเภทผู้ใช้</label>
              <select
                name="Type"
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="individual" selected>
                  บุคคล
                </option>
                <option value="sme">SME</option>
              </select>
            </div>
            <button type="submit" className="form-control">
              ลงทะเบียน
            </button>
          </form>
        </div>
      </div>
      <div className="right-containerRe"></div>
    </>
  );
}
// function Register({setForm}) {
//     return(
//         <>
//         <h1>Register</h1>
//         <form>
//             <input />
//         </form>
//         <p style={{cursor: 'pointer'}} onClick={() => setForm('login')}>Login</p>
//         </>
//     )
// }

export default Register;
