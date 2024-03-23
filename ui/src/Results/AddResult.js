import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AddResult.css"
function AddResult()
{
    let[hiring,sethiring]=useState("");
    let[companyId,setcompanyId]=useState();
    let[StRoll,setStRoll]=useState();
    let[companyName,setcompanyName]=useState(); 
    let[role,setrole]=useState();
    let[ctc,setctc]=useState();
    const [selectedOption, setSelectedOption] = useState('');
    useEffect(()=>{
        const fetchData = async ()=>{
           try {
            const response=await fetch(`http://localhost:8050/Hiring/get`);
            if(!response.ok)
            {
              throw new Error('Network response was not ok');
            }
            const data= await response.json();
            console.log(data)
            sethiring(data)
           } catch (error) {
            console.error('Error fetching data: ', error.message);
           }
        }
        if(1)
         fetchData();
  },[1])
  function input1(event){
    setSelectedOption(event.target.value);
    const [CId, CName] = event.target.value.split(',');
    console.log(CId + " " + CName);
    // setcompanyId(event.target.value);
  }
    return(
        <div>
        <div id="bcd"> I.K. Gujral Punjab Technical University</div>
        <div  id="mySidebar">
        <span className="s2" id="sus">Results </span>
          <Link id="llll"  > <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
          <Link id="llll" to="/"> <span  className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>
      <div id="niu">
       <div>
       <select value={selectedOption} onChange={input1}>
        <option value="">select ...</option>
        {
            hiring && hiring.map(company=>(
                <option value={`${company.jobId},${company.companyName}`}>{company.companyName}</option>
            ))
        }
       </select>
       </div>
      </div>
        </div>
    )
}
export default AddResult