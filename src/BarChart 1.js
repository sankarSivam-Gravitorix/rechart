import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { month: "January", ProductA: 4000, ProductB: 2400, ProductC: 2400 },
  { month: "February", ProductA: 3000, ProductB: 1398, ProductC: 2210 },
  { month: "March", ProductA: 2000, ProductB: 9800, ProductC: 2290 },
];

const MonthlySalesBarChart = () => (
  <ResponsiveContainer width="80%" height={400}>
    <BarChart data={salesData} margin={{ top: 50 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="ProductA" fill="#8884d8" />
      <Bar dataKey="ProductB" fill="#82ca9d" />
      <Bar dataKey="ProductC" fill="#ffc658" />
    </BarChart>
  </ResponsiveContainer>
);

export default MonthlySalesBarChart;
