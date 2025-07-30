import { BalanceSheetSection } from "@/components/stocks/BalanceSheetSection";
import CashFlowSection from "@/components/stocks/CashFlowSection";
import DocumentSection from "@/components/stocks/charts/DocumentSection";
import RatioSection from "@/components/stocks/charts/RatioSection";
import { StockChart } from "@/components/stocks/charts/stock-chart";
import PAndLSection from "@/components/stocks/PAndLSection";
import QuarterlyResultsTable from "@/components/stocks/QuarterlyResultsTable";
import { StockHeader } from "@/components/stocks/stock-header";
import StockOverview from "@/components/stocks/StockOverview";

export default function Page() {
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
    <main className="">
      <StockHeader {...stockData} />
      <div className=" space-y-10 p-6 max-w-full md:max-w-10/12 mx-auto">
        <StockOverview />
        <StockChart />
        <QuarterlyResultsTable />
        <PAndLSection />
        <BalanceSheetSection />
        <CashFlowSection />
        <RatioSection />
        <DocumentSection />
      </div>
    </main>
  );
}
