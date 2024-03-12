import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS/HiringResponseSheet.css"
function HiringResponseSheet ()
{ 
    let {Id,jobId}=useParams();
    let[hiring,sethiring]=useState("")
    let[students,setStudents]=useState("")   

useEffect( ()=>{
    
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8050/Hiring/fetch/${jobId}`);
          if (!response.ok) {
            throw new Error('Network response was not okk');
          }
          const data = await response.json();
          console.log(data);
          sethiring(data);
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

useEffect( ()=>{
    
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8050/Applied/search/${jobId}`);
          if (!response.ok) {
            throw new Error('Network response was not okk');
          }
          const data = await response.json();
          console.log(data);
          setStudents(data);
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

function convertDate(dateStr) {
     
    const date = new Date(dateStr);
    // console.log(date.toLocaleDateString())
    return date.toLocaleDateString();
}








    return(
        <div>
            <div id="bcd"> I.K. Gujral Punjab Technical University</div>
            <table id="tabu">
                <thead className="tt" id="tabuh">
                    <th>Company Name</th>
                    <th>Role</th>
                    <th>CTC</th>
                    <th>Batch</th>
                    <th>CGPA</th>
                    <th>Last Date</th>
                </thead>
                <tr id="tabuh">
                    <td>{hiring.companyName}</td>
                    <td>{hiring.role}</td>
                    <td>{hiring.ctc/100000} LPA</td>
                    <td>{hiring.startSession} - {hiring.startSession+4}</td>
                    <td>{hiring.cgpa}</td>
                    <td>{hiring.endDate}</td>
                </tr>
            </table>


            <h3><center>Student Response List </center></h3>
            <div>
                
                <table id="tabu">
                    <thead className="tt" id="tabuh">
                        <th>Student Name</th>
                        <th>Roll Number</th>
                        <th>Branch</th>
                        <th>Date</th>
                        
                    </thead>
                    {
                        students && students.map(student =>(
                            <tr>
                               <td>{student.name}</td>
                               <td>{student.roll}</td>
                               <td>CSE</td>
                               <td>{convertDate(student.date)}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
            

        </div>
    )
}
export default HiringResponseSheet;