import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  { name: "Market Cap", value: "₹1.24 L Cr", change: "+2.3%" },
  { name: "P/E Ratio", value: "24.3", change: "Industry: 28.7" },
  { name: "ROCE", value: "18.2%", change: "+2.6% YoY" },
  { name: "Dividend Yield", value: "1.8%", change: "+0.2% YoY" },
  { name: "Debt to Equity", value: "0.45", change: "-0.05 QoQ" },
  { name: "Promoter Holding", value: "42.3%", change: "+0.8% YoY" },
];

export function KeyMetrics() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {metrics.map((metric, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">{metric.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">{metric.value}</div>
            <div className="text-xs text-muted-foreground">{metric.change}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
