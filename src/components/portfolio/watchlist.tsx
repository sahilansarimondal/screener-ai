import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const watchlist = [
  {
    symbol: "RELIANCE",
    name: "Reliance Industries",
    price: "₹2,845.50",
    change: "+1.5%",
  },
  {
    symbol: "TCS",
    name: "Tata Consultancy",
    price: "₹3,412.25",
    change: "-0.3%",
  },
  {
    symbol: "HDFCBANK",
    name: "HDFC Bank",
    price: "₹1,628.75",
    change: "+0.8%",
  },
  {
    symbol: "INFY",
    name: "Infosys",
    price: "₹1,425.30",
    change: "-1.2%",
  },
  {
    symbol: "ICICIBANK",
    name: "ICICI Bank",
    price: "₹1,072.90",
    change: "+2.1%",
  },
];

export function Watchlist() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Symbol</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Change</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {watchlist.map((stock, index) => (
          <TableRow key={index} className="hover:bg-muted/50 cursor-pointer">
            <TableCell className="font-medium">{stock.symbol}</TableCell>
            <TableCell>{stock.name}</TableCell>
            <TableCell>{stock.price}</TableCell>
            <TableCell
              className={
                stock.change.startsWith("+") ? "text-green-500" : "text-red-500"
              }
            >
              {stock.change}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
