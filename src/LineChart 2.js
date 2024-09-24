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

const data = [
  { month: "Jan", Sales: 4000, Profit: 2400, Expenses: 2400 },
  { month: "Feb", Sales: 3000, Profit: 1398, Expenses: 2210 },
  { month: "Mar", Sales: 2000, Profit: 9800, Expenses: 2290 },
  { month: "Apr", Sales: 2780, Profit: 3908, Expenses: 2000 },
  { month: "May", Sales: 1890, Profit: 4800, Expenses: 2181 },
  { month: "Jun", Sales: 2390, Profit: 3800, Expenses: 2500 },
  { month: "Jul", Sales: 3490, Profit: 4300, Expenses: 2100 },
  { month: "Aug", Sales: 4000, Profit: 2400, Expenses: 2400 },
];

const ComplexLineChart = () => {
  return (
    <ResponsiveContainer width="80%" height={400}>
      <LineChart data={data} margin={{ top: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Sales"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Profit" stroke="#82ca9d"  activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Expenses" stroke="#ff7300"  activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ComplexLineChart;
