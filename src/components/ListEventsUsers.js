import React,{useState, useEffect} from 'react';
import axios from "./Axios";
import EventCardUser from "./EventCardUser.js";

function ListEventsUsers() {
    const [events, setEvents] = useState([])

    useEffect(()=>{
        axios.get("/listEvents",  { crossdomain: true }).then(response => {
            setEvents(response.data);
          },[]);
    },[])

  return (
    <div>
        {events.map((event)=>{
            return <EventCardUser eventId={event._id} slug={event.slug} name={event.name} description={event.description} poster={event.poster} startDate={event.startDate} endDate={event.endDate} published={event.published} />
        })}
    </div>
  )
}

export default ListEventsUsers