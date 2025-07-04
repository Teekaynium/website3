import { EntrepreneurHeader } from "@/components/entrepreneur-header"
import { Footer } from "@/components/footer"
import { EntrepreneurDashboard } from "@/components/entrepreneur-dashboard"

export default function EntrepreneurDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <EntrepreneurHeader />
      <main className="flex-1">
        <EntrepreneurDashboard />
      </main>
      <Footer />
    </div>
  )
}
