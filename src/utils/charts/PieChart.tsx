import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);
function PieChart() {
  return (
    <Doughnut
      data={{
        labels: ['DEPSTAR', 'CSPIT', 'I2IM'],
        datasets: [
          {
            label: 'no of applicants',
            data: [45, 120, 10],
            backgroundColor: ['rgba(178, 255, 255, 0.52)', 'rgba(12, 175, 255, 0.52)', 'rgba(0, 118, 206, 0.52)'],
          }],

      }}
      options={{
        // radius: '80%',
        cutout: '60%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              color: '#000000',
              font: {
                size: 14,
                family: 'PoppinsRegular, sans-serif',
              },
            },
          },
        },
        maintainAspectRatio: false,
      }}
    />

  );
}

export default PieChart;
