import React, {useState, useEffect} from 'react';
import EventCard from './EventCard';
import axios from "./Axios";

function ListEvents() {
    const [events, setEvents] = useState([])
    useEffect(()=>{
        axios.get("/events",  { crossdomain: true }).then(response => {
            setEvents(response.data);
          },[]);
    },[])

  return (
    <div>
        {events.map((event)=>{
            return <EventCard eventId={event._id} slug={event.slug} name={event.name} description={event.description} poster={event.poster} startDate={event.startDate} endDate={event.endDate} published={event.published} />
        })}
    </div>
  )
}

export default ListEvents