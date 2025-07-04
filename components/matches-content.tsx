"use client"

import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Calendar, Users, Star } from "lucide-react"

const mockCompanies = [
  {
    id: 1,
    name: "Company Name",
    position: "*Position*",
    firstName: "*First Name*",
    lastName: "*Last Name*",
    location: "*Location*",
    ageOfBusiness: "*Age of Business*",
    employees: "*Number of Employees*",
    description: "*Business Description*",
    lookingFor: ["Suppliers", "Partners", "Clients"],
    rating: 5,
  },
  // Add more mock companies...
]

export function MatchesContent() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Supplier & Customer Matching Platform</h1>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Match with Suppliers, Customers, and Partners</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Business Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Industries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="za">South Africa</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="South Africa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gauteng">Gauteng</SelectItem>
                  <SelectItem value="cape-town">Cape Town</SelectItem>
                  <SelectItem value="durban">Durban</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Minimum 5 Star Rating</label>
                <Slider defaultValue={[4]} max={5} step={1} className="mt-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Business Age</label>
                <Slider defaultValue={[2]} max={10} step={1} className="mt-2" />
              </div>
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Filters</Button>
          </CardContent>
        </Card>
      </div>

      {/* Company Cards */}
      <div className="space-y-6">
        {mockCompanies.map((company) => (
          <Card key={company.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{company.name}</h3>
                    <p className="text-gray-600">
                      {company.position} | {company.firstName} {company.lastName}
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{company.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{company.ageOfBusiness}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{company.employees}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm">{company.rating}-star rating</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-gray-600 text-sm mb-4">{company.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium">Looking For: </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {company.lookingFor.map((item) => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600">Connect</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="bg-gray-600 text-white hover:bg-gray-700">
          Refresh Matches
        </Button>
      </div>

      <div className="mt-6">
        <Link href="/dashboard">
          <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600">
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  )
}
