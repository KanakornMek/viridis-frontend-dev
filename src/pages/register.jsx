import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <form id="form" className="form">
            <h1 className="form-control">ลงทะเบียน</h1>
            <p1>หรือ </p1><p1 href="Login.jsx">เข้าสู่ระบบ</p1>
            <div className="form-control">
                <label for="username">ชื่อ-นามสกุล</label>
                <input type="text" name="" id="username" required/>
                
            </div>  
            <div className="form-control">
                <label for="username">อีเมล</label>
                <input type="email" name="" id="email" required/>
                
            </div>
            <div className="form-control">
                <label for="password">รหัสผ่าน</label>
                <input type="password" name="" id="password" required/>
                
            </div>
            <div className="form-control">
                <label for="password">ยืนยันรหัสผ่าน</label>
                <input type="password" name="" id="password2" required/>
                
            </div>
            <div className="form-control">
                <label for="Tel">เบอร์โทร</label>
                <input type="tel" name="Tel" pattern="^\d{3}-\d{3}-\d{4}$" required/>
            </div>
            <div className="form-control">
                <label for="id">เลขบัตรประจำตัวประชาชน</label>
                <input type="text" name="id" pattern="^\d{1}-\d{4}-\d{5}-\d{2}-\d{1}$" required/>
            </div>
            <div className="form-control">
                <label for="Type">ประเภทผู้ใช้</label>
                <select name="Type" id="">
                    <option value="Individual" selected>บุคคล</option>
                    <option value="SME">SME</option>
                    <option value="NGO">NGO</option>
                </select>
            </div>
            <button type="submit" className="form-control">ลงทะเบียน</button>
            </form>
    </div>
    </>
  )
}

export default App