import React, { useEffect, useState } from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";
import "../CSS/StProfile.css"
function AdminProfilePage(){
  let[pr,setprofil]=useState("");
  let {Id}=useParams();
   useEffect( ()=>{
   const fetchData = async () => {
     try {
         const response = await fetch(`http://localhost:8050/Admin/getAdmin/${Id}`);
         if (!response.ok) {
           throw new Error('Network response was not okk');
         }
          const data = await response.json();
         console.log(data);
         setprofil(data);
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
      <div  id="mySidebar">
      <span className="s2" id="sus">Welcome  {pr.name}</span>
          <Link id="llll"  to={`/AdminProfile/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
          <Link id="llll" to={`/changePass/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Password</span></Link>
           <Link id="llll" to="/"> <span  className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>

      <div id="pff">
        <div id="pff2">
          {/* <h2>Profile</h2> */}
            Profile<br></br>
          <label className="chik">Name</label><br></br>
          <input value={pr.name} disabled></input><br></br>
          <span className="chik">Phone</span><br></br>
          <input value={pr.branch} disabled></input><br></br>
          <span className="chik">Email</span><br></br>
          <input value={pr.email} disabled></input><br></br>
        </div>
        

        <div id="pff3">
          {/* <h2>Profile</h2> */}
          <br></br><label></label>
          <span>Designation</span><br></br>
          <input id="iti" value={pr.designation} disabled></input><br></br>
          <span>Linkedin</span><br></br>
          <input id="iti"value={pr.linkedin} disabled></input><br></br>
          <span>Department</span><br></br>
          <input id="iti"value={pr.department} disabled></input><br></br>
          

        </div>
      </div>

     
    </div>
  )
}
export default AdminProfilePage;
