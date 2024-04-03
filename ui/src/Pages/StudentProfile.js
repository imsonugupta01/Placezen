import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../CSS/StudentProfile.css"
import PTU_logo from "../Pics/PTU_logo.jpg"
import ProfileLogo from "../Pics/ProfileLogo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
function StudentProfile(){
  let {Id} = useParams();
  const [flag, setFlag] = useState(0);
  console.log(Id);
  let[profile,setProfile]=useState("");
   useEffect( ()=>{
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8050/student/getStudent/${Id}`);
          if (!response.ok) {
            throw new Error('Network response was not okk');
          }
          const data = await response.json();
          console.log(data); 
          setProfile(data) ;
        } 
        catch (error) {
          console.error('Error fetching data: ', error.message);
        }
  }  ;
  if(Id)
  {
      fetchData();
  }        
   },[Id])
  
   if(profile===null)
   return(<div><h1><center>Page not found !!!!</center></h1></div>)
  return(
    <div id="StProfile">
      <div id="header2"> I.K. Gujral Punjab Technical University 
      {/* <img id ="img2"  src={ProfileLogo}></img>
      <div id="hid" >
        <div>change password </div>
        <div>logout</div>
      </div> */}
      </div>
      <div  id="mySidebar">
      <span className="s2" id="sus">Student Dashboard</span>
          <span className="s1"><img id ="simg" height="120" width="120" src={PTU_logo}></img></span>
          <Link id="llll" to={`/StuProfilePage/${Id}`}><span className="s1" style={{ fontSize: '20px' }}>Profile</span></Link>
           <span className="s1" style={{ fontSize: '20px' }}>Resume</span>
           <Link id="llll" to={`/PostStudent/${Id}`}><span className="s1" style={{ fontSize: '20px' }}>Post</span></Link>
           <Link id="llll" to={`/StAlumni/${Id}`}><span className="s1" style={{ fontSize: '20px' }}>Alumni</span></Link>
           <Link id="llll" to={`/StuApplied/${Id}`}><span className="s1" style={{ fontSize: '20px' }}>Applied</span></Link>
           <Link id="llll" to={`/StuPending/${Id}`}><span className="s1" style={{ fontSize: '20px' }}>Pending</span></Link>
           <Link id="llll" to={`/Coordinators/${Id}`}><span className="s1" style={{ fontSize: '20px' }}>T & P Coordinators</span></Link>
           <Link id="llll" to={`/Recuriter/${Id}`}><span className="s1" style={{ fontSize: '20px' }}>Top Recruiters</span></Link>
           <Link id="llll" to={`/Contactus/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Contact Us</span></Link>
      </div>
      

       <Link to={`/CampusDrive/${Id}`}><div id="box1"><h2 id="boxspan1">Campus Drives</h2></div></Link>
       <Link to={`/OnlineHiring2/${Id}`}><div id="box2"><h2 id="boxspan1">Online Hiring</h2></div></Link>
       <Link to={`/prepMaterial/${Id}`}><div id="box3"><h2 id="boxspan1">Preparation Material</h2></div></Link>
       <div id="box4"><h2 id="boxspan1">Placement Guide</h2></div>
       <Link to={`/StudentResult/${Id}`}><div id="box5"><h2 id="boxspan1">Placement Results</h2></div></Link>
       <Link to={`/EventStudent/${Id}`}><div id="box6"><h2 id="boxspan1">Upcoming Sessions</h2></div></Link>
       

    </div>
  )
}
export default StudentProfile;