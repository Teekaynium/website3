import { EntrepreneurHeader } from "@/components/entrepreneur-header"
import { Footer } from "@/components/footer"
import { EntrepreneurForm } from "@/components/entrepreneur-form"

export default function EntrepreneurFormPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <EntrepreneurHeader />
      <main className="flex-1">
        <EntrepreneurForm />
      </main>
      <Footer />
    </div>
  )
}
