import React, {useEffect, useState} from 'react';
import "./ReserveTickets.css";
import axios from "./Axios";
import TicketCard from './TicketCard';
// import { useParams } from 'react-router-dom';



function ReserveTickets({eventId}) {
  const [tickets, setTickets] = useState([]);
  // let { eventId} = useParams();
  const [user,setUser] = useState(localStorage.getItem("email"));

  useEffect(()=>{
    axios.get("/getAllTickets",  { crossdomain: true }).then(response => {
      var ticketArr = [];
      response.data.forEach((ticket)=>{
        if(ticket.eventId===eventId){
          ticketArr.push(ticket);
        }
      })
      setTickets(ticketArr);
      },[]);
},[])
    
  return (
    <div>
      {tickets.map((ticket)=>{
        return <TicketCard ticketId={ticket._id} availableQuantity={ticket.availableQuantity} ticketDate={ticket.date} user={user} eventId={eventId}/>
      })}
    </div>
    
  )
}

export default ReserveTickets;