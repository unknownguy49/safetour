import Link from "next/link"
import { Shield, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Tourist Portal", href: "/tourist" },
        { name: "Department Dashboard", href: "/dashboard" },
        { name: "AI Monitoring", href: "/monitoring" },
        { name: "Digital ID System", href: "/digital-id" },
      ],
    },
    {
      title: "Features",
      links: [
        { name: "Geo-fencing Alerts", href: "/features/geo-fencing" },
        { name: "Panic Button", href: "/features/panic-button" },
        { name: "Real-time Tracking", href: "/features/tracking" },
        { name: "Blockchain Security", href: "/features/blockchain" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  ]

  return (
    <footer className="glass-strong border-t border-border/30 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Shield className="h-8 w-8 text-accent" />
              <span>SafeTour</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-pretty">
              Advanced AI-powered tourist safety monitoring system with blockchain digital IDs, geo-fencing alerts, and
              real-time incident response for secure travel experiences.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@safetour.gov.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Ministry of Tourism, New Delhi</span>
              </div>
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Smart Tourist Safety Monitoring System. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-foreground transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
