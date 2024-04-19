import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../CSS/StudentProfile.css"
import PTU_logo from "../Pics/PTU_logo.jpg"
import ProfileLogo from "../Pics/ProfileLogo.jpg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faExclamationCircle,faStickyNote,faFilePen,faCalendarDays ,faUsers, faClipboard, faBook,faChartSimple,faCheckCircle, faFile,faTimesCircle, faClipboardList, faTrophy, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

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
           <Link id="llll" to={`/StResume/${Id}`}><span className="s1" style={{ fontSize: '20px' }}>Resume</span></Link>
           {/* <Link id="llll" to={`/AddHiringStudent/${Id}`}><span className="s1" style={{ fontSize: '20px' }}>Post</span></Link> */}
           <Link id="llll" to={`/StAlumni/${Id}`}><span className="s1" style={{ fontSize: '20px' }}>Alumni</span></Link>
           <Link id="llll" to={`/StuApplied/${Id}`}><span className="s1" style={{ fontSize: '20px' }}>Applied</span></Link>
           <Link id="llll" to={`/StuPending/${Id}`}><span className="s1" style={{ fontSize: '20px' }}>Pending</span></Link>
           <Link id="llll" to={`/Coordinators/${Id}`}><span className="s1" style={{ fontSize: '20px' }}>T & P Coordinators</span></Link>
           <Link id="llll" to={`/Recuriter/${Id}`}><span className="s1" style={{ fontSize: '20px' }}>Top Recruiters</span></Link>
           <Link id="llll" to={`/Contactus/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Contact Us</span></Link>
           <Link id="llll" to="/"> <span className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>

      </div>
      

   

{/* <Link to={`/CampusDrive/${Id}`}>
  <div id="box1">
    <FontAwesomeIcon icon={faCampground} className="box-icon" />
    <h2 id="boxspan1">Campus Drives</h2>
  </div>
</Link>
<Link to={`/OnlineHiring2/${Id}`}>
  <div id="box2">
    <FontAwesomeIcon icon={faLaptop} className="box-icon" />
    <h2 id="boxspan1">Online Hiring</h2>
  </div>
</Link>
<Link to={`/prepMaterial/${Id}`}>
  <div id="box3">
    <FontAwesomeIcon icon={faBook} className="box-icon" />
    <h2 id="boxspan1">Preparation Material</h2>
  </div>
</Link>
<Link to={`/AddHiringStudent/${Id}`}>
  <div id="box4">
    <FontAwesomeIcon icon={faClipboardList} className="box-icon" />
    <h2 id="boxspan1">Posts</h2>
  </div>
</Link>
<Link to={`/StudentResult/${Id}`}>
  <div id="box5">
    <FontAwesomeIcon icon={faTrophy} className="box-icon" />
    <h2 id="boxspan1">Placement Results</h2>
  </div>
</Link>
<Link to={`/EventStudent/${Id}`}>
  <div id="box6">
    <FontAwesomeIcon icon={faCalendarAlt} className="box-icon" />
    <h2 id="boxspan1">Upcoming Sessions</h2>
  </div>
</Link> */}
 
      
       <Link to={`/CampusDrive/${Id}`}><div id="box1"><h2 id="boxspan1">Campus Drives</h2><FontAwesomeIcon id="ioo" icon={faGraduationCap} className="box-icon"/></div></Link>
       <Link to={`/OnlineHiring2/${Id}`}><div id="box2"><h2 id="boxspan1">Online Hiring</h2><FontAwesomeIcon icon={ faChartSimple} className="box-icon" /></div></Link>
       <Link to={`/prepMaterial/${Id}`}><div id="box3"><h2 id="boxspan1">Preparation Material</h2><FontAwesomeIcon icon={faFile} className="box-icon" /></div></Link>
       <Link to={`/stPostMaterial/${Id}`}><div id="box4"><h2 id="boxspan1">Posts</h2><FontAwesomeIcon icon={ faFilePen} className="box-icon" /></div></Link>
       <Link to={`/StudentResult/${Id}`}><div id="box5"><h2 id="boxspan1">Placement Results</h2><FontAwesomeIcon icon={faUsers} className="box-icon" /></div></Link>
       <Link to={`/EventStudent/${Id}`}><div id="box6"><h2 id="boxspan1">Upcoming Sessions</h2><FontAwesomeIcon icon={faCalendarDays } className="box-icon" /></div></Link>

       

    </div>
  )
}
export default StudentProfile;