"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

const navItems = [
  {
    title: "Tools",
    href: "#features",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-16 max-w-10/12 w-full mx-auto items-center justify-between py-6 z-40 bg-background/70 backdrop-blur-md top-0 sticky">
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
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <nav className="flex items-center space-x-4">
        <ModeToggle />
        <Button variant="ghost" asChild>
          <Link href="/auth/login">Sign in</Link>
        </Button>
        <Button asChild>
          <Link href="/auth/register">Get started</Link>
        </Button>
      </nav>
    </div>
  );
}
