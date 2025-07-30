// components/auth/signin-form.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// import { Icons } from "@/components/icons";
import Link from "next/link";
import { Github } from "lucide-react";
import { Icons } from "../ui/icons";

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Welcome Back
        </CardTitle>
        <CardDescription className="text-center">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <form onSubmit={onSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="grid gap-2 mt-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="text-sm font-medium hover:underline transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <Button className="w-full mt-6" type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                {/* <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> */}
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            disabled={isLoading}
            className="transition-all hover:shadow-md"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button
            variant="outline"
            disabled={isLoading}
            className="transition-all hover:shadow-md"
          >
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-primary hover:underline font-medium transition-colors"
          >
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignInForm;
