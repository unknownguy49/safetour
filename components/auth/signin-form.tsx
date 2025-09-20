"use client";

import type React from "react";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"tourist" | "department" | "admin">(
    "tourist"
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setIsLoading(false);
      const redirectPath =
        userType === "tourist"
          ? "/tourist"
          : userType === "department"
          ? "/dashboard"
          : "/monitoring";
      window.location.href = redirectPath;
    } catch (error: any) {
      setIsLoading(false);
      alert(error.message || "Login failed");
    }
  };

  const userTypes = [
    {
      type: "tourist" as const,
      label: "Tourist",
      description: "Access your digital ID and safety features",
      icon: Shield,
    },
    {
      type: "department" as const,
      label: "Department",
      description: "Police & Tourism department dashboard",
      icon: Shield,
    },
    {
      type: "admin" as const,
      label: "Admin",
      description: "AI monitoring and system administration",
      icon: Shield,
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <Card className="glass-strong">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-accent" />
          </div>
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Sign in to your SafeTour account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* User Type Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Account Type</Label>
            <div className="grid grid-cols-1 gap-2">
              {userTypes.map((type) => (
                <button
                  key={type.type}
                  type="button"
                  onClick={() => setUserType(type.type)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    userType === type.type
                      ? "border-accent bg-accent/10 text-accent-foreground"
                      : "border-border glass-subtle hover:border-accent/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <type.icon className="h-5 w-5" />
                    <div>
                      <div className="font-medium text-sm">{type.label}</div>
                      <div className="text-xs text-muted-foreground">
                        {type.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="pl-10 glass-subtle bg-transparent"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="pl-10 pr-10 glass-subtle bg-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, rememberMe: checked as boolean })
                  }
                />
                <Label htmlFor="remember" className="text-sm">
                  Remember me
                </Label>
              </div>
              <Link
                href="/auth/forgot-password"
                className="text-sm text-accent hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="p-3 rounded-lg glass-subtle border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
              <div className="text-sm">
                <div className="font-medium text-blue-800 dark:text-blue-200 mb-1">
                  Demo Credentials
                </div>
                <div className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                  <div>Tourist: tourist@demo.com / demo123</div>
                  <div>Department: dept@demo.com / demo123</div>
                  <div>Admin: admin@demo.com / demo123</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            <span className="text-muted-foreground">
              Don't have an account?{" "}
            </span>
            <Link
              href="/auth/signup"
              className="text-accent hover:underline font-medium"
            >
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
