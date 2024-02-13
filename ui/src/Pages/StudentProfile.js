import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS/StudentProfile.css"
function StudentProfile(){
  let {Id} = useParams();
  console.log(Id);


 
  return(
    <div id="StProfile">
      
      <div id="header2"> I.K. Gujral Punjab Technical University </div>


      <div  id="mySidebar">

           <span className="s1">Profile</span>
           <span className="s1">Resume</span>
           <span className="s1">Post</span>
           <span className="s1">Alumni</span>
           <span className="s1">Companies</span>
           <span className="s1">Placement Results</span>
           <span className="s1">T & P Coordinators</span>
           <span className="s1">Contact Us</span>
      </div>
      

       <div id="box1">Saloni</div>
       <div id="box1">Saloni</div>

    </div>
  )
}
export default StudentProfile;