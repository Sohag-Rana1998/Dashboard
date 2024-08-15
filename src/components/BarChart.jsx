import React from "react";
import { Chart } from "react-google-charts";

const options = {
  legend: { position: "none" },
  colors: ["#4163E9", "#061758"],
};

export const data = [
  ["Hour Per Month", "Video", "Practice"],
  ["Jan", 4, 6],
  ["Feb", 5, 7],
  ["Mar", 4, 6],
  ["Apr", 3, 5],
  ["Jun", 5, 8],
  ["Jul", 6, 4],
  ["Aug", 2, 5],
  ["Sep", 3, 6],
  ["Oct", 5, 8],
  ["Nov", 4, 7],
  ["Dec", 5, 8],
];

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="250px"
      data={data}
      options={options}
    />
  );
}
