"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "9:15",
    price: 4000,
    volume: 2400,
  },
  {
    name: "10:00",
    price: 4200,
    volume: 2600,
  },
  {
    name: "10:45",
    price: 4800,
    volume: 2800,
  },
  {
    name: "11:30",
    price: 4100,
    volume: 2900,
  },
  {
    name: "12:15",
    price: 4500,
    volume: 3000,
  },
  {
    name: "13:00",
    price: 5000,
    volume: 3100,
  },
  {
    name: "13:45",
    price: 5200,
    volume: 3200,
  },
];

export function TechnicalAnalysis() {
  return (
    <div className="h-96">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#3b82f6"
            fill="#dbeafe"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">RSI (14)</div>
          <div className="text-xl font-bold">62.4</div>
          <div className="text-xs text-muted-foreground">Neutral</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">MACD</div>
          <div className="text-xl font-bold">12.5</div>
          <div className="text-xs text-green-500">Bullish</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">Support</div>
          <div className="text-xl font-bold">₹4,850</div>
          <div className="text-xs text-muted-foreground">Strong</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">Resistance</div>
          <div className="text-xl font-bold">₹5,320</div>
          <div className="text-xs text-muted-foreground">Moderate</div>
        </div>
      </div>
    </div>
  );
}
