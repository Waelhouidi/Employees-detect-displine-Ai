import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registering chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data }) => {
  // Summarize the event types
  const summary = { emotion: 0, phone: 0, left: 0 };

  data.forEach(item => {
    if (item.event_type.includes('emotion')) summary.emotion++;
    else if (item.event_type.includes('phone')) summary.phone++;
    else if (item.event_type.includes('left')) summary.left++;
  });

  const chartData = {
    labels: ['Emotion Detected', 'Phone Usage', 'Left Desk'],
    datasets: [
      {
        data: [summary.emotion, summary.phone, summary.left],
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Pie data={chartData} />
    </div>
  );
};

export default Chart;
