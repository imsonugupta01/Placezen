import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "./studentResult.css";
import boy from "../Pics/boy.jpg";
import girl from "../Pics/girl.jpg"

function StudentResult() {
  let { Id } = useParams();
  let [company, setCompany] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [year, setYear] = useState(2024);
  const [lpa, setLpa] = useState(0);


  const fetchStudents = async (year, lpa) => {
    console.log(year,lpa);
    setLoading(true);
    try {
      const response1 = await fetch("http://localhost:8050/result/allC");
      const response2 = await fetch(`http://localhost:8050/student/std/${year}/${lpa}`);

      if (!response1.ok || !response2.ok) {
        throw new Error('Network response was not ok');
      }

      const data1 = await response1.json();
      const data2 = await response2.json();

      console.log(data1);
      console.log(data2);

      setCompany(data1);
      setStudents(data2);
    } catch (error) {
      console.error('Error fetching data: ', error.message);
    } finally {
      setLoading(false); // Set loading to false when data fetching is complete
    }
  };

  useEffect(() => {
    fetchStudents(year, lpa);
  }, []);


  return(
    <div>
      <div id="bcd">I.K. Gujral Punjab Technical University</div>

      <div id="mySidebar">
        <span className="s2" id="sus">Results</span>
        {company &&
          company.map(index => (
            <Link id="llll" to={`/CompStudResult/${index}/${Id}`} key={index}>
              <span className="s1">{index}</span>
            </Link>
          ))}
        <Link id="llll" to={`/StudentProfile/${Id}`}> 
          <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span>
        </Link>
      </div>

      <div className="search-container">
        <input 
          type="number" 
          placeholder="Enter year" 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
        />
        
        <input 
         
          type="text" 
          placeholder="Enter LPA" 
          value={lpa}
          onChange={(e) => setLpa(e.target.value)} 
        
         
        />
    
        
       
       
       
        <button onClick={() => fetchStudents(year, lpa)}>Search</button>
      </div>

      <div>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <div>
            <div id="dis">
              {students &&
                students.map(res => (
                  <div className="dis1" key={res.id}>
                    <h2 className="company-heading">{res.compName}</h2>
                    <p id="cngr">Congratulates</p>
                    <img src={res.gender === 'Female' ? girl : boy} style={{ width: '120px', height: '120px' }} alt="Student"/>
                    <h3>{res.studName}</h3>
                    <h3>{res.branch}</h3>
                    <p>{res.session} - {res.session + 4}</p>
                    <p style={{ fontSize: '30px', fontWeight: '700', color:'crimson' }}>{res.ctc / 100000} LPA</p>
                    <p>{res.role}</p>
                  </div>
                ))}
            </div>   
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentResult;
