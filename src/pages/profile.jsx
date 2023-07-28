import { useEffect, useState, useRef } from "react";
import NavBar from "../components/navbar";
import './css/profile.css'
import housePort from "../assets/picture/user-port-house.png"
import { viridisApi } from "../api/axiosConfig";

function Profile() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')

    const inputFileRef = useRef(null);
    useEffect(() => {
        async function getProfile() {
            const response = await viridisApi.get('/user/profile');
            const { firstname, lastname, email, phoneNumber } = response.data;
            setFirstname(firstname);
            setLastname(lastname);
            setEmail(email);
            setPhoneNumber(phoneNumber);
        }
        getProfile()
    }, []);

    const handleProfileImageClick = () => {
        inputFileRef.current.click();
    };
    return (
        <div className="profile-background">
            <div>
                <NavBar />
            </div>
            <div className="Leftzone-profile" >
                <div className="user-profile">
                    <div className="user-image-wrapper" onClick={handleProfileImageClick}>
                        <img id="user-image" className="user-profile-picture" src="https://www.the-sun.com/wp-content/uploads/sites/6/2022/08/OP-OMF-TELETUBBY-SUN.jpg?strip=all&quality=100&w=1620&h=1080&crop=1" alt="" />
                        <div className="choose-image-text">📷Choose Image</div>
                        <input
                            type="file"
                            accept="image/*"
                            ref={inputFileRef}
                            style={{ display: "none" }}
                        />
                    </div>
                    <img id="user-house" className="house-profile-picture" src={housePort} alt="" />
                </div>
            </div>
            <div className="Rightzone-profile" >
                <form className="profile-form">
                    <div className="profileform-control">
                        <label for="username">ชื่อ</label>
                        <input type="text" name="firstname" value={firstname} required />
                    </div>
                    <div className="profileform-control">
                        <label for="username">นามสกุล</label>
                        <input type="text" name="lastname" value={lastname} required />
                    </div>
                    <div className="profileform-control">
                        <label for="Tel">เบอร์โทร</label>
                        <input type="text" name="Tel" pattern="^\d{3}-\d{3}-\d{4}$" required />
                    </div>
                    <div className="profileform-control">
                        <label for="username">อีเมล</label>
                        <input type="email" name="" id="email" required />
                    </div>
                    <div className="button-wrapper">
                        <button type="submit" className="profileform-control">บันทึก</button>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default Profile;