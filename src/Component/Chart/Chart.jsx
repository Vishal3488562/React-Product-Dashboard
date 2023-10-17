import React from 'react'
import './Chart.css'
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import {Bar, Doughnut} from "react-chartjs-2";

ChartJS.register(
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function Chart() {


  const data = {
    labels:  [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ],
    datasets: [
      {
        label: "Product sell",
        data: [500, 350, 200, 400, 350, 500, 350, 800, 400, 350,200, 400],
        backgroundColor: "blue",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio:false,
    categoryPercentage: 0.5,
    barPercentage: 0.8,
    borderRadius: 5,
  };

  const data1 = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        data: [55, 31, 14],
        backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
      },
    ],
  };
  const options1 = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: 50,
    plugins: {
      legend: {
        display: false,
      },
    },
  };


  return (
   <div className='chart-bar'>
      <div className="chart-left">
      <div className="chart-head">OverView</div>
      <div className="chart-middle">
        <div className="montly">Montly Earning</div>
        <select name="" id="" className='chart-dropdown'>
          <option value="Quantity">Quantity</option>
        </select>
      </div>
      <div className="chart-view"> 
      <div className="bar-chart">
      <Bar data={data} options={options}/>
      </div>
      </div>
      </div>
    <div className="chart-right">
    <div className="pie-chart">
      <div className="pie-heading">Custombers</div>
      <div className="pie-desc">Custombers that buy product</div>
      <div className="pie-figure">
      <Doughnut data={data1} options={options1}/>
      </div>
     </div>
    </div>
  </div>
  )
}

export default Chart
