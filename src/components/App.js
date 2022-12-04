import React,{useEffect, useState} from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from "./CreateEvent.js";
import CreateTicket from "./CreateTicket.js";
import DeleteEvent from "./DeleteEvent.js";
import ListEvents from "./ListEvents.js";
import ListEventsUsers from "./ListEventsUsers.js";
import ListReservations from "./ListReservations.js";
import UpdateEvent from "./UpdateEvent.js";
import ReserveTickets from "./ReserveTickets.js";
import Login from './Login.js';
import Register from './Register.js';
import { Navigate } from 'react-router-dom';
import { setAuthToken } from './Axios.js';
import UpdateEventIn from './UpdateEventIn.js';
import ReserveTicketIn from './ReserveTicketIn.js';
import ListReservationsIn from './ListReservationsIn.js';
import Header from './Header.js';
import ReservationListUser from './ReservationListUser.js';

function App() {
  const [hasToken, SetHasToken] = useState(true);

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (token) {
        setAuthToken(token);
        SetHasToken(true);
    }else{
     SetHasToken(false);
    }
  },[])

  return (
    <div>
           <BrowserRouter>
           <Routes>
           <Route path="/" element={<div><Header /><Login /></div>} />
             <Route path="/login" element={<div><Header /><Login /></div>} />
             <Route path="/register" element={<div><Header /><Register /></div>} />
             <Route path="/createEvent" element={hasToken ? (<div><Header /><CreateEvent /></div>) : (<Navigate replace to={"/login"} />)} />
             <Route path="/listEvents" element={hasToken ? (<div><Header /><ListEvents /></div>) : (<Navigate replace to={"/login"} />)} />
             <Route path="/updateEventIn/:eventId" element={hasToken ? (<div><Header /><UpdateEventIn /></div>) : (<Navigate replace to={"/login"} />)} />
             <Route path="/deleteEvent/:eventId/:name" element={hasToken ? (<div><Header /><DeleteEvent /></div>) : (<Navigate replace to={"/login"} />)} />
             <Route path="/createTicket/:eventId/:sDate/:eDate" element={hasToken ? (<div><Header /><CreateTicket /></div>) : (<Navigate replace to={"/login"} />)} />
             <Route path="/listEventsUsers" element={hasToken ? (<div><Header /><ListEventsUsers /></div>) : (<Navigate replace to={"/login"} />)} />
             <Route path="/listReservations/:eventId" element={hasToken ? (<div><Header /><ListReservationsIn /></div>) : (<Navigate replace to={"/login"} />)} /> 
             <Route path="/reserveTickets/:eventId" element={hasToken ? (<div><Header /><ReserveTicketIn /></div>) : (<Navigate replace to={"/login"} />)} />
             <Route path="/listReservationsUser" element={hasToken ? (<div><Header /><ReservationListUser /></div>) : (<Navigate replace to={"/login"} />)} />
           </Routes> 
         </BrowserRouter>
    </div>
   
  )
}

export default App;


