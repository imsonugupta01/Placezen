import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import "../Post/StPostMaterial.css"
function StPostMaterial()
{ let{Id}=useParams();


const [file, setFile] = useState(null);
const[desc,setDesc]=useState();
function onFileChange(event) {
    setFile(event.target.files[0]);
  }
function input1(event)
{
  console.log(event.target.value);
  setDesc(event.target.value)
}
 

const today = new Date();

// Extract day, month, and year
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const year = today.getFullYear();

// Format the date as dd/mm/yyyy
const formattedDate = `${day}/${month}/${year}`;


  function uploadFile() {
    const formData = new FormData();
    formData.append('sid',Id)
    formData.append('documentFile', file);
    formData.append('discription',desc)
    formData.append('date',formattedDate)
  
    fetch('http://localhost:8050/post/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); // or response.blob() or response.formData() based on what the server returns
      })
      .then(data => {
        console.log('Server response:', data);
        // Handle success, update state, or perform additional actions
      })
      .catch(error => {
        console.error('Failed to upload file:', error);
        // Handle error
      });
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

        
        <textarea value={desc} onChange={input1} placeholder="Write Description about Selected File..." style={{width:"70%", height:"40vh"}}></textarea>
        <button onClick={uploadFile} style={{width:'150px', backgroundColor: 'green', color: '#fff', marginLeft: '46%', marginTop:'3%',marginRight: '10%', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Post Material</button>
      </div>
         </div>
     
        
    )

}
export default StPostMaterial;