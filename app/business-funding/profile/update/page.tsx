import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProfileUpdateForm } from "@/components/profile-update-form"

export default function ProfileUpdatePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Pass the correct dashboard path here */}
        <ProfileUpdateForm dashboardPath="/business-funding/dashboard" />
      </main>
      <Footer />
    </div>
  )
}
