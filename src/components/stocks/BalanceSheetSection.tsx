"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const headers = [
  "Mar 2014",
  "Mar 2015",
  "Mar 2016",
  "Mar 2017",
  "Mar 2018",
  "Mar 2019",
  "Mar 2020",
  "Mar 2021",
  "Mar 2022",
  "Mar 2023",
  "Mar 2024",
  "Mar 2025",
];

const data = {
  "Equity Capital": [
    480, 501, 506, 513, 519, 545, 548, 551, 555, 558, 760, 765,
  ],
  Reserves: [
    43687, 62653, 73798, 91281, 109080, 153128, 175810, 209259, 246772, 288880,
    455636, 521024,
  ],
  Deposits: [
    367080, 450284, 545873, 643134, 788375, 922503, 1146207, 1333721, 1558003,
    1882663, 2376887, 2710898,
  ],
  Borrowing: [
    49597, 59478, 103714, 98416, 156442, 157733, 186834, 177697, 226966, 256549,
    730615, 634606,
  ],
  "Other Liabilities": [
    42776, 34181, 38321, 59000, 48770, 58898, 71430, 78279, 90639, 101783,
    466296, 524817,
  ],
  "Total Liabilities": [
    503620, 607097, 762212, 892344, 1103186, 1292806, 1580830, 1799507, 2122934,
    2530432, 4030194, 4392110,
  ],
  "Fixed Assets": [
    3026, 3225, 3667, 4000, 4008, 4369, 4776, 5248, 6432, 8431, 12604, 15258,
  ],
  CWIP: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  Investments: [
    119571, 149454, 193634, 210777, 238461, 289446, 389305, 438823, 449264,
    511582, 1005682, 1186473,
  ],
  "Other Assets": [
    381023, 454417, 564912, 677567, 860717, 998991, 1186750, 1355435, 1667238,
    2010419, 3011909, 3190379,
  ],
  "Total Assets": [
    503620, 607097, 762212, 892344, 1103186, 1292806, 1580830, 1799507, 2122934,
    2530432, 4030194, 4392110,
  ],
};

export function BalanceSheetSection() {
  return (
    <Card id="BS" className="w-full rounded-2xl shadow-md ">
      <CardContent className="p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Balance Sheet
            </h2>
            <p className="text-sm text-muted-foreground">
              Consolidated Figures in Rs. Crores /{" "}
              <span className="text-primary cursor-pointer underline">
                View Standalone
              </span>
            </p>
          </div>
          <button className="rounded-md border border-primary px-3 py-1 text-sm font-medium text-primary hover:bg-primary/10 transition">
            Corporate Actions
          </button>
        </div>

        <div className="overflow-auto">
          <table className="min-w-[1200px] w-full text-sm border-separate border-spacing-0">
            <thead className="">
              <tr>
                <th className="sticky left-0 px-3 py-2 text-left font-medium text-muted-foreground">
                  {" "}
                </th>
                {headers.map((year) => (
                  <th
                    key={year}
                    className="px-3 py-2 font-medium text-muted-foreground whitespace-nowrap"
                  >
                    {year}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(data).map(([label, values], index) => (
                <tr
                  key={label}
                  className={cn(
                    index === 5 || index === 10 ? "border-t border-muted" : "",
                    index === 5 || index === 10
                      ? "font-semibold text-foreground"
                      : "",
                    index % 2 === 0 && "bg-muted"
                  )}
                >
                  <td
                    className={cn(
                      "sticky left-0 bg-background px-3 py-2 whitespace-nowrap",
                      index === 5 || index === 10 ? "font-semibold" : ""
                    )}
                  >
                    {label}
                  </td>
                  {values.map((value, i) => (
                    <td
                      key={i}
                      className="px-3 py-2 text-right tabular-nums text-muted-foreground"
                    >
                      {value.toLocaleString("en-IN")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
