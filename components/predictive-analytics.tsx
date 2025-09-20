"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import { TrendingUp, AlertTriangle, MapPin, Clock, Brain } from "lucide-react"

export function PredictiveAnalytics() {
  const crowdPredictionData = [
    { time: "09:00", predicted: 120, actual: 115 },
    { time: "12:00", predicted: 450, actual: 440 },
    { time: "15:00", predicted: 890, actual: 920 },
    { time: "18:00", predicted: 1200, actual: 1180 },
    { time: "21:00", predicted: 650, actual: 680 },
  ]

  const riskPredictionData = [
    { location: "Calangute Beach", risk: 15, trend: "stable" },
    { location: "Dudhsagar Falls", risk: 75, trend: "increasing" },
    { location: "Old Goa", risk: 25, trend: "decreasing" },
    { location: "Anjuna Beach", risk: 45, trend: "stable" },
    { location: "Spice Plantation", risk: 35, trend: "decreasing" },
  ]

  const incidentPredictionData = [
    { day: "Mon", predicted: 2, actual: 3 },
    { day: "Tue", predicted: 4, actual: 2 },
    { day: "Wed", predicted: 3, actual: 4 },
    { day: "Thu", predicted: 5, actual: 5 },
    { day: "Fri", predicted: 7, actual: 6 },
    { day: "Sat", predicted: 9, actual: 8 },
    { day: "Sun", predicted: 6, actual: 7 },
  ]

  const predictions = [
    {
      id: "PRED-001",
      type: "crowd",
      title: "High Crowd Density Expected",
      description: "Baga Beach expected to reach 85% capacity by 3 PM today",
      probability: 92,
      timeframe: "Next 4 hours",
      impact: "high",
      recommendation: "Deploy additional safety personnel",
    },
    {
      id: "PRED-002",
      type: "weather",
      title: "Weather-Related Risk Increase",
      description: "Heavy rain predicted may increase slip hazards at waterfalls",
      probability: 78,
      timeframe: "Tomorrow 2-6 PM",
      impact: "medium",
      recommendation: "Issue weather advisory to tourists",
    },
    {
      id: "PRED-003",
      type: "behavior",
      title: "Tourist Fatigue Pattern",
      description: "Group of 15 tourists showing early signs of heat exhaustion",
      probability: 85,
      timeframe: "Next 2 hours",
      impact: "medium",
      recommendation: "Suggest rest stops and hydration",
    },
  ]

  const getRiskColor = (risk: number) => {
    if (risk >= 70) return "text-red-600"
    if (risk >= 40) return "text-yellow-600"
    return "text-green-600"
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "increasing":
        return <TrendingUp className="h-4 w-4 text-red-500" />
      case "decreasing":
        return <TrendingUp className="h-4 w-4 text-green-500 rotate-180" />
      default:
        return <div className="w-4 h-4 rounded-full bg-gray-400" />
    }
  }

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

  return (
    <div className="space-y-6">
      {/* Prediction Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-accent" />
              <div>
                <div className="text-xl font-bold">1,247</div>
                <div className="text-sm text-muted-foreground">Predictions Today</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-green-500" />
              <div>
                <div className="text-xl font-bold">92%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-orange-500" />
              <div>
                <div className="text-xl font-bold">8</div>
                <div className="text-sm text-muted-foreground">High Risk Alerts</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-blue-500" />
              <div>
                <div className="text-xl font-bold">4h</div>
                <div className="text-sm text-muted-foreground">Avg Forecast</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Crowd Prediction Chart */}
        <Card className="glass-strong">
          <CardHeader>
            <CardTitle>Crowd Density Prediction</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={crowdPredictionData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="predicted" stroke="hsl(var(--accent))" strokeWidth={2} />
                <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Incident Prediction Chart */}
        <Card className="glass-strong">
          <CardHeader>
            <CardTitle>Weekly Incident Prediction</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={incidentPredictionData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="predicted" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="actual" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Risk Predictions by Location */}
      <Card className="glass-strong">
        <CardHeader>
          <CardTitle>Location Risk Predictions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskPredictionData.map((location, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg glass-subtle">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <div className="font-medium">{location.location}</div>
                  <div className="text-sm text-muted-foreground">Risk Level: {location.risk}%</div>
                </div>
                <div className="flex items-center gap-2">
                  {getTrendIcon(location.trend)}
                  <span className="text-sm text-muted-foreground">{location.trend}</span>
                </div>
                <div className="w-24">
                  <Progress value={location.risk} className="h-2" />
                </div>
                <div className={`text-lg font-bold ${getRiskColor(location.risk)}`}>{location.risk}%</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Predictions */}
      <Card className="glass-strong">
        <CardHeader>
          <CardTitle>Active Predictions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {predictions.map((prediction) => (
              <div key={prediction.id} className="p-4 rounded-lg glass-subtle border-l-4 border-l-accent">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium">{prediction.title}</h4>
                    <p className="text-sm text-muted-foreground text-pretty mt-1">{prediction.description}</p>
                  </div>
                  <Badge variant="outline" className={getImpactColor(prediction.impact)}>
                    {prediction.impact} impact
                  </Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div>
                    <div className="text-xs text-muted-foreground">Probability</div>
                    <div className="text-lg font-bold text-accent">{prediction.probability}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Timeframe</div>
                    <div className="text-sm font-medium">{prediction.timeframe}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Recommendation</div>
                    <div className="text-sm font-medium text-pretty">{prediction.recommendation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
