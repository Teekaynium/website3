import { EntrepreneurHeader } from "@/components/entrepreneur-header"
import { Footer } from "@/components/footer"

export default function EntrepreneurSettingsPage() {
  return (
    <div className="min-h-screen bg-red-100 flex flex-col">
      <EntrepreneurHeader />
      <main className="flex-1 p-6">
        <div className="text-center text-gray-600 mt-20">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p>Your settings will appear here</p>
        </div>
        <div className="mt-8">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Return to Dashboard
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
