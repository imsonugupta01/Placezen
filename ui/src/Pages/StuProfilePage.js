import React, { useEffect, useState } from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";
import "../CSS/StProfile.css"
function StuProfilePage(){
  let[pf,setprofile]=useState("");
  let[imageURL,setImageUrl]=useState("")
  let {Id}=useParams();
   useEffect( ()=>{
   const fetchData = async () => {
     try {
         const response = await fetch(`http://localhost:8050/student/getStudent/${Id}`);
         const response2 = await fetch(`http://localhost:8050/student/downloadImage/${Id}`);
         if (!response.ok || !response2.ok) {
           throw new Error('Network response was not okk');
         }
        //  if (!response.ok ) {
        //   throw new Error('Network response was not okk');
        // }
         const data = await response.json();
         const imageBlob = await response2.blob(); 
         const imageObjectUrl = URL.createObjectURL(imageBlob);
         console.log(data);
         setprofile(data);
          setImageUrl(imageObjectUrl);
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
      <div  id="mySidebar">
      <span className="s2" id="sus">Welcome  {pf.name}</span>
          <span className="s1"><img id ="simg" height="120" width="120" src={imageURL} ></img></span>
          <Link id="llll"  to={`/StudentProfile/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
          <Link id="llll" to={`/changePass/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Password</span></Link>
           <Link id="llll" to="/"> <span  className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>

      <div id="pff">
        <div id="pff2">
          {/* <h2>Profile</h2> */}
            Profile<br></br>
          <label className="chik">Name</label><br></br>
          <input value={pf.name} disabled></input><br></br>
          <span className="chik">Branch</span><br></br>
          <input value={pf.branch} disabled></input><br></br>
          <span className="chik">Roll No</span><br></br>
          <input value={pf.roll} disabled></input><br></br>
          <span>Semester</span><br></br>
          <input value={`${pf.semester}th`} disabled></input><br></br>
          <span>Date of Birth</span><br></br>
          <input value={pf.dob} disabled></input><br></br>


        </div>
        

        <div id="pff3">
          {/* <h2>Profile</h2> */}
          <br></br><label></label>
          <label>Mobile</label><br></br>
          <input id="iti"value={pf.mobile} disabled></input><br></br>
          <span>Email</span><br></br>
          <input id="iti" value={pf.email} disabled></input><br></br>
          <span>Linkedin</span><br></br>
          <input id="iti"value={pf.linkedin} disabled></input><br></br>
          <span>Github</span><br></br>
          <input id="iti"value={pf.github} disabled></input><br></br>
          <span>Portfolio</span><br></br>
          <input id="iti"value={pf.github} disabled></input><br></br>
          

        </div>
        <div id="pff3">
          {/* <h2>Profile</h2> */}
          <br></br><label></label>
          <span>Average CGPA</span><br></br>
          <input id="iti" value={pf.cgpa} disabled></input><br></br>
          <label>Backlogs</label><br></br>
          <input id="iti"value={pf.backlog} disabled></input><br></br>
          
          <span>Experiences</span><br></br>
          <input id="iti"value={pf.experience} disabled></input><br></br>
          <span>Skills</span><br></br>
          <input id="iti"value={pf.skills} disabled></input><br></br>
          <span>Interest</span><br></br>
          <input id="iti"value={pf.interest} disabled></input><br></br>
          <br></br><br></br>
         <button style={{ width: '100px', color:"crimson" }}>Save details</button>
          

        </div>

      </div>

     
    </div>
  )
}
export default StuProfilePage;
