import { useState } from 'react';
import './login.css';
import { viridisAuth } from '../api/axiosConfig';


function Login({setForm}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


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
              viridisAuth.post('/signin', {
                email,
                password
              }).then((res) => {
                console.log(res.data)
              })
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