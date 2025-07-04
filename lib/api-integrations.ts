// API integration utilities for external services

export class StripeAPI {
  private apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async createPaymentIntent(amount: number, currency = "usd") {
    const response = await fetch("/api/stripe/payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, currency }),
    })
    return response.json()
  }

  async createCustomer(email: string, name: string) {
    const response = await fetch("/api/stripe/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name }),
    })
    return response.json()
  }

  async createSubscription(customerId: string, priceId: string) {
    const response = await fetch("/api/stripe/subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerId, priceId }),
    })
    return response.json()
  }
}

export class QuickBooksAPI {
  private accessToken: string

  constructor(accessToken: string) {
    this.accessToken = accessToken
  }

  async getCompanyInfo(companyId: string) {
    const response = await fetch(`/api/quickbooks/company/${companyId}`, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    })
    return response.json()
  }

  async createInvoice(invoiceData: any) {
    const response = await fetch("/api/quickbooks/invoice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify(invoiceData),
    })
    return response.json()
  }

  async getCustomers() {
    const response = await fetch("/api/quickbooks/customers", {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    })
    return response.json()
  }
}

export class SalesforceAPI {
  private accessToken: string

  constructor(accessToken: string) {
    this.accessToken = accessToken
  }

  async createLead(leadData: any) {
    const response = await fetch("/api/salesforce/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify(leadData),
    })
    return response.json()
  }

  async updateOpportunity(opportunityId: string, data: any) {
    const response = await fetch(`/api/salesforce/opportunity/${opportunityId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify(data),
    })
    return response.json()
  }
}

export class HubSpotAPI {
  private apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async createContact(contactData: any) {
    const response = await fetch("/api/hubspot/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(contactData),
    })
    return response.json()
  }

  async createDeal(dealData: any) {
    const response = await fetch("/api/hubspot/deal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(dealData),
    })
    return response.json()
  }
}

export class DocumentStorageAPI {
  async uploadDocument(file: File, category: string, userId: string) {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("category", category)
    formData.append("userId", userId)

    const response = await fetch("/api/documents/upload", {
      method: "POST",
      body: formData,
    })
    return response.json()
  }

  async getDocuments(userId: string) {
    const response = await fetch(`/api/documents/${userId}`)
    return response.json()
  }

  async deleteDocument(documentId: string) {
    const response = await fetch(`/api/documents/${documentId}`, {
      method: "DELETE",
    })
    return response.json()
  }

  async shareDocument(documentId: string, recipientId: string) {
    const response = await fetch("/api/documents/share", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ documentId, recipientId }),
    })
    return response.json()
  }
}

export class MatchingAPI {
  async findMatches(criteria: any) {
    const response = await fetch("/api/matching/find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(criteria),
    })
    return response.json()
  }

  async createConnection(fromUserId: string, toUserId: string, connectionType: string) {
    const response = await fetch("/api/matching/connect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fromUserId, toUserId, connectionType }),
    })
    return response.json()
  }

  async updateMatchingPreferences(userId: string, preferences: any) {
    const response = await fetch(`/api/matching/preferences/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferences),
    })
    return response.json()
  }
}

export class NotificationAPI {
  async sendNotification(userId: string, message: string, type: string) {
    const response = await fetch("/api/notifications/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, message, type }),
    })
    return response.json()
  }

  async getNotifications(userId: string) {
    const response = await fetch(`/api/notifications/${userId}`)
    return response.json()
  }

  async markAsRead(notificationId: string) {
    const response = await fetch(`/api/notifications/${notificationId}/read`, {
      method: "PATCH",
    })
    return response.json()
  }
}
