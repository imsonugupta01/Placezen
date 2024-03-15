import React, { useEffect, useState } from "react";
import "../CSS/OnlineHiring.css";
import { Link, useParams } from "react-router-dom";
function AdminCoordinator(){
  let[tp,settp]=useState("");
   let {Id}=useParams();
    useEffect( ()=>{
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8050/TP/total`);
          if (!response.ok) {
            throw new Error('Network response was not okk');
          }
          const data = await response.json();
          console.log(data);
          settp(data);
          console.log(tp); 
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
         <div id="off1">T & P Coordinators</div>
         </div>

         <div id="doremon">
          {
            tp && tp.map(cl=>(
              <div id="thisthat">
              <h4>Name : {cl.name}</h4>
              <h4>Branch : {cl.branch}</h4>
              <h4>Semester : {cl.semester}</h4>
              <h4>Contact : {cl.contact}</h4>
              <h4>Email : {cl.email}</h4>
              </div>
            ))
          }
        </div>
     </div>
   )
}
export default AdminCoordinator;