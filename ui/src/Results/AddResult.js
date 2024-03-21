import React from "react";
import { Link } from "react-router-dom";
import "./AddResult.css"
function AddResult()
{
    return(
        <div>
        <div id="bcd"> I.K. Gujral Punjab Technical University</div>

        <div  id="mySidebar">
      <span className="s2" id="sus">Results </span>
          {/* <span className="s1"><img id ="simg" height="120" width="120"  ></img></span> */}
          <Link id="llll"  > <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
          {/* <Link id="llll" to={`/changePass/$`}> <span className="s1" style={{ fontSize: '20px' }}>Password</span></Link> */}
           <Link id="llll" to="/"> <span  className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>

      <div id="niu">
       <div>
       <select>
        <option> Wipro</option>
       </select>
       </div>
      </div>

        </div>

    )

}
export default AddResult