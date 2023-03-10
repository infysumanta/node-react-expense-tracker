import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Labels from "./Labels";

Chart.register(ArcElement);

const config = {
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 500, 100],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56"],
        hoverOffset: 4,
        borderRadius: 30,
        spacing: 10,
      },
    ],
  },
  options: {
    cutout: 115,
  },
};

const Graph = () => {
  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          {/* Chart */}
          <Doughnut {...config} />
          <h3 className="mb-4 font-bold title">
            Total <span className="block text-3xl text-emerald-400">₹{0}</span>
          </h3>
        </div>
        <div className="flex flex-col py-10 gap-4">
          {/* Lables */}
          <Labels />
        </div>
      </div>
    </div>
  );
};

export default Graph;
