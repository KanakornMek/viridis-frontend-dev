import NavBar from "../components/navbar";
import './css/profile.css'

function Profile(){
    return(
        <div className="profile-background">
            <NavBar/>
            <div className="left-side-profile">
                <div className="profile-pic-container">
                    <img className="profile-pic" src="/src/assets/picture/profilePic.png"></img>
                </div>
                <div className="profile-home-container">
                    <img className="profile-home" src="/src/assets/picture/image.png"></img>
                </div>
            </div>
            <div className="right-side-profile">
                <div className="right-side-profile-container">
                    <div className="profile-name-container">
                        <h1>Name</h1>
                        <input type='text' className="profile-form" placeholder='Name'></input>
                    </div>
                    <div className="profile-mobile-container">
                        <h1>Mobile No.</h1>
                        <input type='number' className="profile-form" placeholder='Mobile'></input>
                    </div>
                    <div className="profile-email-container">
                        <h1>Email</h1>
                        <input type='text' className="profile-form" placeholder='Email'></input>
                    </div>
                    <div className="profile-button-container">
                        <button className="save-profile-button">Save</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Profile;