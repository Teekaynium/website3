"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Calendar, Users, Star, Building2, Handshake } from "lucide-react"
import Link from "next/link"

const mockPartners = [
  {
    id: 1,
    name: "Supply Chain Solutions Ltd",
    position: "Business Development Manager",
    firstName: "David",
    lastName: "Williams",
    location: "Cape Town, South Africa",
    ageOfBusiness: "8 years",
    employees: "50-100",
    description: "Leading supplier of logistics and warehousing solutions for growing businesses across South Africa.",
    lookingFor: ["New Clients", "Strategic Partnerships", "Technology Partners"],
    rating: 4.7,
    partnerType: "Supplier",
    industry: ["Logistics", "Supply Chain"],
    services: ["Warehousing", "Distribution", "Inventory Management"],
  },
  {
    id: 2,
    name: "Digital Marketing Hub",
    position: "CEO",
    firstName: "Lisa",
    lastName: "Chen",
    location: "Johannesburg, South Africa",
    ageOfBusiness: "5 years",
    employees: "20-30",
    description: "Full-service digital marketing agency specializing in helping SMEs build their online presence.",
    lookingFor: ["Client Partnerships", "Referral Partners", "Technology Integration"],
    rating: 4.9,
    partnerType: "Service Provider",
    industry: ["Marketing", "Digital Services"],
    services: ["SEO", "Social Media", "Content Marketing", "PPC"],
  },
  {
    id: 3,
    name: "Manufacturing Co-op Network",
    position: "Network Coordinator",
    firstName: "James",
    lastName: "Molefe",
    location: "Durban, South Africa",
    ageOfBusiness: "12 years",
    employees: "200+",
    description: "Cooperative network connecting small manufacturers with bulk buyers and export opportunities.",
    lookingFor: ["New Members", "Export Partners", "Bulk Buyers"],
    rating: 4.5,
    partnerType: "Customer Network",
    industry: ["Manufacturing", "Export"],
    services: ["Bulk Purchasing", "Export Facilitation", "Quality Assurance"],
  },
  {
    id: 4,
    name: "Tech Innovation Labs",
    position: "Partnership Director",
    firstName: "Priya",
    lastName: "Patel",
    location: "Pretoria, South Africa",
    ageOfBusiness: "6 years",
    employees: "30-50",
    description: "R&D facility offering technology development and innovation services for emerging businesses.",
    lookingFor: ["Innovation Partners", "Joint Ventures", "Research Collaborations"],
    rating: 4.8,
    partnerType: "Technology Partner",
    industry: ["Technology", "R&D"],
    services: ["Product Development", "Prototyping", "Technical Consulting"],
  },
]

export function EntrepreneurMatches() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Find Your Business Partners</h1>
        <p className="text-gray-600">Connect with suppliers, customers, and strategic partners to grow your business</p>

        {/* Filters */}
        <Card className="mb-6 mt-6">
          <CardHeader>
            <CardTitle>Filter Partners</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Partner Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="supplier">Suppliers</SelectItem>
                  <SelectItem value="customer">Customers</SelectItem>
                  <SelectItem value="service-provider">Service Providers</SelectItem>
                  <SelectItem value="technology">Technology Partners</SelectItem>
                  <SelectItem value="strategic">Strategic Partners</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="logistics">Logistics</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
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
                  <SelectValue placeholder="Company Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">1-20 employees</SelectItem>
                  <SelectItem value="medium">21-100 employees</SelectItem>
                  <SelectItem value="large">100+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Minimum Rating</label>
                <Slider defaultValue={[4]} max={5} step={0.1} className="mt-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Business Experience (Years)</label>
                <Slider defaultValue={[2, 10]} max={20} step={1} className="mt-2" />
              </div>
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Filters</Button>
          </CardContent>
        </Card>
      </div>

      {/* Partner Cards */}
      <div className="space-y-6">
        {mockPartners.map((partner) => (
          <Card key={partner.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback className="bg-blue-100 text-blue-700 text-lg font-semibold">
                      {partner.firstName[0]}
                      {partner.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                    <p className="text-gray-600 font-medium">
                      {partner.position} | {partner.firstName} {partner.lastName}
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{partner.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{partner.ageOfBusiness}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{partner.employees}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{partner.rating}</span>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 font-medium">{partner.partnerType}</Badge>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {partner.industry.map((ind) => (
                    <Badge key={ind} variant="outline" className="border-blue-200 text-blue-700">
                      {ind}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{partner.description}</p>

                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-700">Services: </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {partner.services.map((service) => (
                      <Badge key={service} variant="secondary" className="bg-gray-100 text-gray-700">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-gray-700">Looking For: </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {partner.lookingFor.map((item) => (
                      <Badge key={item} className="bg-green-500 text-white hover:bg-green-600">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" className="border-gray-300 hover:bg-gray-50 bg-transparent">
                    <Building2 className="h-4 w-4 mr-2" />
                    View Company
                  </Button>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    <Handshake className="h-4 w-4 mr-2" />
                    Connect
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="bg-gray-600 text-white hover:bg-gray-700 mr-4">
          Load More Partners
        </Button>
        <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 bg-transparent">
          Save Search Criteria
        </Button>
      </div>

      <div className="mt-6">
        <Link href="/entrepreneur/dashboard">
          <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600">
            ← Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  )
}
