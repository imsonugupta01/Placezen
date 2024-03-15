import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function StuProfilePage(){
  let[pf,setprofile]=useState("");
  let {Id}=useParams();
   useEffect( ()=>{
   const fetchData = async () => {
     try {
         const response = await fetch(`http://localhost:8050/student/getStudent/${Id}`);
         if (!response.ok) {
           throw new Error('Network response was not okk');
         }
         const data = await response.json();
         console.log(data);
         setprofile(data);
        //  console.log(profile); 
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
        <div id="offf">
         <div id="off1">My Profile</div>
         {/* <Link to={``}><div id="off2">Edit Profile</div></Link> */}
         </div>

         <div id="doremon">
          
           
              <div id="thisthat">
              <h4>RollNo. : {pf.roll}</h4>
              <h4>Name : {pf.name}</h4>
              <h4>Semester : {pf.semester}</h4>
              <h4>Branch : {pf.branch}</h4>
              <h4>DOB : {pf.dob}</h4>
              <h4>Mobile : {pf.mobile}</h4>
              <h4>Gender : {pf.gender}</h4>
              <h4>Email : {pf.email}</h4>
              <h4>Linkedin : {pf.linkedin}</h4>
              <h4>Github : {pf.github}</h4>
              <h4>Cgpa : {pf.cgpa}</h4>
              <h4>Backlog : {pf.backlog}</h4>
              <h4>Skills : {pf.skills}</h4>
              <h4>Interest : {pf.interest}</h4>
              <h4>Portfolio : {pf.portfolio}</h4>
              <h4>Experience : {pf.experience}</h4>
              </div>
         
          
        </div>
    </div>
  )
}
export default StuProfilePage;