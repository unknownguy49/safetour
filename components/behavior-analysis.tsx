"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { User, Activity, Eye, Zap } from "lucide-react";

export function BehaviorAnalysis() {
  const behaviorPatterns = [
    { pattern: "Normal Tourist Behavior", percentage: 78, color: "#10b981" },
    { pattern: "Rushed/Anxious", percentage: 12, color: "#f59e0b" },
    { pattern: "Lost/Confused", percentage: 6, color: "#ef4444" },
    { pattern: "Fatigue/Exhaustion", percentage: 4, color: "#8b5cf6" },
  ];

  const activityData = [
    { activity: "Sightseeing", count: 1456, avgDuration: "2.5h" },
    { activity: "Beach Activities", count: 892, avgDuration: "3.2h" },
    { activity: "Cultural Tours", count: 634, avgDuration: "1.8h" },
    { activity: "Adventure Sports", count: 423, avgDuration: "1.5h" },
    { activity: "Shopping", count: 567, avgDuration: "1.2h" },
    { activity: "Dining", count: 789, avgDuration: "1.1h" },
  ];

  const riskIndicators = [
    {
      indicator: "Prolonged Inactivity",
      description: "Tourist stationary for >30 minutes in non-rest area",
      currentCases: 3,
      riskLevel: "high",
      aiConfidence: 94,
    },
    {
      indicator: "Erratic Movement",
      description: "Unusual movement patterns suggesting disorientation",
      currentCases: 7,
      riskLevel: "medium",
      aiConfidence: 87,
    },
    {
      indicator: "Social Isolation",
      description: "Tourist separated from group for extended period",
      currentCases: 2,
      riskLevel: "medium",
      aiConfidence: 91,
    },
    {
      indicator: "Stress Indicators",
      description: "Behavioral patterns suggesting high stress or panic",
      currentCases: 1,
      riskLevel: "high",
      aiConfidence: 89,
    },
  ];

  const behaviorInsights = [
    {
      title: "Peak Activity Hours",
      insight:
        "Tourist activity peaks between 10 AM - 4 PM with highest risk incidents occurring during 2-4 PM",
      confidence: 96,
      actionable: true,
    },
    {
      title: "Group vs Solo Behavior",
      insight:
        "Solo travelers show 3x higher risk indicators compared to group travelers",
      confidence: 92,
      actionable: true,
    },
    {
      title: "Weather Impact",
      insight:
        "Behavioral stress indicators increase by 40% during high temperature periods (>35°C)",
      confidence: 88,
      actionable: true,
    },
    {
      title: "Cultural Adaptation",
      insight:
        "First-time visitors show higher confusion patterns in first 48 hours",
      confidence: 85,
      actionable: false,
    },
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Behavior Analysis Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <User className="h-6 w-6 text-accent" />
              <div>
                <div className="text-xl font-bold">2,156</div>
                <div className="text-sm text-muted-foreground">
                  Tourists Analyzed
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Activity className="h-6 w-6 text-blue-500" />
              <div>
                <div className="text-xl font-bold">13</div>
                <div className="text-sm text-muted-foreground">
                  Risk Indicators
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Eye className="h-6 w-6 text-green-500" />
              <div>
                <div className="text-xl font-bold">89%</div>
                <div className="text-sm text-muted-foreground">
                  Pattern Accuracy
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-purple-500" />
              <div>
                <div className="text-xl font-bold">1.8s</div>
                <div className="text-sm text-muted-foreground">
                  Analysis Speed
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Behavior Pattern Distribution */}
        <Card className="glass-strong">
          <CardHeader>
            <CardTitle>Behavior Pattern Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center mb-4">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={behaviorPatterns}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="percentage"
                  >
                    {behaviorPatterns.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {behaviorPatterns.map((pattern, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: pattern.color }}
                    />
                    <span className="text-sm">{pattern.pattern}</span>
                  </div>
                  <span className="text-sm font-medium">
                    {pattern.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Analysis */}
        <Card className="glass-strong">
          <CardHeader>
            <CardTitle>Tourist Activity Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={activityData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis type="number" tick={{ fill: "#222", fontSize: 14 }} />
                <YAxis
                  dataKey="activity"
                  type="category"
                  width={120}
                  tick={{ fill: "#222", fontSize: 14 }}
                />
                <Tooltip
                  cursor={{ fill: "#e0e7ef", opacity: 0.3 }}
                  contentStyle={{
                    background: "#fff",
                    borderRadius: 8,
                    border: "1px solid #ddd",
                  }}
                />
                <Bar
                  dataKey="count"
                  fill="#2563eb"
                  stroke="#1e40af"
                  strokeWidth={2}
                  radius={[0, 4, 4, 0]}
                  label={{
                    position: "right",
                    fill: "#2563eb",
                    fontWeight: 600,
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Risk Indicators */}
      <Card className="glass-strong">
        <CardHeader>
          <CardTitle>Behavioral Risk Indicators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskIndicators.map((indicator, index) => (
              <div key={index} className="p-4 rounded-lg glass-subtle">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium">{indicator.indicator}</h4>
                    <p className="text-sm text-muted-foreground text-pretty mt-1">
                      {indicator.description}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className={getRiskColor(indicator.riskLevel)}
                  >
                    {indicator.riskLevel} risk
                  </Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Current Cases
                    </div>
                    <div className="text-lg font-bold">
                      {indicator.currentCases}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      AI Confidence
                    </div>
                    <div className="text-lg font-bold text-accent">
                      {indicator.aiConfidence}%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      Detection Rate
                    </div>
                    <Progress
                      value={indicator.aiConfidence}
                      className="h-2 mt-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card className="glass-strong">
        <CardHeader>
          <CardTitle>Behavioral Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {behaviorInsights.map((insight, index) => (
              <div
                key={index}
                className="p-4 rounded-lg glass-subtle border-l-4 border-l-accent"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium">{insight.title}</h4>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="!bg-blue-600 !text-white !font-semibold !shadow-md px-4 py-2"
                    >
                      {insight.confidence}% confidence
                    </Badge>
                    {insight.actionable && (
                      <Badge
                        variant="outline"
                        className="!bg-green-500 !text-white !font-semibold !shadow-md px-4 py-2"
                      >
                        Actionable
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-pretty">
                  {insight.insight}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
