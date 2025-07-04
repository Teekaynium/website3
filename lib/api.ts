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
}

export class DocumentStorageAPI {
  async uploadDocument(file: File, category: string) {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("category", category)

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

  async createConnection(fromUserId: string, toUserId: string) {
    const response = await fetch("/api/matching/connect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fromUserId, toUserId }),
    })
    return response.json()
  }
}
