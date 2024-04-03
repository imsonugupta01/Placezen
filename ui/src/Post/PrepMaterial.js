import React from "react";
import { Link, useParams } from "react-router-dom";
function PrepMaterial()
{  let{Id} =useParams();
    return(
    <div>
    <div id="bcd"> I.K. Gujral Punjab Technical University</div>
        <div  id="mySidebar">
      <span className="s2" id="sus">Welcome </span>
          {/* <span className="s1"><img id ="simg" height="120" width="120"  ></img></span> */}
          <Link id="llll"  to={`/StudentProfile/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
          <Link id="llll" to={`/changePass/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Password</span></Link>
           <Link id="llll" to="/"> <span  className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>
      <div id="iui">Study Materials</div>

    </div>)
}
export default PrepMaterial;