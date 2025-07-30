"use client";

import { useState } from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  ComposedChart,
  ReferenceLine,
  Legend,
  TooltipProps,
} from "recharts";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import { Icons } from "@/components/ui/icons";

interface PriceData {
  date: string;
  price: number;
  volume: number;
}

// Mock data for different time periods
const generatePriceData = (period: string): PriceData[] => {
  const baseData = [
    { date: "2023-01", price: 1450, volume: 2450000 },
    { date: "2023-02", price: 1500, volume: 3120000 },
    { date: "2023-03", price: 1520, volume: 2870000 },
    { date: "2023-04", price: 1560, volume: 3210000 },
    { date: "2023-05", price: 1580, volume: 2980000 },
    { date: "2023-06", price: 1600, volume: 3320000 },
    { date: "2023-07", price: 1620, volume: 3560000 },
    { date: "2023-08", price: 1580, volume: 3020000 },
    { date: "2023-09", price: 1610, volume: 3180000 },
    { date: "2023-10", price: 1630, volume: 3340000 },
    { date: "2023-11", price: 1650, volume: 3470000 },
    { date: "2023-12", price: 1645, volume: 3290000 },
  ];

  if (period === "1M") {
    // Daily data for 1 month
    return Array.from({ length: 30 }, (_, i) => ({
      date: `Dec ${i + 1}`,
      price: Math.round(1600 + Math.sin(i / 3) * 50),
      volume: Math.round(2000000 + Math.random() * 1500000),
    }));
  }

  if (period === "1Y") {
    return baseData;
  }

  if (period === "3Y") {
    return [
      ...Array.from({ length: 12 }, (_, i) => ({
        date: `2021-${i + 1}`,
        price: Math.round(1200 + i * 30 + Math.random() * 50),
        volume: Math.round(2000000 + Math.random() * 1000000),
      })),
      ...Array.from({ length: 12 }, (_, i) => ({
        date: `2022-${i + 1}`,
        price: Math.round(1350 + i * 20 + Math.random() * 50),
        volume: Math.round(2200000 + Math.random() * 1000000),
      })),
      ...baseData,
    ];
  }

  if (period === "5Y") {
    return [
      ...Array.from({ length: 12 }, (_, i) => ({
        date: `2019-${i + 1}`,
        price: Math.round(1000 + i * 20 + Math.random() * 50),
        volume: Math.round(1800000 + Math.random() * 800000),
      })),
      ...Array.from({ length: 12 }, (_, i) => ({
        date: `2020-${i + 1}`,
        price: Math.round(1100 + i * 25 + Math.random() * 50),
        volume: Math.round(1900000 + Math.random() * 900000),
      })),
      ...generatePriceData("3Y"),
    ];
  }

  // 10Y data
  return [
    ...Array.from({ length: 12 }, (_, i) => ({
      date: `2014-${i + 1}`,
      price: Math.round(700 + i * 15 + Math.random() * 30),
      volume: Math.round(1200000 + Math.random() * 500000),
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      date: `2015-${i + 1}`,
      price: Math.round(750 + i * 20 + Math.random() * 40),
      volume: Math.round(1300000 + Math.random() * 600000),
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      date: `2016-${i + 1}`,
      price: Math.round(800 + i * 25 + Math.random() * 50),
      volume: Math.round(1400000 + Math.random() * 700000),
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      date: `2017-${i + 1}`,
      price: Math.round(850 + i * 30 + Math.random() * 60),
      volume: Math.round(1500000 + Math.random() * 800000),
    })),
    ...Array.from({ length: 12 }, (_, i) => ({
      date: `2018-${i + 1}`,
      price: Math.round(900 + i * 35 + Math.random() * 70),
      volume: Math.round(1600000 + Math.random() * 900000),
    })),
    ...generatePriceData("5Y"),
  ];
};

