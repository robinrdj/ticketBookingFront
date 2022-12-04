import React,{useEffect, useState} from 'react';
import "./Header.css";
import {Link } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState("");

  useEffect(()=>{
    var tok = localStorage.getItem("token");
    if(tok){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
  },[])


  function handleClick(){
    localStorage.setItem("token", "");
    setIsLoggedIn(false)
  }
  
  return (
    <div className="header">
    <img className = "header__image" src="https://cms.geogo.in/wp-content/uploads/2021/02/geogo-logo-1.png" alt="Geogo_Image" />
    <div>
      
      <Link to="/listEventsUsers" className='header__link'>List Events User</Link>
      <Link to="/listReservationsUser" className='header__link'>List Reservations User</Link>
      <Link to="/listEvents" className='header__link'>List Events Admin</Link>
      
      <Link to="/register" className='header__link'>Register</Link>
      {isLoggedIn?<button onClick={handleClick}>Logout</button>:<Link to="/login" className='header__link'>Login</Link>}
    </div>
</div>
  )
}

export default Header;