import { StockHeader } from "@/components/stocks/stock-header";
import { KeyMetrics } from "@/components/data-display/key-metrics";
// import { FinancialHighlights } from "@/components/stocks/overview/financial-highlights";
import { PeerComparison } from "@/components/stocks/overview/peer-comparison";
// import { RecentAnnouncements } from "@/components/stocks/overview/recent-announcements";
import { Button } from "../ui/button";

export function StockOverviewPage() {
  const stockData = {
    name: "HDFC Bank Ltd.",
    symbol: "HDFCBANK",
    price: 1645.35,
    change: 12.75,
    changePercent: 0.78,
    marketCap: "₹11.24 Lakh Cr",
    sector: "Financial Services",
    industry: "Banking",
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
      <StockHeader {...stockData} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Key Metrics</h2>
              <KeyMetrics />
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Financial Highlights</h2>
              {/* <FinancialHighlights /> */}
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Recent Announcements</h2>
              {/* <RecentAnnouncements /> */}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Peer Comparison</h2>
              <PeerComparison />
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">
                Analyst Recommendations
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">Buy</span>
                    <span>Morgan Stanley</span>
                  </div>
                  <span className="font-bold">₹1,850</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">Buy</span>
                    <span>Goldman Sachs</span>
                  </div>
                  <span className="font-bold">₹1,800</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-bold mr-2">Hold</span>
                    <span>JP Morgan</span>
                  </div>
                  <span className="font-bold">₹1,650</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">Buy</span>
                    <span>Credit Suisse</span>
                  </div>
                  <span className="font-bold">₹1,780</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <div className="space-y-2">
                <Button variant="link" className="w-full justify-start">
                  Financial Statements
                </Button>
                <Button variant="link" className="w-full justify-start">
                  Annual Reports
                </Button>
                <Button variant="link" className="w-full justify-start">
                  Investor Presentations
                </Button>
                <Button variant="link" className="w-full justify-start">
                  Corporate Actions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
