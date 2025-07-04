import { MainHeader } from "@/components/main-header"
import { Footer } from "@/components/footer"
import { FunderForm } from "@/components/funder-form"

export default function FunderFormPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MainHeader />
      <main className="flex-1">
        <FunderForm />
      </main>
      <Footer />
    </div>
  )
}
