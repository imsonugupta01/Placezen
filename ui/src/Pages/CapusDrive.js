import React, { useEffect, useState } from "react";
import "../CSS/CampusDrive.css";
import { Link, useParams } from "react-router-dom";
import Header from '../sidebar/Header';
import Sidebar from "../sidebar/Sidebar";

function CampusDrive() {
  let [hiring, setHiring] = useState([]);
  let { Id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/Hiring/get`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHiring(data);
      } catch (error) {
        console.error('Error fetching data: ', error.message);
      }
    };

    fetchData();
  }, []);

  const sidebarLinks = [
    { path: `/StudentProfile/${Id}`, label: 'Dashboard' },
    { path: `/StuProfilePage/${Id}`, label: 'Profile' },
    { path: `/StuPending/${Id}`, label: 'Pending' },
    { path: '/', label: 'Logout' }
  ];

  return (
    <div className="campus-drive-container">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        links={sidebarLinks}
      />
      <main className="campus-drive-content">
        <h1 className="campus-drive-title">Campus Recruitment</h1>
        <div className="campus-drive-list">
          {hiring.length > 0 ? (
            hiring.map(hire => (
              <Link key={hire.jobId} className="campus-drive-link" to={`/HiringDetails/${Id}/${hire.jobId}`}>
                <div className="campus-drive-item">
                  <h2>{hire.companyName}</h2>
                  <h4>ROLE: {hire.role}</h4>
                  <h4>LOCATION: {hire.location}</h4>
                  <h4>CTC: {hire.ctc / 100000} LPA</h4>
                </div>
              </Link>
            ))
          ) : (
            <p className="no-data-message">No hiring data available.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default CampusDrive;
