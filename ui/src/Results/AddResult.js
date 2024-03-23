import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./AddResult.css";

function AddResult() {
  const { Id } = useParams();
  const [hiring, setHiring] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [studentData, setStudentData] = useState([{ jid: "", cname: "", sid: "", role: "", ctc: "" }]);
  const [CName, setCName] = useState();
  const [CId, setCId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8050/Hiring/get");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setHiring(data);
      } catch (error) {
        console.error('Error fetching data: ', error.message);
      }
    };
    fetchData();
  }, []);

  function input1(event) {
    setSelectedOption(event.target.value);
    const [companyId, companyName] = event.target.value.split(",");
    setCId(companyId);
    setCName(companyName);
  }

  function addRow() {
    setStudentData([...studentData, { jid: CId, cname: CName, sid: "", role: "", ctc: "" }]);
  }

  function handleInputChange(index, fieldName, value) {
    const newData = [...studentData];
    newData[index][fieldName] = value;
    setStudentData(newData);

    if (CId !== undefined && CName !== undefined && newData[index].sid && newData[index].role && newData[index].ctc) {
      console.log(CId + " " + CName + " " + newData[index].sid + " " + newData[index].role + " " + newData[index].ctc);
    } 
  }

  function saveData() {
    fetch('http://localhost:8050/result/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(studentData)
    })
    .then(response => response.text())
    .then(data => {
      console.log('Added Successfully:', data);
      alert("Result Successfully Added !!!")
      navigate(`/Adminresult/${Id}`)
    })
    .catch(error => {
      console.error('Error during Adding:', error);
    });
  }

  return (
    <div>
      <div id="bcd">I.K. Gujral Punjab Technical University</div>

      <div id="mySidebar">
        <span className="s2" id="sus">Welcome </span>
        <Link id="llll" to="#"><span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
        <Link id="llll" to="#"><span className="s1" style={{ fontSize: '20px' }}>Result Page</span></Link>
        <Link id="llll" to="/"><span className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>

      <div id="niu">
        <div>
          <select value={selectedOption} onChange={input1}>
            <option value="">select Company...</option>
            {hiring &&
              hiring.map((company) => (
                <option key={company.jobId} value={`${company.jobId},${company.companyName}`}>
                  {company.companyName}
                </option>
              ))}
          </select>
          <br />
          
          {studentData.map((student, index) => (
            <div key={index}>
             
             {/* <input id="oii" disabled value={index+1} ></input> */}
             {/* {index+1} */}
              <input id="oi"
                placeholder="Roll Number"
                value={student.sid}
                onChange={(e) => handleInputChange(index, "sid", e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                placeholder="Role"
                value={student.role}
                onChange={(e) => handleInputChange(index, "role", e.target.value)}
              />&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                placeholder="CTC"
                value={student.ctc}
                onChange={(e) => handleInputChange(index, "ctc", e.target.value)}
              />
              <br /><br />
            </div>
          ))}
          
          <div>
            <button onClick={addRow} style={{ backgroundColor: 'green', color: '#fff', marginLeft: '30%', marginRight: '10%', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add More Results</button>
            <button onClick={saveData} style={{ width: '20%', backgroundColor: 'green', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save All</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddResult;
