import React, { useEffect, useState } from "react";
import { useParams,Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "../CSS/StPending.css"
function StuPending(){
  let {Id}=useParams();
  let[hiring,sethiring]=useState("");
  const navigate = useNavigate();

  useEffect( ()=>{
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8050/Applied/queen/${Id}`);
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

const next =(jobId)=>{
  
  navigate(`/HiringDetails/${Id}/${jobId}`);

}
  return(

    <div>
       <div id="bcd"> I.K. Gujral Punjab Technical University</div>
       <div  id="mySidebar">
      <span className="s2" id="sus">Welcome</span>
          {/* <span className="s1"><img id ="simg" height="120" width="120"  ></img></span> */}
          <Link id="llll"  to={`/StudentProfile/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
          <Link id="llll" to={`/StuProfilePage/${Id}`}> <span  className="s1" style={{ fontSize: '20px' }}>Profile</span></Link>
          <Link id="llll" to={`/StuApplied/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Applied</span></Link>
           <Link id="llll" to="/"> <span  className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>

       <h2><center>Pending Campus Recuirtment</center></h2>
            <div>
                
                <table id="tabu">
                    <thead className="tt" id="tabuh">
                        <th>Company Name</th>
                        <th>Role</th>
                        <th>Location</th>
                        <th>CTC</th>
                        <th>End Date</th>
                        
                    </thead>
                    {
                        hiring && hiring.map(hire =>(
                            <tr  key={hire.jobId} onClick={() => next(hire.jobId)} className="clickable-row" >
                               <td>{hire.companyName}</td>
                               <td>{hire.role}</td>
                               <td>{hire.location}</td>
                               <td>{hire.ctc}</td>
                              <td>{hire.endDate}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
            

    </div>
  )

}
export default StuPending;