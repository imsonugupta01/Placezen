import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useRef } from 'react';
import Chart from 'chart.js/auto';
import "../CSS/StApplied.css"



function StuApplied() {

  let[y2025,sety2025]=useState(0)
  let[y2024,sety2024]=useState(0)
  let[y2023,sety2023]=useState(0)
  let[y2022,sety2022]=useState(0)
  let[Cse,setCSE]=useState(0);
  let[Ece,setEce]=useState(0);
  let[Ee,setEE]=useState(0);
  

  useEffect( ()=>{
    const fetchData = async () => {
      try {
          const response1 = await fetch(`http://localhost:8050/student/cal/${2021}`);
          const response2 = await fetch(`http://localhost:8050/student/cal/${2020}`);
          const response3 = await fetch(`http://localhost:8050/student/cal/${2019}`);
          const response4 = await fetch(`http://localhost:8050/student/cal/${2018}`);
          const response5 = await fetch(`http://localhost:8050/student/calc/CSE`);
          const response6  = await fetch(`http://localhost:8050/student/calc/ECE`);
          const response7  = await fetch(`http://localhost:8050/student/calc/EE`);
          
          if (!response1.ok || !response2.ok || !response3.ok || !response4.ok
            || !response5.ok || !response6.ok || !response7.ok  ) {
            throw new Error('Network response was not okk');
          }
          const data1 = await response1.json();
          const data2 = await response2.json();
          const data3 = await response3.json();
          const data4 = await response4.json();
          const data5 = await response5.json();
          const data6 = await response6.json();
          const data7 = await response7.json();
          console.log(data1+" "+data2+" "+data3+" "+data4+" "+data5+" "+data6+" "+data7);
          sety2025(data1);
          sety2024(data2);
          sety2023(data3);
          sety2022(data4);

          setCSE(data5)
          setEce(data6)
          setEE(data7);
        } 
        catch (error) {
          console.error('Error fetching data: ', error.message);
        }
  }  ;
  if(1)
  {
      fetchData();
  }  
},[])

  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    let barChartInstance = null;
    let pieChartInstance = null;

    const barChartCtx = barChartRef.current.getContext('2d');
    const pieChartCtx = pieChartRef.current.getContext('2d');

    // Bar Chart Data
    const barChartData = {
      labels: ['2021-2025', '2020-2024', '2019-2023', '2018-2022'],
      datasets: [{
        label: 'Year Wise Placemets',
        data: [y2025,y2024,y2023,y2022],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
         
        ],
        borderWidth: 1
      }]
    };

    // Pie Chart Data
    const pieChartData = {
      labels: ['CSE', 'ECE', 'EE'],
      datasets: [{
        label: 'Branch Wise Statitcs',
        data: [Cse,Ece,Ee],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
         
        ],
        borderWidth: 1
      }]
    };

    // Create Bar Chart
    barChartInstance = new Chart(barChartCtx, {
      type: 'bar',
      data: barChartData,
    });

    // Create Pie Chart
    pieChartInstance = new Chart(pieChartCtx, {
      type: 'pie',
      data: pieChartData,
    });

    // Cleanup on unmount
    return () => {
      if (barChartInstance) {
        barChartInstance.destroy();
      }
      if (pieChartInstance) {
        pieChartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="chart-container">
    {/* {Ece} {Cse} */}
      <div className="chart">
        <canvas ref={barChartRef} />
      </div>
      <div className="chart">
        <canvas ref={pieChartRef} />
      </div>
    </div>
  );



























  
  // let { Id } = useParams();
  // const [hiring, setHiring] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch(`http://localhost:8050/Applied/find/${Id}`);
  //       if (!response.ok) {
  //         throw new Error('Network response was not okk');
  //       }
  //       const data = await response.json();
  //       console.log(data);
  //       setHiring(data);
  //     } catch (error) {
  //       console.error('Error fetching data: ', error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [Id]);

  // function convertDate(dateStr) {
  //   const date = new Date(dateStr);
  //   return date.toLocaleDateString();
  // }

  // return (
  //   <div>
  //     <div id="bcd"> I.K. Gujral Punjab Technical University</div>
  //     <div id="mySidebar">
  //       <span className="s2" id="sus">Welcome</span>
  //       <Link id="llll" to={`/StudentProfile/${Id}`}>
  //         <span className="s1" style={{ fontSize: '20px' }}>Dashboard</span>
  //       </Link>
  //       <Link id="llll" to={`/StuProfilePage/${Id}`}>
  //         <span className="s1" style={{ fontSize: '20px' }}>Profile</span>
  //       </Link>
  //       <Link id="llll" to={`/StuPending/${Id}`}>
  //         <span className="s1" style={{ fontSize: '20px' }}>Pending</span>
  //       </Link>
  //       <Link id="llll" to="/">
  //         <span className="s1" style={{ fontSize: '20px' }}>Logout</span>
  //       </Link>
  //     </div>

  //     <h2><center>Applied Forms for Campus Recruitment</center></h2>
  //     {loading ? (
  //       <div className="loader"></div>
  //     ) : (
  //       <div>
  //         <table id="tabu">
  //           <thead className="tt" id="tabuh">
  //             <th>Company Name</th>
  //             <th>Role</th>
  //             <th>Location</th>
  //             <th>CTC</th>
  //             <th>Date Applied</th>
  //           </thead>
  //           <tbody>
  //             {hiring.map((hire, index) => (
  //               <tr key={index}>
  //                 <td>{hire.companyName}</td>
  //                 <td>{hire.role}</td>
  //                 <td>{hire.location}</td>
  //                 <td>{hire.ctc}</td>
  //                 <td>{convertDate(hire.dateApplied)}</td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>
  //     )}
  //   </div>
  // );




  
}

export default StuApplied;
