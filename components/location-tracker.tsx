"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, Clock, AlertCircle } from "lucide-react"

interface LocationTrackerProps {
  currentLocation: string
}

export function LocationTracker({ currentLocation }: LocationTrackerProps) {
  const recentLocations = [
    { place: "Calangute Beach", time: "Current", status: "safe" },
    { place: "Panaji Market", time: "2h ago", status: "safe" },
    { place: "Dona Paula", time: "4h ago", status: "safe" },
    { place: "Miramar Beach", time: "6h ago", status: "safe" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "safe":
        return "bg-green-500"
      case "caution":
        return "bg-yellow-500"
      case "danger":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card className="glass-strong">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            Location Tracking
          </CardTitle>
          <Badge variant="secondary" className="glass-subtle">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
            Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Location */}
        <div className="p-4 rounded-lg glass-subtle border-l-4 border-l-accent">
          <div className="flex items-center justify-between mb-2">
            <div className="font-medium">Current Location</div>
            <Badge variant="outline" className="text-green-600 border-green-600">
              Safe Zone
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground">{currentLocation}</div>
          <div className="text-xs text-muted-foreground mt-1">Last updated: 2 minutes ago</div>
        </div>

        {/* Recent Locations */}
        <div>
          <div className="text-sm font-medium mb-3">Recent Locations</div>
          <div className="space-y-2">
            {recentLocations.map((location, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(location.status)}`} />
                <div className="flex-1">
                  <div className="text-sm font-medium">{location.place}</div>
                </div>
                <div className="text-xs text-muted-foreground">{location.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 glass-subtle bg-transparent">
            <Navigation className="h-4 w-4 mr-2" />
            Get Directions
          </Button>
          <Button variant="outline" size="sm" className="flex-1 glass-subtle bg-transparent">
            <Clock className="h-4 w-4 mr-2" />
            Check-in
          </Button>
        </div>

        {/* Safety Notice */}
        <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800 dark:text-blue-200">
              <div className="font-medium">Location Sharing Active</div>
              <div className="text-xs mt-1 text-pretty">
                Your location is being shared with emergency contacts for safety monitoring.
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
