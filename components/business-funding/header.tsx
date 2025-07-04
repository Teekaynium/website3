"use client"

import { Button } from "@/components/ui/button"
import { Home, User, FileText, Users, Search, MessageSquare, Settings, TrendingUp } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

const navigationItems = [
  { icon: Home, href: "/business-funding/dashboard", label: "Dashboard" },
  { icon: User, href: "/business-funding/profile", label: "Profile" },
  { icon: FileText, href: "/business-funding/documentation", label: "Documents" },
  { icon: Users, href: "/business-funding/matches", label: "Matches" },
  { icon: TrendingUp, href: "/business-funding/reporting", label: "Reporting" },
  { icon: Search, href: "/business-funding/search", label: "Search" },
  { icon: MessageSquare, href: "/business-funding/messages", label: "Messages" },
  { icon: Settings, href: "/business-funding/settings", label: "Settings" },
]

export function BusinessFundingHeader() {
  const pathname = usePathname()

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/one-bridge-logo.jpeg"
              alt="One Bridge by One Stone Capital"
              width={180}
              height={50}
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-orange-100 text-orange-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <Link href="/">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Sign Out</Button>
        </Link>
      </div>
    </header>
  )
}
