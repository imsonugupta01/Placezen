import React, { useEffect, useState } from "react";
import "./Adminresult.css"
import { Link, useParams } from "react-router-dom";

function Adminresult() {
  let { Id } = useParams();
  const [company, setCompany] = useState([]);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  var i = 1;

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
      try {
        const response = await fetch("http://localhost:8050/student/allS");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setResult(data);
      } catch (error) {
        console.error('Error fetching result data: ', error.message);
      } finally {
        setLoading(false); // Set loading to false when data fetching is complete
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div id="bcd"> I.K. Gujral Punjab Technical University</div>
      <div id="mySidebar">
        <span className="s2" id="sus" >All Students</span>
        {company && company.map(index => (
          <Link id="llll" to={`/CompanyWiseResult/${index}`} key={index}><span className="s1">{index}</span></Link>
        ))}
      </div>
      <Link id="addu" to={`/AddResult/${Id}`}><button >Add more results</button></Link>
      {loading ? ( // Display loading spinner while fetching data
        <div className="loader"></div> // Use CSS to style loader
      ) : (
        <div>
          <div>
            <table id="tabu">
              <thead className="tt" id="tabuh">
                <tr>
                  <th>Sl No.</th>
                  <th>Company Name</th>
                  <th>Student Name</th>
                  <th>Roll Number</th>
                  <th>Session</th>
                  <th>Branch</th>
                  <th>Role</th>
                  <th>CTC</th>
                </tr>
              </thead>
              <tbody>
                {result && result.map((result, index) => (
                  <tr key={index}>
                    <td>{i++}</td>
                    <td>{result.compName}</td>
                    <td>{result.studName}</td>
                    <td>{result.roll}</td>
                    <td>{result.session}</td>
                    <td>{result.branch}</td>
                    <td>{result.role}</td>
                    <td>{result.ctc / 100000} LPA</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Adminresult;
