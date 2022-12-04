import React,{useState} from 'react';
import "./Register.css";
import axios from "./Axios";
import { useNavigate } from 'react-router-dom';


function Register() {
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    let navigate = useNavigate();
    function handleSubmit(event){
       event.preventDefault();
       axios.post('/register',{
        fullName:fullName,
        password:password,
        mobileNumber:mobileNumber,
        email:email,
        role:role
    }).then(response=>{
        if(response.data.token){
            alert("Successfully registered");
            console.log(response.data)
            console.log(response.token)
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("email", email);
            navigate=("/listEventsUsers");
        }else{
            console.log(response.data)
            alert(response.data)
        }
    })
    }

  return (
    <div className='register__top'>
    <p>Sign up</p>
  <form onSubmit={handleSubmit} className='register'>
    <p>Full Name</p>
    <input 
      type="text" 
      required
      value={fullName}
      onChange={(e) => setFullName(e.target.value) }
    />
     <p>Email</p>
    <input 
      type="text" 
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <p>Mobile Number</p>
    <input 
      type="text" 
      required
      value={mobileNumber}
      onChange={(e) => setMobileNumber(e.target.value)}
    />
    <p>Role</p> 
   <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value={"admin_user"}>Admin</option>
          <option value={"normal__user"} selected>User</option>
    </select>
    <p>Password</p>
    <input 
      type="text" 
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <input type="submit" className="register__submit" />
    </form>
</div>
  )
}

export default Register