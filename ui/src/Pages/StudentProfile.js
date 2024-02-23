import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS/StudentProfile.css"
import PTU_logo from "../Pics/PTU_logo.jpg"
import ProfileLogo from "../Pics/ProfileLogo.jpg"
function StudentProfile(){
  let {Id} = useParams();
  console.log(Id);


 
  return(
    <div id="StProfile">
      
      <div id="header2"> I.K. Gujral Punjab Technical University 
      <img id ="img2"  src={ProfileLogo}></img>
      
      </div>



      <div  id="mySidebar">
      <span className="s2">Student Dashboard</span>
          <span className="s1"><img id ="simg" height="120" width="120" src={PTU_logo}></img></span>
          
           <span className="s1">Profile</span>
           <span className="s1">Resume</span>
           <span className="s1">Post</span>
           <span className="s1">Alumni</span>
           <span className="s1">Applied</span>
           <span className="s1">Pending</span>
           <span className="s1">Top Recruiters</span>
           <span className="s1">T & P Coordinators</span>
           <span className="s1">Contact Us</span>
      </div>
      

       <div id="box1">
        <h2 id="boxspan1">Campus Drives</h2>

       </div>
       <div id="box2">
        <h2 id="boxspan1">Online Hiring</h2>
       </div>
       <div id="box3"><h2 id="boxspan1">Preparation Material</h2></div>
       <div id="box4"><h2 id="boxspan1">Placement Guide</h2></div>
       <div id="box5"><h2 id="boxspan1">Placement Results</h2></div>
       <div id="box6"><h2 id="boxspan1">Upcoming Sessions</h2></div>
       

    </div>
  )
}
export default StudentProfile;