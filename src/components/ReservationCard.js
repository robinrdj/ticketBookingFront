import React from 'react';
import "./ReservationCard.css";

function ReservationCard({owner, ticketId,purchaseDate, totalPrice, quantity, status}) {
  return (
    <div className='reservationCard'>
        <p>Owner: {owner}</p>
        <p>ticketId: {ticketId}</p>
        <p>PurchasedDate: {purchaseDate}</p>
        <p>Total Price: {totalPrice}</p>
        <p>Quantity: {quantity}</p>
        <p>Status: {status}</p>
    </div>
  )
}

export default ReservationCard;