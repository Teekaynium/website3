"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Users, MessageSquare, Calendar, Award, Clock } from "lucide-react"

export function MentorDashboard() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Mentor!</h1>
        <p className="text-gray-600">Here's an overview of your mentoring activities</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
              <Calendar className="h-6 w-6 text-green-500" />
              <span className="text-sm text-gray-600">Sessions This Month</span>
            </div>
            <h3 className="text-3xl font-bold">28</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="h-6 w-6 text-orange-500" />
              <span className="text-sm text-gray-600">Hours Mentored</span>
            </div>
            <h3 className="text-3xl font-bold">156</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Award className="h-6 w-6 text-purple-500" />
              <span className="text-sm text-gray-600">Success Stories</span>
            </div>
            <h3 className="text-3xl font-bold">8</h3>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Mentees */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Mentees</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Sarah Johnson", business: "TechStart Solutions", progress: 75, status: "Active" },
              { name: "Michael Ndaba", business: "Green Energy Co", progress: 60, status: "Active" },
              { name: "Nomsa Mthembu", business: "AgriTech Innovations", progress: 90, status: "Graduated" },
            ].map((mentee, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>
                    {mentee.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-medium">{mentee.name}</h4>
                  <p className="text-sm text-gray-600">{mentee.business}</p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{mentee.progress}%</span>
                    </div>
                    <Progress value={mentee.progress} className="h-2" />
                  </div>
                </div>
                <Badge variant={mentee.status === "Active" ? "default" : "secondary"}>{mentee.status}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Sessions */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { mentee: "Sarah Johnson", topic: "Business Plan Review", time: "Today, 2:00 PM", type: "Video Call" },
              { mentee: "Michael Ndaba", topic: "Funding Strategy", time: "Tomorrow, 10:00 AM", type: "In-Person" },
              { mentee: "David Williams", topic: "Market Analysis", time: "Friday, 3:00 PM", type: "Video Call" },
            ].map((session, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{session.topic}</h4>
                  <Badge variant="outline">{session.type}</Badge>
                </div>
                <p className="text-sm text-gray-600">with {session.mentee}</p>
                <p className="text-sm text-orange-600 font-medium">{session.time}</p>
              </div>
            ))}
            <Button className="w-full bg-orange-500 hover:bg-orange-600">View All Sessions</Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Messages */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5" />
            <span>Recent Messages</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                from: "Sarah Johnson",
                message: "Thank you for the feedback on my business plan. I've made the revisions we discussed.",
                time: "2 hours ago",
                unread: true,
              },
              {
                from: "Michael Ndaba",
                message: "Could we schedule an additional session this week to discuss the investor meeting?",
                time: "5 hours ago",
                unread: true,
              },
              {
                from: "Nomsa Mthembu",
                message: "Great news! We secured our first major client. Thank you for all your guidance.",
                time: "1 day ago",
                unread: false,
              },
            ].map((message, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg ${message.unread ? "bg-orange-50 border-orange-200" : ""}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{message.from}</h4>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>
                <p className="text-sm text-gray-600">{message.message}</p>
                {message.unread && <Badge className="mt-2 bg-orange-500 text-white text-xs">New</Badge>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
