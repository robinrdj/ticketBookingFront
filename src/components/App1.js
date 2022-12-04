import React from 'react';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RouteGuard from './RouteGuard.js';
// import CreateEvent from "./CreateEvent.js";
// import CreateTicket from "./CreateTicket.js";
// import DeleteEvent from "./DeleteEvent.js";
// import ListEvents from "./ListEvents.js";
// import ListEventsUsers from "./ListEventsUsers.js";
// import ListReservations from "./ListReservations.js";
// import UpdateEvent from "./UpdateEvent.js";
// import ReserveTickets from "./ReserveTickets.js";
// import Login from './Login.js';

function App1() {
    return (
        // <BrowserRouter>
        //   <Routes>
        //     <Route path="/" element={<div>Hi</div>} />
        //   </Routes> 
        // </BrowserRouter>
        <div>
          Hi
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Hi</div>} />
        <Route path="/hi" element={<div>Hi</div>} />
      </Routes>
      </BrowserRouter>
        </div>
    )
}

export default App1;