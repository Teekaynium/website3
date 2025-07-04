"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Video, FileText, Users, Clock, Star, Play, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const educationalResources = [
  {
    id: 1,
    title: "Business Plan Fundamentals",
    type: "Course",
    duration: "4 hours",
    level: "Beginner",
    rating: 4.8,
    students: 1250,
    description:
      "Learn how to create a comprehensive business plan that attracts investors and guides your business growth.",
    modules: ["Executive Summary", "Market Analysis", "Financial Projections", "Marketing Strategy"],
    instructor: "Dr. Sarah Mitchell",
    price: "Free",
  },
  {
    id: 2,
    title: "Fundraising Strategies for Startups",
    type: "Workshop",
    duration: "2 hours",
    level: "Intermediate",
    rating: 4.9,
    students: 890,
    description: "Master the art of raising capital from angel investors, VCs, and alternative funding sources.",
    modules: ["Pitch Deck Creation", "Investor Relations", "Valuation Methods", "Due Diligence"],
    instructor: "Michael Chen",
    price: "R299",
  },
  {
    id: 3,
    title: "Digital Marketing for Small Business",
    type: "Course",
    duration: "6 hours",
    level: "Beginner",
    rating: 4.7,
    students: 2100,
    description: "Build your online presence and attract customers through effective digital marketing strategies.",
    modules: ["Social Media Marketing", "SEO Basics", "Email Marketing", "Content Strategy"],
    instructor: "Lisa Johnson",
    price: "R199",
  },
  {
    id: 4,
    title: "Financial Management Essentials",
    type: "Course",
    duration: "5 hours",
    level: "Intermediate",
    rating: 4.6,
    students: 750,
    description: "Master cash flow management, budgeting, and financial planning for sustainable business growth.",
    modules: ["Cash Flow Analysis", "Budgeting", "Financial Statements", "Tax Planning"],
    instructor: "Robert Adams",
    price: "R399",
  },
]

const webinars = [
  {
    id: 1,
    title: "Scaling Your Business in 2024",
    date: "January 15, 2024",
    time: "2:00 PM - 3:30 PM",
    speaker: "Jane Williams, CEO of ScaleUp Solutions",
    attendees: 450,
    status: "upcoming",
  },
  {
    id: 2,
    title: "Navigating South African Business Regulations",
    date: "January 22, 2024",
    time: "10:00 AM - 11:30 AM",
    speaker: "Advocate John Mthembu",
    attendees: 320,
    status: "upcoming",
  },
]

const resources = [
  {
    id: 1,
    title: "Business Plan Template",
    type: "Template",
    downloads: 5200,
    description: "Comprehensive business plan template with examples and guidance.",
  },
  {
    id: 2,
    title: "Financial Model Spreadsheet",
    type: "Tool",
    downloads: 3800,
    description: "Excel template for creating financial projections and models.",
  },
  {
    id: 3,
    title: "Pitch Deck Examples",
    type: "Guide",
    downloads: 4100,
    description: "Collection of successful pitch decks from funded startups.",
  },
]

export function EducationPlatform() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white px-6 py-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/one-bridge-logo.jpeg"
              alt="One Bridge by One Stone Capital"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
            <Button className="bg-orange-500 hover:bg-orange-600">Sign Up for Free</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Educational Platform</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Empower your entrepreneurial journey with comprehensive courses, workshops, and resources designed to help
            you build and grow a successful business.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-white text-orange-600 hover:bg-gray-100">Browse Courses</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              Watch Free Preview
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">50+</h3>
              <p className="text-gray-600">Courses Available</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">10,000+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">4.8</h3>
              <p className="text-gray-600">Average Rating</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Video className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h3 className="text-2xl font-bold">200+</h3>
              <p className="text-gray-600">Hours of Content</p>
            </CardContent>
          </Card>
        </div>

        {/* Featured Courses */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationalResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <Badge variant="outline">{resource.type}</Badge>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{resource.duration}</span>
                        </div>
                        <Badge
                          className={`${
                            resource.level === "Beginner"
                              ? "bg-green-100 text-green-800"
                              : resource.level === "Intermediate"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {resource.level}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{resource.rating}</span>
                      </div>
                      <p className="text-sm text-gray-600">{resource.students} students</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{resource.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">What you'll learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {resource.modules.map((module, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {module}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Instructor: {resource.instructor}</p>
                      <p className="text-lg font-bold text-orange-600">{resource.price}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Upcoming Webinars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webinars.map((webinar) => (
              <Card key={webinar.id} className="border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p>
                      <strong>Date:</strong> {webinar.date}
                    </p>
                    <p>
                      <strong>Time:</strong> {webinar.time}
                    </p>
                    <p>
                      <strong>Speaker:</strong> {webinar.speaker}
                    </p>
                    <p>
                      <strong>Attendees:</strong> {webinar.attendees} registered
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge className="bg-green-100 text-green-800">{webinar.status}</Badge>
                    <Button className="bg-orange-500 hover:bg-orange-600">Register Free</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Free Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Free Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <FileText className="h-8 w-8 text-orange-500" />
                    <div>
                      <h3 className="font-bold">{resource.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {resource.type}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{resource.downloads} downloads</span>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-orange-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who are already building successful businesses with our comprehensive
            educational resources.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-orange-500 hover:bg-orange-600">Get Started Free</Button>
            <Button variant="outline">Browse All Courses</Button>
          </div>
        </section>
      </div>
    </div>
  )
}
