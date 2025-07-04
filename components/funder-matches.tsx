"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Calendar, Users, Star, DollarSign } from "lucide-react"
import Link from "next/link"

const mockEntrepreneurs = [
  {
    id: 1,
    name: "TechStart Solutions",
    position: "CEO",
    firstName: "Sarah",
    lastName: "Johnson",
    location: "Cape Town, South Africa",
    currentRevenue: "R500k - R1M",
    ageOfBusiness: "2 years",
    employees: "5-10",
    description: "AI-powered logistics platform helping small businesses optimize their supply chain operations.",
    lookingFor: ["Series A Funding", "Strategic Partnership", "Mentorship", "Market Expansion"],
    rating: 4.8,
    fundingNeeded: true,
    fundingAmount: "R2.5M",
    industry: ["Technology", "Logistics"],
  },
  {
    id: 2,
    name: "Green Energy Co",
    position: "Founder",
    firstName: "Michael",
    lastName: "Ndaba",
    location: "Johannesburg, South Africa",
    currentRevenue: "R1M - R5M",
    ageOfBusiness: "3 years",
    employees: "15-25",
    description: "Renewable energy solutions for rural communities, focusing on solar power installations.",
    lookingFor: ["Growth Capital", "Equipment Financing", "Government Partnerships"],
    rating: 4.6,
    fundingNeeded: true,
    fundingAmount: "R5M",
    industry: ["Energy", "Sustainability"],
  },
  {
    id: 3,
    name: "AgriTech Innovations",
    position: "Co-Founder",
    firstName: "Nomsa",
    lastName: "Mthembu",
    location: "Durban, South Africa",
    currentRevenue: "R200k - R500k",
    ageOfBusiness: "1 year",
    employees: "3-5",
    description: "Smart farming solutions using IoT sensors to help small-scale farmers increase crop yields.",
    lookingFor: ["Seed Funding", "Technical Mentorship", "Market Validation"],
    rating: 4.9,
    fundingNeeded: true,
    fundingAmount: "R1.2M",
    industry: ["Agriculture", "Technology"],
  },
]

export function FunderMatches() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Match With Entrepreneurs Seeking Funding</h1>
        <p className="text-gray-600">Discover high-potential businesses that align with your investment criteria</p>

        {/* Filters */}
        <Card className="mb-6 mt-6">
          <CardHeader>
            <CardTitle>Filter Entrepreneurs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="energy">Energy</SelectItem>
                  <SelectItem value="agriculture">Agriculture</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Funding Stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seed">Seed</SelectItem>
                  <SelectItem value="series-a">Series A</SelectItem>
                  <SelectItem value="series-b">Series B</SelectItem>
                  <SelectItem value="growth">Growth</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cape-town">Cape Town</SelectItem>
                  <SelectItem value="johannesburg">Johannesburg</SelectItem>
                  <SelectItem value="durban">Durban</SelectItem>
                  <SelectItem value="pretoria">Pretoria</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Funding Amount" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1m">R0 - R1M</SelectItem>
                  <SelectItem value="1m-5m">R1M - R5M</SelectItem>
                  <SelectItem value="5m-10m">R5M - R10M</SelectItem>
                  <SelectItem value="10m+">R10M+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Minimum Rating</label>
                <Slider defaultValue={[4]} max={5} step={0.1} className="mt-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Business Age (Years)</label>
                <Slider defaultValue={[1, 5]} max={10} step={1} className="mt-2" />
              </div>
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Filters</Button>
          </CardContent>
        </Card>
      </div>

      {/* Entrepreneur Cards */}
      <div className="space-y-6">
        {mockEntrepreneurs.map((entrepreneur) => (
          <Card key={entrepreneur.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback className="bg-orange-100 text-orange-700 text-lg font-semibold">
                      {entrepreneur.firstName[0]}
                      {entrepreneur.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{entrepreneur.name}</h3>
                    <p className="text-gray-600 font-medium">
                      {entrepreneur.position} | {entrepreneur.firstName} {entrepreneur.lastName}
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{entrepreneur.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{entrepreneur.currentRevenue}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{entrepreneur.ageOfBusiness}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{entrepreneur.employees}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{entrepreneur.rating}</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800 font-medium">
                    Seeking {entrepreneur.fundingAmount}
                  </Badge>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {entrepreneur.industry.map((ind) => (
                    <Badge key={ind} variant="outline" className="border-orange-200 text-orange-700">
                      {ind}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{entrepreneur.description}</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-gray-700">Looking For: </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {entrepreneur.lookingFor.map((item) => (
                      <Badge key={item} className="bg-orange-500 text-white hover:bg-orange-600">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" className="border-gray-300 hover:bg-gray-50 bg-transparent">
                    View Full Profile
                  </Button>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Begin Funding Process</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="bg-gray-600 text-white hover:bg-gray-700 mr-4">
          Load More Entrepreneurs
        </Button>
        <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent">
          Save Search Criteria
        </Button>
      </div>

      <div className="mt-6">
        <Link href="/funder">
          <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600">
            ← Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  )
}
