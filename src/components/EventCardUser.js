import React ,{useState} from 'react';
import "./EventCardUser.css";
import axios from "./Axios";
import { useNavigate } from "react-router-dom";

function EventCardUser({eventId, slug, name, description, poster, startDate, endDate, published}) {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
    return (
      <div className='eventCardUser'>
        <div className='eventCardUser__left'>
          <p>{slug}</p>
          <p>{name}</p>
          <p>{description}</p>
          <p>{`${startDate?.toString().slice(0,10)}`} to {endDate?.toString().slice(0,10)}</p>
          <button onClick={()=>{navigate(`/reserveTickets/${eventId}`)}}>Reserve Tickets</button>
        </div>
        <div className='eventCardUser__right'>
        <img src={poster} alt="poster__img" className='eventCard__image'/>
        </div>

      </div>
    )
  }

export default EventCardUser;