import React, { useState ,useEffect} from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
function ApproveHiringDetails(){
  let {Id,jobId} = useParams();
  let[requests,setRequests]=useState("");
  let[student,setstudent]=useState(1);
  const navigate = useNavigate();
  useEffect( ()=>{
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8050/OnlineApproval/getby/${jobId}`);
          const response2 = await fetch(`http://localhost:8050/student/getStudent/${Id}`);
          if (!response.ok||!response2.ok) {
            throw new Error('Network response was not okk');
          }
          const data = await response.json();
          console.log(data);
          setRequests(data);
          const data2 = await response2.json();
          console.log(data2);
          setstudent(data2);
          
        } 
        catch (error) {
          console.error('Error fetching data: ', error.message);
        }
  }  ;
  if(1)
  {
      fetchData();
  }        
   },[student])
  return(
    <div>
      <div id="header2"> I.K. Gujral Punjab Technical University</div><br></br>
    
      <div id="hrd">
         {/* <h1>{hiring.companyName}</h1>  */}
         <div id="hihi">{requests.companyName}</div>
         <h3>Role : {requests.role}</h3>
         <h3>Role : {requests.role}</h3>
         <h3>Posted By : </h3>
         <h3>Name : {student.name}</h3>
         <h3>Roll No. : {student.roll}</h3>
      </div>
    </div>
  )
}
export default ApproveHiringDetails;