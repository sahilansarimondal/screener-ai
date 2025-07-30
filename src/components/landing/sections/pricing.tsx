import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export function PricingSection() {
  const plans: PricingPlan[] = [
    {
      name: "Free",
      price: "₹0",
      description: "Get started with basic features",
      features: [
        "10 AI stock analyses per month",
        "Basic stock screener",
        "Limited historical data (1 year)",
        "Email support",
        "Community access",
      ],
      cta: "Get Started",
    },
    {
      name: "Investor",
      price: "₹999",
      description: "For serious individual investors",
      features: [
        "100 AI stock analyses per month",
        "Advanced stock screener",
        "5 years historical data",
        "Priority email support",
        "Technical indicators",
        "Portfolio tracking (up to 10 stocks)",
      ],
      cta: "Start 7-day Trial",
      popular: true,
    },
    {
      name: "Professional",
      price: "₹2,499",
      description: "For active traders and professionals",
      features: [
        "Unlimited AI stock analyses",
        "Premium stock screener with custom filters",
        "10+ years historical data",
        "24/7 priority support",
        "Advanced technical indicators",
        "Portfolio tracking (unlimited stocks)",
        "API access",
        "Exclusive webinars",
      ],
      cta: "Start 7-day Trial",
    },
  ];

  return (
    <section id="pricing" className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the plan that fits your investment needs
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative rounded-2xl border bg-card p-8 shadow-sm",
              plan.popular ? "border-primary" : "border-border"
            )}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              </div>
            )}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="mt-2 text-muted-foreground">{plan.description}</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight">
                {plan.price}
              </span>
              <span className="text-sm font-semibold leading-6 text-muted-foreground">
                {plan.name !== "Free" ? "/month" : "forever"}
              </span>
            </p>
            <Button
              variant={plan.popular ? "default" : "outline"}
              className={cn(
                "mt-6 w-full",
                `${plan.popular && "bg-primary hover:bg-primary/90"}`
              )}
              asChild
            >
              <Link href="/auth/register">{plan.cta}</Link>
            </Button>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Icons.check className="mr-2 h-4 w-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
