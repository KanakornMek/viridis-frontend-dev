import { useEffect, useState, useRef, useContext } from "react";
import NavBar from "../components/navbar";
import { viridisApi } from "../api/axiosConfig";
import { AuthContext } from "../contexts/AuthContext";
import "./css/profile.css";
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import Model from '../components/3DModel';

function Profile() {
  const { logout } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const inputFileRef = useRef(null);
  useEffect(() => {
    async function getProfile() {
      const response = await viridisApi.get("/user/profile");
      const { firstname, lastname, email, phoneNumber } = response.data;
      setFirstname(firstname);
      setLastname(lastname);
      setEmail(email);
      setPhoneNumber(phoneNumber);
    }
    getProfile();
  }, []);

  32

    const [size, setsize] = useState(window.innerWidth)
    
    //choose the screen size 
    const handleResize = () => {
        setsize(window.innerWidth);
    }

    // create an event listener
    useEffect(() => {
    window.addEventListener("resize", handleResize)
    })

  return (
    <div className="profile-background">
      <NavBar />
      <div className="left-side-profile">
        <div className="profile-pic-container">
          <img
            className="profile-pic"
            src="/src/assets/picture/profilePic.png"
          ></img>
        </div>
        <div className="profile-home-container">
            <Canvas style={{ width: '50vw'}}>
                <OrthographicCamera makeDefault position={[6, 1, 6]} zoom={size/40}></OrthographicCamera>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Model />
          </Canvas>
        </div>
      </div>
      <div className="right-side-profile">
        <div className="right-side-profile-container">
          <div className="profile-name-container">
            <h1>Firstname</h1>
            <input
              value={firstname}
              type="text"
              className="profile-form"
              placeholder="Name"
            ></input>
          </div>
          <div className="profile-name-container">
            <h1>Lastname</h1>
            <input
              value={lastname}
              type="text"
              className="profile-form"
              placeholder="Name"
            ></input>
          </div>
          <div className="profile-mobile-container">
            <h1>Mobile No.</h1>
            <input
              value={phoneNumber}
              type="text"
              className="profile-form"
              placeholder="Mobile"
            ></input>
          </div>
          <div className="profile-email-container">
            <h1>Email</h1>
            <input
              value={email}
              type="text"
              className="profile-form"
              placeholder="Email"
            ></input>
          </div>
          <div className="profile-button-container">
            <button onClick={() => logout()}>Logout</button>
            <button className="save-profile-button">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
