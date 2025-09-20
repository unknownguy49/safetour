"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Clock, MapPin, User, Phone, FileText, CheckCircle, XCircle, AlertCircle } from "lucide-react"

export function IncidentManagement() {
  const [selectedIncident, setSelectedIncident] = useState<string | null>(null)

  const incidents = [
    {
      id: "INC-2024-001",
      type: "panic",
      priority: "high",
      status: "active",
      tourist: "Sarah Johnson",
      touristId: "TID-001234",
      location: "Calangute Beach, Goa",
      coordinates: "15.5527° N, 73.7630° E",
      reportedAt: "2024-12-26 14:30:00",
      description: "Tourist activated panic button. No response to calls.",
      assignedOfficer: "Officer Sharma",
      responseTime: "2 min",
      updates: [
        { time: "14:32", action: "Emergency services dispatched", officer: "Dispatcher" },
        { time: "14:31", action: "Attempted contact with tourist", officer: "Officer Sharma" },
        { time: "14:30", action: "Panic button activated", officer: "System" },
      ],
    },
    {
      id: "INC-2024-002",
      type: "geofence",
      priority: "medium",
      status: "resolved",
      tourist: "Mike Chen",
      touristId: "TID-001235",
      location: "Restricted Zone - Dudhsagar",
      coordinates: "15.3144° N, 74.3144° E",
      reportedAt: "2024-12-26 13:15:00",
      description: "Tourist entered restricted waterfall area during monsoon season.",
      assignedOfficer: "Officer Patel",
      responseTime: "5 min",
      updates: [
        { time: "13:25", action: "Tourist safely escorted out", officer: "Officer Patel" },
        { time: "13:20", action: "Contact established with tourist", officer: "Officer Patel" },
        { time: "13:15", action: "Geo-fence violation detected", officer: "System" },
      ],
    },
    {
      id: "INC-2024-003",
      type: "missing",
      priority: "high",
      status: "investigating",
      tourist: "Emma Wilson",
      touristId: "TID-001236",
      location: "Old Goa",
      coordinates: "15.5007° N, 73.9117° E",
      reportedAt: "2024-12-26 12:00:00",
      description: "Tourist missed scheduled check-in. Last seen at Basilica of Bom Jesus.",
      assignedOfficer: "Officer D'Souza",
      responseTime: "10 min",
      updates: [
        { time: "13:30", action: "Search team deployed to last known location", officer: "Officer D'Souza" },
        { time: "12:30", action: "Emergency contacts notified", officer: "Officer D'Souza" },
        { time: "12:10", action: "Missing person report filed", officer: "System" },
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      case "resolved":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "investigating":
        return <Clock className="h-4 w-4 text-yellow-500" />
      default:
        return <XCircle className="h-4 w-4 text-gray-500" />
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "panic":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case "geofence":
        return <MapPin className="h-4 w-4 text-yellow-500" />
      case "missing":
        return <User className="h-4 w-4 text-orange-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-red-500" />
              <div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-muted-foreground">Active Incidents</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-blue-500" />
              <div>
                <div className="text-2xl font-bold">4.2</div>
                <div className="text-sm text-muted-foreground">Avg Response (min)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold">47</div>
                <div className="text-sm text-muted-foreground">Resolved Today</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="glass-subtle">
          <TabsTrigger value="active">Active Incidents</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
          <TabsTrigger value="all">All Incidents</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {incidents
            .filter((incident) => incident.status === "active" || incident.status === "investigating")
            .map((incident) => (
              <Card key={incident.id} className="glass-strong">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {getTypeIcon(incident.type)}
                      <div>
                        <CardTitle className="text-lg">{incident.id}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className={getPriorityColor(incident.priority)}>
                            {incident.priority} priority
                          </Badge>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(incident.status)}
                            <span className="text-sm text-muted-foreground">{incident.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="glass-subtle bg-transparent">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="glass-subtle bg-transparent">
                        <MapPin className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="glass-subtle bg-transparent">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-medium mb-2">Tourist Information</div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div>Name: {incident.tourist}</div>
                        <div>ID: {incident.touristId}</div>
                        <div>Location: {incident.location}</div>
                        <div>Coordinates: {incident.coordinates}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-2">Incident Details</div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div>Reported: {new Date(incident.reportedAt).toLocaleString()}</div>
                        <div>Assigned: {incident.assignedOfficer}</div>
                        <div>Response Time: {incident.responseTime}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium mb-2">Description</div>
                    <p className="text-sm text-muted-foreground text-pretty">{incident.description}</p>
                  </div>

                  <div>
                    <div className="text-sm font-medium mb-2">Recent Updates</div>
                    <div className="space-y-2">
                      {incident.updates.slice(0, 2).map((update, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 rounded glass-subtle">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                          <div className="flex-1">
                            <div className="text-sm">{update.action}</div>
                            <div className="text-xs text-muted-foreground">
                              {update.time} - {update.officer}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm">Update Status</Button>
                    <Button size="sm" variant="outline" className="glass-subtle bg-transparent">
                      Add Note
                    </Button>
                    <Button size="sm" variant="outline" className="glass-subtle bg-transparent">
                      View Full Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="resolved">
          <Card className="glass-strong">
            <CardHeader>
              <CardTitle>Resolved Incidents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
                <p>47 incidents resolved today</p>
                <Button variant="outline" className="mt-4 glass-subtle bg-transparent">
                  View Resolved Incidents
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all">
          <Card className="glass-strong">
            <CardHeader>
              <CardTitle>All Incidents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-4" />
                <p>View comprehensive incident history and reports</p>
                <Button variant="outline" className="mt-4 glass-subtle bg-transparent">
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
