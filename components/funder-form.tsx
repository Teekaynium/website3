"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export function FunderForm() {
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

        {/* Funder Information */}
        <Card>
          <CardHeader>
            <CardTitle>Funder Information - What Kind of Businesses Do You Fund?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>What industries do you fund?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Financial Services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="financial">Financial Services</SelectItem>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>What is the minimum funding you provide?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Financial Services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10k">R10,000</SelectItem>
                    <SelectItem value="50k">R50,000</SelectItem>
                    <SelectItem value="100k">R100,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label>Age of Business (Years)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-2">0-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5+">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Number of Employees</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10</SelectItem>
                    <SelectItem value="11-50">11-50</SelectItem>
                    <SelectItem value="50+">50+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Country</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="ZAR" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="zar">ZAR</SelectItem>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label>State/Province</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gauteng">Gauteng</SelectItem>
                    <SelectItem value="western-cape">Western Cape</SelectItem>
                    <SelectItem value="kwazulu-natal">KwaZulu-Natal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Current Annual Revenue</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="R 500k" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100k">R 100k</SelectItem>
                    <SelectItem value="500k">R 500k</SelectItem>
                    <SelectItem value="1m">R 1M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Do they have to have a business plan?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Yes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Real Bankruptcy within the last 7 years?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="No" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>What kind of funding do you offer?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Debt" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="debt">Debt</SelectItem>
                      <SelectItem value="equity">Equity</SelectItem>
                      <SelectItem value="grant">Grant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>How much capital are you able to dispense?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="R 100k" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100k">R 100k</SelectItem>
                      <SelectItem value="500k">R 500k</SelectItem>
                      <SelectItem value="1m">R 1M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>What capital are you able to accommodate from individual entrepreneurs</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="R 100k" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100k">R 100k</SelectItem>
                      <SelectItem value="500k">R 500k</SelectItem>
                      <SelectItem value="1m">R 1M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Acceptable use of proceeds</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Expanding a business under" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="expansion">Expanding a business</SelectItem>
                      <SelectItem value="equipment">Equipment purchase</SelectItem>
                      <SelectItem value="working-capital">Working capital</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Risk Tolerance</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="High" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600">Update Business Details</Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Link href="/funder">
          <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600">
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  )
}
