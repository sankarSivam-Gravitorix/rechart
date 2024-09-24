import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// LineChart: This is the main container that renders a line chart.
// Line: Defines the lines drawn in the chart.
// XAxis, YAxis: These represent the X and Y axes of the chart.
// CartesianGrid: Adds a grid background to the chart for reference.
// Tooltip: Displays tooltips when hovering over points on the chart.
// Legend: Provides a key to explain which data each line represents.
// ResponsiveContainer: Ensures the chart adjusts to fit its parent container, making it responsive.

const data = [
  { name: "Page A", uv: 4000, pv: 2400 },
  { name: "Page B", uv: 3000, pv: 1398 },
  { name: "Page C", uv: 2000, pv: 9800 },
  { name: "Page D", uv: 2780, pv: 3908 },
];

const SimpleLineChart = () => (
  <ResponsiveContainer width="80%" height={400}>
    <LineChart data={data} margin={{top:50}}>
      <CartesianGrid strokeDasharray="50 10" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default SimpleLineChart;
