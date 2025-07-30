import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function FinancialHighlights() {
  const financials = [
    { metric: "Revenue (TTM)", value: "₹1,98,234 Cr", growth: "+18.3% YoY" },
    { metric: "Net Profit (TTM)", value: "₹45,678 Cr", growth: "+15.2% YoY" },
    { metric: "Operating Margin", value: "35.2%", growth: "+1.4% YoY" },
    { metric: "ROE", value: "16.8%", growth: "+0.6% YoY" },
    { metric: "Debt to Equity", value: "0.42", growth: "-0.05 QoQ" },
    { metric: "Dividend Yield", value: "1.2%", growth: "+0.1% YoY" },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/3">Metric</TableHead>
          <TableHead className="w-1/3">Value</TableHead>
          <TableHead className="w-1/3">Growth</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {financials.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{item.metric}</TableCell>
            <TableCell>{item.value}</TableCell>
            <TableCell>
              <Badge
                variant={item.growth.includes("+") ? "default" : "destructive"}
              >
                {item.growth}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
