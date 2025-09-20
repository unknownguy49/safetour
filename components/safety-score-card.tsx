"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, MapPin, Clock } from "lucide-react"

interface SafetyScoreCardProps {
  score: number
}

export function SafetyScoreCard({ score }: SafetyScoreCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500"
    if (score >= 60) return "text-yellow-500"
    return "text-red-500"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Good"
    return "Needs Attention"
  }

  const factors = [
    { name: "Location Safety", score: 90, icon: MapPin },
    { name: "Travel Pattern", score: 85, icon: TrendingUp },
    { name: "Check-in Frequency", score: 80, icon: Clock },
  ]

  return (
    <Card className="glass-strong">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-accent" />
          Safety Score
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Score */}
        <div className="text-center">
          <div className={`text-4xl font-bold ${getScoreColor(score)}`}>{score}</div>
          <div className="text-sm text-muted-foreground mb-2">out of 100</div>
          <Badge variant="secondary" className="glass-subtle">
            {getScoreLabel(score)}
          </Badge>
        </div>

        {/* Progress Bar */}
        <Progress value={score} className="h-2" />

        {/* Score Factors */}
        <div className="space-y-3">
          <div className="text-sm font-medium">Contributing Factors</div>
          {factors.map((factor, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <factor.icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{factor.name}</span>
              </div>
              <span className="text-sm font-medium">{factor.score}</span>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="p-3 rounded-lg glass-subtle">
          <div className="text-sm font-medium mb-1">💡 Tip</div>
          <div className="text-xs text-muted-foreground text-pretty">
            Regular check-ins and staying in safe areas help maintain your high safety score.
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
