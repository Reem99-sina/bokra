import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  labels: string[];
  dataValues: number[];
}

const BarChart: React.FC<BarChartProps> = ({ labels, dataValues }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "عدد العروض الجديدة",
        data: dataValues,
        backgroundColor: [
          "#544F9E",
          "#54AEE5",
          "#EF401E",
          "#F0AC53",
          "#544F9E",
        ],
        borderColor: ["#544F9E", "#54AEE5", "#EF401E", "#F0AC53", "#544F9E"],
        borderWidth: 1,
        barThickness: 18,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        min: 0,
        max: 400,
        ticks: {
          stepSize: 100,
          callback: (tickValue: string | number) => {
            const value = Number(tickValue);
            
            return value % 100 === 0 ? value : "";
          },
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
