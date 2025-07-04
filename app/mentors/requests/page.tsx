import { MentorHeader } from "@/components/mentor-header"
import { Footer } from "@/components/footer"
import { MentorshipRequests } from "@/components/mentors/requests"

export default function MentorshipRequestsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MentorHeader />
      <main className="flex-1">
        <MentorshipRequests />
      </main>
      <Footer />
    </div>
  )
}
