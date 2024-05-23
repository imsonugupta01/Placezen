import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./StudCompWiseResult.css"
import boy from "../Pics/boy.jpg";
import girl from "../Pics/girl.jpg"
function StudentCompWiseResult(){
  let{comp}=useParams();
  const [result, setStudents] = useState([]);
  let [company, setCompany] = useState();
  const [loading, setLoading] = useState(true); // State to track loading status
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8050/result/allC");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setCompany(data);
      } catch (error) {
        console.error('Error fetching company data: ', error.message);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when fetching data starts
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
      } finally {
        setLoading(false); // Set loading to false when data fetching is complete
      }
    };
    fetchData();
  }, [comp]);

  return (
    <div>
      <div id="bcd">I.K. Gujral Punjab Technical University</div>
      <div id="mySidebar">
        <span className="s2" id="sus">{comp} Results</span>
        {company && company.map(index => (
            <Link id="llll" to={`/CompStudResult/${index}`} key={index}>
              <span className="s1">{index}</span>
            </Link>
          ))}
      </div>
      
        {/* <span id="huh">{comp} </span>
        <span id="huh1"> Congratulates</span> */}

      {loading ? ( // Render loader while fetching data
        <div className="loader"></div>
      ) : (
        <div>
          <div id="dis">
            {result &&
              result.map(res => (
                <div className="dis1" key={res.id}>
                  <h2 className="company-heading">{res.compName}</h2>
                  <p id="cngr">Congratulates</p>
                  <img src={res.gender === 'Female' ? girl : boy} style={{ width: '120px', height: '120px' }}alt="Student"/>
                  <h3>{res.studName}</h3>
                  <h3>{res.branch}</h3>
                  <p>{res.session} - {res.session+4}</p>
                  <p style={{ fontSize: '30px', fontWeight: '700',color:'crimson' }}>{res.ctc / 100000} LPA</p>

                  <p>{res.role}</p>
                </div>
              ))}
          </div>
        </div>
      )}

    </div>
  )

}
export default StudentCompWiseResult;