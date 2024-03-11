import React, { useState } from "react";
import "../CSS/AddOnlineHiring.css";
function AddOnlineHiring(){
  let[cname,setcname]=useState("");
  let[alink,setalink]=useState("");
  let[role,setrole]=useState("");
  
  function input1(event){
    setcname(event.target.value);
    console.log(event.target.value);
  }
  function input2(event){
    setrole(event.target.value);
    console.log(event.target.value);
  }
  function input3(event){
    setalink(event.target.value);
    console.log(event.target.value);
  }
  function submit(event){
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('Company',cname)
    formdata.append('Role',role)
    formdata.append('Apply',alink)
   
    fetch('http://localhost:8050/AddOn/Online', {
      method:'POST',
      body: formdata,
    
    })
      .then(response => response.text())
      .then(data => {
        console.log('Added successful:', data);
      })
      .catch(error => {
        console.error('Error during Added:', error);
      });
  }


  return(
    <div>
       <div id="bcd"> I.K. Gujral Punjab Technical University</div>
       <div id="yess">
        <label>Company Name</label><br></br>
        <input placeholder="Company Name" value={cname} onChange={input1}></input><br></br>
        <label>Role</label><br></br>
        <input placeholder="Role" value={role} onChange={input2}></input><br></br>
        <label>Apply Link</label><br></br>
        <input placeholder="Apply Link" value={alink} onChange={input3}></input><br></br><br></br>
        <button onClick={submit}>Add</button>
       </div>
    </div>
   
  )
}
export default AddOnlineHiring;