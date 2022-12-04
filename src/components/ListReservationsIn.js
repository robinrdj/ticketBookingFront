import React from 'react';
import ListReservations from './ListReservations';
import { useParams } from 'react-router-dom';

function ListReservationsIn() {
    let { eventId} = useParams();
  return (
    <div>
       <ListReservations eventId={eventId}/>
    </div>
  )
}

export default ListReservationsIn;