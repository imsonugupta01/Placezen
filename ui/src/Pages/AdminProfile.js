import React, { useEffect, useState } from "react";
import "../CSS/AdminProfile.css";
import PTU_logo from "../Pics/PTU_logo.jpg";
import ProfileLogo from "../Pics/ProfileLogo.jpg";
import { Link, useParams } from "react-router-dom";
import { faFileCircleXmark, faGraduationCap, faLineChart, faMicrophoneLines, faNetworkWired, faNoteSticky, faOutdent, faSchoolFlag, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faExclamationCircle,faStickyNote,faFilePen,faCalendarDays ,faUsers, faClipboard, faBook,faChartSimple,faCheckCircle, faFile,faTimesCircle, faClipboardList, faTrophy, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


function AdminProfile() {
  let { Id } = useParams();
  let [CDrives, setCDrives] = useState(0);
  let [status, setStatus] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8050/Hiring/count`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        setCDrives(data);
        setStatus(0);
      } catch (error) {
        console.error('Error fetching data: ', error.message);
      }
    }

    if (status) {
      fetchData();
    }
  }, [status]);

  return (
    <div id="StProfile">
      <div id="header2">
        I.K. Gujral Punjab Technical University
        {/* <img id="img2" src={ProfileLogo} alt="Profile Logo" /> */}
      </div>

      <div id="mySidebar">
        <span className="s2" id="sus">Admin Dashboard</span>
        <span className="s1">
          <img id="simg" height="120" width="120" src={PTU_logo} alt="PTU Logo" />
        </span>

        <Link id="llll" to={`/AdminProfilePage/${Id}`}>
          <span className="s1" style={{ fontSize: '20px' }}>Profile</span>
        </Link>

        <Link id="llll" to={`/AdminApprovals/${Id}`}>
          <span className="s1" style={{ fontSize: '20px' }}>Approvals</span>
        </Link>

        <Link id="llll" to={`/Adminresult/${Id}`}>
          <span className="s1" style={{ fontSize: '20px' }}>Results</span>
        </Link>

        <Link id="llll" to={`/allStudents/${Id}`}>
          <span className="s1" style={{ fontSize: '20px' }}>Students</span>
        </Link>

        <Link id="llll" to={`/AdminCoordinators/${Id}`}>
          <span className="s1" style={{ fontSize: '20px' }}>T & P Coordinators</span>
        </Link>

        <Link id="llll" to={`/`}>
          <span className="s1" style={{ fontSize: '20px' }}>Logout</span>
        </Link>
      </div>

      <Link to={`/OnlineHiring/${Id}`}><div id="box1"><h2 id="boxspan1">Off Campus</h2><FontAwesomeIcon id="ioo" icon={faGraduationCap} className="box-icon"/></div></Link>

      {/* <Link to={`/OnlineHiring/${Id}`}>
        <div id="box1">
          <h2 id="boxspan1">Online Hiring</h2>
          <FontAwesomeIcon id="ioo" icon={faGraduationCap} className="box-icon"/>
          
        </div>
      </Link> */}
      <Link to={`/OffHiring/${Id}`}><div id="box2"><h2 id="boxspan1">Campus Recruitment</h2><FontAwesomeIcon icon={ faGraduationCap} className="box-icon" /></div></Link>

      {/* <Link to={`/OffHiring/${Id}`}>
        <div id="box2">
          <div><h2 id="boxspan1">Campus Recruitment</h2><FontAwesomeIcon id="ioo" icon={faGraduationCap} className="box-icon"/></div>

        </div>
      </Link> */}

      <Link to={`/Events/${Id}`}><div id="box3"><h2 id="boxspan1">Upcoming Events</h2><FontAwesomeIcon icon={faCalendarDays} className="box-icon" /></div></Link>

      {/* <Link to={`/Events/${Id}`}>
        <div id="box3">
          <h2 id="boxspan1">Upcoming Events</h2>
          <FontAwesomeIcon id="ioo" icon={faCalendarDays} className="box-icon"/>
          <div id="nob">0</div>
        </div>
      </Link> */}

      <Link to={`/ResultStats/${Id}`} ><div id="box4"><h2 id="boxspan1">Results Statistics</h2><FontAwesomeIcon icon={ faLineChart} className="box-icon" /></div></Link>
       <Link to={`/Alumnii/${Id}`}><div id="box5"><h2 id="boxspan1">Alumni</h2><FontAwesomeIcon icon={faUsers} className="box-icon" /></div></Link>
       <Link to={`/UpdateStudents/${Id}`}><div id="box6"><h2 id="boxspan1">Manage  Student</h2><FontAwesomeIcon icon={faUniversity } className="box-icon" /></div></Link>

      {/* <Link to={`/ResultStats/${Id}`}>
        <div id="box4">
          <h2 id="boxspan1">Results Statistics</h2>
        </div>
      </Link> */}

      {/* <Link to={`/Alumnii/${Id}`}>
        <div id="box5">
          <h2 id="boxspan1">Alumni</h2>
        </div>
      </Link> */}

      {/* <Link to={`/UpdateStudents/${Id}`}>
        <div id="box6">
          <h2 id="boxspan1">Update Students</h2>
        </div>
      </Link> */}
    </div>
  );
}

export default AdminProfile;
