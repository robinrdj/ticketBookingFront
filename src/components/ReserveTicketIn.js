import React from 'react';
import ReserveTickets from './ReserveTickets';
import { useParams } from 'react-router-dom';


function ReserveTicketIn() {
    let { eventId} = useParams();
  return (
    <div>
        <ReserveTickets eventId={eventId}/>
    </div>
  )
}

export default ReserveTicketIn;
