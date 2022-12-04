import React,{useState} from 'react';
import "./CreateEvent.css";
import axios from "./Axios";

function CreateEvent() {
    const [slug, setSlug] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [poster, setPoster] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [published, setPublished] = useState(true);

    function handleSubmit(event){
    event.preventDefault();
    axios.post('/postEvent',{
        slug:slug,
        name:name,
        description:description,
        poster:poster,
        startDate:startDate,
        endDate:endDate,
        published:published
    }).then(response=>{
      if(response.data==="error"){
      alert("An error occured");
    }else{
      alert("The Event is successfully created");
      setSlug("");
      setName("");
      setDescription("");
      setPoster("");
      setStartDate("");
      setEndDate("");
      setPublished(true);
    }
  });
    }

  return (
    <div className='createEvent__top'>
    <div >
        <h1>Create Event</h1>
      <form onSubmit={handleSubmit} className='createEvent'>
        <p>Slug</p>
        <input 
          type="text"
          required 
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
         <p>Event Name</p>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Description</p>
        <input 
          type="text" 
          required 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p>Poster Url</p>
        <input 
          type="text" 
          required 
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
        <p>Start Date</p>
        <input 
          type="date" 
          required 
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <p>End Date</p>
        <input 
          type="date" 
          required 
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <p>Published</p>
        <select value={published} required  onChange={(e) => setPublished(e.target.value)}>
          <option value={true} selected>Yes</option>
          <option value={false}>No</option>
        </select>
        <input type="submit" className='createEvent__submit'/>
        </form>
    </div>
    </div>
  )
}

export default CreateEvent;