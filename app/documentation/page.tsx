import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocumentationContent } from "@/components/documentation-content"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        <DocumentationContent />
      </main>
      <Footer />
    </div>
  )
}
