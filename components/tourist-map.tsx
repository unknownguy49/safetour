"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, AlertTriangle, Shield, Layers, ZoomIn } from "lucide-react"

export function TouristMap() {
  const mapData = {
    totalTourists: 2156,
    safeZones: 15,
    restrictedZones: 3,
    activeIncidents: 3,
  }

  const touristClusters = [
    { location: "Calangute Beach", count: 245, status: "safe", incidents: 0 },
    { location: "Baga Beach", count: 189, status: "safe", incidents: 0 },
    { location: "Anjuna Beach", count: 156, status: "caution", incidents: 1 },
    { location: "Old Goa", count: 134, status: "safe", incidents: 1 },
    { location: "Panaji Market", count: 98, status: "safe", incidents: 0 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "safe":
        return "bg-green-100 text-green-800"
      case "caution":
        return "bg-yellow-100 text-yellow-800"
      case "danger":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Map Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-accent" />
              <div>
                <div className="text-xl font-bold">{mapData.totalTourists}</div>
                <div className="text-sm text-muted-foreground">Active Tourists</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-green-500" />
              <div>
                <div className="text-xl font-bold">{mapData.safeZones}</div>
                <div className="text-sm text-muted-foreground">Safe Zones</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              <div>
                <div className="text-xl font-bold">{mapData.restrictedZones}</div>
                <div className="text-sm text-muted-foreground">Restricted Zones</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-orange-500" />
              <div>
                <div className="text-xl font-bold">{mapData.activeIncidents}</div>
                <div className="text-sm text-muted-foreground">Active Incidents</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map Placeholder */}
        <div className="lg:col-span-2">
          <Card className="glass-strong">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Live Tourist Map
                </CardTitle>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="glass-subtle bg-transparent">
                    <Layers className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="glass-subtle bg-transparent">
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-lg flex items-center justify-center border-2 border-dashed border-border/50">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground text-pretty">
                    Real-time tourist locations, geo-fences, and incident markers would be displayed here using a
                    mapping service like Google Maps or Mapbox.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tourist Clusters */}
        <div className="space-y-6">
          <Card className="glass-strong">
            <CardHeader>
              <CardTitle>Tourist Clusters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {touristClusters.map((cluster, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg glass-subtle">
                  <div>
                    <div className="font-medium">{cluster.location}</div>
                    <div className="text-sm text-muted-foreground">{cluster.count} tourists</div>
                    {cluster.incidents > 0 && (
                      <div className="text-xs text-red-600">{cluster.incidents} incident(s)</div>
                    )}
                  </div>
                  <Badge variant="secondary" className={getStatusColor(cluster.status)}>
                    {cluster.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-strong">
            <CardHeader>
              <CardTitle>Map Legend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-green-500" />
                <span className="text-sm">Safe Zones</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-yellow-500" />
                <span className="text-sm">Caution Areas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <span className="text-sm">Restricted Zones</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-blue-500" />
                <span className="text-sm">Tourist Locations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-sm">Active Incidents</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
