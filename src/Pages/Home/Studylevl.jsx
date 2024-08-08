import React from 'react';
import ReactApexChart  from 'react-apexcharts';

const Studylevl = () => {

    const chartData = {
        options: {
          chart: {
            type: "bar",
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "55%",
              colors: {
                backgroundBarColors: ["#EBEBEB"],
                backgroundBarOpacity: 1,
                backgroundBarRadius: 5,
              },
              dataLabels: {
                position: "top",
              },
            },
          },
          xaxis: {
            categories: [
              "No-Diploma",
              "No-Diploma",
              "4 Year Sd",
              "5 Year Sd",
            
            ],
          },
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function (val) {
                return val;
              },
            },
          },
          fill: {
            opacity: 1,
          },
          colors: ["#3D9BD6"],
          grid: {
            borderColor: "#f1f1f1",
          },
          
        },
     
        series: [
          {
            name: "Rides",
            data: [30, 40, 45, 50, 49],
          },
        ],
    
        title: [
          {
            text: 'Distribution by Study Level',
        },
        ],
    
      };
  return (
    <div className="chart">

<p>{chartData.title[0].text}</p>

<ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={380} />
  </div>
  );
}

export default Studylevl;
