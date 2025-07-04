import { MainHeader } from "@/components/main-header"
import { Footer } from "@/components/footer"
import { FunderMatches } from "@/components/funder-matches"

export default function FunderMatchesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MainHeader />
      <main className="flex-1">
        <FunderMatches />
      </main>
      <Footer />
    </div>
  )
}
