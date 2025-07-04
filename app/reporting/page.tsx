import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ReportingPage() {
  return (
    <div className="min-h-screen bg-red-100 flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <div className="text-center text-gray-600 mt-20">
          <h2 className="text-xl font-semibold mb-2">Reporting</h2>
          <p>Analytics and reports will appear here</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
