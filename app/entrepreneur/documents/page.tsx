import { EntrepreneurHeader } from "@/components/entrepreneur-header"
import { Footer } from "@/components/footer"
import { EntrepreneurDocuments } from "@/components/entrepreneur-documents"

export default function EntrepreneurDocumentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <EntrepreneurHeader />
      <main className="flex-1">
        <EntrepreneurDocuments />
      </main>
      <Footer />
    </div>
  )
}
