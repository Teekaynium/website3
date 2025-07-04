"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image" // still needed for the logo

export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white px-6 py-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/images/one-bridge-logo.jpeg"
              alt="One Bridge by One Stone Capital"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900">
              Our Services
            </Link>
            <Link href="/mentors/auth" className="text-gray-700 hover:text-gray-900">
              Mentorship Log In
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/join">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Join Us</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://placehold.co/1200x800"
            alt="Bridge background"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <p className="text-lg md:text-xl mb-12 leading-relaxed">
            Whether you're a business seeking funding, an investor looking to support MBE / SMME enterprises, or a
            mentor or partner ready to make a difference, the One Bridge platform will connect you to the right
            opportunities. Take the first step towards building a brighter future together by clicking the corresponding
            button below.
          </p>

          {/* Action Buttons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="space-y-12">
              <Link href="/business-funding/auth">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-medium h-auto rounded-lg shadow-lg">
                  Businesses Seeking Funding
                </Button>
              </Link>
              <Link href="/business-funding/auth">
                <Button
                  variant="outline"
                  className="w-full bg-white text-gray-900 hover:bg-gray-100 py-6 text-lg font-medium h-auto border-2 rounded-lg shadow-lg"
                >
                  UPLOAD DOCUMENTS
                </Button>
              </Link>
            </div>

            <div className="space-y-12">
              <Link href="/investors/auth">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-medium h-auto rounded-lg shadow-lg">
                  Banks & Investors
                </Button>
              </Link>
              <Link href="/mentorship-seekers/auth">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-medium h-auto rounded-lg shadow-lg">
                  Entrepreneurs Seeking Mentorship
                </Button>
              </Link>
            </div>

            <div className="space-y-12">
              <Link href="/mentors/auth">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-medium h-auto rounded-lg shadow-lg">
                  Mentors
                </Button>
              </Link>
              <Link href="/education">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-medium h-auto rounded-lg shadow-lg">
                  Educational Platform
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
