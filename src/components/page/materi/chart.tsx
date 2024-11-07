"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import React from "react";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
);

interface AcquisitionsLineChartProps {
  datas: { x: number; y: number }[];
}

const AcquisitionsLineChart: React.FC<AcquisitionsLineChartProps> = ({
  datas,
}) => {
  const chartData = {
    datasets: [
      {
        label: "Scatter Dataset",
        data: datas,
        backgroundColor: "rgb(255, 99, 132)",
        tension: 0.3
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,

    scales: {
      x: {
        type: "linear",
        position: "bottom",
        beginAtZero: false
      },
      y: {
        beginAtZero: false
      }
    },
  };

  return <Line data={chartData} options={options} />;
};

export default AcquisitionsLineChart;
