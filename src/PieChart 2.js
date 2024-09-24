import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const data02 = [
  { name: "Subgroup A1", value: 100 },
  { name: "Subgroup B1", value: 200 },
  { name: "Subgroup C1", value: 150 },
  { name: "Subgroup D1", value: 50 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const TwoLevelPieChart = () => (
  <ResponsiveContainer width={400} height={400}>
    <PieChart>
      <Pie
        data={data01}
        dataKey="value"
        outerRadius={80}
        fill="#8884d8"
        
      >
        {data01.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Pie
        data={data02}
        dataKey="value"
        innerRadius={90}
        outerRadius={110}
        fill="#82ca9d"
      >
        {data02.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);

export default TwoLevelPieChart;
