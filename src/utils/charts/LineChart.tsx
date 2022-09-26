/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Line } from 'react-chartjs-2';

// data={data} labels={['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7']} axesDisplay={false} tension={0.3}
type lineChartPropType ={
  data : number[],
  labels: string[],
  axesDisplay: boolean,
  tension: number
}
export default function LineChart(props:lineChartPropType) {
  const dataArr = props.data;
  const { axesDisplay } = props;
  const backgroundColor = dataArr[dataArr.length - 1] < dataArr[dataArr.length - 2] ? 'rgba(254, 84, 97, 0.2)' : 'rgba(41, 204, 151, 0.2)';
  const borderColor = dataArr[dataArr.length - 1] < dataArr[dataArr.length - 2] ? 'rgba(254, 84, 97, 1)' : 'rgba(41, 204, 151, 1)';

  const data = {
    labels: props.labels,
    datasets: [
      {
        label: 'Count',
        data: dataArr,
        fill: true,
        backgroundColor,
        borderWidth: 0.75,
        borderColor,
        pointHoverRadius: 6,
        tension: props.tension,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: axesDisplay,
        //  This is not working here
        //   afterFit: (scale) => {
        //     scale.paddingLeft -= 5;
        //     scale.paddingRight -= 5;
        //   },
        grid: {
          display: axesDisplay,
        },
      },
      y: {
        display: axesDisplay,
        grid: {
          display: axesDisplay,
        },
      },
    },
    plugins: {
      legend: {
        display: axesDisplay,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

// Yearly
// Monthly: Choose Year
// Daily: Choose Month, Choose Year
