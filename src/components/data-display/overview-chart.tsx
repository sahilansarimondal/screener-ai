"use client";

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
  {
    name: "Jan",
    stock: 4000,
    index: 2400,
  },
  {
    name: "Feb",
    stock: 4200,
    index: 2600,
  },
  {
    name: "Mar",
    stock: 4800,
    index: 2800,
  },
  {
    name: "Apr",
    stock: 4100,
    index: 2900,
  },
  {
    name: "May",
    stock: 4500,
    index: 3000,
  },
  {
    name: "Jun",
    stock: 5000,
    index: 3100,
  },
  {
    name: "Jul",
    stock: 5200,
    index: 3200,
  },
];

export function OverviewChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="stock"
          stroke="#3b82f6"
          activeDot={{ r: 8 }}
          strokeWidth={2}
          name="Stock Price"
        />
        <Line
          type="monotone"
          dataKey="index"
          stroke="#94a3b8"
          strokeWidth={1}
          name="Market Index"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
