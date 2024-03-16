import React, { useEffect, useState } from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";
import "../CSS/StProfile.css"
function StuProfilePage(){
  let[pf,setprofile]=useState("");
  let[imageURL,setImageUrl]=useState("")
  let {Id}=useParams();
  // const navigate = useNavigate();

  
  // const handleLogout = () => {
    
  //   console.log('Performing logout operations');

  //   // Redirect to the homepage or login page and replace the current entry in the history stack
  //   navigate('/', { replace: true });
  // };
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
      <span className="s2" id="sus">Welcome {pf.name}</span>
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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;<button style={{ width: '100px', color:"crimson" }}>Save details</button>
          

        </div>

      </div>

     
    </div>
  )
}
export default StuProfilePage;


// <div id="offf">
//          <div id="off1">My Profile</div>
//          {/* <Link to={``}><div id="off2">Edit Profile</div></Link> */}
//          </div>

//          <div id="doremon">
          
           
//               <div id="thisthat">
//               <h4>RollNo. : {pf.roll}</h4>
//               <h4>Name : {pf.name}</h4>
//               <h4>Semester : {pf.semester}</h4>
//               <h4>Branch : {pf.branch}</h4>
//               <h4>DOB : {pf.dob}</h4>
//               <h4>Mobile : {pf.mobile}</h4>
//               <h4>Gender : {pf.gender}</h4>
//               <h4>Email : {pf.email}</h4>
//               <h4>Linkedin : {pf.linkedin}</h4>
//               <h4>Github : {pf.github}</h4>
//               <h4>Cgpa : {pf.cgpa}</h4>
//               <h4>Backlog : {pf.backlog}</h4>
//               <h4>Skills : {pf.skills}</h4>
//               <h4>Interest : {pf.interest}</h4>
//               <h4>Portfolio : {pf.portfolio}</h4>
//               <h4>Experience : {pf.experience}</h4>
//               </div>
         
          
//         </div>


