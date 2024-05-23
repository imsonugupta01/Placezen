import React, { useState ,useEffect} from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import "../CSS/ApprovHiringDetails.css"
function ApproveHiringDetails(){
  let {Id,jobId} = useParams();
  let[requests,setRequests]=useState("");
  let[status,setStatus]=useState(1);
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
   },[status])


   const next = async (request)=>{
    const formdata = new FormData();
    formdata.append('Company',request.companyName)
    formdata.append('Role',request.role)
    formdata.append('Apply',request.link)
    fetch('http://localhost:8050/AddOn/Online', {
      method:'POST',
      body: formdata,
    
    })
      .then(response => response.text())
      .then(data => {
        console.log('SignUp successful:', data);
      })
      .catch(error => {
        console.error('Error during SignUp:', error);
      });

      const response= await fetch(`http://localhost:8050/OnlineApproval/delete/${Id}`)
      .then(response => response.text())
      .then(data => {
        console.log('Successfully Deleted also:', data);
        status++;
        setStatus(status);
      })
      .catch(error => {
        console.error('Error during Deletion:', error);
      });
  }
  if(requests==null){
    return (
      <div>
        <div id="header2"> I.K. Gujral Punjab Technical University</div>
      <div  id="mySidebar">
           <span className="s2" id="sus" >Welcome</span>  
           <span className="s1">Dashboard</span> 
           <span className="s1" >Profile</span> 
           <span className="s1">Logout</span>
      </div>
      </div>
    )
  }

  return(
    <div>
      <div id="header2"> I.K. Gujral Punjab Technical University</div>
      <div  id="mySidebar">
           <span className="s2" id="sus" >Welcome</span>  
           <span className="s1">Dashboard</span> 
           <span className="s1" >Profile</span> 
           <span className="s1">Logout</span>
      </div><br></br>
    
      <div id="hrd" className="hmm">
         {/* <h1>{hiring.companyName}</h1>  */}
         <div id="hihi">Company Name : {requests.companyName}</div>
         <h3>Role : {requests.role}</h3>
         <h3>Posted By : {student.name}</h3>
         <h3>Branch : {student.branch}</h3>
         <h3>Semester : {student.semester}th</h3>
         <h3>Roll No : {student.roll}</h3>
         <h3><a href={`${requests.link}`} target="_blank" >View Details</a></h3>
      </div>
      <div id="devu">
        <button onClick={() => next(requests)} className="devus">Approve Request</button>
        <button className="devus">Decline Request</button>
      </div>
    </div>
  )
}
export default ApproveHiringDetails;