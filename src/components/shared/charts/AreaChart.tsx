import React from "react";
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
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface AreaChartProps {
  labels: string[];
  dataValues: number[];
}

const AreaChart: React.FC<AreaChartProps> = ({ labels, dataValues }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "المعاملات المالية",
        data: dataValues,
        fill: true,
        backgroundColor: "rgba(84, 174, 229, 0.5)",
        borderColor: "#54AEE54D",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      style={{ direction: "rtl", backgroundColor: "#fff" }}
      className="bg-white"
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default AreaChart;
