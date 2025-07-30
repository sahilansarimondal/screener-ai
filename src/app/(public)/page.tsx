import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Icons } from "@/components/ui/icons";
import { MainNav } from "@/components/layout/main-nav";
import { SiteFooter } from "@/components/layout/footer";
import { FeaturesSection } from "@/components/landing/sections/features";
import { PricingSection } from "@/components/landing/sections/pricing";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <MainNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container grid lg:grid-cols-2 gap-8 pt-12 pb-16 md:py-16">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              AI-Powered Stock Research for{" "}
              <span className="text-primary">Indian Markets</span>
            </h1>
            <p className="max-w-[42rem] text-lg text-muted-foreground">
              Unlock smarter investing with our AI-driven analysis platform. Get
              institutional-grade research tools for NSE and BSE stocks.
            </p>
            <div className="flex space-x-4">
              <Button asChild size="lg">
                <Link href="/auth/register">Start Free Trial</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="#features">Explore Features</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4 text-green-500" />
                Trusted by 50,000+ investors
              </div>
              <div className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4 text-green-500" />
                Coverage of 5,000+ stocks
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-end">
            <div className="relative w-full aspect-square max-w-[500px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <Icons.lineChart className="h-64 w-64 text-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* CTA Section */}
        <section className="bg-primary/5 py-16 md:py-24">
          <div className="container flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to transform your investing?
            </h2>
            <p className="max-w-[42rem] text-lg text-muted-foreground mb-8">
              Join thousands of investors using our AI platform to make better
              decisions in Indian markets.
            </p>
            <Button asChild size="lg" className="px-8">
              <Link href="/auth/register">Start Your Free Trial</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
