import { StockChart } from "@/components/stocks/charts/stock-chart";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export function ChartSection() {
  return (
    <div className="">
      <div className="">
        <StockChart />
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader className="pb-4">
            <CardTitle>Technical Indicators</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <div className="text-sm text-muted-foreground">RSI (14)</div>
                <div className="text-xl font-bold">62.4</div>
                <div className="text-xs text-muted-foreground">Neutral</div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="text-sm text-muted-foreground">MACD</div>
                <div className="text-xl font-bold">12.5</div>
                <div className="text-xs text-green-500">Bullish</div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="text-sm text-muted-foreground">Support</div>
                <div className="text-xl font-bold">₹1,580</div>
                <div className="text-xs text-muted-foreground">Strong</div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="text-sm text-muted-foreground">Resistance</div>
                <div className="text-xl font-bold">₹1,680</div>
                <div className="text-xs text-muted-foreground">Moderate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-4">
            <CardTitle>Chart Tools</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="gap-2">
              <Icons.lineChart className="h-4 w-4" />
              Line Chart
            </Button>
            <Button variant="outline" className="gap-2">
              <Icons.candlestick className="h-4 w-4" />
              Candlestick
            </Button>
            <Button variant="outline" className="gap-2">
              <Icons.compare className="h-4 w-4" />
              Compare
            </Button>
            <Button variant="outline" className="gap-2">
              <Icons.download className="h-4 w-4" />
              Export Data
            </Button>
            <Button variant="outline" className="gap-2">
              <Icons.ruler className="h-4 w-4" />
              Draw Tools
            </Button>
            <Button variant="outline" className="gap-2">
              <Icons.settings className="h-4 w-4" />
              Indicators
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-4">
            <CardTitle>Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">1 Week</span>
                <span className="text-green-500 font-medium">+2.3%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">1 Month</span>
                <span className="text-green-500 font-medium">+5.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">3 Months</span>
                <span className="text-green-500 font-medium">+12.4%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">YTD</span>
                <span className="text-green-500 font-medium">+18.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">1 Year</span>
                <span className="text-green-500 font-medium">+24.5%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
