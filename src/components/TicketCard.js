import axios from "./Axios";
import React,{useState} from 'react';
import "./TicketCard.css";

function TicketCard({ticketId, ticketDate, availableQuantity, eventId, user}) {
  const [quantity, setQuantity] = useState([]);

  function handleBook(){
    if(quantity<=0||""){
      alert("Quantity Must be Greater than 0")
    }else if(quantity > availableQuantity){
      alert("Quantity must be less than avaialble Quantity");
    }
    else{
      axios.post("/orderTicket",{
        ticketId:ticketId,
        quantity:quantity,
        eventId:eventId,
        userId:user
      }).then(response=>{
           if(response.data==="error"){
            alert("An error occured");
           }else{
            alert("Successfully booked the tickets");
            setQuantity(0);
           }
      })
    }
  }

  return (
    <div className='ticketCard'>
        <p>Date: {`${ticketDate?.toString().slice(0,10)}`}</p>
        <p>availableQuantity: {availableQuantity}</p>
        <input className="ticketCard__input"
          type="number" 
          value={quantity}
          placeholder="Enter Quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={handleBook}>Book Tickets</button>
    </div>
  )
}

export default TicketCard;