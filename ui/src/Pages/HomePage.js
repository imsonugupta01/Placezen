import React from "react";
import { Link } from "react-router-dom";
import ptuMain from"../Pics/ptuMain.jpg";
import "../CSS/HomePage.css";
function HomePage(){
  return(
    <div>
      <div id="eee"> I.K. Gujral Punjab Technical University</div>
      <div id="yyyy">
      
        <div id="son">
        <h1>Welcome!</h1>
        <button><Link to="/StudentLogin">Student</Link></button><br></br><br></br>
        <button><Link to="/AdminLogin">Admin</Link></button>
        </div>
        <div id="sal"><img id="iiii" src={ptuMain}></img></div>
      </div>
  
    </div>
  )
}
export default HomePage;