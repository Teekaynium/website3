import { AdminSidebar } from "@/components/admin-sidebar"
import { MainHeader } from "@/components/main-header"
import { Footer } from "@/components/footer"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MainHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 bg-white p-6">
          <div className="text-center text-gray-600 mt-20">
            <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
            <p>Welcome to the One Bridge admin panel</p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
