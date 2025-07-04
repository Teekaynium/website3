import { BusinessFundingHeader } from "@/components/business-funding/header"
import { Footer } from "@/components/footer"

export default function BusinessFundingReportingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <BusinessFundingHeader />
      <main className="flex-1 p-6">
        <div className="text-center text-gray-600 mt-20">
          <h2 className="text-xl font-semibold mb-2">Business Reporting</h2>
          <p>Analytics and reports for your business will appear here</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
