import React from "react";
import { Link } from "react-router-dom";
import ptuMain from"../Pics/ptuMain.jpg";
import "../CSS/HomePage.css";
function HomePage(){
  return(
    <div>
      <div id="bcd"> I.K. Gujral Punjab Technical University</div>
      <div id="yyyy">
      
        <div id="son">
        <h1 id="hy">Welcome!</h1>
        <button id="st"><Link id="lat" to="/StudentLogin">Student</Link></button><br></br><br></br>
        <button id="ad"><Link id="lat2" to="/AdminLogin">Admin</Link></button>
        </div>
        <div id="sal"><img id="iiii" src={ptuMain}></img></div>
      </div>
      <div id="foot">
          made by &nbsp;
          {/* <br></br> */}
           Saloni & Sonu ❤ 
        </div>
  
    </div>
  )
}
export default HomePage;