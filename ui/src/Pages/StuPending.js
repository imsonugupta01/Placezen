import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "../CSS/StPending.css"

function StuPending() {
  let { Id } = useParams();
  const [hiring, setHiring] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8050/Applied/queen/${Id}`);
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

  const next = (jobId) => {
    navigate(`/HiringDetails/${Id}/${jobId}`);
  }

  return (
    <div>
      <div id="bcd"> I.K. Gujral Punjab Technical University</div>
      <div id="mySidebar">
        <span className="s2" id="sus">Welcome</span>
        <Link id="llll" to={`/StudentProfile/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
        <Link id="llll" to={`/StuProfilePage/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Profile</span></Link>
        <Link id="llll" to={`/StuApplied/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Applied</span></Link>
        <Link id="llll" to="/"> <span className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>

      {/* <h2><center>Pending Campus Recruitment</center></h2> */}
      <div id="iui">Pending Campus Recruitment</div>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div>
          <table id="tabu">
            <thead className="tt" id="tabuh">
              <tr>
                <th>Company Name</th>
                <th>Role</th>
                <th>Location</th>
                <th>CTC</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {hiring.map((hire) => (
                <tr key={hire.jobId} onClick={() => next(hire.jobId)} className="clickable-row">
                  <td>{hire.companyName}</td>
                  <td>{hire.role}</td>
                  <td>{hire.location}</td>
                  <td>{hire.ctc}</td>
                  <td>{hire.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default StuPending;
