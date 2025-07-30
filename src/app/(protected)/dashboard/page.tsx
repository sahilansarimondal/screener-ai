import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { OverviewChart } from "@/components/data-display/overview-chart";
import { FinancialTable } from "@/components/data-display/financial-table";
import { KeyMetrics } from "@/components/data-display/key-metrics";
import { TechnicalAnalysis } from "@/components/stocks/technical/technical-analysis";
import { PeerComparison } from "@/components/stocks/overview/peer-comparison";
// import { Watchlist } from "@/components/portfolio/watchlist";
import { MarketOverview } from "@/components/data-display/market-overview";
// import { MainNav } from "@/components/layout/main-nav";
// import { DashboardHeader } from "@/components/layout/dashboard-header";
import { DashboardShell } from "@/components/layout/dashboard-shell";

export default function DashboardPage() {
  return (
    <DashboardShell>
      {/* <DashboardHeader
        heading="Dashboard"
        text="Your AI-powered stock research hub"
      /> */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Market Overview</CardTitle>
            <CardDescription>
              Indian market indices and key metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MarketOverview />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>My Watchlist</CardTitle>
            <CardDescription>Track your favorite stocks</CardDescription>
          </CardHeader>
          <CardContent>{/* <Watchlist /> */}</CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="financials">Financials</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="peers">Peers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Key Metrics</CardTitle>
                <CardDescription>
                  Fundamental analysis indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <KeyMetrics />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Chart</CardTitle>
                <CardDescription>Price movement vs market</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                {/* <OverviewChart /> */}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financials">
          <Card>
            <CardHeader>
              <CardTitle>Financial Statements</CardTitle>
              <CardDescription>Quarterly and annual financials</CardDescription>
            </CardHeader>
            <CardContent>
              <FinancialTable />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technical">
          <Card>
            <CardHeader>
              <CardTitle>Technical Analysis</CardTitle>
              <CardDescription>Charts and technical indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <TechnicalAnalysis />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="peers">
          <Card>
            <CardHeader>
              <CardTitle>Peer Comparison</CardTitle>
              <CardDescription>Compare with similar companies</CardDescription>
            </CardHeader>
            <CardContent>
              <PeerComparison />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>AI Insights</CardTitle>
          <CardDescription>Our AI analysis of this stock</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h3 className="font-semibold text-blue-700 dark:text-blue-300">
              Buy Recommendation
            </h3>
            <p className="mt-2 text-sm text-blue-600 dark:text-blue-200">
              Our AI model gives this stock a strong buy rating with 85%
              confidence based on fundamental strength and technical momentum.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Key Strengths</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li className="flex items-center">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                Strong revenue growth (5-year CAGR: 18%)
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                Improving profit margins (QoQ +2.3%)
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                Positive institutional ownership trend
              </li>
              <li className="flex items-center">
                <span className="mr-2 h-2 w-2 rounded-full bg-yellow-500"></span>
                Moderate debt levels (D/E: 0.45)
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
