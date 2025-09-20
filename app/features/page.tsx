import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Smartphone,
  Brain,
  Users,
  Wifi,
  Globe,
  Lock,
  Zap,
  Eye,
  MapPin,
  AlertTriangle,
  BarChart3,
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: Shield,
      title: "Digital Tourist ID",
      description:
        "Blockchain-secured digital identification with QR codes for instant verification",
      category: "Security",
    },
    {
      icon: Smartphone,
      title: "Mobile Application",
      description:
        "User-friendly mobile app with panic button, location sharing, and emergency contacts",
      category: "Mobile",
    },
    {
      icon: Brain,
      title: "AI Anomaly Detection",
      description:
        "Advanced machine learning algorithms to detect unusual patterns and potential threats",
      category: "AI",
    },
    {
      icon: Users,
      title: "Department Dashboard",
      description:
        "Comprehensive monitoring interface for tourism departments and law enforcement",
      category: "Management",
    },
    {
      icon: Wifi,
      title: "IoT Integration",
      description:
        "Smart sensors and devices for real-time environmental and safety monitoring",
      category: "IoT",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description:
        "Support for multiple languages to assist international tourists",
      category: "Accessibility",
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description:
        "End-to-end encryption and GDPR compliance for maximum data protection",
      category: "Security",
    },
    {
      icon: Zap,
      title: "Real-time Alerts",
      description:
        "Instant notifications for emergencies, weather alerts, and safety updates",
      category: "Communication",
    },
    {
      icon: Eye,
      title: "Behavioral Analysis",
      description:
        "AI-powered analysis of tourist movement patterns for predictive safety",
      category: "AI",
    },
    {
      icon: MapPin,
      title: "Geo-fencing",
      description:
        "Virtual boundaries with automatic alerts for restricted or dangerous areas",
      category: "Location",
    },
    {
      icon: AlertTriangle,
      title: "Incident Management",
      description:
        "Comprehensive incident reporting, tracking, and response coordination",
      category: "Management",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Advanced analytics and reporting for tourism safety insights",
      category: "Analytics",
    },
  ];

  const categories = [
    "All",
    "Security",
    "AI",
    "Management",
    "Mobile",
    "IoT",
    "Accessibility",
    "Communication",
    "Location",
    "Analytics",
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      {/* Add space below fixed navbar */}
      <div className="h-20" />

      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-lg font-semibold mb-4 gradient-text">
            Comprehensive Features
          </h1>
          {/* Add space after heading */}
          <div className="mb-4" />
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful features that make our Smart Tourist Safety
            Monitoring System the most advanced solution for tourist protection
            and management.
          </p>
        </div>

        {/* Features Grid */}
        <Tabs defaultValue="All" className="w-full">
          <TabsList
            className="glass mb-10 px-4 py-4 !text-[#18181b] w-full flex flex-wrap justify-center gap-3 rounded-2xl shadow-lg border border-border/40"
            style={{ minHeight: "64px", fontSize: "1.15rem", fontWeight: 500 }}
          >
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="glass-hover !text-[#18181b] px-6 py-2 rounded-xl text-base shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-accent/60"
                style={{ minWidth: "90px" }}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features
                  .filter(
                    (feature) =>
                      category === "All" || feature.category === category
                  )
                  .map((feature, index) => (
                    <Card
                      key={index}
                      className="glass glass-hover animate-float !text-[#18181b]"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="p-2 rounded-lg bg-accent/20 animate-glow">
                            <feature.icon className="h-6 w-6 text-accent" />
                          </div>
                          <Badge
                            variant="secondary"
                            className="glass-subtle !text-[#18181b]"
                          >
                            {feature.category}
                          </Badge>
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="glass-strong max-w-2xl mx-auto !text-[#18181b]">
            <CardContent className="px-6 py-8">
              <h2 className="text-lg font-semibold mb-2 gradient-text">
                Ready to Get Started?
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Experience the future of tourist safety with our comprehensive
                monitoring system.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button size="lg" className="glass-interactive !text-[#18181b]">
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-interactive bg-transparent !text-[#18181b]"
                >
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
