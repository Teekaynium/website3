// Comprehensive API integration system for One Bridge platform

export class UserManagementAPI {
  async createUser(userData: any) {
    const response = await fetch("/api/users/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
    return response.json()
  }

  async updateUser(userId: string, userData: any) {
    const response = await fetch(`/api/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
    return response.json()
  }

  async getUserProfile(userId: string) {
    const response = await fetch(`/api/users/${userId}`)
    return response.json()
  }

  async deleteUser(userId: string) {
    const response = await fetch(`/api/users/${userId}`, {
      method: "DELETE",
    })
    return response.json()
  }
}

export class BusinessDataAPI {
  async createBusiness(businessData: any) {
    const response = await fetch("/api/businesses/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(businessData),
    })
    return response.json()
  }

  async updateBusiness(businessId: string, businessData: any) {
    const response = await fetch(`/api/businesses/${businessId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(businessData),
    })
    return response.json()
  }

  async getBusinessProfile(businessId: string) {
    const response = await fetch(`/api/businesses/${businessId}`)
    return response.json()
  }

  async searchBusinesses(criteria: any) {
    const response = await fetch("/api/businesses/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(criteria),
    })
    return response.json()
  }
}

export class DocumentManagementAPI {
  async uploadDocument(file: File, metadata: any) {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("metadata", JSON.stringify(metadata))

    const response = await fetch("/api/documents/upload", {
      method: "POST",
      body: formData,
    })
    return response.json()
  }

  async getDocuments(userId: string, category?: string) {
    const url = category ? `/api/documents/${userId}?category=${category}` : `/api/documents/${userId}`
    const response = await fetch(url)
    return response.json()
  }

  async shareDocument(documentId: string, recipientId: string, permissions: string[]) {
    const response = await fetch("/api/documents/share", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ documentId, recipientId, permissions }),
    })
    return response.json()
  }

  async deleteDocument(documentId: string) {
    const response = await fetch(`/api/documents/${documentId}`, {
      method: "DELETE",
    })
    return response.json()
  }
}

export class MatchingEngineAPI {
  async findMatches(userId: string, matchType: string, criteria: any) {
    const response = await fetch("/api/matching/find", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, matchType, criteria }),
    })
    return response.json()
  }

  async createConnection(fromUserId: string, toUserId: string, connectionType: string) {
    const response = await fetch("/api/matching/connect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fromUserId, toUserId, connectionType }),
    })
    return response.json()
  }

  async updateConnectionStatus(connectionId: string, status: string) {
    const response = await fetch(`/api/matching/connections/${connectionId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
    return response.json()
  }

  async getConnections(userId: string) {
    const response = await fetch(`/api/matching/connections/${userId}`)
    return response.json()
  }
}

export class MessagingAPI {
  async sendMessage(fromUserId: string, toUserId: string, content: string, connectionId?: string) {
    const response = await fetch("/api/messages/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fromUserId, toUserId, content, connectionId }),
    })
    return response.json()
  }

  async getMessages(userId: string, conversationId?: string) {
    const url = conversationId ? `/api/messages/${userId}?conversationId=${conversationId}` : `/api/messages/${userId}`
    const response = await fetch(url)
    return response.json()
  }

  async markAsRead(messageId: string) {
    const response = await fetch(`/api/messages/${messageId}/read`, {
      method: "PATCH",
    })
    return response.json()
  }

  async getConversations(userId: string) {
    const response = await fetch(`/api/messages/conversations/${userId}`)
    return response.json()
  }
}

export class FundingAPI {
  async createFundingRequest(requestData: any) {
    const response = await fetch("/api/funding/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    })
    return response.json()
  }

  async updateFundingRequest(requestId: string, updateData: any) {
    const response = await fetch(`/api/funding/requests/${requestId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
    return response.json()
  }

  async getFundingRequests(userId: string, role: string) {
    const response = await fetch(`/api/funding/requests?userId=${userId}&role=${role}`)
    return response.json()
  }

  async approveFunding(requestId: string, approvalData: any) {
    const response = await fetch(`/api/funding/requests/${requestId}/approve`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(approvalData),
    })
    return response.json()
  }
}

