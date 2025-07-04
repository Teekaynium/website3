export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  role: "entrepreneur" | "funder" | "supplier" | "customer" | "admin" | "mentor"
  isActive: boolean
  createdAt: string
  updatedAt: string
  profilePicture?: string
  businessId?: string
}

export interface Business {
  id: string
  name: string
  description: string
  industry: string[]
  location: string
  employees: string
  website?: string
  ageOfBusiness: string
  currentRevenue?: string
  forecastedRevenue?: string
  fundingNeeded?: boolean
  fundingAmount?: number
  fundingTypes?: string[]
  lookingFor: string[]
  rating: number
  isVerified: boolean
  ownerId: string
  createdAt: string
  updatedAt: string
}

export interface Document {
  id: string
  filename: string
  originalName: string
  category: string
  path: string
  size: number
  mimeType: string
  uploadedAt: string
  userId: string
  businessId?: string
  isShared: boolean
  sharedWith: string[]
  permissions: string[]
}

export interface Match {
  id: string
  score: number
  matchType: "funding" | "supplier" | "customer" | "partner" | "mentor"
  business: Business
  reasons: string[]
  algorithm: string
  createdAt: string
}

export interface Connection {
  id: string
  fromUserId: string
  toUserId: string
  connectionType: "funding" | "supplier" | "customer" | "partner" | "mentor"
  status: "pending" | "accepted" | "rejected" | "blocked"
  createdAt: string
  updatedAt: string
  notes?: string
}

export interface Message {
  id: string
  fromUserId: string
  toUserId: string
  content: string
  sentAt: string
  read: boolean
  connectionId?: string
  conversationId: string
  messageType: "text" | "file" | "system"
  attachments?: string[]
}

export interface FundingRequest {
  id: string
  entrepreneurId: string
  funderId?: string
  businessId: string
  amount: number
  currency: string
  fundingType: string
  useOfProceeds: string
  status: "draft" | "submitted" | "under_review" | "approved" | "rejected" | "funded"
  createdAt: string
  updatedAt: string
  documents: string[]
  dueDate?: string
  terms?: any
}

export interface Investment {
  id: string
  funderId: string
  entrepreneurId: string
  businessId: string
  amount: number
  currency: string
  investmentType: "equity" | "debt" | "grant" | "convertible"
  status: "active" | "completed" | "defaulted" | "exited"
  createdAt: string
  equityPercentage?: number
  interestRate?: number
  maturityDate?: string
  expectedReturn?: number
  actualReturn?: number
}

export interface AnalyticsEvent {
  id: string
  userId: string
  activity: string
  metadata: any
  timestamp: string
  sessionId: string
  platform: string
}

export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  read: boolean
  createdAt: string
  actionUrl?: string
  data?: any
}
