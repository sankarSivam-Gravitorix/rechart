import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

// PieChart: This is the container for the whole pie chart.
// Pie: Represents the pie slices and data.
// Tooltip: Displays information when you hover over the pie slices.
// Cell: Used to customize the color for each segment (slice).
// Legend: Displays labels and colors corresponding to the pie slices.

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CustomPieChart = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data} // Pass the data defined earlier
        cx={200} // X-coordinate of the center of the pie
        cy={200} // Y-coordinate of the center of the pie
        outerRadius={120} // Radius of the pie from center to edge
        fill="#8884d8" // Default fill color 
        dataKey="value" // Use the "value" field from the data to calculate slice size
        label // Automatically label each slice
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CustomPieChart;
