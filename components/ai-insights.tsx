"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Brain, TrendingUp, TrendingDown, Lightbulb, Target } from "lucide-react"

export function AIInsights() {
  const keyInsights = [
    {
      id: "INS-001",
      category: "Safety Optimization",
      title: "Optimal Patrol Route Identified",
      description:
        "AI analysis suggests repositioning patrol units to cover 23% more high-risk areas with same resources",
      impact: "high",
      confidence: 94,
      timeframe: "Immediate",
      status: "new",
      metrics: {
        coverageIncrease: "23%",
        responseTimeReduction: "1.2 min",
        resourceEfficiency: "+18%",
      },
    },
    {
      id: "INS-002",
      category: "Predictive Prevention",
      title: "Incident Prevention Opportunity",
      description:
        "Pattern analysis indicates 67% of incidents can be prevented with proactive tourist guidance at key decision points",
      impact: "high",
      confidence: 89,
      timeframe: "Next 7 days",
      status: "actionable",
      metrics: {
        preventionRate: "67%",
        costSaving: "₹2.3L/month",
        touristSatisfaction: "+15%",
      },
    },
    {
      id: "INS-003",
      category: "Resource Allocation",
      title: "Staff Optimization Recommendation",
      description: "AI recommends shifting 30% of morning staff to afternoon shifts based on incident timing patterns",
      impact: "medium",
      confidence: 91,
      timeframe: "Next month",
      status: "under_review",
      metrics: {
        efficiencyGain: "30%",
        incidentReduction: "12%",
        costNeutral: "Yes",
      },
    },
    {
      id: "INS-004",
      category: "Technology Enhancement",
      title: "Geo-fence Boundary Optimization",
      description: "Machine learning suggests adjusting 5 geo-fence boundaries to reduce false positives by 40%",
      impact: "medium",
      confidence: 87,
      timeframe: "This week",
      status: "implemented",
      metrics: {
        falsePositiveReduction: "40%",
        alertAccuracy: "+25%",
        systemEfficiency: "+22%",
      },
    },
  ]

  const performanceMetrics = [
    {
      metric: "Overall System Efficiency",
      current: 87,
      target: 95,
      trend: "up",
      improvement: "+5% this month",
    },
    {
      metric: "Incident Prevention Rate",
      current: 73,
      target: 85,
      trend: "up",
      improvement: "+8% this month",
    },
    {
      metric: "Response Time Optimization",
      current: 91,
      target: 95,
      trend: "up",
      improvement: "+3% this month",
    },
    {
      metric: "Resource Utilization",
      current: 82,
      target: 90,
      trend: "stable",
      improvement: "Stable",
    },
  ]

  const aiRecommendations = [
    {
      priority: "high",
      title: "Deploy Additional Sensors",
      description: "Install 3 additional IoT sensors at Dudhsagar Falls for better coverage",
      estimatedImpact: "25% better detection",
      implementationTime: "2 weeks",
      cost: "Low",
    },
    {
      priority: "high",
      title: "Update Alert Thresholds",
      description: "Adjust panic button sensitivity based on false positive analysis",
      estimatedImpact: "40% fewer false alarms",
      implementationTime: "1 day",
      cost: "None",
    },
    {
      priority: "medium",
      title: "Enhance Tourist Education",
      description: "Create AI-powered personalized safety briefings for high-risk tourists",
      estimatedImpact: "30% better compliance",
      implementationTime: "1 month",
      cost: "Medium",
    },
    {
      priority: "low",
      title: "Expand Language Support",
      description: "Add 3 more regional languages to the AI communication system",
      estimatedImpact: "Better tourist engagement",
      implementationTime: "3 weeks",
      cost: "Low",
    },
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800"
      case "actionable":
        return "bg-green-100 text-green-800"
      case "under_review":
        return "bg-yellow-100 text-yellow-800"
      case "implemented":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* AI Insights Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-accent" />
              <div>
                <div className="text-xl font-bold">47</div>
                <div className="text-sm text-muted-foreground">Active Insights</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
              <div>
                <div className="text-xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Recommendations</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-green-500" />
              <div>
                <div className="text-xl font-bold">8</div>
                <div className="text-sm text-muted-foreground">Implemented</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-blue-500" />
              <div>
                <div className="text-xl font-bold">23%</div>
                <div className="text-sm text-muted-foreground">Efficiency Gain</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Insights */}
      <Card className="glass-strong">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-accent" />
            Key AI Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {keyInsights.map((insight) => (
              <div key={insight.id} className="p-4 rounded-lg glass-subtle border-l-4 border-l-accent">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{insight.title}</h4>
                      <Badge variant="outline" className={getImpactColor(insight.impact)}>
                        {insight.impact} impact
                      </Badge>
                      <Badge variant="secondary" className={getStatusColor(insight.status)}>
                        {insight.status.replace("_", " ")}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">{insight.category}</div>
                    <p className="text-sm text-muted-foreground text-pretty">{insight.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">Confidence</div>
                    <div className="text-2xl font-bold text-accent">{insight.confidence}%</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  {Object.entries(insight.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-2 rounded glass-subtle">
                      <div className="text-xs text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                      <div className="text-lg font-bold text-accent">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 mt-4">
                  <Button size="sm">View Details</Button>
                  <Button size="sm" variant="outline" className="glass-subtle bg-transparent">
                    Implement
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Performance Metrics */}
        <Card className="glass-strong">
          <CardHeader>
            <CardTitle>AI Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{metric.metric}</span>
                  <div className="flex items-center gap-2">
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : metric.trend === "down" ? (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-gray-400" />
                    )}
                    <span className="text-sm text-muted-foreground">{metric.improvement}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={metric.current} className="flex-1 h-2" />
                  <span className="text-sm font-medium">{metric.current}%</span>
                </div>
                <div className="text-xs text-muted-foreground">Target: {metric.target}%</div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card className="glass-strong">
          <CardHeader>
            <CardTitle>AI Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {aiRecommendations.map((rec, index) => (
              <div key={index} className="p-3 rounded-lg glass-subtle">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-sm">{rec.title}</h4>
                  <Badge variant="outline" className={getPriorityColor(rec.priority)}>
                    {rec.priority}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground text-pretty mb-3">{rec.description}</p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <div className="text-muted-foreground">Impact</div>
                    <div className="font-medium">{rec.estimatedImpact}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Time</div>
                    <div className="font-medium">{rec.implementationTime}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Cost</div>
                    <div className="font-medium">{rec.cost}</div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
