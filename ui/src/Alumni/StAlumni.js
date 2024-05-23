import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import boy from "../Pics/boy.jpg";
import girl from "../Pics/girl.jpg"
import "./StAlumniDetails.css"
function StAlumni()
{
  let {Id}=useParams();
  const [loading, setLoading] = useState(true);
  const [result, setStudents] = useState([]);

  useEffect( ()=>{
    const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:8050/alumini/find`);
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
        finally {
          setLoading(false); // Set loading to false when data fetching is complete
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
      <span className="s2" id="sus">Welcome </span>
          {/* <span className="s1"><img id ="simg" height="120" width="120" src={imageURL} ></img></span> */}
          <Link id="llll"  to={`/StudentProfile/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
          <Link id="llll" to={`/changePass/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Password</span></Link>
           <Link id="llll" to="/"> <span  className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>
      <div id="iui">Our Alumni</div>


      {loading ? (
  <div className="loader"></div>
) : (
  <div>
    <div id="dis">
      {/* {result &&
        result.map(res => (
          res.semester === 9 && ( // Check if the semester is 9
            <div className="dis1" key={res.id}>
              <h2 className="company-heading">{res.name}</h2>
              <img src={res.gender === 'Female' ? girl : boy} style={{ width: '120px', height: '120px' }} alt="Student" />
              <h3>{res.job}</h3>
              <p><b>Batch:</b> {res.session} - {res.session + 4}</p>
              <h3>Branch: {res.branch}</h3>
             
            </div>
          )
        ))} */}
        { result && result.map( res =>(
          <div className="dis1" key={res.id}> <Link id="lola" to={`/StAluminiDetails/${res.roll}/${Id}`}>
              <h2 className="company-heading">{res.name}</h2>
              <img src={res.gender === 'Female' ? girl : boy} style={{ width: '120px', height: '120px' }} alt="Student" />
              <h3>{res.job}</h3>
              <p><b>Batch:</b> {res.session} - {res.session + 4}</p>
              {/* <p>{res.description}</p> */}
              </Link>
            </div>

        ))}
    </div>
  </div>
)}


    </div>
  )
}
export default StAlumni;