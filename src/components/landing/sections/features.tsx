import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import React from "react";

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Powerful Tools for Smarter Investing
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Our AI-powered platform gives you the edge in Indian markets
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="rounded-lg bg-primary/10 p-3 w-fit">
              <Icons.aiAnalysis className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>AI Stock Analysis</CardTitle>
            <CardDescription>
              Get instant AI-powered insights on any Indian stock
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4 text-green-500" />
                Valuation scoring
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4 text-green-500" />
                Sentiment analysis
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4 text-green-500" />
                Growth projections
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="rounded-lg bg-blue-100 p-3 w-fit dark:bg-blue-900/30">
              <Icons.screener className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle>Advanced Screener</CardTitle>
            <CardDescription>
              Filter stocks using 100+ fundamental and technical parameters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4 text-green-500" />
                Pre-built strategies
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4 text-green-500" />
                Custom filters
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4 text-green-500" />
                Real-time alerts
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="rounded-lg bg-purple-100 p-3 w-fit dark:bg-purple-900/30">
              <Icons.portfolio className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <CardTitle>Portfolio Intelligence</CardTitle>
            <CardDescription>
              AI-driven analysis of your holdings and recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4 text-green-500" />
                Risk assessment
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4 text-green-500" />
                Diversification analysis
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4 text-green-500" />
                Rebalancing suggestions
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
