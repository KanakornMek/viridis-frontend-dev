import { useState } from 'react';
import './login.css';


function Register({setForm}) {
    const [accountType, setAccountType] = useState('individual')
  return (
    <>
      <div className="left-container">
        <div className="form-container">
            <h1 className="form-control" >ลงทะเบียน</h1>
            <p1>หรือ </p1><p1 className="regis" style={{cursor: 'pointer'}} onClick={() => setForm('login')}>เข้าสู่ระบบ</p1>
            <form id="form" class="form">
                {accountType === 'individual' ? 
                    <div className="form-control">
                        <label for="username">ชื่อ-นามสกุล</label>
                        <input type="text" name="" id="username" required/>
                    </div> :
                    <div className="form-control">
                        <label for="username">ชื่อบริษัท</label>
                        <input type="text" name="" id="username" required/>
                    </div>
                }
                 
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
                {accountType === 'individual' && 
                    <div className="form-control">
                        <label for="id">เลขบัตรประจำตัวประชาชน</label>
                        <input type="text" name="id" pattern="^\d{1}-\d{4}-\d{5}-\d{2}-\d{1}$" required/>
                    </div>
                }
                <div className="form-control" id="user-type">
                    <label for="Type">ประเภทผู้ใช้</label>
                    <select name="Type" onChange={(e) => setAccountType(e.target.value)}>
                        <option value="individual" selected>บุคคล</option>
                        <option value="sme">SME</option>
                    </select>
                </div>
                <button type="submit" className="form-control">ลงทะเบียน</button>
            </form>
        </div>
    </div>
    <div className="right-containerRe">

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


export default Register;
