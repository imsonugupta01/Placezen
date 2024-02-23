import React from "react";
import { Link, useParams } from "react-router-dom";
function SignUpRequest(){
  let {Id} = useParams();
  return(
    <div>
      <div id="header2"> I.K. Gujral Punjab Technical University</div>
       <div id="navbar1">
        <Link to={`/AdminApprovals/${Id}`}><div id="navbox1">Online Hiring Request</div></Link>
        <div id="navbox2">SignUp Request</div>
        <div id="navbox3">Profile Edit Request</div>
        <div id="navbox4">Remove Student</div>
        <div id="navbox5">Add Admins</div>
       </div>
    </div>
  )
}
export default SignUpRequest;