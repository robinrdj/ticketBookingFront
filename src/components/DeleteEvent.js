
import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import "./DeleteEvent.css";
import axios from "./Axios";

function DeleteEvent() {
    let { eventId} = useParams();
    let {name} = useParams();
    const [eventName, setEventName] = useState("");

    function handleDelete(){
        if(name===eventName){
            axios.post("/deleteEvent",{name:name}).then(response=>{
                if(response.data==="Successfully deleted"){
                    alert("Successfully deleted the event");
                }else{
                    alert("An error occured");
                }
            })
        }else{
            alert("Mismatch in the event name and the name you entered");
        }
    }

  return (
    <div className='deleteEvent__top'>
        <p>DeleteEvent</p>
    <div className="deleteEvent">
    <p>Enter Event Name</p>
    <input 
          type="text" 
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
    <button onClick={handleDelete} className="deleteEvent__submit">Delete Event</button>
    </div>
    </div>
  )
}

export default DeleteEvent;