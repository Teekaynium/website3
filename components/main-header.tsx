"use client"

import { Button } from "@/components/ui/button"
import { Home, TrendingUp, Users, Search, MessageSquare, Settings, FileText } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

const navigationItems = [
  { icon: Home, href: "/funder", label: "Dashboard" },
  { icon: TrendingUp, href: "/funder/matches", label: "Matches" },
  { icon: FileText, href: "/funder/profile", label: "Profile" },
  { icon: Users, href: "/funder/portfolio", label: "Portfolio" },
  { icon: Search, href: "/funder/search", label: "Search" },
  { icon: MessageSquare, href: "/funder/messages", label: "Messages" },
  { icon: Settings, href: "/funder/settings", label: "Settings" },
]

export function MainHeader() {
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
