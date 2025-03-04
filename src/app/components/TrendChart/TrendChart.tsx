import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface TrendChartProps {
  data: { date: string; value: number }[];
}

export default function TrendChart({ data }: TrendChartProps) {
  const chartData = {
    labels: data.map((entry) => entry.date),
    datasets: [
      {
        label: "Популярность",
        data: data.map((entry) => entry.value),
        borderColor: "#00AEEF",
        backgroundColor: "rgba(0, 174, 239, 0.2)",
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#E0E0E0" } },
      y: { grid: { color: "#444" }, ticks: { color: "#E0E0E0" } },
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
      className="p-4 bg-background border border-border rounded-lg"
    >
      <h2 className="text-xl font-semibold text-text mb-4">График популярности</h2>
      <Line data={chartData} options={options} />
    </motion.div>
  );
}
