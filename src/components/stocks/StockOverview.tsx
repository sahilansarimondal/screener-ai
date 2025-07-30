// components/StockOverview.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

type Ratio = {
  label: string;
  value: string | number;
};

const ratios: Ratio[] = [
  { label: "Market Cap", value: "₹15,38,156 Cr." },
  { label: "Stock P/E", value: 21.8 },
  { label: "ROCE", value: "7.51%" },
  { label: "Industry PE", value: 12.7 },
  { label: "Pledged %", value: "0.00%" },
  { label: "Debt to Equity", value: 6.41 },
  { label: "Current Price", value: "₹2,005" },
  { label: "Book Value", value: "₹682" },
  { label: "ROE", value: "14.4%" },
  { label: "Industry PBV", value: 1.31 },
  { label: "Price to Sales", value: 4.49 },
  { label: "Int Coverage", value: 1.5 },
  { label: "High / Low", value: "₹2,038 / ₹1,593" },
  { label: "Dividend Yield", value: "0.55%" },
  { label: "Face Value", value: "₹1.00" },
  { label: "Change in Prom Hold", value: "0.00%" },
  { label: "PEG Ratio", value: 0.95 },
  { label: "Other Inc Ann", value: "₹1,34,548 Cr." },
];

export default function StockOverviewSection() {
  return (
    <div id="overview" className="space-y-6">
      {/* Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">HDFC Bank Ltd</h2>
            <p className="text-sm text-muted-foreground">
              NSE: HDFCBANK | BSE: 500180
            </p>
          </div>
          <div className="text-right">
            <h3 className="text-xl font-semibold text-red-600">
              ₹2,005 <span className="text-sm">(-0.48%)</span>
            </h3>
            <p className="text-xs text-muted-foreground">
              25 Jul - close price
            </p>
          </div>
        </div>

        {/* Ratios */}
        <Card>
          <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ratios.map((item, idx) => (
              <div
                key={idx}
                className={clsx(
                  " bg-primary-foreground rounded-md py-1 px-4 flex justify-between items-center "
                )}
              >
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Add Ratio */}
        <div className="flex items-center gap-2">
          <Input placeholder="eg. Promoter holding" className="max-w-sm" />
          <Button variant="outline">Add Ratio</Button>
        </div>
      </Card>
    </div>
  );
}
