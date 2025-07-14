"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

const navItems = [
  {
    title: "Home",
    href: "/landing",
  },
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center space-x-6">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-8 w-8" />
        <span className="font-bold">StockAI</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === item.href ? "text-foreground" : "text-foreground/60"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
