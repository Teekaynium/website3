import { MentorHeader } from "@/components/mentor-header"
import { Footer } from "@/components/footer"
import { MentorDashboard } from "@/components/mentor-dashboard"

export default function MentorDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MentorHeader />
      <main className="flex-1">
        <MentorDashboard />
      </main>
      <Footer />
    </div>
  )
}
