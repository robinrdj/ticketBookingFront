
import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./EventCard.css";
import axios from "./Axios";

function EventCard({eventId, slug, name, description, poster, startDate, endDate, published}) {
  const navigate = useNavigate();
   console.log(`${startDate?.toString().slice(0,10)}`)

  function handleClick(){
    axios.post("/changePublish",{eventId:eventId, published:!published}).then(response=>{
      if(response.data==="Successfully Updated"){
        alert("Successfuly updated");
      }else{
        alert("An error occured");
      }
    })
  }

  function handleDelete(){

  }

  return (
    <div className='eventCard'>
        <div className='eventCard__left'>
        <p>{slug}</p>
        <p>{name}</p>
        <p>{description}</p>
        <p>Date: {`${startDate?.toString().slice(0,10)}`} to {endDate?.toString().slice(0,10)}</p>
        <p>{published}</p>
        {published?<button onClick={handleClick}>Unpublish</button>:<button onClick={handleClick}>Publish</button>}
        <button onClick={()=>{navigate(`/updateEventIn/${eventId}`)}}>Update</button>
        <button onClick={()=>{navigate(`/listReservations/${eventId}`)}}>See Reservations</button>
        <button onClick={()=>{navigate(`/deleteEvent/${eventId}/${name}`)}}>Delete</button>
        <button onClick={()=>{navigate(`/createTicket/${eventId}/${startDate}/${endDate}`)}}>Configure Tickets</button>
        </div>
        <div className='eventCard__right'>
            <img src={poster} alt="poster__img" className='eventCard__image'/>
        </div>
      
    </div>
  )
}

export default EventCard