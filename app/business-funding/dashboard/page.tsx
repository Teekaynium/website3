import { BusinessFundingHeader } from "@/components/business-funding/header"
import { Footer } from "@/components/footer"
import { BusinessFundingDashboard } from "@/components/business-funding/dashboard"

export default function BusinessFundingDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <BusinessFundingHeader />
      <main className="flex-1">
        <BusinessFundingDashboard />
      </main>
      <Footer />
    </div>
  )
}
