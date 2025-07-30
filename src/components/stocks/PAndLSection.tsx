"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // You should have `cn` helper from ShadCN
import clsx from "clsx";
import { GrowthCardsSection } from "./GrothCardSection";

const quarters = [
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
  "TTM",
];

const rows = [
  {
    label: "Revenue",
    values: [
      42555, 50666, 63162, 73271, 85288, 105161, 122189, 128552, 135936, 170754,
      283649, 336367, 342193,
    ],
  },
  {
    label: "Interest",
    values: [
      16358, 18311, 20505, 22606, 25955, 41250, 43242, 43692, 44580, 45414,
      46914, 46986, 47709,
    ],
  },
  {
    label: "Expenses",
    values: [
      15021, 15915, 16682, 17770, 18470, 45349, 50530, 62938, 49690, 52074,
      41307, 47709, 64497,
    ],
  },

  {
    label: "Financing Profit",
    values: [
      5895, 6704, 7815, 7172, 6744, -11560, -15764, -27196, -12723, -14487,
      -3181, -7916, -24833,
    ],
    bold: true,
  },
  {
    label: "Financing Margin %",
    values: [
      "16%",
      "16%",
      "17%",
      "15%",
      "13%",
      "-15%",
      "-20%",
      "-34%",
      "-16%",
      "-17%",
      "-4%",
      "-9%",
      "-28%",
    ],
  },

  {
    label: "Other Income",
    values: [
      6929, 8252, 9121, 9610, 9853, 32528, 37007, 44958, 35450, 38455, 27154,
      33489, 45683,
    ],
  },
  { label: "Depreciation", values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },

  {
    label: "Profit before tax",
    values: [
      12823, 14956, 16936, 16783, 16597, 20967, 21243, 17761, 22727, 23968,
      23973, 25573, 20850,
    ],
    bold: true,
  },
  {
    label: "Tax %",
    values: [
      "25%",
      "25%",
      "25%",
      "25%",
      "25%",
      "17%",
      "17%",
      "-1%",
      "24%",
      "22%",
      "24%",
      "25%",
      "18%",
    ],
  },

  {
    label: "Net Profit",
    values: [
      9617, 11163, 12735, 12634, 12403, 17312, 17718, 18013, 17188, 18627,
      18340, 19285, 17090,
    ],
    bold: true,
  },

  {
    label: "EPS in Rs",
    values: [
      17.25, 19.97, 22.77, 22.57, 22.12, 22.17, 22.73, 23.2, 21.65, 23.36,
      23.09, 24.61, 21.2,
    ],
  },
];
export default function PAndLSection() {
  return (
    <Card id={"PnL"} className="overflow-auto rounded-2xl ">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Profit and Loss</CardTitle>
        <p className="text-sm text-muted-foreground">
          Consolidated Figures in ₹ Crores /{" "}
          <span className="text-primary underline cursor-pointer">
            View Standalone
          </span>
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <table className="min-w-full border-separate border-spacing-0">
          <thead className=" sticky top-0">
            <tr>
              <th className="text-left p-4 text-sm font-semibold bg-background">
                {" "}
              </th>
              {quarters.map((q, i) => (
                <th
                  key={i}
                  className={clsx(
                    "text-left p-4 text-sm font-medium whitespace-nowrap"
                  )}
                >
                  {q}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={row.label}
                className={cn(rowIndex % 2 === 0 && "bg-muted")}
              >
                <td
                  className={cn(
                    "p-4 text-sm whitespace-nowrap",
                    row.bold && "font-semibold",
                    row.label === "Financing Profit" && "border-t-3",
                    row.label === "Net Profit" && "border-t-3",
                    row.label === "Profit before tax" && "border-t-3"
                  )}
                >
                  {row.label}
                </td>
                {quarters.map((_, i) => (
                  <td
                    key={i}
                    className={cn(
                      "p-4 text-sm text-right whitespace-nowrap",
                      row.bold && "font-semibold",
                      row.label === "Financing Profit" && "border-t-3",
                      row.label === "Net Profit" && "border-t-3",
                      row.label === "Profit before tax" && "border-t-3"
                    )}
                  >
                    {row.values[i] !== undefined ? row.values[i] : "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className=" p-6">
          <GrowthCardsSection />
        </div>
      </CardContent>
    </Card>
  );
}
