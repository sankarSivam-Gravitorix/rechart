import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,Legend } from 'recharts';

const data = [
  { name: 'Mon', sales: 1200, profit: 300 },
  { name: 'Tue', sales: 1500, profit: 400 },
  { name: 'Wed', sales: 1700, profit: 600 },
  { name: 'Thu', sales: 2200, profit: 800 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px' }}>
        <p>{label}</p>
        <p>Sales: {payload[0].value}</p>
        <p>Profit: {payload[1].value}</p>
      </div>
    );
  }
  return null;
};

function ComplexBarChart() {
  return (
    <BarChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Bar dataKey="sales" fill="#8884d8" />
      <Bar dataKey="profit" fill="#82ca9d" />
      <Legend/>
    </BarChart>
  );
}

export default ComplexBarChart;
