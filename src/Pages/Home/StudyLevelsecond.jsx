import React from 'react';
import ReactApexChart  from 'react-apexcharts';

const StudyLevelsecond = () => {
    
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
              horizontal: true,
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
              "<18",
              "18-29",
              "30-39",
              "40-49",
              "50>",
       
            
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
            text: 'distribution by age',
        },
        ],
    
      };

  return (
    <div className="chart">
    {/* <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={350}
    /> */}

<p>{chartData.title[0].text}</p>

<ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={300} />
  </div>
  )
}

export default StudyLevelsecond
