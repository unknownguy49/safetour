"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  MapPin,
  AlertTriangle,
  Phone,
  QrCode,
  Clock,
  Users,
  Navigation,
  Heart,
  Camera,
  MessageCircle,
} from "lucide-react"
import { DigitalIdCard } from "@/components/digital-id-card"
import { SafetyScoreCard } from "@/components/safety-score-card"
import { PanicButton } from "@/components/panic-button"
import { LocationTracker } from "@/components/location-tracker"

export function TouristDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const touristData = {
    name: "Sarah Johnson",
    id: "TID-2024-001234",
    nationality: "United States",
    safetyScore: 85,
    currentLocation: "Goa, India",
    checkInTime: "2 hours ago",
    emergencyContacts: [
      { name: "John Johnson", relation: "Spouse", phone: "+1-555-0123" },
      { name: "Embassy", relation: "US Embassy Delhi", phone: "+91-11-2419-8000" },
    ],
    itinerary: [
      { date: "Today", location: "Calangute Beach", status: "current" },
      { date: "Tomorrow", location: "Old Goa Churches", status: "planned" },
      { date: "Dec 28", location: "Spice Plantation Tour", status: "planned" },
    ],
    alerts: [
      { type: "info", message: "Weather alert: Light rain expected this evening", time: "1h ago" },
      { type: "warning", message: "Avoid crowded areas near Anjuna Beach due to high tide", time: "3h ago" },
    ],
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-balance">Welcome back, {touristData.name}</h1>
            <p className="text-muted-foreground">Your safety is our priority. Stay connected and travel smart.</p>
          </div>
          <PanicButton />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="glass-subtle">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-accent" />
                <div>
                  <div className="text-2xl font-bold">{touristData.safetyScore}</div>
                  <div className="text-sm text-muted-foreground">Safety Score</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-subtle">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-8 w-8 text-accent" />
                <div>
                  <div className="text-lg font-semibold">{touristData.currentLocation}</div>
                  <div className="text-sm text-muted-foreground">Current Location</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-subtle">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 text-accent" />
                <div>
                  <div className="text-lg font-semibold">{touristData.checkInTime}</div>
                  <div className="text-sm text-muted-foreground">Last Check-in</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-subtle">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-accent" />
                <div>
                  <div className="text-lg font-semibold">{touristData.emergencyContacts.length}</div>
                  <div className="text-sm text-muted-foreground">Emergency Contacts</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Dashboard Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 glass-subtle">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="digital-id">Digital ID</TabsTrigger>
          <TabsTrigger value="safety">Safety</TabsTrigger>
          <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Alerts */}
              <Card className="glass-strong">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-accent" />
                    Recent Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {touristData.alerts.map((alert, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg glass-subtle">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          alert.type === "warning" ? "bg-yellow-500" : "bg-blue-500"
                        }`}
                      />
                      <div className="flex-1">
                        <p className="text-sm text-pretty">{alert.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Location Tracker */}
              <LocationTracker currentLocation={touristData.currentLocation} />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Safety Score */}
              <SafetyScoreCard score={touristData.safetyScore} />

              {/* Quick Actions */}
              <Card className="glass-strong">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start glass-subtle bg-transparent">
                    <QrCode className="mr-2 h-4 w-4" />
                    Show Digital ID
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass-subtle bg-transparent">
                    <Navigation className="mr-2 h-4 w-4" />
                    Find Safe Routes
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass-subtle bg-transparent">
                    <Heart className="mr-2 h-4 w-4" />
                    Health Check-in
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass-subtle bg-transparent">
                    <Camera className="mr-2 h-4 w-4" />
                    Report Incident
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="digital-id">
          <DigitalIdCard touristData={touristData} />
        </TabsContent>

        <TabsContent value="safety" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="glass-strong">
              <CardHeader>
                <CardTitle>Emergency Contacts</CardTitle>
                <CardDescription>Your registered emergency contacts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {touristData.emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg glass-subtle">
                    <div>
                      <div className="font-medium">{contact.name}</div>
                      <div className="text-sm text-muted-foreground">{contact.relation}</div>
                    </div>
                    <Button size="sm" variant="outline" className="glass-subtle bg-transparent">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-strong">
              <CardHeader>
                <CardTitle>Safety Features</CardTitle>
                <CardDescription>Manage your safety preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Location Sharing</div>
                    <div className="text-sm text-muted-foreground">Share location with emergency contacts</div>
                  </div>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Geo-fence Alerts</div>
                    <div className="text-sm text-muted-foreground">Get notified about restricted areas</div>
                  </div>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Auto Check-in</div>
                    <div className="text-sm text-muted-foreground">Automatic safety check-ins</div>
                  </div>
                  <Badge variant="outline">Inactive</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="itinerary" className="space-y-6">
          <Card className="glass-strong">
            <CardHeader>
              <CardTitle>Your Travel Itinerary</CardTitle>
              <CardDescription>Planned destinations and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {touristData.itinerary.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg glass-subtle">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.status === "current"
                          ? "bg-accent"
                          : item.status === "planned"
                            ? "bg-muted-foreground/50"
                            : "bg-green-500"
                      }`}
                    />
                    <div className="flex-1">
                      <div className="font-medium">{item.location}</div>
                      <div className="text-sm text-muted-foreground">{item.date}</div>
                    </div>
                    <Badge variant={item.status === "current" ? "default" : "outline"}>{item.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="glass-strong">
              <CardHeader>
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>Get help anytime, anywhere</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start Live Chat
                </Button>
                <Button variant="outline" className="w-full glass-subtle bg-transparent">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Support: 1800-XXX-XXXX
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-strong">
              <CardHeader>
                <CardTitle>Helpful Resources</CardTitle>
                <CardDescription>Quick access to important information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start">
                  Safety Guidelines
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Local Emergency Numbers
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Cultural Tips
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Language Translator
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
