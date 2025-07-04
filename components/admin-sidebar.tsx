"use client"

import { Home, BarChart3, Tag, Users, FileText, Database, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigationItems = [
  { name: "Home", icon: Home, href: "/admin" },
  { name: "Reporting", icon: BarChart3, href: "/admin/reporting" },
  { name: "Matching Categories", icon: Tag, href: "/admin/matching-categories" },
  { name: "Clients", icon: Users, href: "/admin/clients" },
  { name: "Forms", icon: FileText, href: "/admin/forms" },
  { name: "Data Points", icon: Database, href: "/admin/data-points" },
  { name: "Settings", icon: Settings, href: "/admin/settings" },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-red-100 min-h-screen">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">Navigation</h2>
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors duration-200 ${
                pathname === item.href ? "bg-red-200 text-gray-900" : "text-gray-700 hover:bg-red-200"
              }`}
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
