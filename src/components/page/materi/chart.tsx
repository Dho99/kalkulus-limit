"use client";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  ChartOptions,
  LogarithmicScale,
} from "chart.js";
import React from "react";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // Title,
  // Legend,
  LogarithmicScale,
  zoomPlugin
);

interface DataPoint {
  x: number;
  y: number;
  isLimitValue: boolean;
}

interface Dataset {
  label: string;
  data: DataPoint[];
  borderColor: string;
  backgroundColor: string;
}

interface AcquisitionsLineChartProps {
  datasets: Dataset[];
  xMax: number,
  yMax: number,
  xMin: number,
  yMin: number,
}

const AcquisitionsLineChart: React.FC<AcquisitionsLineChartProps> = ({
  datasets, xMax, yMax, xMin, yMin
}) => {
  const chartData = {
    labels: datasets[0].data.map((data) => data.x),
    datasets: datasets.map((dataset) => ({
      label: dataset.label,
      data: dataset.data,
      borderColor: dataset.borderColor,
      backgroundColor: dataset.data.map((data) =>
        data.isLimitValue ? "red" : dataset.backgroundColor
      ),
      tension: 0.3,
      showLine: true,
    })),
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: {
        type: "linear",
        min: xMin,
        max: xMax,
      },
      y: {
        type: "linear",
        min: xMin,
        max: xMax, // adjust based on range of data
      },
    },
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default AcquisitionsLineChart;
