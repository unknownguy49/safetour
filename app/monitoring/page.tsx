import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AIMonitoringDashboard } from "@/components/ai-monitoring-dashboard"

export default function MonitoringPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <AIMonitoringDashboard />
      </main>
      <Footer />
    </div>
  )
}
