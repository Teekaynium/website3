"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { MapPin, Calendar, Users, Globe, Star } from "lucide-react"
import Link from "next/link"

export function BusinessFundingDashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-600 min-h-screen p-4">
        <div className="space-y-2">
          <Link href="/business-funding/profile/update">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white justify-start">
              Update Profile
            </Button>
          </Link>
          <Link href="/business-funding/documentation">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white justify-start">
              Upload Documents Here
            </Button>
          </Link>
        </div>

        <div className="mt-8 space-y-3">
          <div className="text-white text-sm mb-4">Go to</div>
          <Link href="/mentorship-seekers/dashboard">
            <Card className="bg-gray-600 text-white border-gray-500 hover:bg-gray-500 cursor-pointer">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium">Mentorship Platform</h3>
              </CardContent>
            </Card>
          </Link>
          <Card className="bg-gray-600 text-white border-gray-500">
            <CardContent className="p-4 text-center">
              <h3 className="font-medium">Fund Seeker Platform</h3>
            </CardContent>
          </Card>
          <Link href="/education">
            <Card className="bg-gray-600 text-white border-gray-500 hover:bg-gray-500 cursor-pointer">
              <CardContent className="p-4 text-center">
                <h3 className="font-medium">Education Platform</h3>
              </CardContent>
            </Card>
          </Link>
          <Card className="bg-gray-600 text-white border-gray-500">
            <CardContent className="p-4 text-center">
              <h3 className="font-medium">Supplier & Customer Matching Platform</h3>
            </CardContent>
          </Card>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Hi, "First Name". Welcome to your dashboard!</h1>
        </div>

        {/* Profile Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold">Company Name</h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>*Position*</span>
                    <span>*First Name* *Last Name*</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>*Location*</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>*Age of Business*</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>*Number of Employees*</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="h-4 w-4" />
                      <span>*Website*</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm">5-star rating*</span>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  *Funding Needed*
                </Badge>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">*Industry #1*</Badge>
                <Badge variant="outline">*Industry #2*</Badge>
                <Badge variant="outline">*Industry #3*</Badge>
              </div>
              <div>
                <p className="text-gray-600 text-sm">*Business Description*</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Looking For:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-600">*Funding*</Badge>
                  <Badge className="bg-gray-600">*Customers*</Badge>
                  <Badge className="bg-gray-600">*Suppliers*</Badge>
                  <Badge className="bg-gray-600">*Mentorship*</Badge>
                  <Badge className="bg-gray-600">*Education*</Badge>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-orange-500 text-white">*Funding Type #1*</Badge>
                <Badge className="bg-orange-500 text-white">*Funding Type #2*</Badge>
                <Badge className="bg-orange-500 text-white">*Funding Type #3*</Badge>
                <Badge className="bg-orange-500 text-white">*Funding Type #4*</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <h3 className="font-medium text-sm text-gray-600 mb-2">Profile Completion</h3>
              <div className="mt-2">
                <Progress value={75} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">75%</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h3 className="font-medium text-sm text-gray-600 mb-2">Funding Progress</h3>
              <div className="mt-2">
                <Progress value={45} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">45%</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h3 className="font-medium text-sm text-gray-600 mb-2">Customer Matches</h3>
              <div className="text-3xl font-bold mt-2">0</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <h3 className="font-medium text-sm text-gray-600 mb-2">Supplier Matches</h3>
              <div className="text-3xl font-bold mt-2">0</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
