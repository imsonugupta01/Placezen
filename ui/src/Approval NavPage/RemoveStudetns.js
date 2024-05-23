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
             <div  id="mySidebar">
      <span className="s2" id="sus">Welcome </span>
          {/* <span className="s1"><img id ="simg" height="120" width="120" src={imageURL} ></img></span> */}
           <Link id="llll" to = {`/SignUpRequest/${Id}`} > <span className="s1" style={{ fontSize: '20px' }}>SignUp Request</span></Link>
           <Link id="llll" to={`/removeStudents/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Remove Student</span></Link>
           {/* <Link id="llll" > <span  className="s1" style={{ fontSize: '20px' }}>Profile Edit Request</span></Link> */}
           <Link id="llll" to={`/AddAdmins/${Id}`}> <span  className="s1" style={{ fontSize: '20px' }}>Add admins</span></Link>
           <Link id="llll" to={`/AdminApprovals/${Id}`} > <span  className="s1" style={{ fontSize: '20px' }}>Online Hiring Request</span></Link>
      </div>
            <div id="iui">Students Removal Page</div>


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