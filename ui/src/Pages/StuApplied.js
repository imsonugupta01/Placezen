import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useRef } from 'react';
import Chart from 'chart.js/auto';
import "../CSS/StApplied.css"



function StuApplied() {
  
  let { Id } = useParams();
  const [hiring, setHiring] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8050/Applied/find/${Id}`);
        if (!response.ok) {
          throw new Error('Network response was not okk');
        }
        const data = await response.json();
        console.log(data);
        setHiring(data);
      } catch (error) {
        console.error('Error fetching data: ', error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [Id]);

  function convertDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  }

  return (
    <div>
      <div id="bcd"> I.K. Gujral Punjab Technical University</div>
      <div id="mySidebar">
        <span className="s2" id="sus">Welcome</span>
        <Link id="llll" to={`/StudentProfile/${Id}`}>
          <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span>
        </Link>
        <Link id="llll" to={`/StuProfilePage/${Id}`}>
          <span className="s1" style={{ fontSize: '20px' }}>Profile</span>
        </Link>
        <Link id="llll" to={`/StuPending/${Id}`}>
          <span className="s1" style={{ fontSize: '20px' }}>Pending</span>
        </Link>
        <Link id="llll" to="/">
          <span className="s1" style={{ fontSize: '20px' }}>Logout</span>
        </Link>
      </div>

      <h2><center>Applied Forms for Campus Recruitment</center></h2>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div>
          <table id="tabu">
            <thead className="tt" id="tabuh">
              <th>Company Name</th>
              <th>Role</th>
              <th>Location</th>
              <th>CTC</th>
              <th>Date Applied</th>
            </thead>
            <tbody>
              {hiring.map((hire, index) => (
                <tr key={index}>
                  <td>{hire.companyName}</td>
                  <td>{hire.role}</td>
                  <td>{hire.location}</td>
                  <td>{hire.ctc}</td>
                  <td>{convertDate(hire.dateApplied)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );




  
}

export default StuApplied;
