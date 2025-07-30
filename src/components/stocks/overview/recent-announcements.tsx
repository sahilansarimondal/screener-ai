import { Button } from "@/components/ui/button";

export function RecentAnnouncements() {
  const announcements = [
    {
      date: "May 15, 2023",
      title: "Board Meeting Intimation for Results & Dividend",
      type: "Result",
    },
    {
      date: "Apr 20, 2023",
      title: "Declaration of Interim Dividend",
      type: "Dividend",
    },
    {
      date: "Mar 10, 3 2023",
      title: "Investor Presentation - Q4 FY23",
      type: "Presentation",
    },
    {
      date: "Feb 15, 2023",
      title: "New Branch Inauguration in Mumbai",
      type: "General",
    },
  ];

  return (
    <div className="space-y-4">
      {announcements.map((item, index) => (
        <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
          <div className="flex items-start gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-lg text-sm font-medium">
              {item.type}
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {item.date}
              </p>
            </div>
            <Button variant="outline" size="sm">
              View
            </Button>
          </div>
        </div>
      ))}
      <Button variant="link" className="mt-4 pl-0">
        View All Announcements
      </Button>
    </div>
  );
}
