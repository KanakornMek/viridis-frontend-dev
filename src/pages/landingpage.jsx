import NavBar from "../components/navbar";
import { Link, useNavigate, redirect } from 'react-router-dom'
import './css/landingpage.css'
import { useState, useEffect } from "react";

function HomePage(){
    const [isGoingToBuy, setisGoingToBuy] = useState(false);
    const navigate = useNavigate();

    useEffect(() =>{
        if(isGoingToBuy){
            navigate('/buying');
        }

    },)

    return(
        <div>
            <NavBar isHome></NavBar>
            <div className="hero-section">
                <div className="hero-box">
                    <p>"Embrace a Greener Future” Offset Your Carbon Footprint Today.</p>
                    <button onClick={() => setisGoingToBuy(true)} >Buy Now</button>
                </div>
            </div>
            <div className="knowMore-section">
                <div className="knowMore-head">Know more about carbon.</div>
                <div className="cardComponent">
                    <div className="leftCard"  onClick={() => alert('Going to Carbon footprint')}>
                        <div className="leftCard-img"></div>
                        <div className="Card-content">
                            <h3>Carbon Footprint</h3>
                            <p>คือ ปริมาณแก๊สทั้งหมด ที่เกิดจากคนซึ่งส่งผลให้เกิดภาวะโลกร้อน เราจำเป็นต้องลดปริมาณ carbon footprint ให้เหลือต่ำกว่า 2 ตัน จากปกติที่เราสร้างประมาณ 4 ตัน เพื่อหลีกเลี่ยงภาวะโลกร้อนที่รุนแรงขึ้น</p>
                        </div>
                    </div>
                    <div className="rightCard"onClick={() => alert('Going to Carbon credit')}>
                        <div className="rightCard-img"></div>
                        <div className="Card-content">
                            <h3>Carbon credit</h3>
                            <p>คือ สิ่งที่องค์กรได้รับหลังจากสามารถลดปริมาณแก๊สที่ทำให้เกิดภาวะโลกร้อนจากโครงการต่างๆได้ ซึ่งเครดิตดังกล่าวสามารถวัดปริมาณและนำไปซื้อขายในตลาดคาร์บอนได้</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whatWeDo-section">
                <div className="whatWeDo-box">
                    <h3>What are we do?</h3>
                    <p>
                    "ภาวะโลกร้อนเป็นปัญหาที่ต้องการการแก้ไขอย่างเร่งด่วนเนื่องจากตามสมมติฐานของนักวิทยาศาสตร์เรามีเวลาเพียงแค่ 6ปีครึ่งเพื่อแก้ไขปัญหาดังกล่าวก่อนที่จะถึงจุดที่โลกย้อนกลับไม่ได้ ในปัจจุบันปัญหาจากภาวะโลกร้อนมีมากมาย เช่น อุณหภูมิสูงขึ้น อากาศแปรปรวน นำ้ท่วมตามเมืองชายฝั่งและความแห้งแล้ง การชดเชยแก๊สที่ทำให้เกิดภาวะโลกร้อนด้วยการซื้อขาย carbon credit ผ่านช่องทางออนไลน์และร่วมสนุกกับการตกแต่งบ้านดิจิตัลของคุณไปด้วยกัน"
                    </p>
                </div>
            </div>
            {/* <div className="ourMission-section">

            </div>
            <div className="ourTeam-section">

            </div>
            <div className="footer">

            </div> */}
        </div>
    )
}

export default HomePage;