
import { useState } from 'react';
import './login.css';


function Login({setForm}) {

  return (
    <>
      <div className="container1">
        <form id="form" class="form">
            <h1 className="form-control" >เข้าสู่ระบบ</h1>
            <p1>หรือ </p1><p1 className="regis" style={{cursor: 'pointer'}} onClick={() => setForm('register')}>ลงทะเบียน</p1>
              
            <div className="form-control">
                <label for="username">อีเมล</label>
                <input type="email" name="" id="email" required/>
            </div>
            <div className="form-control">
                <label for="password">รหัสผ่าน</label>
                <input type="password" name="" id="password" required/>
                
            </div>
            
            <div className="form-control">
                <label for="Tel">เบอร์โทร</label>
                <input type="tel" name="Tel" pattern="^\d{3}-\d{3}-\d{4}$" required/>
            </div>
            <div className="form-control">
                <label for="id">เลขบัตรประจำตัวประชาชน</label>
                <input type="text" name="id" pattern="^\d{1}-\d{4}-\d{5}-\d{2}-\d{1}$" required/>
            </div>
            
            <button type="submit" className="form-control">ลงทะเบียน</button>
            </form>
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