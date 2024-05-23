import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
function RemoveStudents()
{
    let{Id}=useParams();
    let[students,setStudents]=useState();
    let[status,setStatus]=useState(0)
    var i=1;

    useEffect( ()=>{
        const fetchData = async () => {
          try {
              const response = await fetch(`http://localhost:8050/student/all`);
              if (!response.ok) {
                throw new Error('Network response was not okk');
              }
              const data = await response.json();
              console.log(data);
              setStudents(data)
              
              
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


   const remove= async(id)=>
    {
        const response= await fetch(`http://localhost:8050/student/delete/${id}`)
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
             <div id="bcd"> I.K. Gujral Punjab Technical University</div>
             <div id="navbar1">
       <div id="navbox2">"      "</div>
       <div>    </div>
       <div></div>
       <div>Remove Students</div>
        <Link id="lul" to={`/AdminApprovals/${Id}`}><div id="navbox1">Online Hiring Request</div></Link>
        
        <Link id="lul" ><div id="navbox3">Profile Edit Request</div></Link>
        <Link id="lul" to = {`/SignUpRequest/${Id}`}><div id="navbox2">SignUp Request</div></Link>
        {/* <Link id="lul" to={`/removeStudents/${Id}`}><div id="navbox4">Remove Student</div></Link> */}
        <Link id="lul"><div id="navbox5">Add Admins</div></Link>
       </div>
         <div  id="mySidebar">
        <span className="s2" id="sus">Welcome</span>
          {/* <span className="s1"><img id ="simg" height="120" width="120"  ></img></span> */}
          <Link id="llll"  to={`/AdminProfile/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
          <Link id="llll" to={`/AdminProfilePage/${Id}`}> <span  className="s1" style={{ fontSize: '20px' }}>Profile</span></Link>
           <Link id="llll" to="/"> <span  className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>


      <div>
                
                <table id="tabu">
                    <thead className="tt" id="tabuh">
                        <th>Sl No.</th>
                        <th>Student Name</th>
                        <th>Session</th>
                        <th>Roll Number</th>
                        <th>Branch</th>
                        <th></th>
                        {/* <th>Date</th> */}
                        
                    </thead>
                    {   
                        students && students.map(student =>(
                            <tr>
                               <td>{i++}</td>
                               <td>{student.name}</td>
                               <td>{student.ssession} - {student.ssession+4}</td>
                               <td>{student.roll}</td>
                               <td>{student.branch}</td>
                               {/* <td>{convertDate(student.date)}</td> */}
                              <td><button onClick={()=>remove(student.id)} style={{width:'100%', backgroundColor: 'green', color: '#fff', marginRight: '8%', padding: '15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Remove</button></td> 
                            </tr>
                            
                        ))
                    }
                </table>
            </div>


        </div>
    )
}
export default RemoveStudents;