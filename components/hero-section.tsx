"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  MapPin,
  Smartphone,
  Brain,
  Users,
  ChevronRight,
  Play,
} from "lucide-react";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: Shield,
      title: "Blockchain Digital IDs",
      description: "Secure, tamper-proof tourist identification system",
    },
    {
      icon: MapPin,
      title: "Geo-fencing Alerts",
      description: "Real-time notifications for restricted or high-risk areas",
    },
    {
      icon: Brain,
      title: "AI Anomaly Detection",
      description: "Smart monitoring for unusual patterns and behaviors",
    },
    {
      icon: Users,
      title: "Multi-stakeholder Dashboard",
      description:
        "Unified platform for tourists, police, and tourism departments",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Tourists Protected" },
    { value: "50+", label: "Tourist Destinations" },
    { value: "99.9%", label: "System Uptime" },
    { value: "24/7", label: "Emergency Response" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const CurrentIcon = features[currentSlide].icon;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-accent/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-4 glass !text-[#18181b]">
              <Smartphone className="h-4 w-4 mr-2" />
              AI-Powered Safety Platform
            </Badge>

            <h1 className="text-4xl font-semibold leading-tight mb-4">
              Smart Tourist
              <span className="block text-accent font-semibold">
                Safety Monitoring
              </span>
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Revolutionary AI-powered system combining blockchain digital IDs,
              geo-fencing alerts, and real-time incident response to ensure
              tourist safety across India's diverse destinations.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 mb-10 justify-center lg:justify-start">
              <Button size="lg" className="px-6">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-6 glass !text-[#18181b]"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-xl font-semibold text-accent mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Feature showcase */}
          <div className="relative">
            <Card className="glass p-6 relative overflow-hidden !text-[#18181b]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <CurrentIcon className="h-7 w-7 text-accent" />
                  <h3 className="text-base font-semibold">
                    {features[currentSlide].title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {features[currentSlide].description}
                </p>

                {/* Feature indicators */}
                <div className="flex gap-1">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentSlide
                          ? "bg-accent"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Show feature ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </Card>

            {/* Floating feature cards */}
            <div className="absolute -top-3 -right-3 glass rounded-lg p-3 hidden lg:block !text-[#18181b] !bg-white/90">
              <Shield className="h-5 w-5 text-accent mb-1" />
              <div className="text-xs font-medium">Secure</div>
            </div>

            <div className="absolute -bottom-3 -left-3 glass rounded-lg p-3 hidden lg:block !text-[#18181b] !bg-white/90">
              <Brain className="h-5 w-5 text-accent mb-1" />
              <div className="text-xs font-medium">AI-Powered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
