import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
function PrepMaterial()
{  let{Id} =useParams();
const [loading, setLoading] = useState(true);
const [materials, setMaterials] = useState([]);
var i=1;
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8050/post/all`);
      if (!response.ok) {
        throw new Error('Network response was not okk');
      }
      const data = await response.json();
      console.log(data);
      setMaterials(data);
    } catch (error) {
      console.error('Error fetching data: ', error.message);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);

// const update = async(Id)=>{


//   const response= await fetch(`http://localhost:8050/post/gett/${Id}`)
//   .then(response => response.text())
//   .then(data => {
//     console.log('Successfully Downloaded:', data);
  
//   })
//   .catch(error => {
//     console.error('Error during Download:', error);
//   });
//  }

 const update = async (Id) => {
  try {
    const response = await fetch(`http://localhost:8050/post/gett/${Id}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Check if the content type is a file
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/pdf')) {
      // If it's a file, create a blob and initiate a download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement('a');
      a.href = url;
      a.download = `document_${Id}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } else {
      console.error('Invalid content type');
    }
  } catch (error) {
    console.error('Error fetching data: ', error.message);
  }
};

    return(
    <div>
    <div id="bcd"> I.K. Gujral Punjab Technical University</div>
        <div  id="mySidebar">
      <span className="s2" id="sus">Welcome </span>
          {/* <span className="s1"><img id ="simg" height="120" width="120"  ></img></span> */}
          <Link id="llll"  to={`/StudentProfile/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span></Link>
          <Link id="llll" to={`/changePass/${Id}`}> <span className="s1" style={{ fontSize: '20px' }}>Password</span></Link>
           <Link id="llll" to="/"> <span  className="s1" style={{ fontSize: '20px' }}>Logout</span></Link>
      </div>
      <div id="iui">Study Materials</div>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div>
          <table id="tabu">
            <thead className="tt" id="tabuh">
              <th>No.</th>
              <th>Pdf Name</th>
              <th>Posted On</th>
              <th>Download</th>
              {/* <th>Date Applied</th> */}
            </thead>
            <tbody>
              {materials.map((hire, index) => (
                <tr key={index}>
                  <td>{i++}</td>
                  <td>{hire.description}</td>
                  <td>{hire.postDate}</td>
                  <td><button onClick={() => update(hire.id)} style={{backgroundColor: 'green', color: '#fff', marginLeft: '30%', marginRight: '10%', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Download File</button></td>
                  {/* <td>{convertDate(hire.dateApplied)}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      

    </div>)
}
export default PrepMaterial;