export function StockChart() {
  const { theme } = useTheme();
  const [timePeriod, setTimePeriod] = useState("1Y");
  const [showVolume, setShowVolume] = useState(false);
  const chartData = generatePriceData(timePeriod);

  // Get the latest price for display
  const latestPrice = chartData[chartData.length - 1].price;
  const prevPrice = chartData[chartData.length - 2].price;
  const priceChange = latestPrice - prevPrice;
  const percentChange = (priceChange / prevPrice) * 100;

  // Colors based on theme
  const primaryColor = theme === "dark" ? "#3b82f6" : "#2563eb";
  const volumeColor = theme === "dark" ? "#4b5563" : "#9ca3af";
  const gridColor = theme === "dark" ? "#374151" : "#e5e7eb";
  const textColor = theme === "dark" ? "#f3f4f6" : "#1f2937";
  const cardBg = theme === "dark" ? "#1e293b" : "#ffffff";

  // Format date based on time period
  const formatDate = (date: string) => {
    if (timePeriod === "1M") {
      return date;
    }
    return date.includes(" ")
      ? date
      : date.substring(0, 3) + " '" + date.substring(5, 7);
  };

  // Custom tooltip component
  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<number, string>) => {
    if (active && payload && payload.length > 0) {
      const price = payload.find((item) => item.dataKey === "price")?.value;
      const volume = payload.find((item) => item.dataKey === "volume")?.value;

      return (
        <div className="p-3 bg-background border rounded-md shadow-md">
          <p className="font-bold">{label}</p>
          {price !== undefined && (
            <p className="text-sm">
              <span className="text-muted-foreground">Price: </span>₹
              {Number(price).toLocaleString()}
            </p>
          )}
          {volume !== undefined && (
            <p className="text-sm">
              <span className="text-muted-foreground">Volume: </span>
              {(Number(volume) / 1000000).toFixed(2)}M
            </p>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <Card id="chart">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 gap-4">
        <div>
          <CardTitle>Price Chart</CardTitle>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold">
              ₹{latestPrice.toLocaleString()}
            </span>
            <span
              className={`flex items-center text-sm font-medium ${
                priceChange >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {priceChange >= 0 ? (
                <Icons.trendingUp className="h-4 w-4 mr-1" />
              ) : (
                <Icons.trendingDown className="h-4 w-4 mr-1" />
              )}
              {priceChange >= 0 ? "+" : ""}
              {priceChange.toFixed(2)} ({percentChange >= 0 ? "+" : ""}
              {percentChange.toFixed(2)}%)
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Tabs value={timePeriod} onValueChange={setTimePeriod}>
            <TabsList>
              <TabsTrigger value="1M">1M</TabsTrigger>
              <TabsTrigger value="1Y">1Y</TabsTrigger>
              <TabsTrigger value="3Y">3Y</TabsTrigger>
              <TabsTrigger value="5Y">5Y</TabsTrigger>
              <TabsTrigger value="10Y">10Y</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="volume-toggle"
              checked={showVolume}
              onCheckedChange={(checked) => setShowVolume(checked === true)}
            />
            <Label htmlFor="volume-toggle" className="text-sm">
              Show Volume
            </Label>
          </div>
        </div>
      </CardHeader>

      <CardContent className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={gridColor}
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tick={{ fill: textColor, fontSize: 12 }}
              tickMargin={10}
              tickFormatter={formatDate}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke={textColor}
              tick={{ fill: textColor, fontSize: 12 }}
              domain={["auto", "auto"]}
              tickFormatter={(value) => `₹${value.toLocaleString()}`}
            />
            {showVolume && (
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke={volumeColor}
                tick={{ fill: volumeColor, fontSize: 12 }}
                tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
              />
            )}
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <ReferenceLine
              yAxisId="left"
              y={prevPrice}
              stroke={theme === "dark" ? "#94a3b8" : "#64748b"}
              strokeDasharray="3 3"
            />

            {showVolume && (
              <Bar
                dataKey="volume"
                fill={`var(--color-secondary-foreground)`}
                opacity={0.2}
                yAxisId="right"
                name="Volume"
                radius={[2, 2, 0, 0]}
              />
            )}
            <Line
              type="monotone"
              dataKey="price"
              stroke={`var(--color-primary)`}
              strokeWidth={2}
              dot={{ r: 0 }}
              activeDot={{
                r: 6,
                fill: primaryColor,
                stroke: cardBg,
                strokeWidth: 2,
              }}
              yAxisId="left"
              name="Stock Price"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
