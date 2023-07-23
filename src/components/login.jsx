import { useState, useContext } from 'react';
import './login.css';
import { viridisAuth } from '../api/axiosConfig';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

function Login({setForm}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { auth, login, logout } = useContext(AuthContext);

  return (
    <>
      <div className="left-container">
        <div className="form-container">
          <h1 className="form-control" >เข้าสู่ระบบ</h1>
          <p>หรือ </p><p className="regis" style={{cursor: 'pointer'}} onClick={() => setForm('register')}>ลงทะเบียน</p>
          <form 
            id="form" 
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(auth)
              login(email, password)
              
              window.location = '/'
            }}
          >
            <div className="form-control">
                <label for="username">อีเมล</label>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="form-control">
                <label for="password">รหัสผ่าน</label>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>
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