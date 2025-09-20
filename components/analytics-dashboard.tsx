"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Users,
  AlertTriangle,
  Shield,
  Clock,
} from "lucide-react";

export function AnalyticsDashboard() {
  const safetyTrendData = [
    { month: "Jul", score: 82 },
    { month: "Aug", score: 85 },
    { month: "Sep", score: 83 },
    { month: "Oct", score: 87 },
    { month: "Nov", score: 89 },
    { month: "Dec", score: 87 },
  ];

  const incidentTypeData = [
    { name: "Geo-fence Violations", value: 45, color: "#f59e0b" },
    { name: "Panic Button", value: 12, color: "#ef4444" },
    { name: "Missing Person", value: 8, color: "#f97316" },
    { name: "Medical Emergency", value: 5, color: "#8b5cf6" },
  ];

  const touristFlowData = [
    { time: "06:00", tourists: 120 },
    { time: "09:00", tourists: 450 },
    { time: "12:00", tourists: 890 },
    { time: "15:00", tourists: 1200 },
    { time: "18:00", tourists: 980 },
    { time: "21:00", tourists: 650 },
  ];

  const kpiData = [
    {
      title: "Average Safety Score",
      value: "87",
      change: "+2.3%",
      trend: "up",
      icon: Shield,
      color: "text-green-600",
    },
    {
      title: "Response Time",
      value: "4.2 min",
      change: "-0.8 min",
      trend: "down",
      icon: Clock,
      color: "text-blue-600",
    },
    {
      title: "Active Tourists",
      value: "2,156",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "text-accent",
    },
    {
      title: "Incident Rate",
      value: "0.8%",
      change: "-0.2%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => (
          <Card key={index} className="glass-strong">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{kpi.title}</p>
                  <p className="text-2xl font-bold">{kpi.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {kpi.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-green-600" />
                    )}
                    <span className="text-sm text-green-600">{kpi.change}</span>
                  </div>
                </div>
                <kpi.icon className={`h-8 w-8 ${kpi.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Safety Score Trend */}
        <Card className="glass-strong">
          <CardHeader>
            <CardTitle>Safety Score Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={safetyTrendData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis domain={[75, 95]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#2563eb"
                  strokeWidth={4}
                  dot={{
                    r: 6,
                    fill: "#2563eb",
                    stroke: "#fff",
                    strokeWidth: 2,
                  }}
                  activeDot={{
                    r: 8,
                    fill: "#2563eb",
                    stroke: "#fff",
                    strokeWidth: 3,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Incident Types */}
        <Card className="glass-strong">
          <CardHeader>
            <CardTitle>Incident Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={incidentTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {incidentTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {incidentTypeData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tourist Flow */}
      <Card className="glass-strong">
        <CardHeader>
          <CardTitle>Daily Tourist Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={touristFlowData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="tourists"
                fill="hsl(var(--accent))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="glass-strong">
          <CardHeader>
            <CardTitle>System Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>AI Detection Accuracy</span>
                <span>94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Response Time Target</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Tourist Satisfaction</span>
                <span>92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>System Uptime</span>
                <span>99.8%</span>
              </div>
              <Progress value={99.8} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-strong">
          <CardHeader>
            <CardTitle>Regional Statistics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { region: "North Goa", tourists: 1456, incidents: 2, safety: 89 },
              { region: "South Goa", tourists: 700, incidents: 1, safety: 91 },
              {
                region: "Central Goa",
                tourists: 890,
                incidents: 0,
                safety: 94,
              },
            ].map((region, index) => (
              <div key={index} className="p-3 rounded-lg glass-subtle">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{region.region}</span>
                  <Badge
                    variant="secondary"
                    className="glass-subtle !bg-blue-600 !text-white !font-semibold !shadow-md"
                  >
                    Safety: {region.safety}%
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {region.tourists} tourists • {region.incidents} incidents
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
