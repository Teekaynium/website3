import { MainHeader } from "@/components/main-header"
import { Footer } from "@/components/footer"

export default function FunderMessagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MainHeader />
      <main className="flex-1 p-6">
        <div className="text-center text-gray-600 mt-20">
          <h2 className="text-xl font-semibold mb-2">Funder Messages</h2>
          <p>Your investment-related messages will appear here</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
