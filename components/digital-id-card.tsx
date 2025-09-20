"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { QrCode, Download, Share, Shield, Calendar, MapPin, User } from "lucide-react"

interface TouristData {
  name: string
  id: string
  nationality: string
  safetyScore: number
  currentLocation: string
  checkInTime: string
}

interface DigitalIdCardProps {
  touristData: TouristData
}

export function DigitalIdCard({ touristData }: DigitalIdCardProps) {
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Digital ID Card */}
        <Card className="glass-strong relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
          <CardHeader className="relative z-10">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                Digital Tourist ID
              </CardTitle>
              <Badge variant="secondary" className="glass-subtle">
                Verified
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="relative z-10 space-y-6">
            {/* Profile Section */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                <User className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{touristData.name}</h3>
                <p className="text-muted-foreground">{touristData.nationality}</p>
              </div>
            </div>

            {/* ID Details */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Tourist ID</div>
                  <div className="font-mono text-sm">{touristData.id}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Safety Score</div>
                  <div className="font-semibold text-accent">{touristData.safetyScore}/100</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Issue Date</div>
                  <div className="text-sm">Dec 25, 2024</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Valid Until</div>
                  <div className="text-sm">Jan 15, 2025</div>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                <QrCode className="h-24 w-24 text-gray-800" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 glass-subtle bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" size="sm" className="flex-1 glass-subtle bg-transparent">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* ID Information */}
        <div className="space-y-6">
          <Card className="glass-strong">
            <CardHeader>
              <CardTitle>Blockchain Verification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm">Identity Verified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm">Blockchain Secured</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm">Tamper Proof</span>
              </div>
              <div className="text-xs text-muted-foreground mt-4">Hash: 0x1a2b3c4d5e6f7g8h9i0j...</div>
            </CardContent>
          </Card>

          <Card className="glass-strong">
            <CardHeader>
              <CardTitle>Travel Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium">Current Location</div>
                  <div className="text-sm text-muted-foreground">{touristData.currentLocation}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium">Entry Date</div>
                  <div className="text-sm text-muted-foreground">December 25, 2024</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium">Visa Status</div>
                  <div className="text-sm text-muted-foreground">Tourist Visa - Valid</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
