import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function EventStudent() {
  let { Id } = useParams();
  let [eventt, setEventt] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when fetching data starts
      try {
        const response = await fetch(`http://localhost:8050/session/get`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setEventt(data);
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
      <div id="iui">Upcoming Events</div>
      {/* <div id="offf">
        <div id="off1">Sessions</div>
      </div> */}

      {loading ? ( // Display loading spinner while fetching data
        <div className="loader"></div> // Use CSS to style loader
      ) : (
        <div id="nobita">
          {eventt && eventt.map((ee, index) => (
            <div id="thiss" key={index}>
              <h2>{ee.sname}</h2>
              <h4>Location : {ee.location}</h4>
              <h4>Speaker : {ee.speaker}</h4>
              <h4>Date : {ee.date}</h4>
              <h4>Timings : {ee.timings}</h4>
              {/* <h4>Description : {ee.description}</h4> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EventStudent;
