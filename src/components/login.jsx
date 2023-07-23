
import { useState } from 'react';
import './login.css';


function Login({setForm}) {

  return (
    <>
      <div className="left-container">
        <div className="form-container">
          <h1 className="form-control" >เข้าสู่ระบบ</h1>
          <p1>หรือ </p1><p1 className="regis" style={{cursor: 'pointer'}} onClick={() => setForm('register')}>ลงทะเบียน</p1>
          <form id="form" className="form">
            <div className="form-control">
                <label for="username">อีเมล</label>
                <input type="email" name="" id="email" required/>
            </div>
            <div className="form-control">
                <label for="password">รหัสผ่าน</label>
                <input type="password" name="" id="password" required/>
            </div>
            
            <button type="submit" className="form-control">ลงทะเบียน</button>
          </form>
        </div>
    </div>
    <div className="right-containerLog">
      
    </div>
    </>
  )
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



export default Login;