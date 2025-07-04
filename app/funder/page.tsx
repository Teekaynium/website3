import { MainHeader } from "@/components/main-header"
import { Footer } from "@/components/footer"
import { FunderProfile } from "@/components/funder-profile"

export default function FunderPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MainHeader />
      <main className="flex-1">
        <FunderProfile />
      </main>
      <Footer />
    </div>
  )
}
