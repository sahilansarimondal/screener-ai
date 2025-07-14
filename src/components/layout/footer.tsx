import Link from "next/link";
import { Icons } from "@/components/ui/icons";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-full lg:col-span-1">
            <div className="flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="font-bold">StockAI</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              AI-powered stock research platform for Indian markets.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/features"
                  className="hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/screener"
                  className="hover:text-foreground transition-colors"
                >
                  Stock Screener
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="hover:text-foreground transition-colors"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-foreground transition-colors"
                >
                  Research Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="hover:text-foreground transition-colors"
                >
                  Investment Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/webinars"
                  className="hover:text-foreground transition-colors"
                >
                  Webinars
                </Link>
              </li>
              <li>
                <Link
                  href="/glossary"
                  className="hover:text-foreground transition-colors"
                >
                  Financial Glossary
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/about"
                  className="hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="hover:text-foreground transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-foreground transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/refunds"
                  className="hover:text-foreground transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} StockAI Research. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="https://twitter.com" target="_blank" rel="noreferrer">
              <Icons.twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Icons.linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noreferrer">
              <Icons.youtube className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
