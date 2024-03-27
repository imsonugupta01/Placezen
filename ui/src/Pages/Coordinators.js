import React, { useEffect, useState } from "react";
import "../CSS/OnlineHiring.css";
import { Link, useParams } from "react-router-dom";

function AdminCoordinator() {
  const [tp, setTp] = useState([]);
  const { Id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8050/TP/total`);
        if (!response.ok) {
          throw new Error('Network response was not okk');
        }
        const data = await response.json();
        console.log(data);
        setTp(data);
      } catch (error) {
        console.error('Error fetching data: ', error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div id="bcd">I.K. Gujral Punjab Technical University</div>
      <div id="mySidebar">
        <span className="s2" id="sus">Welcome</span>
        <Link id="llll" to={`/StudentProfile/${Id}`}>
          <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span>
        </Link>
        <Link id="llll" to={`/StuProfilePage/${Id}`}>
          <span className="s1" style={{ fontSize: '20px' }}>Profile</span>
        </Link>
        <Link id="llll" to="/">
          <span className="s1" style={{ fontSize: '20px' }}>Logout</span>
        </Link>
      </div>

      <div id="offf">
        <div id="off1">T & P Coordinators</div>
      </div>
      
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div>
          <table id="tabu">
            <thead className="tt" id="tabuh">
              <th>Name</th>
              <th>Branch</th>
              <th>Semester</th>
              <th>Contact</th>
              <th>Email</th>
            </thead>
            <tbody>
              {tp.map((cl, index) => (
                <tr key={index}>
                  <td>{cl.name}</td>
                  <td>{cl.branch}</td>
                  <td>{cl.semester}</td>
                  <td>{cl.contact}</td>
                  <td>{cl.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminCoordinator;
