"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Calendar, Users, Globe, Star } from "lucide-react"
import Link from "next/link"

export function DashboardContent() {
  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      {/* Welcome Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Hi, "First Name". Welcome to your dashboard!</h1>
      </div>

      {/* Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback>JD</AvatarFallback>
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
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">*Industry #1*</Badge>
                  <Badge variant="outline">*Industry #2*</Badge>
                  <Badge variant="outline">*Industry #3*</Badge>
                </div>
                <div>
                  <h3 className="font-medium mb-2">*Business Description*</h3>
                  <p className="text-gray-600 text-sm">Detailed business description would appear here...</p>
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
        </div>

        <div className="space-y-4">
          <Link href="/profile/update">
            <Button className="w-full bg-orange-500 hover:bg-orange-600">Update Profile</Button>
          </Link>
          <Link href="/documentation">
            <Button variant="outline" className="w-full bg-transparent">
              Upload Documents Here
            </Button>
          </Link>

          <div className="space-y-3">
            <Card className="bg-gray-600 text-white">
              <CardContent className="p-4">
                <h3 className="font-medium">Mentorship Platform</h3>
              </CardContent>
            </Card>
            <Card className="bg-gray-600 text-white">
              <CardContent className="p-4">
                <h3 className="font-medium">Fund Seeker Platform</h3>
              </CardContent>
            </Card>
            <Card className="bg-gray-600 text-white">
              <CardContent className="p-4">
                <h3 className="font-medium">Education Platform</h3>
              </CardContent>
            </Card>
            <Card className="bg-gray-600 text-white">
              <CardContent className="p-4">
                <h3 className="font-medium">Supplier & Customer Matching Platform</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact and Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>*email*</div>
            <div>*phone number*</div>
            <div>*website*</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>*certification #1*</div>
            <div>*certification #2*</div>
            <div>*certification #3*</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Projects and Specialties */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>*Project #1*</div>
            <div>*Project #2*</div>
            <div>*Project #3*</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Specialties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">*Specialty #1*</Badge>
              <Badge variant="secondary">*Specialty #2*</Badge>
              <Badge variant="secondary">*Specialty #3*</Badge>
              <Badge variant="secondary">*Specialty #4*</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Company Values and Business Goals */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Company Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-orange-500 text-white">*Value #1*</Badge>
              <Badge className="bg-orange-500 text-white">*Value #2*</Badge>
              <Badge className="bg-orange-500 text-white">*Value #3*</Badge>
              <Badge className="bg-orange-500 text-white">*Value #4*</Badge>
              <Badge className="bg-orange-500 text-white">*Value #5*</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Business Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">What are your long term business goals?</p>
          </CardContent>
        </Card>
      </div>

      {/* Core Services */}
      <Card>
        <CardHeader>
          <CardTitle>Core Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium">*Service #1*</h4>
              <p className="text-sm text-gray-600">*Description of Service #1*</p>
            </div>
            <div>
              <h4 className="font-medium">*Service #2*</h4>
              <p className="text-sm text-gray-600">*Description of Service #2*</p>
            </div>
            <div>
              <h4 className="font-medium">*Service #3*</h4>
              <p className="text-sm text-gray-600">*Description of Service #3*</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <h3 className="font-medium text-sm text-gray-600">Profile Completion</h3>
            <div className="mt-2">
              <Progress value={75} className="h-2" />
              <p className="text-xs text-gray-500 mt-1">75%</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <h3 className="font-medium text-sm text-gray-600">Funding Progress</h3>
            <div className="mt-2">
              <Progress value={45} className="h-2" />
              <p className="text-xs text-gray-500 mt-1">45%</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <h3 className="font-medium text-sm text-gray-600">Customer Matches</h3>
            <div className="text-3xl font-bold mt-2">0</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <h3 className="font-medium text-sm text-gray-600">Supplier Matches</h3>
            <div className="text-3xl font-bold mt-2">0</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
