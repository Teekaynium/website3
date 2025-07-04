import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MatchesContent } from "@/components/matches-content"

export default function MatchesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        <MatchesContent />
      </main>
      <Footer />
    </div>
  )
}
