import { useEffect, useState } from "react";

function AllStudents()
{

    let[students,setStudetns]=useState("");
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
              setStudetns(data);
            } 
            catch (error) {
              console.error('Error fetching data: ', error.message);
            }
      }  ;
      if(1)
      {
          fetchData();
      }  
    },[])
    return(
     <div>
        <div id="bcd"> I.K. Gujral Punjab Technical University</div>

        <div  id="mySidebar">
           <span className="s2" id="sus" >All Students</span>
          
          
          
           <span className="s1">Computer Science</span>
          
           <span className="s1" >Electronics</span>
          
           <span className="s1">Electrical</span>
           <span className="s1">Civil</span>
           <span className="s1">Mechanical</span>
          
      </div>
      
      <div>
                
                <table id="tabu">
                    <thead className="tt" id="tabuh">
                        <th>Sl No.</th>
                        <th>Student Name</th>
                        <th>Session</th>
                        <th>Roll Number</th>
                        <th>Branch</th>
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
                            </tr>
                        ))
                    }
                </table>
            </div>

     </div>
    )
}
export default AllStudents;