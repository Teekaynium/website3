import { MainHeader } from "@/components/main-header"
import { Footer } from "@/components/footer"
import { BusinessProfile } from "@/components/business-profile"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MainHeader />
      <main className="flex-1">
        <BusinessProfile />
      </main>
      <Footer />
    </div>
  )
}
