import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DepartmentDashboard } from "@/components/department-dashboard"

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <DepartmentDashboard />
      </main>
      <Footer />
    </div>
  )
}
