"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MapPin, Phone, Eye, MoreHorizontal, Shield } from "lucide-react"

interface TouristListProps {
  searchQuery: string
}

export function TouristList({ searchQuery }: TouristListProps) {
  const [selectedTourist, setSelectedTourist] = useState<string | null>(null)

  const tourists = [
    {
      id: "TID-001234",
      name: "Sarah Johnson",
      nationality: "United States",
      location: "Calangute Beach, Goa",
      safetyScore: 85,
      status: "active",
      lastSeen: "2 min ago",
      phone: "+1-555-0123",
      checkIn: "2h ago",
    },
    {
      id: "TID-001235",
      name: "Mike Chen",
      nationality: "Canada",
      location: "Panaji Market, Goa",
      safetyScore: 92,
      status: "active",
      lastSeen: "5 min ago",
      phone: "+1-416-555-0456",
      checkIn: "1h ago",
    },
    {
      id: "TID-001236",
      name: "Emma Wilson",
      nationality: "United Kingdom",
      location: "Old Goa",
      safetyScore: 78,
      status: "missing",
      lastSeen: "1h ago",
      phone: "+44-20-7946-0958",
      checkIn: "3h ago",
    },
    {
      id: "TID-001237",
      name: "Raj Patel",
      nationality: "India",
      location: "Anjuna Beach, Goa",
      safetyScore: 88,
      status: "active",
      lastSeen: "10 min ago",
      phone: "+91-98765-43210",
      checkIn: "30m ago",
    },
    {
      id: "TID-001238",
      name: "Lisa Anderson",
      nationality: "Australia",
      location: "Baga Beach, Goa",
      safetyScore: 91,
      status: "active",
      lastSeen: "3 min ago",
      phone: "+61-2-9876-5432",
      checkIn: "45m ago",
    },
  ]

  const filteredTourists = tourists.filter(
    (tourist) =>
      tourist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tourist.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tourist.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "missing":
        return "bg-red-100 text-red-800"
      case "caution":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getSafetyScoreColor = (score: number) => {
    if (score >= 85) return "text-green-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <Card className="glass-strong">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Tourist Registry</CardTitle>
          <div className="text-sm text-muted-foreground">
            {filteredTourists.length} of {tourists.length} tourists
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border glass-subtle overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tourist</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Safety Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Seen</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTourists.map((tourist) => (
                <TableRow key={tourist.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">
                          {tourist.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{tourist.name}</div>
                        <div className="text-sm text-muted-foreground">{tourist.id}</div>
                        <div className="text-xs text-muted-foreground">{tourist.nationality}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm">{tourist.location}</div>
                        <div className="text-xs text-muted-foreground">Check-in: {tourist.checkIn}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-muted-foreground" />
                      <span className={`font-medium ${getSafetyScoreColor(tourist.safetyScore)}`}>
                        {tourist.safetyScore}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={getStatusColor(tourist.status)}>
                      {tourist.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{tourist.lastSeen}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="glass-subtle bg-transparent">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="glass-subtle bg-transparent">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="glass-subtle bg-transparent">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
