import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import "../Post/StPostMaterial.css"
function StPostMaterial()
{ let{Id}=useParams();


const [file, setFile] = useState(null);
function onFileChange(event) {
    setFile(event.target.files[0]);
  }

    return (
        <div>
        <div id="bcd"> I.K. Gujral Punjab Technical University</div>
        <div  id="mySidebar">
        <span className="s2" id="sus">Welcome</span>
        <Link id="llll"  to={`/StudentProfile/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
          {/* <span className="s1"><img id ="simg" height="120" width="120"  ></img></span> */}
          <Link id="llll" to={`/AddHiringStudent/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Post Online Hiring</span></Link>
          <Link id="llll" to={`/stPostMaterial/${Id}`} > <span  className="s1" style={{ fontSize: '20px' }}>Post Material</span></Link>
           <Link id="llll" to="/"> <span  className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>
      <div id="iui">Post Preparation Materials</div>

      <div id="pp">
        <label>Select File : </label>
        <input type="file" onChange={onFileChange} ></input><br></br><br></br>

        
        <textarea placeholder="Write Description about Selected File..." rows="15" cols="80"></textarea>
        <button  style={{width:'150px', backgroundColor: 'green', color: '#fff', marginLeft: '46%', marginTop:'3%',marginRight: '10%', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Post Material</button>
      </div>
         </div>
     
        
    )

}
export default StPostMaterial;