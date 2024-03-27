import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import boy from "../Pics/boy.jpg";
import girl from "../Pics/girl.jpg"
import "./studentResult.css";

function StudentResult() {
  let { Id } = useParams();
  let [company, setCompany] = useState();
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch("http://localhost:8050/result/allC");
        const response2 = await fetch("http://localhost:8050/student/allS");

        if (!response1.ok || !response2.ok) {
          throw new Error('Network response was not ok');
        }

        const data1 = await response1.json();
        const data2 = await response2.json();

        console.log(data1);
        console.log(data2);

        setCompany(data1);
        setResult(data2);
      } catch (error) {
        console.error('Error fetching data: ', error.message);
      } finally {
        setLoading(false); // Set loading to false when data fetching is complete
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div id="bcd">I.K. Gujral Punjab Technical University</div>

      <div id="mySidebar">
        <span className="s2" id="sus">Results</span>
        {company &&
          company.map(index => (
            <Link id="llll" to={`/CompanyWiseResult/${index}`} key={index}>
              <span className="s1">{index}</span>
            </Link>
          ))}
      </div>

      {loading ? ( // Render loader while fetching data
        <div className="loader">Loading...</div>
      ) : (
        <div>
          <div id="dis">
            {result &&
              result.map(res => (
                <div className="dis1" key={res.id}>
                  <h2 className="company-heading">{res.compName}</h2>
                  <img src={res.gender === 'Female' ? girl : boy} style={{ width: '120px', height: '120px' }}alt="Student"/>
                  <h3>{res.studName} ({res.branch})</h3>
                  <p>{res.session} - {res.session+4}</p>
                  <p style={{ fontSize: '30px', fontWeight: '700',color:'crimson' }}>{res.ctc / 100000} LPA</p>

                  <p>{res.role}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentResult;
