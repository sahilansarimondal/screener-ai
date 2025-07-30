import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const peers = [
  {
    name: "Reliance Industries",
    price: "₹2,845",
    change: "+1.5%",
    pe: 28.4,
    marketCap: "₹19.2L Cr",
  },
  {
    name: "Tata Consultancy",
    price: "₹3,412",
    change: "-0.3%",
    pe: 32.1,
    marketCap: "₹13.8L Cr",
  },
  {
    name: "HDFC Bank",
    price: "₹1,628",
    change: "+0.8%",
    pe: 19.3,
    marketCap: "₹12.5L Cr",
  },
  {
    name: "Infosys",
    price: "₹1,425",
    change: "-1.2%",
    pe: 25.7,
    marketCap: "₹5.9L Cr",
  },
  {
    name: "ICICI Bank",
    price: "₹1,072",
    change: "+2.1%",
    pe: 17.8,
    marketCap: "₹7.4L Cr",
  },
];

export function PeerComparison() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Change</TableHead>
          <TableHead>P/E Ratio</TableHead>
          <TableHead>Market Cap</TableHead>
          <TableHead>Rating</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {peers.map((peer, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{peer.name}</TableCell>
            <TableCell>{peer.price}</TableCell>
            <TableCell
              className={
                peer.change.startsWith("+") ? "text-green-500" : "text-red-500"
              }
            >
              {peer.change}
            </TableCell>
            <TableCell>{peer.pe}</TableCell>
            <TableCell>{peer.marketCap}</TableCell>
            <TableCell>
              <Badge
                variant={
                  index === 0
                    ? "default"
                    : index === 3
                    ? "destructive"
                    : "secondary"
                }
              >
                {index === 0 ? "Strong Buy" : index === 3 ? "Hold" : "Buy"}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
