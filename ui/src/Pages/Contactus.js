import React from "react";
import "../CSS/Contactus.css"
import { Link, useParams } from "react-router-dom";
function Contactus(){
  let {Id}=useParams();
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

      <div id="iui">Contac Us</div>

       <div> 
                <table id="tabu">
                    <thead className="tt" id="tabuh">
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Contact</th>
                        <th>Email</th>
                        
                    </thead>
                    {
                            <tr>
                               <td>Er. Navdeepak Sandhu</td>
                               <td>Deputy Director (CR&A)</td>
                               <td>9478098040</td>
                               <td>navdeepak.sandhu@ptu.ac.in</td>
                            </tr>
                    }
                     {
                            <tr>
                               <td>Dr. Rajpreet Kaur</td>
                               <td>Coordinator (CT&P)</td>
                               <td>9465884865</td>
                               <td>dr.rajpreet@ptu.ac.in</td>
                            </tr>
                    }
                     {
                            <tr>
                               <td>Dr. Rakesh Goyal</td>
                               <td>Coordinator (CT&P)</td>
                               <td>9465884826</td>
                               <td>dr.rakeshgoyal@ptu.ac.in</td>
                            </tr>
                    }
                </table>
            </div>
    </div>
  )
}
export default Contactus;