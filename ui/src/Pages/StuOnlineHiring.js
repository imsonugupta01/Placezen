import React, { useEffect, useState } from "react";
import "../CSS/StuOnlineHiring.css";
import { Link, useParams } from "react-router-dom";

function StuOnlineHiring() {
  const [hiring, setHiring] = useState([]);
  const { Id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8050/AddOn/alll`);
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
        <Link id="llll" to={`/StuPending/${Id}`}>
          <span className="s1" style={{ fontSize: '20px' }}>Pending</span>
        </Link>
        <Link id="llll" to="/">
          <span className="s1" style={{ fontSize: '20px' }}>Logout</span>
        </Link>
      </div>
      <div id="iui">Online Hirings</div>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <div id="doremon">
          {hiring.map((hire) => (
            <div id="thisthat" key={hire.id}>
              <h2>{hire.companyName}</h2>
              <h4>ROLE: {hire.role}</h4>
              <h4><a href={`${hire.link}`} target="_blank" rel="noopener noreferrer">Apply Here</a></h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StuOnlineHiring;
