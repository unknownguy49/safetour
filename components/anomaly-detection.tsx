"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { AlertTriangle, Search, Filter, Eye, Clock, MapPin, User, TrendingUp } from "lucide-react"

export function AnomalyDetection() {
  const [searchQuery, setSearchQuery] = useState("")

  const anomalies = [
    {
      id: "ANO-001",
      type: "movement",
      severity: "high",
      tourist: "Sarah Johnson",
      touristId: "TID-001234",
      description: "Sudden stop in movement for 45 minutes in isolated area",
      location: "Remote trail near Dudhsagar Falls",
      detectedAt: "2024-12-26 14:30:00",
      confidence: 94,
      status: "investigating",
      aiModel: "Movement Pattern Analyzer v2.1",
      riskScore: 8.7,
    },
    {
      id: "ANO-002",
      type: "deviation",
      severity: "medium",
      tourist: "Mike Chen",
      touristId: "TID-001235",
      description: "Significant deviation from planned route without notification",
      location: "Unplanned detour to Arambol Beach",
      detectedAt: "2024-12-26 13:45:00",
      confidence: 87,
      status: "resolved",
      aiModel: "Route Deviation Detector v1.8",
      riskScore: 6.2,
    },
    {
      id: "ANO-003",
      type: "behavior",
      severity: "low",
      tourist: "Emma Wilson",
      touristId: "TID-001236",
      description: "Unusual spending pattern detected - potential financial distress",
      location: "Panaji Market Area",
      detectedAt: "2024-12-26 12:15:00",
      confidence: 73,
      status: "monitoring",
      aiModel: "Behavioral Analysis Engine v3.0",
      riskScore: 4.1,
    },
    {
      id: "ANO-004",
      type: "communication",
      severity: "high",
      tourist: "David Kumar",
      touristId: "TID-001237",
      description: "No communication or check-in for 6 hours beyond scheduled time",
      location: "Last known: Spice Plantation, Ponda",
      detectedAt: "2024-12-26 11:00:00",
      confidence: 91,
      status: "escalated",
      aiModel: "Communication Pattern Monitor v2.3",
      riskScore: 9.1,
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "investigating":
        return "bg-orange-100 text-orange-800"
      case "resolved":
        return "bg-green-100 text-green-800"
      case "monitoring":
        return "bg-blue-100 text-blue-800"
      case "escalated":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "movement":
        return <MapPin className="h-4 w-4" />
      case "deviation":
        return <TrendingUp className="h-4 w-4" />
      case "behavior":
        return <User className="h-4 w-4" />
      case "communication":
        return <Clock className="h-4 w-4" />
      default:
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  const filteredAnomalies = anomalies.filter(
    (anomaly) =>
      anomaly.tourist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      anomaly.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      anomaly.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Anomaly Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              <div>
                <div className="text-xl font-bold">23</div>
                <div className="text-sm text-muted-foreground">Total Anomalies</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-orange-500" />
              <div>
                <div className="text-xl font-bold">4</div>
                <div className="text-sm text-muted-foreground">Active Cases</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-green-500" />
              <div>
                <div className="text-xl font-bold">94%</div>
                <div className="text-sm text-muted-foreground">Detection Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Eye className="h-6 w-6 text-blue-500" />
              <div>
                <div className="text-xl font-bold">2.3s</div>
                <div className="text-sm text-muted-foreground">Avg Detection</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search anomalies by tourist, description, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 glass-subtle bg-transparent"
          />
        </div>
        <Button variant="outline" className="glass-subtle bg-transparent">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Anomaly List */}
      <div className="space-y-4">
        {filteredAnomalies.map((anomaly) => (
          <Card key={anomaly.id} className="glass-strong">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getTypeIcon(anomaly.type)}
                  <div>
                    <CardTitle className="text-lg">{anomaly.id}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className={getSeverityColor(anomaly.severity)}>
                        {anomaly.severity} severity
                      </Badge>
                      <Badge variant="secondary" className={getStatusColor(anomaly.status)}>
                        {anomaly.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Risk Score</div>
                  <div className="text-2xl font-bold text-red-600">{anomaly.riskScore}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium mb-2">Tourist Information</div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Name: {anomaly.tourist}</div>
                    <div>ID: {anomaly.touristId}</div>
                    <div>Location: {anomaly.location}</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium mb-2">Detection Details</div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Detected: {new Date(anomaly.detectedAt).toLocaleString()}</div>
                    <div>Confidence: {anomaly.confidence}%</div>
                    <div>AI Model: {anomaly.aiModel}</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Anomaly Description</div>
                <p className="text-sm text-muted-foreground text-pretty">{anomaly.description}</p>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm">Investigate</Button>
                <Button size="sm" variant="outline" className="glass-subtle bg-transparent">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
                <Button size="sm" variant="outline" className="glass-subtle bg-transparent">
                  Mark Resolved
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
