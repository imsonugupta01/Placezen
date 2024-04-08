import React, { useEffect, useState } from "react";
import "../CSS/OnlineHiring.css";
import { Link, useParams } from "react-router-dom";
function OnlineHiring(){
   let[hiring,sethiring]=useState("");
   let {Id}=useParams();
    useEffect( ()=>{
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8050/AddOn/alll`);
          if (!response.ok) {
            throw new Error('Network response was not okk');
          }
          const data = await response.json();
          console.log(data);
          sethiring(data);
          console.log(hiring); 
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
        <span className="s2" id="sus">Welcome</span>
          {/* <span className="s1"><img id ="simg" height="120" width="120"  ></img></span> */}
          <Link id="llll"  to={`/AdminProfile/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
          <Link id="llll" to={`/AdminProfilePage/${Id}`}> <span  className="s1" style={{ fontSize: '20px' }}>Profile</span></Link>
           <Link id="llll" to="/"> <span  className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>
      <div id="iui">Off Campus Recruitment</div>
        <div id="offf">
         <div id="off1"></div>
         <Link id="lola" to={`/AddOnlineHiring/${Id}`}><div id="off2">Add More +</div></Link>
         </div>

         <div id="doremon">
          {
            hiring && hiring.map(hire=>(
              <div id="thisthat"><h2>{hire.companyName}</h2>
              <h4>ROLE : {hire.role}</h4>
              <h4><a href={`${hire.link}`} target="_blank" >Apply Here</a></h4>
             
              </div>
            ))
          }
          
        </div>
     </div>
   )
}
export default OnlineHiring;

