import React, { useState ,useEffect} from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
function SignUpRequest(){
  let {Id} = useParams();

  let[requrets,setRequests]=useState("");
  let[status,setStatus]=useState(1);
  const navigate = useNavigate();

  useEffect( ()=>{
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8050/signApprov/all`);
          if (!response.ok) {
            throw new Error('Network response was not okk');
          }
          const data = await response.json();
          console.log(data);
          setRequests(data);
          
        } 
        catch (error) {
          console.error('Error fetching data: ', error.message);
        }
  }  ;
  if(1)
  {
      fetchData();
  }        
   },[status])

   const next = async (request)=>{
    const formdata = new FormData();
    formdata.append('roll',request.roll)
    formdata.append('name',request.name)
    formdata.append('dob',request.dob)
    formdata.append('mobile',request.mobile)
    formdata.append('gender',request.gender)
    formdata.append('email',request.email)
    formdata.append('linkedin',request.linkedin)
    formdata.append('github',request.github)
    formdata.append('cgpa',request.cgpa)
    formdata.append('skills',request.skills)
    formdata.append('backlog',request.backlog)
    formdata.append('interest',request.interest)
    formdata.append('portfolio',request.portfolio)
    formdata.append('experience',request.experience)
    formdata.append('imageName',request.imageName)
    formdata.append('imageType',request.imageType)
    formdata.append('imagePath',request.imagePath)
    formdata.append('password',request.password)
    formdata.append('semester',request.semester)
    formdata.append('branch',request.branch)
    formdata.append('s',request.ssession)

    fetch('http://localhost:8050/student/add', {
      method:'POST',
      body: formdata,
    
    })
      .then(response => response.text())
      .then(data => {
        console.log('SignUp successful:', data);
      })
      .catch(error => {
        console.error('Error during SignUp:', error);
      });

      const response= await fetch(`http://localhost:8050/signApprov/delete/${request.id}`)
      .then(response => response.text())
      .then(data => {
        console.log('Successfully Deleted also:', data);
        status++;
        setStatus(status);
      })
      .catch(error => {
        console.error('Error during Deletion:', error);
      });

      

      

    
  
  }
  
  return(
    <div>
      <div id="header2"> I.K. Gujral Punjab Technical University</div>
       <div id="navbar1">
       <div id="navbox2">"  "</div>
       <div>"         "</div>
       <div>SignUpRequest</div>
        <Link id="lul" to={`/AdminApprovals/${Id}`}><div id="navbox1">Hiring Request</div></Link>
        
        <Link id="lul" ><div id="navbox3">Profile Edit Request</div></Link>
        <Link id="lul" to={`/removeStudents/${Id}`}><div id="navbox4">Remove Student</div></Link>
        <Link id="lul"><div id="navbox5">Add Admins</div></Link>
       </div>
       <div  id="mySidebar">
        <span className="s2" id="sus">Welcome</span>
          {/* <span className="s1"><img id ="simg" height="120" width="120"  ></img></span> */}
          <Link id="llll"  to={`/AdminProfile/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
          <Link id="llll" to={`/AdminProfilePage/${Id}`}> <span  className="s1" style={{ fontSize: '20px' }}>Profile</span></Link>
           <Link id="llll" to="/"> <span  className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>
       

       <div id="doremon" >
        { requrets && requrets.map(request =>(
           <div id="thisthat">
            <h1 id="boxspan1">{request.name}</h1>
            <h3>Roll No : {request.roll}</h3>
            <h3>branch: {request.branch}</h3>
            <h3>Semester:{request.semester}th</h3>
            <h1><button onClick={() => next(request)}style={{ width: '80px', color:"crimson" }}>Add</button></h1>



           </div>
        ))
        }
       </div>
    </div>
  )
}
export default SignUpRequest;