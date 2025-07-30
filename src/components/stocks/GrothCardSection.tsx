import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const growthMetrics = [
  {
    title: "Compounded Sales Growth",
    data: [
      { label: "10 Years", value: "21%" },
      { label: "5 Years", value: "22%" },
      { label: "3 Years", value: "35%" },
      { label: "TTM", value: "9%" },
    ],
  },
  {
    title: "Compounded Profit Growth",
    data: [
      { label: "10 Years", value: "21%" },
      { label: "5 Years", value: "21%" },
      { label: "3 Years", value: "23%" },
      { label: "TTM", value: "4%" },
    ],
  },
  {
    title: "Stock Price CAGR",
    data: [
      { label: "10 Years", value: "14%" },
      { label: "5 Years", value: "13%" },
      { label: "3 Years", value: "12%" },
      { label: "1 Year", value: "24%" },
    ],
  },
  {
    title: "Return on Equity",
    data: [
      { label: "10 Years", value: "16%" },
      { label: "5 Years", value: "16%" },
      { label: "3 Years", value: "16%" },
      { label: "Last Year", value: "14%" },
    ],
  },
];

export function GrowthCardsSection() {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {growthMetrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle> {metric.title}</CardTitle>
          </CardHeader>
          <CardContent className="px-6">
            <div className="space-y-1">
              {metric.data.map((item, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.label}:</span>
                  <span className="font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
