import React from "react";
import { Link, useParams } from "react-router-dom";
function PostStudent(){
  let{Id}=useParams();
  return(
    <div>
       <div id="bcd"> I.K. Gujral Punjab Technical University</div>
       <div  id="mySidebar">
        <span className="s2" id="sus">Welcome</span>
          {/* <span className="s1"><img id ="simg" height="120" width="120"  ></img></span> */}
          <Link id="llll"  to={`/StudentProfile/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
          <Link id="llll" to={`/StuProfilePage/${Id}`}> <span  className="s1" style={{ fontSize: '20px' }}>Profile</span></Link>
           <Link id="llll" to="/"> <span  className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>
      <div id="offf">
        <div id="off1">Post</div>
       </div>
       
       <div id="box1"><h2 id="boxspan1">Off Campus Result</h2></div>
       <Link to={`/AddHiringStudent/${Id}`}><div id="box2"><h2 id="boxspan1">Online Hiring</h2></div></Link>
       <div id="box3"><h2 id="boxspan1">Preparation Material</h2></div>

    </div>
  )
}
export default PostStudent;