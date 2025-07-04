import { type NextRequest, NextResponse } from "next/server"

// Mock data for demonstration
const mockCompanies = [
  {
    id: "1",
    name: "Tech Solutions Inc",
    industry: "Technology",
    location: "Cape Town, South Africa",
    employees: "10-50",
    lookingFor: ["Funding", "Partners"],
    fundingType: ["Seed", "Series A"],
    rating: 4.8,
    fundingNeeded: true,
  },
  {
    id: "2",
    name: "Green Energy Co",
    industry: "Energy",
    location: "Johannesburg, South Africa",
    employees: "50-100",
    lookingFor: ["Suppliers", "Customers"],
    fundingType: ["Series B"],
    rating: 4.5,
    fundingNeeded: false,
  },
  {
    id: "3",
    name: "FinTech Startup",
    industry: "Finance",
    location: "Durban, South Africa",
    employees: "5-20",
    lookingFor: ["Funding", "Mentorship"],
    fundingType: ["Angel", "Seed"],
    rating: 4.9,
    fundingNeeded: true,
  },
]

export async function POST(request: NextRequest) {
  try {
    const criteria = await request.json()

    // Simple matching algorithm (in production, this would be more sophisticated)
    let matches = mockCompanies.filter((company) => {
      if (criteria.industry && company.industry !== criteria.industry) {
        return false
      }
      if (criteria.location && !company.location.includes(criteria.location)) {
        return false
      }
      if (criteria.minRating && company.rating < criteria.minRating) {
        return false
      }
      if (criteria.fundingNeeded !== undefined && company.fundingNeeded !== criteria.fundingNeeded) {
        return false
      }
      return true
    })

    // Sort by rating
    matches = matches.sort((a, b) => b.rating - a.rating)

    return NextResponse.json({
      matches,
      total: matches.length,
    })
  } catch (error) {
    console.error("Error finding matches:", error)
    return NextResponse.json({ error: "Failed to find matches" }, { status: 500 })
  }
}
