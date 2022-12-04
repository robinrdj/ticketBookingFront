import React,{useState, useEffect} from 'react';
import ReservationCard from './ReservationCard';
import axios from "./Axios";

function ListReservations({eventId}) {
    const [reservations, setReservations] = useState([]);
    useEffect(()=>{
        axios.get("/getReservedEvents", { crossdomain: true }, {eventId:eventId}).then(response=>{     
            if(response.data==="error"){
            alert("An error occured")
            }else{
                var reservationArr = [];
                response.data.forEach((reservation)=>{
                  if(reservation.eventId===eventId){
                    reservationArr.push(reservation);
                  }
                })
                setReservations(reservationArr);
            }
        })
    },[])
  return (
    <div>
        {reservations.map(reservation=>{
            return <ReservationCard owner={reservation.owner} ticketId={reservation.ticketId} purchaseDate={reservation.purchaseDate}  totalPrice={reservation.totalPrice} quantity={reservation.quantity} status={reservation.status} />
        })}
    </div>
  )
}

export default ListReservations;