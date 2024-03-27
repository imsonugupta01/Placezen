import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "./studentResult.css";
import Chart from 'chart.js/auto';
import girl from "../Pics/girl.jpg"
import boy from "../Pics/boy.jpg"

function StudentResult() {
  let { Id } = useParams();
  let [company, setCompany] = useState();
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true); // Loading state


  let [y2025, sety2025] = useState(0);
  let [y2024, sety2024] = useState(0);
  let [y2023, sety2023] = useState(0);
  let [y2022, sety2022] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch(`http://localhost:8050/student/cal/${2021}`);
        const response2 = await fetch(`http://localhost:8050/student/cal/${2020}`);
        const response3 = await fetch(`http://localhost:8050/student/cal/${2019}`);
        const response4 = await fetch(`http://localhost:8050/student/cal/${2018}`);
        if (!response1.ok || !response2.ok || !response3.ok || !response4.ok) {
          throw new Error('Network response was not ok');
        }
        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();
        const data4 = await response4.json();
        console.log(data1 + " " + data2 + " " + data3 + " " + data4);
        sety2025(data1);
        sety2024(data2);
        sety2023(data3);
        sety2022(data4);

      } catch (error) {
        console.error('Error fetching data: ', error.message);
      }
    };
    fetchData();
  }, []);

  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    if (barChartRef.current) {
      let barChartInstance = null;
      let pieChartInstance = null;

      const barChartCtx = barChartRef.current.getContext('2d');
      const pieChartCtx = pieChartRef.current.getContext('2d');

      // Bar Chart Data
      const barChartData = {
        labels: ['2021-2025', '2020-2024', '2019-2023', '2018-2022'],
        datasets: [{
          label: 'Year Wise Placements',
          data: [y2025, y2024, y2023, y2022],
          backgroundColor: [
            '',
            '',
            '',
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
        data: [40,15,5],
        backgroundColor: [
          'lightgray',
          'lightblue',
          'yellow',
          
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
    }
  }, [y2025, y2024, y2023, y2022]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch("http://localhost:8050/result/allC");
        const response2 = await fetch("http://localhost:8050/student/allS");

        if (!response1.ok || !response2.ok) {
          throw new Error('Network response was not ok');
        }

        const data1 = await response1.json();
        const data2 = await response2.json();

        console.log(data1);
        console.log(data2);

        setCompany(data1);
        setResult(data2);
      } catch (error) {
        console.error('Error fetching data: ', error.message);
      } finally {
        setLoading(false); // Set loading to false when data fetching is complete
      }
    };
    fetchData();
  }, []);

  

  return (
    <div>
      <div id="bcd">I.K. Gujral Punjab Technical University</div>

      <div id="mySidebar">
        <span className="s2" id="sus">Results</span>
        {company &&
          company.map(index => (
            <Link id="llll" to={`/CompStudResult/${index}`} key={index}>
              <span className="s1">{index}</span>
            </Link>
          ))}
      </div>

      <div>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <div className="chart-container">
    <div className="chart" id="bar-chart-container">
        <canvas ref={barChartRef} />
    </div>
    <div className="chart">
        <canvas ref={pieChartRef} />
    </div>
</div>

        )}
      </div>

      {/* {loading ? ( // Render loader while fetching data
        <div className="loader"></div>
      ) : (
        <div>
          <div id="dis">
            {result &&
              result.map(res => (
                <div className="dis1" key={res.id}>
                  <h2 className="company-heading">{res.compName}</h2>
                  <p>Congratulates</p>
                  <img src={res.gender === 'Female' ? girl : boy} style={{ width: '120px', height: '120px' }}alt="Student"/>
                  <h3>{res.studName} ({res.branch})</h3>
                  <p>{res.session} - {res.session+4}</p>
                  <p style={{ fontSize: '30px', fontWeight: '700',color:'crimson' }}>{res.ctc / 100000} LPA</p>

                  <p>{res.role}</p>
                </div>
              ))}
          </div>
        </div>
        
        

      )} */}

    </div>
  );
}

export default StudentResult;
