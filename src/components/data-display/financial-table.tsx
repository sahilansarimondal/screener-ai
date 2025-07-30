import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const financialData = [
  {
    period: "Q1 FY25",
    revenue: "₹12,345 Cr",
    growth: "+18.3%",
    profit: "₹2,345 Cr",
    margin: "19.0%",
    status: "beat",
  },
  {
    period: "Q4 FY24",
    revenue: "₹11,234 Cr",
    growth: "+15.2%",
    profit: "₹2,100 Cr",
    margin: "18.7%",
    status: "meet",
  },
  {
    period: "Q3 FY24",
    revenue: "₹10,876 Cr",
    growth: "+12.8%",
    profit: "₹1,987 Cr",
    margin: "18.3%",
    status: "miss",
  },
  {
    period: "Q2 FY24",
    revenue: "₹9,876 Cr",
    growth: "+11.5%",
    profit: "₹1,765 Cr",
    margin: "17.9%",
    status: "meet",
  },
  {
    period: "Q1 FY24",
    revenue: "₹9,345 Cr",
    growth: "+10.2%",
    profit: "₹1,654 Cr",
    margin: "17.7%",
    status: "beat",
  },
];

export function FinancialTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Period</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead>Growth (YoY)</TableHead>
          <TableHead>Net Profit</TableHead>
          <TableHead>Margin</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {financialData.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{item.period}</TableCell>
            <TableCell>{item.revenue}</TableCell>
            <TableCell className="text-green-500">{item.growth}</TableCell>
            <TableCell>{item.profit}</TableCell>
            <TableCell>{item.margin}</TableCell>
            <TableCell>
              <Badge
                variant={
                  item.status === "beat"
                    ? "default"
                    : item.status === "meet"
                    ? "secondary"
                    : "destructive"
                }
              >
                {item.status === "beat"
                  ? "Beat Estimates"
                  : item.status === "meet"
                  ? "Met Estimates"
                  : "Missed Estimates"}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
