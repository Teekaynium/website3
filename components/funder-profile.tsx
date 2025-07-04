"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, TrendingUp, Users, Smile } from "lucide-react"
import Link from "next/link"

export function FunderProfile() {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Profile Header */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback>FN</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">*First Name* *Last Name*</h2>
                <p className="text-gray-600">*Position*</p>
                <p className="text-gray-600">*Name of Funder/Institution*</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-1 mb-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">*Location*</span>
              </div>
              <Link href="/dashboard">
                <Button className="bg-orange-500 hover:bg-orange-600">Go to Dashboard</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Investment Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <TrendingUp className="h-6 w-6 text-orange-500" />
              <span className="text-sm text-gray-600">Active Investments</span>
            </div>
            <h3 className="text-2xl font-bold">*Number of Active Investments*</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-2xl text-orange-500">$</span>
              <span className="text-sm text-gray-600">Portfolio Value</span>
            </div>
            <h3 className="text-2xl font-bold">*Portfolio Value*</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Users className="h-6 w-6 text-orange-500" />
              <span className="text-sm text-gray-600">Number of Entrepreneurs Funded</span>
            </div>
            <h3 className="text-2xl font-bold">*Number of Entrepreneurs Funded*</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Smile className="h-6 w-6 text-orange-500" />
              <span className="text-sm text-gray-600">Success Rate</span>
            </div>
            <h3 className="text-2xl font-bold">*Success Rate*</h3>
          </CardContent>
        </Card>
      </div>

      {/* Investment Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Investment Preferences & Filters</CardTitle>
          <p className="text-gray-600">Your current funding criteria and preferences for SMME matching</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Preferred Industries</h4>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-orange-200 text-orange-800">*Industry #1*</Badge>
              <Badge className="bg-orange-200 text-orange-800">*Industry #2*</Badge>
              <Badge className="bg-orange-200 text-orange-800">*Industry #3*</Badge>
              <Badge className="bg-orange-200 text-orange-800">*Industry #4*</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Business Age</h4>
              <p className="text-gray-600">*Business Age*</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Risk Tolerance</h4>
              <p className="text-gray-600">*Risk Tolerance*</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Funding Range</h4>
            <p className="text-gray-600">*Funding Range*</p>
          </div>

          <div>
            <h4 className="font-medium mb-3">Funding Types</h4>
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
  )
}
