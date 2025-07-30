"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

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

const ratios = [
  {
    label: "ROE %",
    values: [
      "22%",
      "20%",
      "19%",
      "18%",
      "18%",
      "17%",
      "16%",
      "16%",
      "17%",
      "17%",
      "17%",
      "14%",
    ],
  },
];

export default function RatioSection() {
  return (
    <Card id="ratios" className=" rounded-2xl ">
      <CardHeader>
        <CardTitle className="text-2xl text-white">Ratios</CardTitle>
        <CardDescription className="text-md text-muted-foreground">
          Consolidated Figures in Rs. Crores /{" "}
          <span className="text-primary underline cursor-pointer">
            View Standalone
          </span>
        </CardDescription>
      </CardHeader>

      <CardContent className="overflow-x-auto">
        <table className="w-full text-sm text-left border-separate border-spacing-y-0">
          <thead>
            <tr className="text-center text-muted-foreground text-sm font-medium">
              <th className="text-left px-4 py-2"></th>
              {years.map((year) => (
                <th key={year} className="px-4 py-2 whitespace-nowrap">
                  {year}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {ratios.map((item, i) => (
              <tr key={i} className="bg-background  border-t border-border">
                <td className="px-4 py-3 font-medium">{item.label}</td>
                {item.values.map((val, j) => (
                  <td
                    key={j}
                    className="px-4 py-3 text-center whitespace-nowrap"
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
