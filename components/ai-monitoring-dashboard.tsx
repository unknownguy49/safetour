"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  Activity,
  AlertTriangle,
  TrendingUp,
  Eye,
  Zap,
  Target,
  MapPin,
  BarChart3,
} from "lucide-react";
import { AnomalyDetection } from "@/components/anomaly-detection";
import { PredictiveAnalytics } from "@/components/predictive-analytics";
import { BehaviorAnalysis } from "@/components/behavior-analysis";
import { AIInsights } from "@/components/ai-insights";

export function AIMonitoringDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [aiStatus, setAiStatus] = useState("active");

  const aiMetrics = {
    modelsActive: 8,
    predictionsToday: 1247,
    anomaliesDetected: 23,
    accuracyRate: 94.7,
    processingSpeed: "2.3ms",
    dataProcessed: "847GB",
  };

  const realtimeAlerts = [
    {
      id: "AI-001",
      type: "anomaly",
      severity: "high",
      message: "Unusual movement pattern detected for tourist TID-001234",
      location: "Calangute Beach",
      confidence: 87,
      time: "2 min ago",
    },
    {
      id: "AI-002",
      type: "prediction",
      severity: "medium",
      message: "Potential crowd congestion predicted at Baga Beach",
      location: "Baga Beach",
      confidence: 92,
      time: "5 min ago",
    },
    {
      id: "AI-003",
      type: "behavior",
      severity: "low",
      message: "Tourist group showing signs of fatigue - recommend rest area",
      location: "Old Goa",
      confidence: 78,
      time: "8 min ago",
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "anomaly":
        return <AlertTriangle className="h-4 w-4" />;
      case "prediction":
        return <TrendingUp className="h-4 w-4" />;
      case "behavior":
        return <Eye className="h-4 w-4" />;
      default:
        return <Brain className="h-4 w-4" />;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-balance">
            AI Monitoring Center
          </h1>
          <p className="text-muted-foreground">
            Advanced AI-powered tourist safety monitoring and analytics
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge
            variant="secondary"
            className="glass-subtle !bg-green-500/90 !text-white !font-semibold !shadow-md flex items-center px-4 py-2"
          >
            <div className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse" />
            AI Systems Online
          </Badge>
          <Button
            variant="outline"
            size="sm"
            className="glass-subtle bg-transparent"
          >
            <Brain className="h-4 w-4 mr-2" />
            Model Settings
          </Button>
        </div>
      </div>

      {/* AI Metrics Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Brain className="h-8 w-8 text-accent" />
              <div>
                <div className="text-2xl font-bold">
                  {aiMetrics.modelsActive}
                </div>
                <div className="text-sm text-muted-foreground">AI Models</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Activity className="h-8 w-8 text-blue-500" />
              <div>
                <div className="text-2xl font-bold">
                  {aiMetrics.predictionsToday.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">
                  Predictions Today
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-orange-500" />
              <div>
                <div className="text-2xl font-bold">
                  {aiMetrics.anomaliesDetected}
                </div>
                <div className="text-sm text-muted-foreground">Anomalies</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Target className="h-8 w-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold">
                  {aiMetrics.accuracyRate}%
                </div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Zap className="h-8 w-8 text-yellow-500" />
              <div>
                <div className="text-2xl font-bold">
                  {aiMetrics.processingSpeed}
                </div>
                <div className="text-sm text-muted-foreground">Avg Speed</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-8 w-8 text-purple-500" />
              <div>
                <div className="text-2xl font-bold">
                  {aiMetrics.dataProcessed}
                </div>
                <div className="text-sm text-muted-foreground">
                  Data Processed
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main AI Dashboard Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 glass-subtle">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="anomalies">Anomaly Detection</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
          <TabsTrigger value="behavior">Behavior Analysis</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Real-time AI Alerts */}
            <div className="lg:col-span-2">
              <Card className="glass-strong">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-accent" />
                    Real-time AI Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {realtimeAlerts.map((alert) => (
                      <div
                        key={alert.id}
                        className="p-4 rounded-lg glass-subtle border-l-4 border-l-accent"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {getTypeIcon(alert.type)}
                            <Badge
                              variant="outline"
                              className={getSeverityColor(alert.severity)}
                            >
                              {alert.severity}
                            </Badge>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {alert.time}
                          </div>
                        </div>
                        <p className="text-sm text-pretty mb-2">
                          {alert.message}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {alert.location}
                          </div>
                          <div>Confidence: {alert.confidence}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Model Status */}
            <div className="space-y-6">
              <Card className="glass-strong">
                <CardHeader>
                  <CardTitle>AI Model Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Anomaly Detection</span>
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800"
                        >
                          Active
                        </Badge>
                      </div>
                      <Progress value={94} className="h-2" />
                      <div className="text-xs text-muted-foreground mt-1">
                        Accuracy: 94%
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Behavior Analysis</span>
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800"
                        >
                          Active
                        </Badge>
                      </div>
                      <Progress value={89} className="h-2" />
                      <div className="text-xs text-muted-foreground mt-1">
                        Accuracy: 89%
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Predictive Analytics</span>
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800"
                        >
                          Active
                        </Badge>
                      </div>
                      <Progress value={92} className="h-2" />
                      <div className="text-xs text-muted-foreground mt-1">
                        Accuracy: 92%
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Risk Assessment</span>
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800"
                        >
                          Active
                        </Badge>
                      </div>
                      <Progress value={96} className="h-2" />
                      <div className="text-xs text-muted-foreground mt-1">
                        Accuracy: 96%
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-strong">
                <CardHeader>
                  <CardTitle>Processing Queue</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Location Data</span>
                    <Badge variant="outline">Processing</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Behavior Patterns</span>
                    <Badge variant="outline">Queued</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Risk Calculations</span>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      Complete
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Anomaly Scan</span>
                    <Badge variant="outline">Processing</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="anomalies">
          <AnomalyDetection />
        </TabsContent>

        <TabsContent value="predictions">
          <PredictiveAnalytics />
        </TabsContent>

        <TabsContent value="behavior">
          <BehaviorAnalysis />
        </TabsContent>

        <TabsContent value="insights">
          <AIInsights />
        </TabsContent>
      </Tabs>
    </div>
  );
}
