import { EntrepreneurHeader } from "@/components/entrepreneur-header"
import { Footer } from "@/components/footer"
import { EntrepreneurMatches } from "@/components/entrepreneur-matches"

export default function EntrepreneurMatchesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <EntrepreneurHeader />
      <main className="flex-1">
        <EntrepreneurMatches />
      </main>
      <Footer />
    </div>
  )
}
