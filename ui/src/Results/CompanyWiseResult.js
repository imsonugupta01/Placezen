import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function CompanyWiseResult(){
  let{comp}=useParams();
  console.log(comp);
  const [result,setStudents] = useState("");
  const [company,setcompany] = useState();
  var i=1;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8050/student/details/${comp}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setStudents(data);
      } catch (error) {
        console.error('Error fetching data: ', error.message);
      }
    };
    fetchData();
  }, [1]);
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
            <span className="s2" id="sus" >All Students</span>
                {
                    company && company.map(index=>(
                        <Link id="llll" to={`/CompanyWiseResult/${index}`}><span className="s1">{index}</span></Link>
                    ))
                }

           </div>


           <div>
                
                <table id="tabu">
                    <thead className="tt" id="tabuh">
                        <th>Sl No.</th>
                        <th>Company Name</th>
                        <th>Student Name</th>
                        <th>Roll Number</th>
                        <th>Session</th>
                        <th>Branch</th>
                        <th>Role</th>
                        <th>CTC</th>
                        {/* <th>Branch</th> */}
                        {/* <th>Date</th> */}
                        
                    </thead>
                    {   
                        result && result.map(result =>(
                            <tr>
                               <td>{i++}</td>
                               <td>{result.compName}</td>
                               <td>{result.studName}</td>
                               <td>{result.roll}</td>
                               <td>{result.session}</td>
                               <td>{result.branch}</td>
                               <td>{result.role}</td>
                               <td>{result.ctc/100000} LPA</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
          
    </div>
  )
}
export default CompanyWiseResult;