import { BusinessFundingHeader } from "@/components/business-funding/header"
import { Footer } from "@/components/footer"
import { BusinessFundingDocuments } from "@/components/business-funding/documents"

export default function BusinessFundingDocumentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <BusinessFundingHeader />
      <main className="flex-1">
        <BusinessFundingDocuments />
      </main>
      <Footer />
    </div>
  )
}
