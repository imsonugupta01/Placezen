import React from "react";
import "../CSS/AdminProfile.css";
import PTU_logo from "../Pics/PTU_logo.jpg";
import ProfileLogo from "../Pics/ProfileLogo.jpg";
import { Link, useParams } from "react-router-dom";

function AdminProfile(){
  let {Id}=useParams();

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
           <Link to={`/AdminApprovals/${Id}`} > <span className="s1" >Approvals</span></Link>
           {/* <span className="s1">Posts</span> */}
           <span className="s1">Alumni</span>
           <span className="s1">Results</span>
           <span className="s1">Students</span>
           <span className="s1">T & P Coordinators</span>
           {/* <span className="s1"></span> */}
      </div>
      
      <Link to={`/OnlineHiring/${Id}`}> <div id="box1">
        <h2 id="boxspan1">Online Hiring</h2>
       </div></Link>
       <Link to={`/OffHiring/${Id}`}><div id="box2">
        <h2 id="boxspan1">Campus Recuirtment</h2>
       </div></Link>
       <div id="box3"><h2 id="boxspan1">Events</h2></div>
       <div id="box4"><h2 id="boxspan1">x</h2></div>
       <div id="box5"><h2 id="boxspan1">y</h2></div>
       <div id="box6"><h2 id="boxspan1">z</h2></div>
       

    </div>
  )

}
export default AdminProfile;