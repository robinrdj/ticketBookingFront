import React,{useState} from 'react';
import axios from "./Axios";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function handleSubmit(event){
     event.preventDefault();
     axios.post('/login',{
      password:password,
      email:email,
  }).then(response=>{
      if(response.data.token){
          alert("Successfully Logged In");
          console.log(response.data.token)
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
    <div className='login__top'>
    <p>login</p>
  <form onSubmit={handleSubmit} className='login'>
    <p>Email</p>
    <input 
      type="text" 
      required
      value={email}
      onChange={(e) => setEmail(e.target.value) }
    />
     <p>Password</p>
    <input 
      type="text" 
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <input type="submit" className="login__submit" />
    </form>
</div>
  )
}

export default Login