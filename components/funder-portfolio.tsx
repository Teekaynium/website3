"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TrendingUp, TrendingDown, DollarSign, MapPin, Users } from "lucide-react"
import Link from "next/link"

const portfolioInvestments = [
  {
    id: 1,
    companyName: "TechStart Solutions",
    founder: "Sarah Johnson",
    industry: "Technology",
    location: "Cape Town, South Africa",
    investmentAmount: "R2.5M",
    investmentDate: "March 2024",
    equityPercentage: 15,
    currentValuation: "R18M",
    status: "Active",
    performance: "+25%",
    performanceType: "positive",
    employees: "12",
    lastUpdate: "2 days ago",
  },
  {
    id: 2,
    companyName: "Green Energy Co",
    founder: "Michael Ndaba",
    industry: "Energy",
    location: "Johannesburg, South Africa",
    investmentAmount: "R5M",
    investmentDate: "January 2024",
    equityPercentage: 20,
    currentValuation: "R28M",
    status: "Active",
    performance: "+12%",
    performanceType: "positive",
    employees: "28",
    lastUpdate: "1 week ago",
  },
  {
    id: 3,
    companyName: "AgriTech Innovations",
    founder: "Nomsa Mthembu",
    industry: "Agriculture",
    location: "Durban, South Africa",
    investmentAmount: "R1.2M",
    investmentDate: "June 2024",
    equityPercentage: 12,
    currentValuation: "R8.5M",
    status: "Active",
    performance: "-3%",
    performanceType: "negative",
    employees: "8",
    lastUpdate: "3 days ago",
  },
]

export function FunderPortfolio() {
  const totalInvested = "R8.7M"
  const totalValuation = "R54.5M"
  const totalReturn = "+18.2%"
  const activeInvestments = portfolioInvestments.length

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Investment Portfolio</h1>
        <p className="text-gray-600">Track and manage your investment portfolio performance</p>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <DollarSign className="h-6 w-6 text-blue-500" />
              <span className="text-sm text-gray-600">Total Invested</span>
            </div>
            <h3 className="text-2xl font-bold">{totalInvested}</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <TrendingUp className="h-6 w-6 text-green-500" />
              <span className="text-sm text-gray-600">Portfolio Value</span>
            </div>
            <h3 className="text-2xl font-bold">{totalValuation}</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <TrendingUp className="h-6 w-6 text-orange-500" />
              <span className="text-sm text-gray-600">Total Return</span>
            </div>
            <h3 className="text-2xl font-bold text-green-600">{totalReturn}</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Users className="h-6 w-6 text-purple-500" />
              <span className="text-sm text-gray-600">Active Investments</span>
            </div>
            <h3 className="text-2xl font-bold">{activeInvestments}</h3>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Performance Chart Placeholder */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Portfolio Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Portfolio performance chart would be displayed here</p>
          </div>
        </CardContent>
      </Card>

      {/* Investment Details */}
      <Card>
        <CardHeader>
          <CardTitle>Investment Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {portfolioInvestments.map((investment) => (
              <div key={investment.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback className="bg-orange-100 text-orange-700">
                        {investment.companyName
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">{investment.companyName}</h3>
                      <p className="text-gray-600">Founded by {investment.founder}</p>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{investment.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{investment.employees} employees</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-2">
                      {investment.industry}
                    </Badge>
                    <div
                      className={`flex items-center space-x-1 ${
                        investment.performanceType === "positive" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {investment.performanceType === "positive" ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span className="font-medium">{investment.performance}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Investment Amount</p>
                    <p className="font-semibold">{investment.investmentAmount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Equity</p>
                    <p className="font-semibold">{investment.equityPercentage}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Current Valuation</p>
                    <p className="font-semibold">{investment.currentValuation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Investment Date</p>
                    <p className="font-semibold">{investment.investmentDate}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800">{investment.status}</Badge>
                    <span className="text-sm text-gray-500">Updated {investment.lastUpdate}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      View Reports
                    </Button>
                    <Button variant="outline" size="sm">
                      Contact Founder
                    </Button>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      Manage Investment
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 flex justify-between">
        <Link href="/funder">
          <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600">
            ← Return to Dashboard
          </Button>
        </Link>
        <div className="space-x-4">
          <Button variant="outline">Export Portfolio Report</Button>
          <Button className="bg-orange-500 hover:bg-orange-600">Add New Investment</Button>
        </div>
      </div>
    </div>
  )
}
