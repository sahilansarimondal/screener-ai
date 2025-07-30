// components/Documents.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown, Flag } from "lucide-react";

const ButtonTag = ({ label }: { label: string }) => (
  <Button variant="outline" size="sm" className="text-primary border-primary">
    {label}
  </Button>
);

export default function DocumentSection() {
  return (
    <Card id="documents" className="p-6 md:p-10 ">
      <h2 className="text-3xl font-semibold mb-6">Documents</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Announcements */}
        <Card className="flex flex-col max-h-[350px]">
          <CardHeader className="pb-2">
            <h3 className="text-xl font-semibold">Announcements</h3>
            <div className="flex gap-2 mt-2">
              {["Recent", "Important", "Search", "All ↗"].map((tab, i) => (
                <Button
                  key={i}
                  variant={i === 0 ? "default" : "ghost"}
                  size="sm"
                >
                  {tab}
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-4 text-sm">
            <div>
              <a href="#" className="text-primary font-medium">
                Announcement under Regulation 30 (LODR)...
              </a>
              <p className="text-muted-foreground text-xs">
                2d – HDFC Bank Q1 FY26 earnings call: growth outlook...
              </p>
            </div>
            <div>
              <a href="#" className="text-primary">
                Reg. 34 (1) Annual Report.
              </a>
              <p className="text-muted-foreground text-xs">2d</p>
            </div>
            <div>
              <a href="#" className="text-primary">
                Announcement under Regulation 30 – Newspaper Publication
              </a>
              <p className="text-muted-foreground text-xs">23 Jul</p>
            </div>
            <ArrowDown
              size={18}
              className="mx-auto mt-2 text-muted-foreground"
            />
          </CardContent>
        </Card>

        {/* Annual Reports */}
        <Card className="flex flex-col max-h-[350px]">
          <CardHeader>
            <h3 className="text-xl font-semibold">Annual reports</h3>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-3 text-sm">
            {["2025", "2024", "2023", "2022", "2021"].map((year) => (
              <div key={year}>
                <a href="#" className="text-primary font-medium">
                  Financial Year {year}
                </a>
                <p className="text-muted-foreground text-xs">from bse</p>
              </div>
            ))}
            <ArrowDown
              size={18}
              className="mx-auto mt-2 text-muted-foreground"
            />
          </CardContent>
        </Card>

        {/* Credit Ratings */}
        <Card className="flex flex-col max-h-[350px]">
          <CardHeader>
            <h3 className="text-xl font-semibold">Credit ratings</h3>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-3 text-sm">
            {[
              { date: "30 Jun", agency: "icra" },
              { date: "27 Jun", agency: "crisil" },
              { date: "6 Mar", agency: "care" },
              { date: "4 Dec 2024", agency: "fitch" },
            ].map(({ date, agency }, i) => (
              <div key={i}>
                <a href="#" className="text-primary font-medium">
                  Rating update
                </a>
                <p className="text-muted-foreground text-xs">
                  {date} from {agency}
                </p>
              </div>
            ))}
            <ArrowDown
              size={18}
              className="mx-auto mt-2 text-muted-foreground"
            />
          </CardContent>
        </Card>

        {/* Concalls */}
        <Card className="flex flex-col max-h-[350px]">
          <CardHeader className="flex flex-row items-center justify-between">
            <h3 className="text-xl font-semibold">Concalls</h3>
            <a
              href="#"
              className="flex items-center gap-1 text-sm text-muted-foreground underline"
            >
              <Flag size={14} /> Add Missing
            </a>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-3 text-sm">
            {[
              {
                month: "Jul 2025",
                tags: ["Transcript", "Notes", "PPT", "REC"],
              },
              {
                month: "Apr 2025",
                tags: ["Transcript", "Notes", "PPT", "REC"],
              },
              { month: "Jan 2025", tags: ["Transcript", "Notes", "PPT"] },
              { month: "Oct 2024", tags: ["Transcript", "Notes", "PPT"] },
              {
                month: "Jul 2024",
                tags: ["Transcript", "Notes", "PPT", "REC"],
              },
            ].map(({ month, tags }, i) => (
              <div key={i}>
                <div className="text-muted-foreground font-medium mb-1">
                  {month}
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <ButtonTag key={tag} label={tag} />
                  ))}
                </div>
              </div>
            ))}
            <ArrowDown
              size={18}
              className="mx-auto mt-2 text-muted-foreground"
            />
          </CardContent>
        </Card>
      </div>
    </Card>
  );
}
