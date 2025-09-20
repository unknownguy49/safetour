"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Users,
  AlertTriangle,
  MapPin,
  Shield,
  Clock,
  TrendingUp,
  Search,
  Filter,
  Download,
  Bell,
  Eye,
  FileText,
} from "lucide-react"
import { TouristMap } from "@/components/tourist-map"
import { IncidentManagement } from "@/components/incident-management"
import { TouristList } from "@/components/tourist-list"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"

export function DepartmentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")

  const dashboardStats = {
    totalTourists: 2847,
    activeTourists: 2156,
    activeIncidents: 3,
    highRiskAreas: 2,
    avgSafetyScore: 87,
    responseTime: "4.2 min",
  }

  const recentAlerts = [
    {
      id: "ALT-001",
      type: "panic",
      tourist: "Sarah Johnson",
      location: "Calangute Beach",
      time: "2 min ago",
      status: "responding",
    },
    {
      id: "ALT-002",
      type: "geofence",
      tourist: "Mike Chen",
      location: "Restricted Zone - Dudhsagar",
      time: "15 min ago",
      status: "resolved",
    },
    {
      id: "ALT-003",
      type: "missing",
      tourist: "Emma Wilson",
      location: "Old Goa",
      time: "1 hour ago",
      status: "investigating",
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-balance">Department Dashboard</h1>
          <p className="text-muted-foreground">Monitor tourist safety and manage incidents in real-time</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="glass-subtle bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline" size="sm" className="glass-subtle bg-transparent">
            <Bell className="h-4 w-4 mr-2" />
            Alerts (3)
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-accent" />
              <div>
                <div className="text-2xl font-bold">{dashboardStats.totalTourists.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Tourists</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-8 w-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold">{dashboardStats.activeTourists.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Active Now</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-red-500" />
              <div>
                <div className="text-2xl font-bold">{dashboardStats.activeIncidents}</div>
                <div className="text-sm text-muted-foreground">Active Incidents</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-accent" />
              <div>
                <div className="text-2xl font-bold">{dashboardStats.avgSafetyScore}</div>
                <div className="text-sm text-muted-foreground">Avg Safety Score</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-blue-500" />
              <div>
                <div className="text-2xl font-bold">{dashboardStats.responseTime}</div>
                <div className="text-sm text-muted-foreground">Avg Response</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold">+12%</div>
                <div className="text-sm text-muted-foreground">Safety Trend</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <TabsList className="grid w-full sm:w-auto grid-cols-2 sm:grid-cols-5 glass-subtle">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tourists">Tourists</TabsTrigger>
            <TabsTrigger value="incidents">Incidents</TabsTrigger>
            <TabsTrigger value="map">Live Map</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Search and Filter */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tourists, incidents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glass-subtle bg-transparent"
              />
            </div>
            <Button variant="outline" size="sm" className="glass-subtle bg-transparent">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Alerts */}
            <div className="lg:col-span-2">
              <Card className="glass-strong">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Recent Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAlerts.map((alert) => (
                      <div key={alert.id} className="flex items-center gap-4 p-4 rounded-lg glass-subtle">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            alert.type === "panic"
                              ? "bg-red-500"
                              : alert.type === "geofence"
                                ? "bg-yellow-500"
                                : "bg-orange-500"
                          }`}
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{alert.tourist}</span>
                            <Badge
                              variant={
                                alert.status === "responding"
                                  ? "destructive"
                                  : alert.status === "resolved"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {alert.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">{alert.location}</div>
                          <div className="text-xs text-muted-foreground">{alert.time}</div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="glass-subtle bg-transparent">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="glass-subtle bg-transparent">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card className="glass-strong">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Create Incident Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass-subtle bg-transparent">
                    <Users className="mr-2 h-4 w-4" />
                    Register New Tourist
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass-subtle bg-transparent">
                    <MapPin className="mr-2 h-4 w-4" />
                    Update Geo-fence
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass-subtle bg-transparent">
                    <FileText className="mr-2 h-4 w-4" />
                    Generate Report
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-strong">
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">AI Monitoring</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Online
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Blockchain Network</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Synced
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Emergency Services</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Ready
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GPS Tracking</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Active
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tourists">
          <TouristList searchQuery={searchQuery} />
        </TabsContent>

        <TabsContent value="incidents">
          <IncidentManagement />
        </TabsContent>

        <TabsContent value="map">
          <TouristMap />
        </TabsContent>

        <TabsContent value="analytics">
          <AnalyticsDashboard />
        </TabsContent>
      </Tabs>
    </div>
  )
}
