import React, { useEffect, useState } from "react";
import { useParams ,Link} from "react-router-dom";
function StuApplied(){
  let{Id}=useParams();
  let[hiring,sethiring]=useState("");
  useEffect( ()=>{
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8050/Applied/find/${Id}`);
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


function convertDate(dateStr) {
     
  const date = new Date(dateStr);
  // console.log(date.toLocaleDateString())
  return date.toLocaleDateString();
}

  return(
    <div>
      <div id="bcd"> I.K. Gujral Punjab Technical University</div>
      <div  id="mySidebar">
      <span className="s2" id="sus">Welcome</span>
          {/* <span className="s1"><img id ="simg" height="120" width="120"  ></img></span> */}
          <Link id="llll"  to={`/StudentProfile/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
          <Link id="llll" to={`/StuProfilePage/${Id}`}> <span  className="s1" style={{ fontSize: '20px' }}>Profile</span></Link>
          <Link id="llll" to={`/StuPending/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Pending</span></Link>
           <Link id="llll" to="/"> <span  className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>
       
      <h3><center>Applied Forms for Campus Recuirtment</center></h3>
            <div>
                
                <table id="tabu">
                    <thead className="tt" id="tabuh">
                        <th>Company Name</th>
                        <th>Role</th>
                        <th>Location</th>
                        <th>CTC</th>
                        <th>Date Applied</th>
                        
                    </thead>
                    {
                        hiring && hiring.map(hire =>(
                            <tr>
                               <td>{hire.companyName}</td>
                               <td>{hire.role}</td>
                               <td>{hire.location}</td>
                               <td>{hire.ctc}</td>
                               <td>{convertDate(hire.dateApplied)}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
            

    </div>
  )
}
export default StuApplied;


