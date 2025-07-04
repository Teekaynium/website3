"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, FileText } from "lucide-react"
import Link from "next/link"

const documentSections = [
  { id: "business-plan", title: "Business Plan", description: "Upload your business plan" },
  { id: "invoices", title: "Invoices", description: "Upload your business plan" },
  { id: "purchase-orders", title: "Purchase Orders", description: "Upload your business plan" },
  { id: "intro-video", title: "Intro Video", description: "Upload your business plan" },
  { id: "financial-models", title: "Financial Models", description: "Upload your business plan" },
  { id: "latest-video", title: "Latest Video", description: "Upload your business plan" },
  { id: "bbbee-certificates", title: "BBBEE Certificates", description: "Upload your business plan" },
  { id: "historical-financial", title: "Historical Financial", description: "Upload your business plan" },
  { id: "corporate-documents", title: "Corporate Documents", description: "Upload your business plan" },
  { id: "parent-company", title: "Parent Company", description: "Upload your business plan" },
]

export function DocumentationContent() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Entrepreneur Documentation Upload Page</h1>
        <p className="text-gray-600">
          Upload and share valuable information that will assist potential funders in connecting with you and your
          business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {documentSections.map((section) => (
          <Card key={section.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>{section.title}</span>
              </CardTitle>
              <p className="text-sm text-gray-600">{section.description}</p>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-400 transition-colors">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Drop files here or click to select</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <Link href="/dashboard">
          <Button variant="outline" className="bg-orange-500 text-white hover:bg-orange-600">
            Return to Dashboard
          </Button>
        </Link>
        <Button className="bg-orange-500 hover:bg-orange-600">Upload Documents</Button>
      </div>
    </div>
  )
}
