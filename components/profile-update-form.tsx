"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export function ProfileUpdateForm({ dashboardPath }: { dashboardPath: string }) {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Upload and share valuable information that will assist potential funders in connecting with you and your
          business
        </h1>
      </div>

      <div className="space-y-8">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Upload Your Personal Information & Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="First Name" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Last Name" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Email Address" />
              </div>
              <div>
                <Label htmlFor="phone">Cell No</Label>
                <Input id="phone" placeholder="Cell No" />
              </div>
              <div>
                <Label htmlFor="country">Country Code</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="za">South Africa (+27)</SelectItem>
                    <SelectItem value="us">United States (+1)</SelectItem>
                    <SelectItem value="uk">United Kingdom (+44)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <Input id="businessName" placeholder="Business Name" />
              </div>
            </div>
            <Button className="w-full bg-orange-500 hover:bg-orange-600">
              Update Personal Information & Contact Details
            </Button>
          </CardContent>
        </Card>

        {/* Company Details */}
        <Card>
          <CardHeader>
            <CardTitle>Company Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="businessHistory">Business History (Briefly)</Label>
              <Textarea
                id="businessHistory"
                placeholder="Write a brief business history in which you describe offerings..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label>Financial Services</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="banking">Banking</SelectItem>
                    <SelectItem value="insurance">Insurance</SelectItem>
                    <SelectItem value="investment">Investment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Business History (In Yrs) Count</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5+">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Financial Services</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="service1">Service 1</SelectItem>
                    <SelectItem value="service2">Service 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="businessDescription">Business Description</Label>
              <Textarea id="businessDescription" placeholder="Write a short description of your business..." />
            </div>

            <div className="space-y-4">
              <div>
                <Label>Current Annual Revenue</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-100k">R0 - R100k</SelectItem>
                    <SelectItem value="100k-500k">R100k - R500k</SelectItem>
                    <SelectItem value="500k+">R500k+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>How Old is Your Business (Years)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3+">3+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>How Many Employees Do You Have?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5</SelectItem>
                      <SelectItem value="6-20">6-20</SelectItem>
                      <SelectItem value="20+">20+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>What Company Do You Operate In?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600">Update Company Details</Button>
          </CardContent>
        </Card>

        {/* Job Ads */}
        <Card>
          <CardHeader>
            <CardTitle>Job Ads</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="jobTitle1">Job Title</Label>
                <Input id="jobTitle1" placeholder="Job Title" />
              </div>
              <div>
                <Label htmlFor="jobTitle2">Job Title</Label>
                <Input id="jobTitle2" placeholder="Job Title" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="lookingForSuppliers" />
                <Label htmlFor="lookingForSuppliers">What kind of funding are you looking for?</Label>
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Preparing a business plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business-plan">Preparing a business plan</SelectItem>
                  <SelectItem value="seed-funding">Seed funding</SelectItem>
                  <SelectItem value="series-a">Series A</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div>
                <Label>Are you looking for Suppliers, Customers, or Partners?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Suppliers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="suppliers">Suppliers</SelectItem>
                    <SelectItem value="customers">Customers</SelectItem>
                    <SelectItem value="partners">Partners</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>What are you looking for?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Funding" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="funding">Funding</SelectItem>
                    <SelectItem value="mentorship">Mentorship</SelectItem>
                    <SelectItem value="partnerships">Partnerships</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>What type of investors are you?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Consumer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consumer">Consumer</SelectItem>
                    <SelectItem value="institutional">Institutional</SelectItem>
                    <SelectItem value="angel">Angel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600">Update Contact Info</Button>
          </CardContent>
        </Card>

        {/* Description */}
        <Card>
          <CardHeader>
            <CardTitle>Description</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Description" />
            </div>

            <div>
              <Label htmlFor="detailedDescription">Detailed Description</Label>
              <Textarea id="detailedDescription" placeholder="Detailed Description" />
            </div>

            <div className="space-y-4">
              <div>
                <Label>Are you looking for Suppliers, Customers, or Partners?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Suppliers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="suppliers">Suppliers</SelectItem>
                    <SelectItem value="customers">Customers</SelectItem>
                    <SelectItem value="partners">Partners</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Business Category (Select)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>What are you looking for?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Everything" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="everything">Everything</SelectItem>
                    <SelectItem value="funding">Funding</SelectItem>
                    <SelectItem value="mentorship">Mentorship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Recent Projects</Label>
              <div className="space-y-2">
                <Input placeholder="Recent project 1" />
                <Input placeholder="Recent project 2" />
                <Input placeholder="Recent project 3" />
              </div>
            </div>

            <div>
              <Label>Attachments</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input placeholder="Attachment 1" />
                <Input placeholder="Attachment 2" />
                <Input placeholder="Attachment 3" />
              </div>
            </div>

            <div>
              <Label>Core Services</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Service 1" />
                <Input placeholder="Service 2" />
                <Input placeholder="Service 3" />
                <Input placeholder="Service 4" />
              </div>
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600">Update Complete Profile</Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Link href={dashboardPath}>
          <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600">
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  )
}
