import React, { useState ,useEffect} from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import "../CSS/AdminApporvals.css";
function AdminApprovals(){
  let {Id} = useParams();
  let[requests,setRequests]=useState("");
  let[status,setStatus]=useState(1);
  const navigate = useNavigate();
  useEffect( ()=>{
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8050/OnlineApproval/allApprovals`);
          if (!response.ok) {
            throw new Error('Network response was not okk');
          }
          const data = await response.json();
          console.log(data);
          setRequests(data);
          
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
    fetch('http://localhost:8050/OnlineApproval/adds', {
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
  }
  return(
    <div>
      <div id="header2"> I.K. Gujral Punjab Technical University</div>
      {/* <div id="navbar1">
        <div id="navbox1"></div>
        <div>"         " </div>
        <div></div>
        <div>Online Hiring Request</div>
        <Link id="lul" to = {`/SignUpRequest/${Id}`}><div id="navbox2">SignUp Request</div></Link>
        <Link id="lul"><div id="navbox3">Profile Edit Request</div></Link>
        <Link id="lul" to={`/removeStudents/${Id}`}><div id="navbox4">Remove Student</div></Link>
        <Link id="lul"><div id="navbox5">Add Admins</div></Link>
       </div> */}
       {/* <div  id="mySidebar">
           <span className="s2" id="sus" >Welcome</span>
          
          
          
           <span className="s1">Dashboard</span>
          
           <span className="s1" >Profile</span>
          
           <span className="s1">Logout</span>
           
          
      </div> */}

      <div  id="mySidebar">
      <span className="s2" id="sus">Welcome </span>
          {/* <span className="s1"><img id ="simg" height="120" width="120" src={imageURL} ></img></span> */}
           <Link id="llll" to = {`/SignUpRequest/${Id}`} > <span className="s1" style={{ fontSize: '20px' }}>SignUp Request</span></Link>
           <Link id="llll" to={`/removeStudents/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Remove Student</span></Link>
           {/* <Link id="llll" > <span  className="s1" style={{ fontSize: '20px' }}>Profile Edit Request</span></Link> */}
           <Link id="llll"  to={`/AddAdmins/${Id}`}> <span  className="s1" style={{ fontSize: '20px' }}>Add admins</span></Link>
           <Link id="llll" to={`/AdminApprovals/${Id}`} > <span  className="s1" style={{ fontSize: '20px' }}>Hiring Request</span></Link>
      </div>
            <div id="iui">Online Hiring Approval</div>
       <div id="doremon" className="dor">
        { requests && requests.map(request =>(<Link id="lalu" to={`/ApproveHiringDetails/${request.sid}/${request.jobId}`}>
           <div id="thisthat">
            <h3>Company : {request.companyName}</h3>
            <h3>View details</h3>
           </div></Link>
        ))
        }
       </div>
    </div>
  )
}
export default AdminApprovals;