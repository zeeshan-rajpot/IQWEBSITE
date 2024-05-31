import React from "react";
import ReactApexChart  from 'react-apexcharts';

const DistributionIq = () => {
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
          "60-69",
          "70-79",
          "80-89",
          "90-99",
          "100-109",
          "110-119",
          "120-129",
        
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
        data: [30, 40, 45, 50, 49, 60, 55],
      },
    ],

    title: [
      {
        text: 'General and international distribution of IQ',
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

<ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
  </div>
  );
}

export default DistributionIq;
