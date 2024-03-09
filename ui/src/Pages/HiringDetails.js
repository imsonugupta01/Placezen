import React, { useEffect, useState } from "react";
import "../CSS/HiringDetails.css";
import { useParams } from "react-router-dom";
function HiringDetails(){

  let{Id,JobId}=useParams();
  let currentDate = new Date();
  let[hiring,sethiring]=useState("");
  let[interest,setinterest]=useState(0);

  function adding(){
    console.log(interest)

    if(interest===1){
    const formdata = new FormData();
    formdata.append('Jobid',JobId);
    formdata.append('StudentId',Id);
    formdata.append('date',currentDate);

    fetch('http://localhost:8050/Applied/added', {
      method:'POST',
      body: formdata,
    
    })
      .then(response => response.text())
      .then(data => {
        console.log('Added successful:', data);
      })
      .catch(error => {
        console.error('Error during Added:', error);
      });
  }



}


  function input1(event){
    if(interest===0){
      setinterest(1);
    }
    else{
      setinterest(0);
    }
  }

  useEffect( ()=>{
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8050/Hiring/fetch/${JobId}`);
          if (!response.ok) {
            throw new Error('Network response was not okk');
          }
          const data = await response.json();
          console.log(data);
          sethiring(data);
        } 
        catch (error) {
          console.error('Error fetching data: ', error.message);
        }
  }  ;
  if(1)
  {
      fetchData();
  }        
   },[1])
  
  return(
    <div>
      <div id="bcd"> I.K. Gujral Punjab Technical University</div>
      <div id="gupta">
      <div id="hrd">
         <h1>{hiring.companyName}</h1> 
         <h3>Location : {hiring.location}</h3>
         <h3>Role : {hiring.role}</h3>
         <h3>Eligible Branch : {hiring.branch}</h3>
         <h3>CTC : {hiring.ctc/100000} LPA</h3>
         <h3>Maximum Backlogs : {hiring.backlog}</h3>
         <h3>Description details : {hiring.description}</h3>
         <h3>Cgpa : {hiring.cgpa}</h3>
         <h3>Eligible Batch : {hiring.startSession} - {hiring.startSession+4}</h3>
         <h3>Eligible Semester : {hiring.semester}</h3>
         <h3>Application Starting Date : {hiring.startDate}</h3>
         <h3>Application Closing Deadline : {hiring.endDate}</h3>
      </div>
      <div id="opl"> 
        <h2>Are you Interested ? </h2>
      <input type="radio" id="html" name="Are You Interested ? " value={interest} onChange={input1}></input>
      <label for="Yes">YES</label><br></br>
      <input type="radio" id="html" name="Are You Interested ? " value={interest} onChange={input1}></input>
      <label for="No">NO</label><br></br><br></br>
      <button onClick={adding}>Submit</button>
      </div>
      </div>
    </div>
  )
}
export default HiringDetails;