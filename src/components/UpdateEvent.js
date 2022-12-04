import React, {useState,useEffect} from 'react';
import "./UpdateEvent.css";
import axios from "./Axios";

function UpdateEvent({eventId}) {
    const [slug, setSlug] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [poster, setPoster] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [published, setPublished] = useState();
    const [eventIdS, setEventIdS] = useState("")
   

    // useEffect(()=>{
    //   alert("hi")
    //   axios.get("/getEventDetails",  { crossdomain: true },{eventId:eventId}).then(response => {
    //     if(response.data==="error"){
    //       alert("error")
    //     }
    //     console.log("Hi")
    //     console.log(response);
    //       setSlug(response.data.slug);
    //       setName(response.data.name);
    //       setDescription(response.data.description);
    //       setPoster(response.data.poster);
    //       setStartDate(response.data.startDate);
    //       setEndDate(response.data.endDate);
    //       setPublished(response.data.published);
    //     });
    // },[])

    useEffect(()=>{
      axios.get("/events",  { crossdomain: true }).then(response => {
        response.data.forEach((event)=>{
          if(event._id===eventId){
            console.log("yes")
                  setSlug(event.slug);
                  setName(event.name);
                  setDescription(event.description);
                  setPoster(event.poster);
                  setStartDate(event.startDate);
                  setEndDate(event.endDate);
                  setPublished(event.published);
                  setEventIdS(event._id);
          }
        })
      },[]);
    },[])
    
    function handleSubmit(event){
        event.preventDefault();

        axios.post('/updateEvent',{
            eventId:eventIdS,
            slug:slug,
            name:name,
            description:description,
            poster:poster,
            startDate:startDate,
            endDate:endDate,
            published:published
        }).then(response=>{
            if(response.data ==="error"){
                alert("An error occured");
            }
            else{
                alert("Successfully updated the event");
            }
        })
    }

    
  return (
    <div className='updateEvent__top'>
        <p>update Event</p>
      <form onSubmit={handleSubmit} className='updateEvent'>
        <p>Slug</p>
        <input 
          type="text" 
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
         <p>Event Name</p>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Description</p>
        <input 
          type="text" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p>Poster Url</p>
        <input 
          type="text" 
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
        <p>Start Date</p>
        <input 
          type="date" 
          format="dd-MM-yyyy"
          value={startDate?.toString().slice(0,10)}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <p>End Date</p>
        <input 
          type="date" 
          format="dd-MM-yyyy"
          value={endDate?.toString().slice(0,10)}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <p>Published</p>
        <select value={published} onChange={(e) => setPublished(e.target.value)}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <input type="submit" className="updateEvent__submit" />
        </form>
    </div>
  )
}

export default UpdateEvent;