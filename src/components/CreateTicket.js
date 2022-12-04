import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./CreateTicket.css";
import axios from "./Axios";

function CreateTicket() {
    let { eventId} = useParams();
    let {sDate} = useParams();
    let {eDate} = useParams();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [date,setDate] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [totalQuantity, setTotalQuantity] = useState("");
    const [availableQuantity, setAvailableQuantity] = useState("");
    const [eventIdS, setEventIdS] = useState("");

    useEffect(()=>{
        // axios.get("/getEventDetails",  { crossdomain: true },{eventId:eventId}).then(response => {
        //     setStartDate(response.data.startDate);
        //     setEndDate(response.data.endDate);
        //   },[]);
        setStartDate(sDate);
        setEndDate(eDate);
        setEventIdS(eventId);
    },[eventId])


    function handleSubmit(event){
        event.preventDefault();
        if(date<startDate || date>endDate){
            alert(`Provide a date between ${startDate} - ${endDate}`);
        }else{
            axios.post("/createTicket",{
                eventId:eventIdS,
                date:date,
                description:description,
                price:price,
                totalQuantity:totalQuantity,
                availableQuantity:availableQuantity,
             }).then(response=>{
                if(response.data==="error"){
                    alert("An error occured")
                }else if(response.data==="Successfully Created"){
                    alert("Successfully created the ticket");
                    setDate("");
                    setDescription("");
                    setPrice("");
                    setAvailableQuantity("");
                    setTotalQuantity("");
                }else if(response.data = "Ticket exists"){
                    alert("Ticket is already created for that date")
                }
             })
        }
    }

  return (
    <div className='createTicket__top'>
         <p>Create Ticket</p>
      <form onSubmit={handleSubmit} className='createTicket'>
        <p>Date</p>
        <input 
          type="date" 
          required
          format="dd-MM-yyyy"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <p>Description</p>
        <input 
          type="text" 
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
         <p>Price in Rs</p>
        <input 
          type="number" 
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
           <p>Total Quantity</p>
        <input 
          type="number" 
          required
          value={totalQuantity}
          onChange={(e) => setTotalQuantity(e.target.value)}
        />
           <p>Available Quantity</p>
        <input 
          type="number" 
          required
          value={availableQuantity}
          onChange={(e) => setAvailableQuantity(e.target.value)}
        />
        <input type="submit" className='createTicket__submit'/>
        </form>
    </div>
  )
}

export default CreateTicket;