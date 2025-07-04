import { Home, BarChart3, Tag, Users, FileText, Database, Settings } from "lucide-react"
import Link from "next/link"

const navigationItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Reporting", icon: BarChart3, href: "/reporting" },
  { name: "Matching Categories", icon: Tag, href: "/matching-categories" },
  { name: "Clients", icon: Users, href: "/clients" },
  { name: "Forms", icon: FileText, href: "/forms" },
  { name: "Data Points", icon: Database, href: "/data-points" },
  { name: "Settings", icon: Settings, href: "/settings" },
]

export function Sidebar() {
  return (
    <aside className="w-64 bg-red-100 min-h-full">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Navigation</h2>
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-red-200 rounded-md transition-colors duration-200"
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
