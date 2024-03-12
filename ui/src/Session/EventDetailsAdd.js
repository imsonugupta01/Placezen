import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./EventDetailsAdd.css"
function EventDetailsAdd()
{ 
  let{Id}=useParams();
  let[eventName,setEventName]=useState("");
  let[eventLocation,setLocation]=useState("");
  let[eventSpeaker,setSpeaker]=useState("");
  let[eventDate,setEventDate]=useState("");
  let[eventTimings,setEventTimings]=useState("");
  let[eventDescription,setEventDescription]=useState("");


  function input1(event)
  {console.log(event.target.value)
    setEventName(event.target.value);
  }
  function input2(event)
  {console.log(event.target.value)
    setLocation(event.target.value);
  }

  function input3(event)
  {console.log(event.target.value)
    setSpeaker(event.target.value);
  }

  function input4(event)
  {console.log(event.target.value)
    setEventDate(event.target.value);
  }

  function input5(event)
  {console.log(event.target.value)
    setEventTimings(event.target.value);
  }
  function input6(event)
  { console.log(event.target.value)
    setEventDescription(event.target.value);
  }

  function submit(event){
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("name",eventName)
    formdata.append("location",eventLocation)
    formdata.append("date",eventDate)
    formdata.append("speaker",eventSpeaker)
    formdata.append("timing",eventTimings)
    formdata.append("description",setEventDescription)

    fetch('http://localhost:8050/session/add', {
      method:'POST',
      body: formdata,
    
    })
      .then(response => response.text())
      .then(data => {
        console.log('Added successful:', data);
      })
      .catch(error => {
        console.error('Error during adding:', error);
      });
  }

  return(
     <div>
       <div id="bcd"> I.K. Gujral Punjab Technical University</div>

       <div id="aed">
        <label>Event Name</label><br></br>
        <input placeholder="Event name" value={eventName} onChange={input1}></input><br></br>
        <label>Event location</label><br></br>
        <input placeholder="Event location" value={eventLocation} onChange={input2}></input><br></br>
        <label>Name of Speaker</label><br></br>
        <input placeholder="Event Spreaker" value={eventSpeaker} onChange={input3}></input><br></br>
        <label>Event Date</label><br></br>
        <input placeholder="Event date" value={eventDate} onChange={input4}></input><br></br>
        <label>Event timing</label><br></br>
        <input placeholder="Event timing" value={eventTimings} onChange={input5}></input><br></br>
        <label>Event Theme</label><br></br>
        <input placeholder="Description" value={eventDescription} onChange={input6}></input><br></br>
        <button id="babu" onClick={submit}>Add</button>
       </div>

     </div>
  )
}
export default EventDetailsAdd;