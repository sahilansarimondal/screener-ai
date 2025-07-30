import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

const marketData = [
  {
    name: "NIFTY 50",
    value: "22,418.35",
    change: "+1.25%",
    direction: "up",
  },
  {
    name: "SENSEX",
    value: "73,805.20",
    change: "+1.12%",
    direction: "up",
  },
  {
    name: "NIFTY BANK",
    value: "48,112.75",
    change: "+0.87%",
    direction: "up",
  },
  {
    name: "NIFTY IT",
    value: "36,528.40",
    change: "-0.35%",
    direction: "down",
  },
];

export function MarketOverview() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {marketData.map((market, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{market.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{market.value}</div>
            <div
              className={`mt-1 flex items-center text-sm ${
                market.direction === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {market.direction === "up" ? (
                <Icons.trendingUp className="mr-1 h-4 w-4" />
              ) : (
                <Icons.trendingDown className="mr-1 h-4 w-4" />
              )}
              {market.change}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
