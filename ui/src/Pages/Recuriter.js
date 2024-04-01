import React from "react";
import "../CSS/Recuriter.css";
import { Link, useParams } from "react-router-dom";
import top from "../Pics/top.jpg";
function Recuriter(){
  let {Id}=useParams();
  return(
    <div>
      <div id="bcd"> I.K. Gujral Punjab Technical University</div>

      <div  id="mySidebarr">
        <span className="s2" id="sus">Welcome</span>
          {/* <span className="s1"><img id ="simg" height="120" width="120"  ></img></span> */}
          <Link id="llll"  to={`/StudentProfile/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
          <Link id="llll" to={`/StuProfilePage/${Id}`}> <span  className="s1" style={{ fontSize: '20px' }}>Profile</span></Link>
           <Link id="llll" to="/"> <span  className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>

       <div id="offf">
        <div id="off1">Top Recruiters</div>
        </div>

    <div id="aaaaa">
      <img height="1000" width="1100"src={top}></img>
    </div>

    </div>
  )
}
export default Recuriter;