export class AnalyticsAPI {
  async trackUserActivity(userId: string, activity: string, metadata: any) {
    const response = await fetch("/api/analytics/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, activity, metadata, timestamp: new Date().toISOString() }),
    })
    return response.json()
  }

  async getUserAnalytics(userId: string, timeRange: string) {
    const response = await fetch(`/api/analytics/user/${userId}?timeRange=${timeRange}`)
    return response.json()
  }

  async getPlatformAnalytics(timeRange: string) {
    const response = await fetch(`/api/analytics/platform?timeRange=${timeRange}`)
    return response.json()
  }

  async getMatchingMetrics(userId: string) {
    const response = await fetch(`/api/analytics/matching/${userId}`)
    return response.json()
  }
}

export class IntegrationAPI {
  // Stripe Integration
  async createStripeCustomer(customerData: any) {
    const response = await fetch("/api/integrations/stripe/customer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customerData),
    })
    return response.json()
  }

  async createPaymentIntent(amount: number, currency: string, customerId: string) {
    const response = await fetch("/api/integrations/stripe/payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, currency, customerId }),
    })
    return response.json()
  }

  // QuickBooks Integration
  async syncQuickBooksData(userId: string, accessToken: string) {
    const response = await fetch("/api/integrations/quickbooks/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, accessToken }),
    })
    return response.json()
  }

  async getQuickBooksData(userId: string, dataType: string) {
    const response = await fetch(`/api/integrations/quickbooks/${userId}/${dataType}`)
    return response.json()
  }

  // CRM Integration (Salesforce/HubSpot)
  async syncCRMData(userId: string, crmType: string, accessToken: string) {
    const response = await fetch("/api/integrations/crm/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, crmType, accessToken }),
    })
    return response.json()
  }

  async createCRMLead(leadData: any, crmType: string) {
    const response = await fetch("/api/integrations/crm/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ leadData, crmType }),
    })
    return response.json()
  }
}

export class NotificationAPI {
  async sendNotification(userId: string, notification: any) {
    const response = await fetch("/api/notifications/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, ...notification }),
    })
    return response.json()
  }

  async getNotifications(userId: string, unreadOnly = false) {
    const response = await fetch(`/api/notifications/${userId}?unreadOnly=${unreadOnly}`)
    return response.json()
  }

  async markNotificationAsRead(notificationId: string) {
    const response = await fetch(`/api/notifications/${notificationId}/read`, {
      method: "PATCH",
    })
    return response.json()
  }

  async updateNotificationPreferences(userId: string, preferences: any) {
    const response = await fetch(`/api/notifications/preferences/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(preferences),
    })
    return response.json()
  }
}

// Main API class that combines all services
export class OneBridgeAPI {
  public users: UserManagementAPI
  public businesses: BusinessDataAPI
  public documents: DocumentManagementAPI
  public matching: MatchingEngineAPI
  public messaging: MessagingAPI
  public funding: FundingAPI
  public analytics: AnalyticsAPI
  public integrations: IntegrationAPI
  public notifications: NotificationAPI

  constructor() {
    this.users = new UserManagementAPI()
    this.businesses = new BusinessDataAPI()
    this.documents = new DocumentManagementAPI()
    this.matching = new MatchingEngineAPI()
    this.messaging = new MessagingAPI()
    this.funding = new FundingAPI()
    this.analytics = new AnalyticsAPI()
    this.integrations = new IntegrationAPI()
    this.notifications = new NotificationAPI()
  }

  // Convenience methods for common operations
  async registerEntrepreneur(userData: any, businessData: any) {
    try {
      const user = await this.users.createUser({ ...userData, role: "entrepreneur" })
      const business = await this.businesses.createBusiness({ ...businessData, ownerId: user.id })
      await this.analytics.trackUserActivity(user.id, "registration", { userType: "entrepreneur" })
      return { user, business }
    } catch (error) {
      console.error("Error registering entrepreneur:", error)
      throw error
    }
  }

  async registerFunder(userData: any, fundingPreferences: any) {
    try {
      const user = await this.users.createUser({ ...userData, role: "funder" })
      await this.analytics.trackUserActivity(user.id, "registration", { userType: "funder" })
      return { user, preferences: fundingPreferences }
    } catch (error) {
      console.error("Error registering funder:", error)
      throw error
    }
  }

  async initiateMatching(userId: string, matchType: string, criteria: any) {
    try {
      const matches = await this.matching.findMatches(userId, matchType, criteria)
      await this.analytics.trackUserActivity(userId, "matching_search", { matchType, criteria })
      return matches
    } catch (error) {
      console.error("Error finding matches:", error)
      throw error
    }
  }
}
