/* eslint-disable react/prop-types */
import React from 'react';
import { Line } from 'react-chartjs-2';

export default function CustomLineChart({ chartData }) {
  const typeName = chartData.type;
  const xAxisLabels = chartData.lines[0].data !== undefined
    ? Object.keys(chartData.lines[0].data) : [];

  const datasets = chartData.lines.map((line) => {
    const data = {
      data: line.data !== undefined ? Object.values(line.data) : [],
      borderColor: `${line.color}CC`,
      backgroundColor: `${line.color}CC`,
      pointBorderColor: `${line.color}`,
      pointBackgroundColor: `${line.color}`,
      pointRadius: 3,
      lineTension: 0.4,
      fill: false,
    };

    if (typeName === 'Daily') {
      data.label = `${line.month}, ${line.year}`;
    } else if (typeName === 'Monthly') {
      data.label = `${line.year}`;
    } else if (typeName === 'Yearly') {
      data.label = 'Trend';
    }

    return data;
  });

  const options = {
    scales: {
    //   min: 0,
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          width: 10,
          color: '#000000',
          font: {
            family: 'PoppinsRegular, sans-serif',
            size: 14,
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  const data = { labels: xAxisLabels, datasets };

  return (
    <div className="h-100">
      <Line data={data} options={options} />
    </div>
  );
}
