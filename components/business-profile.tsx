"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Users, Globe, Star, X } from "lucide-react"
import { useState } from "react"

export function BusinessProfile() {
  const [showMessage, setShowMessage] = useState(false)
  const [showConnections, setShowConnections] = useState(false)

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Profile */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-semibold">*Company Name*</h2>
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
                </div>
              </div>

              <div className="space-y-4">
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
              </div>
            </CardContent>
          </Card>

          {/* Tabs Section */}
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="capital-ask">Capital Ask</TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6">
              {/* Contact Information and Certifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <span>📞</span>
                      <span>Contact Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>📧 *email*</div>
                    <div>📱 *phone number*</div>
                    <div>🌐 *website*</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <span>⭐</span>
                      <span>Certifications</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>🏆 *certification #1*</div>
                    <div>🏆 *certification #2*</div>
                    <div>🏆 *certification #3*</div>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Business Goals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-medium">Short Term:</h4>
                      <p className="text-gray-600">*Short Term Business Goals*</p>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-medium">Long Term:</h4>
                      <p className="text-gray-600">*Long Term Business Goals*</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Core Services</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
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
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="capital-ask" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Capital Ask</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">*Capital Ask*</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Use of Proceeds</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 text-center">
                    <div className="text-lg text-gray-600">*Use of Proceeds*</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Current Annual Revenue</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-green-600">*Current Annual Revenue*</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Forecasted Annual Revenue</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-green-600">*Forecasted Annual Revenue*</div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="documentation" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.from({ length: 14 }, (_, i) => (
                  <Card key={i + 1}>
                    <CardContent className="p-4 text-center">
                      <div className="text-lg font-medium mb-2">*Document {i + 1}*</div>
                      <div className="flex justify-center space-x-4">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Message Box */}
          {showMessage && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm">Message *First Name*</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setShowMessage(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Type your message here" />
                <Button className="w-full bg-gray-600 hover:bg-gray-700">Submit</Button>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="space-y-2">
            <Button className="w-full bg-gray-600 hover:bg-gray-700" onClick={() => setShowMessage(!showMessage)}>
              👤 Begin Funding Process
            </Button>
            <Button className="w-full bg-gray-600 hover:bg-gray-700">👤 Connect As Supplier</Button>
            <Button className="w-full bg-gray-600 hover:bg-gray-700">👤 Connect As Customer</Button>
            <Button className="w-full bg-gray-600 hover:bg-gray-700">👤 Connect As Partner</Button>
          </div>

          {/* Connected Companies */}
          {showConnections && (
            <div className="space-y-4">
              <Card className="bg-orange-100">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium mb-2">*Company Name* is connected to</div>
                    <Avatar className="h-12 w-12 mx-auto mb-2">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="font-medium">*Company Name*</div>
                    <div className="text-sm text-gray-600">*First Name* *Last Name*</div>
                    <Badge className="mt-2">*Industry #1*</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-100">
                <CardContent className="p-4">
                  <div className="text-center">
                    <Avatar className="h-12 w-12 mx-auto mb-2">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="font-medium">*Company Name*</div>
                    <div className="text-sm text-gray-600">*First Name* *Last Name*</div>
                    <Badge className="mt-2">*Industry #1*</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-100">
                <CardContent className="p-4">
                  <div className="text-center">
                    <Avatar className="h-12 w-12 mx-auto mb-2">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="font-medium">*Company Name*</div>
                    <div className="text-sm text-gray-600">*First Name* *Last Name*</div>
                    <Badge className="mt-2">*Industry #1*</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
