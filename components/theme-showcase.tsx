"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Palette, Sun, Moon, Sparkles } from "lucide-react"

export function ThemeShowcase() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 gradient-text flex items-center justify-center gap-2">
          <Palette className="h-8 w-8" />
          Theme Showcase
        </h2>
        <p className="text-muted-foreground mb-6">
          Experience our beautiful glassmorphism design in both light and dark modes
        </p>
        <div className="flex justify-center">
          <ThemeToggle />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Glass Effects */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              Glass Effect
            </CardTitle>
            <CardDescription>Standard glassmorphism card</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This card uses the standard glass effect with backdrop blur and transparency.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-strong">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              Strong Glass
            </CardTitle>
            <CardDescription>Enhanced glassmorphism effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This card uses a stronger glass effect with more opacity and blur.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-subtle">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              Subtle Glass
            </CardTitle>
            <CardDescription>Minimal glassmorphism effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">This card uses a subtle glass effect with minimal opacity.</p>
          </CardContent>
        </Card>

        {/* Interactive Elements */}
        <Card className="glass-interactive">
          <CardHeader>
            <CardTitle>Interactive Glass</CardTitle>
            <CardDescription>Hover and click effects</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">This card has interactive hover and click animations.</p>
            <Button className="glass-interactive w-full">Interactive Button</Button>
          </CardContent>
        </Card>

        {/* Theme Indicators */}
        <Card className="glass animate-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sun className="h-5 w-5 text-yellow-500 dark:hidden" />
              <Moon className="h-5 w-5 text-blue-400 hidden dark:block" />
              Theme Aware
            </CardTitle>
            <CardDescription>Adapts to current theme</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge variant="default" className="glass-subtle">
                <span className="dark:hidden">Light Mode Active</span>
                <span className="hidden dark:block">Dark Mode Active</span>
              </Badge>
              <p className="text-sm text-muted-foreground">
                This card shows different content based on the current theme.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Gradient Elements */}
        <Card className="glass gradient-bg">
          <CardHeader>
            <CardTitle className="gradient-text">Gradient Effects</CardTitle>
            <CardDescription>Beautiful gradient combinations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              This card combines glassmorphism with gradient backgrounds and text.
            </p>
            <Button variant="outline" className="glass-interactive gradient-text font-semibold bg-transparent">
              Gradient Button
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Animation Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass animate-float">
          <CardHeader>
            <CardTitle>Floating Animation</CardTitle>
            <CardDescription>Gentle floating motion</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This card has a subtle floating animation that adds life to the interface.
            </p>
          </CardContent>
        </Card>

        <Card className="glass animate-glow">
          <CardHeader>
            <CardTitle>Glowing Effect</CardTitle>
            <CardDescription>Subtle glow animation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This card has a gentle glow effect that pulses with the accent color.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
