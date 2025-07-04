import { MainHeader } from "@/components/main-header"
import { Footer } from "@/components/footer"
import { FunderPortfolio } from "@/components/funder-portfolio"

export default function FunderPortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MainHeader />
      <main className="flex-1">
        <FunderPortfolio />
      </main>
      <Footer />
    </div>
  )
}
