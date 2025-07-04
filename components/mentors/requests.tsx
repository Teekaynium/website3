"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Calendar, Users, Clock, CheckCircle, XCircle } from "lucide-react"

const mentorshipRequests = [
  {
    id: 1,
    entrepreneurName: "Sarah Johnson",
    businessName: "TechStart Solutions",
    industry: "Technology",
    location: "Cape Town, South Africa",
    businessAge: "2 years",
    employees: "5-10",
    requestDate: "2 days ago",
    mentorshipNeeds:
      "Need guidance on scaling my AI-powered logistics platform, particularly around fundraising strategy and team building.",
    status: "pending",
    urgency: "high",
  },
  {
    id: 2,
    entrepreneurName: "Michael Ndaba",
    businessName: "Green Energy Co",
    industry: "Energy",
    location: "Johannesburg, South Africa",
    businessAge: "3 years",
    employees: "15-25",
    requestDate: "5 days ago",
    mentorshipNeeds:
      "Looking for mentorship on expanding into new markets and developing strategic partnerships in the renewable energy sector.",
    status: "pending",
    urgency: "medium",
  },
  {
    id: 3,
    entrepreneurName: "Nomsa Mthembu",
    businessName: "AgriTech Innovations",
    industry: "Agriculture",
    location: "Durban, South Africa",
    businessAge: "1 year",
    employees: "3-5",
    requestDate: "1 week ago",
    mentorshipNeeds: "Need help with product development and go-to-market strategy for my IoT farming solutions.",
    status: "pending",
    urgency: "low",
  },
]

export function MentorshipRequests() {
  const handleAcceptRequest = (requestId: number) => {
    console.log(`Accepting request ${requestId}`)
    // Handle accept logic
  }

  const handleDeclineRequest = (requestId: number) => {
    console.log(`Declining request ${requestId}`)
    // Handle decline logic
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Mentorship Requests</h1>
        <p className="text-gray-600">Review and respond to entrepreneurs seeking your guidance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="h-6 w-6 text-orange-500" />
              <span className="text-sm text-gray-600">Pending Requests</span>
            </div>
            <h3 className="text-3xl font-bold">{mentorshipRequests.filter((r) => r.status === "pending").length}</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span className="text-sm text-gray-600">Accepted This Month</span>
            </div>
            <h3 className="text-3xl font-bold">8</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Users className="h-6 w-6 text-blue-500" />
              <span className="text-sm text-gray-600">Active Mentees</span>
            </div>
            <h3 className="text-3xl font-bold">12</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <XCircle className="h-6 w-6 text-red-500" />
              <span className="text-sm text-gray-600">Response Rate</span>
            </div>
            <h3 className="text-3xl font-bold">94%</h3>
          </CardContent>
        </Card>
      </div>

      {/* Requests List */}
      <div className="space-y-6">
        {mentorshipRequests.map((request) => (
          <Card key={request.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback className="bg-orange-100 text-orange-700 text-lg font-semibold">
                      {request.entrepreneurName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{request.businessName}</h3>
                    <p className="text-gray-600 font-medium">{request.entrepreneurName}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{request.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{request.businessAge}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{request.employees}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge
                    className={`mb-2 ${
                      request.urgency === "high"
                        ? "bg-red-100 text-red-800"
                        : request.urgency === "medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                    }`}
                  >
                    {request.urgency} priority
                  </Badge>
                  <p className="text-sm text-gray-500">{request.requestDate}</p>
                </div>
              </div>

              <div className="mb-4">
                <Badge variant="outline" className="mb-3">
                  {request.industry}
                </Badge>
                <div>
                  <h4 className="font-medium mb-2">Mentorship Needs:</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{request.mentorshipNeeds}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-blue-100 text-blue-800">{request.status}</Badge>
                </div>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    className="border-gray-300 hover:bg-gray-50 bg-transparent"
                    onClick={() => handleDeclineRequest(request.id)}
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Decline
                  </Button>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => handleAcceptRequest(request.id)}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Accept Request
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="bg-gray-600 text-white hover:bg-gray-700">
          Load More Requests
        </Button>
      </div>
    </div>
  )
}
