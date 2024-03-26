import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function StudentResult(){
  let {Id}=useParams();
  let[company,setcompany]=useState()

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8050/result/allC");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setcompany(data);
      } catch (error) {
        console.error('Error fetching data: ', error.message);
      }
    };
    fetchData();
  }, []);
  return(
    <div>
       <div id="bcd">I.K. Gujral Punjab Technical University</div>
       
      <div  id="mySidebar">
            {/* <span className="s2" id="sus" >Dashboard</span> */}
            <span className="s2" id="sus" >All Companies</span>
           
                {
                    company && company.map(index=>(
                        <Link id="llll" to={`/CompanyWiseResult/${index}`}><span className="s1">{index}</span></Link>
                    ))
                }

           </div>
    </div>
  )
}
export default StudentResult;