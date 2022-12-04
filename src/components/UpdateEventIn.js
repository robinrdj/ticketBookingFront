import React from 'react';
import UpdateEvent from './UpdateEvent';
import { useParams } from 'react-router-dom';

function UpdateEventIn() {
    let { eventId} = useParams();
  return (
    <div><UpdateEvent eventId={eventId}/></div>
  )
}


export default UpdateEventIn