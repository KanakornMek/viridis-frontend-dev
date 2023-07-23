import NavBar from "../components/navbar";
import './css/profile.css'

function Profile(){
    return(
        <div className="profile-background">
            <div>
                <NavBar/>
            </div>
            <div id="Leftzone-profile" className="profilepage">
                <div className="user-profile">
                    <img id="user-image" className="User-pro" src="https://www.the-sun.com/wp-content/uploads/sites/6/2022/08/OP-OMF-TELETUBBY-SUN.jpg?strip=all&quality=100&w=1620&h=1080&crop=1"/>
                    <img id="user-house" className="User-pro" src="https://images.unsplash.com/photo-1633633292416-1bb8e7b2832b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt=""/>
                </div>
            </div>
            <div id="Rightzone-profile" className="profilepage">
                <form className="profile-form">
                    <div className="profileform-control">
                        <label for="username">ชื่อ-นามสกุล</label>
                        < input type="text" name="" id="username" required/>
                    </div> 
                    <div className="profileform-control">
                        <label for="Tel">เบอร์โทร</label>
                        <input type="tel" name="Tel" pattern="^\d{3}-\d{3}-\d{4}$" required/>
                    </div>
                    <div className="profileform-control">
                        <label for="username">อีเมล</label>
                        <input type="email" name="" id="email" required/>
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