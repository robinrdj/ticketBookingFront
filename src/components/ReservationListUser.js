import React,{useState, useEffect} from 'react';
import ReservationCard from './ReservationCard';
import axios from "./Axios";


function ReservationListUser() {
    const [reservations, setReservations] = useState([]);
    useEffect(()=>{
        axios.get("/getReservedEvents", { crossdomain: true }, {userId:localStorage.getItem("email")}).then(response=>{     
            if(response.data==="error"){
            alert("An error occured")
            }else{
                var reservationArr = [];
                console.log(response.data)
                  response.data.forEach((reservation)=>{
                  if(reservation.owner===localStorage.getItem("email")){
                    reservationArr.push(reservation);
                  }
                })
                setReservations(reservationArr);
                console.log(reservations)
            }
        })
    },[])
  return (
    <div>
      {reservations.length? reservations.map(reservation=>{
            return <ReservationCard owner={reservation.owner} ticketId={reservation.ticketId} purchaseDate={reservation.purchaseDate}  totalPrice={reservation.totalPrice} quantity={reservation.quantity} status={reservation.status} />
        }):<p>No reservations</p>}
      
    </div>
  )
}

export default ReservationListUser;