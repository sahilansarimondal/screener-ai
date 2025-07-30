"use client";

import { useEffect, useMemo, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface StockHeaderProps {
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: string;
  sector: string;
  industry: string;
}

export function StockHeader({
  name,
}: //   symbol,
//   price,
//   change,
//   changePercent,
//   marketCap,
//   sector,
//   industry,
StockHeaderProps) {
  //   const [isWatching, setIsWatching] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const Items = useMemo(
    () => [
      { title: name, value: "overview" },
      { title: "Chart", value: "chart" },
      // { title: "Peers", value: "peers" },
      { title: "Quarters", value: "quarters" },
      { title: "Profit & Loss", value: "PnL" },
      { title: "Balance Sheet", value: "BS" },
      { title: "Cash Flow", value: "CF" },
      { title: "Ratios", value: "ratios" },
      // { title: "Investors", value: "investors" },
      { title: "Documents", value: "documents" },
    ],
    [name]
  );

  const handleTabClick = (e: React.MouseEvent, tab: string) => {
    // Only scroll for tabs that correspond to section IDs

    e.preventDefault();
    const el = document.getElementById(tab);
    const offset = 140;
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const id of Items.map((item) => item.value)) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 150) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, [Items]);

  return (
    <div className="border-b bg-background/80 backdrop-blur-md sticky z-10  top-12">
      <div className="container mx-auto px-4 py-4">
        {/* Stock info row */}
        {/* <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              <div>
                <h1 className="text-2xl font-bold">
                  {name} <span className="text-gray-500">({symbol})</span>
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded dark:bg-blue-900/30 dark:text-blue-300">
                    {sector}
                  </span>
                  <span className="text-sm px-2 py-1 bg-purple-100 text-purple-800 rounded dark:bg-purple-900/30 dark:text-purple-300">
                    {industry}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold">
                ₹{price.toLocaleString()}
              </span>
              <span
                className={`text-lg font-semibold ${
                  change >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {change >= 0 ? "+" : ""}
                {change.toLocaleString()} ({changePercent >= 0 ? "+" : ""}
                {changePercent}%)
              </span>
            </div>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Market Cap: {marketCap}
            </div>
          </div>
        </div> */}

        {/* Action buttons */}
        {/* <div className="flex flex-wrap items-center gap-3 mt-4">
          <Button
            variant={isWatching ? "default" : "outline"}
            onClick={() => setIsWatching(!isWatching)}
          >
            {isWatching ? (
              <>
                <Icons.eyeOff className="mr-2 h-4 w-4" />
                Remove from Watchlist
              </>
            ) : (
              <>
                <Icons.eye className="mr-2 h-4 w-4" />
                Add to Watchlist
              </>
            )}
          </Button>
          <Button variant="outline">
            <Icons.bell className="mr-2 h-4 w-4" />
            Set Alert
          </Button>
          <Button variant="outline">
            <Icons.pieChart className="mr-2 h-4 w-4" />
            Add to Portfolio
          </Button>
          <Button variant="outline">
            <Icons.share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div> */}

        {/* Navigation tabs */}
        <div className="">
          <Tabs
            value={activeSection || "overview"}
            onValueChange={(val) => setActiveSection(val)}
            className="w-full"
          >
            <TabsList className="flex w-full overflow-x-auto">
              {Items.map((item) => {
                return (
                  <TabsTrigger
                    key={item.value}
                    value={item.value}
                    onClick={(e) => handleTabClick(e, item.value)}
                  >
                    {item.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
