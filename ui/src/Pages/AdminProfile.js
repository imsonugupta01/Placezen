import React, { useEffect, useState } from "react";
import "../CSS/AdminProfile.css";
import PTU_logo from "../Pics/PTU_logo.jpg";
import ProfileLogo from "../Pics/ProfileLogo.jpg";
import { Link, useParams } from "react-router-dom";

function AdminProfile(){
  let {Id}=useParams();
  let[CDrives,setCDrives]=useState(0);
  let[status,setStatus]=useState(1);
  useEffect(()=>{
        const fetchData = async ()=>{
           try {
            const response=await fetch(`http://localhost:8050/Hiring/count`);
            
            if(!response.ok)
            {
              throw new Error('Network response was not ok');
            }
            const data= await response.json();
            console.log(data)
            setCDrives(data)
            setStatus(0)
           } catch (error) {
            console.error('Error fetching data: ', error.message);
            
           }
        }

        if(1)
         fetchData();
  },[1])

  return(
    <div id="StProfile">
      <div id="header2"> I.K. Gujral Punjab Technical University 
      <img id ="img2"  src={ProfileLogo}></img> 
      
      </div>

      <div  id="mySidebar">
      <span className="s2">Admin Dashboard</span>
          <span className="s1"><img id ="simg" height="120" width="120" src={PTU_logo}></img></span>
          
           <span className="s1">Profile</span>
           {/* <span className="s1" ><Link to={`AdminApprovals/${Id}`}>Approvals</Link></span> */}
           <Link id="llll" to={`/AdminApprovals/${Id}`} > <span className="s1" >Approvals</span></Link>
           {/* <span className="s1">Posts</span> */}
           <span className="s1">Alumni</span>
           <span className="s1">Results</span>
           <span className="s1">Students</span>
           <Link id="llll" to={`/AdminCoordinators/${Id}`}><span className="s1">T & P Coordinators</span></Link>
           {/* <span className="s1"></span> */}
      </div>
      
      <Link to={`/OnlineHiring/${Id}`}> <div id="box1">
        <h2 id="boxspan1">Online Hiring</h2>
        <div id="nob"><center>0</center></div>
       </div></Link>

       <Link to={`/OffHiring/${Id}`}><div id="box2">
        <div><h2 id="boxspan1">Campus Recuirtment</h2></div>
        
        <div id="nob">{CDrives}  </div>
        {/* <br></br> */}
        
       </div></Link>

       <Link to={`/Events/${Id}`}><div id="box3"><h2 id="boxspan1">UpcomingEvents</h2><div id="nob">0</div></div></Link>
       <div id="box4"><h2 id="boxspan1">Results Statistics</h2></div>
       <div id="box5"><h2 id="boxspan1">Placement Guides</h2></div>
       <div id="box6"><h2 id="boxspan1">z</h2></div>
       

    </div>
  )

}
export default AdminProfile;