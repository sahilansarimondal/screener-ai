import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const CashFlowSection = () => {
  const years = [
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

  const data = [
    {
      label: "Cash from Operating Activity",
      values: [
        4211, -21281, -34435, 47619, 64663, 61324, 61688, 73031, 94508, 131456,
        160426, 159096,
      ],
    },
    {
      label: "Cash from Investing Activity",
      values: [
        -6885, -215, 16234, -41508, -55487, -47842, -24890, -54833, -56313,
        -71196, -90107, -131281,
      ],
    },
    {
      label: "Cash from Financing Activity",
      values: [
        2183, 20189, 18728, -7889, -10555, -14718, -24792, -29019, -22878,
        -43735, -63462, -26112,
      ],
    },
    {
      label: "Net Cash Flow",
      values: [
        -491, -1307, 527, -778, -379, -236, 7, -821, 1317, 7525, 4857, 1702,
      ],
      bold: true,
    },
  ];

  return (
    <Card id="CF" className="mt-8 ">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl">Cash Flows</CardTitle>
        <p className="text-sm text-muted-foreground">
          Consolidated Figures in Rs. Crores /{" "}
          <a href="#" className="text-primary font-medium hover:underline ml-1">
            View Standalone
          </a>
        </p>
      </CardHeader>

      <CardContent className="overflow-auto">
        <table className="min-w-full text-sm text-right border-separate border-spacing-y-2">
          <thead>
            <tr className="text-muted-foreground text-xs font-semibold border-b border-border">
              <th className="text-left sticky left-0 bg-background"> </th>
              {years.map((year, idx) => (
                <th key={idx}>{year}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className={cn(
                  i % 2 === 0 && "bg-muted/40",
                  row.bold && "border-t border-border"
                )}
              >
                <td className="text-left sticky left-0 bg-background font-medium text-foreground">
                  {row.label}
                </td>
                {row.values.map((val, idx) => (
                  <td
                    key={idx}
                    className={row.bold ? "font-semibold text-foreground" : ""}
                  >
                    {val.toLocaleString()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default CashFlowSection;
