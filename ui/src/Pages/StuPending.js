import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function StuPending(){
  let {Id}=useParams();
  let[hiring,sethiring]=useState("");

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
  return(

    <div>
       <div id="bcd"> I.K. Gujral Punjab Technical University</div>

       <h3><center>Pending Campus Recuirtment</center></h3>
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
                            <tr>
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